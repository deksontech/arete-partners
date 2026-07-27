import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insights",
  description: "Insights, perspectives, publications, news, and updates from Arete Partners.",
  alternates: { canonical: "/insights" },
};

const latestInsights = [
  {
    category: "Transformation Insights",
    title: "The System of Work",
    excerpt:
      "Strategy does not fail only at the planning stage. It often breaks down when decisions, governance, processes, and execution rhythms are not connected across the enterprise.",
    image: "/assets/city-consulting.jpg",
  },
  {
    category: "Newsletter",
    title: "India Transformation Insights - July 2026",
    excerpt:
      "A concise view of operating priorities, growth pressures, and execution themes shaping leadership agendas across Indian and global markets.",
    image: "/assets/banner-new.jpg",
  },
  {
    category: "Early Impressions",
    title: "Model built or bought, the risk is still yours",
    excerpt:
      "Technology can accelerate transformation, but leaders remain accountable for governance, adoption, controls, and measurable outcomes.",
    image: "/assets/purple-wave.jpeg",
  },
];

const publications = [
  {
    category: "Regulatory Perspective",
    title: "IFRS 20 Regulatory Assets and Regulatory Liabilities",
    excerpt:
      "A practical perspective on regulatory assets, liabilities, controls, reporting expectations, and implementation readiness.",
    image: "/assets/banner-new.jpg",
  },
  {
    category: "Point of View",
    title: "Practical considerations for telecommunications companies across fixed asset management",
    excerpt:
      "A view on asset governance, operating discipline, technology enablement, and better visibility across complex infrastructure portfolios.",
    image: "/assets/city-consulting.jpg",
  },
  {
    category: "Point of View",
    title: "Being Resilient Amidst Business Disruption",
    excerpt:
      "How leaders can improve resilience through sharper operating models, faster decision loops, and stronger execution systems.",
    image: "/assets/who-we-are.png",
  },
];

const newsletters = [
  {
    title: "Sustainability & Climate Pulse - July 2026",
    excerpt:
      "A leadership update on sustainability, climate action, and operating implications for organisations building long-term resilience.",
    image: "/assets/city-consulting.jpg",
  },
  {
    title: "Sustainability & Climate Pulse - June 2026",
    excerpt:
      "A focused review of climate priorities, transition choices, and governance questions facing leadership teams.",
    image: "/assets/who-we-are.png",
  },
  {
    title: "FRM Regulatory Pulse - May 2026",
    excerpt:
      "A concise update on risk, reporting, regulatory change, and management attention areas.",
    image: "/assets/banner-new.jpg",
  },
];

const newsItems = [
  "Transformation programs make leadership teams work longer and harder for ROI wins",
  "Arete Partners expands transformation and operating excellence practice",
  "When code makes decisions",
];

const areteNews = [
  { date: "June 3, 2026", title: "India's Power Demand Hits Record High Amid Rising Climate Risk" },
  { date: "May 30, 2026", title: "Technology, cloud and data infrastructure dominate leadership priorities" },
  { date: "May 15, 2026", title: "Startup Funding Exits Evolve as Investors Demand Profitability Discipline" },
];

const leaders = [
  { name: "Nirav Patel", role: "Partner, Accounting & Reporting Consulting | Mumbai, India" },
  { name: "Shabara Hakim", role: "Partner, Clients & Markets | Mumbai, India" },
  { name: "Dimple Mehrotra", role: "Associate Partner, Enabling Functions | Gurugram, India" },
  { name: "Mohit Banga", role: "Chief Financial Officer | Bengaluru, India" },
  { name: "Stefania DeMarco", role: "Managing Director, Clients & Markets | New York, USA" },
  { name: "Tanya Tandon", role: "Director, Clients & Markets | Gurugram, India" },
];

function ArticleCard({
  article,
  large = false,
}: {
  article: { category: string; title: string; excerpt: string; image: string };
  large?: boolean;
}) {
  return (
    <article className={`insight-card${large ? " insight-card--large" : ""}`}>
      <div className="insight-card__media">
        <Image alt="" fill sizes="(max-width: 768px) 100vw, 360px" src={article.image} />
      </div>
      <p className="insight-card__category">{article.category}</p>
      <h3>{article.title}</h3>
      <p>{article.excerpt}</p>
      <Link href="#" aria-label={`Read more: ${article.title}`}>
        Read More ++
      </Link>
    </article>
  );
}

export default function InsightsPage() {
  return (
    <div className="insights-page">
      <section className="insights-hero">
        <h1>Insights</h1>
        <p>
          Stay informed with the latest trends, ideas, and perspectives from our experts. Explore news, blogs, and
          in-depth articles curated to keep you ahead.
        </p>
        <div className="insights-filters" aria-label="Insight filters">
          <select aria-label="Service Line" defaultValue="Service Line">
            <option>Service Line</option>
          </select>
          <select aria-label="All" defaultValue="All">
            <option>All</option>
          </select>
        </div>
      </section>

      <main className="insights-main">
        <section className="insights-section insights-latest">
          <h2>Latest Insights</h2>
          <div className="latest-feature">
            <div>
              <p className="insight-card__category">{latestInsights[0].category}</p>
              <h3>{latestInsights[0].title}</h3>
              <p>{latestInsights[0].excerpt}</p>
              <Link href="#">Read More ++</Link>
            </div>
            <div className="latest-feature__media">
              <Image alt="" fill priority sizes="380px" src={latestInsights[0].image} />
            </div>
          </div>

          <div className="latest-grid">
            {latestInsights.slice(1).map((article) => (
              <ArticleCard article={article} key={article.title} />
            ))}
            <aside className="insights-news-card">
              <h3>In the News</h3>
              {newsItems.map((item, index) => (
                <Link href="#" key={item}>
                  <span>{item}</span>
                  <small>{index === 0 ? "03 July, 2026" : index === 1 ? "02 July, 2026" : "28 June, 2026"}</small>
                </Link>
              ))}
            </aside>
          </div>
        </section>

        <section className="insights-section">
          <div className="insights-section__head">
            <h2>Publications</h2>
            <Link href="#">View All ++</Link>
          </div>
          <div className="insights-card-grid">
            {publications.map((article) => (
              <ArticleCard article={article} key={article.title} />
            ))}
          </div>
        </section>

        <section className="insights-section insights-news-list">
          <div className="insights-section__head">
            <h2>Arete in News</h2>
            <Link href="#">View All ++</Link>
          </div>
          <div>
            {areteNews.map((item) => (
              <Link href="#" key={item.title}>
                <small>{item.date}</small>
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="insights-section">
          <div className="insights-section__head">
            <h2>Our Monthly Newsletter</h2>
            <Link href="#">View All ++</Link>
          </div>
          <div className="insights-card-grid">
            {newsletters.map((article) => (
              <ArticleCard
                article={{ category: "Newsletter", title: article.title, excerpt: article.excerpt, image: article.image }}
                key={article.title}
              />
            ))}
          </div>
        </section>
      </main>

      <section className="insights-leaders">
        <div className="insights-leaders__inner">
          <h2>Our Leaders</h2>
          <div className="leaders-grid">
            {leaders.map((leader) => (
              <article className="leader-tile" key={leader.name}>
                <div className="leader-tile__portrait" aria-hidden="true">
                  {leader.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <h3>{leader.name}</h3>
                <p>{leader.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
