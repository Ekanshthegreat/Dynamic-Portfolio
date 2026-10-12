import React from "react";
import { Link } from "react-router-dom";
import { stateValidityPaper, stateValidityCode, stateValidityLatex } from "../content/links";

export default function StateValidity() {
  return (
    <article className="page research-page">
      <Link className="back" to="/#Research">← Research studies</Link>
      <p className="eyebrow">ML systems / Independent technical report</p>
      <h1>When Timely Answers<br /><em>Become Obsolete</em></h1>
      <p className="subtitle">A Model-Based Study of State-Validity-Aware Inference Scheduling</p>
      <div className="paper-meta">
        <span>Ekansh Chawla</span><span>12 October 2026</span><span>Version 1.0.1 · Unreviewed</span>
      </div>
      <div className="actions">
        <a className="button" href={stateValidityPaper}>Read paper <span>↗</span></a>
        <a className="text-link" href={stateValidityCode} download>Code &amp; results ↓</a>
        <a className="text-link" href={stateValidityLatex} download>LaTeX source ↓</a>
      </div>
      <div className="abstract">
        <p className="eyebrow">The question</p>
        <p>An answer can arrive before its deadline and still be useless if the state it describes has changed. After every scheduler can cancel obsolete work, does using past state-change rates help choose which remaining requests to serve?</p>
      </div>
      <figure className="paper-figure">
        <img src="/research/state-validity/group-results.svg" alt="Apple GPU confirmation: aggregate decision success rises from 5.78% to 7.66%, while higher-change agents fall from 1.56% to 0.21% with survival prioritization." />
        <figcaption>Measured native confirmation at 16 agents and a base change rate of 4/s. Bars are mean opportunity success over 20 paired seeds. Aggregate improvement hides a substantial service trade-off.
          <a className="figure-full" href="/research/state-validity/group-results.svg">Open full-size figure ↗</a>
        </figcaption>
      </figure>
      <div className="article-grid">
        <aside>
          <p className="eyebrow">Inside the study</p>
          <a href="#findings">Findings</a><a href="#implementation">Implementation</a>
          <a href="#method">Evaluation</a><a href="#limitations">Limits</a><a href="#reproduce">Reproduce</a>
        </aside>
        <div className="prose">
          <section id="findings">
            <h2>A useful answer needs to survive until the decision.</h2>
            <p>The diagnostic heuristic combines estimated remaining work, request age, deadline feasibility and historical relevant state-change rates. Its matched “no hazard” control removes only the rate factor, helping distinguish freshness effects from ordinary size and deadline preferences.</p>
            <p>In the 16-agent high-change native condition, aggregate success increases from <strong>5.78% to 7.66%</strong> against that matched control. But higher-change agents fall from <strong>1.56% to 0.21%</strong>. The aggregate gain is not a service guarantee.</p>
            <p>The native asynchronous controls do not retain an advantage over the no-hazard policy. The positive finding is conditional on the tested timing pattern, rather than a general scheduling improvement.</p>
          </section>
          <section id="implementation">
            <h2>Simulation, then separate real inference.</h2>
            <p>A Python discrete-event simulator models chunked prefill, continuous decode batching, bounded KV capacity, cancellation at iteration boundaries, and eviction with recomputation. Scheduling features use observed history and length priors, never the realized future output length.</p>
            <p>A separate MLX harness runs a pinned 4-bit Qwen3-0.6B checkpoint on an Apple M5 GPU. It measures synchronized execution costs and replays requests with explicit version checks, cancellation, and a typed JSON-payload validator. Policies choose admission into a fixed batcher; this does not implement the simulator’s cache and preemption policy.</p>
          </section>
          <section id="method">
            <h2>Count missed opportunities as well as completions.</h2>
            <p>The primary denominator includes every externally defined decision opportunity, even if the scheduler rejects a request or its output is stale, late, incomplete or incorrect.</p>
            <ul>
              <li><strong>6,545 simulation policy runs:</strong> initial pilot, 31-scenario confirmation and exploratory mechanism controls.</li>
              <li><strong>480 real-model replays:</strong> 80 pilot runs, 320 confirmation runs and 80 supplemental controls.</li>
              <li><strong>84 measured GPU microbenchmark repetitions</strong> across 12 batch-size and prompt-length conditions.</li>
              <li><strong>17 correctness tests</strong> plus exact outcome reproduction of 21 saved simulation runs.</li>
            </ul>
            <p>Paired traces, disjoint phase seeds, original source snapshots, protocols, generated outputs and descriptive bootstrap intervals are retained. Local protocol freezing is not public preregistration.</p>
          </section>
          <section id="limitations">
            <h2>What the evidence supports.</h2>
            <p>This is an unreviewed technical report, not a conference-accepted paper. The heuristic is not claimed novel or optimal, and the controls are local implementations rather than reproductions of published serving systems.</p>
            <p>Simulation timing coefficients are uncalibrated. Native measurements use one Apple GPU, one small quantized model and a synthetic structured-copying task. The imposed concurrency cap and 600-ms decision period are experimental settings. These results do not validate autonomous planning, NVIDIA/CUDA serving performance or deployment readiness.</p>
            <p>The next tests need application-grounded workloads, matched serving-system baselines and explicit service floors for agents whose state changes frequently.</p>
          </section>
          <section id="reproduce">
            <h2>Inspect the full artifact.</h2>
            <p>The release contains the 14-page report, nine figures, editable LaTeX, original code, raw observations, archived experiment sources, protocols and checksums. Model weights are downloaded separately. The report and figures use CC BY 4.0; original code uses MIT.</p>
            <div className="actions">
              <a className="text-link" href={stateValidityCode} download>Download code &amp; results</a>
              <a className="text-link" href={stateValidityLatex} download>Download Overleaf source</a>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
