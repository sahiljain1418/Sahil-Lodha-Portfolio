"use client";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Story", "#story"], ["FinMark", "#finmark"], ["Internship", "#internship"],
    ["Leadership", "#leadership"], ["Work", "#work"], ["Off the clock", "#offclock"]
  ];
  return (
    <nav className="nav">
      <a className="monogram" href="#top">SL.</a>
      <button className="menuButton" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {open ? "CLOSE" : "MENU"}
      </button>
      <div className={`navLinks ${open ? "open" : ""}`}>
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      </div>
    </nav>
  );
}
