"use client";

import Link from "next/link";
import { useState } from "react";

type OfferingIconName = "target" | "people" | "brain" | "leaf" | "process" | "chart" | "handshake" | "shield" | "globe" | "star";

function OfferingIcon({ name }: { name: OfferingIconName }) {
  if (name === "target") return <svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="21" cy="27" r="14" /><circle cx="21" cy="27" r="7" /><path d="m21 27 15-15m-5 0h5v5" /></svg>;
  if (name === "people") return <svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="15" r="6" /><circle cx="10" cy="22" r="4" /><circle cx="38" cy="22" r="4" /><path d="M14 39v-5c0-6 4-10 10-10s10 4 10 10v5M4 39v-4c0-4 3-7 7-7m33 11v-4c0-4-3-7-7-7" /></svg>;
  if (name === "brain") return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M21 8a7 7 0 0 0-10 7 7 7 0 0 0-2 12 7 7 0 0 0 7 10c2 4 7 5 10 2V10c-1-2-3-3-5-2Zm6 2v29c3 3 8 2 10-2a7 7 0 0 0 7-10 7 7 0 0 0-2-12 7 7 0 0 0-10-7c-2-1-4 0-5 2Z" /><path d="M15 17h6m-8 9h8m-4 9h4m12-18h-6m8 9h-8m4 9h-4" /></svg>;
  if (name === "leaf") return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M39 8C21 9 10 18 11 34c14 2 25-8 28-26Z" /><path d="M9 40c7-11 14-17 25-24" /></svg>;
  if (name === "process") return <svg viewBox="0 0 48 48" aria-hidden="true"><rect x="6" y="26" width="10" height="12" rx="2" /><rect x="19" y="8" width="10" height="12" rx="2" /><rect x="32" y="26" width="10" height="12" rx="2" /><path d="M11 26v-5h13m13 5v-5H24v5" /></svg>;
  if (name === "chart") return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 39h33M12 35v-8h7v8m5 0V20h7v15m5 0V11h7v24M11 20l10-8 7 4 13-10" /></svg>;
  if (name === "handshake") return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="m5 17 9-6 8 5 4-2 9 5 8-3m-35 3 8 16 6-3m18-12-7 15-7-3M17 30l5 5m0-8 7 6m-4-10 9 7" /></svg>;
  if (name === "shield") return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 5c6 5 12 5 17 6v11c0 10-6 17-17 21C13 39 7 32 7 22V11c5-1 11-1 17-6Z" /><path d="m17 24 5 5 10-11" /></svg>;
  if (name === "globe") return <svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="18" /><path d="M6 24h36M24 6c6 5 9 11 9 18s-3 13-9 18c-6-5-9-11-9-18s3-13 9-18Z" /></svg>;
  return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="m24 5 5.2 10.5L41 17.2l-8.5 8.3 2 11.7L24 31.7l-10.5 5.5 2-11.7L7 17.2l11.8-1.7L24 5Z" /></svg>;
}

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

const offeringIcons: OfferingIconName[] = ["target", "people", "brain", "leaf", "process"];
const benefitItems: Array<[OfferingIconName, string]> = [
  ["people", "Executive perspective, practical solutions"],
  ["shield", "Proven frameworks, measurable outcomes"],
  ["globe", "Global delivery, local insight"],
  ["target", "Impact that lasts, not just reports"],
];

export function CoreOfferings() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeOffering = offerings[activeIndex];

  return (
    <section className="home-clean-offerings home-offerings-v2" id="offerings">
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
              <span>Boardroom Tech</span>
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
                <span className="home-clean-icon" aria-hidden="true"><OfferingIcon name={offeringIcons[index]} /></span>
                <span className="home-clean-rail__copy">
                  <strong>{item.title}</strong>
                  <small>{item.desc}</small>
                </span>
              </button>
            ))}
          </aside>

          <article className="home-clean-detail" id="active-offering-detail" aria-live="polite">
            <div className="home-clean-detail__head">
              <h3>{activeOffering.title}</h3>
              <p>{activeOffering.detail}</p>
            </div>
            <ul>
              {activeOffering.bullets.map((bullet, index) => (
                <li key={bullet}><span><OfferingIcon name={index === 0 ? "chart" : index === 1 ? "target" : index === 2 ? "handshake" : "people"} /></span>{bullet}</li>
              ))}
            </ul>
            <div className="home-clean-detail__summary" aria-label="Offering outcomes">
              <span>✓ Clear priorities</span>
              <span>▣ Actionable roadmaps</span>
              <span>↗ KPI movement</span>
            </div>
            <div className="home-clean-detail__actions">
              <Link className="home-clean-btn home-clean-btn--white" href="/contact-us">Talk to us</Link>
              <Link className="home-clean-btn home-clean-btn--brand" href={activeOffering.href}>
                Explore {activeOffering.shortTitle} <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </article>
        </div>

        <div className="home-offerings-v2__benefits">
          <div className="home-offerings-v2__benefit-title">
            <span><OfferingIcon name="star" /></span>
            <strong>What Sets<br />Us Apart</strong>
          </div>
          {benefitItems.map(([icon, label]) => (
            <div className="home-offerings-v2__benefit" key={label}>
              <span><OfferingIcon name={icon} /></span>
              <p>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
