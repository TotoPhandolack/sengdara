"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#why-choose-us", label: "About" },
  { href: "#trainers-gallery", label: "Services" },
  { href: "#footer", label: "Contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#hero");

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

      <nav className={`hero__links ${open ? "open" : ""}`}>
        {LINKS.map((link) => (
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

      <a href="#pricing" className="btn btn--white btn--sm hero__join">
        Join Now
      </a>
    </div>
  );
}
