"use client";
import {useEffect,useState} from "react";
import {ArrowDownRight,ArrowUpRight,ChevronLeft,ChevronRight,Linkedin,Play,Volume2,X} from "lucide-react";
import {financeLab,internship,impact,journey} from "../data/content";

const linkedin="https://www.linkedin.com/in/sahil-lodha-012a63265/";

function Img({src,alt,className="",fit="cover",rotate=false}){return <img src={src} alt={alt} className={className} style={{objectFit:fit,transform:rotate?"rotate(90deg) scale(.72)":undefined}}/>}
function Reveal({children,className=""}){return <div className={`reveal ${className}`}>{children}</div>}

export default function Portfolio(){
 const [world,setWorld]=useState(null),[fin,setFin]=useState(0),[intern,setIntern]=useState(0),[light,setLight]=useState(null),[menu,setMenu]=useState(false);
 useEffect(()=>{const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("show")),{threshold:.12});document.querySelectorAll(".reveal").forEach(x=>io.observe(x));return()=>io.disconnect()},[]);
 const go=id=>{document.getElementById(id)?.scrollIntoView({behavior:"smooth"});setMenu(false)};
 return <main>
  <nav><button className="mark" onClick={()=>go("home")}>SL.</button><div className={`navlinks ${menu?"open":""}`}>
   {["story","internship","finance","leadership","stage","offclock"].map(x=><button key={x} onClick={()=>go(x)}>{x==="offclock"?"off the clock":x}</button>)}
   <a href={linkedin} target="_blank">LinkedIn <ArrowUpRight size={13}/></a>
  </div><button className="menub" onClick={()=>setMenu(!menu)}>{menu?<X/>:<span>MENU</span>}</button></nav>

  <section id="home" className="hero">
   <div className="heroCopy"><p className="eyebrow">PORTFOLIO · 2026</p><h1>SAHIL<br/><i>LODHA</i></h1>
    <div className="heroBottom"><p>Finance & Marketing<br/>@ IMT Hyderabad</p><p className="manifesto">I analyse. I communicate.<br/>I lead. I host. I build.</p><button className="round" onClick={()=>go("story")}><ArrowDownRight/></button></div>
   </div>
   <div className="heroPortrait"><Img src="/images/journey/journey-01.jpeg" alt="Sahil Lodha professional portrait"/><span>FINANCE × MARKETING × PEOPLE</span></div>
  </section>

  <section id="story" className="chapter dark">
   <Reveal><p className="eyebrow">01 · THE STORY</p><h2>I DON'T FIT<br/>IN <i>ONE BOX.</i></h2><p className="lede">Numbers made me curious. People made me confident. A stage made me fearless. Leadership taught me that impact is rarely a solo act.</p></Reveal>
   <div className="worldGrid">
    {[["MONEY & MARKETS","finance","Research. Advisory. Wealth."],["BRANDS & IDEAS","finance","Marketing. Consumer thinking."],["PEOPLE & IMPACT","leadership","Leadership. CSR. Outreach."],["STAGE & STORIES","stage","Hosting. Dance. Energy."]].map((w,i)=><button key={w[0]} className={`world w${i}`} onMouseEnter={()=>setWorld(i)} onMouseLeave={()=>setWorld(null)} onClick={()=>go(w[1])}><small>0{i+1}</small><h3>{w[0]}</h3><p>{w[2]}</p><ArrowUpRight/></button>)}
   </div>
  </section>

  <section id="internship" className="chapter cream">
   <Reveal className="splitHead"><div><p className="eyebrow">02 · ANAND RATHI</p><h2>FROM INTERN<br/>TO <i>IMPACT.</i></h2></div><p className="lede">2.5 months. A live wealth-management desk. One question: how quickly can I become useful?</p></Reveal>
   <div className="impactTicker">{impact.map(x=><div key={x[1]}><b>{x[0]}</b><span>{x[1]}</span></div>)}</div>
   <div className="caseStudy">
    <div className="caseNav">{internship.map((x,i)=><button className={intern===i?"active":""} onClick={()=>setIntern(i)} key={x[1]}><span>{x[0]}</span>{x[1]}</button>)}</div>
    <div className="caseVisual" onClick={()=>setLight(internship[intern][4])}><Img src={internship[intern][4]} alt={internship[intern][1]} fit="contain"/><span>CLICK TO EXPAND</span></div>
    <div className="caseText"><p>{internship[intern][0]} / 06</p><h3>{internship[intern][2]}</h3><p>{internship[intern][3]}</p></div>
   </div>
   <Reveal className="dashboardFeature"><div><p className="eyebrow">THE SCOREBOARD</p><h3>₹1Cr+ business movement.<br/><i>Proof, not adjectives.</i></h3><p>A consolidated view of client engagement, portfolio work, conversions, advisory opportunities and training impact.</p></div><button onClick={()=>setLight("/images/internship/challenge-solutions.png")} className="dashImg"><Img src="/images/internship/challenge-solutions.png" alt="Internship performance dashboard" fit="contain"/><span>OPEN DASHBOARD <ArrowUpRight size={15}/></span></button></Reveal>
  </section>

  <section id="finance" className="chapter ink">
   <Reveal><p className="eyebrow">03 · FINANCE LAB</p><h2>DATA IS ONLY<br/>USEFUL WHEN IT<br/><i>CHANGES A DECISION.</i></h2></Reveal>
   <div className="lab">
    <div className="labTabs">{financeLab.map((x,i)=><button key={x[0]} onClick={()=>setFin(i)} className={fin===i?"active":""}><span>{String(i+1).padStart(2,"0")}</span>{x[0]}</button>)}</div>
    <button className="labVisual" onClick={()=>setLight(financeLab[fin][1])}><Img src={financeLab[fin][1]} alt={financeLab[fin][2]} fit="contain"/><span>EXPAND WORK <ArrowUpRight size={15}/></span></button>
    <div className="labText"><p>{financeLab[fin][0]}</p><h3>{financeLab[fin][2]}</h3><p>{financeLab[fin][3]}</p></div>
   </div>
  </section>

  <section id="leadership" className="chapter orange">
   <Reveal><p className="eyebrow">04 · LEADERSHIP & OUTREACH</p><h2>LEADERSHIP<br/>LOOKS BETTER<br/><i>IN MOTION.</i></h2></Reveal>
   <div className="editorialGrid">
    <article className="wide"><Img src="/images/events/event-outreach-coordinator.jpeg" alt="Events and outreach coordinator" fit="contain"/><div><small>EVENTS & OUTREACH</small><h3>Online. On call. On it.</h3><p>From sponsorship conversations and negotiations to event execution and outreach — the role taught me to turn coordination into ownership.</p></div></article>
    <article><Img src="/images/journey/journey-07.jpeg" alt="Student leadership"/><div><small>STUDENT COUNCIL</small><h3>Secretary, Student Council</h3><p>Grievances, administration, communication and campus-wide execution.</p></div></article>
    <article><Img src="/images/journey/journey-08.jpeg" alt="CSR initiative"/><div><small>CSR</small><h3>Impact beyond campus</h3><p>YSLP: teaching village and staff children every Sunday for three months. Anand Ka Mela: build stalls, earn, donate. Jagriti: cause-led nukkad natak.</p></div></article>
    <article className="wide rotateCard"><Img src="/images/journey/journey-09.jpeg" alt="Stall exhibition" fit="contain" rotate={true}/><div><small>BUILD → SELL → GIVE</small><h3>Anand Ka Mela</h3><p>Entrepreneurial energy with a social outcome: create our own stalls, generate profit and donate the proceeds to an NGO.</p></div></article>
   </div>
  </section>

  <section id="stage" className="chapter black">
   <Reveal><p className="eyebrow">05 · THE STAGE</p><h2>GIVE ME A MIC.<br/><i>OR A BEAT.</i></h2></Reveal>
   <div className="stageGrid">
    <div className="videoCard"><video src="/videos/impelz-hosting.mp4" controls playsInline preload="metadata"/><div><Play size={17}/><span>IMPELZ · INTER-COLLEGE FEST</span><Volume2 size={17}/></div></div>
    <article className="hostCard"><Img src="/images/hosting/hosting-coordinator.jpeg" alt="Hosting coordinator" fit="contain"/><div><small>HOSTING COORDINATOR</small><h3>Making everyone else's moment land.</h3></div></article>
    <article className="danceCard"><Img src="/images/dance/dance-trophy.jpeg" alt="Dance competition trophy"/><div><small>DANCE</small><h3>Competition. Trophy. Repeat.</h3><p>Performance is another kind of communication — timing, confidence and energy without a slide deck.</p></div></article>
   </div>
  </section>

  <section id="offclock" className="chapter travel">
   <Reveal><p className="eyebrow">06 · OFF THE CLOCK</p><h2>I COLLECT<br/><i>ALTITUDES & STORIES.</i></h2><p className="lede">Travel is not a filler hobby on my résumé. Mountains, roads and unfamiliar places are where I reset my head and widen the frame.</p></Reveal>
   <div className="travelRail">{journey.map((x,i)=><button key={x} onClick={()=>setLight(x)} className={`j${i%5}`}><Img src={x} alt={`Travel memory ${i+1}`}/><span>{String(i+1).padStart(2,"0")}</span></button>)}</div>
  </section>

  <section className="chapter contact">
   <p className="eyebrow">07 · LET'S CONNECT</p><h2>FINANCE BRAIN.<br/>MARKETING CURIOSITY.<br/><i>STAGE ENERGY.</i></h2>
   <a href={linkedin} target="_blank" className="connect">Find me on LinkedIn <Linkedin/><ArrowUpRight/></a><p className="footer">SAHIL LODHA · IMT HYDERABAD · 2026</p>
  </section>

  {light&&<div className="lightbox" onClick={()=>setLight(null)}><button><X/></button><Img src={light} alt="Expanded portfolio work" fit="contain"/></div>}
 </main>
}