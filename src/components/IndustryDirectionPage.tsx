import Image from "next/image";
import Link from "next/link";
import PharmaHelpShowcase, { type IndustryShowcaseContent } from "./PharmaHelpShowcase";

type Item = { title: string; body: string; icon?: string };

type IndustryConfig = {
  route: string;
  nav: string;
  label: string;
  lead: string;
  accent: string;
  description: string;
  image: string;
  areas: Item[];
  capabilities: Item[];
  challenges: Item[];
  ctaTitle: string;
  ctaBody: string;
};

const INDUSTRIES: IndustryConfig[] = [
  {
    route: "/pharmaceutical-sector",
    nav: "Pharma",
    label: "Pharma",
    lead: "Transforming Pharma Through Strategy, Digital, and",
    accent: "Operational Excellence",
    description:
      "We help pharmaceutical companies navigate complexity and disruption with end-to-end transformation - driving growth, ensuring compliance, and improving patient outcomes.",
    image: "/assets/industry-pharma.png",
    areas: [
      { title: "Commercial Excellence", body: "Enhancing go-to-market performance and access", icon: "◎" },
      { title: "Operational Excellence", body: "Optimising operations, quality and supply chain", icon: "⚙" },
      { title: "Digital & Data", body: "Unlocking data, analytics and intelligent decisions", icon: "◇" },
      { title: "Compliance & Quality", body: "Strengthening compliance and patient safety", icon: "✓" },
    ],
    capabilities: [
      { title: "Strategy & Growth", body: "Portfolio strategy, market entry and commercial excellence.", icon: "↗" },
      { title: "Operational Excellence", body: "Lean manufacturing, cost optimisation and process re-engineering.", icon: "⚙" },
      { title: "Supply Chain Transformation", body: "Resilient, agile and future-ready supply chain networks.", icon: "▦" },
      { title: "Digital & Analytics", body: "Data-driven insights, automation and digital platform enablement.", icon: "▥" },
      { title: "Quality & Compliance", body: "GxP compliance, quality systems and risk management.", icon: "✓" },
      { title: "Organisation & Change", body: "Operating models, capability building and culture transformation.", icon: "◉" },
    ],
    challenges: [
      { title: "Growth & Market Pressure", body: "Portfolio complexity, access constraints and intensifying competition demand sharper commercial choices." },
      { title: "Operational & Cost Inefficiencies", body: "Fragmented processes and variable performance limit capacity, speed and margin." },
      { title: "Regulatory Complexity", body: "Quality systems must keep pace with evolving global compliance expectations." },
      { title: "Digital & Technology Gaps", body: "Disconnected data and legacy platforms slow confident, timely decisions." },
      { title: "Sustainability Expectations", body: "Stakeholders expect resilient operations and measurable ESG progress." },
    ],
    ctaTitle: "A new partner focused on outcomes.",
    ctaBody: "Collaborate with us to turn complexity into clarity and strategy into impact.",
  },
  {
    route: "/industrial-manufacturing-sector",
    nav: "Manufacturing",
    label: "Industrial Manufacturing",
    lead: "Building Industrial Manufacturing Enterprises That Compete on",
    accent: "Cost, Quality, and Reliability",
    description: "We partner with industrial manufacturers to convert complex, asset-heavy operations into stable, high-performing systems—improving productivity, resilience, quality, and profitable growth.",
    image: "/assets/industry-manufacturing.png",
    areas: [
      { title: "Factory Performance", body: "Improving throughput, quality and asset productivity", icon: "⚙" },
      { title: "Supply Chain", body: "Building resilient and responsive networks", icon: "▦" },
      { title: "Industry 4.0", body: "Scaling automation, data and intelligent operations", icon: "◇" },
      { title: "Cost & Quality", body: "Reducing waste while strengthening control", icon: "✓" },
    ],
    capabilities: [
      { title: "Manufacturing Strategy", body: "Network, footprint and performance strategy.", icon: "↗" },
      { title: "Operational Excellence", body: "Lean systems, flow and daily management.", icon: "⚙" },
      { title: "Supply Chain", body: "Planning, sourcing and logistics transformation.", icon: "▦" },
      { title: "Smart Factory", body: "Automation, analytics and connected operations.", icon: "◇" },
      { title: "Quality Systems", body: "Built-in quality, control and compliance.", icon: "✓" },
      { title: "People & Change", body: "Frontline capability and performance culture.", icon: "◉" },
    ],
    challenges: [
      { title: "Margin Pressure", body: "Input volatility and global competition place sustained pressure on cost." },
      { title: "Variable Performance", body: "Plants and lines operate with inconsistent throughput, quality and reliability." },
      { title: "Supply Disruption", body: "Extended networks need better visibility, planning and resilience." },
      { title: "Technology Fragmentation", body: "Pilots fail to scale when data, systems and operating routines are disconnected." },
      { title: "Capability Gaps", body: "Transformation requires leaders and frontline teams equipped to sustain new ways of working." },
    ],
    ctaTitle: "Build a manufacturing system that performs.",
    ctaBody: "Turn operational complexity into dependable productivity, quality and growth.",
  },
  {
    route: "/healthcare",
    nav: "Healthcare",
    label: "Healthcare",
    lead: "Transforming Healthcare Enterprises for",
    accent: "Quality, Access, and Sustainable Performance",
    description: "We help healthcare organisations deliver better outcomes, safer care, and greater access while improving operating performance, workforce resilience, and trust.",
    image: "/assets/industry-healthcare.png",
    areas: [
      { title: "Patient Experience", body: "Designing connected, accessible care journeys", icon: "◎" },
      { title: "Clinical Operations", body: "Improving flow, capacity and service quality", icon: "⚙" },
      { title: "Digital Health", body: "Enabling data-led and technology-supported care", icon: "◇" },
      { title: "Quality & Trust", body: "Strengthening governance, safety and compliance", icon: "✓" },
    ],
    capabilities: [
      { title: "Growth Strategy", body: "Service-line, network and market growth.", icon: "↗" },
      { title: "Care Operations", body: "Patient flow, capacity and productivity.", icon: "⚙" },
      { title: "Patient Experience", body: "Journey redesign and access improvement.", icon: "◎" },
      { title: "Digital & Data", body: "Analytics, automation and digital health.", icon: "◇" },
      { title: "Quality & Compliance", body: "Clinical governance, safety and risk.", icon: "✓" },
      { title: "Organisation & Change", body: "Operating models, leadership and capability.", icon: "◉" },
    ],
    challenges: [
      { title: "Access & Capacity", body: "Demand is rising faster than facilities, talent and care pathways can absorb." },
      { title: "Patient Experience", body: "Fragmented journeys create delays, friction and inconsistent outcomes." },
      { title: "Cost Pressure", body: "Organisations must improve productivity without compromising care quality." },
      { title: "Data Fragmentation", body: "Disconnected systems limit clinical and operational visibility." },
      { title: "Workforce Resilience", body: "Sustainable performance depends on empowered leaders and care teams." },
    ],
    ctaTitle: "Build a healthcare enterprise ready for what comes next.",
    ctaBody: "Connect patient outcomes, operational performance and sustainable growth.",
  },
  {
    route: "/insurance",
    nav: "Insurance",
    label: "Insurance",
    lead: "Reimagining Insurance Enterprises for",
    accent: "Growth, Trust, and Operational Resilience",
    description: "We help insurers convert fragmented operating models into integrated systems—strengthening profitable growth, customer trust, risk discipline, and operational resilience.",
    image: "/assets/industry-insurance.png",
    areas: [
      { title: "Commercial Growth", body: "Sharper propositions, channels and distribution", icon: "↗" },
      { title: "Claims Excellence", body: "Faster, fairer and more efficient outcomes", icon: "⚙" },
      { title: "Digital & Data", body: "Connected journeys and decision intelligence", icon: "◇" },
      { title: "Risk & Trust", body: "Stronger governance, controls and resilience", icon: "✓" },
    ],
    capabilities: [
      { title: "Growth & Distribution", body: "Channel strategy and sales performance.", icon: "↗" },
      { title: "Claims Transformation", body: "Journey, process and leakage improvement.", icon: "⚙" },
      { title: "Customer Experience", body: "Simplified, connected service journeys.", icon: "◎" },
      { title: "Data & AI", body: "Decisioning, analytics and automation.", icon: "◇" },
      { title: "Risk & Compliance", body: "Controls, governance and regulatory readiness.", icon: "✓" },
      { title: "Operating Model", body: "Organisation, capability and performance.", icon: "◉" },
    ],
    challenges: [
      { title: "Growth Complexity", body: "Channels, products and customer economics require sharper portfolio choices." },
      { title: "Legacy Operations", body: "Manual work and fragmented processes constrain speed and service." },
      { title: "Claims Leakage", body: "Inconsistent controls and limited insight erode value and trust." },
      { title: "Digital Expectations", body: "Customers expect simple, responsive and transparent journeys." },
      { title: "Regulatory Change", body: "Controls and governance must evolve without slowing the business." },
    ],
    ctaTitle: "Build an insurer designed for confidence and growth.",
    ctaBody: "Transform customer value, operating performance and enterprise resilience together.",
  },
  {
    route: "/aerospace-defence",
    nav: "Aerospace & Defence",
    label: "Aerospace & Defence",
    lead: "Strengthening Aerospace & Defence Enterprises Through Strategy, Execution, and",
    accent: "System-Level Transformation",
    description: "We help aerospace and defence organisations improve programme delivery, industrial performance, supply resilience, compliance, and mission-critical execution across long, complex lifecycles.",
    image: "/assets/industry-aerospace.png",
    areas: [
      { title: "Programme Delivery", body: "Improving governance, cadence and outcomes", icon: "◎" },
      { title: "Industrial Performance", body: "Strengthening cost, quality and delivery", icon: "⚙" },
      { title: "Digital Engineering", body: "Connecting data across the lifecycle", icon: "◇" },
      { title: "Risk & Compliance", body: "Protecting assurance, traceability and trust", icon: "✓" },
    ],
    capabilities: [
      { title: "Enterprise Strategy", body: "Portfolio, growth and operating priorities.", icon: "↗" },
      { title: "Programme Excellence", body: "Governance, controls and integrated delivery.", icon: "◎" },
      { title: "Industrial Operations", body: "Flow, quality, reliability and cost.", icon: "⚙" },
      { title: "Digital Thread", body: "Lifecycle data and engineering integration.", icon: "◇" },
      { title: "Supply Resilience", body: "Supplier performance and risk management.", icon: "▦" },
      { title: "Capability & Change", body: "Leadership, organisation and skills.", icon: "◉" },
    ],
    challenges: [
      { title: "Programme Complexity", body: "Long lifecycles and interdependencies make delivery discipline critical." },
      { title: "Cost & Schedule", body: "Variability across engineering and production threatens commitments." },
      { title: "Supply Risk", body: "Constrained suppliers and specialised components reduce resilience." },
      { title: "Data Silos", body: "Disconnected lifecycle systems restrict visibility and learning." },
      { title: "Assurance Demands", body: "Mission-critical delivery requires uncompromising quality and control." },
    ],
    ctaTitle: "Turn system complexity into dependable performance.",
    ctaBody: "Align programmes, operations, technology and partners around mission outcomes.",
  },
  {
    route: "/automotive",
    nav: "Automotive",
    label: "Automotive",
    lead: "Reinventing Automotive Enterprises Through Strategy, Operations, and",
    accent: "Digital-Led Transformation",
    description: "We help automotive organisations navigate electrification, connected vehicles, software-defined systems, supply disruption, and margin pressure through integrated transformation.",
    image: "/assets/industry-automotive.png",
    areas: [
      { title: "Growth & Portfolio", body: "Aligning markets, products and value pools", icon: "↗" },
      { title: "Operational Excellence", body: "Improving cost, flow, quality and uptime", icon: "⚙" },
      { title: "Digital Mobility", body: "Connecting data, software and customer value", icon: "◇" },
      { title: "Supply Resilience", body: "Strengthening networks and supplier performance", icon: "✓" },
    ],
    capabilities: [
      { title: "Portfolio Strategy", body: "Markets, platforms and growth choices.", icon: "↗" },
      { title: "Plant Excellence", body: "Lean flow, quality and asset productivity.", icon: "⚙" },
      { title: "Supply Chain", body: "Planning, resilience and supplier performance.", icon: "▦" },
      { title: "Digital & Software", body: "Data, automation and connected mobility.", icon: "◇" },
      { title: "Customer Experience", body: "Omnichannel journeys and service value.", icon: "◎" },
      { title: "Organisation & Skills", body: "New capabilities and operating models.", icon: "◉" },
    ],
    challenges: [
      { title: "Technology Transition", body: "Electrification and software redefine products, economics and capabilities." },
      { title: "Margin Pressure", body: "Intense competition demands better cost, mix and execution." },
      { title: "Supply Volatility", body: "Complex global networks remain exposed to disruption." },
      { title: "Factory Performance", body: "Plants need higher flexibility, quality and productivity." },
      { title: "Capability Shift", body: "New products and business models require new skills and leadership." },
    ],
    ctaTitle: "Build the next generation automotive enterprise.",
    ctaBody: "Connect portfolio choices, operational performance and digital capability.",
  },
  {
    route: "/global-capability-centers",
    nav: "GCC",
    label: "Global Capability Centers",
    lead: "Reimagining Global Capability Centers as",
    accent: "Engines of Enterprise Value",
    description: "We help organisations transform GCCs from transactional hubs into integrated, value-generating enterprise platforms for capability, innovation, analytics, and measurable business impact.",
    image: "/assets/industry-gcc.png",
    areas: [
      { title: "GCC Strategy", body: "Defining mandate, location and value ambition", icon: "◎" },
      { title: "Operating Model", body: "Designing governance, services and performance", icon: "⚙" },
      { title: "Digital & Innovation", body: "Building enterprise technology capability", icon: "◇" },
      { title: "Talent & Culture", body: "Creating leadership, skills and belonging", icon: "◉" },
    ],
    capabilities: [
      { title: "GCC Strategy", body: "Mandate, business case and roadmap.", icon: "↗" },
      { title: "Set-up & Transition", body: "Location, mobilisation and service migration.", icon: "▦" },
      { title: "Operating Model", body: "Governance, structure and performance.", icon: "⚙" },
      { title: "Digital Capability", body: "Data, AI, engineering and innovation.", icon: "◇" },
      { title: "Talent Strategy", body: "Leadership, workforce and capability building.", icon: "◉" },
      { title: "Value Realisation", body: "Outcomes, productivity and continuous improvement.", icon: "✓" },
    ],
    challenges: [
      { title: "Unclear Mandate", body: "Centers struggle when their purpose remains transactional or fragmented." },
      { title: "Scale Without Value", body: "Headcount growth does not automatically create enterprise impact." },
      { title: "Governance Friction", body: "Ambiguous ownership slows decisions across global and local teams." },
      { title: "Talent Competition", body: "Critical skills require a compelling proposition and development system." },
      { title: "Innovation Gap", body: "GCCs need mechanisms that convert expertise into reusable enterprise value." },
    ],
    ctaTitle: "Build a GCC that compounds enterprise value.",
    ctaBody: "Move from service delivery to strategic capability, innovation and impact.",
  },
  {
    route: "/education",
    nav: "Education",
    label: "Education",
    lead: "Education Sector — Shaping the Next Generation of",
    accent: "Value Creators",
    description: "We partner with higher education institutions, universities, skill bodies, and vocational institutes to connect purpose, employability, digital learning, and operational excellence—preparing a future-ready workforce for India.",
    image: "/assets/industry-education.png",
    areas: [
      { title: "Learner Outcomes", body: "Aligning programmes with skills and careers", icon: "◎" },
      { title: "Institutional Excellence", body: "Improving quality, operations and governance", icon: "⚙" },
      { title: "Digital Learning", body: "Designing accessible, engaging experiences", icon: "◇" },
      { title: "Industry Connect", body: "Building relevant partnerships and pathways", icon: "◉" },
    ],
    capabilities: [
      { title: "Institution Strategy", body: "Purpose, portfolio and growth roadmaps.", icon: "↗" },
      { title: "Academic Excellence", body: "Curriculum, quality and learner outcomes.", icon: "◎" },
      { title: "Digital Learning", body: "Platforms, content and experience design.", icon: "◇" },
      { title: "Operations", body: "Process, service and cost improvement.", icon: "⚙" },
      { title: "Industry Partnerships", body: "Employer alignment and applied learning.", icon: "▦" },
      { title: "Leadership & Change", body: "Governance, capability and culture.", icon: "◉" },
    ],
    challenges: [
      { title: "Outcome Relevance", body: "Curricula must keep pace with changing roles, technology and employer needs." },
      { title: "Learner Experience", body: "Disconnected journeys reduce engagement, progression and trust." },
      { title: "Digital Adoption", body: "Technology creates value only when pedagogy and operations evolve with it." },
      { title: "Financial Sustainability", body: "Institutions need stronger portfolio, productivity and revenue choices." },
      { title: "Leadership Capacity", body: "Transformation requires clear governance and empowered academic teams." },
    ],
    ctaTitle: "Shape the next generation of value creators.",
    ctaBody: "Build an institution where learning, capability and opportunity reinforce each other.",
  },
];

const proofItems = [
  { title: "Focus Areas", icon: "↗" },
  { title: "Tailored Solutions", icon: "◎" },
  { title: "Measurable Impact", icon: "▥" },
  { title: "Future-Ready", icon: "✓" },
];

const proofBodies = (industry: IndustryConfig) => [
  `${industry.capabilities[0].title}, ${industry.capabilities[1].title}, digital and people`,
  `Approaches designed for ${industry.label.toLowerCase()} realities`,
  "Driving efficiency, agility and sustainable growth",
  "Building resilient organisations for what comes next",
];

const buildShowcaseContent = (industry: IndustryConfig): IndustryShowcaseContent => {
  const serviceNames = [
    "Growth & Strategy",
    "Shared Services & GCC Excellence",
    "Tech-Enabled Transformation",
    "ESG & Sustainable Value Creation",
    "Business Process & Operational Excellence",
  ];
  const serviceHeadings = [
    `Building a Future-Ready ${industry.label} Enterprise`,
    `Building Scalable ${industry.label} Operations`,
    `Digitising the ${industry.label} Value Chain`,
    `Creating Sustainable Value in ${industry.label}`,
    `Creating Stable, High-Performing ${industry.label} Systems`,
  ];

  return {
    sectorLabel: `${industry.label} Sector`,
    helpTitle: `${industry.label} Sector`,
    services: serviceNames.map((title, index) => {
      const primary = industry.capabilities[index] ?? industry.capabilities[0];
      const secondary = industry.capabilities[(index + 1) % industry.capabilities.length];
      const area = industry.areas[index % industry.areas.length];
      return {
        title,
        short: primary.title,
        heading: serviceHeadings[index],
        intro: `We help ${industry.label.toLowerCase()} organisations turn ${primary.title.toLowerCase()} priorities into coordinated, measurable execution.`,
        label: index === 2 ? "Where we support:" : "How we support:",
        bullets: [
          primary.body,
          secondary.body,
          area.body,
          `Governance, performance frameworks, and capability building tailored to ${industry.label.toLowerCase()}.`,
        ],
        impact: index === 0
          ? `Sharper strategic focus, stronger growth, and more confident execution across ${industry.label.toLowerCase()}.`
          : `More consistent performance, stronger enterprise visibility, and outcomes that sustain beyond the programme.`,
        icon: primary.icon ?? ["↗", "◉", "✣", "◒", "⚙"][index],
      };
    }),
    partnerTitle: `Why ${industry.label} Organisations Work With Us`,
    partnerIntro: `A boardroom-grade approach designed to translate strategy into measurable outcomes across ${industry.label.toLowerCase()} operations, technology, people, and performance.`,
    partnerReasons: [
      ["Strategy + Execution Under One Roof", "We connect leadership priorities directly to frontline and customer outcomes."],
      ["Deep Sector Understanding", `Our approach reflects the operating realities, risks, and opportunities of ${industry.label.toLowerCase()}.`],
      ["Tech-First, Human-Centric Approach", "Digital enablement that simplifies work, strengthens judgment, and improves flow."],
      ["Proven, Integrated Methodologies", "Strategy, Lean, digital, analytics, operating model, ESG, and change working together."],
    ],
    workSteps: [
      ["Align strategy to execution", "Clarify priorities, governance, ownership, and measurable outcomes.", "Direction → Delivery"],
      ["Simplify processes, then digitise", "Improve flow and control before scaling technology and automation.", "Lean → Digital"],
      ["Build capability to sustain change", "Embed operating rhythms, skills, and playbooks so performance holds.", "Scale-ready"],
    ],
    focusText: `Every engagement is designed to improve growth, efficiency, quality, resilience, and measurable ${industry.label.toLowerCase()} outcomes.`,
    valueIntro: `We are built by industry leaders with a shared mission — to create measurable, lasting value for ${industry.label.toLowerCase()} organisations.`,
  };
};

const pharmaChallenges = [
  {
    icon: "↗",
    title: "Growth & Market Pressure",
    bullets: [
      "Increasing competition from generics and biosimilars",
      "Pricing pressure from regulators and global buyers",
      "Long development cycles delaying revenue realization",
      "Limited visibility into growth opportunities",
    ],
  },
  {
    icon: "⚙",
    title: "Operational & Cost Inefficiencies",
    bullets: [
      "Fragmented processes across plants, QC labs, R&D, SCM",
      "High cycle times due to manual interventions",
      "Inefficient batch release processes",
      "Expensive deviations, reworks, and quality failures",
    ],
  },
  {
    icon: "✓",
    title: "Regulatory, Quality & Compliance Complexity",
    bullets: [
      "Evolving global standards (US FDA, EMA, MHRA, WHO)",
      "Rising scrutiny toward data integrity and documentation",
      "High cost of non-compliance and repeat CAPAs",
    ],
  },
  {
    icon: "▥",
    title: "Digital & Technology Gaps",
    bullets: [
      "Low automation across QC, QA, manufacturing & supply chain",
      "Lack of interconnected systems (ERP, LIMS, MES, QMS)",
      "Inefficient reporting & analytics for decision-making",
    ],
  },
  {
    icon: "♧",
    title: "Sustainability & ESG Expectations",
    bullets: [
      "Pressure to reduce waste, emissions, and energy intensity",
      "ESG disclosures & compliance becoming mandatory",
      "Limited frameworks for ESG measurement & reporting",
    ],
  },
] as const;

const pharmaChallengeValues = [
  ["Strategy-Led", "Clear roadmap from vision to execution."],
  ["Outcome-Focused", "Actionable solutions that drive real business results."],
  ["Client-First", "Collaborative, agile, and built for long-term impact."],
  ["Future-Ready", "Building capabilities that sustain growth tomorrow."],
] as const;

export function IndustryDirectionPage({ route }: { route: string }) {
  const industry = INDUSTRIES.find((item) => item.route === route) ?? INDUSTRIES[0];
  const proofs = proofBodies(industry);
  const isPharma = industry.route === "/pharmaceutical-sector";
  const showcaseContent = isPharma ? undefined : buildShowcaseContent(industry);
  const challengeCards = isPharma
    ? pharmaChallenges
    : industry.challenges.map((item, index) => ({
        icon: industry.capabilities[index]?.icon ?? ["↗", "⚙", "✓", "▥", "♧"][index],
        title: item.title,
        bullets: [item.body, `A coordinated response is required across ${industry.capabilities[index]?.title.toLowerCase() ?? "strategy and operations"}.`],
      }));

  return (
    <div className={`industry-page industry-page--pharma${isPharma ? "" : " industry-page--other"}`}>
      <nav className="industry-rail" aria-label="Industry sectors">
        <div className="industry-shell industry-rail__inner">
          {INDUSTRIES.map((item) => (
            <Link key={item.route} href={item.route} className={item.route === route ? "is-active" : ""}>
              <span aria-hidden="true">{item.capabilities[0].icon}</span>{item.nav}
            </Link>
          ))}
        </div>
      </nav>

      <section className="industry-hero">
        <div className="industry-shell industry-hero__grid">
          <div className="industry-hero__copy">
            <p className="industry-kicker">Industry Solutions</p>
            {isPharma ? (
              <h1>Transforming Pharma<br />Through Strategy, Digital,<br />and <span>Operational Excellence</span></h1>
            ) : (
              <h1>{industry.lead} <span>{industry.accent}</span></h1>
            )}
            <div className="industry-rule" />
            <p className="industry-hero__description">{industry.description}</p>
            <div className="industry-proof-grid">
              {proofItems.map((item, index) => (
                <article key={item.title}>
                  <span className="industry-icon" aria-hidden="true">{item.icon}</span>
                  <h2>{item.title}</h2>
                  <p>{proofs[index]}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="industry-hero__visual">
            <Image src={industry.image} alt={`${industry.label} transformation`} fill priority sizes="(max-width: 980px) 100vw, 52vw" />
            <div className="industry-area-panel">
              {industry.areas.map((item) => (
                <article key={item.title}>
                  <span className="industry-icon industry-icon--dark" aria-hidden="true">{item.icon}</span>
                  <div><h2>{item.title}</h2><p>{item.body}</p></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="industry-services-showcase">
        <div className="industry-capabilities">
          <div className="industry-shell">
            <header><p>Our Services</p><h2>End-to-End Transformation Capabilities for {industry.label}</h2></header>
            <div className="industry-capability-grid">
              {industry.capabilities.map((item) => (
                <article key={item.title}>
                  <span className="industry-icon" aria-hidden="true">{item.icon}</span>
                  <div><h3>{item.title}</h3><p>{item.body}</p></div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="industry-shell">
          <section className="industry-cta-strip">
            <span className="industry-cta-strip__icon" aria-hidden="true">•••</span>
            <div><h2>{industry.ctaTitle}</h2><p>{industry.ctaBody}</p></div>
            <Link href="/contact-us">Start a Conversation <span aria-hidden="true">→</span></Link>
          </section>
          <section className="industry-value-strip" aria-label="Our partnership principles">
            {["Global Perspective", "Collaborative Approach", "Outcome Focused", "Built on Expertise", "Long-Term Partnership"].map((title, index) => (
              <article key={title}><span aria-hidden="true">{["◎", "◇", "↗", "☆", "◉"][index]}</span><div><h3>{title}</h3><p>{["Global insight, locally relevant.", "Working alongside your teams.", "Clear, measurable value.", "Deep functional and sector knowledge.", "Committed beyond delivery."][index]}</p></div></article>
            ))}
          </section>
        </div>
      </section>

      <section className="industry-challenges industry-challenges--pharma">
        <div className="industry-shell">
          <header className="pharma-challenges-head">
            <div><p>{industry.label} Sector</p><h2>Key Challenges</h2><i /></div>
            <span>The challenges facing {industry.label.toLowerCase()} organisations are interconnected—spanning growth, operational performance, digital enablement, capability, and sustainable value creation.</span>
          </header>
          <div className="pharma-challenge-grid">
            {challengeCards.map((item, index) => (
              <article key={item.title}>
                <span className="pharma-challenge-icon" aria-hidden="true">{item.icon}</span>
                <div>
                  <header><b>{String(index + 1).padStart(2, "0")}</b><h3>{item.title}</h3></header>
                  <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                </div>
                <em aria-hidden="true">{String(index + 1).padStart(2, "0")}</em>
              </article>
            ))}
          </div>
          <div className="pharma-challenge-band">
            <div className="pharma-challenge-band__lead"><span aria-hidden="true">◎</span><strong>We help {industry.label.toLowerCase()} leaders turn these challenges into opportunities for measurable impact.</strong></div>
            {pharmaChallengeValues.map(([title, body], index) => (
              <div className="pharma-challenge-value" key={title}><span aria-hidden="true">{["✧", "⚙", "◉", "↗"][index]}</span><div><b>{title}</b><p>{body}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      <PharmaHelpShowcase content={showcaseContent} />

      <section className="pharma-next">
        <div className="industry-shell pharma-next__panel">
          <div className="pharma-next__copy">
            <p>Next Steps</p>
            <h2>{isPharma ? <>Let’s Build the Next-Generation<br />Pharma Enterprise</> : industry.ctaTitle}</h2>
            <span>{isPharma ? "From strategy and shared services to digital transformation, ESG, and operational excellence — our team brings multi-disciplinary depth tailored specifically for the pharmaceutical industry." : industry.ctaBody}</span>
            <strong><i aria-hidden="true" /> Strategy · Ops · Digital · ESG</strong>
          </div>
          <div className="pharma-next__actions">
            <Link href="/contact-us">Talk to us</Link>
            <Link href="/contact-us">Request a consultation <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
