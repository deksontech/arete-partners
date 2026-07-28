"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type CapabilityFrame = {
  label: string;
  title: string;
  body: string;
};

const capabilityFrames: CapabilityFrame[] = [
  {
    label: "Growth & Strategy",
    title: "We turn strategy into measurable growth, not intent",
    body: "For leadership teams where ambition outpaces execution, we build growth strategies that deliver outcomes—not just intent. We eliminate strategic noise, align priorities, and translate ambition into KPI-driven roadmaps that deliver sustained, profitable growth.",
  },
  {
    label: "Shared Services & GCC",
    title: "We build GCCs that scale performance, not complexity",
    body: "For organizations scaling without control, we build GCCs that deliver performance—not complexity. We eliminate redundancies, standardize operating models, and embed governance and KPI systems that ensure scalable, accountable execution.",
  },
  {
    label: "Tech-Enabled Transformation",
    title: "We make digital deliver outcomes, not ongoing experimentation",
    body: "For enterprises investing in digital without measurable returns, we make technology accountable to performance—not experimentation. We stabilize processes, integrate data and automation, and embed measurement systems that convert technology into tangible business outcomes.",
  },
  {
    label: "ESG & Value Creation",
    title: "We turn ESG into value creation, not compliance ",
    body: "For organizations where ESG remains compliance-driven, we transform it into a driver of enterprise value. We embed sustainability into strategy and operations, align it with performance metrics, and enable continuous improvement to deliver responsible, profitable growth.",
  },
  {
    label: "Business Process & Industry 4.0",
    title: "We stabilize operations before scaling digital transformation initiatives",
    body: "For operations constrained by inefficiency and fragmentation, we build stable foundations before scaling digital. We eliminate waste, standardize processes, and implement KPI-driven management to enable continuous improvement and Industry 4.0 integration.",
  },
];

export function HomeHeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const activeFrame = activeIndex >= 0 ? capabilityFrames[activeIndex] : null;

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const delay = activeIndex === -1 ? 6200 : 2850;
    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % capabilityFrames.length);
    }, delay);

    return () => window.clearTimeout(timer);
  }, [activeIndex]);

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
          <p className="home-execution-hero__eyebrow">THE Arete Execution System™</p>
          <h1 id="home-execution-title">Transforming strategy into results that last</h1>
          <p className="home-execution-hero__body">
            We partner with enterprises where strategy remains intent and transformation stays fragmented—turning
            ambition into executable roadmaps that deliver measurable, sustained business impact.
          </p>

          <div className="home-execution-hero__cta-row">
            <Link className="home-execution-hero__button home-execution-hero__button--primary" href="/contact-us">
              Contact Us
            </Link>
            <Link className="home-execution-hero__button home-execution-hero__button--ghost" href="#about">
              Learn More
            </Link>
          </div>
        </div>

        <aside className="home-execution-hero__system-card" aria-label="Arete Execution System capabilities">
          <div className="home-execution-hero__system-head">
            <p>Powered by the Arete Execution System™</p>
            <span>A disciplined, integrated approach to eliminating fragmentation and delivering measurable, scalable outcomes.</span>
          </div>

          <div className="home-execution-hero__capability-stage">
            {activeFrame ? (
              <article className="home-execution-hero__capability" key={activeFrame.label}>
                <p className="home-execution-hero__capability-label">{activeFrame.label}</p>
                <h2>{activeFrame.title}</h2>
                <p>{activeFrame.body}</p>
              </article>
            ) : (
              <div className="home-execution-hero__capability home-execution-hero__capability--waiting">
                {capabilityFrames.map((frame) => (
                  <span key={frame.label}>{frame.label}</span>
                ))}
              </div>
            )}
          </div>

          <div className="home-execution-hero__progress" aria-label="Capability sequence">
            {capabilityFrames.map((frame, index) => (
              <button
                aria-label={`Show ${frame.label}`}
                aria-current={activeIndex === index ? "true" : undefined}
                className={activeIndex === index ? "is-active" : ""}
                key={frame.label}
                onClick={() => setActiveIndex(index)}
                type="button"
              />
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
