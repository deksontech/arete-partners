// DO NOT EDIT THIS CONTENT.
// This section content is approved by the user for the Pharmaceutical Sector page.
// Only explicit written approval permits changes.

export const pharmaWhyPartnerSectionHtml = `
<section class="phwW phwW--reference" id="why-pharma-us">
  <div class="phwW__inner">
    <div class="phwW__grid">
      <div class="phwW__left">
        <p class="phwW__eyebrow">Why Partner With Us</p>
        <h2 class="phwW__title">Why Pharma Firms Work With Us</h2>
        <p class="phwW__lead">A boardroom-grade approach built for regulated environments — designed to translate strategy into outcomes across quality, compliance, cost, and speed.</p>

        <div class="phwW__strip" aria-label="Reasons pharma firms work with us">
          <div class="phwW__stripRow">
            <div class="phwW__pip" aria-hidden="true">✓</div>
            <div class="phwW__stripText">
              <p class="phwW__stripTitle">Strategy + Execution Under One Roof</p>
              <p class="phwW__stripDesc">We transform boardroom strategy into frontline results.</p>
            </div>
          </div>
          <div class="phwW__stripRow">
            <div class="phwW__pip" aria-hidden="true">✓</div>
            <div class="phwW__stripText">
              <p class="phwW__stripTitle">Deep Understanding of Regulated Environments</p>
              <p class="phwW__stripDesc">Audit-readiness, data integrity, and GxP-first design.</p>
            </div>
          </div>
          <div class="phwW__stripRow">
            <div class="phwW__pip" aria-hidden="true">✓</div>
            <div class="phwW__stripText">
              <p class="phwW__stripTitle">Tech-First, Human-Centric Approach</p>
              <p class="phwW__stripDesc">Digitisation that simplifies work — not complicates it.</p>
            </div>
          </div>
          <div class="phwW__stripRow">
            <div class="phwW__pip" aria-hidden="true">✓</div>
            <div class="phwW__stripText">
              <p class="phwW__stripTitle">Proven Methodologies</p>
              <p class="phwW__stripDesc">Lean, Industry 4.0, Agile, ESG, TOM, and transformation frameworks.</p>
            </div>
          </div>
        </div>

        <div class="phwW__ctaRow">
          <a class="phwW__cta" href="/contact-us">Talk to us →</a>
          <a class="phwW__ctaGhost" href="/services">View services</a>
        </div>
      </div>

      <div class="phwW__map" aria-label="How we work">
        <div class="phwW__mapTop">
          <p class="phwW__mapKicker">How We Work</p>
          <h3 class="phwW__mapTitle">From intent → execution → measurable outcomes</h3>
        </div>
        <div class="phwW__timeline">
          <div class="phwW__node">
            <span class="phwW__step" aria-hidden="true">01</span>
            <div class="phwW__nodeBody">
              <div class="phwW__nodeTop">
                <p class="phwW__nodeTitle">Align strategy to regulated execution</p>
                <span class="phwW__tag">Boardroom → Plant</span>
              </div>
              <p class="phwW__nodeText">Clear priorities, governance, and owners — designed to survive audits and operational reality.</p>
            </div>
          </div>
          <div class="phwW__node">
            <span class="phwW__step" aria-hidden="true">02</span>
            <div class="phwW__nodeBody">
              <div class="phwW__nodeTop">
                <p class="phwW__nodeTitle">Simplify processes, then digitise</p>
                <span class="phwW__tag">Lean → Digital</span>
              </div>
              <p class="phwW__nodeText">Digital enablement that improves flow, reduces errors, and strengthens traceability.</p>
            </div>
          </div>
          <div class="phwW__node">
            <span class="phwW__step" aria-hidden="true">03</span>
            <div class="phwW__nodeBody">
              <div class="phwW__nodeTop">
                <p class="phwW__nodeTitle">Build capability to sustain change</p>
                <span class="phwW__tag">Scale-ready</span>
              </div>
              <p class="phwW__nodeText">Operating rhythm, skills, and playbooks — so performance holds after the engagement.</p>
            </div>
          </div>
        </div>
        <div class="phwW__roi">
          <span class="phwW__roiIcon" aria-hidden="true">▥</span>
          <p class="phwW__roiText"><b>Focus on What Matters:</b> Every engagement is designed to improve growth, cost efficiency, quality, and compliance.</p>
        </div>
      </div>
    </div>

    <div class="phwW__proof" aria-label="Why partner with Arete">
      <div class="phwW__proofIntro">
        <p class="phwW__proofKicker">A New Partner Focused on Impact</p>
        <p class="phwW__proofText">We are a new firm built by industry leaders with a shared mission — to create measurable value for pharma organisations.</p>
      </div>
      <div class="phwW__proofItem">
        <span class="phwW__proofIcon" aria-hidden="true">◎</span>
        <div><b>Impact-First Mindset</b><span>Every engagement is tied to measurable business outcomes.</span></div>
      </div>
      <div class="phwW__proofItem">
        <span class="phwW__proofIcon" aria-hidden="true">◌</span>
        <div><b>Senior-Led Delivery</b><span>Experienced leaders directly involved in every engagement.</span></div>
      </div>
      <div class="phwW__proofItem">
        <span class="phwW__proofIcon" aria-hidden="true">✦</span>
        <div><b>Fit-for-Pharma Solutions</b><span>Solutions tailored for the unique realities of regulated environments.</span></div>
      </div>
      <div class="phwW__proofItem">
        <span class="phwW__proofIcon" aria-hidden="true">◇</span>
        <div><b>Long-Term Partnership</b><span>Built on trust, transparency, and a commitment to your success.</span></div>
      </div>
    </div>
  </div>
</section>`;

export function withPharmaWhyPartnerSection(html: string) {
  return html.replace(
    /<section class="phwW" id="why-pharma-us">[\s\S]*?<\/section>\s*(?=<!-- ===================== INDUSTRIAL MANUFACTURING)/,
    pharmaWhyPartnerSectionHtml + "\n\n",
  );
}
