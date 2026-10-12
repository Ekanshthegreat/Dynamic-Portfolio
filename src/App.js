import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ThemeContext } from "./ThemeContext";
import Main from "./components/Main";
import NotFound404 from "./components/NotFound404";
import DetailLayout from "./components/DetailLayout";
import Research from "./pages/Research";
import Mercury from "./pages/Mercury";
import NodeAI from "./pages/NodeAI";
import { lightTheme, darkTheme } from "./Theme";
import pages from "./content/pages.json";
function PageMetadata() {
  const location = useLocation();
  useEffect(() => {
    const route = location.pathname.replace(/\/$/, "") || "/";
    const meta = pages[route];
    document.title = `${meta?.title || "Page not found"} | Ekansh Chawla`;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", meta?.description || "Page not found.");
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute("href", `https://dynamic-portfolio-pi.vercel.app${route}`);
    if (location.hash) {
      requestAnimationFrame(() =>
        document
          .getElementById(decodeURIComponent(location.hash.slice(1)))
          ?.scrollIntoView(),
      );
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
  return null;
}
export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") === "dark" ? "dark" : "light";
    } catch {
      return "light";
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <CssBaseline />
        <BrowserRouter>
          <PageMetadata />
          <a className="skip-link" href="#main-content">
            Skip to content
          </a>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/research"
              element={
                <DetailLayout>
                  <Research />
                </DetailLayout>
              }
            />
            <Route
              path="/projects/mercury"
              element={
                <DetailLayout>
                  <Mercury />
                </DetailLayout>
              }
            />
            <Route
              path="/projects/nodeai"
              element={
                <DetailLayout>
                  <NodeAI />
                </DetailLayout>
              }
            />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
