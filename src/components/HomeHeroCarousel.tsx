"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type HeroFrame = {
  eyebrow: string;
  title: string;
  subtitle: string;
  body: string;
};

const capabilityFrames: HeroFrame[] = [
  {
    eyebrow: "Growth & Strategy",
    title: "We turn strategy into measurable growth, not intent",
    subtitle:
      "Powered by the Arete Execution System™\nA disciplined, integrated approach to eliminating fragmentation and delivering measurable, scalable outcomes.",
    body: "For leadership teams where ambition outpaces execution, we build growth strategies that deliver outcomes—not just intent. We eliminate strategic noise, align priorities, and translate ambition into KPI-driven roadmaps that deliver sustained, profitable growth.",
  },
  {
    eyebrow: "Shared Services & GCC",
    title: "We build GCCs that scale performance, not complexity",
    subtitle:
      "Powered by the Arete Execution System™\nA disciplined, integrated approach to eliminating fragmentation and delivering measurable, scalable outcomes.",
    body: "For organizations scaling without control, we build GCCs that deliver performance—not complexity. We eliminate redundancies, standardize operating models, and embed governance and KPI systems that ensure scalable, accountable execution.",
  },
  {
    eyebrow: "Tech-Enabled Transformation",
    title: "We make digital deliver outcomes, not ongoing experimentation",
    subtitle:
      "Powered by the Arete Execution System™\nA disciplined, integrated approach to eliminating fragmentation and delivering measurable, scalable outcomes.",
    body: "For enterprises investing in digital without measurable returns, we make technology accountable to performance—not experimentation. We stabilize processes, integrate data and automation, and embed measurement systems that convert technology into tangible business outcomes.",
  },
  {
    eyebrow: "ESG & Value Creation",
    title: "We turn ESG into value creation, not compliance ",
    subtitle:
      "Powered by the Arete Execution System™\nA disciplined, integrated approach to eliminating fragmentation and delivering measurable, scalable outcomes.",
    body: "For organizations where ESG remains compliance-driven, we transform it into a driver of enterprise value. We embed sustainability into strategy and operations, align it with performance metrics, and enable continuous improvement to deliver responsible, profitable growth.",
  },
  {
    eyebrow: "Business Process & Industry 4.0",
    title: "We stabilize operations before scaling digital transformation initiatives",
    subtitle:
      "Powered by the Arete Execution System™\nA disciplined, integrated approach to eliminating fragmentation and delivering measurable, scalable outcomes.",
    body: "For operations constrained by inefficiency and fragmentation, we build stable foundations before scaling digital. We eliminate waste, standardize processes, and implement KPI-driven management to enable continuous improvement and Industry 4.0 integration.",
  },
];

export function HomeHeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const frames = useMemo(
    () => [
      {
        eyebrow: "THE Arete Execution System™",
        title: "Transforming strategy into results that last",
        subtitle: "",
        body: "We partner with enterprises where strategy remains intent and transformation stays fragmented—turning ambition into executable roadmaps that deliver measurable, sustained business impact.",
      },
      ...capabilityFrames,
    ],
    [],
  );

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const isMainFrame = activeIndex === 0;
    const delay = isMainFrame ? 6800 : 2850;
    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % frames.length);
    }, delay);

    return () => window.clearTimeout(timer);
  }, [activeIndex, frames.length]);

  const activeFrame = frames[activeIndex];
  const isMainFrame = activeIndex === 0;

  return (
    <section className="home-execution-hero" aria-labelledby="home-execution-title">
      <Image
        className="home-execution-hero__bg"
        src="/assets/purple-wave.jpeg"
        alt=""
        fill
        priority
        sizes="100vw"
      />
      <div className="home-execution-hero__shade" aria-hidden="true" />
      <div className="home-execution-hero__inner">
        <div className="home-execution-hero__content">
          <div className="home-execution-hero__frame" key={activeIndex}>
            <p className="home-execution-hero__eyebrow">{activeFrame.eyebrow}</p>
            {activeFrame.subtitle ? (
              <p className="home-execution-hero__system">
                {activeFrame.subtitle.split("\n").map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </p>
            ) : null}
            <h1 id="home-execution-title" className={isMainFrame ? "" : "is-capability"}>
              {activeFrame.title}
            </h1>
            <p className="home-execution-hero__body">{activeFrame.body}</p>
          </div>

          <div className="home-execution-hero__cta-row">
            <Link className="home-execution-hero__button home-execution-hero__button--primary" href="/contact-us">
              Contact Us
            </Link>
            <Link className="home-execution-hero__button home-execution-hero__button--ghost" href="#about">
              Learn More
            </Link>
          </div>
        </div>

        <div className="home-execution-hero__progress" aria-label="Hero message sequence">
          {frames.map((frame, index) => (
            <button
              aria-label={`Show ${frame.eyebrow}`}
              aria-current={activeIndex === index ? "true" : undefined}
              className={activeIndex === index ? "is-active" : ""}
              key={frame.eyebrow}
              onClick={() => setActiveIndex(index)}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
