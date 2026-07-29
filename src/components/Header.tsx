"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Trainings", href: "/trainings" },
  { label: "Insights", href: "/insights" },
  { label: "Career", href: "/career" },
  { label: "Contact Us", href: "/contact-us" },
];

const serviceLinks = [
  { label: "All Services", href: "/services" },
  { label: "Growth & Transformation", href: "/growth-transformation" },
  { label: "Operational Excellence", href: "/operational-excellence" },
  { label: "Process Advisory", href: "/process-advisory" },
  { label: "Service Delivery", href: "/service-delivery" },
  { label: "Corporate Function Transformation", href: "/corporate-function" },
];

const industryLinks = [
  { label: "Pharmaceutical", href: "/pharmaceutical-sector" },
  { label: "Manufacturing", href: "/industrial-manufacturing-sector" },
  { label: "Healthcare", href: "/healthcare" },
  { label: "Insurance", href: "/insurance" },
  { label: "Aerospace & Defence", href: "/aerospace-defence" },
  { label: "Automotive", href: "/automotive" },
  { label: "Global Capability Centers", href: "/global-capability-centers" },
  { label: "Education", href: "/education" },
];

export function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<{ label: string; pathname: string } | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeMenu = openMenu?.pathname === pathname ? openMenu.label : null;

  const closeMenu = () => {
    setOpenMenu(null);
    setMobileOpen(false);
  };

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>⌕ +1 (212)-695-1962</span>
          <span>✉ info@elementskit.com</span>
          <span>↗ 463 7th Ave, NY 10018, USA</span>
          <span className="topbar-social">f</span>
          <span className="topbar-social">♥</span>
          <span className="topbar-social">in</span>
          <span className="topbar-social">◎</span>
          <span className="topbar-social">▢</span>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" href="/" aria-label="Arete Partners home">
            <Image
              alt="Arete Partners"
              height={205}
              priority
              src="/assets/arete-partners-logo.png"
              width={360}
            />
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map((item) => {
              const menu = item.label === "Services" ? serviceLinks : item.label === "Industries" ? industryLinks : null;
              const opensOnly = item.label === "Industries";

              return (
                <div
                  className={`nav-group${activeMenu === item.label ? " is-open" : ""}`}
                  key={item.label}
                  onMouseEnter={() => setOpenMenu({ label: item.label, pathname })}
                  onMouseLeave={closeMenu}
                  onFocus={() => setOpenMenu({ label: item.label, pathname })}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) {
                      closeMenu();
                    }
                  }}
                >
                  {opensOnly ? (
                    <button
                      aria-expanded={activeMenu === item.label}
                      aria-haspopup="true"
                      className="nav-trigger"
                      type="button"
                      onClick={() => setOpenMenu(activeMenu === item.label ? null : { label: item.label, pathname })}
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link href={item.href} onClick={closeMenu}>
                      {item.label}
                    </Link>
                  )}
                  {menu ? (
                    <div className="mega-menu">
                      <p>{item.label === "Services" ? "Services Portfolio" : "Industry Pages"}</p>
                      {menu.map((child) => (
                        <Link href={child.href} key={child.label} onClick={closeMenu}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>
          <button className="search-button" type="button" aria-label="Search">
            ⌕
          </button>
          <Link className="header-cta" href="/contact-us">
            Book Consultation
          </Link>
          <details className="mobile-nav" open={mobileOpen} onToggle={(event) => setMobileOpen(event.currentTarget.open)}>
            <summary aria-label="Open navigation">Menu</summary>
            <div className="mobile-panel">
              {navigation.map((item) => {
                const menu = item.label === "Services" ? serviceLinks : item.label === "Industries" ? industryLinks : null;
                const opensOnly = item.label === "Industries";

                return (
                  <div className="mobile-panel__group" key={item.label}>
                    {opensOnly ? (
                      <button className="mobile-panel__trigger" type="button">
                        {item.label}
                      </button>
                    ) : (
                      <Link href={item.href} onClick={closeMenu}>
                        {item.label}
                      </Link>
                    )}
                    {menu ? (
                      <div className="mobile-panel__children">
                        {menu.map((child) => (
                          <Link href={child.href} key={child.label} onClick={closeMenu}>
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              })}
              <Link className="button" href="/contact-us" onClick={closeMenu}>
                Book Consultation
              </Link>
            </div>
          </details>
        </div>
      </header>
    </>
  );
}
