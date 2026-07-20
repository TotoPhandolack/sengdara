"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "../../i18n/LanguageProvider";
import LanguageToggle from "../../i18n/LanguageToggle";

export default function NavBar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#hero");

  const links = [
    { href: "#hero", label: t.nav.home },
    { href: "#why-choose-us", label: t.nav.about },
    { href: "#trainers-gallery", label: t.nav.services },
    { href: "#footer", label: t.nav.contact },
  ];

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[id], footer[id]")
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="hero__nav">
      <a className="logo" href="#hero">
        <Image
          src="/images/logo.png"
          alt="Sengdara Fitness"
          width={2398}
          height={1792}
          className="logo__img"
          priority
        />
      </a>

      <nav className={`hero__links ${open ? "open" : ""}`}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={active === link.href ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="hero__nav-right">
        <LanguageToggle />

        <a href="#pricing" className="btn btn--white btn--sm hero__join">
          {t.nav.join}
        </a>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  );
}
