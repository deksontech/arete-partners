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
    title: "AI-Enabled Transformation Leader",
    subtitle: "From AI awareness to enterprise impact.",
    themes: ["AI strategy & business alignment", "Process redesign with AI", "Change, adoption & value realisation", "AI governance & responsible AI"],
    ideal: "CXOs, Business Leaders, Transformation Leaders",
    image: "/assets/programme-ai-leader.png",
    accent: "violet",
  },
  {
    title: "Generative AI for Business",
    subtitle: "Move beyond prompts. Create real value.",
    themes: ["Practical GenAI for work & productivity", "Content, analysis & decision support", "Building AI-powered workflows", "Ethics, security & risk awareness"],
    ideal: "Professionals, Managers & Business Teams",
    image: "/assets/programme-generative-ai.png",
    accent: "blue",
  },
  {
    title: "AI + Lean: The New Operating System",
    subtitle: "Reinvent continuous improvement for the AI era.",
    themes: ["Lean thinking meets AI capabilities", "Smarter problem solving & analysis", "Intelligent process redesign", "Sustained improvement culture"],
    ideal: "Lean Practitioners, Ops Leaders, Process Owners",
    image: "/assets/programme-ai-lean.png",
    accent: "teal",
  },
  {
    title: "AI-Powered Operational Excellence",
    subtitle: "From process improvement to intelligent operations.",
    themes: ["AI for operations & decision making", "Quality, productivity & cost improvement", "Smart dashboards & analytics", "Lean, automation & AI integration"],
    ideal: "Operations, Manufacturing, Supply Chain & Quality Leaders",
    image: "/assets/programme-operational-excellence.png",
    accent: "violet",
  },
  {
    title: "AI-Enabled Lean Six Sigma Green Belt",
    subtitle: "Accelerate improvement with AI.",
    themes: ["AI across DMAIC", "Data-driven decision making", "Process analysis with AI tools", "Project execution & control"],
    ideal: "Improvement Practitioners, Professionals & Engineers",
    image: "/assets/programme-green-belt.png",
    accent: "amber",
  },
  {
    title: "Leadership for Business Transformation",
    subtitle: "Lead people, strategy and change that lasts.",
    themes: ["Transformation leadership mindset", "Change leadership & influence", "Strategy to execution", "Building high-performance teams"],
    ideal: "Managers, Leaders & Emerging Leaders",
    image: "/assets/programme-leadership.png",
    accent: "blue",
  },
];

const schools = [
  {
    title: "AI & Digital Transformation",
    text: "Build AI fluency and leverage digital technologies to drive innovation, productivity and business impact.",
    items: ["AI for Leaders", "Generative AI", "AI Strategy & Transformation", "AI-Powered Decision Making", "Responsible AI", "Building an AI-Ready Organisation"],
    icon: "brain",
    accent: "violet",
  },
  {
    title: "AI + Lean & Operational\u00A0Excellence",
    text: "Combine Lean, Six Sigma and AI to improve processes, quality, speed and performance at scale.",
    items: ["AI-Enabled Lean Practitioner", "AI-Enabled Lean Six Sigma Green Belt", "AI-Enabled Lean Six Sigma Black Belt", "Operational Excellence Leader", "Lean Management", "Kaizen & Continuous Improvement"],
    icon: "chart",
    accent: "blue",
  },
  {
    title: "Transformation & Leadership",
    text: "Develop the leadership and transformation capabilities to turn strategy into sustained results.",
    items: ["Transformation Leadership", "Strategy to Execution", "Change Leadership", "Transformation Office / PMO", "Organisation Design", "Performance Management", "Innovation & Design Thinking"],
    icon: "people",
    accent: "teal",
  },
  {
    title: "AI for Functions",
    text: "Apply AI to core business functions and unlock new levels of efficiency, insight and value.",
    items: ["AI for HR", "AI for Finance", "AI for Operations & Supply Chain", "AI for Sales & Marketing", "AI for Corporate Functions", "AI for Risk & Compliance"],
    icon: "briefcase",
    accent: "orange",
  },
  {
    title: "Business Excellence & Lean Six Sigma",
    text: "Build the foundation of disciplined, data-driven improvement and quality excellence.",
    items: ["Lean Fundamentals", "Lean Six Sigma Yellow Belt", "Lean Six Sigma Green Belt", "Lean Six Sigma Black Belt", "Master Black Belt", "Quality Management", "Problem Solving & RCA"],
    icon: "award",
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
    image: "/assets/difference-learn.png",
    accent: "blue",
    text: "Build the right knowledge, mindset and skills through expert-led, engaging and practical learning.",
    items: ["Expert practitioner-led sessions", "Concepts, frameworks and tools", "Real-world case studies", "Interactive discussions"],
  },
  {
    title: "Apply",
    icon: "target",
    image: "/assets/difference-apply.png",
    accent: "purple",
    text: "Apply learning to real business situations through guided practice, projects and structured application.",
    items: ["Hands-on exercises & workshops", "Business problem-solving", "Project-based application", "Feedback and expert coaching"],
  },
  {
    title: "Transform",
    icon: "chart",
    image: "/assets/difference-transform.png",
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
  ["Business Leader", "AI Awareness -> AI for Leaders -> AI Strategy -> AI-Enabled Transformation"],
  ["Transformation Leader", "Transformation Fundamentals -> Operational Excellence -> AI + Transformation -> Transformation Leadership"],
  ["Lean Practitioner", "Lean Fundamentals -> Yellow Belt -> Green Belt -> AI-Enabled Lean -> Black Belt"],
  ["Functional Professional", "AI Foundations -> AI for Your Function -> AI Workflows -> AI-Powered Productivity"],
  ["Enterprise", "AI Literacy -> Role-Based AI -> Process Transformation -> AI Academy"],
];

const facultyCards = [
  ["Transformation Leader", "Leads large-scale business transformations across industries with a focus on value creation and sustainable outcomes."],
  ["Strategy & Change Expert", "Helps organisations align strategy, structure and people to navigate change and build future-ready capabilities."],
  ["AI & Digital Practitioner", "Designs and implements AI-enabled solutions, process improvements and analytics-driven decision systems."],
  ["Operations Excellence Leader", "Drives operational excellence across functions to improve performance, quality and customer value."],
];

const certifications = [
  "Programme Completion Certificate",
  "Professional Certification",
  "Industry Certifications",
  "Specialist Credentials",
  "Partner & University Certifications",
];

const academyNav = [
  ["Why Arete", "#why-arete"],
  ["Signature Programmes", "#programmes"],
  ["Schools", "#schools"],
  ["Online", "#online"],
  ["AI + Lean", "#ai-lean"],
  ["Pathways", "#pathways"],
];

const heroHighlights = [
  ["brain", "Future-Ready Skills"],
  ["settings", "Practical Application"],
  ["chart", "Measurable Impact"],
];

const proofIcons = ["practitioner", "target", "brain", "clipboard", "shield"];

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
            </div>
            <div className={styles.heroSystem} aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className={styles.whyProof} id="why-arete" aria-labelledby="why-arete-title">
        <div className={styles.container}>
          <div className={styles.whyTop}>
            <div className={styles.whyCopy}>
              <p className={styles.whyEyebrow}>Why Arete</p>
              <h2 id="why-arete-title">
                Don&apos;t just learn.
                <span>Transform.</span>
              </h2>
              <div className={styles.whyRule} aria-hidden="true" />
              <p>At Arete, we go beyond training. We partner with individuals and organisations to build the capabilities that drive real change.</p>
              <p>Our programmes combine deep domain expertise, practical application, and measurable outcomes&mdash;helping you turn knowledge into action and action into lasting impact.</p>
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
                <Image src="/assets/training-loop-logo-approved.png" alt="Arete Partners" width={210} height={72} />
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

      <nav className={styles.academyNav} aria-label="Academy page sections">
        <div className={styles.container}>
          {academyNav.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </div>
      </nav>

      <section className={styles.flagshipSection} id="programmes">
        <div className={styles.container}>
          <header className={styles.flagshipHeader}>
            <p>Featured Programmes</p>
            <h2>Our Flagship Programmes</h2>
            <span>High-impact learning journeys designed for today&apos;s leaders and professionals<br />to build capabilities that create measurable business value.</span>
          </header>
          <div className={styles.programmeGrid}>
            {signatureProgrammes.map((programme, index) => (
              <article className={styles.programmeCard} data-accent={programme.accent} key={programme.title}>
                <div className={styles.programmeMain}>
                  <Image className={styles.programmeImage} src={programme.image} alt="" fill loading="eager" sizes="(max-width: 760px) 100vw, 34vw" />
                  <span className={styles.programmeNumber}>{String(index + 1).padStart(2, "0")}</span>
                  <strong className={styles.programmeFeatured}>★ Featured</strong>
                  <div className={styles.programmeContent}>
                    <h3>{programme.title}</h3>
                    <p className={styles.programmeSubtitle}>{programme.subtitle}</p>
                    <ul>
                      {programme.themes.map((theme) => <li key={theme}>{theme}</li>)}
                    </ul>
                  </div>
                </div>
                <div className={styles.programmeFooter}>
                  <HeroIcon name="people" />
                  <p>For: {programme.ideal}</p>
                  <Link href="/contact-us">Explore Programme <span aria-hidden="true">&rarr;</span></Link>
                </div>
              </article>
            ))}
          </div>
          <div className={styles.programmeAdvisor}>
            <span><HeroIcon name="rocket" /></span>
            <div>
              <strong>Not sure which programme is right for you?</strong>
              <p>Talk to our experts and find the perfect learning path for your goals.</p>
            </div>
            <Link href="/contact-us">Talk to an Advisor <span aria-hidden="true">&rarr;</span></Link>
          </div>
        </div>
      </section>

      <section className={styles.schoolsSection} id="schools">
        <div className={styles.container}>
          <header className={styles.schoolsHeader}>
            <p>Programme Schools</p>
            <h2>Five Schools. End-to-End Capability.</h2>
            <span>Our programmes are organised into five schools to help you build the right<br />skills for your role, your team, and your organisation&apos;s transformation journey.</span>
          </header>
          <div className={styles.schoolGrid}>
            {schools.map((school, index) => (
              <article className={styles.schoolCard} data-accent={school.accent} key={school.title}>
                <span className={styles.schoolIcon}><HeroIcon name={school.icon} /></span>
                <strong className={styles.schoolIndex}>{String(index + 1).padStart(2, "0")}</strong>
                <h3>{school.title}</h3>
                <p>{school.text}</p>
                <span className={styles.schoolRule} aria-hidden="true" />
                <ul>
                  {school.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link href="/contact-us">Explore School <span aria-hidden="true">&rarr;</span></Link>
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
        </div>
      </section>

      <section className={styles.differenceSection} id="methodology">
        <div className={styles.container}>
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
        </div>
      </section>

      <section className={styles.learningFormatsSection} id="online">
        <div className={styles.container}>
          <header className={styles.learningFormatsHeader}>
            <p><span aria-hidden="true" />Flexible Learning<span aria-hidden="true" /></p>
            <h2>Learn Your Way. Build Capability That Lasts.</h2>
            <div>Choose focused professional learning or build a tailored academy around your organisation&apos;s priorities.</div>
          </header>

          <div className={styles.learningFormatsGrid}>
            <article className={`${styles.learningFormatPanel} ${styles.onlinePanel}`}>
              <div className={styles.learningFormatVisual}>
                <Image src="/assets/learning-online.png" alt="Online learning platform displayed on a laptop" fill loading="eager" sizes="(max-width: 900px) 100vw, 50vw" />
                <span><HeroIcon name="book" /></span>
              </div>
              <div className={styles.learningFormatBody}>
                <p className={styles.learningFormatEyebrow}>Online Programmes</p>
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
              <div className={styles.learningFormatVisual}>
                <Image src="/assets/learning-corporate.png" alt="Corporate team applying learning in a facilitated workshop" fill loading="eager" sizes="(max-width: 900px) 100vw, 50vw" />
                <span><HeroIcon name="people" /></span>
              </div>
              <div className={styles.learningFormatBody}>
                <p className={styles.learningFormatEyebrow}>Corporate Transformation Academies</p>
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
        </div>
      </section>

      <section className={styles.aiLeanSection} id="ai-lean">
        <div className={styles.container}>
          <header className={styles.aiLeanHeader}>
            <p><span aria-hidden="true" />AI + Lean<span aria-hidden="true" /></p>
            <h2>The future of operational excellence<br />is not AI alone.</h2>
            <div>AI accelerates the work. Lean, Six Sigma and transformation ensure it is the right work&mdash;designed, controlled and connected to business outcomes.</div>
          </header>
          <div className={styles.aiLeanLayout}>
            <div className={styles.aiLeanPrinciples}>
              <div><span><HeroIcon name="brain" /></span><strong>AI</strong><p>Accelerate analysis, decisions and execution.</p></div>
              <div><span><HeroIcon name="flow" /></span><strong>Lean</strong><p>Remove friction and redesign value flow.</p></div>
              <div><span><HeroIcon name="settings" /></span><strong>Six Sigma</strong><p>Build capable, controlled processes.</p></div>
              <div><span><HeroIcon name="chart" /></span><strong>Transformation</strong><p>Connect improvement to measurable outcomes.</p></div>
            </div>
            <div className={styles.aiLeanSteps}>
              {leanSteps.map(([title, text], index) => (
                <article key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <i><HeroIcon name={index === 0 ? "target" : index === 1 ? "brain" : index === 2 ? "flow" : index === 3 ? "settings" : index === 4 ? "people" : "shield"} /></i>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </div>
          <div className={styles.aiLeanNote}><HeroIcon name="star" /><strong>This is our approach to AI-enabled operational excellence.</strong><span>See clearly. Design deliberately. Augment intelligently. Sustain the gains.</span></div>
        </div>
      </section>

      <section className={styles.pathwaysSection} id="pathways">
        <div className={styles.container}>
          <header className={styles.pathwaysHeader}>
            <p><span aria-hidden="true" />Learning Pathways<span aria-hidden="true" /></p>
            <h2>Build Capability Progressively.</h2>
            <div>Structured journeys that meet learners where they are and guide them towards role-relevant mastery.</div>
          </header>
          <div className={styles.pathwaysList}>
              {pathways.map(([title, text], index) => (
                <article key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <i><HeroIcon name={index === 0 ? "briefcase" : index === 1 ? "people" : index === 2 ? "settings" : index === 3 ? "person" : "flow"} /></i>
                  <h3>{title}</h3>
                  <div>
                    {text.split(" -> ").map((stage, stageIndex) => (
                      <span key={stage}>{stage}{stageIndex < text.split(" -> ").length - 1 && <b aria-hidden="true">&rarr;</b>}</span>
                    ))}
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>

      <section className={styles.proofSection}>
        <div className={styles.container}>
          <header className={styles.proofHeader}>
            <p><span aria-hidden="true" />Expertise & Recognition<span aria-hidden="true" /></p>
            <h2>Learn From Experience. Earn Credible Recognition.</h2>
          </header>
          <div className={styles.proofLayout}>
            <article className={styles.facultyPanel}>
              <div className={styles.proofPanelHeading}>
                <span><HeroIcon name="people" /></span>
                <div><p>Faculty / Practitioners</p><h3>Practitioners who have done the work.</h3></div>
              </div>
              <p>Our faculty are experienced practitioners, transformation leaders and domain experts who bring real-world insights, proven frameworks and practical wisdom to every programme.</p>
              <div className={styles.facultyGrid}>
                {facultyCards.map(([title, text], index) => (
                  <div key={title}>
                    <span><HeroIcon name={index === 0 ? "chart" : index === 1 ? "people" : index === 2 ? "brain" : "settings"} /></span>
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </article>
            <article className={styles.certificationPanel}>
              <div className={styles.proofPanelHeading}>
                <span><HeroIcon name="award" /></span>
                <div><p>Certification & Recognition</p><h3>Credentials backed by capability.</h3></div>
              </div>
              <p>Certification pathways may be offered through appropriate accreditation or delivery partners where applicable.</p>
              <div className={styles.certificationList}>
                {certifications.map((item, index) => (
                  <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><HeroIcon name="shield" /><strong>{item}</strong></div>
                ))}
              </div>
              <p className={styles.certificationNote}><HeroIcon name="clipboard" />Certification availability varies by programme. Details are provided on individual programme pages.</p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.academyClosingSection}>
        <div className={styles.container}>
          <div className={styles.academyClosingContent}>
            <div className={styles.academyClosingMark}><HeroIcon name="rocket" /></div>
            <div className={styles.academyClosingCopy}>
              <p><span aria-hidden="true" />Arete Transformation Academy</p>
              <h2>Don&apos;t Just Build Skills.<br />Build Transformation Capability.</h2>
              <span>Equip your people to think differently, work smarter, use AI intelligently, and turn improvement ideas into measurable business outcomes.</span>
            </div>
            <div className={styles.academyClosingAction}>
              <h3>Where learning becomes capability&mdash;and capability becomes performance.</h3>
              <p>Online learning for individuals. Practitioner-led programmes for organisations. Capability that lasts beyond the classroom.</p>
              <div>
                <Cta href="/trainings" variant="light">Explore the Academy</Cta>
                <Cta href="/contact-us" variant="secondary">Talk to Us</Cta>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
