import Link from "next/link";
import { CoreOfferings } from "./CoreOfferings";

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

      <section className="home-clean-way home-clean-way--editorial" id="who-we-are">
        <div className="container">
          <div className="home-clean-way__header">
            <span aria-hidden="true" />
            <h2>The Arete Partners Way</h2>
          </div>

          <div className="home-clean-way__editorial">
            <div className="home-clean-way__lead">
              <p>
                At Arete Partners, we believe organizations rarely fail because they lack ambition or strategy. They struggle
                because execution becomes fragmented—priorities compete, initiatives operate in isolation, and transformation
                fails to translate into measurable business outcomes.
              </p>
              <p>We exist to close that gap.</p>
            </div>

            <div className="home-clean-way__belief">
              <p>Arete Partners is a technology-enabled global consulting firm built on a simple but powerful belief:</p>
              <blockquote>Business performance improves when execution is disciplined, integrated, and measurable.</blockquote>
            </div>

            <div className="home-clean-way__body">
              <p>
                Through our proprietary Arete Execution System™, we align strategy, operations, technology, governance, people,
                and performance into one integrated execution model—transforming ambition into measurable business outcomes that
                drive profitable growth, operational excellence, and sustainable competitive advantage.
              </p>
              <p>
                Our expertise spans Growth & Strategy, Global Capability Centers, Tech-Enabled Transformation, ESG & Enterprise
                Value, and Business Process Excellence & Industry 4.0. These are not independent consulting offerings. They are
                interconnected capabilities within a single execution system, where every initiative reinforces the next and every
                transformation contributes to enterprise-wide performance.
              </p>
              <p>
                What differentiates Arete Partners is not simply the breadth of our expertise—it is the discipline of our
                execution.
              </p>
              <p>
                We combine deep industry knowledge with proven methodologies to simplify complexity, eliminate inefficiencies,
                standardize operations, embed KPI-driven management, and establish the operational foundations required for
                technology to create measurable value. Rather than allowing digital transformation to add complexity, we ensure it
                accelerates business performance.
              </p>
              <p>
                Supported by a global delivery model, technology-enabled capabilities, and outcome-focused execution, we help
                organizations transform faster, execute with confidence, and deliver measurable business impact—consistently and
                at scale.
              </p>
            </div>

            <aside className="home-clean-way__promise">
              <div className="home-clean-way__promise-head">
                <p className="home-clean-kicker">Our Promise</p>
                <p>We don&apos;t simply design transformation.</p>
              </div>
              <strong>We build the execution systems that make transformation succeed.</strong>
              <div className="home-clean-way__promise-rhythm" aria-label="Consistently. Measurably. At Scale.">
                <span>Consistently.</span>
                <span>Measurably.</span>
                <span>At Scale.</span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {false && (
        <section className="home-clean-way" id="who-we-are-old">
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

      )}

      <CoreOfferings />

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
