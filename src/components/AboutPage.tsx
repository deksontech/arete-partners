"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type IconName =
  | "target" | "people" | "chart" | "globe" | "shield" | "gear"
  | "handshake" | "brain" | "leaf" | "compass" | "eye" | "lock" | "network"
  | "star" | "cycle" | "chip" | "flag" | "monitor" | "gauge" | "mountainFlag" | "globePeople" | "robot" | "smile";

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
  network: <><circle cx="12" cy="12" r="2.5"/><circle cx="12" cy="3.5" r="2"/><circle cx="20" cy="9" r="2"/><circle cx="17" cy="19" r="2"/><circle cx="7" cy="19" r="2"/><circle cx="4" cy="9" r="2"/><path d="m12 5.5v4m2.4 1.2 3.7-1.2m-4.6 4.6 2.4 3.2m-5.4-3.2-2.4 3.2m1.5-6.6L5.9 9.5"/></>,
  star: <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z"/>,
  cycle: <><path d="M5 7a8 8 0 0 1 13-1l2 2M19 17a8 8 0 0 1-13 1l-2-2"/><path d="M20 3v5h-5M4 21v-5h5"/></>,
  chip: <><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M9 2v3m6-3v3M9 19v3m6-3v3M2 9h3m-3 6h3m14-6h3m-3 6h3"/><circle cx="12" cy="12" r="2"/></>,
  flag: <><path d="M6 21V4m0 1h10l-2 3 2 3H6"/><path d="m4 21 2-2 2 2"/></>,
  monitor: <><rect x="3" y="4" width="18" height="13" rx="1.5"/><path d="M8 21h8m-4-4v4M6.5 13l3-3 2.5 2 5-5m0 0v3m0-3h-3"/></>,
  gauge: <><path d="M4 17a8 8 0 1 1 16 0"/><path d="m7 16 5-6 5 6M7 20h10"/><circle cx="12" cy="16" r="1"/></>,
  mountainFlag: <><path d="M2.5 20 8 10l3.2 4.2 2.7-3.4L21.5 20h-19Z"/><path d="M13.8 10.8V2.5m0 1h6l-1.6 2.2 1.6 2.2h-6"/><path d="m5.5 20 4.3-5.6 2.1 2.7 2.1-2.6 4.5 5.5"/></>,
  globePeople: <><circle cx="12" cy="9" r="6.5"/><path d="M5.5 9h13M12 2.5c2.2 2.1 2.2 10.9 0 13M12 2.5c-2.2 2.1-2.2 10.9 0 13"/><circle cx="8" cy="17" r="2.1"/><circle cx="16" cy="17" r="2.1"/><path d="M3.8 22a4.2 4.2 0 0 1 8.4 0m-.4 0a4.2 4.2 0 0 1 8.4 0"/></>,
  robot: <><path d="M5 20h8M9 20v-3l3-2 2-5 4 2 2-3"/><circle cx="14" cy="9" r="2"/><circle cx="20" cy="8" r="1.5"/><path d="m12 15-4-4 2-3 4 1m-6 2H4v4h4"/></>,
  smile: <><circle cx="12" cy="12" r="9"/><path d="M8 14.5c1 1.4 2.3 2.1 4 2.1s3-.7 4-2.1M8.5 9h.01M15.5 9h.01"/></>,
};

function AboutIcon({ name }: { name: IconName }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

function PurposeCardIcon({ name }: { name: "target" | "eye" | "handshake" }) {
  if (name === "target") return <svg viewBox="0 0 48 48" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle className="primary" cx="23" cy="25" r="13"/><circle className="secondary" cx="23" cy="25" r="6"/><path className="secondary" d="m28 20 13-13m-7 0h7v7"/></svg>;
  if (name === "eye") return <svg viewBox="0 0 48 48" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round"><path className="primary" d="M4 24s7-12 20-12 20 12 20 12-7 12-20 12S4 24 4 24Z"/><circle className="secondary" cx="24" cy="24" r="5"/></svg>;
  return <svg viewBox="0 0 48 48" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round"><path className="primary" d="m4 23 9-9 8 4 6-3 17 12-7 7-6-3-5 5-6-4-5 3L4 23Z"/><path className="secondary" d="m15 25 10 7m2-17 8-4 9 8"/></svg>;
}

function PurposeEmblem() {
  return <svg viewBox="0 0 96 96" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round"><path className="mountain" d="M12 76 38 31l15 20 12-15 20 40H12Z"/><path className="ridge" d="m23 76 17-28 12 16 12-14 11 26"/><path className="flagpole" d="M57 43V13"/><path className="flag" d="M57 15h24l-7 8 7 8H57Z"/></svg>;
}

function SummitFlag() {
  return <svg viewBox="0 0 48 48" aria-hidden="true" fill="none"><path className="pole" d="M10 44V6"/><circle cx="10" cy="6" r="2.5"/><path className="banner" d="M11 8h27l-8 9 8 9H11Z"/></svg>;
}

function FoundationMark() {
  return <svg viewBox="0 0 72 56" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M5 49 26 17l11 16 8-11 22 27H5Z"/><path d="m15 49 13-20 10 14 8-10 12 16"/><path d="m31 49 9-12 8 12"/></svg>;
}

function PrincipleSummitIllustration() {
  return <svg viewBox="0 0 190 92" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round"><path className="ridge" d="M2 88 30 72l15 4 22-20 17 13 10-8 13 11 25-30 16 14 15-22 25 28"/><path className="people" d="M101 72c3-12 6-18 11-18s8 6 10 18m-14-23a5 5 0 1 1 9 0m10 23c1-14 5-22 10-22 6 0 9 8 10 22m-15-29a5 5 0 1 1 10 0m-22 29 8-13m17 13-7-16m2-11V18m0 2h17l-5 7 5 7h-17"/><path className="trail" d="m83 88 18-11 12 1 13-7 14 4 20 13"/></svg>;
}

function PurposePrincipleIcon({ name }: { name: "target" | "gauge" | "cycle" | "growth" }) {
  if (name === "target") return <svg viewBox="0 0 48 48" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle className="primary" cx="22" cy="26" r="11"/><circle className="primary" cx="22" cy="26" r="4"/><path className="secondary" d="m27 21 14-14m-7 0h7v7"/></svg>;
  if (name === "gauge") return <svg viewBox="0 0 48 48" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round"><path className="primary" d="M8 35a16 16 0 0 1 32 0M12 35h24"/><path className="secondary" d="m24 33 8-12"/><circle className="secondary" cx="24" cy="34" r="2"/></svg>;
  if (name === "cycle") return <svg viewBox="0 0 48 48" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round"><path className="primary" d="M10 18A16 16 0 0 1 37 14l4 5M38 30A16 16 0 0 1 11 34l-4-5"/><path className="secondary" d="M41 9v10H31M7 39V29h10"/></svg>;
  return <svg viewBox="0 0 48 48" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round"><path className="primary" d="M8 40V27m10 13V20m10 20V13m10 27H5"/><path className="secondary" d="m8 23 10-9 9 5L41 6m-9 0h9v9"/></svg>;
}

const originSteps = [
  ["handshake", "Hand-in-hand delivery", "We work as an extension of your leadership team, co-owning the problem, the plan, and the outcome."],
  ["brain", "Deep expertise x tech", "A model that fuses domain expertise with technology so execution is faster, smarter, and scalable."],
  ["globe", "Global scale, personal feel", "A globally scalable delivery approach that stays personal, ensuring clarity, continuity, and trust."],
] as const;

const capabilities = [
  ["chart", "Enterprise Growth & Strategy", "Define where to play, how to win, and how to execute for sustainable, profitable growth.", "/growth-transformation"],
  ["globePeople", "Shared Services & Global Capability Centers", "Design, establish, optimize, and scale world-class GCCs that become enterprise growth engines.", "/global-capability-centers"],
  ["chip", "Tech-Enabled Transformation", "Integrate AI, automation, data, and digital platforms into execution systems that improve business performance.", "/services"],
  ["leaf", "ESG & Enterprise Value", "Embed sustainability into strategy and operations to create resilience, trust, and long-term enterprise value.", "/services"],
  ["robot", "Business Process Excellence & Industry 4.0", "Build operational excellence through Lean, intelligent automation, and Industry 4.0 before scaling digital transformation.", "/process-advisory"],
] as const;

const principles = [
  { icon: "people", title: "Client-First Mindset", desc: "We put your priorities at the center of everything we do, aligning strategies with your vision.", metrics: [["95%+", "Client satisfaction scores"], ["80%+", "Repeat engagements with over 80% of our clients"], ["Measurable", "Business KPI improvements within the first 3–6 months"]] },
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
            <a className="about-v2-btn is-ghost" href="#capabilities">Explore The Arete Execution System&trade;</a>
          </div>
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
            {originSteps.map(([icon,title,text]) => <article key={title}><span><AboutIcon name={icon}/></span><div><h3>{title}</h3><p>{text}</p></div></article>)}
          </div>
        </div>
        <div className="about-v2-shell about-v2-quote-band"><b>“</b><span>Our belief is simple:</span><strong>When strategy, people, and technology move together, <em>extraordinary results become inevitable.</em></strong><span>That’s the <em>Arete</em> way.</span></div>
      </section>

      <section className="about-purpose-spec" id="purpose">
        <div className="about-purpose-spec__upper">
          <div className="about-purpose-spec__main">
            <p className="about-purpose-spec__kicker">Purpose &amp; Philosophy</p>
            <h2><span>Execution&mdash;not strategy&mdash;</span><br />is the true source of<br /><em>competitive advantage.</em></h2>
            <i className="about-purpose-spec__rule" />
            <div className="about-purpose-spec__copy">
              <p>Most organisations have capable people, clear strategies, and significant technology investments.<br />Yet transformation fails when execution becomes fragmented.</p>
              <p>At Arete Partners, we believe sustainable business performance is created when strategy, operations, technology, governance, people, and performance operate as one integrated execution system.</p>
              <p>That belief became the foundation of<br /><strong>The Arete Execution System&trade;.</strong></p>
            </div>
            <div className="about-purpose-spec__mountain" aria-label="Execution path from people to performance">
              <svg className="about-purpose-spec__path" viewBox="0 0 660 520" preserveAspectRatio="none" aria-hidden="true"><path d="M54 474 C135 462 165 425 205 410 S280 349 336 322 S405 226 467 190 S548 88 628 32" /></svg>
              {([[
                "people", "People"
              ], ["gear", "Strategy & Operations"], ["monitor", "Process & Technology"], ["shield", "Risk & Governance"], ["chart", "Performance Delivery"]] as const).map(([icon,label]) => <div className="about-purpose-spec__node" key={label}><span><AboutIcon name={icon}/></span><b>{label}</b></div>)}
              <span className="about-purpose-spec__flag"><SummitFlag /></span>
            </div>
          </div>
          <div className="about-purpose-spec__cards">
            <article className="is-purpose"><span><PurposeCardIcon name="target" /></span><div><h3>Our Purpose</h3><p>To help organisations transform ambition into measurable business outcomes through disciplined execution.</p></div></article>
            <article><span><PurposeCardIcon name="eye" /></span><div><h3>Our Vision</h3><p>To become the global benchmark for execution-led transformation&mdash;where organisations achieve sustainable growth through integrated execution, not fragmented initiatives.</p></div></article>
            <article><span><PurposeCardIcon name="handshake" /></span><div><h3>Our Promise</h3><p>Every engagement leaves our clients with stronger capabilities, better operating systems, and performance that continues long after the engagement ends.</p></div></article>
          </div>
        </div>
        <div className="about-purpose-spec__banner">
          <span className="about-purpose-spec__emblem"><PurposeEmblem /></span>
          <div className="about-purpose-spec__statement"><small>The Arete Principle&trade;</small><i /><strong>Business performance improves when<br />execution becomes a system&mdash;<br />not a collection of projects.</strong></div>
          {[["target","Integrated Execution"],["gauge","Measurable Outcomes"],["cycle","Continuous Improvement"],["growth","Sustainable Impact"]].map(([icon,label]) => <div className="about-purpose-spec__principle" key={label}><PurposePrincipleIcon name={icon as "target" | "gauge" | "cycle" | "growth"}/><b>{label}</b></div>)}
        </div>
      </section>

      <section className="about-v2-who" id="who-we-are">
        <div className="about-v2-shell about-v2-who-grid">
          <div>
            <SectionKicker>Who We Are</SectionKicker>
            <h2>A consulting partner<br />built for <span>lasting impact.</span></h2>
            <i className="about-v2-rule" />
            <div className="about-v2-who-list">
              {[["chart",<>We are a consulting partner dedicated to driving <strong>growth, operational excellence, technology enablement, and sustainability.</strong></>],["people",<>Working as an extension of our clients’ teams, we support them from <strong>strategy to execution</strong>, delivering results that are sustainable, measurable, and lasting.</>],["target",<>Our mission is clear: make our clients successful and earn the privilege of being their <strong>Advisor for Life.</strong></>],["network",<>By combining global talent, deep domain expertise, and proprietary technology assets, we deliver transformations that <strong>accelerate growth, strengthen resilience, and spark innovation.</strong></>],["shield",<>We operate in a <strong>trusted, secure, and compliant</strong> environment, ensuring confidentiality, data integrity, and uncompromising quality in everything we do.</>]].map(([icon,text],i) => <div key={i}><span><AboutIcon name={icon as IconName}/></span><p>{text}</p></div>)}
            </div>
          </div>
          <div className="about-v2-who-art">
            <Image src="/assets/who-we-are-reference-panel.png" alt="Who We Are: driving growth and empowering clients as their Advisor for Life through trusted, secure and uncompromising delivery" width={660} height={800} />
          </div>
        </div>
      </section>

      <section className="about-v2-foundation" id="foundation">
        <div className="about-v2-shell">
          <SectionKicker>Foundation</SectionKicker>
          <h2>The foundation<br />of every <span>engagement</span></h2>
          <i className="about-v2-rule" />
          <div className="about-v2-foundation-grid">
            {[["compass","Execution Philosophy","At Arete Partners, execution is never an afterthought—it is the foundation of every engagement. We combine strategy, governance, technology, people, and performance into one integrated system that consistently translates ambition into measurable business outcomes."],["chart","Progress Milestones","In a short span, we’ve brought together exceptional global talent, industry-leading expertise, and a tech-enabled, integrated delivery model to help organizations achieve measurable results and enduring transformation—across industries and geographies."],["people","Team Culture","Our team is united by a shared purpose, fueled by agility, and thrives on collaboration. We build trust through integrity, deliver excellence through discipline, and measure success by the lasting impact we create for our clients, their customers, and stakeholders."]].map(([icon,title,text]) => <article key={title}><header><span><AboutIcon name={icon as IconName}/></span><div><h3>{title}</h3><i /></div></header><p>{text}</p></article>)}
          </div>
          <div className="about-v2-foundation-quote">
            <b>“</b>
            <strong>Our belief is simple:</strong>
            <p>When strategy, people, and technology move together,<br /><em>extraordinary results</em> become inevitable.</p>
            <span className="about-v2-foundation-mark"><FoundationMark /></span>
            <span>That’s the <em>Arete</em> way.</span>
          </div>
        </div>
      </section>

      <section className="about-v2-capabilities" id="capabilities">
        <div className="about-v2-shell">
          <SectionKicker>Our Capabilities</SectionKicker>
          <h2>Five capabilities.<br />One <span>execution system.</span></h2>
          <p className="about-v2-lead">Every engagement is powered by the Arete Execution System&trade;—integrating strategy, technology, operations, governance, and performance to deliver measurable business outcomes.</p>
          <div className="about-v2-cap-grid">
            {capabilities.map(([icon,title,text,href],index) => <article key={title}><header><span><AboutIcon name={icon}/></span><em>{String(index + 1).padStart(2,"0")}</em></header><h3>{title}</h3><i/><p>{text}</p><Link href={href}>Explore <b>→</b></Link></article>)}
          </div>
          <div className="about-v2-powered">Powered by <strong>The Arete Execution System&trade;</strong></div>
          <div className="about-v2-cap-band"><span><FoundationMark /></span><p>Every capability is delivered through one integrated execution methodology—aligning strategy, governance, technology, people, and performance into measurable business outcomes.</p>{[["target","Strategy Alignment"],["gear","Operational Excellence"],["chip","Technology Enablement"],["people","People Empowerment"],["chart","Performance Impact"]].map(([icon,label]) => <div key={label}><AboutIcon name={icon as IconName}/><b>{label}</b></div>)}</div>
        </div>
      </section>

      <section className="about-v2-principles" id="principles">
        <div className="about-v2-shell">
          <SectionKicker>Our Guiding Principles</SectionKicker>
          <h2>Our 5 Core Principles —<br />and the <span>Impact</span> We Deliver.</h2>
          <p className="about-v2-lead">Guided by these principles, we help organizations unlock potential, drive performance, and create lasting value.</p>
          <div className="about-v2-principles-grid">
            <div className="about-v2-principles-rail" role="tablist" aria-label="Core principles">
              {principles.map((item,index) => <button key={item.title} role="tab" aria-selected={index === activePrinciple} onClick={() => setActivePrinciple(index)}><span><AboutIcon name={item.icon as IconName}/></span><em>{String(index + 1).padStart(2,"0")}</em><b>{item.title}</b><i>→</i></button>)}
            </div>
            <article className="about-v2-principle-detail" role="tabpanel" aria-live="polite">
              <header><div><small>Core Principle</small><i /></div><em>●&nbsp; {String(activePrinciple + 1).padStart(2,"0")}</em></header>
              <h3>{principle.title}</h3>
              <p>{principle.desc}</p><hr/><small>The Impact We Deliver</small>
              <div className="about-v2-metrics">{principle.metrics.map(([value,label]) => <div key={label}><span><AboutIcon name={value === "95%+" ? "smile" : value === "80%+" ? "handshake" : "chart"}/></span><strong>{value}</strong><p>{label}</p></div>)}</div>
              <blockquote><b>“</b><span>When our clients succeed,<br />we succeed — <em>every time.</em></span><PrincipleSummitIllustration /></blockquote>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
