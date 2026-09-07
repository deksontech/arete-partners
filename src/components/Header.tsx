"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { ReactNode } from "react";

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
  { label: "All Industries", href: "/industries" },
  { label: "Pharmaceutical", href: "/pharmaceutical-sector" },
  { label: "Manufacturing", href: "/industrial-manufacturing-sector" },
  { label: "Healthcare", href: "/healthcare" },
  { label: "Insurance", href: "/insurance" },
  { label: "Aerospace & Defence", href: "/aerospace-defence" },
  { label: "Automotive", href: "/automotive" },
  { label: "Global Capability Centers", href: "/global-capability-centers" },
  { label: "Education", href: "/education" },
];

type HeaderIconName = "phone" | "mail" | "pin" | "search" | "menu" | "chevron" | "arrow";

function HeaderIcon({ name }: { name: HeaderIconName }) {
  const paths: Record<HeaderIconName, ReactNode> = {
    phone: <path d="M7.2 3.5 9.6 7l-1.8 1.8a14.3 14.3 0 0 0 7.4 7.4l1.8-1.8 3.5 2.4-.8 3.1a2 2 0 0 1-2 1.5C9.3 20.7 3.3 14.7 2.6 6.3a2 2 0 0 1 1.5-2l3.1-.8Z" />,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    search: <><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4.5 4.5" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    chevron: <path d="m8 10 4 4 4-4" />,
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
  };
  return <svg aria-hidden="true" className={`header-icon header-icon--${name}`} viewBox="0 0 24 24">{paths[name]}</svg>;
}

export function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<{ label: string; pathname: string } | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeMenu = openMenu?.pathname === pathname ? openMenu.label : null;
  const servicePaths = new Set(serviceLinks.map((item) => item.href));
  const industryPaths = new Set(industryLinks.map((item) => item.href));

  const isItemActive = (label: string, href: string) => {
    if (label === "Home") return pathname === "/";
    if (label === "Services") return servicePaths.has(pathname);
    if (label === "Industries") return industryPaths.has(pathname);
    return pathname === href;
  };

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
          <div className="topbar-contacts">
            <a href="tel:+12126951962"><HeaderIcon name="phone" />+1 (212) 695-1962</a>
            <a href="mailto:info@aretepartners.com"><HeaderIcon name="mail" />info@aretepartners.com</a>
            <span><HeaderIcon name="pin" />463 7th Ave, NY 10018, USA</span>
          </div>
          <div className="topbar-actions">
            <div className="topbar-socials" aria-label="Social links">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="X">X</a>
              <a href="#" aria-label="YouTube">▶</a>
            </div>
            <Link className="topbar-cta" href="/contact-us">Book an Executive Discussion <HeaderIcon name="arrow" /></Link>
          </div>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" href="/" aria-label="Arete Partners home">
            <Image
              alt="Arete Partners"
              height={843}
              priority
              src="/assets/arete-partners-logo-transparent.png"
              width={842}
            />
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map((item) => {
              const menu = item.label === "Services" ? serviceLinks : item.label === "Industries" ? industryLinks : null;
              const opensOnly = item.label === "Industries";

              return (
                <div
                  className={`nav-group${activeMenu === item.label ? " is-open" : ""}${isItemActive(item.label, item.href) ? " is-active" : ""}`}
                  key={item.label}
                  onMouseEnter={() => menu && setOpenMenu({ label: item.label, pathname })}
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
                      {item.label}<HeaderIcon name="chevron" />
                    </button>
                  ) : (
                    <Link href={item.href} onClick={closeMenu}>
                      {item.label}{menu ? <HeaderIcon name="chevron" /> : null}
                    </Link>
                  )}
                  {menu ? (
                    <div className={`mega-menu${item.label === "Industries" ? " mega-menu--industries" : ""}`}>
                      <div className="mega-menu__head"><p>{item.label === "Services" ? "Services Portfolio" : "Industry Expertise"}</p><span>Explore our capabilities</span></div>
                      {menu.map((child) => (
                        <Link href={child.href} key={child.label} onClick={closeMenu}>
                          <span>{child.label}</span><HeaderIcon name="arrow" />
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>
          <button className="search-button" type="button" aria-label="Search">
            <HeaderIcon name="search" />
          </button>
          <details className="mobile-nav" open={mobileOpen} onToggle={(event) => setMobileOpen(event.currentTarget.open)}>
            <summary aria-label="Open navigation"><HeaderIcon name="menu" /><span>Menu</span></summary>
            <div className="mobile-panel">
              <div className="mobile-panel__head"><span>Explore Arete</span><b>Navigation</b></div>
              {navigation.map((item) => {
                const menu = item.label === "Services" ? serviceLinks : item.label === "Industries" ? industryLinks : null;

                return (
                  <div className="mobile-panel__group" key={item.label}>
                    {menu ? <details><summary>{item.label}<HeaderIcon name="chevron" /></summary><div className="mobile-panel__children">{menu.map((child) => <Link href={child.href} key={child.label} onClick={closeMenu}>{child.label}<HeaderIcon name="arrow" /></Link>)}</div></details> : <Link className={isItemActive(item.label, item.href) ? "is-active" : ""} href={item.href} onClick={closeMenu}>{item.label}<HeaderIcon name="arrow" /></Link>}
                  </div>
                );
              })}
              <Link className="button" href="/contact-us" onClick={closeMenu}>
                Book an Executive Discussion <HeaderIcon name="arrow" />
              </Link>
            </div>
          </details>
        </div>
      </header>
    </>
  );
}
