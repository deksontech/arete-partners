import Image from "next/image";
import Link from "next/link";

type Card = { eyebrow: string; title: string; bullets: string[]; icon: string };
type Step = { title: string; body: string; icon: string };
type CaseStudy = { eyebrow: string; title: string; body: string; result: string; icon: string };
type ServiceDirectionData = {
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
  return titles.map((title,index) => ({
    eyebrow: `${industries[index]} • ${kicker}`,
    title,
    body: `A focused ${kicker.toLowerCase()} engagement aligning operating practices, governance, technology, and capability around measurable business outcomes.`,
    result: results[index % results.length],
    icon: icons[index],
  }));
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
    triggerTitle: "When Operations & Plant Leaders Typically Call Us In",
    triggerIntro: "Leaders engage us when losses persist, capacity is constrained, or improvement activity is not translating into sustained performance.",
    triggers: steps([["Chronic losses and waste persist","Recurring losses remain despite repeated improvement efforts."],["OEE is stuck below potential","Assets and teams are capable of more, but constraints remain hidden."],["Too many initiatives, little sustained impact","Activity is high while ownership and business outcomes are unclear."],["Safety or quality incidents are a concern","The operating system is not preventing repeat failures."],["Plants aren’t ready for Industry 4.0","Digital investments need a stable operational foundation."],["A step-change in throughput or cost is needed","Growth or margin pressure demands a different performance trajectory."]]),
    caseTitle: <>Operational Excellence <span>in Action</span></>,
    caseIntro: "Representative programmes across manufacturing, energy, insurance, healthcare, aerospace, and knowledge services.",
    cases: studies("Operational Excellence",["Global Manufacturing Major – Lean Industry 4.0 Deployment","Global Energy & Investment Firm – Process Automation & Digital Integration","Leading Indian Life Insurer – Business Process Re-engineering","Leading Indian Hospital Network – Service Excellence & Operational Efficiency","Global Aerospace & Industrial Manufacturer – Process Excellence Transformation","PE-Backed Manufacturing Company – Operational Due Diligence","Automotive Components Manufacturer – Productivity & Cost Optimisation Program","KPO Leader – Lean Transformation & Knowledge Management"],["Higher throughput • Lower conversion cost","Faster flow • Better performance visibility","Reduced waste • Stronger daily management","Sustained capability • Measurable productivity"]),
  },
  "process-advisory": {
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
    <section className="growth-spine"><div className="growth-container">
      <p className="growth-kicker">{data.kicker}</p><h1>{data.title}</h1><p className="growth-lead">{data.lead}</p>
      <div className="growth-backbone"><div className="growth-backbone__label"><span><ServiceIcon name="process"/></span><strong>{data.backbone}</strong></div><div className="growth-backbone__pill">{data.backbonePill}</div></div>
      <div className="growth-spine__map"><div className="growth-spine__column"><div className="growth-spine__head"><span>Signals we see</span><strong>{data.leftLabel}</strong></div>{data.signals.map(x=><article className="growth-spine-card" key={x.title}><span><ServiceIcon name={x.icon}/></span><div><p>{x.eyebrow}</p><h2>{x.title}</h2><BulletList bullets={x.bullets}/></div></article>)}</div>
      <div className="growth-spine__axis" aria-hidden="true"><b>From current reality</b><span>⇄</span><b>To sustained outcomes</b></div>
      <div className="growth-spine__column"><div className="growth-spine__head"><span>What we enable</span><strong>{data.rightLabel}</strong></div>{data.enables.map(x=><article className="growth-spine-card" key={x.title}><span><ServiceIcon name={x.icon}/></span><div><p>{x.eyebrow}</p><h2>{x.title}</h2><BulletList bullets={x.bullets}/></div></article>)}</div></div>
      <ImpactStrip data={data}/>
    </div></section>
    <section className="growth-drive"><div className="growth-container"><div className="growth-section-head growth-section-head--center"><p className="growth-kicker">{data.kicker}</p><h2>{data.driveTitle}</h2><p>{data.driveIntro}</p></div><div className="growth-drive__grid"><div className="growth-drive__image"><Image src="/assets/city-consulting.jpg" alt="Modern business district representing structured transformation" fill sizes="(max-width: 900px) 100vw, 44vw"/></div><div className="growth-drive__steps">{data.driveSteps.map((x,i)=><article key={x.title}><span><ServiceIcon name={x.icon}/></span><b>{String(i+1).padStart(2,"0")}</b><div><h3>{x.title}</h3><p>{x.body}</p></div></article>)}</div></div></div></section>
    <section className="growth-triggers"><div className="growth-container"><div className="growth-section-head growth-section-head--center"><p className="growth-kicker">Engagement Triggers</p><h2>{data.triggerTitle}</h2><p>{data.triggerIntro}</p></div><div className="growth-trigger-grid">{data.triggers.map(x=><article key={x.title}><span><ServiceIcon name={x.icon}/></span><div><h3>{x.title}</h3><p>{x.body}</p></div></article>)}</div><Link className="growth-trigger-cta" href="/contact-us">Start a no-cost conversation</Link></div></section>
    <section className="growth-clients"><div className="growth-container"><div className="growth-section-head growth-section-head--split"><div><p className="growth-kicker">{data.kicker}</p><h2>{data.caseTitle}</h2><p>{data.caseIntro}</p></div><Link href="/contact-us">Talk about a similar outcome</Link></div><div className="growth-client-grid">{data.cases.map(x=><article className="growth-client-card" key={x.title}><div className="growth-client-card__eyebrow"><span><ServiceIcon name={x.icon}/></span><p>{x.eyebrow}</p></div><h3>{x.title}</h3><p>{x.body}</p><strong>{x.result}</strong></article>)}</div><ImpactStrip data={data}/></div></section>
  </main>;
}

function ImpactStrip({ data }: { data: ServiceDirectionData }) {
  return <div className="growth-impact-strip"><strong>Typical impact unlocked</strong>{data.impacts.map(x=><div key={x.title}><span><ServiceIcon name={x.icon}/></span><p>{x.title}</p></div>)}</div>;
}
