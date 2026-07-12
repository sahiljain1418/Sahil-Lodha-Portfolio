"use client";

import { useState } from "react";

const paths = [
  {
    id: "finance",
    number: "01",
    title: "THE FINANCE GUY",
    subtitle: "Markets. Portfolios. Conversion.",
    description:
      "Finance & Marketing major with hands-on exposure to wealth management, B2B advisory and portfolio conversations.",
    stat: "₹1Cr+",
    statText: "business impact supported in 2.5 months",
    target: "finance",
  },
  {
    id: "leader",
    number: "02",
    title: "THE COUNCIL GUY",
    subtitle: "Lead. Coordinate. Solve.",
    description:
      "Secretary of the Student Council at IMT Hyderabad — working across students, administration, events and campus operations.",
    stat: "Secretary",
    statText: "Student Council · IMT Hyderabad",
    target: "leadership",
  },
  {
    id: "stage",
    number: "03",
    title: "THE STAGE GUY",
    subtitle: "Mic on. Crowd up.",
    description:
      "Host, dancer and event professional. From coordinating hosts to taking the stage at IMPELZ.",
    stat: "IMPELZ",
    statText: "hosting · performance · events",
    target: "stage",
  },
  {
    id: "marketing",
    number: "04",
    title: "THE MARKETING GUY",
    subtitle: "Stories. Strategy. People.",
    description:
      "Exploring the intersection of finance and marketing — where numbers meet communication and consumer behaviour.",
    stat: "FinMark",
    statText: "finance × marketing",
    target: "marketing",
  },
];

const metrics = [
  ["300+", "Client Interactions", "Conversations across advisory and B2B relationships."],
  ["120+", "Portfolios Reviewed", "Portfolio-level review and opportunity identification."],
  ["₹50L", "PMS Pipeline", "Potential PMS business pipeline generated."],
  ["₹25L", "PMS Top-Up", "PMS top-up opportunity supported."],
  ["₹20L", "Portfolio Shift", "Portfolio restructuring opportunity identified."],
  ["₹7.1L", "Lump Sum", "Lump-sum investment business supported."],
  ["₹5L", "RIA Closure", "Fee advisory closure contribution."],
  ["26", "SIP Registrations", "Systematic investment registrations."],
  ["₹1.20L", "Monthly SIP Book", "Monthly SIP book generated."],
  ["16", "Commodity Conversions", "Commodity segment client conversions."],
  ["₹3L", "Commodity Revenue", "Revenue opportunity through commodity conversions."],
  ["20", "Reactivations", "Dormant account reactivations."],
  ["₹30K", "Reactivation Revenue", "Revenue generated through reactivation efforts."],
  ["4.82/5", "Training Rating", "Rating received for a Pan-India B2B training session."],
];

const leadership = [
  {
    year: "NOW",
    role: "SECRETARY",
    organisation: "Student Council · IMT Hyderabad",
    copy:
      "From representing student concerns to coordinating with administration — leadership became less about the title and more about being available when something needed to move.",
  },
  {
    year: "2025",
    role: "JUNIOR STUDENT COUNCIL",
    organisation: "IMT Hyderabad",
    copy:
      "Campus operations, grievance coordination, event execution and the unplanned situations that never make it to a calendar.",
  },
  {
    year: "CSR",
    role: "PAHEL",
    organisation: "YSLP · Anand Ka Mela · Jagriti",
    copy:
      "Teaching children every Sunday for three months, building fundraising stalls and using street theatre to communicate causes.",
  },
];

const stageModes = {
  host: {
    eyebrow: "HOSTING MODE",
    title: "GIVE ME THE MIC.",
    copy:
      "Hosting is not about getting attention. It is about making sure every performer, speaker and moment lands with the audience.",
    image: "/hosting-coordinator.jpeg",
  },
  outreach: {
    eyebrow: "EVENTS MODE",
    title: "ONLINE. ON CALL. ON IT.",
    copy:
      "Events and outreach taught me sponsorship conversations, coordination, negotiation and how to keep moving when the plan changes.",
    image: "/events-outreach.jpeg",
  },
  dance: {
    eyebrow: "PERFORMANCE MODE",
    title: "AND SOMETIMES, I DANCE.",
    copy:
      "Competitive dance is the part of my portfolio that refuses to fit into an Excel sheet. The trophies help explain it.",
    image: "/dance-trophy.jpeg",
  },
};

export default function Home() {
  const [selectedPath, setSelectedPath] = useState(null);
  const [selectedMetric, setSelectedMetric] = useState(null);
  const [stageMode, setStageMode] = useState("host");

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const choosePath = (path) => {
    setSelectedPath(path.id);
    scrollTo(path.target);
  };

  return (
    <main>
      <nav className="nav">
        <button className="logo" onClick={() => scrollTo("home")}>
          SL.
        </button>

        <div className="navLinks">
          <button onClick={() => scrollTo("finance")}>FINANCE</button>
          <button onClick={() => scrollTo("leadership")}>LEADERSHIP</button>
          <button onClick={() => scrollTo("stage")}>STAGE</button>
          <button onClick={() => scrollTo("off-clock")}>OFF THE CLOCK</button>
        </div>

        <a
          className="navLinkedin"
          href="https://www.linkedin.com/in/sahil-lodha-012a63265/"
          target="_blank"
          rel="noreferrer"
        >
          LINKEDIN ↗
        </a>
      </nav>

      <section className="hero" id="home">
        <div className="heroPhotoWrap">
          <img
            className="heroPhoto"
            src="/profile-formal.jpeg"
            alt="Sahil Lodha"
          />
          <div className="heroPhotoShade" />
        </div>

        <div className="heroTop">
          <span>PORTFOLIO · 2026</span>
          <span>FINANCE × MARKETING</span>
        </div>

        <div className="heroContent">
          <p className="heroIntro">HI, I AM</p>

          <h1>
            SAHIL
            <br />
            <span>LODHA.</span>
          </h1>

          <div className="heroBottom">
            <p>
              I ANALYSE. I COMMUNICATE.
              <br />
              I LEAD. I HOST. I BUILD.
            </p>

            <button className="roundButton" onClick={() => scrollTo("choose")}>
              EXPLORE
              <span>↓</span>
            </button>
          </div>
        </div>

        <div className="scrollLabel">SCROLL TO MEET THE DIFFERENT SAHILS ↓</div>
      </section>

      <section className="chooseSection" id="choose">
        <div className="sectionIntro">
          <span>01 / CHOOSE YOUR ROUTE</span>
          <h2>
            WHICH SAHIL
            <br />
            DO YOU WANT TO MEET?
          </h2>
          <p>
            This is not a résumé in website form. Pick a side of my work and
            enter from there.
          </p>
        </div>

        <div className="pathGrid">
          {paths.map((path) => (
            <button
              key={path.id}
              className={`pathCard ${
                selectedPath === path.id ? "active" : ""
              }`}
              onClick={() => choosePath(path)}
            >
              <div className="pathNumber">{path.number}</div>

              <div>
                <span className="pathSubtitle">{path.subtitle}</span>
                <h3>{path.title}</h3>
                <p>{path.description}</p>
              </div>

              <div className="pathStat">
                <strong>{path.stat}</strong>
                <span>{path.statText}</span>
              </div>

              <div className="pathArrow">↗</div>
            </button>
          ))}
        </div>
      </section>

      <section className="financeSection" id="finance">
        <div className="financeHeading">
          <span>02 / FINANCE TERMINAL</span>
          <h2>THE NUMBERS HAVE A STORY.</h2>
          <p>
            My internship at Anand Rathi moved from learning products to
            reviewing portfolios, speaking with clients, supporting conversion
            opportunities and training the B2B network.
          </p>
        </div>

        <div className="terminal">
          <div className="terminalTop">
            <div>
              <span className="terminalLive">● LIVE CASE FILE</span>
              <h3>INTERNSHIP PERFORMANCE</h3>
            </div>

            <div className="terminalCompany">
              ANAND RATHI
              <span>BUSINESS DEVELOPMENT · B2B</span>
            </div>
          </div>

          <div className="terminalHero">
            <div>
              <span>2.5 MONTHS</span>
              <strong>₹1Cr+</strong>
              <p>BUSINESS IMPACT SUPPORTED / OPPORTUNITIES GENERATED</p>
            </div>

            <div className="terminalInstruction">
              CLICK ANY METRIC
              <span>TO OPEN THE STORY ↘</span>
            </div>
          </div>

          <div className="metricGrid">
            {metrics.map((metric) => (
              <button
                className="metric"
                key={metric[1]}
                onClick={() => setSelectedMetric(metric)}
              >
                <strong>{metric[0]}</strong>
                <span>{metric[1]}</span>
                <small>OPEN +</small>
              </button>
            ))}
          </div>
        </div>

        <div className="financeProof">
          <div className="proofImage">
            <img
              src="/internship-dashboard.jpeg"
              alt="Internship performance dashboard"
            />
          </div>

          <div className="proofCopy">
            <span>THE DASHBOARD</span>
            <h3>FROM CALLS TO CONVERSIONS.</h3>
            <p>
              A visual snapshot of my internship outcomes across portfolio
              reviews, PMS opportunities, SIPs, commodity conversions,
              reactivations and training.
            </p>

            <button onClick={() => setSelectedMetric(metrics[0])}>
              EXPLORE PERFORMANCE ↗
            </button>
          </div>
        </div>

        <div className="trainingBlock">
          <div>
            <span>B2B KNOWLEDGE EXPRESS</span>
            <h3>I DIDN&apos;T JUST LEARN. I TAUGHT.</h3>
            <p>
              I conducted a Pan-India B2B training session and received a
              4.82/5 rating. Training became another proof that finance only
              creates value when you can communicate it clearly.
            </p>

            <div className="rating">
              <strong>4.82</strong>
              <span>/ 5 TRAINING RATING</span>
            </div>
          </div>

          <div className="trainingPhoto">
            <img src="/training.jpeg" alt="B2B training session" />
          </div>
        </div>
      </section>

      <section className="leadershipSection" id="leadership">
        <div className="leadershipTitle">
          <span>03 / LEADERSHIP</span>
          <h2>
            TITLES ARE SHORT.
            <br />
            RESPONSIBILITY ISN&apos;T.
          </h2>
        </div>

        <div className="timeline">
          {leadership.map((item, index) => (
            <article className="timelineItem" key={item.role}>
              <div className="timelineNumber">0{index + 1}</div>

              <div className="timelineYear">{item.year}</div>

              <div className="timelineRole">
                <h3>{item.role}</h3>
                <span>{item.organisation}</span>
              </div>

              <p>{item.copy}</p>
            </article>
          ))}
        </div>

        <div className="leadershipGallery">
          <figure className="galleryWide">
            <img
              src="/coordinators.jpeg"
              alt="Student coordinators"
              className="containImage"
            />
            <figcaption>COORDINATION / PEOPLE / EXECUTION</figcaption>
          </figure>

          <figure>
            <img src="/csr.jpeg" alt="CSR initiative" />
            <figcaption>CSR / PAHEL / YSLP</figcaption>
          </figure>

          <figure>
            <img
              src="/stall-exhibition.jpeg"
              alt="Stall exhibition"
              className="rotateImage"
            />
            <figcaption>ANAND KA MELA / FUNDRAISING</figcaption>
          </figure>
        </div>
      </section>

      <section className="stageSection" id="stage">
        <div className="stageHeader">
          <span>04 / STAGE & EVENTS</span>
          <h2>THERE IS ANOTHER SIDE.</h2>
        </div>

        <div className="modeButtons">
          <button
            className={stageMode === "host" ? "active" : ""}
            onClick={() => setStageMode("host")}
          >
            HOST
          </button>
          <button
            className={stageMode === "outreach" ? "active" : ""}
            onClick={() => setStageMode("outreach")}
          >
            EVENTS
          </button>
          <button
            className={stageMode === "dance" ? "active" : ""}
            onClick={() => setStageMode("dance")}
          >
            DANCE
          </button>
        </div>

        <div className="stageExperience">
          <div className="stageVisual">
            <img
              src={stageModes[stageMode].image}
              alt={stageModes[stageMode].title}
              className="containImage"
            />
          </div>

          <div className="stageCopy">
            <span>{stageModes[stageMode].eyebrow}</span>
            <h3>{stageModes[stageMode].title}</h3>
            <p>{stageModes[stageMode].copy}</p>

            <div className="modeHint">
              SWITCH THE MODE ABOVE
              <span>THE STORY CHANGES.</span>
            </div>
          </div>
        </div>

        <div className="impelzBlock">
          <div className="impelzCopy">
            <span>FEATURED MOMENT</span>
            <h3>HOSTING IMPELZ.</h3>
            <p>
              Hosting IMPELZ — IMT Hyderabad&apos;s inter-college event — was
              one of those moments where preparation, crowd energy and
              spontaneity had to work together in real time.
            </p>
          </div>

          <div className="videoFrame">
            <video controls playsInline preload="metadata">
              <source src="/impelz-hosting.mp4" type="video/mp4" />
            </video>
            <span>PRESS PLAY / SOUND ON</span>
          </div>
        </div>

        <div className="trophyStrip">
          <div className="trophyText">
            <span>DANCE FILES</span>
            <h3>THE TROPHY CABINET.</h3>
            <p>Clicking was never required to make a trophy feel good.</p>
          </div>

          <div className="trophyImages">
            <img src="/dance-trophy.jpeg" alt="Dance trophy" />
            <img src="/dance-02.jpeg" alt="Dance competition" />
            <img src="/dance-03.jpeg" alt="Dance achievement" />
            <img src="/dance-04.jpeg" alt="Dance trophy achievement" />
          </div>
        </div>
      </section>

      <section className="marketingSection" id="marketing">
        <div className="marketingBig">
          <span>05 / FINMARK</span>
          <h2>
            FINANCE
            <br />
            <i>MEETS</i>
            <br />
            MARKETING.
          </h2>
        </div>

        <div className="marketingCopy">
          <p>
            I major in Finance and Marketing because I am interested in both
            sides of a decision: <strong>what the numbers say</strong> and{" "}
            <strong>why people act on them.</strong>
          </p>

          <p>
            FinMark is where I want to document markets, consumer behaviour,
            financial products and the communication behind them.
          </p>

          <div className="comingSoon">
            <span>BUILDING IN PUBLIC</span>
            LINKEDIN POSTS / MARKET STORIES / MARKETING OBSERVATIONS
          </div>
        </div>
      </section>

      <section className="offClockSection" id="off-clock">
        <div className="offClockTitle">
          <span>06 / OFF THE CLOCK</span>
          <h2>I DON&apos;T ONLY COLLECT METRICS.</h2>
          <p>I collect places, stages and stories too.</p>
        </div>

        <div className="travelGrid">
          <figure className="travelLarge">
            <img src="/journey-01.jpeg" alt="Travel journey" />
            <figcaption>
              <span>01</span>
              SOMEWHERE ABOVE THE NOISE
            </figcaption>
          </figure>

          <figure>
            <img src="/journey-02.jpeg" alt="Travel memory" />
            <figcaption>
              <span>02</span>
              OUT OF OFFICE
            </figcaption>
          </figure>

          <figure>
            <img src="/journey-03.jpeg" alt="Mountain journey" />
            <figcaption>
              <span>03</span>
              MOUNTAINS &gt; MEETINGS
            </figcaption>
          </figure>

          <figure className="travelWide">
            <img src="/journey-04.jpeg" alt="Travel story" />
            <figcaption>
              <span>04</span>
              THE LONGER ROUTE
            </figcaption>
          </figure>

          <figure>
            <img src="/journey-05.jpeg" alt="Travel experience" />
            <figcaption>
              <span>05</span>
              NEXT STOP?
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="closingSection">
        <div className="closingTop">
          <span>YOU MADE IT THIS FAR.</span>
          <span>SO WE SHOULD PROBABLY TALK.</span>
        </div>

        <h2>
          LET&apos;S BUILD
          <br />
          SOMETHING <i>WORTH</i>
          <br />
          TALKING ABOUT.
        </h2>

        <div className="closingLinks">
          <a
            href="https://www.linkedin.com/in/sahil-lodha-012a63265/"
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN ↗
          </a>

          <a href="mailto:sahil@example.com">EMAIL ↗</a>

          <button onClick={() => scrollTo("home")}>BACK TO TOP ↑</button>
        </div>

        <div className="closingFooter">
          <span>SAHIL LODHA</span>
          <span>FINANCE × MARKETING × LEADERSHIP</span>
          <span>2026</span>
        </div>
      </section>

      {selectedMetric && (
        <div
          className="metricModal"
          onClick={() => setSelectedMetric(null)}
        >
          <div
            className="metricModalCard"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modalClose"
              onClick={() => setSelectedMetric(null)}
            >
              ×
            </button>

            <span>INTERNSHIP CASE FILE</span>
            <strong>{selectedMetric[0]}</strong>
            <h3>{selectedMetric[1]}</h3>
            <p>{selectedMetric[2]}</p>

            <div className="modalFooter">
              ANAND RATHI · B2B BUSINESS DEVELOPMENT · 2026
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
