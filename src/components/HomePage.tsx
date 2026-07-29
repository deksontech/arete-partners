import Link from "next/link";

const offerings = [
  {
    title: "Growth & Strategy",
    desc: "Revenue growth, market expansion, competitive advantage.",
    bullets: [
      "Sales Growth Strategy & Execution",
      "Market Expansion & Entry Planning",
      "Strategic Partnerships & Alliances",
      "M&A Integration Support",
    ],
    chips: ["Clear priorities", "Roadmaps", "KPI movement"],
    href: "/growth-transformation",
  },
  {
    title: "Shared Services & GCC",
    desc: "Design & scale high-performing global hubs.",
    bullets: [
      "Global Capability Centre (GCC) Set-up & Optimisation",
      "Shared Services Design & Implementation",
      "Governance & Performance Frameworks",
      "Talent and Skills Transformation",
    ],
    chips: ["Governance", "Talent model", "Productivity"],
    href: "/global-capability-centers",
  },
  {
    title: "Tech-Enabled Transformation",
    desc: "Digitisation, automation, analytics, operating model.",
    bullets: [
      "Process Digitisation & Automation",
      "AI & Analytics Integration",
      "Industry 4.0 Adoption Roadmaps",
      "Customer Experience Platforms",
    ],
    chips: ["Automation", "Data & analytics", "Speed to value"],
    href: "/services",
  },
  {
    title: "ESG & Value Creation",
    desc: "Sustainability embedded into strategy & delivery.",
    bullets: [
      "Sustainability & ESG Roadmaps",
      "ESG Reporting & Compliance",
      "Purpose-led Value Creation",
      "Stakeholder Engagement Strategies",
    ],
    chips: ["Sustainability", "Reporting", "Stakeholders"],
    href: "/services",
  },
  {
    title: "Business Process & Industry 4.0",
    desc: "Lean processes, productivity, innovation enablement.",
    bullets: [
      "Lean Transformation",
      "Process Re-engineering & Standardisation",
      "Target Operating Model (TOM) Design",
      "Cost Optimisation & Waste Reduction",
    ],
    chips: ["Operating model", "Cost efficiency", "Industry 4.0"],
    href: "/process-advisory",
  },
];

const apartItems = [
  [
    "01",
    "Strategy + Execution",
    "We bridge the gap between boardroom vision and frontline results by combining a deep industry approach with our proprietary methodology (+)",
  ],
  ["02", "Integrated Approach", "Linking revenue growth, operational efficiency, and people impact (+)"],
  ["03", "Tech-First, Human-Centric", "Leveraging digital tools without losing the human touch. (+)"],
  ["04", "Proven Methodologies", "Lean, Industry 4.0, ESG, and Agile execution frameworks."],
];

const stats = [
  ["500+", "Years of collective consulting experience"],
  ["20+", "Years average partner experience"],
  ["4", "Global locations"],
  ["200+", "Clients served"],
];

export function HomePage() {
  const activeOffering = offerings[0];

  return (
    <div className="home-clean">
      <section className="home-clean-strip">
        <div className="container home-clean-strip__inner">
          <p>Introducing a new way to design, scale and govern transformation programs across your enterprise.</p>
          <Link className="home-clean-btn home-clean-btn--ghost-light" href="#offerings">
            Explore How We Work
          </Link>
        </div>
      </section>

      <section className="home-clean-way" id="who-we-are">
        <div className="container home-clean-way__grid">
          <div className="home-clean-copy">
            <p className="home-clean-kicker">Who We Are</p>
            <h2>The Arete Partners Way</h2>
            <p>
              Arete Partners is a tech-enabled global consulting firm delivering high-impact solutions across Accounting &
              Reporting (ARC), Governance, Risk & Compliance (GRC), Sustainability & Climate (SCC), Technology Consulting,
              and Valuations.
            </p>
            <p>
              We combine deep domain expertise with high-performing global talent to help organizations navigate complexity,
              unlock value, and drive measurable outcomes. Our solutions are powered by proprietary methodologies and
              technology assets, ensuring precision, scalability, and long-term impact.
            </p>
            <p>
              At Arete Partners, our differentiated global delivery model and integrated tech stack enable us to provide
              best-in-class solutions with exceptional efficiency—without compromising on quality or insight.
            </p>
            <Link className="home-clean-btn home-clean-btn--brand" href="/about">
              About Arete Partners <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="home-clean-video" aria-label="Arete Partners video unavailable">
            <div>
              <span aria-hidden="true">!</span>
              <strong>Video unavailable</strong>
              <p>This video is not available</p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-clean-offerings" id="offerings">
        <div className="container">
          <div className="home-clean-section-head home-clean-section-head--split">
            <div>
              <p className="home-clean-kicker">What We Do</p>
              <h2>Our Core Offerings</h2>
              <p>
                Select a capability to view how we help clients drive revenue growth, operational excellence, and tech-enabled
                transformation.
              </p>
            </div>
            <Link className="home-clean-btn home-clean-btn--outline" href="/services">
              View all services <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="home-clean-offering-shell">
            <aside className="home-clean-rail" aria-label="Capabilities">
              <div className="home-clean-rail__head">
                <strong>Capabilities</strong>
                <span>Boardroom Tech</span>
              </div>
              {offerings.map((item, index) => (
                <div className={`home-clean-rail__item${index === 0 ? " is-active" : ""}`} key={item.title}>
                  <span className="home-clean-icon" aria-hidden="true" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </aside>

            <article className="home-clean-detail">
              <div className="home-clean-detail__head">
                <h3>{activeOffering.title}</h3>
                <p>
                  We help you define where to play and how to win — then translate strategy into executable roadmaps that
                  deliver sustainable, profitable growth.
                </p>
              </div>
              <ul>
                {activeOffering.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <div className="home-clean-chip-row">
                {activeOffering.chips.map((chip) => (
                  <span key={chip}>{chip}</span>
                ))}
              </div>
              <div className="home-clean-detail__actions">
                <Link className="home-clean-btn home-clean-btn--white" href="/contact-us">
                  Talk to us
                </Link>
                <Link className="home-clean-btn home-clean-btn--brand" href={activeOffering.href}>
                  Explore Growth & Strategy <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="home-clean-apart">
        <div className="container">
          <div className="home-clean-apart__top">
            <div>
              <p className="home-clean-kicker">What Sets Us Apart</p>
              <h2>Strategy meets execution</h2>
              <p>
                We bridge the gap between boardroom vision and frontline results — combining deep expertise, integrated
                delivery, and a tech-enabled approach without losing the human touch.
              </p>
            </div>
            <aside>
              <p className="home-clean-kicker">Our Difference</p>
              <strong>From vision to results — delivered with discipline.</strong>
            </aside>
          </div>

          <div className="home-clean-apart__grid">
            {apartItems.map(([num, title, body]) => (
              <article className="home-clean-apart-card" key={num}>
                <div>
                  <span>{num}</span>
                  <h3>{title}</h3>
                </div>
                <button aria-label={`${title} details`} type="button">
                  +
                </button>
                <p>{body}</p>
              </article>
            ))}
          </div>

          <div className="home-clean-apart__cta">
            <div>
              <h3>Ready to navigate your next phase of growth?</h3>
              <p>{"Let's turn your ambition into measurable success."}</p>
            </div>
            <Link className="home-clean-btn home-clean-btn--brand" href="/contact-us">
              Talk to Us
            </Link>
          </div>
        </div>
      </section>

      <section className="home-clean-impact">
        <div className="container">
          <p className="home-clean-kicker">Our Impact</p>
          <h2>Experience that compounds into measurable results</h2>
          <div className="home-clean-stats">
            {stats.map(([value, label]) => (
              <div className="home-clean-stat" key={value}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
