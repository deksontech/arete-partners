"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type HeroSlide = {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  ctaHref: string;
  ctaLabel: string;
};

const slides: HeroSlide[] = [
  {
    eyebrow: "THE Arete Execution System™",
    title: "Transforming strategy into results that last",
    body: "We partner with enterprises where strategy remains intent and transformation stays fragmented—turning ambition into executable roadmaps that deliver measurable, sustained business impact.",
    image: "/assets/purple-wave.jpeg",
    ctaHref: "/contact-us",
    ctaLabel: "Contact Us",
  },
  {
    eyebrow: "Growth & Strategy",
    title: "We turn strategy into measurable growth, not intent",
    body: "For leadership teams where ambition outpaces execution, we build growth strategies that deliver outcomes—not just intent. We eliminate strategic noise, align priorities, and translate ambition into KPI-driven roadmaps that deliver sustained, profitable growth.",
    image: "/assets/city-consulting.jpg",
    ctaHref: "/growth-transformation",
    ctaLabel: "Explore Growth & Strategy",
  },
  {
    eyebrow: "Shared Services & GCC",
    title: "We build GCCs that scale performance, not complexity",
    body: "For organizations scaling without control, we build GCCs that deliver performance—not complexity. We eliminate redundancies, standardize operating models, and embed governance and KPI systems that ensure scalable, accountable execution.",
    image: "/assets/banner-new.jpg",
    ctaHref: "/global-capability-centers",
    ctaLabel: "Explore GCC",
  },
  {
    eyebrow: "Tech-Enabled Transformation",
    title: "We make digital deliver outcomes, not ongoing experimentation",
    body: "For enterprises investing in digital without measurable returns, we make technology accountable to performance—not experimentation. We stabilize processes, integrate data and automation, and embed measurement systems that convert technology into tangible business outcomes.",
    image: "/assets/purple-wave.jpeg",
    ctaHref: "/services",
    ctaLabel: "Explore Services",
  },
  {
    eyebrow: "ESG & Value Creation",
    title: "We turn ESG into value creation, not compliance",
    body: "For organizations where ESG remains compliance-driven, we transform it into a driver of enterprise value. We embed sustainability into strategy and operations, align it with performance metrics, and enable continuous improvement to deliver responsible, profitable growth.",
    image: "/assets/city-consulting.jpg",
    ctaHref: "/services",
    ctaLabel: "Explore Services",
  },
  {
    eyebrow: "Business Process & Industry 4.0",
    title: "We stabilize operations before scaling digital transformation initiatives",
    body: "For operations constrained by inefficiency and fragmentation, we build stable foundations before scaling digital. We eliminate waste, standardize processes, and implement KPI-driven management to enable continuous improvement and Industry 4.0 integration.",
    image: "/assets/banner-new.jpg",
    ctaHref: "/process-advisory",
    ctaLabel: "Explore Process Advisory",
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
      activeIndex === 0 ? 6200 : 3600,
    );

    return () => window.clearTimeout(timer);
  }, [activeIndex]);

  const showPrevious = () => {
    setActiveIndex((current) => (current === 0 ? slides.length - 1 : current - 1));
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
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

      <button
        aria-label="Previous slide"
        className="home-classic-slider__arrow home-classic-slider__arrow--prev"
        onClick={showPrevious}
        type="button"
      >
        ‹
      </button>
      <button
        aria-label="Next slide"
        className="home-classic-slider__arrow home-classic-slider__arrow--next"
        onClick={showNext}
        type="button"
      >
        ›
      </button>

      <div className="container home-classic-slider__inner">
        <article className="home-classic-slider__copy" key={activeSlide.title}>
          <p className="home-classic-slider__eyebrow">{activeSlide.eyebrow}</p>
          <h1>{activeSlide.title}</h1>
          <p>{activeSlide.body}</p>
          <Link className="home-classic-slider__cta" href={activeSlide.ctaHref}>
            {activeSlide.ctaLabel}
          </Link>
        </article>
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
