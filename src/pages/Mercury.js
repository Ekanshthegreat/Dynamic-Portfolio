import React from "react";
import { Link } from "react-router-dom";
export default function Mercury() {
  return (
    <article className="page">
      <Link className="back" to="/#Projects">
        ← Selected work
      </Link>
      <p className="eyebrow">Systems project / C++20</p>
      <h1>
        Mercury<span className="brand-dot">.</span>
      </h1>
      <p className="subtitle">A market-microstructure research engine.</p>
      <p className="page-intro">
        A deterministic order book and state-dependent event simulator, forming
        a testable foundation for execution research.
      </p>
      <div className="status">
        <span className="status-dot" /> Current implementation: matching engine
        + stochastic simulator
      </div>
      <p className="source-pending">GitHub source — coming soon</p>
      <div className="architecture" aria-label="Mercury architecture">
        <div>
          <span>01 / INPUT</span>
          <strong>Seed &amp; model parameters</strong>
          <p>Reproducible random streams</p>
        </div>
        <b aria-hidden="true">→</b>
        <div>
          <span>02 / GENERATION</span>
          <strong>State-dependent order flow</strong>
          <p>Limit, cancel &amp; market events</p>
        </div>
        <b aria-hidden="true">→</b>
        <div>
          <span>03 / EXECUTION</span>
          <strong>Price-time-priority book</strong>
          <p>Fills, state &amp; event statistics</p>
        </div>
      </div>
      <div className="article-grid">
        <aside>
          <p className="eyebrow">Project notes</p>
          <a href="#problem">Research direction</a>
          <a href="#implementation">Implementation</a>
          <a href="#testing">Testing &amp; performance</a>
          <a href="#roadmap">Next steps</a>
        </aside>
        <div className="prose">
          <section id="problem">
            <h2>Build the market before testing the policy.</h2>
            <p>
              The research direction is to investigate whether automated search
              can identify plausible market regimes where standard execution
              policies struggle. The implemented foundation supplies order
              matching and synthetic order flow; policy evaluation and regime
              search remain future work.
            </p>
          </section>
          <section id="implementation">
            <h2>Explicit rules. Inspectable events.</h2>
            <p>
              The C++20 matching engine uses price-time priority. The simulator
              drives it with limit orders, cancellations, and market orders,
              with event rates linked to queue imbalance and bid–ask spread.
            </p>
            <p>
              A seeded random-number generator and virtual clock support
              repeatable runs. Optional event recording captures timestamps,
              order details, fills, and mid-prices before and after each event.
              A CLI exposes the engine for demonstrations and experiments.
            </p>
            <div className="note">
              <strong>Modeling boundary</strong>
              <p>
                Synthetic order flow is a research model, not a calibrated
                reproduction of a specific exchange. The optional excitation
                mechanism is a Markov-modulated approximation, not an exact
                continuous-time Hawkes process.
              </p>
            </div>
          </section>
          <section id="testing">
            <h2>Correctness before a latency claim.</h2>
            <p>
              The repository includes order-book invariant and property tests,
              along with simulator tests for repeated-seed behavior, seed
              divergence, parameter response, state coupling, and buy/sell
              symmetry.
            </p>
            <p>
              A submission-latency benchmark provides a measurement harness.
              Results depend on the processor, compiler, build flags, and
              workload; no hardware-independent latency number is claimed here.
            </p>
            <p>
              CMake supports AddressSanitizer and UndefinedBehaviorSanitizer
              builds. The implementation is CPU-based C++; GPU acceleration is
              not part of the current engine.
            </p>
          </section>
          <section id="roadmap">
            <h2>From infrastructure to experiments.</h2>
            <p>
              Next steps are execution-policy baselines, statistical comparisons
              across market regimes, and automated search over model parameters.
              These are research plans rather than completed results.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
