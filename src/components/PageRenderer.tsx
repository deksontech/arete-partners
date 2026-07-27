import Image from "next/image";
import Link from "next/link";

type LockedPage = {
  name: string;
  route: string;
  currentUrl: string;
  title: string;
  description: string;
  image: string;
  lines: readonly string[];
  contentLines?: readonly string[];
};

const ctaWords = /contact|learn|explore|talk|view|read more|apply|request|start|discuss|watch/i;
const statWords = /^(\d|\d|500|200|20|3|4|\+|~)/;

function classify(line: string, index: number) {
  if (index === 0) return "eyebrow";
  if (index === 1) return "title";
  if (ctaWords.test(line) && line.length < 56) return "cta";
  if (statWords.test(line) && line.length < 48) return "stat";
  if (line.length < 42) return "label";
  return "body";
}

function Chunk({ lines, index }: { lines: readonly string[]; index: number }) {
  return (
    <section className={`baseline-section ${index % 2 ? "baseline-section-soft" : ""}`}>
      <div className="container baseline-grid">
        <div className="baseline-section-head">
          <p className="baseline-kicker">{String(index + 1).padStart(2, "0")}</p>
          <h2>{lines[0]}</h2>
        </div>
        <div className="baseline-card-grid">
          {lines.slice(1).map((line, lineIndex) => {
            const kind = classify(line, lineIndex + 1);
            if (kind === "cta") {
              return (
                <Link className="baseline-cta" href={line.toLowerCase().includes("contact") || line.toLowerCase().includes("talk") ? "/contact-us" : "#"} key={`${line}-${lineIndex}`}>
                  {line}
                </Link>
              );
            }
            return (
              <article className={`baseline-card baseline-card-${kind}`} key={`${line}-${lineIndex}`}>
                {kind === "label" || kind === "stat" ? <h3>{line}</h3> : <p>{line}</p>}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function PageRenderer({ page }: { page: LockedPage }) {
  const pageLines = page.contentLines ?? page.lines;
  const heroLines = pageLines.slice(0, 6);
  const bodyLines = pageLines.slice(6);
  const chunks: string[][] = [];
  let current: string[] = [];

  bodyLines.forEach((line) => {
    const startsNew = line.length < 54 && current.length > 5;
    if (startsNew) {
      chunks.push(current);
      current = [line];
    } else {
      current.push(line);
    }
  });
  if (current.length) chunks.push(current);

  return (
    <>
      <section className="baseline-hero">
        <div className="baseline-hero-media">
          {page.name === "Home" ? (
            <video aria-hidden="true" autoPlay muted loop playsInline poster="/assets/purple-wave.jpeg">
              <source src="/assets/hero-motion.mp4" type="video/mp4" />
            </video>
          ) : (
            <Image alt="" fill priority sizes="100vw" src={page.image || "/assets/banner-new.jpg"} />
          )}
        </div>
        <div className="baseline-hero-overlay" />
        <div className="container baseline-hero-inner">
          <div className="baseline-hero-copy">
            {heroLines.map((line, index) => {
              const kind = classify(line, index);
              if (kind === "eyebrow") return <p className="hero-eyebrow" key={line}>{line}</p>;
              if (kind === "title") return <h1 key={line}>{line}</h1>;
              if (kind === "cta") {
                return (
                  <Link className="button" href={line.toLowerCase().includes("contact") || line.toLowerCase().includes("talk") ? "/contact-us" : "#"} key={line}>
                    {line}
                  </Link>
                );
              }
              return <p key={`${line}-${index}`}>{line}</p>;
            })}
          </div>
          {page.name === "Home" ? (
            <div className="baseline-hero-logo">
              <Image alt="Arete Partners" height={205} src="/assets/arete-partners-logo.png" width={360} />
            </div>
          ) : null}
        </div>
      </section>

      {page.name === "Home" ? (
        <section className="baseline-image-section">
          <div className="container baseline-image-grid">
            <Image alt="Who We Are" height={428} src="/assets/who-we-are.png" width={593} />
          </div>
        </section>
      ) : null}

      {chunks.map((chunk, index) => (
        <Chunk index={index} key={`${page.name}-${index}`} lines={chunk} />
      ))}
    </>
  );
}
