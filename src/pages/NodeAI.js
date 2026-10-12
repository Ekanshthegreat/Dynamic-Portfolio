import React from "react";
import { Link } from "react-router-dom";
import External from "../components/External";
export default function NodeAI() {
  return (
    <article className="page">
      <Link className="back" to="/#Projects">
        ← Selected work
      </Link>
      <p className="eyebrow">Systems project / TypeScript</p>
      <h1>
        NodeAI<span className="brand-dot">.</span>
      </h1>
      <p className="subtitle">Robot fleet orchestration.</p>
      <p className="page-intro">
        A prototype for translating tasks into mission plans, tracking robot
        state, and responding when a mission can no longer proceed as planned.
      </p>
      <div className="actions">
        <External
          className="button"
          href="https://github.com/Ekanshthegreat/NodeAI-rework"
        >
          View source on GitHub
        </External>
        <span className="status">
          <span className="status-dot" /> Prototype · simulation and adapter
          development
        </span>
      </div>
      <div className="architecture" aria-label="NodeAI mission architecture">
        <div>
          <span>01 / PLAN</span>
          <strong>Mission → typed subtasks</strong>
          <p>Schema validation &amp; robot selection</p>
        </div>
        <b aria-hidden="true">→</b>
        <div>
          <span>02 / ROUTE</span>
          <strong>Paths → adapter dispatch</strong>
          <p>Grid planning · WebSockets · MQTT</p>
        </div>
        <b aria-hidden="true">→</b>
        <div>
          <span>03 / OBSERVE</span>
          <strong>Telemetry → policy checks</strong>
          <p>State updates &amp; reassignment</p>
        </div>
      </div>
      <div className="article-grid">
        <aside>
          <p className="eyebrow">Project notes</p>
          <a href="#nodeai-problem">Problem</a>
          <a href="#nodeai-architecture">Architecture</a>
          <a href="#nodeai-challenges">Engineering challenges</a>
          <a href="#nodeai-status">Current scope</a>
        </aside>
        <div className="prose">
          <section id="nodeai-problem">
            <h2>One mission. Multiple moving parts.</h2>
            <p>
              Fleet coordination means more than drawing a route. A task has to
              become a structured plan, be assigned to a robot, move through a
              transport interface, and remain visible as robot state changes.
            </p>
            <p>
              NodeAI explores that workflow with a React and TypeScript control
              interface, a 3D site view, typed plans, and event-driven
              telemetry. Supabase modules provide authentication, persistence,
              and map-storage integration.
            </p>
          </section>
          <section id="nodeai-architecture">
            <h2>Keep planning separate from transport.</h2>
            <ul>
              <li>
                <strong>Mission planning:</strong> a local pattern-based
                compiler translates supported delivery and inspection requests
                into schema-validated subtasks and selects a robot using
                availability and battery state.
              </li>
              <li>
                <strong>Routing:</strong> a coarse-grid A* implementation
                considers obstacles and no-go polygons, simplifies waypoints,
                and assigns headings.
              </li>
              <li>
                <strong>Adapters:</strong> a common interface separates mission
                dispatch from mock, WebSocket, and MQTT implementations.
                Incoming telemetry is validated before reaching shared
                application state.
              </li>
              <li>
                <strong>Observation:</strong> the interface combines robot
                state, mission state, a site view, and event logs. Simulated
                telemetry supports development without a connected fleet.
              </li>
            </ul>
          </section>
          <section id="nodeai-challenges">
            <h2>Reacting when the plan stops working.</h2>
            <p>
              A policy loop checks assigned robots for low battery and prolonged
              blockage. Reassignment logic selects another eligible robot,
              updates the plan, and records the transition. Fault injection
              provides a way to exercise these decisions during development.
            </p>
            <p>
              The transport adapters include reconnection behavior; the
              RMF-oriented WebSocket adapter also sends heartbeats. Keeping
              telemetry normalization behind the adapter interface lets the
              application work with a common robot-state model.
            </p>
          </section>
          <section id="nodeai-status">
            <h2>A prototype with inspectable boundaries.</h2>
            <p>
              The repository contains the planning, routing, telemetry, and
              policy modules described here. The ROS- and RMF-oriented adapters
              require compatible bridges; the VDA-5050-oriented adapter uses
              simplified order payloads. Hardware interoperability and
              production fleet performance have not been established by this
              project page.
            </p>
            <p>
              Mission replay is still a UI scaffold. Collision-safe recovery,
              transport acknowledgments, and end-to-end fault testing are areas
              for further development. No throughput, uptime, or fleet-scale
              benchmark is claimed.
            </p>
            <External
              className="text-link"
              href="https://github.com/Ekanshthegreat/NodeAI-rework"
            >
              Explore the implementation
            </External>
          </section>
        </div>
      </div>
    </article>
  );
}
