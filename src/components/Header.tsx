"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const links = [
  ["Platform", "#platform"],
  ["Features", "#features"],
  ["For everyone", "#portals"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 761px)");
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
    document.addEventListener("keydown", closeOnEscape);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="Nisaab360 home" onClick={() => setOpen(false)}>
          <span className="brand-icon">
            <Image src="/Logo.png" width={36} height={36} alt="" priority />
          </span>
          <span>Nisaab360</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>

        <a className="header-cta" href="#request">Request access <span aria-hidden="true">↗</span></a>
        <button
          className="menu-button"
          ref={menuButton}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls={open ? "site-mobile-nav" : undefined}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <nav id="site-mobile-nav" className="site-mobile-nav" aria-label="Mobile navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}<span>→</span></a>
          ))}
          <a href="#request" onClick={() => setOpen(false)}>Request institution access<span>→</span></a>
        </nav>
      )}
    </header>
  );
}
