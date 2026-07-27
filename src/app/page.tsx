import { BaselineHtmlRenderer } from "@/components/BaselineHtmlRenderer";
import { homeBaselineHtml } from "@/content/homeBaselineHtml";

export default function Home() {
  return <BaselineHtmlRenderer className="docx-home-baseline" html={homeBaselineHtml} />;
}
