import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { growthTransformation } from "@/content/live/growthTransformation";

export const metadata: Metadata = {
  title: growthTransformation.title,
  description: growthTransformation.description,
  alternates: { canonical: growthTransformation.route },
};

const signals = [
  {
    eyebrow: "Strategy & Growth",
    title: "Direction without clarity",
    bullets: ["Fragmented strategy and unclear growth priorities.", "Declining profitability despite increasing revenues."],
    icon: "signpost",
  },
  {
    eyebrow: "Operating Model & Culture",
    title: "Systems that don’t scale",
    bullets: [
      "Siloed functions and absence of a unified operating model.",
      "Difficulty scaling culture, talent, and governance with growth.",
      "Leadership bandwidth stretched between daily operations and long-term goals.",
    ],
    icon: "system",
  },
  {
    eyebrow: "Sales, Data & Technology",
    title: "Performance without visibility",
    bullets: [
      "Inconsistent sales productivity and channel performance.",
      "Lack of data-driven decision-making and performance visibility.",
      "Under-leveraged technology investments with limited ROI.",
    ],
    icon: "chart",
  },
];

const enables = [
  {
    eyebrow: "Direction & Design",
    title: "Clear direction, scalable model",
    bullets: [
      "Refine strategic direction & business purpose and link it to measurable outcomes.",
      "Design scalable operating models and governance frameworks.",
      "Align leadership around a single growth and transformation agenda.",
    ],
    icon: "compass",
  },
  {
    eyebrow: "Growth & Productivity",
    title: "Commercial momentum",
    bullets: [
      "Achieve 3X sales growth through data-driven distribution transformation.",
      "Improve EBITDA by 5–10% via cost and margin optimization.",
      "Drive double-digit productivity gains through lean and digital integration.",
    ],
    icon: "growth",
  },
  {
    eyebrow: "Execution & Future Readiness",
    title: "Execution discipline & agility",
    bullets: [
      "Strengthen leadership alignment and execution discipline through SPMO setup.",
      "Build customer-centric, agile structures that respond faster to market shifts.",
      "Institutionalise a repeatable growth & transformation way-of-working.",
    ],
    icon: "people",
  },
];

const impactPills = [
  { title: "3-5x revenue growth", icon: "compass" },
  { title: "5-10% EBITDA improvement", icon: "pie" },
  { title: "Double-digit productivity gains", icon: "chart" },
  { title: "Leadership & execution discipline", icon: "people" },
];

const clientImpacts = [
  {
    eyebrow: "General Insurance • Sales Transformation",
    title: "3X growth in new business premium across multi-channel network",
    body:
      "Redesigned go-to-market, channel productivity measures and sales incentives to drive premium growth across 6,000+ agents, 9 bancassurance partners, and digital & embedded ecosystems. Governance, audit & incentive alignment to lock-in performance.",
    result: "3X growth in new business premium • 40%+ increase in persistency",
    icon: "shield",
  },
  {
    eyebrow: "FY25-FY27 Transformation • Lean 10X Program",
    title: "Lean-driven cost and capacity unlock across 10+ plants",
    body:
      "Delivered an EBITDA improvement program for a large auto/mobile company, combining lean deployment, throughput enhancement, capacity procurement savings, and plant-level dashboard for sustained performance.",
    result: "5-10% EBITDA margin uplift • 20-25% cost savings across 10+ plants",
    icon: "factory",
  },
  {
    eyebrow: "Healthcare Provider • Strategy to Execution",
    title: "Shared scorecards and governance for a leading Indian healthcare provider",
    body:
      "Unified business priorities across hospital leadership, operations, and corporate; built leadership governance rhythm with a single medical, operations, and business teams around common outcomes.",
    result: "30% productivity • Faster decision cycles • Stronger execution discipline",
    icon: "health",
  },
  {
    eyebrow: "B2B Manufacturer • Sales Funnel Optimisation",
    title: "De-bottlenecked sales funnel and channel productivity uplift",
    body:
      "Applied Six Sigma for Growth to map the funnel, leakage and win-rate; realigned team structure, incentives, renewals processes, leads, and reporting for higher account wins and distributor retention.",
    result: "20% sales productivity • Higher win-rate • Improved distributor retention",
    icon: "funnel",
  },
  {
    eyebrow: "Financial Services • Target Operating Model",
    title: "New operating model for growth in Levant financial services group",
    body:
      "Implemented shared capabilities, digital enablement, and workflow re-alignment across a multi-entity GCC; operating model for 7 countries with sovereign back-office & governance functions.",
    result: "25%+ efficiency • Improved SLAs • Stronger governance & regional scale",
    icon: "people",
  },
  {
    eyebrow: "Global Industrial Conglomerate • Org Redesign",
    title: "Vision cascade and governance re-architecture across a global portfolio",
    body:
      "Integrated 5 functions to complement and refresh the strategy / vision, then realigned structures, role charters, and governance forums to align group, business units, and functions.",
    result: "Faster decision-making • Governance maturity uplift • Consistent execution",
    icon: "system",
  },
  {
    eyebrow: "Diversified Business Group • CFO Transformation Office",
    title: "CEO-led transformation office for 20+ strategic initiatives",
    body:
      "Set up a Transformation & PMO Office with clear charters, initiative pipelines, and OKR dashboards; enabled CXOs for visibility into rhythms to unlock cost and projects.",
    result: "Institutionalised PMO office • 20+ initiatives tracked • Execution cadence in place",
    icon: "building",
  },
  {
    eyebrow: "Digital Health Innovator • Design Thinking",
    title: "New digital-first health product from concept to market",
    body:
      "Used Design Thinking and Journey mapping to shape a product; validated with end-users, refined the solution, and drove go-to-market strategy across HCPs, and segment activation rhythms.",
    result: "20%+ adoption • Higher customer satisfaction • Faster time-to-market",
    icon: "health",
  },
];

const driveSteps = [
  {
    title: "Clarity before action",
    body: "We lead with deep discovery to align key leaders around what truly matters.",
    icon: "target",
  },
  {
    title: "Strategy that can be executed",
    body: "We turn intent into a clear, pragmatic plan with decision cadence, roles, and accountability.",
    icon: "map",
  },
  {
    title: "Data-led, people-anchored",
    body: "Data informs decisions, people drive outcomes.",
    icon: "data",
  },
  {
    title: "Relentless focus on value",
    body: "Every initiative is tied to measurable impact and compounding returns.",
    icon: "diamond",
  },
  {
    title: "Capability transfer, not dependency",
    body: "We build internal ownership and leave behind lasting capability.",
    icon: "people",
  },
];

const triggers = [
  {
    title: "Growth has plateaued",
    body: "You’ve hit a ceiling and need a new growth engine to break through and scale profitably.",
    icon: "trend",
  },
  {
    title: "Strategy isn’t translating into results",
    body: "The plan looks right on paper, but execution is inconsistent or weak.",
    icon: "map",
  },
  {
    title: "The operating model is holding growth back",
    body: "Structure and ways of working cannot support current or future scale.",
    icon: "gear",
  },
  {
    title: "Data exists, clarity doesn’t",
    body: "Dashboards are everywhere, yet insights that drive decisions are missing.",
    icon: "data",
  },
  {
    title: "Transformation is underway, but impact is unclear",
    body: "Multiple initiatives are in play, but outcomes are not visible.",
    icon: "people",
  },
  {
    title: "A step-change is required",
    body: "Charting new markets, integrating acquisitions, or navigating disruption requires a different rhythm and execution.",
    icon: "branch",
  },
];

function GrowthIcon({ name }: { name: string }) {
  switch (name) {
    case "signpost":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="M24 7v34M13 12h22l-5 6H13v-6ZM35 25H13l5 6h17v-6Z" />
        </svg>
      );
    case "system":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <rect x="18" y="8" width="12" height="12" rx="2" />
          <rect x="8" y="28" width="12" height="12" rx="2" />
          <rect x="28" y="28" width="12" height="12" rx="2" />
          <path d="M24 20v7M14 28v-4h20v4" />
        </svg>
      );
    case "chart":
    case "growth":
    case "trend":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="M8 40h32M14 34V23M24 34V15M34 34V20" />
          <path d="m11 22 9-8 8 5 9-12M31 7h6v6" />
        </svg>
      );
    case "compass":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <circle cx="24" cy="24" r="15" />
          <path d="m30 14-4 12-12 4 4-12 12-4Z" />
        </svg>
      );
    case "people":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <circle cx="24" cy="16" r="6" />
          <circle cx="12" cy="22" r="4" />
          <circle cx="36" cy="22" r="4" />
          <path d="M10 38c2-7 7-10 14-10s12 3 14 10M4 37c1-5 5-8 10-8M34 29c5 0 9 3 10 8" />
        </svg>
      );
    case "pie":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="M24 7v17h17" />
          <path d="M39 29A16 16 0 1 1 19 9" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="M24 6 38 12v11c0 10-6 16-14 19-8-3-14-9-14-19V12l14-6Z" />
        </svg>
      );
    case "factory":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="M7 39h34V17l-11 6v-6l-11 6v-8H7v24Z" />
          <path d="M13 31h5M22 31h5M31 31h5" />
        </svg>
      );
    case "health":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="M18 9h12v10h10v12H30v10H18V31H8V19h10V9Z" />
        </svg>
      );
    case "funnel":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="M8 10h32L28 24v12l-8 4V24L8 10Z" />
        </svg>
      );
    case "building":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="M9 40h30M13 40V12h12v28M25 20h10v20" />
          <path d="M17 18h4M17 25h4M17 32h4M29 27h3M29 34h3" />
        </svg>
      );
    case "target":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <circle cx="24" cy="24" r="15" />
          <circle cx="24" cy="24" r="7" />
          <path d="M24 4v8M24 36v8M4 24h8M36 24h8" />
        </svg>
      );
    case "map":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="m8 14 10-4 12 4 10-4v24l-10 4-12-4-10 4V14Z" />
          <path d="M18 10v24M30 14v24" />
        </svg>
      );
    case "data":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <ellipse cx="24" cy="12" rx="13" ry="5" />
          <path d="M11 12v24c0 3 6 5 13 5s13-2 13-5V12M11 24c0 3 6 5 13 5s13-2 13-5" />
        </svg>
      );
    case "diamond":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="M10 18 18 8h12l8 10-14 22L10 18Z" />
          <path d="M10 18h28M18 8l6 10 6-10" />
        </svg>
      );
    case "gear":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <circle cx="24" cy="24" r="7" />
          <path d="M24 6v6M24 36v6M9 24h6M33 24h6M13.4 13.4l4.2 4.2M30.4 30.4l4.2 4.2M34.6 13.4l-4.2 4.2M17.6 30.4l-4.2 4.2" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="M12 34c8-14 16-14 24 0M14 20h20M18 14h12" />
        </svg>
      );
  }
}

function BulletList({ bullets }: { bullets: string[] }) {
  return (
    <ul>
      {bullets.map((bullet) => (
        <li key={bullet}>{bullet}</li>
      ))}
    </ul>
  );
}

export default function GrowthTransformationPage() {
  return (
    <main className="growth-page">
      <section className="growth-spine">
        <div className="growth-container">
          <p className="growth-kicker">Growth & Transformation</p>
          <h1>
            From scattered initiatives to a <span>single growth & transformation spine</span>
          </h1>
          <p className="growth-lead">
            We help organisations move from disconnected projects and firefighting to an integrated growth and
            transformation system—where strategy, operating model, sales performance, and execution discipline reinforce
            each other.
          </p>

          <div className="growth-backbone">
            <div className="growth-backbone__label">
              <span aria-hidden="true">
                <GrowthIcon name="bridge" />
              </span>
              <strong>A pragmatic, execution-first backbone</strong>
            </div>
            <div className="growth-backbone__pill">Strategy • Operating Model • Sales • Execution</div>
          </div>

          <div className="growth-spine__map">
            <div className="growth-spine__column">
              <div className="growth-spine__head">
                <span>Signals we see</span>
                <strong>Common growth & execution constraints</strong>
              </div>
              {signals.map((item) => (
                <article className="growth-spine-card" key={item.title}>
                  <span aria-hidden="true">
                    <GrowthIcon name={item.icon} />
                  </span>
                  <div>
                    <p>{item.eyebrow}</p>
                    <h2>{item.title}</h2>
                    <BulletList bullets={item.bullets} />
                  </div>
                </article>
              ))}
            </div>

            <div className="growth-spine__axis" aria-hidden="true">
              <b>From current reality</b>
              <span>⇄</span>
              <b>To sustained outcomes</b>
            </div>

            <div className="growth-spine__column">
              <div className="growth-spine__head">
                <span>What we enable</span>
                <strong>Integrated growth & transformation backbone</strong>
              </div>
              {enables.map((item) => (
                <article className="growth-spine-card" key={item.title}>
                  <span aria-hidden="true">
                    <GrowthIcon name={item.icon} />
                  </span>
                  <div>
                    <p>{item.eyebrow}</p>
                    <h2>{item.title}</h2>
                    <BulletList bullets={item.bullets} />
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="growth-impact-strip">
            <strong>Typical impact unlocked</strong>
            {impactPills.map((item) => (
              <div key={item.title}>
                <span aria-hidden="true">
                  <GrowthIcon name={item.icon} />
                </span>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="growth-clients">
        <div className="growth-container">
          <div className="growth-section-head growth-section-head--split">
            <div>
              <p className="growth-kicker">Growth & Transformation</p>
              <h2>
                Impact with <span>Real Clients</span>
              </h2>
              <p>
                A cross-section of programs we’ve led across insurance, manufacturing, healthcare, and digital-first
                businesses—delivering management transformations, measurable growth, productivity, and value creation.
              </p>
            </div>
            <Link href="/contact-us">Talk about a similar outcome</Link>
          </div>

          <div className="growth-client-grid">
            {clientImpacts.map((item) => (
              <article className="growth-client-card" key={item.title}>
                <div className="growth-client-card__eyebrow">
                  <span aria-hidden="true">
                    <GrowthIcon name={item.icon} />
                  </span>
                  <p>{item.eyebrow}</p>
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <strong>{item.result}</strong>
              </article>
            ))}
          </div>

          <div className="growth-impact-strip growth-impact-strip--clients">
            <strong>Typical impact unlocked</strong>
            {impactPills.map((item) => (
              <div key={item.title}>
                <span aria-hidden="true">
                  <GrowthIcon name={item.icon} />
                </span>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="growth-drive">
        <div className="growth-container">
          <div className="growth-section-head growth-section-head--center">
            <p className="growth-kicker">Growth & Transformation</p>
            <h2>
              How We Drive <span>Transformation</span>
            </h2>
            <p>
              <strong>Transformation is not a program. A framework, a way of leadership.</strong>
              We help organisations move from ambition to measurable impact through a structured transformation
              approach—across strategy, operating model, capabilities, and culture.
            </p>
          </div>

          <div className="growth-drive__grid">
            <div className="growth-drive__image">
              <Image src="/assets/city-consulting.jpg" alt="" fill sizes="(max-width: 900px) 100vw, 44vw" />
            </div>
            <div className="growth-drive__steps">
              {driveSteps.map((step, index) => (
                <article key={step.title}>
                  <span aria-hidden="true">
                    <GrowthIcon name={step.icon} />
                  </span>
                  <b>{String(index + 1).padStart(2, "0")}</b>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="growth-triggers">
        <div className="growth-container">
          <div className="growth-section-head growth-section-head--center">
            <p className="growth-kicker">Engagement Triggers</p>
            <h2>Where Leaders Typically Call Us In</h2>
            <p>
              Leaders engage us when growth stalls, complexity rises, or performance gaps widen—and they need a trusted
              partner to diagnose, design, and deliver transformation that lasts.
            </p>
          </div>

          <div className="growth-trigger-grid">
            {triggers.map((trigger) => (
              <article key={trigger.title}>
                <span aria-hidden="true">
                  <GrowthIcon name={trigger.icon} />
                </span>
                <div>
                  <h3>{trigger.title}</h3>
                  <p>{trigger.body}</p>
                </div>
              </article>
            ))}
          </div>

          <Link className="growth-trigger-cta" href="/contact-us">
            Start a no-cost conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
