export type LinkItem = {
  label: string;
  href: string;
};

export type TextSection = {
  eyebrow?: string;
  title: string;
  body?: string[];
  ctas?: LinkItem[];
  items?: Array<{
    title?: string;
    text?: string;
    meta?: string;
    bullets?: string[];
  }>;
};

export type PageContent = {
  name: string;
  currentUrl: string;
  route: string;
  title: string;
  description: string;
  hero: {
    eyebrow?: string;
    title: string;
    body: string[];
    ctas?: LinkItem[];
    image?: string;
  };
  sections: TextSection[];
};

export const site = {
  name: "Arete Partners",
  url: "https://mediumpurple-ant-531485.hostingersite.com",
  email: "info@aretepartners.com",
  phone: "+91 9876543210",
  social: ["Facebook", "Twitter", "Youtube"],
};

export const navigation: LinkItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Insights", href: "/insights" },
  { label: "Industries", href: "/industries" },
  { label: "Career", href: "/career" },
  { label: "Contact Us", href: "/contact-us" },
];

export const serviceLinks: LinkItem[] = [
  { label: "Growth & Transformation", href: "/growth-transformation" },
  { label: "Operational Excellence", href: "/operational-excellence" },
  { label: "Process Advisory", href: "/process-advisory" },
  { label: "Service Delivery", href: "/service-delivery" },
  { label: "Corporate Function Transformation", href: "/corporate-function" },
];

export const industryLinks: LinkItem[] = [
  { label: "Pharmaceutical", href: "/pharmaceutical-sector" },
  { label: "Manufacturing", href: "/industrial-manufacturing-sector" },
  { label: "Healthcare", href: "/healthcare" },
  { label: "Insurance", href: "/insurance" },
  { label: "Aerospace & Defence", href: "/aerospace-defence" },
  { label: "Automotive", href: "/automotive" },
  { label: "Global Capability Centers", href: "/global-capability-centers" },
  { label: "Education", href: "/education" },
];

export const pages: Record<string, PageContent> = {
  home: {
    name: "Home",
    currentUrl: "https://mediumpurple-ant-531485.hostingersite.com/",
    route: "/",
    title: "The Arete Partners Way",
    description: "Transforming strategy into results that last",
    hero: {
      eyebrow: "The Arete Partners Way",
      title: "Transforming strategy into results that last",
      body: [
        "We partner with leadership teams to turn bold ambitions into executable roadmaps - aligning strategy, operations and technology to deliver measurable business outcomes.",
      ],
      ctas: [
        { label: "Contact Us", href: "/contact-us" },
        { label: "Learn More", href: "#about" },
      ],
      image: "/assets/purple-wave.jpeg",
    },
    sections: [
      {
        title: "Introducing a new way to design, scale and govern transformation programs across your enterprise.",
        ctas: [{ label: "Explore How We Work", href: "#services" }],
      },
      {
        eyebrow: "Who We Are",
        title: "The Arete Partners Way",
        body: [
          "Arete Partners is a tech-enabled global consulting firm delivering high-impact solutions across Accounting & Reporting (ARC), Governance, Risk & Compliance (GRC), Sustainability & Climate (SCC), Technology Consulting, and Valuations.",
          "We combine deep domain expertise with high-performing global talent to help organizations navigate complexity, unlock value, and drive measurable outcomes. Our solutions are powered by proprietary methodologies and technology assets, ensuring precision, scalability, and long-term impact.",
          "At Arete Partners, our differentiated global delivery model and integrated tech stack enable us to provide best-in-class solutions with exceptional efficiency-without compromising on quality or insight.",
        ],
        ctas: [{ label: "About Arete Partners", href: "/about" }],
      },
      {
        title: "In today's volatile market, organisations face unprecedented challenges",
        body: [
          "Growth is harder to sustain, operations are under pressure, and customers expect more than ever before. These are some of the critical issues we help you navigate and solve.",
          "Strategy, operations, and customer experience addressed as one system.",
          "From boardroom clarity to frontline execution.",
        ],
        items: [
          { title: "Growth Pressure", text: "Stagnant revenues, shrinking market share, and inability to capture new opportunities." },
          { title: "Operational Inefficiencies", text: "Redundant processes, service delays, and underutilised capacity." },
          { title: "High Operating Costs", text: "Non-core activities consume resources, idle assets, and inflated overheads." },
          { title: "Innovation Stagnation", text: "Lack of fresh ideas, inconsistent quality, and resistance to change." },
          { title: "Poor Customer Experience", text: "Missed deadlines, inconsistent service levels, and a lack of personalisation." },
          { title: "Compliance & Risk Gaps", text: "Breaches, high error rates, and poor visibility into organisational risks." },
        ],
      },
      {
        eyebrow: "What We Do",
        title: "Our Core Offerings",
        body: ["Select a capability to view how we help clients drive revenue growth, operational excellence, and tech-enabled transformation."],
        ctas: [{ label: "View all services", href: "/services" }],
        items: [
          {
            title: "Growth & Strategy",
            meta: "Revenue growth, market expansion, competitive advantage.",
            text: "We help you define where to play and how to win - then translate strategy into executable roadmaps that deliver sustainable, profitable growth.",
            bullets: ["Sales Growth Strategy & Execution", "Market Expansion & Entry Planning", "Strategic Partnerships & Alliances", "M&A Integration Support", "Clear priorities", "Roadmaps", "KPI movement", "Talk to us", "Explore Growth & Strategy"],
          },
          {
            title: "Shared Services & GCC Excellence",
            meta: "Design & scale high-performing global hubs.",
            text: "Designing and scaling shared services and global capability centres that are efficient, resilient, and aligned to business outcomes.",
            bullets: ["Global Capability Centre (GCC) Set-up & Optimisation", "Shared Services Design & Implementation", "Governance & Performance Frameworks", "Talent and Skills Transformation", "Governance", "Talent model", "Productivity", "Talk to us", "Explore Shared Services & GCC Excellence"],
          },
          {
            title: "Tech-Enabled Transformation",
            meta: "Digitisation, automation, analytics, operating model.",
            text: "Bringing together process, data, and technology to digitise how work gets done and how value is delivered.",
            bullets: ["Process Digitisation & Automation", "AI & Analytics Integration", "Industry 4.0 Adoption Roadmaps", "Customer Experience Platforms", "Automation", "Data & analytics", "Speed to value", "Talk to us", "Explore Tech-Enabled Transformation"],
          },
          {
            title: "ESG & Value Creation",
            meta: "Sustainability embedded into strategy & delivery.",
            text: "Embedding sustainability and responsibility into strategy so ESG becomes a lever for growth, not just compliance.",
            bullets: ["Sustainability & ESG Roadmaps", "ESG Reporting & Compliance", "Purpose-led Value Creation", "Stakeholder Engagement Strategies", "Sustainability", "Reporting", "Stakeholders", "Talk to us", "Explore ESG & Value Creation"],
          },
          {
            title: "Business Process Advisory & Industry 4.0",
            meta: "Lean processes, productivity, innovation enablement.",
            text: "Re-architecting processes, operating models, and cost structures to create lean, scalable organisations.",
            bullets: ["Lean Transformation", "Process Re-engineering & Standardisation", "Target Operating Model (TOM) Design", "Cost Optimisation & Waste Reduction", "Operating model", "Cost efficiency", "Industry 4.0", "Talk to us", "Explore Business Process & Industry 4.0"],
          },
        ],
      },
      {
        eyebrow: "What Sets Us Apart",
        title: "Strategy meets execution",
        body: [
          "We bridge the gap between boardroom vision and frontline results - combining deep expertise, integrated delivery, and a tech-enabled approach without losing the human touch.",
          "Our Difference",
          "From vision to results - delivered with discipline.",
        ],
        items: [
          { title: "Strategy + Execution", text: "We bridge the gap between boardroom vision and frontline results by combining a deep industry approach with our proprietary methodology (+)" },
          { title: "Integrated Approach", text: "Linking revenue growth, operational efficiency, and people impact (+)" },
          { title: "Tech-First, Human-Centric", text: "Leveraging digital tools without losing the human touch. (+)" },
          { title: "Proven Methodologies", text: "Lean, Industry 4.0, ESG, and Agile execution frameworks." },
        ],
      },
      {
        eyebrow: "Our Impact",
        title: "Experience that compounds into measurable results",
        items: [
          { title: "500+", text: "Years of collective consulting experience" },
          { title: "20+", text: "Years average partner experience" },
          { title: "4", text: "Global locations" },
          { title: "200+", text: "Clients served" },
        ],
      },
    ],
  },
  about: {
    name: "About",
    currentUrl: "https://mediumpurple-ant-531485.hostingersite.com/about/",
    route: "/about",
    title: "About Us",
    description: "A new-age consulting firm redefining growth, efficiency, and impact",
    hero: {
      eyebrow: "About Us",
      title: "A new-age consulting firm redefining growth, efficiency, and impact",
      body: ["We partner with leadership teams to translate strategy into execution - aligning people, processes, and technology to deliver measurable, lasting business outcomes."],
      ctas: [
        { label: "Talk to Us ->", href: "/contact-us" },
        { label: "Who We Are ↓", href: "#who-we-are" },
      ],
      image: "/assets/city-consulting.jpg",
    },
    sections: [
      {
        eyebrow: "Purpose & Vision",
        title: "What we stand for - and where we're going",
        body: ["Our consulting philosophy is grounded in one belief: lasting transformation happens when strategy, execution, and people move together."],
        items: [
          { title: "Vision", text: "To be the consulting partner known for turning every client investment into a multiplier of growth, innovation, and lasting impact - powered by a team that thrives on making a difference." },
          { title: "Purpose", text: "To transform businesses in ways that transform lives - enabling our clients, their customers, and our own people to achieve more than they imagined possible." },
          { title: "Tagline", text: "Where revenue growth meets operational excellence and meaningful impact." },
          { title: "Brand Promise", text: "We help organizations grow faster, operate smarter, and create lasting value - for their customers, employees, and stakeholders - turning every consulting dollar into a multiplier of measurable results." },
          { title: "Core Belief", text: "Transformation works best when strategy meets execution - and when people are at the heart of change." },
        ],
      },
      {
        eyebrow: "ORIGIN STORY",
        title: "Built to deliver sustainable results",
        body: [
          "It all began with a bold question:",
          "How can we work hand in hand with our clients to deliver sustainable results-where every consulting dollar becomes a multiplier of growth, innovation, and impact?",
          "Our answer was to create a model that fuses deep expertise with technology, and a delivery approach that scales globally while staying personal.",
        ],
        items: [
          { title: "HAND-IN-HAND DELIVERY", text: "We work as an extension of your leadership team - co-owning the problem, the plan, and the outcome." },
          { title: "DEEP EXPERTISE x TECH", text: "A model that fuses domain expertise with technology so execution is faster, smarter, and scalable." },
          { title: "GLOBAL SCALE, PERSONAL FEEL", text: "A globally scalable delivery approach that stays personal - ensuring clarity, continuity, and trust." },
        ],
      },
      {
        eyebrow: "FOUNDATION",
        title: "Vision, progress, and culture",
        items: [
          { title: "Vision", text: "To be the consulting partner known for turning every client investment into a multiplier of growth, innovation, and lasting impact - powered by a team that thrives on making a difference." },
          { title: "Progress Milestone", text: "In a short span, we've brought together exceptional global talent, industry-leading expertise, and a tech-enabled, integrated delivery model to help organizations achieve measurable results and enduring transformation." },
          { title: "Team Culture", text: "Our team is united by a shared purpose, fueled by agility, and thrives on collaboration. We build trust through integrity, deliver excellence through discipline, and measure success by the lasting impact we create for our clients, their customers, and stakeholders." },
        ],
      },
      {
        eyebrow: "Core Services",
        title: "What We Do - And How We Create Impact",
        body: ["We help our clients grow faster, operate smarter, and create lasting value through:"],
        items: [
          { title: "Growth & Strategy", text: "Driving revenue growth, market expansion, and competitive advantage." },
          { title: "Shared Services & Global Capability Centers (GCC)", text: "Designing and scaling efficient, high-performing hubs." },
          { title: "Tech-Enabled Transformation", text: "Leveraging digital, automation, and analytics to reimagine operations." },
          { title: "ESG & Value Creation", text: "Embedding sustainability into business strategy for measurable impact." },
          { title: "Business Process Advisory & Industry 4.0", text: "Streamlining processes, boosting productivity, and enabling innovation." },
          { title: "Enablers", text: "Our services are backed by proprietary technology assets, proven methodologies, and a commitment to a trusted, secure, and compliant work environment-ensuring data integrity and client confidentiality at all times." },
        ],
      },
      {
        eyebrow: "Who We Are",
        title: "A consulting partner built for lasting impact",
        body: [
          "We are a consulting partner dedicated to driving growth, operational excellence, technology enablement, and sustainability.",
          "Working as an extension of our clients' teams, we support them from strategy to execution, delivering results that are sustainable, measurable, and lasting.",
          "Our mission is clear: make our clients successful and earn the privilege of being their Advisor for Life.",
          "By combining global talent, deep domain expertise, and proprietary technology assets, we deliver transformations that accelerate growth, strengthen resilience, and spark innovation.",
          "We operate in a trusted, secure, and compliant environment, ensuring confidentiality, data integrity, and uncompromising quality in everything we do.",
        ],
      },
      {
        title: "Our 5 Core Principles - and the Impact We Deliver",
        items: [
          { title: "Client-First Mindset", text: "We put your priorities at the center of everything we do, aligning strategies with your vision. Measurable Impact: 95%+ client satisfaction scores, repeat engagements with over 80% of our clients, and measurable business KPI improvements within the first 3-6 months." },
          { title: "Employee Engagement & Ownership" },
          { title: "Ownership for Excellence" },
          { title: "Deliver Sustainable Results" },
          { title: "Ensure Positive ROI" },
        ],
      },
    ],
  },
  services: {
    name: "Services",
    currentUrl: "https://mediumpurple-ant-531485.hostingersite.com/services/",
    route: "/services",
    title: "Purpose and Our Goal Statement",
    description: "To empower our clients to achieve substantial revenue growth and enhanced margins",
    hero: {
      title: "Purpose and Our Goal Statement",
      body: [
        "To empower our clients to achieve substantial revenue growth and enhanced margins through transformative strategies, operational excellence, and advanced digital solutions, driving sustainable success across India & global markets.",
        "Our goal is to build your internal capabilities, not create dependency.",
        "We measure success by the sustainable results your teams can achieve long after our engagement ends. We are deeply invested in transferring knowledge and enabling your long-term success.",
        "Fully invested in your success.",
      ],
      image: "/assets/banner-new.jpg",
    },
    sections: [
      {
        eyebrow: "Engagement Philosophy",
        title: "A better partnership model",
        body: ["We keep teams lean, senior, and accountable - focused on impact, not slide volume.", "The goal is to leave you with a stronger organisation, not a longer dependency."],
        items: [
          { title: "Senior-led from day one.", text: "Work is designed and delivered by experienced practitioners." },
          { title: "Domain + operating depth.", text: "Strategy, operations, and digital expertise in one team." },
          { title: "Capability transfer built-in.", text: "Playbooks, tools, and routines you can run without us." },
          { title: "Impact", text: "3-5x Typical impact versus traditional consulting teams of similar cost." },
          { title: "Cost", text: "~50% Of typical Big-4 / MBB programs for comparable transformation scope." },
          { title: "Ownership", text: "100% Clear accountability for outcomes, not just deliverables." },
        ],
      },
      {
        eyebrow: "Services Portfolio",
        title: "Strategy & Operations",
        body: ["Focused on scalability and sustainability, we deliver high-quality and cost-effective outcomes across the strategy and operations spectrum, ensuring our clients remain competitive in the marketplace."],
        items: [
          { title: "Growth & Transformation", bullets: ["Vision, mission and strategy", "Growth strategy and execution", "Product strategy", "CEO advisory - SPMO / PMO set-up, P2M innovation", "Organisation strategy & target operating model", "Sales & distribution, design thinking, organisation design", "Read more"] },
          { title: "Operational Excellence", bullets: ["Cost optimisation & lean management", "Cognitive quality & continuous improvement culture", "Innovation, Gen AI & emerging tech deployment", "Technology-enabled transformation (LCA, DRA)", "Read more"] },
          { title: "Process Advisory", bullets: ["Process design / re-design", "Metric and measurement design", "Business intelligence and analytics", "Establishing QMS", "Environment & safety management systems", "QMS / TQM maturity assessments & process audits", "Read more"] },
          { title: "Service Delivery", bullets: ["Customer strategy & customer retention", "Customer journey mapping", "Blueprints for service delivery", "Service delivery design and measurement", "Read more"] },
          { title: "Corporate Function Transformation", bullets: ["HR transformation", "Finance transformation", "Risk and compliance function", "Facilities management & administration", "IT and BCP", "Read more"] },
        ],
      },
    ],
  },
  career: {
    name: "Career",
    currentUrl: "https://mediumpurple-ant-531485.hostingersite.com/career/",
    route: "/career",
    title: "Careers",
    description: "Be a part of our journey",
    hero: {
      eyebrow: "Careers",
      title: "Be a part of our journey",
      body: ["Join a team where transformation is real, responsibility comes early, and the work you do shapes organisations, industries, and lives."],
      ctas: [
        { label: "Explore opportunities", href: "#opportunities" },
        { label: "Life at [Your Firm Name]", href: "#life" },
      ],
      image: "/assets/city-consulting.jpg",
    },
    sections: [
      {
        eyebrow: "Why Join Us",
        title: "Build a career that creates real, lasting change.",
        body: ["When you join [Your Firm Name], you don't just work on projects. You help shape organisations, enable leaders, and build capabilities that outlast any engagement."],
        items: [
          { title: "Global impact, local heart", text: "Work on transformations that drive growth and sustainability for clients across the globe, while staying grounded in a culture that values purpose and people." },
          { title: "Growth without limits", text: "From Lean Six Sigma to AI, ESG, and Industry 4.0, you'll get structured opportunities to deepen your expertise and expand your horizons across disciplines." },
          { title: "Extended family, not just colleagues", text: "We operate as one team. You'll be empowered, supported, and trusted-with ownership to experiment, innovate, and deliver results that truly matter." },
          { title: "Tech + human-centric approach", text: "Shape the future using advanced digital tools and analytics, while keeping the human insight and empathy that make change real and sustainable." },
          { title: "Sustainable value creation", text: "Every project is designed to create lasting value-for our clients, their stakeholders, and society. Your work contributes to outcomes that endure." },
        ],
      },
      {
        eyebrow: "Life at [Your Firm Name]",
        title: "A place to grow fast, do real work, and stay grounded.",
        body: ["Life here is built around three things: meaningful client impact, deep learning, and teams that genuinely have your back.", "Purpose driven", "High pace", "Learning first", "Global collaboration", "Ownership"],
        items: [
          { title: "Purpose-driven culture", text: "Everything we do is anchored in client success and meaningful impact. You'll see the effect of your work in real business outcomes, not just in slide decks." },
          { title: "Agility in action", text: "You'll thrive in a fast-paced environment where change is treated as opportunity, not obstacle - with teams that move quickly and decide clearly." },
          { title: "Learning & growth built-in", text: "Structured career paths, mentorship, and continuous development programs keep you future-ready - from foundational consulting skills to advanced digital, Lean, and leadership capabilities. Think curated learning journeys, not random trainings - designed so every project stretches you just enough." },
          { title: "Collaboration beyond borders", text: "Work with global talent pools, industry leaders, and ecosystem partners - across regions, sectors, and disciplines." },
          { title: "Ownership from day one", text: "We reward initiative, innovation, and accountability. You'll get real responsibility early, with the support to turn good ideas into visible outcomes." },
        ],
      },
      {
        title: "Our values in action",
        body: ["What we stand for when we show up to work.", "These are the principles that shape how we think, decide, and deliver - with clients, with each other, and in the way we grow the firm."],
        items: [
          { title: "Purpose", text: "Anchor every decision in long-term impact - for our clients, their stakeholders, and the communities we serve." },
          { title: "Agility", text: "Adapt fast, act smart. We test, learn, and move quickly without losing discipline or clarity." },
          { title: "Collaboration", text: "Harness collective intelligence - across teams, clients, and partners - to solve problems that matter." },
          { title: "Trust", text: "Deliver with integrity, transparency, and follow-through so people can rely on what we say and do." },
          { title: "Excellence", text: "Always go the extra mile - in the quality of our thinking, our execution, and the experience we create." },
        ],
      },
      {
        eyebrow: "Career pathways",
        title: "Where you can grow with us",
        body: ["We're always looking for problem-solvers, innovators, and leaders who want to build real capability - and deliver outcomes that last.", "Impact", "Learning", "Ownership", "Client-side"],
        items: [
          { title: "Growth & Strategy Consulting", text: "Shape strategic direction, operating models, and execution roadmaps with measurable outcomes. Strategy • TOM • Governance" },
          { title: "Tech-Enabled Transformation", text: "Enable digital transformation through data, automation, AI, and modern platforms - grounded in execution. Digital • Analytics • AI" },
          { title: "ESG & Sustainability", text: "Build resilient, responsible organisations through ESG strategy, reporting, and sustainability programs. ESG • Reporting • Value" },
          { title: "Operational Excellence", text: "Drive productivity, quality, and speed using Lean, continuous improvement, and Industry 4.0 thinking. Lean • CI • Performance" },
          { title: "Business Process Advisory", text: "Design better processes, shared services, and governance - building systems that scale. Shared Services • BPM • KPIs" },
          { title: "Open Roles Across Functions", text: "We also hire across research, delivery, program management, and capability building. PMO • Delivery • Enablement" },
        ],
      },
      {
        title: "Your journey with us",
        body: ["From day one, you're part of the real work.", "From Day 1, you'll be on live projects, mentored by global experts, and equipped with tools that connect strategy to execution - so you see the impact of your work in real outcomes, not just presentations.", "Ready to create something extraordinary?", "Join us to transform strategy into results that last.", "No perfect CV? If you're curious, driven, and collaborative, we still want to hear from you."],
        ctas: [
          { label: "Apply now ->", href: "/contact-us" },
          { label: "View role pathways", href: "#opportunities" },
        ],
      },
    ],
  },
};

export const growthTransformation: PageContent = {
  name: "Growth & Transformation",
  currentUrl: "https://mediumpurple-ant-531485.hostingersite.com/growth-transformation/",
  route: "/growth-transformation",
  title: "Growth & Transformation",
  description: "From scattered initiatives to a single growth & transformation spine",
  hero: {
    eyebrow: "Growth & Transformation",
    title: "From scattered initiatives to a single growth & transformation spine",
    body: ["We help organisations move from disconnected projects and firefighting to an integrated growth and transformation system-where strategy, operating model, sales performance, and execution discipline reinforce each other.", "A pragmatic, execution-first backbone", "Strategy • Operating Model • Sales • Execution"],
    image: "/assets/banner-new.jpg",
  },
  sections: [
    {
      eyebrow: "Signals we see",
      title: "Common growth & execution constraints",
      items: [
        { title: "Strategic & Growth", meta: "Direction without clarity", text: "Fragmented strategy and unclear growth priorities. Declining profitability despite increasing revenues." },
        { title: "Operating Model & Culture", meta: "Systems that don't scale", text: "Siloed functions and absence of a unified operating model. Difficulty scaling culture, talent, and governance with growth. Leadership bandwidth stretched between daily operations and long-term goals." },
        { title: "Sales, Data & Technology", meta: "Performance without visibility", text: "Inconsistent sales productivity and channel performance. Lack of data-driven decision-making and performance visibility. Under-leveraged technology investments with limited ROI." },
      ],
    },
    {
      title: "Integrated growth & transformation backbone",
      body: ["From current reality", "To sustained outcomes", "What we enable"],
      items: [
        { title: "Direction & Design", meta: "Clear direction, scalable model", text: "Refine strategic direction & business purpose and link it to measurable outcomes. Design scalable operating models and governance frameworks. Align leadership around a single growth and transformation agenda." },
        { title: "Growth & Productivity", meta: "Commercial momentum", text: "Achieve 3X sales growth through data-driven distribution transformation. Improve EBITDA by 5-10% via cost and margin optimization. Drive double-digit productivity gains through lean and digital integration." },
        { title: "Execution & Future Readiness", meta: "Execution discipline & agility", text: "Strengthen leadership alignment and execution discipline through SPMO setup. Build customer-centric, agile structures that respond faster to market shifts. Institutionalise a repeatable growth & transformation way-of-working." },
      ],
    },
    {
      title: "Typical impact unlocked",
      items: [
        { title: "3X sales growth" },
        { title: "5-10% EBITDA improvement" },
        { title: "Double-digit productivity gains" },
        { title: "Leadership & SPMO discipline" },
      ],
    },
    {
      title: "Growth & Transformation Impact with Real Clients",
      body: ["A cross-section of programs we've led across insurance, manufacturing, healthcare, and digital-first businesses. Every engagement translated strategy into measurable growth, productivity, and value creation."],
      ctas: [{ label: "Talk about a similar outcome ->", href: "/contact-us" }],
      items: [
        { title: "Fortune 500 Insurance · Sales Transformation", meta: "3X growth in new business premium across multi-channel network", text: "Redesigned sales vision, channel productivity model, and frontline cadence for a global insurer across tied agency, banca, broker, and digital. Embedded scorecards, governance, and coaching rhythms to lock in performance. 3X growth in new business premium · Higher retention Click to explore how a similar sales engine could be built for your business." },
        { title: "PE-backed Manufacturing · EBITDA Program", meta: "Lean-driven cost and capacity unlock across 10+ plants", text: "Designed an EBITDA Improvement Program for a PE portfolio company, combining lean diagnostics, throughput enhancement, and procurement savings. Built plant-level dashboards for sustained ownership. +15% EBITDA margin within 12 months See how we structure value-creation programs for PE investors and portfolio CXOs." },
        { title: "Healthcare Network · Strategy to Execution", meta: "Shared scorecards and governance for a leading Indian healthcare provider", text: "Clarified business priorities, created hospital-level P&L scorecards, and set up a data-led leadership governance rhythm to align medical, operations, and business teams around common outcomes. +30% profitability at flagship hospital · scalable playbook for new locations Explore how similar governance design can help your network scale without losing control." },
        { title: "Indian Electricals Major · Six Sigma for Growth", meta: "De-bottlenecked sales funnel and channel productivity uplift", text: "Applied Six Sigma for Growth to map funnel leakages and cycle-time issues across regions. Rewired processes, roles, and reporting for key accounts and distributor channels. +22% sales productivity · stronger channel engagement Click to discuss how data-led sales design can unlock growth in your markets." },
        { title: "Regional Financial Services · Target Operating Model", meta: "New operating model for growth in Levant financial services group", text: "Integrated market expansion, digital enablement, and workforce redesign into a single Target Operating Model and implementation roadmap for a regional FS player. +20% margin improvement · higher agility across business units Explore what a pragmatic Target Operating Model could look like for your organisation." },
        { title: "Global Industrial Conglomerate · Org Redesign", meta: "Vision cascade and governance re-architecture across a global portfolio", text: "Helped a Fortune 100 conglomerate refresh its strategic vision, then redesigned structures, role charters, and governance forums to align group, business units, and functions. Faster decision-making · clearer accountability for growth Click to see how we think about organisation design beyond org charts." },
        { title: "Diversified Business Group · CEO Transformation Office", meta: "CEO-led transformation office for 20+ strategic initiatives", text: "Set up a Transformation & PMO Office with clear charters, initiative templates, and KPI dashboards. Enabled CXO-level visibility and rhythm to unblock critical projects. Improved delivery speed · direct line-of-sight to value realization Explore whether a light-touch Transformation Office could work for your context." },
        { title: "Digital Health Insurtech · Design Thinking", meta: "New digital-first health product from concept to metro-scale launch", text: "Used Design Thinking and journey mapping to shape product, onboarding experience, and digital workflows. Designed GTM strategy, growth KPIs, and experimentation rhythm. 60% faster launch · rapid customer acquisition in metros Click to explore how we blend design and growth thinking for digital businesses." },
      ],
    },
    {
      eyebrow: "Our Operating Philosophy",
      title: "How We Drive Transformation",
      body: ["Transformation is not a program, a framework, or a set of initiatives.", "It is the disciplined conversion of strategic intent into measurable outcomes - across decisions, behaviors, and results."],
      items: [
        { title: "Clarity before action", text: "We force choices, define trade-offs, and align leaders around what truly matters." },
        { title: "Strategy that can be executed", text: "We turn intent into roadmaps, ownership, and execution cadence." },
        { title: "Data-led, people-anchored", text: "Data removes noise; people deliver outcomes." },
        { title: "Relentless focus on value", text: "Every initiative is tied to measurable business impact." },
        { title: "Capability transfer, not dependency", text: "We build execution muscle that lasts beyond the engagement." },
      ],
    },
    {
      eyebrow: "Engagement Triggers",
      title: "Where Leaders Typically Call Us In",
      body: ["Leaders rarely call us when things are broken.", "They call us when progress has slowed, complexity has increased, and the next phase demands sharper focus and execution."],
      items: [
        { title: "Growth has plateaued", text: "Teams are active and committed, yet growth or margins are no longer moving in line with ambition." },
        { title: "Strategy isn't translating into results", text: "Direction is clear at the top, but execution loses momentum across layers." },
        { title: "The operating model is holding growth back", text: "Structures and decision rights that once worked now create friction and delay." },
        { title: "Data exists, clarity doesn't", text: "Dashboards are everywhere, yet leadership discussions remain subjective." },
        { title: "Transformation is underway, but impact is unclear", text: "Programs are active, but leaders want confidence in value realization." },
        { title: "A step-change is required", text: "Entering new markets, integrating acquisitions, or resetting performance requires sharper alignment and faster execution." },
      ],
      ctas: [{ label: "Start a focused conversation ->", href: "/contact-us" }],
    },
  ],
};

export const pharmaceuticalSector: PageContent = {
  name: "Pharmaceutical Sector",
  currentUrl: "https://mediumpurple-ant-531485.hostingersite.com/pharmaceutical-sector/",
  route: "/pharmaceutical-sector",
  title: "Pharmaceutical Sector - Industry Solutions & Transformation Services",
  description: "Transforming Pharma Through Strategy, Digital, and Operational Excellence",
  hero: {
    eyebrow: "Pharmaceutical Sector - Industry Solutions & Transformation Services",
    title: "Transforming Pharma Through Strategy, Digital, and Operational Excellence",
    body: [
      "The pharmaceutical industry is navigating unprecedented disruption-volatile demand, tightening regulatory environments, supply chain vulnerabilities, rising R&D costs, and the constant pressure to innovate while maintaining quality and compliance.",
      "At [Your Firm Name], we partner with pharmaceutical companies to convert complexity into clarity and strategy into measurable outcomes. Our integrated approach-spanning strategy, operations, digital, ESG, and capability building-helps pharma organisations accelerate growth, build resilient operations, and deliver world-class quality.",
      "Pharma Overview Context Key Challenges How We Help Why Us",
    ],
    image: "/assets/city-consulting.jpg",
  },
  sections: [
    {
      eyebrow: "Pharma Sector",
      title: "Key Challenges",
      body: ["The challenges facing pharmaceutical organisations are interconnected - spanning growth, operational performance, compliance rigor, digital enablement, and sustainability expectations."],
      items: [
        { title: "Growth & Market Pressure", bullets: ["Increasing competition from generics and biosimilars", "Pricing pressure from regulators and global buyers", "Long development cycles delaying revenue realization", "Limited visibility into growth opportunities"] },
        { title: "Operational & Cost Inefficiencies", bullets: ["Fragmented processes across plants, QC labs, R&D, SCM", "High cycle times due to manual interventions", "Inefficient batch release processes", "Expensive deviations, reworks, and quality failures"] },
        { title: "Regulatory, Quality & Compliance Complexity", bullets: ["Evolving global standards (US FDA, EMA, MHRA, WHO)", "Rising scrutiny toward data integrity and documentation", "High cost of non-compliance and repeat CAPAs"] },
        { title: "Digital & Technology Gaps", bullets: ["Low automation across QC, QA, manufacturing & supply chain", "Lack of interconnected systems (ERP, LIMS, MES, QMS)", "Inefficient reporting & analytics for decision-making"] },
        { title: "Sustainability & ESG Expectations", bullets: ["Pressure to reduce waste, emissions, and energy intensity", "ESG disclosures & compliance becoming mandatory", "Limited frameworks for ESG measurement & reporting"] },
      ],
    },
    {
      eyebrow: "Pharmaceutical Sector",
      title: "How We Help the Pharmaceutical Sector",
      body: ["Our Services"],
      items: [
        { title: "Growth & Strategy", text: "Future-ready enterprise ›" },
        { title: "Shared Services & GCC Excellence", text: "Scalable operations ›" },
        { title: "Tech-Enabled Transformation", text: "Digitise value chain ›" },
        { title: "ESG & Sustainable Value Creation", text: "Sustainable manufacturing ›" },
        { title: "Business Process & Operational Excellence", text: "Lean & stable systems ›" },
      ],
    },
    {
      eyebrow: "Why Partner With Us",
      title: "Why Pharma Firms Work With Us",
      body: ["A boardroom-grade approach built for regulated environments - designed to translate strategy into outcomes across quality, compliance, cost, and speed."],
      items: [
        { title: "Strategy + Execution Under One Roof", text: "We transform boardroom strategy into frontline results." },
        { title: "Deep Understanding of Regulated Environments", text: "Audit-readiness, data integrity, and GxP-first design." },
        { title: "Tech-First, Human-Centric Approach", text: "Digitisation that simplifies work - not complicates it." },
        { title: "Proven Methodologies", text: "Lean, Industry 4.0, Agile, ESG, TOM, and transformation frameworks." },
      ],
      ctas: [
        { label: "Talk to us ->", href: "/contact-us" },
        { label: "View services", href: "/services" },
      ],
    },
    {
      title: "How we work",
      body: ["From intent -> execution -> measurable outcomes"],
      items: [
        { title: "Align strategy to regulated execution", meta: "Boardroom -> Plant", text: "Clear priorities, governance, and owners - designed to survive audits and operational reality." },
        { title: "Simplify processes, then digitise", meta: "Lean + Digital", text: "Digital enablement that improves flow, reduces errors, and strengthens traceability." },
        { title: "Build capability to sustain change", meta: "Scale-ready", text: "Operating rhythm, skills, and playbooks - so performance holds after the engagement." },
        { title: "High ROI & Measurable Outcomes:", text: "Every engagement focuses on improving growth, cost, quality, or compliance." },
      ],
    },
    {
      eyebrow: "Next steps",
      title: "Let's Build the Next-Generation Pharma Enterprise",
      body: ["From strategy and shared services to digital transformation, ESG, and operational excellence, our team brings multi-disciplinary depth tailored specifically for the pharmaceutical industry.", "Strategy • Ops • Digital • ESG"],
      ctas: [
        { label: "Talk to us", href: "/contact-us" },
        { label: "Request a consultation ->", href: "/contact-us" },
      ],
    },
  ],
};

export const contactPage: PageContent = {
  name: "Contact Us",
  currentUrl: "https://mediumpurple-ant-531485.hostingersite.com/contact-us/",
  route: "/contact-us",
  title: "Contact Us",
  description: "Contact Arete Partners",
  hero: {
    eyebrow: "Contact Us",
    title: "Contact Us",
    body: [site.email, site.phone],
    image: "/assets/purple-wave.jpeg",
  },
  sections: [
    {
      title: "Start a focused conversation",
      body: [site.email, site.phone],
    },
  ],
};

export const industriesPage: PageContent = {
  name: "Industries",
  currentUrl: "https://mediumpurple-ant-531485.hostingersite.com/industries/",
  route: "/industries",
  title: "Industries",
  description: "Explore transformation playbooks by sector",
  hero: {
    eyebrow: "Industries",
    title: "Explore transformation playbooks by sector",
    body: ["Practical, system-level work across strategy, operating models, digital enablement, capability building, and measurable outcomes.", "Strategy", "Operating Model", "Digital", "ESG", "OpEx"],
    image: "/assets/banner-new.jpg",
  },
  sections: [
    {
      title: "Industry Pages",
      body: ["Choose a sector to explore solutions"],
      items: [
        { title: "Pharmaceutical", text: "Quality, compliance, throughput, cost and reliability." },
        { title: "Manufacturing", text: "Lean systems, productivity, stable operations at scale." },
        { title: "Healthcare", text: "Patient experience, capacity, and operational resilience." },
        { title: "Insurance", text: "Claims speed, trust, cost discipline, digital enablement." },
        { title: "Aerospace & Defence", text: "High-stakes delivery with quality and traceability." },
        { title: "Automotive", text: "EV shift, supply volatility, productivity, speed." },
        { title: "Global Capability Centers", text: "Value platforms, governance, productivity at scale." },
        { title: "Education", text: "Future-ready workforce, capability and ecosystem impact." },
      ],
      ctas: [{ label: "Request consultation ->", href: "/contact-us" }],
    },
  ],
};

export const allPages = [
  pages.home,
  pages.about,
  pages.services,
  growthTransformation,
  pharmaceuticalSector,
  industriesPage,
  pages.career,
  contactPage,
];

export const redirects = [
  { source: "/contact/", destination: "/contact-us", permanent: true },
  { source: "/blog", destination: "/insights", permanent: true },
  { source: "/blog/", destination: "/insights", permanent: true },
  { source: "/services/growth-strategy/", destination: "/growth-transformation", permanent: true },
  { source: "/services/shared-services-gcc/", destination: "/service-delivery", permanent: true },
  { source: "/services/tech-enabled-transformation/", destination: "/corporate-function", permanent: true },
  { source: "/services/esg-value-creation/", destination: "/services", permanent: true },
  { source: "/services/business-process-operational-excellence/", destination: "/operational-excellence", permanent: true },
  { source: "/industries/pharmaceutical-sector/", destination: "/pharmaceutical-sector", permanent: true },
];
