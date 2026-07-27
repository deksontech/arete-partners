"use client";

import { useEffect, useRef } from "react";

type BaselineHtmlRendererProps = {
  className?: string;
  html: string;
};

export function BaselineHtmlRenderer({ className, html }: BaselineHtmlRendererProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const scripts = Array.from(root.querySelectorAll("script"));
    const executedScripts: HTMLScriptElement[] = [];

    scripts.forEach((oldScript) => {
      const script = document.createElement("script");
      Array.from(oldScript.attributes).forEach((attr) => {
        script.setAttribute(attr.name, attr.value);
      });
      script.textContent = oldScript.textContent;
      document.body.appendChild(script);
      executedScripts.push(script);
    });

    return () => {
      executedScripts.forEach((script) => script.remove());
    };
  }, [html]);

  return <div ref={rootRef} className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}
