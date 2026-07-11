import Image from "next/image";
import Nav from "../components/Nav";
import Reveal from "../components/Reveal";
import { projects, posts, wins } from "../data/content";

const journeyPhotos = [
  "/images/journey/journey-01.jpeg",
  "/images/journey/journey-03.jpeg",
  "/images/journey/journey-06.jpeg",
  "/images/journey/journey-09.jpeg",
  "/images/journey/journey-12.jpeg",
  "/images/journey/journey-15.jpeg"
];

export default function Home() {
  return (
    <main id="top">
      <Nav />

      <section className="hero">
        <div className="grain" />
        <div className="heroEyebrow">PORTFOLIO · 2026</div>
        <h1><span>SAHIL</span><span>LODHA</span></h1>
        <div className="heroBottom">
          <p>Finance & Marketing @ IMT Hyderabad</p>
          <p className="heroStatement">I analyse. I communicate.<br />I lead. I host. I build.</p>
          <a href="#story" className="roundLink">EXPLORE<br />↓</a>
        </div>
      </section>

      <section id="story" className="section intro">
        <Reveal>
          <p className="kicker">01 · THE INTRODUCTION</p>
          <h2>I NEVER REALLY<br /><em>PICKED ONE LANE.</em></h2>
        </Reveal>
        <div className="introGrid">
          <Reveal className="introCopy">
            <p>Finance taught me to look at the numbers. Marketing made me curious about the people behind them.</p>
            <p>Leadership taught me that neither matters if you cannot bring people together.</p>
            <p>Somewhere along the way, I also found a mic, a dance floor and a serious love for travelling.</p>
            <strong>So, this website is a little bit of all of that.</strong>
          </Reveal>
          <Reveal className="portraitStack">
            <Image src="/images/journey/journey-15.jpeg" alt="Sahil during his journey" width={900} height={1200} className="portrait" />
            <div className="stamp">CURIOUS<br />BY DEFAULT</div>
          </Reveal>
        </div>
      </section>

      <section className="ticker" aria-label="Areas of interest">
        <div>FINANCE ✦ MARKETING ✦ LEADERSHIP ✦ HOSTING ✦ TRAVEL ✦ FINANCE ✦ MARKETING ✦ LEADERSHIP ✦ HOSTING ✦ TRAVEL ✦</div>
      </section>

      <section className="section journey">
        <Reveal>
          <p className="kicker">02 · MY JOURNEY, SO FAR</p>
          <h2>FROM FINDING MY VOICE<br />TO <em>USING IT.</em></h2>
        </Reveal>
        <div className="photoRail">
          {journeyPhotos.map((src, i) => (
            <Reveal key={src} className={`railPhoto r${i + 1}`}>
              <Image src={src} alt={`Journey moment ${i + 1}`} width={900} height={1100} />
              <span>{String(i + 1).padStart(2, "0")}</span>
            </Reveal>
          ))}
        </div>
        <Reveal className="journeyText">
          <div><span>SBSC</span><h3>Where I found my voice.</h3></div>
          <p>Presentations, competitions and stages slowly turned public speaking from something I did into something I genuinely enjoyed.</p>
          <div><span>IMT HYDERABAD</span><h3>New city. Bigger stages.</h3></div>
          <p>And apparently, a lot more formal suits. IMT became the place where finance, marketing, events and leadership started colliding.</p>
        </Reveal>
      </section>

      <section id="finmark" className="finmark">
        <Reveal className="finmarkHead">
          <p className="kicker light">03 · FIN × MARK</p>
          <h2>NUMBERS MEET<br /><em>NARRATIVES.</em></h2>
        </Reveal>
        <div className="split">
          <Reveal className="financeSide">
            <span className="giant">FIN</span>
            <p className="sideLabel">FINANCE</p>
            <h3>I like finding the story hidden in numbers.</h3>
            <p>Financial markets, wealth products, portfolio conversations, research and data-led business opportunities.</p>
            <Image src="/images/finance/nse-broker-dashboard.png" alt="NSE broker dashboard project" width={1200} height={675} />
          </Reveal>
          <Reveal className="marketingSide">
            <span className="giant">MARK</span>
            <p className="sideLabel">MARKETING</p>
            <h3>And understanding why people care.</h3>
            <p>Consumer thinking, communication, outreach, sponsorship conversations and the psychology behind a good pitch.</p>
            <div className="markQuote">“A number can make the case.<br />A narrative can make it stick.”</div>
          </Reveal>
        </div>
      </section>

      <section id="internship" className="section internship">
        <Reveal>
          <p className="kicker">04 · CORPORATE CHAPTER</p>
          <h2>THEN I PUT ON THE<br /><em>CORPORATE SHIRT.</em></h2>
        </Reveal>
        <div className="internshipHero">
          <Reveal className="bigPhoto">
            <Image src="/images/internship/fm-session.jpeg" alt="Presenting during the Anand Rathi internship" width={1600} height={1000} />
          </Reveal>
          <Reveal className="internshipCopy">
            <p className="company">ANAND RATHI SHARE AND STOCK BROKERS LTD.</p>
            <h3>From datasets to client conversations.</h3>
            <p>My internship took finance out of the classroom and into B2B business development, portfolio reviews, investment-product conversations and market research.</p>
            <p className="line">Data taught me where the opportunities were.<br /><strong>Conversations taught me how difficult it is to actually convert one.</strong></p>
            <a className="textLink" href="/documents/anand-rathi-lor.pdf" target="_blank">VIEW LETTER OF RECOMMENDATION ↗</a>
          </Reveal>
        </div>
        <div className="metrics">
          <Reveal><strong>70K+</strong><span>AP records analysed</span></Reveal>
          <Reveal><strong>200+</strong><span>portfolio reviews*</span></Reveal>
          <Reveal><strong>500+</strong><span>client interactions*</span></Reveal>
          <Reveal><strong>B2B</strong><span>business development</span></Reveal>
        </div>
        <p className="metricNote">*As stated in my Anand Rathi letter of recommendation.</p>
        <div className="internshipStrip">
          {[
            ["/images/internship/client-calling.jpeg","CLIENT CONVERSATIONS"],
            ["/images/internship/operations-session.jpeg","PRESENTING IDEAS"],
            ["/images/internship/working-photo.jpeg","THE WORK"],
            ["/images/internship/appreciation-certificate.jpeg","THE RECOGNITION"]
          ].map(([src,label]) => (
            <Reveal className="stripCard" key={src}>
              <Image src={src} alt={label} width={900} height={700} />
              <span>{label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="leadership" className="leadership">
        <div className="section">
          <Reveal>
            <p className="kicker light">05 · LEADERSHIP</p>
            <h2>LEADERSHIP IS MOSTLY<br /><em>WHATSAPP AT 2 AM.</em></h2>
          </Reveal>
          <div className="leadGrid">
            <Reveal className="leadImage">
              <Image src="/images/journey/journey-08.jpeg" alt="Student leadership journey" width={1300} height={900} />
            </Reveal>
            <Reveal className="leadCopy">
              <p>Somewhere between meetings, events, student concerns, last-minute calls and messages beginning with “urgent”, I discovered what leadership actually looks like.</p>
              <h3>Secretary<br />Student Council<br />IMT Hyderabad</h3>
              <div className="pillWrap">
                {["Student Representation","Stakeholder Communication","Campus Initiatives","Event Coordination","Team Leadership"].map(x => <span key={x}>{x}</span>)}
              </div>
            </Reveal>
          </div>
          <Reveal className="progression">
            <div><b>01</b><span>HOSTING<br />COORDINATOR</span></div>
            <i>→</i>
            <div><b>02</b><span>EVENT & OUTREACH<br />COORDINATOR</span></div>
            <i>→</i>
            <div><b>03</b><span>STUDENT<br />COUNCIL</span></div>
            <i>→</i>
            <div><b>04</b><span>SECRETARY</span></div>
          </Reveal>
        </div>
      </section>

      <section className="stage">
        <Reveal>
          <p className="kicker light">06 · THE STAGE</p>
          <h2>SOMEHOW, I KEPT<br /><em>FINDING A MIC.</em></h2>
          <p className="stageCopy">From classrooms to auditoriums and eventually IMPELz, hosting became one of the most exciting parts of my journey. The stage taught me how to read a room, think on my feet and keep going when the script doesn't.</p>
        </Reveal>
        <Reveal className="videoPlaceholder">
          <div>
            <span>IMPELz · HOSTING FILM</span>
            <strong>VIDEO SLOT READY</strong>
            <p>Add <code>public/videos/impelz-hosting.mp4</code> and this block can be replaced with the video.</p>
          </div>
        </Reveal>
      </section>

      <section id="work" className="section work">
        <Reveal>
          <p className="kicker">07 · SELECTED WORK</p>
          <h2>YES, I ACTUALLY<br /><em>LIKE PRESENTATIONS.</em></h2>
        </Reveal>
        <div className="projectGrid">
          {projects.map(project => (
            <Reveal className="projectCard" key={project.no}>
              <div className="projectImage"><Image src={project.image} alt={project.title} width={1200} height={675} /></div>
              <div className="projectMeta"><span>{project.no}</span><span>{project.tag}</span></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="thoughts">
        <div className="section">
          <Reveal>
            <p className="kicker light">08 · WRITINGS</p>
            <h2>THOUGHTS & THINGS<br /><em>I OVERTHINK.</em></h2>
            <p className="thoughtIntro">A growing archive for Finance, Marketing, leadership and whatever I am currently thinking about. Add your LinkedIn links in <code>data/content.js</code>.</p>
          </Reveal>
          <div className="postGrid">
            {posts.map((post, i) => (
              <Reveal className="post" key={post.title}>
                <span>0{i + 1} · {post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.note}</p>
                <b>COMING SOON ↗</b>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="offclock" className="section offclock">
        <Reveal>
          <p className="kicker">09 · OFF THE CLOCK</p>
          <h2>BECAUSE LIFE WOULD BE BORING<br />IF MY ENTIRE PERSONALITY WAS <em>EXCEL.</em></h2>
        </Reveal>
        <div className="offGrid">
          <Reveal className="travelCard">
            <Image src="/images/journey/journey-16.jpeg" alt="Travelling in the mountains" width={1200} height={1500} />
            <div><span>TRAVELLING</span><h3>Sometimes, the best plans are the ones I don't make.</h3></div>
          </Reveal>
          <Reveal className="hobbyText">
            <div><span>DANCING</span><h3>Competitive enough to somehow come back with trophies.</h3><p>Dance trophy photo slot is ready in <code>public/images/dance/</code>.</p></div>
            <div><span>HOSTING</span><h3>Give me a mic. We'll figure out the script later.</h3></div>
            <div><span>PEOPLE & EXPERIENCES</span><h3>Most of my best stories involve people I didn't know a year before.</h3></div>
          </Reveal>
        </div>
        <div className="polaroids">
          {["02","04","05","07","10","11","13","14"].map((n,i) => (
            <Reveal className={`polaroid p${i+1}`} key={n}>
              <Image src={`/images/journey/journey-${n}.jpeg`} alt="Life outside work" width={700} height={900} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="wins">
        <div className="section">
          <Reveal>
            <p className="kicker light">10 · MILESTONES</p>
            <h2>A FEW WINS<br /><em>ALONG THE WAY.</em></h2>
          </Reveal>
          <div className="winList">
            {wins.map((win, i) => <Reveal key={win} className="win"><span>0{i+1}</span><h3>{win}</h3><b>↗</b></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section now">
        <Reveal>
          <p className="kicker">11 · RIGHT NOW</p>
          <h2>WHAT I'M<br /><em>UP TO NOW.</em></h2>
        </Reveal>
        <div className="nowGrid">
          <Reveal><span>01</span><p>Majoring in <strong>Finance & Marketing</strong> at IMT Hyderabad.</p></Reveal>
          <Reveal><span>02</span><p>Serving as <strong>Secretary of the Student Council.</strong></p></Reveal>
          <Reveal><span>03</span><p>Building a space to write about <strong>FinMark, leadership and experiences.</strong></p></Reveal>
          <Reveal><span>04</span><p>Exploring opportunities across <strong>wealth, markets and client-facing finance.</strong></p></Reveal>
        </div>
      </section>

      <footer className="footer">
        <Reveal>
          <p className="kicker light">THE CLOSING NOTE</p>
          <h2>STILL FIGURING IT OUT.<br /><em>ENJOYING THE JOURNEY.</em></h2>
          <p className="closing">Finance fascinates me. Marketing keeps me curious. Leadership challenges me. The stage energises me.</p>
          <div className="footerLinks">
            <a href="#" title="Replace with your LinkedIn URL">LINKEDIN ↗</a>
            <a href="mailto:YOUR-EMAIL-HERE">EMAIL ↗</a>
            <a href="/documents/anand-rathi-lor.pdf" target="_blank">LOR ↗</a>
          </div>
          <div className="copyright"><span>© 2026 SAHIL LODHA</span><span>Built with an unreasonable number of photos.</span></div>
        </Reveal>
      </footer>
    </main>
  );
}
