import React from "react";
import { Link } from "react-router-dom";
import External from "../components/External";
export default function Mentral() {
  return (
    <article className="page">
      <Link className="back" to="/#Projects">
        ← Selected work
      </Link>
      <p className="eyebrow">Hack the North 2025 / VS Code extension</p>
      <h1>
        Mentral<span className="brand-dot">.</span>
      </h1>
      <p className="subtitle">Programming guidance beside the editor.</p>
      <p className="page-intro">
        A hackathon prototype that combines editor context, local code
        diagnostics and configurable mentor profiles in a VS Code sidebar.
      </p>
      <div className="actions">
        <External
          className="button"
          href="https://github.com/Ekanshthegreat/Mentral.AI-hackTheNorth2025"
        >
          View source on GitHub
        </External>
        <External
          className="text-link"
          href="https://github.com/Ekanshthegreat/Mentral.AI-hackTheNorth2025/blob/main/docs/DEMO.md"
        >
          Development-host walkthrough ↗
        </External>
      </div>
      <div className="architecture" aria-label="Mentral explanation flow">
        <div>
          <span>01 / CONTEXT</span>
          <strong>Editor text and selection</strong>
          <p>Document events and local parsing</p>
        </div>
        <b aria-hidden="true">→</b>
        <div>
          <span>02 / ANALYSIS</span>
          <strong>Rules and mentor prompts</strong>
          <p>Babel metadata · selected profile</p>
        </div>
        <b aria-hidden="true">→</b>
        <div>
          <span>03 / FEEDBACK</span>
          <strong>Diagnostics and explanations</strong>
          <p>Editor feedback · sidebar responses</p>
        </div>
      </div>
      <div className="article-grid">
        <aside>
          <p className="eyebrow">Project notes</p>
          <a href="#mentral-context">Hackathon idea</a>
          <a href="#mentral-design">Implementation</a>
          <a href="#mentral-checks">Verification</a>
          <a href="#mentral-scope">Scope</a>
        </aside>
        <div className="prose">
          <section id="mentral-context">
            <h2>Keep the code in context.</h2>
            <p>
              Switching between the editor and a chat window means repeatedly
              copying code and explaining where it belongs. Mentral explores
              bringing that interaction into VS Code: select code, choose a
              mentor preset, and ask for an explanation beside the file.
            </p>
            <p>
              The repository retains the Hack the North 2025 prototype, with a
              clean installation path, a documented demo and inspectable
              implementation.
            </p>
          </section>
          <section id="mentral-design">
            <h2>Local feedback and generated explanations.</h2>
            <p>
              Babel parses JavaScript and TypeScript declarations. Local hover
              and diagnostic rules inspect code patterns, while a separate
              provider path sends selected code and analysis context to Gemini
              or OpenAI. Mentor profiles configure prompts and advice;
              GitHub-generated profiles are inferred presets.
            </p>
            <p>
              The experimental voice client runs through a loopback browser
              bridge. It uses the user's own Vapi public key and assistant.
              Optional session summaries are sent through an explicit email
              command.
            </p>
          </section>
          <section id="mentral-checks">
            <h2>A reproducible development setup.</h2>
            <p>
              A lockfile and CI support clean installation and compilation. Four
              automated checks cover declaration source locations, TypeScript
              parameters, unsupported-language behavior and the voice server's
              loopback lifecycle. The sidebar also loaded in an isolated VS Code
              development host.
            </p>
            <p>
              The README includes an actual development-host screenshot, setup
              instructions and a short walkthrough. Manual editor fixtures are
              kept separate from automated tests.
            </p>
          </section>
          <section id="mentral-scope">
            <h2>Hackathon scope.</h2>
            <p>
              Explanations are based on editor text and static metadata, rather
              than observed runtime values. Python extraction is limited, and
              the core AST parser does not support Java or C++. Live provider
              responses, voice calls and email delivery need separate
              integration validation.
            </p>
            <p>
              The extension has no Marketplace release. Stronger response
              validation, credential storage and extension-host tests remain
              useful next steps.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
