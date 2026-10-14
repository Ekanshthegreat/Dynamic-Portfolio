import React from "react";
import { Link } from "react-router-dom";
import External from "../components/External";
export default function NodeAI() {
  return (
    <article className="page">
      <Link className="back" to="/#Projects">
        ← Selected work
      </Link>
      <p className="eyebrow">Systems project / TypeScript and ROS 2</p>
      <h1>
        NodeAI<span className="brand-dot">.</span>
      </h1>
      <p className="subtitle">Robot missions, navigation and replay.</p>
      <p className="page-intro">
        A browser fleet simulator and a separate ROS 2 Jazzy bridge for real
        Nav2 actions. The simulator runs without an account, backend or robot
        hardware.
      </p>
      <div className="actions">
        <External
          className="button"
          href="https://ekanshthegreat.github.io/NodeAI-rework/"
        >
          Open the simulator
        </External>
        <External
          className="text-link"
          href="https://github.com/Ekanshthegreat/NodeAI-rework"
        >
          View source on GitHub
        </External>
      </div>
      <div className="architecture" aria-label="NodeAI mission architecture">
        <div>
          <span>01 / PLAN</span>
          <strong>Command → validated mission</strong>
          <p>Typed subtasks · eligible robot</p>
        </div>
        <b aria-hidden="true">→</b>
        <div>
          <span>02 / EXECUTE</span>
          <strong>Fixed-step state machine</strong>
          <p>A* routes · bounded recovery</p>
        </div>
        <b aria-hidden="true">→</b>
        <div>
          <span>03 / INSPECT</span>
          <strong>Recorded frames and events</strong>
          <p>Seek · playback · JSON export</p>
        </div>
      </div>
      <div className="article-grid">
        <aside>
          <p className="eyebrow">Project notes</p>
          <a href="#nodeai-simulation">Local execution</a>
          <a href="#nodeai-ros">ROS navigation</a>
          <a href="#nodeai-checks">Verification</a>
          <a href="#nodeai-scope">Scope</a>
        </aside>
        <div className="prose">
          <section id="nodeai-simulation">
            <h2>Follow a mission through failure and recovery.</h2>
            <p>
              Supported commands compile into typed mission plans. Three
              simulated robots execute navigation, delivery, inspection,
              charging and docking tasks. A four-neighbour A* planner respects
              static obstacles and no-go regions.
            </p>
            <p>
              Blocking a robot exercises a bounded replacement policy. A
              replacement carrying out a delivery can visit the stopped robot
              for a simulated cargo handoff. Unavailable replacements or
              exhausted retries produce explicit failures.
            </p>
            <p>
              Mission replay reads captured frames and events, with seek and
              speed controls. Validated browser snapshots preserve the fleet
              between visits, and runs can be exported as JSON.
            </p>
          </section>
          <section id="nodeai-ros">
            <h2>A separate path for Nav2.</h2>
            <p>
              The ROS bridge sends actual NavigateToPose actions and subscribes
              to localization and battery telemetry. Single-pose commands and
              routes of up to 20 waypoints share one robot assignment. Later
              waypoint dispatches recheck readiness.
            </p>
            <p>
              Cancellation waits for the action's terminal result. Uncertain
              outcomes hold the assignment, and per-leg callback guards prevent
              stale feedback from changing a later waypoint. Nav2 owns robot
              planning and motion; the simulator's A* routes are not sent to
              hardware.
            </p>
          </section>
          <section id="nodeai-checks">
            <h2>Check the state transitions.</h2>
            <p>
              The repository has 56 TypeScript checks and 30 ROS
              lifecycle/integration checks. Real ROS action clients and servers
              exercise waypoint completion, later rejection and cancellation in
              a Jazzy fixture. CI builds both paths.
            </p>
            <p>
              The browser demo was exercised through dispatch, fault injection,
              replacement recovery and replay. Its default 2D workspace also
              works without WebGL.
            </p>
          </section>
          <section id="nodeai-scope">
            <h2>Current boundaries.</h2>
            <p>
              Local robots are point agents on a static map. Fleet collision
              avoidance, dynamic traffic and physical pickup or docking
              protocols remain outside the simulator. The ROS path was validated
              against an action fixture; physical robots and a full Nav2
              deployment still need validation.
            </p>
            <External
              className="text-link"
              href="https://github.com/Ekanshthegreat/NodeAI-rework/blob/main/docs/ROS2.md"
            >
              ROS deployment guide
            </External>
          </section>
        </div>
      </div>
    </article>
  );
}
