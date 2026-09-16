import Image from "next/image";
import Link from "next/link";

type Card = { eyebrow: string; title: string; bullets: string[]; icon: string };
type Step = { title: string; body: string; icon: string };
type CaseStudy = {
  industry: string;
  workExecuted: string;
  title: string;
  body: string;
  results: string[];
  icon: string;
};
type ServiceDirectionData = {
  hero?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  driveArtwork?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  kicker: string;
  title: React.ReactNode;
  lead: string;
  backbone: string;
  backbonePill: string;
  leftLabel: string;
  rightLabel: string;
  signals: Card[];
  enables: Card[];
  impacts: { title: string; icon: string }[];
  driveTitle: React.ReactNode;
  driveIntro: string;
  driveSteps: Step[];
  triggerTitle: string;
  triggerIntro: string;
  triggers: Step[];
  caseTitle: React.ReactNode;
  caseIntro: string;
  cases: CaseStudy[];
};

function ServiceIcon({ name }: { name: string }) {
  if (["chart", "trend", "performance"].includes(name)) return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 40h32M14 34V24m10 10V14m10 20V20M10 22l9-8 8 5 10-12m-6 0h6v6"/></svg>;
  if (["people", "culture", "team"].includes(name)) return <svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="16" r="6"/><circle cx="12" cy="22" r="4"/><circle cx="36" cy="22" r="4"/><path d="M10 39c2-7 7-11 14-11s12 4 14 11M4 38c1-6 5-9 10-9m20 0c5 0 9 3 10 9"/></svg>;
  if (["data", "visibility"].includes(name)) return <svg viewBox="0 0 48 48" aria-hidden="true"><ellipse cx="24" cy="12" rx="13" ry="5"/><path d="M11 12v24c0 3 6 5 13 5s13-2 13-5V12M11 24c0 3 6 5 13 5s13-2 13-5"/></svg>;
  if (["shield", "quality", "compliance"].includes(name)) return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 6 38 12v11c0 10-6 16-14 19-8-3-14-9-14-19V12l14-6Z"/><path d="m17 24 5 5 10-11"/></svg>;
  if (["map", "journey", "design"].includes(name)) return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="m8 14 10-4 12 4 10-4v24l-10 4-12-4-10 4V14Zm10-4v24m12-20v24"/></svg>;
  if (["factory", "operations", "process"].includes(name)) return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M7 40h34V18l-11 6v-7l-11 7v-9H7v25Z"/><path d="M13 32h5m5 0h5m5 0h4"/></svg>;
  return <svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="8"/><path d="M24 6v7m0 22v7M6 24h7m22 0h7M11 11l5 5m16 16 5 5m0-26-5 5M16 32l-5 5"/></svg>;
}

function BulletList({ bullets }: { bullets: string[] }) {
  return <ul>{bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>;
}

function OperationalIcon({ name }: { name: string }) {
  if (name === "database") return <svg viewBox="0 0 48 48" aria-hidden="true"><ellipse cx="24" cy="12" rx="12" ry="5"/><path d="M12 12v12c0 3 5 5 12 5s12-2 12-5V12M12 24v12c0 3 5 5 12 5s12-2 12-5V24"/></svg>;
  if (name === "bars") return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M7 40h35M11 38V27h7v11m6 0V19h7v19m6 0V9h7v29"/></svg>;
  if (name === "bulb") return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M16 29c-3-2-5-6-5-10 0-7 6-13 13-13s13 6 13 13c0 4-2 8-5 10-2 2-3 4-3 7H19c0-3-1-5-3-7Z"/><path d="M19 40h10m-9-4h8M24 1v3M5 19H2m44 0h-3M9 7l3 3m27-3-3 3"/></svg>;
  if (name === "network") return <svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="5"/><circle cx="10" cy="11" r="3"/><circle cx="38" cy="10" r="3"/><circle cx="9" cy="37" r="3"/><circle cx="39" cy="37" r="3"/><path d="m13 13 7 7m8 0 7-7M20 28l-8 7m16-7 8 7M24 8v11m0 10v11"/></svg>;
  if (name === "processor") return <svg viewBox="0 0 48 48" aria-hidden="true"><rect x="13" y="13" width="22" height="22" rx="3"/><rect x="20" y="20" width="8" height="8" rx="1"/><path d="M18 6v7m12-7v7M18 35v7m12-7v7M6 18h7m-7 12h7m22-12h7m-7 12h7M24 6v7m0 22v7M6 24h7m22 0h7"/></svg>;
  if (name === "brain") return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M22 10c-2-4-8-3-9 2-4 0-6 5-3 8-4 3-3 9 1 11-2 5 3 10 8 8 1 3 5 4 7 1V12c0-3-2-4-4-2Z"/><path d="M26 10c2-4 8-3 9 2 4 0 6 5 3 8 4 3 3 9-1 11 2 5-3 10-8 8-1 3-5 4-7 1M15 20c4 0 6 2 6 6m-8 5c3-1 6 0 8 3m12-14c-4 0-6 2-6 6m8 5c-3-1-6 0-8 3"/></svg>;
  if (name === "trend") return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 40h34M13 35v-8h6v8m5 0V20h6v15m5 0V12h6v23M11 22l10-8 8 4 12-11m-6 0h6v6"/></svg>;
  if (name === "gear") return <svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="7"/><path d="m20 6 1 5a14 14 0 0 1 6 0l1-5 6 3-3 4a15 15 0 0 1 4 4l4-2 3 6-5 1a14 14 0 0 1 0 5l5 1-3 6-4-2a15 15 0 0 1-4 4l3 4-6 3-1-5a14 14 0 0 1-6 0l-1 5-6-3 3-4a15 15 0 0 1-4-4l-4 2-3-6 5-1a14 14 0 0 1 0-5l-5-1 3-6 4 2a15 15 0 0 1 4-4l-3-4 6-3Z"/></svg>;
  if (name === "people") return <svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="16" r="5"/><circle cx="12" cy="21" r="4"/><circle cx="36" cy="21" r="4"/><path d="M16 41v-4c0-6 3-10 8-10s8 4 8 10v4M4 39v-3c0-5 3-8 8-8 2 0 4 1 5 2m27 9v-3c0-5-3-8-8-8-2 0-4 1-5 2"/></svg>;
  if (name === "coins") return <svg viewBox="0 0 48 48" aria-hidden="true"><ellipse cx="24" cy="12" rx="12" ry="5"/><path d="M12 12v8c0 3 5 5 12 5s12-2 12-5v-8M12 20v8c0 3 5 5 12 5s12-2 12-5v-8M12 28v8c0 3 5 5 12 5s12-2 12-5v-8"/></svg>;
  if (name === "target") return <svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="22" cy="26" r="15"/><circle cx="22" cy="26" r="8"/><circle cx="22" cy="26" r="2"/><path d="m24 24 15-15m-8 1 8-1-1 8"/></svg>;
  return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 40h32M14 34V24m10 10V14m10 20V20M10 22l9-8 8 5 10-12m-6 0h6v6"/></svg>;
}

const operationalIntelligenceSteps: Step[] = [
  { title: "Digitise and Simplify Operations", body: "End-to-end process digitisation and automation to eliminate manual effort and accelerate cycle times.", icon: "processor" },
  { title: "Unlock Value with AI & Analytics", body: "Apply advanced analytics and AI to enable real-time insights, better decisions and higher productivity.", icon: "brain" },
  { title: "Design the Operating Model for the Future", body: "Build integrated, scalable operating models aligned to strategy, people, technology and governance.", icon: "trend" },
  { title: "Drive Operational Excellence", body: "Embed Lean, continuous improvement and performance management to build a culture of execution and resilience.", icon: "gear" },
  { title: "Enable Sustainable and Scalable Impact", body: "Combine people, process, technology and data to deliver measurable outcomes—consistently and at scale.", icon: "people" },
];

function OperationalIntelligenceSection({ artwork }: { artwork: NonNullable<ServiceDirectionData["driveArtwork"]> }) {
  const impact = [
    { value: "20–40%", label: "faster cycle times", icon: "trend" },
    { value: "15–30%", label: "cost optimisation", icon: "coins" },
    { value: "Higher productivity", label: "and employee experience", icon: "people" },
    { value: "Scalable transformation", label: "and measurable ROI", icon: "target" },
  ];

  return <section className="oe-intelligence" aria-labelledby="oe-intelligence-title">
    <div className="oe-intelligence__inner">
      <header className="oe-intelligence__header">
        <div>
          <p className="oe-intelligence__kicker">TECH-<span>ENABLED</span> TRANSFORMATION, AI &amp; OPERATIONAL EXCELLENCE</p>
          <h2 id="oe-intelligence-title">From fragmented operations to <em>intelligent, high-performing enterprises</em></h2>
          <p className="oe-intelligence__lead">We help organisations harness digital technologies, automation and AI, and embed operational excellence<br className="oe-intelligence__desktop-break" /> to transform the way work gets done—simpler, faster and smarter, with measurable business impact.</p>
        </div>
        <div className="oe-intelligence__principles" aria-label="Transformation outcomes">
          <span>DIGITAL</span><span>INTELLIGENCE</span><span>OPERATIONAL EXCELLENCE</span><span>REAL BUSINESS IMPACT</span><i aria-hidden="true" />
        </div>
      </header>

      <div className="oe-intelligence__body">
        <div className="oe-intelligence__visual">
          <Image src={artwork.src} alt="Intelligent operations environment connecting people, process, technology, data, governance, and performance" width={artwork.width} height={artwork.height} sizes="(max-width: 900px) 100vw, 55vw" unoptimized />
        </div>
        <div className="oe-intelligence__steps">
          {operationalIntelligenceSteps.map((step) => <article key={step.title}>
            <span className="oe-intelligence__step-icon"><OperationalIcon name={step.icon} /></span>
            <div><h3>{step.title}</h3><p>{step.body}</p></div>
          </article>)}
        </div>
      </div>

      <div className="oe-intelligence__impact">
        <div className="oe-intelligence__impact-title"><span><OperationalIcon name="trend" /></span><strong>TYPICAL IMPACT<br />UNLOCKED</strong></div>
        {impact.map((item) => <div className="oe-intelligence__impact-item" key={item.value}>
          <span><OperationalIcon name={item.icon} /></span><p><strong>{item.value}</strong><small>{item.label}</small></p>
        </div>)}
      </div>
    </div>
  </section>;
}

function OperationalTriggersSection({ data }: { data: ServiceDirectionData }) {
  const icons = ["database", "gear", "bars", "people", "target", "trend"];

  return <section className="oe-triggers" aria-labelledby="oe-triggers-title">
    <div className="oe-triggers__inner">
      <header className="oe-triggers__header">
        <p className="oe-triggers__kicker">Engagement Triggers</p>
        <h2 id="oe-triggers-title">When Technology, AI and Operations <span>Need to Deliver More</span></h2>
        <p>Leaders engage us when digital investments, AI initiatives or operational improvement efforts<br className="oe-triggers__desktop-break" /> are not translating into measurable and sustained business impact.</p>
      </header>
      <div className="oe-triggers__grid">
        {data.triggers.map((trigger, index) => <article key={trigger.title}>
          <span className="oe-triggers__icon"><OperationalIcon name={icons[index]} /></span>
          <div><h3>{trigger.title}</h3><p>{trigger.body}</p></div>
        </article>)}
      </div>
      <Link className="oe-triggers__cta" href="/contact-us">Start a no-cost conversation <span aria-hidden="true">→</span></Link>
    </div>
  </section>;
}

function OperationalTransformationSystemSection() {
  const current = [
    { eyebrow: "Processes", title: "Manual, fragmented and inefficient processes", bullets: ["Siloed systems and data across functions.", "High manual effort, errors and long cycle times."], icon: "gear" },
    { eyebrow: "Decisions", title: "Limited visibility and slow decision-making", bullets: ["Data spread across systems and teams.", "Reactive decisions with limited real-time insights."], icon: "people" },
    { eyebrow: "Technology", title: "Underutilised technology and AI potential", bullets: ["Disparate tools and low adoption.", "AI and automation not scaled beyond pilots."], icon: "database" },
  ];
  const future = [
    { eyebrow: "Digital Operations", title: "Digitised and integrated processes", bullets: ["End-to-end process digitisation and automation.", "Standardised, scalable and efficient ways of working."], icon: "trend" },
    { eyebrow: "AI & Analytics", title: "Data-driven, insight-led enterprise", bullets: ["Advanced analytics and AI for real-time insights.", "Faster, better and more informed decision-making."], icon: "bulb" },
    { eyebrow: "Intelligent Automation", title: "AI-enabled workforce and technology ecosystem", bullets: ["Low-code and intelligent automation at scale.", "Human + AI collaboration to unlock higher productivity and value."], icon: "network" },
  ];
  const impact = [
    { value: "20–40%", label: "faster cycle times", icon: "trend" },
    { value: "15–30%", label: "cost optimisation", icon: "coins" },
    { value: "Higher productivity", label: "and employee experience", icon: "people" },
    { value: "Scalable AI adoption", label: "and measurable ROI", icon: "target" },
  ];

  const column = (items: typeof current) => <div className="oe-system__cards">
    {items.map((item) => <article key={item.title}>
      <span className="oe-system__card-icon"><OperationalIcon name={item.icon} /></span>
      <div><p>{item.eyebrow}</p><h3>{item.title}</h3><ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></div>
    </article>)}
  </div>;

  return <section className="oe-system" aria-labelledby="oe-system-title">
    <div className="oe-system__inner">
      <header className="oe-system__header">
        <p className="oe-system__kicker">Tech-<span>Enabled</span> Transformation &amp; AI</p>
        <h2 id="oe-system-title">From data and automation to <span>intelligent, high-performing enterprises</span></h2>
        <p>We help organisations harness digital technologies, automation and AI to transform the way work gets done—<br className="oe-system__desktop-break" />simpler, faster and smarter, with measurable business impact.</p>
      </header>

      <div className="oe-system__backbone">
        <span><OperationalIcon name="processor" /></span><strong>A practical, AI-enabled transformation system</strong>
        <i aria-hidden="true" /><b>Digital · AI · Automation · People · Performance</b>
      </div>

      <div className="oe-system__map">
        <div className="oe-system__column">
          <header><strong>From Today</strong><span>Common challenges we see</span></header>
          {column(current)}
        </div>
        <div className="oe-system__axis" aria-hidden="true">
          <b>From current reality</b><i /><span>→</span><i /><b>To measurable impact</b>
        </div>
        <div className="oe-system__column">
          <header><strong>To Tomorrow</strong><span>What we enable</span></header>
          {column(future)}
        </div>
      </div>

      <div className="oe-system__impact">
        <strong>Typical impact unlocked</strong>
        {impact.map((item) => <div key={item.value}><span><OperationalIcon name={item.icon} /></span><p><b>{item.value}</b><small>{item.label}</small></p></div>)}
      </div>
    </div>
  </section>;
}

function cards(items: Array<[string,string,string[]]>, side: string): Card[] {
  const icons = side === "signal" ? ["process","operations","visibility"] : ["design","performance","people"];
  return items.map(([eyebrow,title,bullets], index) => ({ eyebrow, title, bullets, icon: icons[index] }));
}

function steps(items: Array<[string,string]>, icons = ["design","process","data","performance","people"]): Step[] {
  return items.map(([title,body], index) => ({ title, body, icon: icons[index % icons.length] }));
}

function studies(kicker: string, titles: string[], results: string[]): CaseStudy[] {
  const industries = ["Enterprise", "Manufacturing", "Healthcare", "Financial Services", "Multi-site Operations", "Consumer Business", "Global Group", "Digital Enterprise"];
  const icons = ["shield","factory","quality","people","operations","trend","process","data"];
  return titles.map((title,index) => {
    const titleParts = title.split(" – ");
    return {
      industry: industries[index],
      workExecuted: titleParts.length > 1 ? titleParts.slice(1).join(" – ") : title,
      title,
      body: `A focused ${kicker.toLowerCase()} engagement aligning operating practices, governance, technology, and capability around measurable business outcomes.`,
      results: results[index % results.length].split(" • "),
      icon: icons[index],
    };
  });
}

const sharedDriveBodies = [
  "We establish a fact base and align leaders around the highest-value priorities.",
  "We translate ambition into a pragmatic blueprint with clear ownership and governance.",
  "We prove the model through focused pilots and visible early outcomes.",
  "We build internal ownership, routines, and decision discipline.",
  "We standardise what works, scale it, and transfer lasting capability.",
];

export const serviceDirectionPages: Record<string, ServiceDirectionData> = {
  "operational-excellence": {
    hero: {
      src: "/assets/operational-excellence-hero.png",
      alt: "Tech Enabled Transformation, AI and Operational Excellence — Smarter Operations. A Stronger Tomorrow.",
      width: 1983,
      height: 793,
    },
    driveArtwork: {
      src: "/assets/operational-intelligence-visual.png",
      alt: "Tech-enabled transformation, AI and operational excellence — from fragmented operations to intelligent, high-performing enterprises, with five transformation capabilities and typical impact unlocked.",
      width: 857,
      height: 508,
    },
    kicker: "Operational Excellence",
    title: <>From fragmented processes to <span>disciplined, data-led operations</span></>,
    lead: "We help organisations connect Lean, Six Sigma, digital enablement, and frontline capability into one operating system that improves flow, quality, cost, and reliability.",
    backbone: "A practical, performance-led operating system",
    backbonePill: "LEAN • SIX SIGMA • DIGITAL • PERFORMANCE",
    leftLabel: "Common operational constraints", rightLabel: "Integrated operational excellence system",
    signals: cards([["Ways of Working","Fragmented and inconsistent ways of working",["Variation across sites, teams, and shifts.","Waste and firefighting remain embedded in daily operations."]],["Improvement System","No structured continual improvement engine",["Initiatives depend on individuals rather than routines.","Improvements fade after the initial push."]],["Systems & Insight","Legacy systems and blind spots",["Limited real-time performance visibility.","Technology investments are disconnected from operating priorities."]]],"signal"),
    enables: cards([["Cost & Flow","Reduced waste, stronger EBITDA",["Improve throughput, capacity, and asset productivity.","Link Lean priorities directly to margin and working capital."]],["Quality & Safety","Zero-accident, zero-defect culture",["Embed quality and safety ownership at the frontline.","Build closed-loop problem solving and governance."]],["Digital Operations","Digitally enabled, engaged shop floors",["Create visible, data-led daily management.","Equip teams to sustain performance without dependency."]]],"enable"),
    impacts: [{title:"5-10% EBITDA improvement",icon:"performance"},{title:"20-30% productivity gains",icon:"chart"},{title:"Higher OEE and throughput",icon:"factory"},{title:"Quality and safety discipline",icon:"shield"}],
    driveTitle: <>How We Build <span>Operational Excellence</span> With You</>,
    driveIntro: "Operational excellence is built through disciplined routines, visible performance, and frontline ownership, not isolated improvement projects.",
    driveSteps: steps(["Diagnose and prioritise value","Design a pragmatic OE blueprint","Co-run pilots on critical lines","Build internal champions and governance","Scale, standardise, and transfer capability"].map((x,i)=>[x,sharedDriveBodies[i]] as [string,string])),
    triggerTitle: "When Technology, AI and Operations Need to Deliver More",
    triggerIntro: "Leaders engage us when digital investments, AI initiatives or operational improvement efforts are not translating into measurable and sustained business impact.",
    triggers: steps([["Siloed systems and data","Data is fragmented across functions, limiting visibility, insights and decision-making."],["Low technology adoption and scale","Digital and AI initiatives remain in pilots, with limited user adoption and enterprise scale."],["Processes are manual and inefficient","High manual effort, long cycle times and inconsistent processes limit productivity and customer experience."],["AI is not delivering business value","Use cases are unclear, insights are not actionable and measurable outcomes are missing."],["Operational performance is not improving","Lean and process excellence efforts are fragmented, and savings are not sustainable."],["Need to scale impact across the enterprise","Isolated wins are not translating into enterprise-wide transformation and lasting value."]]),
    caseTitle: <>Operational Excellence <span>in Action</span></>,
    caseIntro: "Representative programmes across manufacturing, energy, insurance, healthcare, aerospace, and knowledge services.",
    cases: studies("Operational Excellence",["Global Manufacturing Major – Lean Industry 4.0 Deployment","Global Energy & Investment Firm – Process Automation & Digital Integration","Leading Indian Life Insurer – Business Process Re-engineering","Leading Indian Hospital Network – Service Excellence & Operational Efficiency","Global Aerospace & Industrial Manufacturer – Process Excellence Transformation","PE-Backed Manufacturing Company – Operational Due Diligence","Automotive Components Manufacturer – Productivity & Cost Optimisation Program","KPO Leader – Lean Transformation & Knowledge Management"],["Higher throughput • Lower conversion cost","Faster flow • Better performance visibility","Reduced waste • Stronger daily management","Sustained capability • Measurable productivity"]),
  },
  "process-advisory": {
    hero: {
      src: "/assets/process-advisory-hero.png",
      alt: "Business Process and Industry 4.0 — Intelligent Processes. A Smarter Tomorrow.",
      width: 1990,
      height: 800,
    },
    kicker: "Process Advisory",
    title: <>From unstructured processes to a <span>governed, scalable backbone</span></>,
    lead: "We help organisations simplify, standardise, govern, and digitise critical processes so work flows consistently across teams, locations, and systems.",
    backbone: "A governed, measurable process backbone",
    backbonePill: "PROCESS • GOVERNANCE • CONTROLS • INSIGHT",
    leftLabel: "Common process constraints", rightLabel: "Integrated process governance",
    signals: cards([["Process Design","Unstructured, non-standardised processes",["Critical work varies by team and location.","Handoffs create delay, rework, and hidden risk."]],["Governance","Weak governance and decision support",["Ownership and controls are unclear.","Leaders lack one view of process performance."]],["Improvement","Fragmented, reactive improvement",["Root causes remain unresolved.","Technology changes faster than operating practices."]]],"signal"),
    enables: cards([["Flow & Efficiency","Faster, leaner processes",["Remove non-value activity and simplify handoffs.","Design processes for speed, quality, and scale."]],["Controls & Compliance","Audit-ready, compliant operations",["Make accountability and controls explicit.","Embed evidence, measures, and escalation routines."]],["Enterprise System","Integrated, sustainable excellence",["Connect process, technology, data, and ownership.","Build an enduring process-management discipline."]]],"enable"),
    impacts: [{title:"Shorter cycle times",icon:"performance"},{title:"Lower process cost",icon:"chart"},{title:"Audit-ready controls",icon:"shield"},{title:"One view of process health",icon:"data"}],
    driveTitle: <>How We Build a <span>Governed Process Backbone</span></>,
    driveIntro: "Strong processes make ownership, controls, performance, and improvement visible in the flow of everyday work.",
    driveSteps: steps(["Map and standardise what matters","Make governance and ownership explicit","Instrument processes with metrics","Integrate process, technology, and controls","Build internal capability and discipline"].map((x,i)=>[x,sharedDriveBodies[i]] as [string,string])),
    triggerTitle: "Where Leaders Typically Call Us In", triggerIntro: "Leaders engage us when complexity, inconsistent controls, and fragmented handoffs begin constraining growth and reliability.",
    triggers: steps([["Critical processes vary by team or location","Customers and employees experience inconsistent outcomes."],["Complexity has outgrown current controls","Growth has made legacy governance difficult to sustain."],["Technology has changed, processes haven’t","New platforms are carrying old ways of working."],["Audit findings keep repeating","Controls address symptoms without removing root causes."],["Handoffs are leaking value","Delays, rework, and ambiguity accumulate between teams."],["No single view of process health","Leaders cannot see flow, risk, and performance together."]]),
    caseTitle: <>Representative <span>Process Advisory</span> Engagements</>, caseIntro: "Process transformation programmes spanning maturity, quality, governance, automation, and analytics.",
    cases: studies("Process Advisory",["Group-wide process maturity and TQM assessment","Process automation and knowledge management platform","TPM framework across multi-plant network","Total Quality Management program across plants","Environment, Health & Safety Management System","Quality Management System for hospital network","Business process re-engineering across shared services","Enterprise BI & Analytics framework"],["Standardised flow • Clear ownership","Stronger controls • Audit readiness","Faster decisions • Visible performance","Scalable governance • Sustained improvement"]),
  },
  "service-delivery": {
    hero: {
      src: "/assets/service-delivery-hero.png",
      alt: "Service Delivery and Customer Experience — Seamless Delivery. Lasting Relationships.",
      width: 1983,
      height: 793,
    },
    kicker: "Service Delivery",
    title: <>From fragmented service to <span>consistent, experience-led delivery</span></>,
    lead: "We connect customer journeys, operating processes, performance insight, and frontline capability to deliver reliable service across channels and regions.",
    backbone: "An experience-led service delivery system", backbonePill: "JOURNEY • OPERATIONS • DATA • FRONTLINE",
    leftLabel: "Common service constraints", rightLabel: "Integrated service delivery system",
    signals: cards([["Experience","Disjointed customer experience",["Journeys break across channels and internal teams.","Promises and operational reality are misaligned."]],["Visibility","Low visibility, slow recovery",["Service failures surface through complaints rather than insight.","Leaders lack predictive performance signals."]],["Scale","Service that doesn’t scale",["Quality depends on individual effort.","Standards, scripts, and handoffs vary widely."]]],"signal"),
    enables: cards([["Growth & Loyalty","Stronger acquisition and CX",["Design journeys around customer needs and value.","Connect experience priorities to retention and growth."]],["Omnichannel Delivery","Consistent, omnichannel journeys",["Create common standards across physical and digital touchpoints.","Align front and back office around one service promise."]],["Frontline System","Data-led, empowered frontline",["Make service performance visible in real time.","Give teams the authority and tools to resolve issues."]]],"enable"),
    impacts: [{title:"Higher customer satisfaction",icon:"people"},{title:"Faster response times",icon:"performance"},{title:"Consistent omnichannel CX",icon:"journey"},{title:"Stronger retention",icon:"trend"}],
    driveTitle: <>How We Strengthen <span>Service Delivery</span></>, driveIntro: "Service excellence is created by designing the journey and the operating system together.",
    driveSteps: steps(["Design end-to-end service journeys","Standardise SLAs, scripts, and handoffs","Make performance visible in real time","Engineer omnichannel service operations","Equip and empower frontline teams"].map((x,i)=>[x,sharedDriveBodies[i]] as [string,string])),
    triggerTitle: "Where Leaders Typically Call Us In", triggerIntro: "Leaders call us when customer expectations rise faster than service operations can respond.",
    triggers: steps([["Experience varies by channel or region","Customers receive a different promise depending on where they engage."],["Front-office promises and back-office reality don’t match","Handoffs undermine the intended customer experience."],["Service performance is hard to measure","Measures focus on activity rather than customer outcomes."],["Response times and complaints are unpredictable","Teams react to demand without a stable service rhythm."],["Service depends on heroes, not a system","Performance falls when key individuals are unavailable."],["Loyalty is eroding despite strong products","Service friction is weakening otherwise competitive propositions."]]),
    caseTitle: <>Representative <span>Service Delivery</span> Engagements</>, caseIntro: "Journey and service operating model programmes across healthcare, consumer, industrial, and internal services.",
    cases: studies("Service Delivery",["End-to-end patient service journey redesign","Blueprint for multichannel service delivery","After-sales service transformation","Customer experience and retention strategy","Online-to-clinic journey and experience blueprinting","Service transformation and CX framework","Internal service design & efficiency model","After-sales service blueprinting"],["Improved CX • Faster resolution","Consistent journeys • Clear SLAs","Higher retention • Better visibility","Empowered frontline • Scalable service"]),
  },
  "corporate-function": {
    hero: {
      src: "/assets/corporate-function-hero.png",
      alt: "Shared Services and Global Capability Centres — Global capability. Greater possibilities.",
      width: 1983,
      height: 793,
    },
    kicker: "Corporate Function Transformation",
    title: <>From fragmented support functions to an <span>integrated corporate backbone</span></>,
    lead: "We redesign corporate functions as one connected enterprise backbone, combining operating model, shared services, digital workflows, governance, and capability.",
    backbone: "A connected, enterprise-wide corporate backbone", backbonePill: "MODEL • SHARED SERVICES • DIGITAL • GOVERNANCE",
    leftLabel: "Common corporate function constraints", rightLabel: "Integrated corporate backbone",
    signals: cards([["Structure","Siloed corporate functions",["Functions optimise locally rather than for enterprise value.","Overlapping roles and handoffs slow decisions."]],["Operations","Manual, inefficient operations",["High-volume work relies on email and spreadsheets.","Service levels and cost-to-serve are unclear."]],["Insight & Talent","Limited visibility and talent risk",["Leaders lack one view of performance and risk.","Critical capability sits with a few individuals."]]],"signal"),
    enables: cards([["Efficiency","Smarter, leaner corporate operations",["Simplify work and shift repeatable activity into shared delivery.","Automate workflows where it creates measurable value."]],["Governance","Unified, transparent governance model",["Clarify decision rights, controls, and service ownership.","Create enterprise-wide performance visibility."]],["Capability","Stronger talent and future-ready backbone",["Build functional leadership and specialist capability.","Embed change and continuous improvement routines."]]],"enable"),
    impacts: [{title:"Lower support cost",icon:"performance"},{title:"Faster decisions",icon:"trend"},{title:"Stronger governance",icon:"shield"},{title:"Future-ready capability",icon:"people"}],
    driveTitle: <>How We Build an <span>Integrated Corporate Backbone</span></>, driveIntro: "Corporate functions create more value when structure, service delivery, technology, risk, and talent operate as one system.",
    driveSteps: steps(["Design an integrated operating model","Create shared services and centres of excellence","Digitise workflows and embed automation","Strengthen governance, risk, and compliance","Build leadership, capability, and change muscle"].map((x,i)=>[x,sharedDriveBodies[i]] as [string,string])),
    triggerTitle: "Where Leaders Typically Call Us In", triggerIntro: "Leaders engage us when support functions cost more, move slowly, and struggle to demonstrate enterprise value.",
    triggers: steps([["Support costs are rising faster than growth","The corporate backbone is not scaling efficiently."],["Fragmented, overlapping corporate functions","Duplicated activity and unclear ownership create friction."],["Decisions and approvals are too slow","Governance adds delay without improving decision quality."],["Audit, risk and compliance issues keep repeating","Controls are disconnected from everyday workflows."],["Digital investments show limited impact","Automation is layered onto unnecessary complexity."],["No single view of function performance","Service, cost, risk, and talent measures remain disconnected."]]),
    caseTitle: <>Representative <span>Corporate Function</span> Engagements</>, caseIntro: "Transformation programmes across HR, finance, facilities, GRC, IT resilience, and enterprise services.",
    cases: studies("Corporate Functions",["HR function shared services & talent-at-risk model","Data-driven facilities and real estate optimisation","End-to-end invoicing workflow transformation","GRC digitisation aligned with ISO & DPDP","Integrated IT resilience & business continuity framework","Facilities & administration optimisation program","HR capability & culture transformation roadmap","Integrated corporate function synergy program"],["Lower cost • Faster service","Clear governance • Better controls","Digital workflow • Visible performance","Stronger capability • Enterprise scale"]),
  },
};

export function ServiceDirectionPage({ data }: { data: ServiceDirectionData }) {
  return <main className="growth-page service-direction-page">
    {data.hero ? (
      <section className="service-direction-visual-hero" aria-label={data.hero.alt}>
        <Image
          src={data.hero.src}
          alt={data.hero.alt}
          width={data.hero.width}
          height={data.hero.height}
          sizes="100vw"
          preload
        />
      </section>
    ) : null}
    {data.driveArtwork ? <OperationalTransformationSystemSection /> : null}
    <section className="growth-spine"><div className="growth-container">
      <p className="growth-kicker">{data.kicker}</p><h1>{data.title}</h1><p className="growth-lead">{data.lead}</p>
      <div className="growth-backbone"><div className="growth-backbone__label"><span><ServiceIcon name="process"/></span><strong>{data.backbone}</strong></div><div className="growth-backbone__pill">{data.backbonePill}</div></div>
      <div className="growth-spine__map"><div className="growth-spine__column"><div className="growth-spine__head"><span>Signals we see</span><strong>{data.leftLabel}</strong></div>{data.signals.map(x=><article className="growth-spine-card" key={x.title}><span><ServiceIcon name={x.icon}/></span><div><p>{x.eyebrow}</p><h2>{x.title}</h2><BulletList bullets={x.bullets}/></div></article>)}</div>
      <div className="growth-spine__axis" aria-hidden="true"><b>From current reality</b><span>⇄</span><b>To sustained outcomes</b></div>
      <div className="growth-spine__column"><div className="growth-spine__head"><span>What we enable</span><strong>{data.rightLabel}</strong></div>{data.enables.map(x=><article className="growth-spine-card" key={x.title}><span><ServiceIcon name={x.icon}/></span><div><p>{x.eyebrow}</p><h2>{x.title}</h2><BulletList bullets={x.bullets}/></div></article>)}</div></div>
      <ImpactStrip data={data}/>
    </div></section>
    {data.driveArtwork ? (
      <OperationalIntelligenceSection artwork={data.driveArtwork} />
    ) : (
      <section className="growth-drive"><div className="growth-container"><div className="growth-section-head growth-section-head--center"><p className="growth-kicker">{data.kicker}</p><h2>{data.driveTitle}</h2><p>{data.driveIntro}</p></div><div className="growth-drive__grid"><div className="growth-drive__image"><Image src="/assets/city-consulting.jpg" alt="Modern business district representing structured transformation" fill sizes="(max-width: 900px) 100vw, 44vw"/></div><div className="growth-drive__steps">{data.driveSteps.map((x)=><article key={x.title}><span><ServiceIcon name={x.icon}/></span><div><h3>{x.title}</h3><p>{x.body}</p></div></article>)}</div></div></div></section>
    )}
    {data.driveArtwork ? (
      <OperationalTriggersSection data={data} />
    ) : (
      <section className="growth-triggers"><div className="growth-container"><div className="growth-section-head growth-section-head--center"><p className="growth-kicker">Engagement Triggers</p><h2>{data.triggerTitle}</h2><p>{data.triggerIntro}</p></div><div className="growth-trigger-grid">{data.triggers.map(x=><article key={x.title}><span><ServiceIcon name={x.icon}/></span><div><h3>{x.title}</h3><p>{x.body}</p></div></article>)}</div><Link className="growth-trigger-cta" href="/contact-us">Start a no-cost conversation</Link></div></section>
    )}
    <section className="growth-clients">
      <div className="growth-container">
        <div className="growth-section-head growth-section-head--split">
          <div>
            <p className="growth-kicker">{data.kicker}</p>
            <h2>{data.caseTitle}</h2>
            <p>{data.caseIntro}</p>
          </div>
          <Link href="/contact-us">Connect with us</Link>
        </div>
        <div className="growth-client-editorial">
          {data.cases.map((item, index) => (
            <article className="growth-client-story" key={item.title}>
              <header className="growth-client-story__header">
                <div className="growth-client-story__eyebrow">
                  <span aria-hidden="true"><ServiceIcon name={item.icon}/></span>
                  <p>
                    <strong>{item.industry}</strong>
                    <span>({item.workExecuted})</span>
                  </p>
                </div>
                <b aria-hidden="true">{String(index + 1).padStart(2, "0")}</b>
              </header>
              <div className="growth-client-story__copy">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
              <ul className="growth-client-story__results" aria-label="Results">
                {item.results.map((result) => <li key={result}>{result}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <ImpactStrip data={data}/>
      </div>
    </section>
  </main>;
}

function ImpactStrip({ data }: { data: ServiceDirectionData }) {
  return <div className="growth-impact-strip"><strong>Typical impact unlocked</strong>{data.impacts.map(x=><div key={x.title}><span><ServiceIcon name={x.icon}/></span><p>{x.title}</p></div>)}</div>;
}
