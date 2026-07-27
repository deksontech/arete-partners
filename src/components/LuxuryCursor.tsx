"use client";

import { useEffect, useRef } from "react";

const clickableSelector = [
  "a",
  "button",
  "[role='button']",
  ".elementor-button",
  ".btn",
  ".button",
  ".clickable",
  "input[type='submit']",
  "input[type='button']",
  ".elementor-icon",
  ".elementor-icon-box-wrapper",
].join(",");

const textSelector = [
  "p",
  "span",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "li",
  ".elementor-heading-title",
  ".elementor-widget-text-editor",
].join(",");

export function LuxuryCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const auraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const coarsePointer = window.matchMedia("(hover: none), (pointer: coarse)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (coarsePointer.matches || reducedMotion.matches) {
      return;
    }

    const root = document.documentElement;
    const dot = dotRef.current;
    const ring = ringRef.current;
    const aura = auraRef.current;

    if (!dot || !ring || !aura) {
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let auraX = mouseX;
    let auraY = mouseY;
    let animationFrame = 0;

    const showCursor = () => {
      root.classList.add("lux-visible");
    };

    const hideCursor = () => {
      root.classList.remove("lux-visible", "lux-hover", "lux-text-mode", "lux-click");
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      const target = event.target instanceof Element ? event.target : null;
      const clickableTarget = target?.closest(clickableSelector);
      const textTarget = target?.closest(textSelector);

      root.classList.remove("lux-hover", "lux-text-mode");

      if (clickableTarget) {
        root.classList.add("lux-hover");

        const rect = clickableTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        mouseX += (centerX - event.clientX) * 0.12;
        mouseY += (centerY - event.clientY) * 0.12;
      } else if (textTarget) {
        root.classList.add("lux-text-mode");
      }

      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
      showCursor();
    };

    const handleMouseDown = () => {
      root.classList.add("lux-click");
    };

    const handleMouseUp = () => {
      root.classList.remove("lux-click");
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      auraX += (mouseX - auraX) * 0.09;
      auraY += (mouseY - auraY) * 0.09;

      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      aura.style.left = `${auraX}px`;
      aura.style.top = `${auraY}px`;

      animationFrame = window.requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseenter", showCursor);
    window.addEventListener("mouseleave", hideCursor);
    window.addEventListener("blur", hideCursor);
    animationFrame = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseenter", showCursor);
      window.removeEventListener("mouseleave", hideCursor);
      window.removeEventListener("blur", hideCursor);
      hideCursor();
    };
  }, []);

  return (
    <>
      <div className="lux-cursor-aura" ref={auraRef} aria-hidden="true" />
      <div className="lux-cursor-ring" ref={ringRef} aria-hidden="true" />
      <div className="lux-cursor-dot" ref={dotRef} aria-hidden="true" />
    </>
  );
}
