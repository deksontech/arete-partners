import Image from "next/image";
import Link from "next/link";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Services", href: "/services" },
  { label: "Insights", href: "/insights" },
  { label: "Industries", href: "/industries" },
  { label: "Trainings", href: "/trainings" },
  { label: "Career", href: "/career" },
  { label: "Contact Us", href: "/contact-us" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Image
            alt="Arete Partners"
            className="footer-logo"
            height={205}
            src="/assets/arete-partners-logo.png"
            width={360}
          />
          <p>Arete Partners</p>
        </div>
        <div>
          <h2>Navigate</h2>
          <nav aria-label="Footer navigation">
            {navigation.map((item) => (
              <Link href={item.href} key={item.label}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h2>Contact</h2>
          <a href="mailto:info@aretepartners.com">info@aretepartners.com</a>
          <a href="tel:+919876543210">+91 9876543210</a>
          <a href="tel:+12126951962">+1 (212)-695-1962</a>
          <a href="mailto:info@elementskit.com">info@elementskit.com</a>
          <span>463 7th Ave, NY 10018, USA</span>
          <span>Facebook</span>
          <span>Twitter</span>
          <span>Youtube</span>
        </div>
      </div>
    </footer>
  );
}
