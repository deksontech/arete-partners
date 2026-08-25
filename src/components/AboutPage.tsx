"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type IconName =
  | "target" | "people" | "chart" | "globe" | "shield" | "gear"
  | "handshake" | "brain" | "leaf" | "compass" | "eye" | "lock"
  | "star" | "cycle" | "chip" | "flag";

const paths: Record<IconName, React.ReactNode> = {
  target: <><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="3"/><path d="m15 9 6-6m-2 0h2v2"/></>,
  people: <><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3.5 20v-2.5A4.5 4.5 0 0 1 8 13h2a4.5 4.5 0 0 1 4.5 4.5V20M15 14h1.5a4 4 0 0 1 4 4v2"/></>,
  chart: <><path d="M4 20V10m6 10V5m6 15v-7m4 7H2"/><path d="m4 8 5-4 5 4 6-6"/></>,
  globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></>,
  shield: <><path d="M12 3 4.5 6v5.5c0 4.8 3 7.8 7.5 9.5 4.5-1.7 7.5-4.7 7.5-9.5V6L12 3Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></>,
  gear: <><circle cx="12" cy="12" r="3"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M19 5l-1.5 1.5m-11 11L5 19"/><circle cx="12" cy="12" r="7"/></>,
  handshake: <><path d="m3 12 4-4 4 2 2-1 8 6-3 3-3-1-2 2-3-2-2 1-5-6Z"/><path d="m8 13 4 3m1-7 4-2 4 4"/></>,
  brain: <><path d="M9 4a3 3 0 0 0-5 2.2A3 3 0 0 0 3 12a3 3 0 0 0 2 5.7A3 3 0 0 0 10 20V4Zm6 0a3 3 0 0 1 5 2.2 3 3 0 0 1 1 5.8 3 3 0 0 1-2 5.7A3 3 0 0 1 14 20V4Z"/><path d="M7 8h3m-4 5h4m4-5h3m-3 5h4"/></>,
  leaf: <><path d="M20 4C12 4 5 7 5 14c0 3 2 5 5 5 7 0 10-7 10-15Z"/><path d="M4 21c3-7 8-10 13-13"/></>,
  compass: <><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/></>,
  eye: <><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"/><circle cx="12" cy="12" r="2.5"/></>,
  lock: <><rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 4v2"/></>,
  star: <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z"/>,
  cycle: <><path d="M5 7a8 8 0 0 1 13-1l2 2M19 17a8 8 0 0 1-13 1l-2-2"/><path d="M20 3v5h-5M4 21v-5h5"/></>,
  chip: <><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M9 2v3m6-3v3M9 19v3m6-3v3M2 9h3m-3 6h3m14-6h3m-3 6h3"/><circle cx="12" cy="12" r="2"/></>,
  flag: <><path d="M6 21V4m0 1h10l-2 3 2 3H6"/><path d="m4 21 2-2 2 2"/></>,
};

function AboutIcon({ name }: { name: IconName }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

const originSteps = [
  ["handshake", "Hand-in-hand delivery", "We work as an extension of your leadership team, co-owning the problem, the plan, and the outcome."],
  ["brain", "Deep expertise x tech", "A model that fuses domain expertise with technology so execution is faster, smarter, and scalable."],
  ["globe", "Global scale, personal feel", "A globally scalable delivery approach that stays personal, ensuring clarity, continuity, and trust."],
] as const;

const capabilities = [
  ["chart", "Enterprise Growth & Strategy", "Define where to play, how to win, and how to execute for sustainable, profitable growth.", "/growth-transformation"],
  ["globe", "Shared Services & Global Capability Centers", "Design, establish, optimise, and scale world-class GCCs that become enterprise growth engines.", "/global-capability-centers"],
  ["chip", "Tech-Enabled Transformation", "Integrate AI, automation, data, and digital platforms into execution systems that improve business performance.", "/services"],
  ["leaf", "ESG & Enterprise Value", "Embed sustainability into strategy and operations to create resilience, trust, and long-term enterprise value.", "/services"],
  ["gear", "Business Process Excellence & Industry 4.0", "Build operational excellence through Lean, intelligent automation, and Industry 4.0 before scaling digital transformation.", "/process-advisory"],
] as const;

const principles = [
  { icon: "people", title: "Client-First Mindset", desc: "We put your priorities at the centre of everything we do, aligning strategies with your vision.", metrics: [["95%+", "Client satisfaction scores"], ["80%+", "Repeat engagements with our clients"], ["Measurable", "Business KPI improvements in 3-6 months"]] },
  { icon: "handshake", title: "Employee Engagement & Ownership", desc: "We empower our people to take responsibility, innovate, and drive impact as if they own the outcome.", metrics: [["90%+", "Project ownership scores"], ["Faster", "Decision cycles"], ["Proactive", "Issue resolution before escalation"]] },
  { icon: "star", title: "Ownership for Excellence", desc: "We hold ourselves accountable for delivering at the highest standards, every time and without compromise.", metrics: [["98%+", "On-time project delivery"], ["9/10", "Client-rated quality"], ["Zero", "Critical delivery defects"]] },
  { icon: "leaf", title: "Deliver Sustainable Results", desc: "We design strategies and solutions that deliver measurable, long-term value beyond the initial engagement.", metrics: [["12 mo", "Sustainability review"], ["85%+", "Outcomes still delivering value"], ["Lasting", "Capability beyond engagement"]] },
  { icon: "chart", title: "Ensure Positive ROI", desc: "We commit to delivering financial and operational returns that far exceed investment.", metrics: [["16 wk", "Target to positive ROI"], ["4:1", "Target return after rollout"], ["Positive", "Financial and operational value"]] },
] as const;

function SectionKicker({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`about-v2-kicker${light ? " is-light" : ""}`}>{children}</p>;
}

export function AboutPage() {
  const [activePrinciple, setActivePrinciple] = useState(0);
  const principle = principles[activePrinciple];

  return (
    <div className="about-redesign">
      <section className="about-v2-hero" id="about-top">
        <div className="about-v2-shell about-v2-hero-copy">
          <SectionKicker light>About Arete Partners</SectionKicker>
          <h1>We build execution systems<br />that turn strategy into<br /><span>measurable outcomes.</span></h1>
          <p>Arete Partners is a tech-enabled consulting firm that helps organisations navigate complexity, align priorities, and execute with discipline. Our proprietary <strong>Arete Execution System&trade;</strong> integrates strategy, operations, technology, people, and performance into one cohesive model, delivering sustained impact, not isolated results.</p>
          <div className="about-v2-actions">
            <Link className="about-v2-btn is-magenta" href="/contact-us">Book an Executive Discussion <b>→</b></Link>
            <a className="about-v2-btn is-ghost" href="#purpose">Explore The Arete Execution System&trade;</a>
          </div>
        </div>
        <div className="about-v2-proof about-v2-shell">
          {[["target","Execution First","We focus on what drives results, not just plans."],["people","Integrated Approach","Strategy, operations, technology, people, and performance working as one."],["chart","Measurable Impact","We define success through outcomes that create enterprise value."],["globe","Global Perspective","Local insight. Global delivery. Consistent excellence."],["shield","Trusted Partner","We partner with leaders as an extension of their team."]].map(([icon,title,text]) => <div className="about-v2-proof-item" key={title}><span><AboutIcon name={icon as IconName}/></span><div><b>{title}</b><p>{text}</p></div></div>)}
        </div>
      </section>

      <section className="about-v2-origin" id="origin">
        <div className="about-v2-shell about-v2-origin-main">
          <div className="about-v2-origin-copy">
            <SectionKicker>Origin Story</SectionKicker>
            <h2>Built to deliver<br /><span>sustainable results</span></h2>
            <i className="about-v2-rule" />
            <p>It all began with a bold question: <strong>How can we work hand in hand with our clients to deliver sustainable results</strong>, where every consulting dollar becomes a multiplier of growth, innovation, and impact?</p>
            <p>Our answer was to create a model that fuses deep expertise with technology, and a delivery approach that scales globally while staying personal.</p>
            <div className="about-v2-origin-values">
              {[["target","Purpose-Driven","We start with impact in mind."],["people","Client-Centric","We succeed when you do."],["chip","Tech-Enabled","Technology accelerates outcomes."],["globe","Globally Scalable","Global best practices, locally relevant."]].map(([icon,title,text]) => <div key={title}><span><AboutIcon name={icon as IconName}/></span><b>{title}</b><small>{text}</small></div>)}
            </div>
          </div>
          <div className="about-v2-origin-steps">
            {originSteps.map(([icon,title,text], index) => <article key={title}><em>{String(index + 1).padStart(2,"0")}</em><span><AboutIcon name={icon}/></span><div><h3>{title}</h3><p>{text}</p></div></article>)}
          </div>
        </div>
        <div className="about-v2-shell about-v2-quote-band"><b>“</b><span>Our belief is simple:</span><strong>When strategy, people, and technology move together, <em>extraordinary results become inevitable.</em></strong><span>That’s the <em>Arete</em> way.</span></div>
      </section>

      <section className="about-v2-purpose" id="purpose">
        <div className="about-v2-shell about-v2-purpose-grid">
          <div className="about-v2-purpose-copy">
            <SectionKicker>Purpose & Philosophy</SectionKicker>
            <h2>Execution, not strategy,<br />is the true source of<br /><span>competitive advantage.</span></h2>
            <i className="about-v2-rule" />
            <p>Most organisations have capable people, clear strategies, and significant technology investments. Yet transformation fails when execution becomes fragmented.</p>
            <p>At Arete Partners, we believe sustainable business performance is created when strategy, operations, technology, governance, people, and performance operate as one integrated execution system.</p>
            <p>That belief became the foundation of <strong>The Arete Execution System&trade;.</strong></p>
            <div className="about-v2-climb" aria-label="People, operations, technology, governance and performance form one ascent"><span>People</span><span>Operations</span><span>Technology</span><span>Governance</span><span>Performance</span></div>
          </div>
          <div className="about-v2-purpose-cards">
            {[["target","Our Purpose","To help organisations transform ambition into measurable business outcomes through disciplined execution."],["eye","Our Vision","To become the global benchmark for execution-led transformation, where organisations achieve sustainable growth through integrated execution, not fragmented initiatives."],["handshake","Our Promise","Every engagement leaves our clients with stronger capabilities, better operating systems, and performance that continues long after the engagement ends."]].map(([icon,title,text]) => <article key={title}><span><AboutIcon name={icon as IconName}/></span><div><h3>{title}</h3><p>{text}</p></div></article>)}
          </div>
        </div>
        <div className="about-v2-shell about-v2-principle-band"><span><AboutIcon name="flag"/></span><div><small>The Arete Principle&trade;</small><strong>Business performance improves when execution becomes a system, not a collection of projects.</strong></div>{[["target","Integrated Execution"],["chart","Measurable Outcomes"],["cycle","Continuous Improvement"],["leaf","Sustainable Impact"]].map(([icon,label]) => <div className="about-v2-principle-item" key={label}><AboutIcon name={icon as IconName}/><b>{label}</b></div>)}</div>
      </section>

      <section className="about-v2-who" id="who-we-are">
        <div className="about-v2-shell about-v2-who-grid">
          <div>
            <SectionKicker>Who We Are</SectionKicker>
            <h2>A consulting partner<br />built for lasting <span>impact.</span></h2>
            <i className="about-v2-rule" />
            <div className="about-v2-who-list">
              {[["chart",<>We are a consulting partner dedicated to driving <strong>growth, operational excellence, technology enablement, and sustainability.</strong></>],["people",<>Working as an extension of our clients’ teams, we support them from <strong>strategy to execution</strong>, delivering results that are sustainable, measurable, and lasting.</>],["target",<>Our mission is clear: make our clients successful and earn the privilege of being their <strong>Advisor for Life.</strong></>],["chip",<>By combining global talent, deep domain expertise, and proprietary technology assets, we deliver transformations that <strong>accelerate growth, strengthen resilience, and spark innovation.</strong></>],["shield",<>We operate in a <strong>trusted, secure, and compliant</strong> environment, ensuring confidentiality, data integrity, and uncompromising quality.</>]].map(([icon,text],i) => <div key={i}><span><AboutIcon name={icon as IconName}/></span><p>{text}</p></div>)}
            </div>
          </div>
          <div className="about-v2-who-art">
            <Image src="/assets/who-we-are.png" alt="Arete Partners' connected growth and trusted advisor model" width={602} height={401} />
            <div><span><AboutIcon name="shield"/></span><b>Trusted, secure,<br />and compliant</b></div><div><span><AboutIcon name="lock"/></span><b>Confidential and<br />uncompromising quality</b></div>
            <p><AboutIcon name="people"/><strong>We don’t just consult.<br />We partner for <em>impact that lasts.</em></strong></p>
          </div>
        </div>
      </section>

      <section className="about-v2-foundation" id="foundation">
        <div className="about-v2-shell">
          <SectionKicker>Foundation</SectionKicker>
          <h2>The foundation<br />of every engagement</h2>
          <i className="about-v2-rule" />
          <div className="about-v2-foundation-grid">
            {[["compass","Execution Philosophy","At Arete Partners, execution is never an afterthought, it is the foundation of every engagement. We combine strategy, governance, technology, people, and performance into one integrated system that consistently translates ambition into measurable business outcomes."],["chart","Progress Milestones","In a short span, we’ve brought together exceptional global talent, industry-leading expertise, and a tech-enabled, integrated delivery model to help organisations achieve measurable results and enduring transformation across industries and geographies."],["people","Team Culture","Our team is united by a shared purpose, fuelled by agility, and thrives on collaboration. We build trust through integrity, deliver excellence through discipline, and measure success by the lasting impact we create for clients and stakeholders."]].map(([icon,title,text]) => <article key={title}><header><span><AboutIcon name={icon as IconName}/></span><h3>{title}</h3></header><p>{text}</p></article>)}
          </div>
          <div className="about-v2-foundation-quote"><b>“</b><span>Our belief is simple:</span><strong>When strategy, people, and technology move together, <em>extraordinary results become inevitable.</em></strong><span>That’s the <em>Arete</em> way.</span></div>
        </div>
      </section>

      <section className="about-v2-capabilities" id="capabilities">
        <div className="about-v2-shell">
          <SectionKicker>Our Capabilities</SectionKicker>
          <h2>Five capabilities.<br />One <span>execution system.</span></h2>
          <p className="about-v2-lead">Every engagement is powered by the Arete Execution System&trade;, integrating strategy, technology, operations, governance, and performance to deliver measurable business outcomes.</p>
          <div className="about-v2-cap-grid">
            {capabilities.map(([icon,title,text,href],index) => <article key={title}><header><span><AboutIcon name={icon}/></span><em>{String(index + 1).padStart(2,"0")}</em></header><h3>{title}</h3><i/><p>{text}</p><Link href={href}>Explore <b>→</b></Link></article>)}
          </div>
          <div className="about-v2-powered">Powered by <strong>The Arete Execution System&trade;</strong></div>
          <div className="about-v2-cap-band"><span><AboutIcon name="flag"/></span><p>Every capability is delivered through one integrated execution methodology, aligning strategy, governance, technology, people, and performance into measurable business outcomes.</p>{[["target","Strategy Alignment"],["gear","Operational Excellence"],["chip","Technology Enablement"],["people","People Empowerment"],["chart","Performance Impact"]].map(([icon,label]) => <div key={label}><AboutIcon name={icon as IconName}/><b>{label}</b></div>)}</div>
        </div>
      </section>

      <section className="about-v2-principles" id="principles">
        <div className="about-v2-shell">
          <SectionKicker>Our Guiding Principles</SectionKicker>
          <h2>Our 5 Core Principles,<br />and the <span>Impact</span> We Deliver.</h2>
          <p className="about-v2-lead">Guided by these principles, we help organisations unlock potential, drive performance, and create lasting value.</p>
          <div className="about-v2-principles-grid">
            <div className="about-v2-principles-rail" role="tablist" aria-label="Core principles">
              {principles.map((item,index) => <button key={item.title} role="tab" aria-selected={index === activePrinciple} onClick={() => setActivePrinciple(index)}><span><AboutIcon name={item.icon as IconName}/></span><em>{String(index + 1).padStart(2,"0")}</em><b>{item.title}</b><i>→</i></button>)}
            </div>
            <article className="about-v2-principle-detail" role="tabpanel">
              <header><div><small>Core Principle</small><h3>{principle.title}</h3></div><em>● {String(activePrinciple + 1).padStart(2,"0")}</em></header>
              <p>{principle.desc}</p><hr/><small>The Impact We Deliver</small>
              <div className="about-v2-metrics">{principle.metrics.map(([value,label]) => <div key={label}><span><AboutIcon name={value === "95%+" ? "target" : value === "80%+" ? "handshake" : "chart"}/></span><strong>{value}</strong><p>{label}</p></div>)}</div>
              <blockquote>“ <span>When our clients succeed,<br />we succeed, <em>every time.</em></span></blockquote>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
