import Image from "next/image";
import Link from "next/link";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Insights", href: "/insights" },
  { label: "Industries", href: "/industries" },
  { label: "Trainings", href: "/trainings" },
  { label: "Career", href: "/career" },
  { label: "Contact Us", href: "/contact-us" },
];

function FooterIcon({ name }: { name: "mail" | "phone" | "pin" | "facebook" | "linkedin" | "twitter" | "youtube" }) {
  if (name === "mail") return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>;
  if (name === "phone") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h4l2 5-3 2c1.5 3 3 4.5 6 6l2-3 5 2v4c0 1-1 2-2 2C10 21 3 14 3 5c0-1 1-2 3-2Z" /></svg>;
  if (name === "pin") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>;
  if (name === "linkedin") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9v9M6 6v.01M10 18V9h4v2c1-2 6-3 6 3v4" /></svg>;
  if (name === "twitter") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 2h4l-9 10 9 10h-6l-6-7-6 7H2l7-9L2 2h6l5 6 5-6Z" /></svg>;
  if (name === "youtube") return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="5" /><path d="m10 9 5 3-5 3V9Z" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h4V3h-4c-4 0-6 2-6 6v3H4v5h4v5h5v-5h4l1-5h-5V9c0-1 0-1 1-1Z" /></svg>;
}

export function Footer() {
  return (
    <footer className="site-footer" id="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand-column">
          <div className="footer-logo-frame">
            <Image
              alt="Arete Partners"
              className="footer-logo"
              height={205}
              src="/assets/arete-partners-logo.png"
              width={360}
            />
          </div>
          <p>Arete Partners is a tech-enabled global consulting firm helping organisations turn strategy into measurable business performance.</p>
        </div>
        <div className="footer-nav-column">
          <h2>Navigate</h2>
          <nav aria-label="Footer navigation">
            {navigation.map((item) => (
              <Link href={item.href} key={item.label}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="footer-contact-column">
          <h2>Contact</h2>
          <a href="mailto:info@aretepartners.com"><FooterIcon name="mail" />info@aretepartners.com</a>
          <a href="tel:+919876543210"><FooterIcon name="phone" />+91 9876543210</a>
          <a href="tel:+12126951962"><FooterIcon name="phone" />+1 (212)-695-1962</a>
          <span><FooterIcon name="pin" />463 7th Ave, NY 10018, USA</span>
        </div>
        <div className="footer-social-column">
          <h2>Follow Us</h2>
          <span><i><FooterIcon name="facebook" /></i>Facebook</span>
          <span><i><FooterIcon name="linkedin" /></i>LinkedIn</span>
          <span><i><FooterIcon name="twitter" /></i>Twitter</span>
          <span><i><FooterIcon name="youtube" /></i>YouTube</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© 2025 Arete Partners. All Rights Reserved.</p>
        <div><span>Privacy Policy</span><span>Terms of Use</span></div>
      </div>
    </footer>
  );
}
