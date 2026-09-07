"use client";

import Link from "next/link";
import { useState } from "react";

export type IndustryShowcaseService = {
  title: string;
  short: string;
  heading: string;
  intro: string;
  label: string;
  bullets: string[];
  impact: string;
  icon: string;
};

export type IndustryShowcaseContent = {
  sectorLabel: string;
  helpTitle: string;
  services: IndustryShowcaseService[];
  partnerTitle: string;
  partnerIntro: string;
  partnerReasons: [string, string][];
  workSteps: [string, string, string][];
  focusText: string;
  valueIntro: string;
};

const services: IndustryShowcaseService[] = [
  {
    title: "Growth & Strategy",
    short: "Future-ready enterprise",
    heading: "Building a Future-Ready Pharma Enterprise",
    intro: "We help pharma organisations build actionable growth strategies across geographies and portfolios.",
    label: "How we support pharma:",
    bullets: [
      "Strategic growth plans for domestic & international expansion",
      "Market entry & diversification strategy (new therapies, new regions)",
      "Commercial excellence & sales productivity improvement",
      "Partnership & alliance strategies for distribution, digital, and R&D",
      "M&A synergy assessment & integration support",
    ],
    impact: "Enhanced revenue pipelines, accelerated launch strategies, and improved commercial execution across markets.",
    icon: "↗",
  },
  {
    title: "Shared Services & GCC Excellence",
    short: "Scalable pharma operations",
    heading: "Building Scalable Pharma Operations",
    intro: "Pharma organisations are increasingly establishing GCCs, digital hubs, and shared services to centralise operations.",
    label: "We help with:",
    bullets: [
      "GCC set-up for IT, analytics, supply chain, finance, or regulatory",
      "Shared services operating model for enterprise functions",
      "Governance, performance frameworks, and KPI design",
      "Talent & capability development for pharma leadership",
    ],
    impact: "Standardised, cost-efficient, globally consistent processes across the enterprise.",
    icon: "◉",
  },
  {
    title: "Tech-Enabled Transformation",
    short: "Digitise the value chain",
    heading: "Digitising the Pharma Value Chain",
    intro: "We enable digital transformation that aligns with regulatory standards while simplifying complexity.",
    label: "Where we support:",
    bullets: [
      "Process digitisation across R&D, QA, QC & manufacturing",
      "AI-driven quality analytics, deviations prediction, batch release optimisation",
      "Industry 4.0 roadmaps for smart manufacturing",
      "Cloud transformation & data platform modernization",
      "Automation (RPA) for regulatory, pharmacovigilance, documentation, and supply chain",
      "LIMS/MES/QMS enablement support",
    ],
    impact: "Reduced manual errors, faster cycle times, improved traceability, and enhanced real-time decision making.",
    icon: "✣",
  },
  {
    title: "ESG & Sustainable Value Creation",
    short: "Sustainable manufacturing",
    heading: "ESG & Sustainable Value Creation for Pharma",
    intro: "Pharma is under significant pressure to demonstrate environmental stewardship and transparent reporting.",
    label: "Our support includes:",
    bullets: [
      "ESG strategy & roadmap aligned to global standards",
      "GHG emissions measurement & carbon reduction plan",
      "Waste, water, and energy optimisation frameworks",
      "ESG reporting, compliance & assurance",
      "Purpose-led stakeholder engagement",
    ],
    impact: "Enhanced investor confidence, regulatory compliance, and sustainable manufacturing operations.",
    icon: "◒",
  },
  {
    title: "Business Process & Operational Excellence",
    short: "Lean & stable operations",
    heading: "Creating Lean & Stable Pharma Systems",
    intro: "Pharmaceutical operations require precision, predictability, and compliance.",
    label: "Our services include:",
    bullets: [
      "Lean transformation across plants and QC labs",
      "Value stream mapping for API, formulations & packaging",
      "Cost optimisation & productivity improvement programs",
      "Target operating model (TOM) design across R&D to supply chain",
      "Process standardisation across global operations",
    ],
    impact: "Lower deviations, reduced cycle time, improved batch reliability, and higher OEE.",
    icon: "⚙",
  },
] ;

const partnerReasons: [string, string][] = [
  ["Strategy + Execution Under One Roof", "We transform boardroom strategy into frontline results."],
  ["Deep Understanding of Regulated Environments", "Audit-readiness, data integrity, and GxP-first design."],
  ["Tech-First, Human-Centric Approach", "Digitisation that simplifies work — not complicates it."],
  ["Proven Methodologies", "Lean, Industry 4.0, Agile, ESG, TQM, and transformation frameworks."],
];

const workSteps: [string, string, string][] = [
  ["Align strategy to regulated execution", "Clear priorities, governance, and owners — designed to survive audits and operational reality.", "Boardroom → Plant"],
  ["Simplify processes, then digitise", "Digital enablement that improves flow, reduces errors, and strengthens traceability.", "Lean → Digital"],
  ["Build capability to sustain change", "Operating rhythm, skills, and playbooks — so performance holds after the engagement.", "Scale-ready"],
];

const partnerValues = [
  ["Impact-First Mindset", "Every engagement is tied to measurable business outcomes.", "◎"],
  ["Senior-Led Delivery", "Experienced leaders directly involved in every engagement.", "◉"],
  ["Fit-for-Pharma Solutions", "Solutions tailored for the unique realities of regulated environments.", "✧"],
  ["Long-Term Partnership", "Built on trust, transparency, and a commitment to your success.", "◇"],
] as const;

export default function PharmaHelpShowcase({ content, isPharma = false }: { content?: IndustryShowcaseContent; isPharma?: boolean }) {
  const showcaseServices = content?.services ?? services;
  const showcaseReasons = content?.partnerReasons ?? partnerReasons;
  const showcaseSteps = content?.workSteps ?? workSteps;
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const service = showcaseServices[active];
  const previewOne = showcaseServices[(active + 1) % showcaseServices.length];
  const previewTwo = showcaseServices[(active + 2) % showcaseServices.length];
  const select = (index: number) => {
    if (index === active) return;
    setDirection(index > active ? 1 : -1);
    setActive(index);
  };
  const move = (step: number) => {
    setDirection(step);
    setActive((current) => (current + step + showcaseServices.length) % showcaseServices.length);
  };

  return (
    <section className={`pharma-help${isPharma ? " pharma-help--pharma" : ""}`} aria-labelledby="pharma-help-heading">
      <div className="pharma-help__stage">
        <div className="industry-shell pharma-help__layout">
          <header className="pharma-help__intro">
            <p>{content?.sectorLabel ?? "Pharmaceutical Sector"}</p>
            <h2 id="pharma-help-heading">How We Help the <em>{content?.helpTitle ?? "Pharmaceutical Sector"}</em></h2>
            <div className="pharma-help__menu" aria-label={`${content?.sectorLabel ?? "Pharmaceutical"} services`}>
              <h3>Our Services</h3>
              {showcaseServices.map((item, index) => (
                <button className={index === active ? "is-active" : ""} key={item.title} onClick={() => select(index)} type="button">
                  <span aria-hidden="true">{item.icon}</span>
                  <b>{item.title}<small>{item.short}</small></b>
                  <i aria-hidden="true">→</i>
                </button>
              ))}
            </div>
          </header>

          <div className="pharma-help__deck" data-active={active}>
            <article className="pharma-help__ghost pharma-help__ghost--two" key={`two-${previewTwo.title}`} aria-hidden="true"><span>{previewTwo.title}</span><h4>{previewTwo.heading}</h4><p>{previewTwo.intro}</p></article>
            <article className="pharma-help__ghost pharma-help__ghost--one" key={`one-${previewOne.title}`} aria-hidden="true"><span>{previewOne.title}</span><h4>{previewOne.heading}</h4><p>{previewOne.intro}</p></article>
            <article className={`pharma-help__card ${direction > 0 ? "is-forward" : "is-backward"}`} key={service.title}>
              <div className="pharma-help__meta"><span>05 · Business Impact</span><b>{String(active + 1).padStart(2, "0")} · {service.title}</b></div>
              <h3>{service.heading}</h3>
              <p>{service.intro}</p>
              <strong>{service.label}</strong>
              <ul>{service.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              <div className="pharma-help__impact"><span aria-hidden="true">↗</span><p><b>Impact:</b> {service.impact}</p></div>
              <div className="pharma-help__dots" aria-label={`Service ${active + 1} of ${showcaseServices.length}`}>
                {showcaseServices.map((item, index) => <button aria-label={`Show ${item.title}`} className={index === active ? "is-active" : ""} key={item.title} onClick={() => select(index)} type="button" />)}
              </div>
            </article>
            <button className="pharma-help__arrow pharma-help__arrow--prev" aria-label="Previous service" onClick={() => move(-1)} type="button">‹</button>
            <button className="pharma-help__arrow pharma-help__arrow--next" aria-label="Next service" onClick={() => move(1)} type="button">›</button>
          </div>
        </div>
      </div>

      <div className="pharma-partner">
        <div className="industry-shell pharma-partner__grid">
          <section className="pharma-partner__why">
            <header>
              <p>Why Partner With Us</p>
              <h2>{content?.partnerTitle ?? <>Why Pharma <em>Firms</em><br />Work With Us</>}</h2>
              <i />
              <span>{content?.partnerIntro ?? "A boardroom-grade approach built for regulated environments — designed to translate strategy into outcomes across quality, compliance, cost, and speed."}</span>
            </header>
            <div className="pharma-partner__reasons">
              {showcaseReasons.map(([title, body]) => <article key={title}><span aria-hidden="true">✓</span><div><h3>{title}</h3><p>{body}</p></div></article>)}
            </div>
            <div className="pharma-partner__actions"><Link href="/contact-us">Talk to us <span aria-hidden="true">→</span></Link><Link href="/services">View services</Link></div>
          </section>

          <section className="pharma-partner__work">
            <header><p>How We Work</p><h2>From intent <span>→</span> execution <span>→</span> measurable outcomes</h2></header>
            <div className="pharma-partner__steps">
              {showcaseSteps.map(([title, body, tag], index) => <article key={title}><b>{String(index + 1).padStart(2, "0")}</b><div><h3>{title}</h3><p>{body}</p></div><span>{tag}</span></article>)}
            </div>
            <footer><span aria-hidden="true">↗</span><p><b>Focus on What Matters:</b> {content?.focusText ?? "Every engagement is designed to improve growth, cost efficiency, quality, and compliance."}</p></footer>
          </section>
        </div>

        <div className="industry-shell pharma-partner__values">
          <div><b>A New Partner<br />Focused on Impact</b><p>{content?.valueIntro ?? "We are a new firm built by industry leaders with a shared mission — to create measurable value for pharma organisations."}</p></div>
          {partnerValues.map(([title, body, icon]) => <article key={title}><span aria-hidden="true">{icon}</span><div><b>{title}</b><p>{body}</p></div></article>)}
        </div>
      </div>
    </section>
  );
}
