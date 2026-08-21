import { healthcareBaselineHtml } from "./healthcareBaselineHtml";

// DO NOT EDIT THIS CONTENT.
// This content is locked and must match the original Healthcare page intent.
// Only explicit written approval permits changes.

const healthcareIntro =
  "At Arete Partners, we partner with healthcare organisations to convert complexity into clarity and strategy into measurable outcomes. Our integrated approach—spanning strategy, operations, digital, ESG, and capability building—helps healthcare organisations improve access, quality, cost, and patient experience.";

const healthcareVisual = `
<img
  class="hc-hero__video"
  src="/assets/city-consulting.jpg"
  alt="Healthcare transformation"
  loading="eager"
/>
`;

const healthcareUniformityFixes = `
<style>
  .docx-healthcare-baseline,
  .docx-healthcare-baseline * {
    font-family: Montserrat, Arial, sans-serif !important;
  }

  .docx-healthcare-baseline .hc-hero__visual {
    aspect-ratio: 16 / 9;
    min-height: 0 !important;
  }

  .docx-healthcare-baseline .hc-hero__video {
    width: 100%;
    height: 100%;
    min-height: 0 !important;
    display: block;
    object-fit: cover;
  }

  .docx-healthcare-baseline .hc-hero__visual::after {
    opacity: .22 !important;
  }

  .docx-healthcare-baseline .hc-intro__text strong {
    color: inherit;
  }

  .docx-healthcare-baseline .hc-hero__title,
  .docx-healthcare-baseline .hcK__title,
  .docx-healthcare-baseline .hcWhy__title,
  .docx-healthcare-baseline .im-cta__title {
    color: #482a7a !important;
    font-weight: 500 !important;
  }

  .docx-healthcare-baseline .hc-hero__p,
  .docx-healthcare-baseline .hc-intro__text,
  .docx-healthcare-baseline .hcK__intro,
  .docx-healthcare-baseline .hcWhy__lead,
  .docx-healthcare-baseline .im-cta__text {
    color: #333333 !important;
    font-size: 16px !important;
    line-height: 26px !important;
    font-weight: 400 !important;
  }

  .docx-healthcare-baseline .hc-hero__badge {
    border-radius: 999px !important;
    color: #020c4f !important;
  }

  @media (max-width: 820px) {
    .docx-healthcare-baseline .hc-hero,
    .docx-healthcare-baseline .hcK,
    .docx-healthcare-baseline .hcWhy,
    .docx-healthcare-baseline .im-cta {
      padding-left: 18px !important;
      padding-right: 18px !important;
    }
  }
</style>
`;

export const healthcarePageHtml = healthcareBaselineHtml
  .replace(
    /<video class="hc-hero__video"[\s\S]*?<\/video>/,
    healthcareVisual,
  )
  .replace(
    /At <strong>\[Your Firm Name\]<\/strong>, we partner with pharmaceutical companies[\s\S]*?deliver world-class quality\./,
    healthcareIntro,
  )
  .replace(/Sustainable manufacturing/g, "Sustainable healthcare")
  .replace(/Healthcare\s\s+Enterprise/g, "Healthcare Enterprise")
  .replace(/<\/section>\s*<\/section>\s*<section class="hc-intro"/, "</section>\n\n<section class=\"hc-intro\"")
  .replace("</nav>", "</nav>\n" + healthcareUniformityFixes);
