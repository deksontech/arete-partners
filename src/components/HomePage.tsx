import Link from "next/link";
import { CoreOfferings } from "./CoreOfferings";

const apartItems = [
  { num: "01", title: "Strategy + Execution", body: "We bridge the gap between boardroom vision and frontline results by combining a deep industry approach with our proprietary methodology.", icon: "target" as const },
  { num: "02", title: "Integrated Approach", body: "Linking revenue growth, operational efficiency, and people impact into one connected transformation model.", icon: "network" as const },
  { num: "03", title: "Tech-First, Human-Centric", body: "Leveraging digital tools to accelerate business performance without losing the human touch.", icon: "digital" as const },
  { num: "04", title: "Proven Methodologies", body: "Lean, Industry 4.0, ESG, and Agile execution frameworks designed for measurable and sustainable transformation.", icon: "system" as const },
];

const stats = [
  { value: "500+", label: "Years of collective consulting experience", icon: "audience" as const },
  { value: "20+", label: "Years average partner experience", icon: "leader" as const },
  { value: "4", label: "Global locations", icon: "globe" as const },
  { value: "200+", label: "Clients served", icon: "handshake" as const },
];

function AreteWayIcon({ name }: { name: "system" | "network" | "digital" | "target" | "star" | "audience" | "leader" | "globe" | "handshake" }) {
  if (name === "star") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m12 3 2.65 5.37 5.93.86-4.29 4.18 1.01 5.9L12 16.52 6.7 19.31l1.01-5.9-4.29-4.18 5.93-.86L12 3Z" />
      </svg>
    );
  }

  if (name === "target") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="22" cy="26" r="15" /><circle cx="22" cy="26" r="8" />
        <path d="m22 26 14-14M31 12h5v5M17 7h10M8 16l7-7M7 23v10M13 40l6-6M28 40h8" />
      </svg>
    );
  }

  if (name === "audience") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="13" r="5" /><circle cx="11" cy="20" r="4" /><circle cx="37" cy="20" r="4" />
        <path d="M15 40v-5c0-6 4-10 9-10s9 4 9 10v5M4 40v-4c0-5 3-8 8-8m32 12v-4c0-5-3-8-8-8" />
        <path d="m24 3 1.7 3.4 3.8.6-2.8 2.7.7 3.8-3.4-1.8-3.4 1.8.7-3.8L18.5 7l3.8-.6L24 3Z" />
      </svg>
    );
  }

  if (name === "leader") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="22" cy="16" r="8" /><path d="M7 42v-5c0-8 6-13 15-13 5 0 9 2 12 5" />
        <rect x="29" y="29" width="14" height="11" rx="2" /><path d="M33 29v-3h6v3m-10 5h14" />
      </svg>
    );
  }

  if (name === "globe") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r="18" /><path d="M6 24h36M24 6c6 5 9 11 9 18s-3 13-9 18c-6-5-9-11-9-18s3-13 9-18Z" />
      </svg>
    );
  }

  if (name === "handshake") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="m5 17 9-6 8 5 4-2 9 5 8-3m-35 3 8 16 6-3m18-12-7 15-7-3M17 30l5 5m0-8 7 6m-4-10 9 7" />
      </svg>
    );
  }

  if (name === "network") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="8" r="4" /><circle cx="10" cy="19" r="4" /><circle cx="38" cy="19" r="4" />
        <circle cx="14" cy="37" r="4" /><circle cx="34" cy="37" r="4" /><circle cx="24" cy="25" r="5" />
        <path d="m21 11-8 5m14-5 8 5M13 22l7 2m15-2-7 2M17 35l4-6m10 6-4-6M18 38h12" />
      </svg>
    );
  }

  if (name === "digital") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M24 5v8m0 22v8M5 24h8m22 0h8M10.5 10.5l5.7 5.7m15.6 15.6 5.7 5.7m0-27-5.7 5.7M16.2 31.8l-5.7 5.7" />
        <rect x="17" y="17" width="14" height="14" rx="2" /><path d="M21 21h6v6h-6z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="24" r="8" />
      <path d="M24 4v7m0 26v7M4 24h7m26 0h7M10 10l5 5m18 18 5 5m0-28-5 5M15 33l-5 5" />
      <circle cx="24" cy="24" r="16" />
    </svg>
  );
}

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

      <section className="home-way-v2" id="who-we-are">
        <div className="home-way-v2__inner">
          <div className="home-way-v2__intro">
            <div className="home-way-v2__eyebrow"><span aria-hidden="true" />The Arete Partners Way</div>
            <h2><span>At Arete Partners, we close</span><span>the <em>execution</em> gap.</span></h2>
            <p>
              Organisations rarely fail because they lack ambition or strategy. They struggle because execution becomes
              fragmented—priorities compete, initiatives operate in isolation, and transformation fails to translate into
              measurable business outcomes.
            </p>
            <strong>We exist to close that gap.</strong>
          </div>

          <aside className="home-way-v2__belief">
            <div className="home-way-v2__belief-top">
              <span className="home-way-v2__quote-mark" aria-hidden="true">“</span>
              <p>Arete Partners is a technology-enabled global consulting firm built on a simple but powerful belief:</p>
            </div>
            <blockquote>
              Business performance<br />improves when execution is<br />
              <em>disciplined, integrated,</em> and<br /><em>measurable.</em>
            </blockquote>
          </aside>

          <article className="home-way-v2__card">
            <div className="home-way-v2__icon"><AreteWayIcon name="system" /></div>
            <p>
              Through our proprietary <strong>Arete Execution System™</strong>, we align strategy, operations, technology,
              governance, people, and performance into one integrated execution model—transforming ambition into measurable
              business outcomes that drive profitable growth, operational excellence, and sustainable competitive advantage.
            </p>
          </article>

          <article className="home-way-v2__card">
            <div className="home-way-v2__icon"><AreteWayIcon name="network" /></div>
            <p>
              Our expertise spans Growth &amp; Strategy, Global Capability Centers, Tech-Enabled Transformation, ESG &amp; Enterprise
              Value, and Business Process Excellence &amp; Industry 4.0. These are not independent consulting offerings. They are
              interconnected capabilities within a single execution system, where every initiative reinforces the next and every
              transformation contributes to enterprise-wide performance.
            </p>
          </article>

          <div className="home-way-v2__banner">
            <span className="home-way-v2__star"><AreteWayIcon name="star" /></span>
            <strong>What differentiates Arete Partners is not simply the breadth of our expertise—<br />it is the discipline of our execution.</strong>
            <span className="home-way-v2__closing-quote" aria-hidden="true">”</span>
          </div>

          <article className="home-way-v2__card">
            <div className="home-way-v2__icon"><AreteWayIcon name="digital" /></div>
            <p>
              We combine deep industry knowledge with proven methodologies to simplify complexity, eliminate inefficiencies,
              standardize operations, embed KPI-driven management, and establish the operational foundations required for
              technology to create measurable value. Rather than allowing digital transformation to add complexity, we ensure it
              accelerates business performance.
            </p>
          </article>

          <article className="home-way-v2__card">
            <div className="home-way-v2__icon"><AreteWayIcon name="target" /></div>
            <p>
              Supported by a global delivery model, technology-enabled capabilities, and outcome-focused execution, we help
              organizations transform faster, execute with confidence, and deliver measurable business impact—consistently and at
              scale.
            </p>
          </article>
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

      <section className="home-clean-apart" id="what-sets-us-apart">
        <div className="container">
          <div className="home-clean-apart__top">
            <div>
              <p className="home-clean-kicker">What Sets Us Apart</p>
              <h2>Where strategy becomes execution.</h2>
              <p className="home-clean-apart__lead">
                Most consulting firms help organisations decide what to do.<br />
                <strong>We build the execution system that ensures it gets done.</strong>
              </p>
              <p>
                Powered by <strong>The Arete Execution System™</strong>, we bridge the gap between boardroom vision and frontline
                results—combining deep expertise, integrated delivery, and a tech-enabled approach without losing the human touch.
              </p>
            </div>
            <aside>
              <p className="home-clean-kicker">Our Difference</p>
              <strong>Execution isn&apos;t an activity.<br /><em>It&apos;s a system.</em></strong>
              <span className="home-clean-apart__badge"><AreteWayIcon name="target" /></span>
            </aside>
          </div>

          <div className="home-clean-apart__grid">
            {apartItems.map((item) => (
              <article className="home-clean-apart-card" key={item.num}>
                <span className="home-clean-apart-card__number">{item.num}</span>
                <div className="home-clean-apart-card__icon"><AreteWayIcon name={item.icon} /></div>
                <h3>{item.title}</h3>
                <span className="home-clean-apart-card__rule" aria-hidden="true" />
                <p>{item.body}</p>
              </article>
            ))}
          </div>

          <div className="home-clean-apart__cta">
            <span className="home-clean-apart__cta-icon"><AreteWayIcon name="handshake" /></span>
            <div>
              <h3>Ready to build an organisation that consistently executes?</h3>
              <p>Let&apos;s transform ambition into measurable business performance.</p>
            </div>
            <Link className="home-clean-btn home-clean-btn--brand" href="/contact-us">
              Book an Executive Discussion <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="home-clean-impact" id="impact">
        <div className="container">
          <p className="home-clean-kicker">Our Impact</p>
          <h2>Experience that compounds into <em>measurable results.</em></h2>
          <div className="home-clean-stats">
            {stats.map((stat) => (
              <div className="home-clean-stat" key={stat.value}>
                <span className="home-clean-stat__icon"><AreteWayIcon name={stat.icon} /></span>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
