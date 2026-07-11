
import Image from "next/image";
import Nav from "../components/Nav";
import Reveal from "../components/Reveal";
import { linkedin, lanes, projects, thoughts } from "../data/content";

const moments = ["02","04","05","07","10","11","13","14"];

export default function Home() {
  return (
    <main id="top">
      <Nav />

      <section className="v2Hero">
        <div className="v2HeroPhoto">
          <Image src="/images/journey/journey-15.jpeg" alt="Sahil Lodha" fill priority />
        </div>
        <div className="v2HeroShade" />
        <div className="v2Topline"><span>SAHIL LODHA · PORTFOLIO</span><span>HYDERABAD / INDIA</span></div>
        <div className="v2HeroCopy">
          <p>FINANCE BRAIN. MARKETING CURIOSITY.</p>
          <h1>USUALLY SOMEWHERE<br/><em>NEAR A MIC.</em></h1>
          <div className="v2HeroFoot">
            <span>Finance × Marketing × People</span>
            <a href="#story">SCROLL TO KNOW THE GUY BEHIND THE CV ↓</a>
          </div>
        </div>
        <div className="floatWord fw1">FINANCE</div>
        <div className="floatWord fw2">MARKETING</div>
        <div className="floatWord fw3">HOST</div>
        <div className="floatWord fw4">LEADER</div>
        <div className="floatWord fw5">TRAVELLER</div>
      </section>

      <section id="story" className="v2Intro">
        <Reveal>
          <span className="v2Index">01 / SO, WHAT DO I ACTUALLY DO?</span>
          <h2>I LIKE BEING WHERE<br/><em>ANALYSIS MEETS PEOPLE.</em></h2>
          <p className="v2Lead">Finance made me look closer at the numbers. Marketing made me ask why people choose what they choose. Everything else taught me how to bring people along.</p>
        </Reveal>
        <div className="laneGrid">
          {lanes.map((lane) => (
            <Reveal className="lane" key={lane.number}>
              <Image src={lane.image} alt="" fill />
              <div className="laneShade" />
              <span>{lane.number}</span>
              <div><p>{lane.verb}</p><h3>{lane.title}</h3><small>{lane.copy}</small></div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="finmark" className="financeStory">
        <div className="financeSticky">
          <Reveal>
            <span className="v2Index light">02 / THE FINANCE SIDE OF ME</span>
            <h2>MY SUMMER WASN'T<br/>SPENT <em>OBSERVING.</em></h2>
            <p>70,056 AP records. Client calls. Portfolio conversations. SIPs. PMS. B2B business development.</p>
            <p className="financePunch">Data showed me where the opportunity was.<br/><strong>People showed me whether it would convert.</strong></p>
          </Reveal>
        </div>
        <div className="financeCards">
          <Reveal className="corporateShot"><Image src="/images/internship/fm-session.jpeg" alt="Presenting at Anand Rathi" width={1300} height={900}/><span>ANAND RATHI · 2026</span></Reveal>
          {projects.map(([big, label, copy, image], i) => (
            <Reveal className="financeCard" key={big+label}>
              <div className="financeVisual"><Image src={image} alt={copy} fill /></div>
              <span>0{i+1}</span><strong>{big}</strong><h3>{label}</h3><p>{copy}</p>
            </Reveal>
          ))}
          <Reveal className="lorCallout">
            <p>THE RECEIPTS</p>
            <h3>200+ portfolio reviews.<br/>500+ client interactions.</h3>
            <a href="/documents/anand-rathi-lor.pdf" target="_blank">VIEW MY ANAND RATHI LOR ↗</a>
          </Reveal>
        </div>
      </section>

      <section id="hosting" className="micStory">
        <Reveal className="micHeading">
          <span className="v2Index light">03 / THE MIC</span>
          <h2>SOMEHOW, I ALWAYS<br/><em>FIND THE MIC.</em></h2>
        </Reveal>
        <div className="impelzFilm">
          <video autoPlay muted loop playsInline src="/videos/impelz-hosting.mp4" />
          <div className="filmShade"/>
          <div className="filmCopy"><span>IMPELZ · INTER-COLLEGE FEST</span><h3>THE BIGGEST STAGE<br/>I'D HOSTED.</h3><p>And then the mic was live.</p></div>
        </div>
        <div className="hostAfter">
          <Reveal className="roleGraphic"><Image src="/images/hosting/hosting-coordinator.jpeg" alt="Hosting Coordinator" width={900} height={1100}/></Reveal>
          <Reveal className="hostCopy"><p>FROM HOLDING THE MIC</p><h3>to building the team behind it.</h3><p>The stage taught me how to read a room, think on my feet and keep moving when the script doesn't.</p></Reveal>
        </div>
      </section>

      <section id="leadership" className="leadStory">
        <Reveal>
          <span className="v2Index">04 / LEADERSHIP, MINUS THE BUZZWORDS</span>
          <h2>THE VISIBLE TEN MINUTES<br/>USUALLY NEED <em>TEN HOURS.</em></h2>
        </Reveal>
        <div className="leadStoryGrid">
          <Reveal className="outreachGraphic"><Image src="/images/events/event-outreach-coordinator.jpeg" alt="Events and Outreach Coordinator" width={900} height={1100}/></Reveal>
          <Reveal className="leadManifesto">
            <p>Sometimes leadership looked like an event plan.</p>
            <p>Sometimes a sponsorship conversation.</p>
            <p>Sometimes teaching every Sunday for three months.</p>
            <p>And sometimes solving a campus problem at 2 AM.</p>
            <strong>Today: Secretary, Student Council · IMT Hyderabad.</strong>
          </Reveal>
        </div>
        <Reveal className="rolePath">
          <span>HOSTING COORDINATOR</span><i>→</i><span>EVENTS & OUTREACH</span><i>→</i><span>STUDENT COUNCIL</span><i>→</i><b>SECRETARY</b>
        </Reveal>
      </section>

      <section id="work" className="finmarkStory">
        <Reveal>
          <span className="v2Index light">05 / FIN × MARK</span>
          <h2>I STARTED WITH NUMBERS.<br/>THEN GOT CURIOUS ABOUT <em>CHOICES.</em></h2>
        </Reveal>
        <div className="finmarkSplit">
          <div className="finPanel">
            <span>FIN</span><h3>What does the data say?</h3>
            <p>Markets · Portfolio Management · Wealth · Research</p>
            <Image src="/images/finance/technical-analysis.png" alt="Finance work" width={1200} height={700}/>
          </div>
          <div className="markPanel">
            <span>MARK</span><h3>Why do people care?</h3>
            <p>Consumer Thinking · Communication · Outreach · Pitches</p>
            <blockquote>“A number can make the case. A narrative can make it stick.”</blockquote>
          </div>
        </div>
      </section>

      <section className="writingStory">
        <Reveal>
          <span className="v2Index">06 / NOTES FROM MY HEAD</span>
          <h2>I WRITE ABOUT THINGS<br/><em>I END UP OVERTHINKING.</em></h2>
        </Reveal>
        <div className="thoughtList">
          {thoughts.map(([tag,title],i)=><Reveal className="thoughtRow" key={title}><span>0{i+1} · {tag}</span><h3>{title}</h3><b>SOON ↗</b></Reveal>)}
        </div>
        <a className="linkedinCTA" href={linkedin} target="_blank">FIND ME ON LINKEDIN ↗</a>
      </section>

      <section id="offclock" className="offStory">
        <Reveal>
          <span className="v2Index light">07 / OFF THE CLOCK</span>
          <h2>MY ENTIRE PERSONALITY<br/>ISN'T <em>EXCEL.</em></h2>
        </Reveal>
        <div className="travelMoment">
          <Image src="/images/journey/journey-16.jpeg" alt="Sahil travelling in the mountains" fill />
          <div className="travelShade"/>
          <div><span>TRAVELLING</span><h3>IF THERE'S A MOUNTAIN,<br/>I'M PROBABLY GOING.</h3></div>
        </div>
        <div className="danceMoment">
          <Reveal className="dancePhoto"><Image src="/images/dance/dance-trophy.jpeg" alt="Dance competition trophy" width={1000} height={1200}/></Reveal>
          <Reveal className="danceCopy"><span>DANCING</span><h3>A TROPHY<br/><em>OR FOUR.</em></h3><p>Sometimes I stop analysing and simply perform. Competitive enough to enjoy the stage. Lucky enough to bring a few trophies back.</p></Reveal>
        </div>
        <div className="momentWall">
          {moments.map((n,i)=><Reveal className={`moment m${i+1}`} key={n}><Image src={`/images/journey/journey-${n}.jpeg`} alt="A moment from Sahil's journey" width={700} height={900}/></Reveal>)}
        </div>
      </section>

      <footer className="v2Footer">
        <Reveal>
          <span className="v2Index light">08 / FOR NOW</span>
          <h2>STILL FIGURING OUT<br/>THE EXACT TITLE.</h2>
          <p>Pretty clear about the direction.</p>
          <strong>FINANCE × MARKETING × PEOPLE</strong>
          <div className="v2Links">
            <a href={linkedin} target="_blank">LINKEDIN ↗</a>
            <a href="mailto:YOUR-EMAIL-HERE">LET'S TALK ↗</a>
            <a href="/documents/anand-rathi-lor.pdf" target="_blank">LOR ↗</a>
          </div>
          <small>© 2026 SAHIL LODHA · BUILT FROM MORE PHOTOS THAN STRICTLY NECESSARY.</small>
        </Reveal>
      </footer>
    </main>
  );
}
