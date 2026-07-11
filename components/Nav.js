
"use client";
import { useState } from "react";
export default function Nav(){
  const [open,setOpen]=useState(false);
  const links=[["Story","#story"],["Finance","#finmark"],["The Mic","#hosting"],["Leadership","#leadership"],["FinMark","#work"],["Off the clock","#offclock"]];
  return <nav className="nav"><a className="monogram" href="#top">SL.</a><button className="menuButton" onClick={()=>setOpen(!open)}>{open?"CLOSE":"MENU"}</button><div className={`navLinks ${open?"open":""}`}>{links.map(([l,h])=><a key={h} href={h} onClick={()=>setOpen(false)}>{l}</a>)}</div></nav>
}
