import React from "react";
import { Link } from "react-router-dom";
import External from "../components/External";
import { zenodo, paper, code } from "../content/links";
export default function Research() {
  return (
    <article className="page research-page">
      <Link className="back" to="/#Research">
        ← Selected work
      </Link>
      <p className="eyebrow">Independent research / Working paper</p>
      <h1>
        Fewer Rebalances,
        <br />
        <em>Lower Costs?</em>
      </h1>
      <p className="subtitle">Target Dynamics and Portfolio Implementation</p>
      <div className="paper-meta">
        <span>Ekansh Chawla</span>
        <span>11 October 2026</span>
        <External href="https://doi.org/10.5281/zenodo.23298207">
          DOI: 10.5281/zenodo.23298207
        </External>
      </div>
      <div className="actions">
        <a className="button" href={paper}>
          Download paper <span>↓</span>
        </a>
        <External className="text-link" href={zenodo}>
          Zenodo record
        </External>
        <External className="text-link" href={code}>
          Code &amp; results
        </External>
      </div>
      <div className="abstract">
        <p className="eyebrow">Abstract (condensed)</p>
        <p>
          Does reducing the number of portfolio rebalances meaningfully reduce
          implementation costs? This retrospective study compares calendar and
          deviation-based policies while holding the target strategy fixed. With
          moving targets, a large reduction in rebalance events produces only a
          small reduction in traded notional. Trading frequency, turnover, and
          tracking error capture different parts of the implementation problem.
        </p>
      </div>
      <figure className="paper-figure">
        <img
          src="/research/rebalancing-mechanism.png"
          alt="Figure 1: rebalance events, sleeve trades and traded notional across policies. Selection-changing events make up 48.5% of calendar events but 96.3% of notional."
        />
        <figcaption>
          Figure 1. Policy comparisons from the manuscript. Results are
          historical simulations under the study’s cost assumptions.
          <a className="figure-full" href="/research/rebalancing-mechanism.png">
            Open full-size figure ↗
          </a>
        </figcaption>
      </figure>
      <div className="article-grid">
        <aside>
          <p className="eyebrow">Inside the study</p>
          <a href="#findings">Key findings</a>
          <a href="#method">Methodology</a>
          <a href="#limitations">Limitations</a>
          <a href="#reproduce">Reproducibility</a>
        </aside>
        <div className="prose">
          <section id="findings">
            <h2>Frequency is only part of the cost.</h2>
            <p>
              At a 0.10 deviation threshold over 2015–2025, the event-triggered
              policy reduced rebalance events from 132 to 68: a{" "}
              <strong>48.5% reduction</strong>. Traded notional fell by just{" "}
              <strong>2.7%</strong>.
            </p>
            <p>
              At an assumed cost of 10 basis points per dollar traded, that
              amounts to approximately{" "}
              <strong>1.36 basis points of annual cost savings</strong>. Less
              frequent decisions can still require large trades as the desired
              portfolio changes.
            </p>
            <p>
              A boundary policy saved more in assumed costs, but introduced
              tracking error. The primary adjusted confidence intervals included
              zero; these comparisons do not establish a reliable performance
              advantage.
            </p>
          </section>
          <section id="method">
            <h2>One target strategy. Different implementation rules.</h2>
            <p>
              The study uses the Kenneth French 10-industry portfolios and a
              top-three momentum target, with a 252-day lookback and a 21-day
              skip. Calendar and deviation-based policies follow the same
              targets.
            </p>
            <ul>
              <li>
                Lagged execution separates information available to the decision
                from subsequent returns.
              </li>
              <li>
                Self-financing accounting deducts proportional trading costs.
              </li>
              <li>
                Paired block bootstraps use 4,000 replicates and block lengths
                of 5, 21, and 63 days.
              </li>
              <li>
                Exploratory checks cover fixed targets, alternative periods,
                thresholds, and a 30-industry universe.
              </li>
            </ul>
          </section>
          <section id="limitations">
            <h2>What this does—and doesn’t—show.</h2>
            <p>
              This is a retrospective working paper, not a peer-reviewed
              publication or a live trading record. Transaction costs are
              modeled rather than observed executions; market impact, taxes, and
              capacity are not fully represented.
            </p>
            <p>
              Extensions are exploratory. The results describe the tested target
              strategy and data, and do not identify an optimal execution rule
              or establish out-of-sample alpha.
            </p>
          </section>
          <section id="reproduce">
            <h2>Inspect the work.</h2>
            <p>
              The Zenodo release includes the paper, editable LaTeX source,
              original code, result tables, and checksums. The paper is licensed
              under CC BY 4.0; original code uses the MIT license.
            </p>
            <div className="actions">
              <External className="text-link" href={code}>
                Download code &amp; results
              </External>
              <External
                className="text-link"
                href={`${zenodo}/files/rebalancing-overleaf-v1.0.0.zip?download=1`}
              >
                LaTeX source
              </External>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
