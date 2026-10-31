"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { business, contactHref } from "@/content/business";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const phoneHref = contactHref("phone");

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Forklifts", href: "/forklifts" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Enquire", href: "/inquiry" },
  ];

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      <div className="announcement" role="region" aria-label="Location notice">
        <span className="status-dot" aria-hidden="true" />
        <span>Owner-Operated Forklift Support</span>
        <span className="announcement-divider" aria-hidden="true">
          /
        </span>
        <span>Serving {business.location}</span>
      </div>

      <header className="site-header">
        <Link href="/" className="brand" aria-label={`${business.name} home`}>
          <span className="brand-mark">
            <Image
              src={business.logo}
              alt=""
              width={32}
              height={32}
              aria-hidden="true"
            />
          </span>
          <span className="brand-text">{business.shortName}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link${isActive ? " is-active" : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="header-actions">
          {phoneHref && (
            <a
              href={phoneHref}
              className="header-phone"
              aria-label={`Call ${business.name}`}
            >
              <span className="phone-icon" aria-hidden="true">
                📞
              </span>
              <span>{business.phone}</span>
            </a>
          )}
          <Link href="/inquiry" className="button button-header">
            <span>Request Quote</span>
            <span className="btn-arrow" aria-hidden="true">
              ↗
            </span>
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className={`bar ${open ? "bar-1-open" : ""}`} />
            <span className={`bar ${open ? "bar-2-open" : ""}`} />
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          id="mobile-navigation"
          className={`mobile-drawer${open ? " is-open" : ""}`}
          aria-hidden={!open}
        >
          <div className="mobile-drawer-inner">
            <nav className="mobile-nav" aria-label="Mobile navigation">
              {navLinks.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname?.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`mobile-nav-link${isActive ? " is-active" : ""}`}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    <span>{item.label}</span>
                    <span className="mobile-arrow" aria-hidden="true">
                      →
                    </span>
                  </Link>
                );
              })}
            </nav>

            <div className="mobile-drawer-footer">
              <Link
                href="/inquiry"
                className="button button-primary mobile-quote-btn"
                onClick={() => setOpen(false)}
              >
                Request an Equipment Quote
                <span aria-hidden="true">↗</span>
              </Link>
              {phoneHref && (
                <a href={phoneHref} className="mobile-contact-line">
                  <span>Direct Line:</span> <strong>{business.phone}</strong>
                </a>
              )}
              <p className="mobile-location-note">
                Based in {business.location} · {business.serviceArea}
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
