"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header({ mediaHref }: { mediaHref: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="utility-bar">
        <span>Columbus, Ohio</span>
        <span>Serving clients in 12 states</span>
        <a href="tel:6142146668">(614) 214-6668</a>
      </div>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="McCanney Capital home">
          <span className="brand-mark">M</span>
          <span><strong>McCanney Capital</strong><small>Retirement + risk strategy</small></span>
        </Link>
        <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">Menu</button>
        <nav className={open ? "main-nav open" : "main-nav"} aria-label="Primary navigation">
          <Link href="/services" onClick={() => setOpen(false)}>How we help</Link>
          <Link href="/process" onClick={() => setOpen(false)}>The process</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About Mark</Link>
          <Link href="/tools" onClick={() => setOpen(false)}>Answer lab</Link>
          <a href={mediaHref} target="_blank" rel="noreferrer">Media ↗</a>
          <Link className="nav-cta" href="/contact" onClick={() => setOpen(false)}>Start with a question</Link>
        </nav>
      </header>
    </>
  );
}
