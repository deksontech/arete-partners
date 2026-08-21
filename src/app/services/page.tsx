import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/content/live/services";

export const metadata: Metadata = {
  title: services.title,
  description: services.description,
  alternates: { canonical: services.route },
};

const goalItems = [
  {
    title: "Revenue Growth",
    body: "Accelerate top-line expansion.",
    tone: "purple",
    icon: "chart",
  },
  {
    title: "Enhanced Margins",
    body: "Improve profitability and efficiency.",
    tone: "green",
    icon: "trend",
  },
  {
    title: "Operational Excellence",
    body: "Build resilient and future-ready operations.",
    tone: "gold",
    icon: "gear",
  },
  {
    title: "Digital Advantage",
    body: "Leverage technology to drive sustainable performance.",
    tone: "blue",
    icon: "network",
  },
];

const partnershipItems = [
  {
    title: "Senior-led from day one.",
    body: "Work is designed and delivered by experienced practitioners.",
    icon: "people",
  },
  {
    title: "Domain + operating depth.",
    body: "Strategy, operations, and digital expertise in one team.",
    icon: "knight",
  },
  {
    title: "Capability transfer built-in.",
    body: "Playbooks, tools, and routines you can run without us.",
    icon: "playbook",
  },
];

const engagementStats = [
  {
    label: "Impact",
    value: "3–5×",
    body: "Typical impact versus traditional consulting teams of similar cost.",
    icon: "chart",
  },
  {
    label: "Cost",
    value: "~50%",
    body: "Of typical Big-4 / MBB programs for comparable transformation scope.",
    icon: "pie",
  },
  {
    label: "Ownership",
    value: "100%",
    body: "Clear accountability for outcomes, not just deliverables.",
    icon: "target",
  },
];

const portfolio = [
  {
    title: "Growth & Transformation",
    href: "/growth-transformation",
    icon: "chart",
    bullets: [
      "Vision, mission and strategy",
      "Growth strategy and execution",
      "Product strategy",
      "CEO advisory – SPMO / PMO set-up, P2M innovation",
      "Organisation strategy & target operating model",
      "Sales & distribution, design thinking, organisation design",
    ],
  },
  {
    title: "Operational Excellence",
    href: "/operational-excellence",
    icon: "gear",
    bullets: [
      "Cost optimisation & lean management",
      "Cognitive quality & continuous improvement culture",
      "Innovation, Gen AI & emerging tech deployment",
      "Technology-enabled transformation (LCA, DRA)",
    ],
  },
  {
    title: "Process Advisory",
    href: "/process-advisory",
    icon: "clipboard",
    bullets: [
      "Process design / re-design",
      "Metric and measurement design",
      "Business intelligence and analytics",
      "Establishing QMS",
      "Environment & safety management systems",
      "QMS / TQM maturity assessments & process audits",
    ],
  },
  {
    title: "Service Delivery",
    href: "/service-delivery",
    icon: "people",
    bullets: [
      "Customer strategy & customer retention",
      "Customer journey mapping",
      "Blueprints for service delivery",
      "Service delivery design and measurement",
    ],
  },
  {
    title: "Corporate Function Transformation",
    href: "/corporate-function",
    icon: "network",
    bullets: [
      "HR transformation",
      "Finance transformation",
      "Risk and compliance function",
      "Facilities management & administration",
      "IT and BCP",
    ],
  },
];

function ServiceIcon({ name }: { name: string }) {
  switch (name) {
    case "trend":
      return (
        <svg aria-hidden="true" viewBox="0 0 48 48">
          <path d="M8 37h32M12 32l8-9 8 5 10-16" />
          <path d="M30 12h8v8" />
        </svg>
      );
    case "gear":
      return (
        <svg aria-hidden="true" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="7" />
          <path d="M24 6v6M24 36v6M9 24h6M33 24h6M13.4 13.4l4.2 4.2M30.4 30.4l4.2 4.2M34.6 13.4l-4.2 4.2M17.6 30.4l-4.2 4.2" />
        </svg>
      );
    case "network":
      return (
        <svg aria-hidden="true" viewBox="0 0 48 48">
          <rect x="10" y="9" width="10" height="10" rx="2" />
          <rect x="28" y="9" width="10" height="10" rx="2" />
          <rect x="10" y="29" width="10" height="10" rx="2" />
          <rect x="28" y="29" width="10" height="10" rx="2" />
          <path d="M20 14h8M15 19v10M33 19v10M20 34h8" />
        </svg>
      );
    case "people":
      return (
        <svg aria-hidden="true" viewBox="0 0 48 48">
          <circle cx="24" cy="16" r="6" />
          <circle cx="12" cy="21" r="4" />
          <circle cx="36" cy="21" r="4" />
          <path d="M11 38c2-7 7-10 13-10s11 3 13 10M4 37c1-5 5-8 10-8M34 29c5 0 9 3 10 8" />
        </svg>
      );
    case "knight":
      return (
        <svg aria-hidden="true" viewBox="0 0 48 48">
          <path d="M19 8c9 3 12 9 10 18l6 8v6H13v-6l6-7c-4-7-1-14 0-19Z" />
          <path d="M18 16h8M17 40h20" />
        </svg>
      );
    case "playbook":
      return (
        <svg aria-hidden="true" viewBox="0 0 48 48">
          <path d="M10 9h20a8 8 0 0 1 8 8v22H18a8 8 0 0 0-8-8V9Z" />
          <path d="M18 18h12M18 25h10M10 31V13" />
        </svg>
      );
    case "pie":
      return (
        <svg aria-hidden="true" viewBox="0 0 48 48">
          <path d="M24 7v17h17" />
          <path d="M39 29A16 16 0 1 1 19 9" />
        </svg>
      );
    case "clipboard":
      return (
        <svg aria-hidden="true" viewBox="0 0 48 48">
          <path d="M17 9h14l2 5h6v28H9V14h6l2-5Z" />
          <path d="M17 14h14M17 24h14M17 32h10" />
        </svg>
      );
    case "shield":
      return (
        <svg aria-hidden="true" viewBox="0 0 48 48">
          <path d="M24 6 39 12v11c0 10-6 16-15 19C15 39 9 33 9 23V12l15-6Z" />
          <path d="m16 24 6 6 11-13" />
        </svg>
      );
    default:
      return (
        <svg aria-hidden="true" viewBox="0 0 48 48">
          <path d="M8 40h32M14 34V22M24 34V12M34 34V18" />
          <path d="M12 22l10-9 8 5 8-12" />
        </svg>
      );
  }
}

export default function ServicesPage() {
  return (
    <main className="services-redesign">
      <section className="services-purpose" id="purpose-goal">
        <div className="container services-purpose__grid">
          <div className="services-purpose__copy">
            <p className="services-kicker">Purpose & Our Goal Statement</p>
            <h1>Purpose and Our Goal Statement</h1>
            <div className="services-rule" aria-hidden="true" />
            <div className="services-purpose__statement">
              <span className="services-purpose__icon" aria-hidden="true">
                <ServiceIcon name="target" />
              </span>
              <p>
                To empower our clients to achieve substantial <strong className="services-highlight">revenue growth</strong>{" "}
                and <strong className="services-highlight services-highlight--green">enhanced margins</strong> through
                transformative strategies, operational excellence, and advanced digital solutions, driving sustainable success
                across Indian & global markets.
              </p>
            </div>
            <p>
              Our goal is to build your internal capabilities, not create dependency. We measure success by the sustainable
              results your teams can achieve long after our engagement ends. We are deeply invested in transferring knowledge
              and enabling your long-term success.
            </p>
            <p className="services-purpose__tag">Fully invested in your success.</p>
          </div>

          <aside className="services-goal-card" aria-label="Purpose outcomes">
            <Image alt="" fill priority sizes="(max-width: 900px) 100vw, 48vw" src="/assets/banner-new.jpg" />
            <div className="services-goal-card__shade" aria-hidden="true" />
            <div className="services-goal-card__items">
              {goalItems.map((item) => (
                <div className={`services-goal services-goal--${item.tone}`} key={item.title}>
                  <span>
                    <ServiceIcon name={item.icon} />
                  </span>
                  <div>
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="services-partnership" id="better-partnership-model">
        <div className="container services-partnership__grid">
          <div className="services-partnership__copy">
            <p className="services-kicker">Engagement Philosophy</p>
            <h2>A better partnership model</h2>
            <p>
              We keep teams lean, senior, and accountable — focused on impact, not slide volume. The goal is to leave you with
              a stronger organisation, not a longer dependency.
            </p>
            <div className="services-partnership__items">
              {partnershipItems.map((item) => (
                <article className="services-partnership__item" key={item.title}>
                  <span aria-hidden="true">
                    <ServiceIcon name={item.icon} />
                  </span>
                  <p>
                    <strong>{item.title}</strong> {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <aside className="services-video-card">
            <p>Watch how we partner with clients</p>
            <div className="services-video">
              <Image alt="" fill sizes="(max-width: 900px) 100vw, 44vw" src="/assets/city-consulting.jpg" />
              <button aria-label="Play video" type="button">
                <span />
              </button>
              <div className="services-video__controls" aria-hidden="true">
                <span />
                <span />
                <b>1:35 / 2:45</b>
                <i />
                <span />
                <span />
              </div>
            </div>
            <div className="services-video-card__note">
              <span aria-hidden="true">
                <ServiceIcon name="people" />
              </span>
              <p>
                <strong>Real partnerships. Real impact. Real results.</strong>
                Hear directly from our clients.
              </p>
            </div>
          </aside>
        </div>

        <div className="container">
          <div className="services-engagement-stats">
            {engagementStats.map((stat) => (
              <article className="services-engagement-stat" key={stat.label}>
                <span aria-hidden="true">
                  <ServiceIcon name={stat.icon} />
                </span>
                <div>
                  <p>{stat.label}</p>
                  <strong>{stat.value}</strong>
                  <i />
                  <small>{stat.body}</small>
                </div>
              </article>
            ))}
          </div>

          <aside className="services-trust-band">
            <span aria-hidden="true">
              <ServiceIcon name="shield" />
            </span>
            <strong>Trusted. Secure. Committed.</strong>
            <p>
              We operate in a trusted, secure, and compliant environment, ensuring confidentiality, data integrity, and
              uncompromising quality in everything we do.
            </p>
          </aside>
        </div>
      </section>

      <section className="services-portfolio" id="services-portfolio">
        <div className="container">
          <div className="services-portfolio__head">
            <p className="services-kicker">Services Portfolio</p>
            <h2>Strategy & Operations</h2>
            <div className="services-rule" aria-hidden="true" />
            <p>
              Focused on scalability and sustainability, we deliver high-quality and cost-effective outcomes across the
              strategy and operations spectrum, ensuring our clients remain competitive in the marketplace.
            </p>
          </div>
          <div className="services-portfolio__grid">
            {portfolio.map((item) => (
              <article className="services-portfolio-card" key={item.title}>
                <span aria-hidden="true">
                  <ServiceIcon name={item.icon} />
                </span>
                <h3>{item.title}</h3>
                <i />
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <Link href={item.href}>Read more →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
