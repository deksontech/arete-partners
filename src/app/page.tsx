import { BaselineHtmlRenderer } from "@/components/BaselineHtmlRenderer";
import { HomeHeroCarousel } from "@/components/HomeHeroCarousel";
import { homeBaselineHtml } from "@/content/homeBaselineHtml";

export default function Home() {
  return (
    <>
      <HomeHeroCarousel />
      <BaselineHtmlRenderer className="docx-home-baseline home-baseline-after-custom-hero" html={homeBaselineHtml} />
    </>
  );
}
