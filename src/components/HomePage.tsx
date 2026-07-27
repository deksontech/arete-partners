import Image from "next/image";
import Link from "next/link";
import { home } from "@/content/live/home";

function text(value: string) {
  return value
    .replace(/â€”/g, "—")
    .replace(/â€“/g, "–")
    .replace(/â€™/g, "’")
    .replace(/â€œ/g, "“")
    .replace(/â€/g, "”")
    .replace(/â†’/g, "→")
    .replace(/â€¢/g, "•")
    .replace(/âžœ/g, "➜");
}

const lines = home.contentLines.map(text);

function find(label: string) {
  return lines.find((line) => line === label) ?? label;
}

const offerings = [
  {
    title: "Growth & Strategy",
    desc: "Revenue growth, market expansion, competitive advantage.",
    bullets: ["Sales Growth Strategy & Execution", "Market Expansion & Entry Planning", "Strategic Partnerships & Alliances", "M&A Integration Support"],
    chips: ["Clear priorities", "Roadmaps", "KPI movement"],
  },
  {
    title: "Shared Services & GCC",
    desc: "Design & scale high-performing global hubs.",
    bullets: ["Global Capability Centre (GCC) Set-up & Optimisation", "Shared Services Design & Implementation", "Governance & Performance Frameworks", "Talent and Skills Transformation"],
    chips: ["Governance", "Talent model", "Productivity"],
  },
  {
    title: "Tech-Enabled Transformation",
    desc: "Digitisation, automation, analytics, operating model.",
    bullets: ["Process Digitisation & Automation", "AI & Analytics Integration", "Industry 4.0 Adoption Roadmaps", "Customer Experience Platforms"],
    chips: ["Automation", "Data & analytics", "Speed to value"],
  },
  {
    title: "ESG & Value Creation",
    desc: "Sustainability embedded into strategy & delivery.",
    bullets: ["Sustainability & ESG Roadmaps", "ESG Reporting & Compliance", "Purpose-led Value Creation", "Stakeholder Engagement Strategies"],
    chips: ["Sustainability", "Reporting", "Stakeholders"],
  },
  {
    title: "Business Process & Industry 4.0",
    desc: "Lean processes, productivity, innovation enablement.",
    bullets: ["Lean Transformation", "Process Re-engineering & Standardisation", "Target Operating Model (TOM) Design", "Cost Optimisation & Waste Reduction"],
    chips: ["Operating model", "Cost efficiency", "Industry 4.0"],
  },
];

export function HomePage() {
  const activeOffering = offerings[0];

  return (
    <>
      <section className="wp-hero">
        <div className="wp-hero-bg">
          <Image alt="" fill priority sizes="100vw" src="/assets/purple-wave.jpeg" />
        </div>
        <div className="wp-hero-inner wp-wrap">
          <p className="wp-eyebrow">THE ARETE PARTNERS WAY</p>
          <h1>{find("Transforming strategy into results that last")}</h1>
          <p>
            We partner with leadership teams to turn bold ambitions into executable roadmaps — aligning strategy, operations and
            technology to deliver measurable business outcomes.
          </p>
          <div className="wp-actions">
            <Link className="wp-btn wp-btn-primary" href="/contact-us">
              {find("Contact Us")}
            </Link>
            <Link className="wp-btn wp-btn-ghost" href="#who-we-are">
              {find("Learn More")}
            </Link>
          </div>
        </div>
      </section>

      <section className="wp-hero-strip">
        <div className="wp-wrap wp-strip-grid">
          <p>{find("Introducing a new way to design, scale and govern transformation programs across your enterprise.")}</p>
          <Link className="wp-btn wp-btn-ghost" href="#offerings">
            {find("Explore How We Work")}
          </Link>
        </div>
      </section>

      <section className="wp-way" id="who-we-are">
        <div className="wp-wrap wp-way-grid">
          <div>
            <p className="wp-eyebrow violet">{find("Who We Are")}</p>
            <h2>{find("The Arete Partners Way")}</h2>
            <p>Arete Partners is a tech-enabled global consulting firm delivering high-impact solutions across Accounting & Reporting (ARC), Governance, Risk & Compliance (GRC), Sustainability & Climate (SCC), Technology Consulting, and Valuations.</p>
            <p>We combine deep domain expertise with high-performing global talent to help organizations navigate complexity, unlock value, and drive measurable outcomes. Our solutions are powered by proprietary methodologies and technology assets, ensuring precision, scalability, and long-term impact.</p>
            <p>At Arete Partners, our differentiated global delivery model and integrated tech stack enable us to provide best-in-class solutions with exceptional efficiency—without compromising on quality or insight.</p>
            <Link className="wp-btn wp-btn-gradient" href="/about">
              {find("About Arete Partners")} <span>➜</span>
            </Link>
          </div>
          <div className="wp-video-card">
            <div className="wp-video-unavailable">
              <span>!</span>
              <strong>Video unavailable</strong>
              <p>This video is not available</p>
            </div>
          </div>
        </div>
      </section>

      <section className="wp-offerings" id="offerings">
        <div className="wp-wrap">
          <div className="wp-section-top">
            <div>
              <p className="wp-eyebrow navy">{find("What We Do").toUpperCase()}</p>
              <h2>{find("Our Core Offerings")}</h2>
              <p>{find("Select a capability to view how we help clients drive revenue growth, operational excellence, and tech-enabled transformation.")}</p>
            </div>
            <Link className="wp-btn wp-btn-outline-blue" href="/services">
              {find("View all services")} →
            </Link>
          </div>

          <div className="wp-offering-shell">
            <aside className="wp-capabilities">
              <div className="wp-cap-head">
                <strong>{find("Capabilities").toUpperCase()}</strong>
                <span>● {find("Boardroom Tech")}</span>
              </div>
              {offerings.map((item, index) => (
                <div className={`wp-cap-row ${index === 0 ? "active" : ""}`} key={item.title}>
                  <span className="wp-icon">{index === 0 ? "⌁" : index === 1 ? "▣" : index === 2 ? "◌" : index === 3 ? "◒" : "⚙"}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </aside>

            <article className="wp-offering-detail">
              <div>
                <h3>{activeOffering.title}</h3>
                <p>We help you define where to play and how to win — then translate strategy into executable roadmaps that deliver sustainable, profitable growth.</p>
              </div>
              <ul>
                {activeOffering.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <div className="wp-chip-row">
                {activeOffering.chips.map((chip) => (
                  <span key={chip}>{chip}</span>
                ))}
              </div>
              <div className="wp-detail-actions">
                <Link className="wp-btn wp-btn-white" href="/contact-us">
                  Talk to us
                </Link>
                <Link className="wp-btn wp-btn-primary" href="/growth-transformation">
                  Explore Growth & Strategy →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="wp-apart">
        <div className="wp-wrap">
          <div className="wp-apart-top">
            <div>
              <p className="wp-eyebrow navy">{find("What Sets Us Apart").toUpperCase()}</p>
              <h2>{find("Strategy meets execution")}</h2>
              <p>We bridge the gap between boardroom vision and frontline results — combining deep expertise, integrated delivery, and a tech-enabled approach without losing the human touch.</p>
            </div>
            <div className="wp-difference">
              <p>{find("Our Difference").toUpperCase()}</p>
              <strong>{find("From vision to results — delivered with discipline.")}</strong>
            </div>
          </div>
          <div className="wp-apart-grid">
            {[
              ["01", "Strategy + Execution", "We bridge the gap between boardroom vision and frontline results by combining a deep industry approach with our proprietary methodology (+)"],
              ["02", "Integrated Approach", "Linking revenue growth, operational efficiency, and people impact (+)"],
              ["03", "Tech-First, Human-Centric", "Leveraging digital tools without losing the human touch. (+)"],
              ["04", "Proven Methodologies", "Lean, Industry 4.0, ESG, and Agile execution frameworks."],
            ].map(([num, title, body]) => (
              <article className="wp-apart-card" key={num}>
                <div>
                  <span>{num}</span>
                  <h3>{title}</h3>
                </div>
                <button aria-label={`${title} details`}>+</button>
                <p>{body}</p>
              </article>
            ))}
          </div>
          <div className="wp-apart-cta">
            <div>
              <h3>{find("Ready to navigate your next phase of growth?")}</h3>
              <p>{find("Let's turn your ambition into measurable success.")}</p>
            </div>
            <Link className="wp-btn wp-btn-primary" href="/contact-us">
              {find("Talk to Us")}
            </Link>
          </div>
        </div>
      </section>

      <section className="wp-impact">
        <div className="wp-wrap">
          <p className="wp-eyebrow navy">{find("Our Impact").toUpperCase()}</p>
          <h2>{find("Experience that compounds into measurable results")}</h2>
          <div className="wp-stats">
            {[
              ["500+", "Years of collective consulting experience"],
              ["20+", "Years average partner experience"],
              ["4", "Global locations"],
              ["200+", "Clients served"],
            ].map(([value, label]) => (
              <div className="wp-stat" key={value}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
