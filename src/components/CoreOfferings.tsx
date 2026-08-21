"use client";

import Link from "next/link";
import { useState } from "react";

const offerings = [
  {
    title: "Growth & Strategy",
    shortTitle: "Growth & Strategy",
    desc: "Revenue growth, market expansion and competitive advantage.",
    detail: "We help you define where to play and how to win, then translate strategy into executable roadmaps that deliver sustainable, profitable growth.",
    bullets: ["Sales Growth Strategy & Execution", "Market Expansion & Entry Planning", "Strategic Partnerships & Alliances", "M&A Integration Support"],
    href: "/growth-transformation",
  },
  {
    title: "Shared Services & GCC Excellence",
    shortTitle: "GCC Excellence",
    desc: "Design, launch and optimise high-performing global capability centres.",
    detail: "We create scalable shared services and GCC models with the governance, performance systems and talent capabilities required for lasting value.",
    bullets: ["Global Capability Centre (GCC) Set-up & Optimisation", "Shared Services Design & Implementation", "Governance & Performance Frameworks", "Talent and Skills Transformation"],
    href: "/global-capability-centers",
  },
  {
    title: "Tech-Enabled Transformation",
    shortTitle: "Tech Transformation",
    desc: "Connect digital technology to practical operating and customer outcomes.",
    detail: "We combine process digitisation, automation, AI and analytics to improve how work gets done and how customers experience the organisation.",
    bullets: ["Process Digitisation & Automation", "AI & Analytics Integration", "Industry 4.0 Adoption Roadmaps", "Customer Experience Platforms"],
    href: "/services",
  },
  {
    title: "ESG & Value Creation",
    shortTitle: "ESG & Value Creation",
    desc: "Turn sustainability commitments into measurable enterprise value.",
    detail: "We translate ESG ambition into actionable roadmaps, credible reporting and stakeholder strategies that support responsible, purpose-led growth.",
    bullets: ["Sustainability & ESG Roadmaps", "ESG Reporting & Compliance", "Purpose-led Value Creation", "Stakeholder Engagement Strategies"],
    href: "/services",
  },
  {
    title: "Business Process & Operational Excellence",
    shortTitle: "Operational Excellence",
    desc: "Build lean, standardised operations with better cost and performance.",
    detail: "We redesign end-to-end processes and operating models to eliminate waste, reduce cost and embed sustainable operational performance.",
    bullets: ["Lean Transformation", "Process Re-engineering & Standardisation", "Target Operating Model (TOM) Design", "Cost Optimisation & Waste Reduction"],
    href: "/process-advisory",
  },
];

export function CoreOfferings() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeOffering = offerings[activeIndex];

  return (
    <section className="home-clean-offerings" id="offerings">
      <div className="container">
        <div className="home-clean-section-head home-clean-section-head--split">
          <div>
            <p className="home-clean-kicker">What We Do</p>
            <h2>Our Core Offerings</h2>
            <p>Select a capability to explore how Arete combines strategy, technology and operational execution to create measurable value.</p>
          </div>
          <Link className="home-clean-btn home-clean-btn--outline" href="/services">
            View all services <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <div className="home-clean-offering-shell">
          <aside className="home-clean-rail" aria-label="Core offering capabilities">
            <div className="home-clean-rail__head">
              <strong>Capabilities</strong>
              <span>Five Core Offerings</span>
            </div>
            {offerings.map((item, index) => (
              <button
                aria-controls="active-offering-detail"
                aria-pressed={activeIndex === index}
                className={`home-clean-rail__item${activeIndex === index ? " is-active" : ""}`}
                key={item.title}
                onClick={() => setActiveIndex(index)}
                type="button"
              >
                <span className="home-clean-icon" aria-hidden="true"><b>{String(index + 1).padStart(2, "0")}</b></span>
                <span className="home-clean-rail__copy">
                  <strong>{item.title}</strong>
                  <small>{item.desc}</small>
                </span>
              </button>
            ))}
          </aside>

          <article className="home-clean-detail" id="active-offering-detail" aria-live="polite">
            <div className="home-clean-detail__head">
              <span>{String(activeIndex + 1).padStart(2, "0")} / {String(offerings.length).padStart(2, "0")}</span>
              <h3>{activeOffering.title}</h3>
              <p>{activeOffering.detail}</p>
            </div>
            <ul>
              {activeOffering.bullets.map((bullet, index) => (
                <li key={bullet}><span>{String(index + 1).padStart(2, "0")}</span>{bullet}</li>
              ))}
            </ul>
            <div className="home-clean-detail__summary">
              <strong>Strategy connected to execution.</strong>
              <span>Practical roadmaps. Clear governance. Measurable outcomes.</span>
            </div>
            <div className="home-clean-detail__actions">
              <Link className="home-clean-btn home-clean-btn--white" href="/contact-us">Talk to us</Link>
              <Link className="home-clean-btn home-clean-btn--brand" href={activeOffering.href}>
                Explore {activeOffering.shortTitle} <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
