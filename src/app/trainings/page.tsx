import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Trainings | Arete Partners",
  description:
    "Arete Transformation Academy builds AI, Lean, operational excellence, transformation and leadership capabilities for professionals and organisations.",
};

const differenceCards = [
  ["Practitioner-led", "Learn from experienced transformation and business practitioners - not just theory."],
  ["Business-focused", "Every programme is aligned to real business challenges and outcomes that matter."],
  ["AI-enabled", "AI is embedded across our programmes, tools and frameworks to accelerate insights and impact."],
  ["Application-driven", "Apply tools and frameworks to solve real-world problems and deliver meaningful results."],
  ["Built to sustain", "We build internal capability that stays, grows and creates long-term impact."],
];

const signatureProgrammes = [
  {
    title: "Lean Six Sigma Green Belt",
    subtitle: "Build the foundation of improvement.",
    themes: ["Lean principles & value creation", "DMAIC methodology", "Data & statistical analysis", "Problem solving with analytics", "Practical improvement project"],
    school: "Lean & Operational Excellence",
    duration: "8–10 weeks",
    image: "/assets/training-programme-01.png",
    accent: "violet",
  },
  {
    title: "Lean Six Sigma Black Belt",
    subtitle: "Lead complex, high-impact business improvement.",
    themes: ["Advanced DMAIC & statistics", "Data science & ML applications", "Process mining & analytics", "Change management", "Leadership & coaching"],
    school: "Lean & Operational Excellence",
    duration: "12–16 weeks",
    image: "/assets/training-programme-02.png",
    accent: "blue",
  },
  {
    title: "Design for Excellence",
    subtitle: "Design better products, services and processes.",
    themes: ["Customer insights & VOC", "Design thinking & DFSS", "Risk analysis & FMEA", "Digital simulation & analytics", "Design-to-cost"],
    school: "Innovation & Design",
    duration: "10–12 weeks",
    image: "/assets/training-programme-03.png",
    accent: "teal",
  },
  {
    title: "Arête Operating Excellence System",
    subtitle: "From operational friction to sustainable performance.",
    themes: ["Lean management", "Process standardisation", "Performance & quality", "Digital & automation", "Continuous improvement"],
    school: "Lean & Operational Excellence",
    duration: "10–12 weeks",
    image: "/assets/training-programme-04.png",
    accent: "violet",
  },
  {
    title: "Growth & Commercial Excellence",
    subtitle: "From sales activity to profitable growth.",
    themes: ["Growth strategy & market insight", "Sales force effectiveness", "Customer & key account mgmt", "Pricing & margin improvement", "CRM & data-driven sales"],
    school: "Business Excellence & Sustainable Growth",
    duration: "10–12 weeks",
    image: "/assets/training-programme-05.png",
    accent: "amber",
  },
  {
    title: "Intelligent Business Transformation",
    subtitle: "Where Lean meets data, technology and AI.",
    themes: ["Process redesign & automation", "Data & analytics", "ML and deep learning use cases", "Digital operating models", "AI governance & value realisation"],
    school: "AI & Digital Transformation",
    duration: "10–16 weeks",
    image: "/assets/training-programme-06.png",
    accent: "blue",
  },
  {
    title: "Strategy to Execution Leadership",
    subtitle: "Turning strategic ambition into measurable results.",
    themes: ["Strategy deployment", "Transformation management", "Change leadership", "Organisation design", "Performance & value realisation"],
    school: "Transformation & Leadership",
    duration: "10–12 weeks",
    image: "/assets/training-programme-07.png",
    accent: "violet",
  },
];

const impactModel = [
  ["book", "Understand", "Build conceptual knowledge & context"],
  ["target", "Diagnose", "Apply frameworks to real business challenges"],
  ["settings", "Design", "Develop practical solutions"],
  ["rocket", "Execute", "Implement through live projects"],
  ["flow", "Sustain", "Embed for lasting impact"],
  ["chart", "Scale", "Transfer capability across the organisation"],
];

const schools = [
  {
    title: "AI & Digital Transformation",
    text: "Build AI fluency and leverage digital technologies to drive innovation, productivity and business impact.",
    items: ["AI for Leaders", "Generative AI", "AI Strategy & Transformation", "AI-Powered Decision Making", "Responsible AI", "Building an AI-Ready Organisation"],
    icon: "brain",
    image: "/assets/training-school-01.png",
    accent: "violet",
  },
  {
    title: "AI + Lean & Operational\u00A0Excellence",
    text: "Combine Lean, Six Sigma and AI to improve processes, quality, speed and performance at scale.",
    items: ["AI-Enabled Lean Practitioner", "AI-Enabled Lean Six Sigma Green Belt", "AI-Enabled Lean Six Sigma Black Belt", "Operational Excellence Leader", "Lean Management", "Kaizen & Continuous Improvement"],
    icon: "chart",
    image: "/assets/training-school-02.png",
    accent: "blue",
  },
  {
    title: "Transformation & Leadership",
    text: "Develop the leadership and transformation capabilities to turn strategy into sustained results.",
    items: ["Transformation Leadership", "Strategy to Execution", "Change Leadership", "Transformation Office / PMO", "Organisation Design", "Performance Management", "Innovation & Design Thinking"],
    icon: "people",
    image: "/assets/training-school-03.png",
    accent: "teal",
  },
  {
    title: "AI for Functions",
    text: "Apply AI to core business functions and unlock new levels of efficiency, insight and value.",
    items: ["AI for HR", "AI for Finance", "AI for Operations & Supply Chain", "AI for Sales & Marketing", "AI for Corporate Functions", "AI for Risk & Compliance"],
    icon: "briefcase",
    image: "/assets/training-school-04.png",
    accent: "orange",
  },
  {
    title: "Business Excellence & Lean Six Sigma",
    text: "Build the foundation of disciplined, data-driven improvement and quality excellence.",
    items: ["Lean Fundamentals", "Lean Six Sigma Yellow Belt", "Lean Six Sigma Green Belt", "Lean Six Sigma Black Belt", "Master Black Belt", "Quality Management", "Problem Solving & RCA"],
    icon: "award",
    image: "/assets/training-school-05.png",
    accent: "indigo",
  },
];

const schoolOutcomes = [
  ["people", "Role-Specific Learning"],
  ["target", "Business-Aligned Outcomes"],
  ["book", "AI-Enabled Learning"],
  ["chart", "Measurable Impact"],
];

const differenceSteps = [
  {
    title: "Learn",
    icon: "book",
    image: "/assets/training-difference-01-v2.png",
    accent: "blue",
    text: "Build the right knowledge, mindset and skills through expert-led, engaging and practical learning.",
    items: ["Expert practitioner-led sessions", "Concepts, frameworks and tools", "Real-world case studies", "Interactive discussions"],
  },
  {
    title: "Apply",
    icon: "target",
    image: "/assets/training-difference-02-v2.png",
    accent: "purple",
    text: "Apply learning to real business situations through guided practice, projects and structured application.",
    items: ["Hands-on exercises & workshops", "Business problem-solving", "Project-based application", "Feedback and expert coaching"],
  },
  {
    title: "Transform",
    icon: "chart",
    image: "/assets/training-difference-03-v2.png",
    accent: "navy",
    text: "Translate application into measurable results, new ways of working and lasting impact for your organisation.",
    items: ["Measurable business outcomes", "Improved performance & efficiency", "Capability building & adoption", "Sustained transformation"],
  },
];

const differenceOutcomes = [
  ["people", "Practitioner Expertise", "Learn from experienced professionals who have done it in real organisations."],
  ["settings", "Real-World Relevance", "Content and examples drawn from industry, business and transformation projects."],
  ["target", "Outcome Focused", "Every programme is designed to deliver tangible business impact and ROI."],
  ["shield", "Built to Sustain", "We help embed capability inside your organisation for long-term success."],
];

const corporateSteps = [
  ["Diagnose", "Understand capability gaps, business priorities and transformation requirements."],
  ["Design", "Create role-specific learning journeys around the organisation's context."],
  ["Learn", "Build knowledge, skills, tools and leadership behaviours."],
  ["Apply", "Connect learning to live business problems and improvement opportunities."],
  ["Sustain", "Embed playbooks, routines, coaching and internal capability."],
];

const onlineFormats = [
  ["people", "Live Online", "Practitioner-led sessions"],
  ["flow", "Blended", "Live and self-paced learning"],
  ["rocket", "Executive Programmes", "Focused, high-impact journeys"],
  ["award", "Certification", "Recognised capability pathways"],
];

const leanSteps = [
  ["See", "Identify waste, friction and opportunities."],
  ["Think", "Understand root causes and value drivers."],
  ["Design", "Redesign the process before automating it."],
  ["Augment", "Apply AI, analytics and automation where they create value."],
  ["Scale", "Build governance, capability and operating routines."],
  ["Sustain", "Measure outcomes and continuously improve."],
];

const pathways = [
  { title: "Business Leader", description: "For leaders who set direction, drive growth and create value.", stages: ["AI Awareness", "AI for Leaders", "AI Strategy", "AI-Enabled Transformation"] },
  { title: "Transformation Leader", description: "For leaders who turn strategy into measurable impact.", stages: ["Transformation Fundamentals", "Operational Excellence", "AI + Transformation", "Transformation Leadership"] },
  { title: "Lean Practitioner", description: "For professionals who improve, optimise and deliver.", stages: ["Lean Fundamentals", "Yellow Belt", "Green Belt", "AI-Enabled Lean", "Black Belt"] },
  { title: "Functional Professional", description: "For domain experts who want to do more with data and AI.", stages: ["AI Foundations", "AI for Your Function", "AI Workflows", "AI-Powered Productivity"] },
  { title: "Enterprise", description: "For organisations building a future-ready workforce.", stages: ["AI Literacy", "Role-Based AI", "Process Transformation", "AI Academy"] },
];

const heroHighlights = [
  ["brain", "Future-Ready Skills"],
  ["settings", "Practical Application"],
  ["chart", "Measurable Impact"],
];

const proofIcons = ["people", "target", "brain", "clipboard", "shield"];

const whyPillars = [
  ["people", "People Capability"],
  ["settings", "Practical Application"],
  ["chart", "Real Business Impact"],
];

const capabilityLoop = [
  { position: "learnStage", icon: "book", title: "Learn", text: "Build the concepts, methods and tools." },
  { position: "applyStage", icon: "brain", title: "Apply", text: "Work on real business situations and practical challenges." },
  { position: "transformStage", icon: "chart", title: "Transform", text: "Drive measurable results and sustainable change." },
  { position: "sustainStage", icon: "target", title: "Sustain", text: "Embed learnings, build habits and create lasting impact." },
];

function HeroIcon({ name }: { name: string }) {
  switch (name) {
    case "people":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M16 10.5a3 3 0 1 0-2.1-5.14" />
          <path d="M8 10.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          <path d="M2.8 19.5a5.2 5.2 0 0 1 10.4 0" />
          <path d="M13.5 14.3a5 5 0 0 1 7.7 4.2" />
        </svg>
      );
    case "settings":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 8.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6Z" />
          <path d="m19.2 13.4 1.5 1.2-1.8 3.1-1.9-.7a7.4 7.4 0 0 1-1.7 1l-.3 2h-3.6l-.3-2a7.4 7.4 0 0 1-1.7-1l-1.9.7-1.8-3.1 1.5-1.2a7.6 7.6 0 0 1 0-2l-1.5-1.2 1.8-3.1 1.9.7a7.4 7.4 0 0 1 1.7-1l.3-2H15l.3 2a7.4 7.4 0 0 1 1.7 1l1.9-.7 1.8 3.1-1.5 1.2a7.6 7.6 0 0 1 0 2Z" />
        </svg>
      );
    case "flow":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 7h4v4H5zM15 4h4v4h-4zM15 16h4v4h-4z" />
          <path d="M9 9h3a3 3 0 0 0 3-3M9 9h3a3 3 0 0 1 3 3v6" />
        </svg>
      );
    case "chart":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 19V5" />
          <path d="M4 19h16" />
          <path d="M7 15.5 11 11l3 2.5 5-7" />
          <path d="M17 6.5h2v2" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3 19 6v5.4c0 4.5-2.8 7.5-7 9.6-4.2-2.1-7-5.1-7-9.6V6l7-3Z" />
          <path d="m9 12 2 2 4-5" />
        </svg>
      );
    case "target":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 20a8 8 0 1 0-8-8 8 8 0 0 0 8 8Z" />
          <path d="M12 16a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" />
          <path d="m15 9 4-4M17 5h2v2" />
        </svg>
      );
    case "briefcase":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 7V5.8A1.8 1.8 0 0 1 10.8 4h2.4A1.8 1.8 0 0 1 15 5.8V7" />
          <path d="M4 8h16v11H4z" />
          <path d="M4 12h16M10 12v2h4v-2" />
        </svg>
      );
    case "book":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3.5 5.5c3.1-.7 5.9-.1 8.5 1.7v12c-2.6-1.8-5.4-2.4-8.5-1.7v-12Z" />
          <path d="M20.5 5.5c-3.1-.7-5.9-.1-8.5 1.7v12c2.6-1.8 5.4-2.4 8.5-1.7v-12Z" />
          <path d="M6.5 9h3M6.5 12h3M14.5 9h3M14.5 12h3" />
        </svg>
      );
    case "clipboard":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 5H5v16h14V5h-3" />
          <path d="M9 3h6v4H9zM8 11h5M8 15h4" />
          <path d="m15 17 4-4 2 2-4 4-3 1 1-3Z" />
        </svg>
      );
    case "practitioner":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM3 20a7 7 0 0 1 10.5-6.1" />
          <path d="m18 13 1.2 2.4 2.7.4-2 1.9.5 2.7-2.4-1.3-2.4 1.3.5-2.7-2-1.9 2.7-.4L18 13Z" />
        </svg>
      );
    case "rocket":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14.5 5.5c2.2-2.2 4.7-2.4 5.8-2.3.1 1.1-.1 3.6-2.3 5.8l-4.8 4.8-4-4 5.3-4.3Z" />
          <path d="m9.2 9.8-3.8.7-2.2 2.2 5.1 1M13.2 13.8l-.7 3.8-2.2 2.2-1-5.1" />
          <path d="M16.5 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM6.8 17.2c-1.8.1-3 1.2-3.4 3.4 2.2-.4 3.3-1.6 3.4-3.4Z" />
        </svg>
      );
    case "award":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" />
          <path d="m8.5 15.1-1.3 6 4.8-2.7 4.8 2.7-1.3-6" />
          <path d="M12 5.2 13.5 8l3.1.5-2.2 2.2.5 3.1-2.9-1.5-2.9 1.5.5-3.1-2.2-2.2 3.1-.5L12 5.2Z" />
        </svg>
      );
    case "star":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m12 2.8 2.8 5.7 6.3.9-4.5 4.4 1 6.2-5.6-3-5.6 3 1-6.2-4.5-4.4 6.3-.9L12 2.8Z" />
        </svg>
      );
    case "person":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
          <path d="M4.5 20a7.5 7.5 0 0 1 15 0" />
        </svg>
      );
    case "brain":
    default:
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 5.4A3 3 0 0 0 4.8 9 3.4 3.4 0 0 0 6 15.6V20" />
          <path d="M15 5.4A3 3 0 0 1 19.2 9 3.4 3.4 0 0 1 18 15.6V20" />
          <path d="M9 5.4V20M15 5.4V20M9 10h6M9 15h6" />
        </svg>
      );
  }
}

function Cta({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light";
}) {
  return (
    <Link className={`${styles.cta} ${styles[variant]}`} href={href}>
      <span>{children}</span>
      <span aria-hidden="true">-&gt;</span>
    </Link>
  );
}

export default function TrainingsPage() {
  return (
    <main className={styles.page} id="main">
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroArtwork} aria-hidden="true" />
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.heroEyebrow}>Arete Transformation Academy</p>
              <h1>
                Build the Skills.
                <span>Transform the Future.</span>
              </h1>
              <p className={styles.heroLead}>
                From AI and Lean Six Sigma to leadership and operational excellence, Arete Academy empowers individuals and organisations to turn capability into measurable business impact.
              </p>
              <div className={styles.heroHighlights} aria-label="Academy outcomes">
                {heroHighlights.map(([icon, label]) => (
                  <div className={styles.heroHighlight} key={label}>
                    <span><HeroIcon name={icon} /></span>
                    <strong>{label}</strong>
                  </div>
                ))}
              </div>
              <div className={styles.heroActions}>
                <Cta href="#online">Explore Online Programmes</Cta>
                <Cta href="#corporate" variant="secondary">Build a Corporate Academy</Cta>
              </div>
              <div className={styles.heroSignature} aria-label="People, capability, impact">
                <span aria-hidden="true" />
                <p>People <b>|</b> Capability <b>|</b> Impact</p>
              </div>
            </div>
            <div className={styles.heroSystem} aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className={styles.whyProof} id="why-arete" aria-labelledby="why-arete-title">
        <div className={styles.container}>
          <div className={styles.whyTop}>
            <div className={styles.whyCopy}>
              <p className={styles.whyEyebrow}>Arete Transformation Academy</p>
              <h2 id="why-arete-title">
                Don&apos;t just learn.
                <span>Transform.</span>
              </h2>
              <div className={styles.whyRule} aria-hidden="true" />
              <p>At Arete, we go beyond training. We partner with individuals and organisations to build the capabilities that drive real change.</p>
              <p>Our programmes combine deep domain expertise, practical application, and measurable outcomes&mdash;helping you turn knowledge into action and action into lasting impact.</p>
              <div className={styles.whyPillars} aria-label="Transformation Academy outcomes">
                {whyPillars.map(([icon, label]) => (
                  <div className={styles.whyPillar} key={label}>
                    <span><HeroIcon name={icon} /></span>
                    <strong>{label}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.capabilityDiagram} aria-label="Learn, apply, transform and sustain capability cycle">
              <svg className={styles.loopArrows} viewBox="0 0 420 420" aria-hidden="true">
                <defs>
                  <marker id="loop-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" />
                  </marker>
                </defs>
                <path d="M210 50 A160 160 0 0 1 370 210" />
                <path d="M370 210 A160 160 0 0 1 210 370" />
                <path d="M210 370 A160 160 0 0 1 50 210" />
                <path d="M50 210 A160 160 0 0 1 210 50" />
              </svg>
              <div className={styles.loopCenter}>
                <Image src="/assets/training-loop-logo-reference.png" alt="Arete Partners" width={195} height={175} />
                <strong>Transforming Capability<br />Into Impact</strong>
              </div>
              {capabilityLoop.map((stage) => (
                <div className={`${styles.loopStage} ${styles[stage.position]}`} key={stage.title}>
                  <span><HeroIcon name={stage.icon} /></span>
                  <div>
                    <strong>{stage.title}</strong>
                    <p>{stage.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.whyArtwork} role="img" aria-label="Leader applying transformation learning in a city setting" />
          </div>

          <div className={styles.fiveGrid}>
            {differenceCards.map(([title, text], index) => (
              <article className={styles.cleanCard} key={title}>
                <span className={styles.cardNumber}>
                  <HeroIcon name={proofIcons[index] ?? "person"} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className={styles.whyQuote}>
            <span aria-hidden="true">&ldquo;</span>
            <strong>We don&apos;t just close training programmes. We open doors to transformation.</strong>
          </div>
        </div>
      </section>

      <section className={styles.flagshipSection} id="programmes">
        <div className={styles.container}>
          <div className={styles.flagshipTopline}>
            <Image src="/assets/training-programme-brand-lockup.png" alt="Arete Transformation Academy — Learn, Apply, Transform" width={555} height={145} />
            <div className={styles.flagshipPromise}>
              <span>Better people.<br />Stronger organisations.<br />Brighter tomorrows.</span>
            </div>
            <div className={styles.flagshipArtwork} aria-hidden="true" />
          </div>
          <header className={styles.flagshipHeader}>
            <p>Our Flagship Programmes</p>
            <h2>Seven Programmes. <em>One Transformation Journey.</em></h2>
            <span>Practical, application-led programmes designed to build future-ready professionals and<br />high-performance teams &mdash; across core disciplines, digital innovation and business leadership.</span>
          </header>
          <div className={styles.programmeGrid}>
            {signatureProgrammes.map((programme) => (
              <article className={styles.programmeCard} data-accent={programme.accent} key={programme.title}>
                <Image className={styles.programmeVisual} src={programme.image} alt="" width={218} height={120} loading="eager" style={{ width: "100%", height: "auto" }} />
                <div className={styles.programmeContent}>
                  <h3>{programme.title}</h3>
                  <p className={styles.programmeSubtitle}>{programme.subtitle}</p>
                  <ul>
                    {programme.themes.map((theme) => <li key={theme}>{theme}</li>)}
                  </ul>
                </div>
                <div className={styles.programmeFooter}>
                  <div><HeroIcon name="settings" /><span><small>School</small>{programme.school}</span></div>
                  <div><span><small>Duration</small>{programme.duration}</span></div>
                </div>
              </article>
            ))}
          </div>
          <div className={styles.impactStrip}>
            <div className={styles.impactIntro}>
              <span><HeroIcon name="target" /></span>
              <div>
                <strong>The Arête Learning-to-Impact Model</strong>
                <p>More than learning. A clear path to transformation.</p>
              </div>
            </div>
            <div className={styles.impactSteps}>
              {impactModel.map(([icon, title, text], index) => (
                <div className={styles.impactStep} key={title}>
                  <HeroIcon name={icon} />
                  <strong>{title}</strong>
                  <p>{text}</p>
                  {index < impactModel.length - 1 ? <span aria-hidden="true">&rarr;</span> : null}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.flagshipFootnote}>
            <span>People&nbsp;&nbsp;|&nbsp;&nbsp;Capability&nbsp;&nbsp;|&nbsp;&nbsp;Business Impact</span>
            <div>
              <i aria-hidden="true" />
              <strong>A Better Tomorrow</strong>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.schoolsSection} id="schools">
        <div className={styles.container}>
          <div className={styles.schoolsTop}>
            <Image className={styles.schoolsLogo} src="/assets/arete-partners-logo-header-navy.png" alt="Arete Partners" width={170} height={170} />
            <header className={styles.schoolsHeader}>
              <p>Programme Schools</p>
              <h2>Five Schools. <em>End-to-End Capability.</em></h2>
              <span>Our programmes are organised into five schools to help you build the right<br />skills for your role, your team, and your organisation&apos;s transformation journey.</span>
            </header>
            <div className={styles.schoolsMantra}>People<br />Capability<br />Business Impact<br />A Better Tomorrow<span aria-hidden="true" /></div>
          </div>
          <div className={styles.schoolGrid}>
            {schools.map((school) => (
              <article className={styles.schoolCard} data-accent={school.accent} key={school.title}>
                <Image className={styles.schoolVisual} src={school.image} alt="" width={297} height={162} />
                <div className={styles.schoolCardBody}>
                  <h3>{school.title}</h3>
                  <span className={styles.schoolRule} aria-hidden="true" />
                  <p>{school.text}</p>
                  <ul>
                    {school.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <Link href="/contact-us">Explore School <span aria-hidden="true">&rarr;</span></Link>
                </div>
              </article>
            ))}
          </div>
          <div className={styles.schoolPromise}>
            <div className={styles.schoolPromiseIntro}>
              <span><HeroIcon name="star" /></span>
              <div>
                <strong>Integrated. Practical. Impactful.</strong>
                <p>Each school is designed to be practical and application-focused&mdash;ensuring learners build real skills and apply them to real business challenges.</p>
              </div>
            </div>
            <div className={styles.schoolPromiseItems}>
              {schoolOutcomes.map(([icon, label]) => (
                <div key={label}>
                  <HeroIcon name={icon} />
                  <strong>{label}</strong>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.schoolsFootnote}>
            <div><i aria-hidden="true" /><span>Learn&nbsp;&nbsp;|&nbsp;&nbsp;Apply&nbsp;&nbsp;|&nbsp;&nbsp;Transform</span></div>
            <div><i aria-hidden="true" /><span>People&nbsp;&nbsp;|&nbsp;&nbsp;Capability&nbsp;&nbsp;|&nbsp;&nbsp;Impact</span></div>
          </div>
        </div>
      </section>

      <section className={styles.differenceSection} id="methodology">
        <div className={styles.container}>
          <Image className={styles.differenceBrand} src="/assets/training-difference-brand-lockup.png" alt="Arete Transformation Academy — Learn, Apply, Transform" width={500} height={132} />
          <Image className={styles.differenceTopArt} src="/assets/training-difference-top-art.png" alt="" width={414} height={316} aria-hidden="true" />
          <header className={styles.differenceHeader}>
            <p><span aria-hidden="true" />The Arete Difference<span aria-hidden="true" /></p>
            <h2><span>Learn</span><b>&rarr;</b><span>Apply</span><b>&rarr;</b><span>Transform</span></h2>
            <div>We go beyond knowledge transfer. Our approach ensures that learning turns into<br />real-world application and measurable, sustainable transformation.</div>
          </header>

          <div className={styles.differenceGrid}>
            {differenceSteps.map((step, index) => (
              <article className={`${styles.differenceCard} ${styles[`differenceCard_${step.accent}`]}`} key={step.title}>
                <div className={styles.differenceImage}>
                  <Image src={step.image} alt="" fill loading="eager" sizes="(max-width: 900px) 100vw, 33vw" />
                </div>
                <div className={styles.differenceBadge}><HeroIcon name={step.icon} /></div>
                <div className={styles.differenceCardBody}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                  <i aria-hidden="true" />
                  <ul>
                    {step.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              </article>
            ))}
            <span className={`${styles.differenceArrow} ${styles.differenceArrowFirst}`} aria-hidden="true">&rarr;</span>
            <span className={`${styles.differenceArrow} ${styles.differenceArrowSecond}`} aria-hidden="true">&rarr;</span>
          </div>

          <div className={styles.differencePromise}>
            <div className={styles.differencePromiseIntro}>
              <span><HeroIcon name="star" /></span>
              <div>
                <strong>More than training.<br />A transformation partner.</strong>
                <p>We partner with learners and organisations at every step of the journey&mdash;before, during and long after the programme.</p>
              </div>
            </div>
            <div className={styles.differenceOutcomes}>
              {differenceOutcomes.map(([icon, title, text]) => (
                <div key={title}>
                  <HeroIcon name={icon} />
                  <strong>{title}</strong>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.differenceFootnote}>
            <i aria-hidden="true" />
            <span>People&nbsp;&nbsp;|&nbsp;&nbsp;Capability&nbsp;&nbsp;|&nbsp;&nbsp;Business Impact</span>
            <i aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className={styles.learningFormatsSection} id="online">
        <div className={styles.container}>
          <Image className={styles.learningFormatsBrand} src="/assets/training-flex-brand.png" alt="Arete Transformation Academy — Learn, Apply, Transform" width={455} height={130} />
          <div className={styles.learningFormatsMotto}><i aria-hidden="true" /><span>Better People.<br />Stronger Organisations.<br />Brighter Tomorrows.</span><i aria-hidden="true" /></div>
          <header className={styles.learningFormatsHeader}>
            <p><span aria-hidden="true" />Flexible Learning<span aria-hidden="true" /></p>
            <h2><span>Learn Your Way.</span> <strong>Build Capability That Lasts.</strong></h2>
            <div>Choose focused professional learning or build a tailored academy around your organisation&apos;s priorities.</div>
          </header>

          <div className={styles.learningFormatsGrid}>
            <article className={`${styles.learningFormatPanel} ${styles.onlinePanel}`}>
              <Image className={styles.learningFormatPhoto} src="/assets/training-flex-online-v3.png" alt="Online learning platform displayed on a laptop" width={351} height={363} />
              <div className={styles.learningFormatBody}>
                <p className={styles.learningFormatEyebrow}><i><HeroIcon name="book" /></i>Online Programmes</p>
                <h3>Learn from anywhere.<br />Apply everywhere.</h3>
                <p>Our online programmes combine live practitioner-led sessions, digital learning, practical exercises and application-based assignments.</p>
                <p>Designed for professionals who want to build relevant capabilities without stepping away from their careers.</p>
                <div className={styles.onlineFormatGrid}>
                  {onlineFormats.map(([icon, title, text]) => (
                    <div key={title}>
                      <HeroIcon name={icon} />
                      <span><strong>{title}</strong><small>{text}</small></span>
                    </div>
                  ))}
                </div>
                <Cta href="/contact-us" variant="secondary">Explore Online Learning</Cta>
              </div>
            </article>

            <article className={`${styles.learningFormatPanel} ${styles.academyPanel}`} id="corporate">
              <Image className={styles.learningFormatPhoto} src="/assets/training-flex-corporate.png" alt="Corporate team applying learning in a facilitated workshop" width={289} height={391} />
              <div className={styles.learningFormatBody}>
                <p className={styles.learningFormatEyebrow}><i><HeroIcon name="people" /></i>Corporate Transformation Academies</p>
                <h3>Build capability inside<br />the organisation.</h3>
                <p>Every organisation has different priorities, maturity and challenges. Arete works with leadership teams to create customised learning journeys aligned to business strategy and transformation priorities.</p>
                <div className={styles.academyJourney}>
                {corporateSteps.map(([title, text], index) => (
                  <div key={title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <i><HeroIcon name={index === 0 ? "target" : index === 1 ? "flow" : index === 2 ? "book" : index === 3 ? "settings" : "shield"} /></i>
                    <p><strong>{title}</strong><small>{text}</small></p>
                  </div>
                ))}
                </div>
              </div>
            </article>
          </div>

          <div className={styles.learningFormatsValueStrip}>
            <div><HeroIcon name="target" /><span><strong>Real-World Relevance</strong><small>Practical, business-focused learning</small></span></div>
            <div><HeroIcon name="people" /><span><strong>Expert Faculty</strong><small>Industry and consulting experience</small></span></div>
            <div><HeroIcon name="chart" /><span><strong>Measurable Impact</strong><small>Tools, frameworks and application</small></span></div>
            <div><HeroIcon name="shield" /><span><strong>Built for the Future</strong><small>Capabilities that last</small></span></div>
          </div>
        </div>
        <div className={styles.learningFormatsClosing}><i aria-hidden="true" /><em>&ldquo;More than training. A transformation partner.&rdquo;</em><span>People&nbsp;&nbsp;|&nbsp;&nbsp;Capability&nbsp;&nbsp;|&nbsp;&nbsp;Business Impact&nbsp;&nbsp;|&nbsp;&nbsp;A Better Tomorrow</span><i aria-hidden="true" /></div>
      </section>

      <section className={styles.aiLeanSection} id="ai-lean">
        <div className={styles.container}>
          <Image className={styles.sectionAcademyBrand} src="/assets/t8-brand.png" alt="Arete Transformation Academy — Learn, Apply, Transform" width={497} height={133} />
          <div className={styles.sectionAcademyMotto}>Better People.<br />Stronger Organisations.<br />Brighter Tomorrows.</div>
          <header className={styles.aiLeanHeader}>
            <p><span aria-hidden="true" />A More Intelligent Way to Operate<span aria-hidden="true" /></p>
            <h2>The future of operational excellence<br /><strong>is not AI alone.</strong></h2>
            <div>AI accelerates the work. Lean, Six Sigma and transformation ensure it is the right work&mdash;designed, controlled and connected to business outcomes.</div>
          </header>
          <div className={styles.aiLeanLayout}>
            <Image className={styles.aiLeanMountain} src="/assets/t8-mountain-v3.png" alt="Mountain representing higher capabilities and greater impact" width={375} height={550} />
            <div className={styles.aiLeanPrinciples}>
              <div><span><HeroIcon name="brain" /></span><strong>AI</strong><p>Accelerate analysis, decisions and execution.</p></div>
              <div><span><HeroIcon name="flow" /></span><strong>Lean</strong><p>Remove friction and redesign value flow.</p></div>
              <div><span><HeroIcon name="settings" /></span><strong>Six Sigma</strong><p>Build capable, controlled processes.</p></div>
              <div><span><HeroIcon name="chart" /></span><strong>Transformation</strong><p>Connect improvement to measurable outcomes.</p></div>
            </div>
            <div className={styles.aiLeanBridge} aria-label="Integrated disciplines create a stronger tomorrow">
              <i aria-hidden="true" />
              <span>Integrated<br />disciplines.<br /><b>A stronger<br />tomorrow.</b></span>
              <strong aria-hidden="true">›</strong>
              <i aria-hidden="true" />
            </div>
            <div className={styles.aiLeanSteps}>
              {leanSteps.map(([title, text], index) => (
                <article key={title}>
                  <Image src={`/assets/t8-step${index + 1}-v2.png`} alt="" fill sizes="15vw" />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <i><HeroIcon name={index === 0 ? "target" : index === 1 ? "brain" : index === 2 ? "flow" : index === 3 ? "settings" : index === 4 ? "people" : "shield"} /></i>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </div>
          <div className={styles.aiLeanNote}><HeroIcon name="target" /><div><strong>AI-Enabled Operational Excellence.</strong><span>Disciplined thinking. Smarter execution. Measurable impact.</span></div>
            {[["people","Higher Productivity"],["chart","Better Quality"],["target","Lower Costs"],["star","Greater Customer Value"],["shield","A More Sustainable Future"]].map(([icon,label])=><p key={label}><HeroIcon name={icon} /><b>{label}</b></p>)}
          </div>
          <div className={styles.academySectionFoot}>People&nbsp;&nbsp;|&nbsp;&nbsp;Capability&nbsp;&nbsp;|&nbsp;&nbsp;Business Impact</div>
        </div>
      </section>

      <section className={styles.pathwaysSection} id="pathways">
        <div className={styles.container}>
          <Image className={styles.sectionAcademyBrand} src="/assets/t9-brand.png" alt="Arete Transformation Academy — Learn, Apply, Transform" width={488} height={136} />
          <Image className={styles.pathwaysMountain} src="/assets/t9-mountain-v4.png" alt="" width={212} height={270} aria-hidden="true" />
          <div className={styles.sectionAcademyMotto}>Better People.<br />Stronger Organisations.<br />Brighter Tomorrows.</div>
          <header className={styles.pathwaysHeader}>
            <p><span aria-hidden="true" />Learning Pathways<span aria-hidden="true" /></p>
            <h2>Build Capability <strong>Progressively.</strong></h2>
            <div>Structured journeys that meet learners where they are and guide them towards role-relevant mastery.</div>
          </header>
          <div className={styles.pathwaysList}>
              {pathways.map(({ title, description, stages }, index) => (
                <article key={title}>
                  <Image src={`/assets/t9-row${index + 1}.png`} alt="" fill sizes="32vw" />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <i><HeroIcon name={index === 0 ? "briefcase" : index === 1 ? "people" : index === 2 ? "settings" : index === 3 ? "person" : "flow"} /></i>
                  <header><h3>{title}</h3><p>{description}</p></header>
                  <div>
                    {stages.map((stage, stageIndex) => (
                      <span key={stage}>{stage}{stageIndex < stages.length - 1 && <b aria-hidden="true">&rarr;</b>}</span>
                    ))}
                  </div>
                </article>
              ))}
          </div>
          <aside className={styles.pathwaysAside}><strong>Different Roles.<br />A Stronger Tomorrow.</strong><i /><span>From individual capability to enterprise transformation.</span></aside>
          <div className={styles.pathwaysPromise}><HeroIcon name="target" /><div><strong>A Unified Learning Ecosystem</strong><span>Flexible. Relevant. Impactful.</span></div>
            {[["people","Role-Relevant Journeys"],["book","Practical Application"],["chart","Measurable Outcomes"],["star","Future-Ready Organisation"]].map(([icon,label])=><p key={label}><HeroIcon name={icon} /><b>{label}</b></p>)}
          </div>
          <div className={styles.academySectionFoot}>People&nbsp;&nbsp;|&nbsp;&nbsp;Capability&nbsp;&nbsp;|&nbsp;&nbsp;Business Impact</div>
        </div>
      </section>

      <section className={styles.academyClosingSection} id="academy-closing">
        <div className={styles.container}>
          <Image className={styles.sectionAcademyBrand} src="/assets/t10-brand.png" alt="Arete Transformation Academy — Learn, Apply, Transform" width={582} height={158} />
          <Image className={styles.academyClosingVisual} src="/assets/t10-climbers-v3.png" alt="Team climbing toward a shared summit" width={972} height={941} />
          <div className={styles.sectionAcademyMotto}>Better People.<br />Stronger Organisations.<br />Brighter Tomorrows.</div>
          <div className={styles.academyClosingContent}>
            <div className={styles.academyClosingCopy}>
              <h2>Don&apos;t Just Build Skills.<br /><strong>Build Transformation Capability.</strong></h2>
              <span>Equip your people to think differently, work smarter, use AI intelligently, and turn improvement ideas into measurable business outcomes.</span>
              <div>
                <Cta href="/trainings" variant="primary">Explore the Academy</Cta>
                <Cta href="/contact-us" variant="secondary">Talk to Us</Cta>
              </div>
              <div className={styles.academyClosingOutcomes}>
                {[["people","People Capability","Future-ready talent"],["settings","Practical Application","Real business scenarios"],["chart","Measurable Outcomes","Capability that delivers"],["shield","Sustainable Impact","A stronger tomorrow"]].map(([icon,title,text])=><p key={title}><HeroIcon name={icon}/><strong>{title}</strong><span>{text}</span></p>)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
