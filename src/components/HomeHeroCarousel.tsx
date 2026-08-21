"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type HeroSlide = {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  variant?: "system";
  primaryCtaHref: string;
  primaryCtaLabel: string;
  secondaryCtaHref: string;
  secondaryCtaLabel: string;
};

const systemPillars = [
  {
    icon: "target",
    title: "One",
    text: "execution philosophy.",
  },
  {
    icon: "puzzle",
    title: "Five",
    text: "strategic capabilities.",
  },
  {
    icon: "chart",
    title: "One",
    text: "measurable outcome.",
  },
];

const systemCapabilities = [
  {
    icon: "knight",
    title: "Growth & Strategy",
    text: "Define where to play, how to win, and how to grow profitably.",
  },
  {
    icon: "people",
    title: "Shared Services & GCC",
    text: "Build global capability centers that scale performance and value.",
  },
  {
    icon: "chip",
    title: "Tech-Enabled Transformation",
    text: "Leverage technology, automation and data to drive measurable outcomes.",
  },
  {
    icon: "leaf",
    title: "ESG & Value Creation",
    text: "Embed sustainability into strategy and operations to create lasting value.",
  },
  {
    icon: "gear",
    title: "Business Process & Industry 4.0",
    text: "Stabilize operations, integrate Industry 4.0 and drive continuous improvement.",
  },
];

const slides: HeroSlide[] = [
  {
    eyebrow: "THE ARETE EXECUTION SYSTEM\u2122",
    title: "Transforming strategy into results that last",
    body: "Every organization has ambition. Every organization has strategy. Few consistently convert either into measurable business outcomes. The Arete Execution System\u2122 aligns strategy, operations, technology, governance, people, and performance into one integrated execution model\u2014transforming ambition into measurable business outcomes that drive profitable growth, operational excellence, and sustainable competitive advantage.",
    image: "/assets/purple-wave.jpeg",
    primaryCtaHref: "/contact-us",
    primaryCtaLabel: "Book an Executive Discussion",
    secondaryCtaHref: "/services",
    secondaryCtaLabel: "Explore Our Capabilities",
  },
  {
    eyebrow: "POWERED BY THE ARETE EXECUTION SYSTEM\u2122",
    title: "One execution philosophy. Five strategic capabilities. One measurable outcome.",
    body: "Business performance that lasts.",
    image: "/assets/city-consulting.jpg",
    variant: "system",
    primaryCtaHref: "/contact-us",
    primaryCtaLabel: "Book an Executive Discussion",
    secondaryCtaHref: "/services",
    secondaryCtaLabel: "Explore Our Capabilities",
  },
  {
    eyebrow: "ENTERPRISE GROWTH & STRATEGY",
    title: "We turn strategy into measurable growth, not intent.",
    body: "For leadership teams where ambition outpaces execution, we eliminate strategic noise, align enterprise priorities, and transform strategy into disciplined execution. Powered by The Arete Execution System\u2122, we help organizations convert strategic ambition into measurable, profitable growth and lasting competitive advantage.",
    image: "/assets/city-consulting.jpg",
    primaryCtaHref: "/contact-us",
    primaryCtaLabel: "Accelerate Growth",
    secondaryCtaHref: "/growth-transformation",
    secondaryCtaLabel: "Explore Growth & Strategy",
  },
  {
    eyebrow: "SHARED SERVICES & GLOBAL CAPABILITY CENTERS",
    title: "We build GCCs that create enterprise value.",
    body: "Beyond cost arbitrage, modern Global Capability Centers accelerate innovation, strengthen enterprise capability, and drive long-term business performance. Powered by The Arete Execution System\u2122, we help organizations design, establish, scale, and optimize GCCs through operating model excellence, governance, intelligent automation, AI-enabled operations, and measurable performance systems.",
    image: "/assets/banner-new.jpg",
    primaryCtaHref: "/contact-us",
    primaryCtaLabel: "Build Your GCC Strategy",
    secondaryCtaHref: "/global-capability-centers",
    secondaryCtaLabel: "Explore GCC Solutions",
  },
  {
    eyebrow: "DIGITAL \u2022 AI \u2022 AUTOMATION",
    title: "We make technology accountable for business outcomes.",
    body: "Technology creates value only when execution scales it. Powered by The Arete Execution System\u2122, we integrate AI, intelligent automation, data, digital platforms, and governance into enterprise operating models\u2014ensuring every technology investment delivers measurable operational performance, financial impact, and sustainable competitive advantage.",
    image: "/assets/purple-wave.jpeg",
    primaryCtaHref: "/contact-us",
    primaryCtaLabel: "Accelerate Digital Transformation",
    secondaryCtaHref: "/services",
    secondaryCtaLabel: "Explore Digital Solutions",
  },
  {
    eyebrow: "ESG & ENTERPRISE VALUE",
    title: "We turn sustainability into enterprise value.",
    body: "Sustainability creates value only when it becomes operational. Powered by The Arete Execution System\u2122, we embed ESG into strategy, governance, operations, and performance management\u2014helping organizations strengthen resilience, accelerate sustainable growth, enhance stakeholder confidence, and create long-term enterprise value.",
    image: "/assets/city-consulting.jpg",
    primaryCtaHref: "/contact-us",
    primaryCtaLabel: "Accelerate ESG Value",
    secondaryCtaHref: "/services",
    secondaryCtaLabel: "Explore Our ESG Approach",
  },
  {
    eyebrow: "BUSINESS PROCESS EXCELLENCE & INDUSTRY 4.0",
    title: "Operational excellence is the foundation of digital excellence.",
    body: "Technology cannot fix unstable processes. Powered by The Arete Execution System\u2122, we eliminate waste, simplify complexity, stabilize operations, and integrate Lean, Industry 4.0, automation, analytics, and performance management to build intelligent, connected, and high-performing enterprises that deliver measurable business outcomes.",
    image: "/assets/banner-new.jpg",
    primaryCtaHref: "/contact-us",
    primaryCtaLabel: "Transform Operations",
    secondaryCtaHref: "/process-advisory",
    secondaryCtaLabel: "Explore Process Excellence",
  },
];

export function HomeHeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const timer = window.setTimeout(
      () => setActiveIndex((current) => (current + 1) % slides.length),
      activeIndex === 0 ? 7600 : 4600,
    );

    return () => window.clearTimeout(timer);
  }, [activeIndex]);

  const showPrevious = () => {
    setActiveIndex((current) => (current === 0 ? slides.length - 1 : current - 1));
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  const renderIcon = (icon: string) => {
    switch (icon) {
      case "target":
        return (
          <svg aria-hidden="true" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="16" />
            <circle cx="24" cy="24" r="6" />
            <path d="M24 3v10M24 35v10M3 24h10M35 24h10" />
          </svg>
        );
      case "puzzle":
        return (
          <svg aria-hidden="true" viewBox="0 0 48 48">
            <path d="M18 7h12v9h4a5 5 0 1 1 0 10h-4v15H18V30h-5a5 5 0 1 1 0-10h5V7Z" />
          </svg>
        );
      case "chart":
        return (
          <svg aria-hidden="true" viewBox="0 0 48 48">
            <path d="M8 40h32M13 34V22M24 34V14M35 34V8" />
            <path d="M11 20l11-9 8 6 9-11" />
          </svg>
        );
      case "knight":
        return (
          <svg aria-hidden="true" viewBox="0 0 48 48">
            <path d="M19 8c9 3 12 9 10 18l6 8v6H13v-6l6-7c-4-7-1-14 0-19Z" />
            <path d="M18 16h8M17 40h20" />
          </svg>
        );
      case "people":
        return (
          <svg aria-hidden="true" viewBox="0 0 48 48">
            <circle cx="24" cy="16" r="7" />
            <circle cx="11" cy="21" r="5" />
            <circle cx="37" cy="21" r="5" />
            <path d="M10 39c2-8 8-12 14-12s12 4 14 12M3 38c1-6 5-9 10-9M35 29c5 0 9 3 10 9" />
          </svg>
        );
      case "chip":
        return (
          <svg aria-hidden="true" viewBox="0 0 48 48">
            <rect x="14" y="14" width="20" height="20" rx="3" />
            <path d="M20 4v8M28 4v8M20 36v8M28 36v8M4 20h8M4 28h8M36 20h8M36 28h8" />
            <circle cx="24" cy="24" r="4" />
          </svg>
        );
      case "leaf":
        return (
          <svg aria-hidden="true" viewBox="0 0 48 48">
            <path d="M40 8C22 9 12 19 12 34c16 2 27-8 28-26Z" />
            <path d="M12 34c8-10 15-15 28-26" />
          </svg>
        );
      default:
        return (
          <svg aria-hidden="true" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="7" />
            <path d="M24 4v7M24 37v7M9.9 9.9l5 5M33.1 33.1l5 5M4 24h7M37 24h7M9.9 38.1l5-5M33.1 14.9l5-5" />
          </svg>
        );
    }
  };

  return (
    <section className="home-classic-slider" aria-roledescription="carousel" aria-label="Homepage hero">
      <div className="home-classic-slider__media" aria-hidden="true">
        {slides.map((slide, index) => (
          <Image
            alt=""
            className={index === activeIndex ? "is-active" : ""}
            fill
            key={slide.title}
            priority={index === 0}
            sizes="100vw"
            src={slide.image}
          />
        ))}
      </div>
      <div className="home-classic-slider__shade" aria-hidden="true" />
      <div className="home-classic-slider__glass-aura" aria-hidden="true" />

      <button
        aria-label="Previous slide"
        className="home-classic-slider__arrow home-classic-slider__arrow--prev"
        onClick={showPrevious}
        type="button"
      >
        {"<"}
      </button>
      <button
        aria-label="Next slide"
        className="home-classic-slider__arrow home-classic-slider__arrow--next"
        onClick={showNext}
        type="button"
      >
        {">"}
      </button>

      <div className="container home-classic-slider__inner">
        {activeSlide.variant === "system" ? (
          <article className="home-classic-slider__system" key={activeSlide.title}>
            <Image alt="Arete Partners" className="home-classic-slider__system-logo" height={205} src="/assets/arete-partners-logo.png" width={360} />
            <div className="home-classic-slider__system-kicker">
              <span />
              <p>Powered by</p>
              <span />
            </div>
            <h1>
              The Arete Execution System
              <sup>{"\u2122"}</sup>
            </h1>
            <div className="home-classic-slider__system-pillars">
              {systemPillars.map((pillar) => (
                <div className="home-classic-slider__system-pillar" key={pillar.title + pillar.text}>
                  {renderIcon(pillar.icon)}
                  <strong>{pillar.title}</strong>
                  <span>{pillar.text}</span>
                </div>
              ))}
            </div>
            <div className="home-classic-slider__system-grid">
              {systemCapabilities.map((capability, index) => (
                <div className="home-classic-slider__system-card" key={capability.title}>
                  <div className="home-classic-slider__system-icon">{renderIcon(capability.icon)}</div>
                  <h2>{capability.title}</h2>
                  <p>{capability.text}</p>
                  {index < systemCapabilities.length - 1 ? <span className="home-classic-slider__system-chevron" aria-hidden="true" /> : null}
                </div>
              ))}
            </div>
            <div className="home-classic-slider__system-outcome">
              <span />
              <p>One measurable outcome</p>
              <span />
            </div>
            <strong className="home-classic-slider__system-result">{activeSlide.body}</strong>
          </article>
        ) : (
          <article className="home-classic-slider__copy" key={activeSlide.title}>
            <span className="home-classic-slider__rule" aria-hidden="true" />
            <p className="home-classic-slider__eyebrow">{activeSlide.eyebrow}</p>
            <h1>{activeSlide.title}</h1>
            <p>{activeSlide.body}</p>
            <div className="home-classic-slider__actions">
              <Link className="home-classic-slider__cta home-classic-slider__cta--primary" href={activeSlide.primaryCtaHref}>
                {activeSlide.primaryCtaLabel}
              </Link>
              <Link className="home-classic-slider__cta home-classic-slider__cta--secondary" href={activeSlide.secondaryCtaHref}>
                {activeSlide.secondaryCtaLabel}
              </Link>
            </div>
          </article>
        )}
      </div>

      <div className="home-classic-slider__dots" role="tablist" aria-label="Hero slides">
        {slides.map((slide, index) => (
          <button
            aria-label={`Show ${slide.eyebrow}`}
            aria-selected={index === activeIndex}
            className={index === activeIndex ? "is-active" : ""}
            key={slide.title}
            onClick={() => setActiveIndex(index)}
            role="tab"
            type="button"
          />
        ))}
      </div>
    </section>
  );
}
