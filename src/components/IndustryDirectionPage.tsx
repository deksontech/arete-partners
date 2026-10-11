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

function AutomotiveHeroIcon({ name }: { name: "car" | "gear" | "chart" | "network" | "leaf" | "people" | "database" | "shield" | "heart" | "pill" | "microscope" | "monitor" | "chain" | "plane" | "globe" | "graduation" | "bulb" }) {
  if (name === "globe") {
    return <svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="18" /><path d="M6 24h36M24 6c6 5 9 11 9 18s-3 13-9 18c-6-5-9-11-9-18s3-13 9-18Z" /><path d="M10 14h28M10 34h28" /></svg>;
  }
  if (name === "graduation") {
    return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="m4 18 20-10 20 10-20 10L4 18Z" /><path d="M12 23v11c7 5 17 5 24 0V23M44 18v14" /><circle cx="44" cy="35" r="2" /></svg>;
  }
  if (name === "bulb") {
    return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M13 21a11 11 0 1 1 22 0c0 5-3 8-6 11v5H19v-5c-3-3-6-6-6-11Z" /><path d="M19 41h10M24 3V0M8 8l-3-3m35 3 3-3M7 22H2m44 0h-5" /></svg>;
  }
  if (name === "plane") {
    return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="m42 7-7 3-9 10-14-5-4 3 11 9-6 8-7-1-3 3 9 4 4 5 3-3-1-7 8-6 5 12 4-4-2-14 10-9 3-7c1-3-1-5-4-4Z" /></svg>;
  }
  if (name === "monitor") {
    return <svg viewBox="0 0 48 48" aria-hidden="true"><rect x="6" y="8" width="36" height="26" rx="2" /><path d="M17 42h14M24 34v8m-12-14 8-8 6 5 9-10" /></svg>;
  }
  if (name === "chain") {
    return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="m20 30-4 4a8 8 0 0 1-11-11l8-8a8 8 0 0 1 11 0m4 3 4-4a8 8 0 0 1 11 11l-8 8a8 8 0 0 1-11 0M16 24h16" /></svg>;
  }
  if (name === "pill") {
    return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M11 37a9 9 0 0 1 0-13L24 11a9 9 0 0 1 13 13L24 37a9 9 0 0 1-13 0Z" /><path d="m17 18 13 13" /></svg>;
  }
  if (name === "microscope") {
    return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="m19 7 8 4-8 15-8-4 8-15Zm2 19c8 2 12 8 12 14M12 40h29M31 10l4 2-7 13-4-2M10 31h12" /><circle cx="18" cy="31" r="4" /></svg>;
  }
  if (name === "car") {
    return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 27h32l-4-10H14L8 27Zm0 0v9h4m28-9v9h-4M14 36h20M14 27l3-5h14l3 5M14 31h.1M34 31h.1" /></svg>;
  }
  if (name === "gear") {
    return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="m20 7 2-4h4l2 4 4 2 4-1 3 3-1 4 2 4 4 2v4l-4 2-2 4 1 4-3 3-4-1-4 2-2 4h-4l-2-4-4-2-4 1-3-3 1-4-2-4-4-2v-4l4-2 2-4-1-4 3-3 4 1 4-2Z" /><circle cx="24" cy="23" r="7" /></svg>;
  }
  if (name === "network") {
    return <svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="10" r="4" /><circle cx="10" cy="34" r="4" /><circle cx="38" cy="34" r="4" /><path d="M22 14 12 30m14-16 10 16M14 34h20" /></svg>;
  }
  if (name === "leaf") {
    return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M39 8C22 8 10 17 10 30c0 6 4 10 10 10 13 0 19-15 19-32Z" /><path d="M8 42c7-12 16-20 27-27" /></svg>;
  }
  if (name === "people") {
    return <svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="18" cy="16" r="7" /><circle cx="33" cy="18" r="5" /><path d="M5 39c0-9 5-14 13-14s13 5 13 14M29 27c8 0 12 4 12 12" /></svg>;
  }
  if (name === "database") {
    return <svg viewBox="0 0 48 48" aria-hidden="true"><ellipse cx="24" cy="10" rx="14" ry="6" /><path d="M10 10v12c0 3 6 6 14 6s14-3 14-6V10M10 22v12c0 3 6 6 14 6s14-3 14-6V22" /></svg>;
  }
  if (name === "shield") {
    return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 5c6 5 12 6 17 7v11c0 10-6 17-17 22C13 40 7 33 7 23V12c5-1 11-2 17-7Z" /></svg>;
  }
  if (name === "heart") {
    return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 40C17 34 8 28 8 18c0-6 4-10 10-10 3 0 5 1 6 4 2-3 4-4 7-4 6 0 10 4 10 10 0 10-10 17-17 22Z" /><path d="M12 24h7l3-7 4 14 3-7h8" /></svg>;
  }
  return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 39V27h7v12m5 0V18h7v21m5 0V9h7v30M5 39h38" /></svg>;
}

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
  const isManufacturing = industry.route === "/industrial-manufacturing-sector";
  const isAutomotive = industry.route === "/automotive";
  const isInsurance = industry.route === "/insurance";
  const isHealthcare = industry.route === "/healthcare";
  const isAerospace = industry.route === "/aerospace-defence";
  const isGcc = industry.route === "/global-capability-centers";
  const isEducation = industry.route === "/education";
  const usesEditorialHero = isPharma || isManufacturing || isAutomotive || isInsurance || isHealthcare || isAerospace || isGcc || isEducation;
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

      {usesEditorialHero ? (
        <section className={`automotive-hero${isPharma ? " pharma-editorial-hero" : ""}${isManufacturing ? " manufacturing-editorial-hero" : ""}${isInsurance ? " insurance-hero" : ""}${isHealthcare ? " healthcare-hero" : ""}${isAerospace ? " aerospace-editorial-hero" : ""}${isGcc ? " gcc-editorial-hero" : ""}${isEducation ? " education-editorial-hero" : ""}`} aria-labelledby="automotive-hero-title">
          <div className="automotive-hero__inner">
            <header className="automotive-hero__brand">
              <Image src="/assets/arete-partners-logo-header-navy.png" alt="Arete Partners" width={190} height={190} priority />
              {!isHealthcare && !isPharma && !isManufacturing && <div><span>People.</span><span>Capability.</span><span>Business Impact.</span><span>A Better Tomorrow.</span><i /></div>}
            </header>

            <div className="automotive-hero__copy">
              <p className="automotive-hero__kicker"><i /> {isPharma ? "Pharmaceutical Sector" : isManufacturing ? "Industrial Manufacturing Sector" : isHealthcare ? "Industry" : isInsurance ? "Insurance Sector" : isAerospace ? "Aerospace & Defence" : isGcc ? "Global Capability Centers" : isEducation ? "Education Sector" : "Automotive Sector"}</p>
              {isManufacturing ? (
                <h1 id="automotive-hero-title">Building Industrial<br />Manufacturing Enterprises<br />That Compete on <strong>Cost,</strong><br /><strong>Quality, and Reliability.</strong></h1>
              ) : isPharma ? (
                <h1 id="automotive-hero-title">Transforming Pharma<br /><strong>Through Strategy, Digital,</strong><br /><strong>and Operational Excellence.</strong></h1>
              ) : isHealthcare ? (
                <h1 id="automotive-hero-title">Transforming Healthcare<br />Enterprises for <strong>Quality,</strong><br /><strong>Access, and Sustainable</strong><br /><strong>Performance</strong></h1>
              ) : isInsurance ? (
                <h1 id="automotive-hero-title">Reimagining Insurance<br />Enterprises for<br /><strong>Growth, Trust, and</strong><br /><strong>Operational Resilience.</strong></h1>
              ) : isAerospace ? (
                <h1 id="automotive-hero-title">Strengthening Aerospace &amp;<br />Defence Enterprises Through<br /><strong>Strategy, Execution, and</strong><br /><strong>Transformation.</strong></h1>
              ) : isGcc ? (
                <h1 id="automotive-hero-title">Reimagining Global<br />Capability Centers as<br /><strong>Engines of Enterprise Value</strong></h1>
              ) : isEducation ? (
                <h1 id="automotive-hero-title">Shaping the Next<br />Generation of<br /><strong>Value Creators</strong></h1>
              ) : (
                <h1 id="automotive-hero-title">Reinventing Automotive<br />Enterprises Through<br />Strategy, Operations, and<br /><strong>Digital-Led Transformation</strong></h1>
              )}
              {isManufacturing ? (
                <p className="automotive-hero__lead">We partner with industrial manufacturers to convert complex,<br />asset-heavy operations into stable, high-performing systems—<br />improving productivity, resilience, quality, and profitable growth.</p>
              ) : isPharma ? (
                <p className="automotive-hero__lead">We help pharmaceutical companies navigate complexity<br />and disruption with end-to-end transformation —<br />driving growth, ensuring compliance, and improving<br />patient outcomes.</p>
              ) : isHealthcare ? (
                <p className="automotive-hero__lead">We help healthcare organisations deliver better outcomes,<br />safer care, and greater access while improving operating<br />performance, workforce resilience, and trust.</p>
              ) : isAerospace ? (
                <p className="automotive-hero__lead">Partnering for higher readiness, resilience, and<br />a more secure tomorrow.</p>
              ) : isGcc ? (
                <p className="automotive-hero__lead">From cost centers to value creators — enabling capability,<br />innovation, and measurable impact.</p>
              ) : isEducation ? (
                <p className="automotive-hero__lead">Partnering with educational institutions to build<br />future-ready talent, enabled by innovation and<br />operational excellence.</p>
              ) : !isInsurance && <p className="automotive-hero__lead">Enabling smarter, more connected, and more<br className="automotive-desktop-break" /> resilient automotive businesses.</p>}
              <Link className="automotive-hero__cta" href="#industry-services">Explore Our {isManufacturing ? "Manufacturing" : isPharma ? "Pharmaceutical" : isHealthcare ? "Healthcare" : isInsurance ? "Insurance" : isAerospace ? "Aerospace & Defence" : isGcc ? "GCC" : isEducation ? "Education" : "Automotive"} Solutions <span aria-hidden="true">→</span></Link>
            </div>

            <div className="automotive-hero__benefits" aria-label={`${isManufacturing ? "Industrial manufacturing" : isPharma ? "Pharmaceutical" : isHealthcare ? "Healthcare" : isInsurance ? "Insurance" : isAerospace ? "Aerospace and defence" : isGcc ? "Global capability center" : isEducation ? "Education" : "Automotive"} transformation outcomes`}>
              <article><span><AutomotiveHeroIcon name={isGcc ? "globe" : isEducation ? "graduation" : isAerospace ? "plane" : isManufacturing ? "gear" : isPharma ? "heart" : isHealthcare ? "heart" : isInsurance ? "chart" : "car"} /></span><strong>{isGcc ? <>Global<br />Scale</> : isEducation ? <>Future-Ready<br />Talent</> : isAerospace ? <>Programme<br />Excellence</> : isManufacturing ? <>Factory<br />Performance</> : isPharma ? <>Healthier<br />Lives</> : isHealthcare ? <>Better<br />Outcomes</> : isInsurance ? <>Profitable<br />Growth</> : <>Future-Ready<br />Operations</>}</strong>{isManufacturing && <p>Higher efficiency,<br />greater output</p>}</article>
              <article><span><AutomotiveHeroIcon name={isEducation ? "bulb" : isGcc ? "people" : "gear"} /></span><strong>{isGcc ? <>Capability<br />Building</> : isEducation ? <>Innovative<br />Learning</> : isAerospace ? <>Operational<br />Resilience</> : isManufacturing ? <>Supply Chain<br />Resilience</> : isPharma ? <>Stronger<br />Organisations</> : isHealthcare ? <>Greater<br />Access</> : isInsurance ? <>Customer<br />Trust</> : <>Connected<br />Mobility</>}</strong>{isManufacturing && <p>Stronger, more<br />responsive networks</p>}</article>
              <article><span><AutomotiveHeroIcon name={isEducation ? "people" : isAerospace ? "shield" : isManufacturing ? "chart" : isPharma ? "chart" : isHealthcare ? "leaf" : isInsurance ? "shield" : "chart"} /></span><strong>{isGcc ? <>Measurable<br />Impact</> : isEducation ? <>Stronger<br />Institutions</> : isAerospace ? <>Mission<br />Readiness</> : isManufacturing ? <>Cost &amp; Quality</> : isPharma ? <>Brighter<br />Tomorrows</> : isHealthcare ? <>Sustainable<br />Performance</> : isInsurance ? <>Operational<br />Resilience</> : <>Sustainable<br />Growth</>}</strong>{isManufacturing && <p>Lower costs,<br />higher standards</p>}</article>
            </div>

            <div className="automotive-hero__factory" role="img" aria-label={isManufacturing ? "Engineers reviewing production data in an advanced manufacturing plant" : isPharma ? "Pharmaceutical scientist using a microscope in a laboratory" : isHealthcare ? "Healthcare professionals reviewing patient information in a hospital" : isInsurance ? "Insurance leaders collaborating around business data" : isAerospace ? "Aircraft engineers reviewing production data in an aerospace hangar" : isGcc ? "Global capability center team collaborating around technology and business data" : isEducation ? "Students collaborating around a laptop in a modern learning space" : "Automotive manufacturing plant with engineers and a vehicle assembly line"} />

            {isAerospace && <>
              <p className="aerospace-editorial-hero__callout aerospace-editorial-hero__callout--readiness">Higher<br />Readiness<br />Safer Skies<br />Stronger<br />Nations<i /></p>
              <p className="aerospace-editorial-hero__callout aerospace-editorial-hero__callout--impact">Innovation<br />People<br />Partnership<br />Impact<i /></p>
            </>}

            {isGcc && <p className="gcc-editorial-hero__callout">A<br />Stronger<br />Tomorrow<br />Together.<i /></p>}
            {isEducation && <>
              <p className="education-editorial-hero__callout education-editorial-hero__callout--learn">Learn<br />Build<br />Solve<br />Impact<i /></p>
              <p className="education-editorial-hero__callout education-editorial-hero__callout--ideas">Ideas<br />People<br />Possibilities<i /></p>
            </>}

            {isManufacturing && <>
              <p className="manufacturing-editorial-hero__promise">Better People.<br />Stronger Organisations.<br />Brighter Tomorrows.<i /></p>
              <p className="manufacturing-editorial-hero__callout">People<br />Technology<br />Sustainable Growth<i /></p>
            </>}

            {isPharma && <>
              <p className="pharma-editorial-hero__promise">People.<br />Capability.<br />Business Impact.<br />A Better Tomorrow.<i /></p>
              <div className="pharma-editorial-hero__badges" aria-label="Pharmaceutical transformation priorities">
                <article><span><AutomotiveHeroIcon name="pill" /></span><strong>Innovation<br />for Impact</strong></article>
                <article><span><AutomotiveHeroIcon name="microscope" /></span><strong>Compliance<br />with Confidence</strong></article>
                <article><span><AutomotiveHeroIcon name="people" /></span><strong>Better<br />Patient Outcomes</strong></article>
              </div>
            </>}

            {isHealthcare && <>
              <p className="healthcare-hero__callout healthcare-hero__callout--care">People<br />Technology<br />Care<br />A Healthier<br />Tomorrow<i /></p>
              <p className="healthcare-hero__callout healthcare-hero__callout--lives">Better<br />Care<br />Brighter<br />Lives<i /></p>
            </>}

            {!isPharma && !isAerospace && !isGcc && !isEducation && <div className="automotive-hero__areas" aria-label={`${isManufacturing ? "Industrial manufacturing" : isHealthcare ? "Healthcare" : isInsurance ? "Insurance" : "Automotive"} solution areas`}>
              {isManufacturing ? <>
                <article><span><AutomotiveHeroIcon name="gear" /></span><div><strong>Operational<br />Excellence</strong><p>Streamlined operations<br />for sustainable performance.</p></div></article>
                <article><span><AutomotiveHeroIcon name="monitor" /></span><div><strong>Industry 4.0<br />&amp; Digital</strong><p>Data-driven, connected<br />and intelligent manufacturing.</p></div></article>
                <article><span><AutomotiveHeroIcon name="chain" /></span><div><strong>Resilient<br />Supply Chains</strong><p>Greater agility for<br />a changing world.</p></div></article>
              </> : isHealthcare ? <>
                <article><span><AutomotiveHeroIcon name="people" /></span><div><strong>Patient Experience</strong><p>Designing connected,<br />accessible care journeys</p></div></article>
                <article><span><AutomotiveHeroIcon name="gear" /></span><div><strong>Clinical Operations</strong><p>Improving flow, capacity<br />and service quality</p></div></article>
                <article><span><AutomotiveHeroIcon name="chart" /></span><div><strong>Digital Health</strong><p>Enabling data-led and<br />technology-supported care</p></div></article>
                <article><span><AutomotiveHeroIcon name="shield" /></span><div><strong>Quality &amp; Trust</strong><p>Strengthening governance,<br />safety and compliance</p></div></article>
              </> : <>
                <article><span><AutomotiveHeroIcon name="chart" /></span><strong>{isInsurance ? <>Commercial<br />Growth</> : <>Growth &amp;<br />Portfolio</>}</strong></article>
                <article><span><AutomotiveHeroIcon name="gear" /></span><strong>Operational<br />Excellence</strong></article>
                <article><span><AutomotiveHeroIcon name={isInsurance ? "database" : "network"} /></span><strong>{isInsurance ? <>Data-Driven<br />Decisions</> : <>Digital<br />Mobility</>}</strong></article>
                <article><span><AutomotiveHeroIcon name={isInsurance ? "shield" : "leaf"} /></span><strong>{isInsurance ? <>Risk &amp;<br />Compliance</> : <>Supply Chain<br />Resilience</>}</strong></article>
              </>}
            </div>}

            {!isHealthcare && !isPharma && !isManufacturing && !isAerospace && !isGcc && !isEducation && <p className="automotive-hero__signature"><span>People</span><i /> <span>Technology</span><i /> <span>Sustainable Mobility</span><b /></p>}
            {isInsurance && <p className="insurance-hero__tagline"><i />A More Resilient Tomorrow. Together.<b /></p>}
            {isHealthcare && <p className="healthcare-hero__tagline"><i />A Healthier Tomorrow.<br />Together.</p>}
            {isPharma && <p className="pharma-editorial-hero__tagline">Advancing<br />Health Through<br />People and Possibility.<i /></p>}
            {isManufacturing && <p className="manufacturing-editorial-hero__tagline">From Complexity to <strong>A Stronger Tomorrow.</strong><i /></p>}
            {isAerospace && <>
              <p className="aerospace-editorial-hero__tagline"><i />Advancing a Safer, More Secure Tomorrow.<b /></p>
              <p className="aerospace-editorial-hero__ribbon-label">People <i /> Technology <i /> Sovereign Capability <b /></p>
            </>}
            {isGcc && <p className="gcc-editorial-hero__tagline">People <i /> Technology <i /> Global Impact <b /></p>}
            {isEducation && <p className="education-editorial-hero__tagline"><i />Learning Today. A Stronger Tomorrow.<b /></p>}
          </div>
        </section>
      ) : (
        <section className="industry-hero">
          <div className="industry-shell industry-hero__grid">
            <div className="industry-hero__copy">
              <p className="industry-kicker">Industry </p>
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
      )}

      <section className="industry-services-showcase" id="industry-services">
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

      <PharmaHelpShowcase content={showcaseContent} isPharma={isPharma} />

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
