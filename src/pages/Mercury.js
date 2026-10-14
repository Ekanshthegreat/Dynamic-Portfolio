import React from "react";
import { Link } from "react-router-dom";
import External from "../components/External";
export default function Mercury() {
  return (
    <article className="page">
      <Link className="back" to="/#Projects">← Selected work</Link>
      <p className="eyebrow">Quantitative systems / C++20</p>
      <h1>Mercury<span className="brand-dot">.</span></h1>
      <p className="subtitle">An execution and market-microstructure laboratory.</p>
      <p className="page-intro">A price-time-priority order book, seeded market streams and five execution policies, with reproducible synthetic stress experiments.</p>
      <div className="actions">
        <External className="button" href="https://ekanshthegreat.github.io/Mercury/">Explore the experiment report</External>
        <External className="text-link" href="https://github.com/Ekanshthegreat/Mercury">View source on GitHub</External>
      </div>
      <div className="architecture" aria-label="Mercury experiment architecture">
        <div><span>01 / MARKET</span><strong>Seeded external event tape</strong><p>State-dependent synthetic order flow</p></div><b aria-hidden="true">→</b>
        <div><span>02 / EXECUTION</span><strong>Five isolated policy books</strong><p>Shared inputs · causal decisions</p></div><b aria-hidden="true">→</b>
        <div><span>03 / EVIDENCE</span><strong>Fills, costs and tail statistics</strong><p>CSV · replay tapes · report</p></div>
      </div>
      <div className="article-grid">
        <aside><p className="eyebrow">Project notes</p><a href="#mercury-execution">Execution policies</a><a href="#mercury-experiments">Stress experiments</a><a href="#mercury-checks">Verification</a><a href="#mercury-scope">Scope</a></aside>
        <div className="prose">
          <section id="mercury-execution"><h2>Compare policies on the same market stream.</h2><p>Aggressive, TWAP, participation-of-volume, passive and adaptive policies replay one frozen external tape through separate order books. Each policy sees current observations, rather than future events. Exact match records account for executed prices, maker/taker fees and residual inventory.</p><p>Saved tapes preserve the initial book and external events. The replay command evaluates all five policies without regenerating market flow. Bounded loading and integrity checks reject malformed or corrupted inputs.</p></section>
          <section id="mercury-experiments"><h2>Search, then evaluate on separate seeds.</h2><p>Bounded random search selects a synthetic regime using TWAP CVaR95 on training seeds. The committed reference evaluates the selected regime and market-intensity neighbors on 128 disjoint seeds.</p><p>In that reference, TWAP's mean cost rises from 1.220 to 5.724 ticks per share between the baseline and selected regime; CVaR95 rises from 4.143 to 15.022. These are measured outcomes inside the model, not a calibrated real-market result.</p><p>The hosted report includes policy comparisons, uncertainty estimates and downloadable raw fills, decisions, configuration and replay files.</p></section>
          <section id="mercury-checks"><h2>Reconcile the accounting.</h2><p>58 C++ cases and four end-to-end checks cover matching invariants, reference-model comparisons, causal policy prefixes, exact fill accounting, serial/parallel equivalence and tape replay. Linux and macOS CI run strict Release and address/undefined-behavior sanitizer builds.</p><p>A fresh-clone script builds, tests and reproduces the reference report. Replaying a saved first seed matches its original policy outcomes within the same build.</p></section>
          <section id="mercury-scope"><h2>Model assumptions.</h2><p>The market is synthetic and uncalibrated. Policy orders affect their replayed queues and fills, while external arrival rates stay frozen. The engine is CPU-based; exchange connectivity, empirical calibration and GPU acceleration remain outside this release.</p><External className="text-link" href="https://github.com/Ekanshthegreat/Mercury/blob/main/docs/EXPERIMENTS.md">Experiment design and accounting ↗</External></section>
        </div>
      </div>
    </article>
  );
}
