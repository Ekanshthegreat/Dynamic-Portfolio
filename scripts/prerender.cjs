// Produce real HTML and per-route metadata without changing the React/CRA stack.
const fs = require("fs");
const path = require("path");
const babel = require("@babel/core");
const React = require("react");
const { renderToString } = require("react-dom/server");
const { StaticRouter } = require("react-router-dom/server");
const pages = require("../src/content/pages.json");
const root = path.resolve(__dirname, "..");
const originalJsLoader = require.extensions[".js"];
require.extensions[".css"] = () => {};
require.extensions[".js"] = (module, filename) => {
  if (!filename.startsWith(path.join(root, "src") + path.sep))
    return originalJsLoader(module, filename);
  const result = babel.transformFileSync(filename, {
    babelrc: false,
    configFile: false,
    presets: [
      [require.resolve("@babel/preset-env"), { targets: { node: "current" } }],
      require.resolve("@babel/preset-react"),
    ],
  });
  module._compile(result.code, filename);
};
const articlePages = {
  "/research/state-validity": require("../src/pages/StateValidity").default,
  "/research": require("../src/pages/Research").default,
  "/projects/mercury": require("../src/pages/Mercury").default,
  "/projects/nodeai": require("../src/pages/NodeAI").default,
};
const template = fs.readFileSync(path.join(root, "build/index.html"), "utf8");
const escape = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;");
const renderPages = {
  ...pages,
  "/404": {
    title: "Page not found",
    description:
      "This page could not be found. Return to Ekansh Chawla’s portfolio.",
  },
};
for (const [route, meta] of Object.entries(renderPages)) {
  const title = `${meta.title} | Ekansh Chawla`;
  const url = `https://dynamic-portfolio-pi.vercel.app${route}`;
  const Page = articlePages[route];
  const body = Page
    ? renderToString(
        React.createElement(
          StaticRouter,
          { location: route },
          React.createElement(
            "div",
            { className: "project-document" },
            React.createElement(Page),
          ),
        ),
      )
    : "";
  const html = template
    .replace(/<title>.*?<\/title>/, `<title>${escape(title)}</title>`)
    .replace(
      /<meta name="description" content="[^"]*"\/?\s*>/,
      `<meta name="description" content="${escape(meta.description)}"/>`,
    )
    .replace(
      /<meta property="og:title" content="[^"]*"\/?\s*>/,
      `<meta property="og:title" content="${escape(title)}"/>`,
    )
    .replace(
      /<meta property="og:description" content="[^"]*"\/?\s*>/,
      `<meta property="og:description" content="${escape(meta.description)}"/>`,
    )
    .replace(
      /<meta property="og:url" content="[^"]*"\/?\s*>/,
      `<meta property="og:url" content="${url}"/>`,
    )
    .replace(
      /<link rel="canonical" href="[^"]*"\/?\s*>/,
      `<link rel="canonical" href="${url}"/>`,
    )
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  const output = route === "/" ? "index.html" : `${route.slice(1)}.html`;
  fs.mkdirSync(path.dirname(path.join(root, "build", output)), {
    recursive: true,
  });
  fs.writeFileSync(
    path.join(root, "build", output),
    route === "/404"
      ? html.replace(
          "</head>",
          '<meta name="robots" content="noindex"/></head>',
        )
      : html,
  );
}
console.log(
  `Prerendered ${Object.keys(pages).length} routes with unique metadata.`,
);
