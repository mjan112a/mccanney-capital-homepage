import Link from "next/link";
import Footer from "./components/Footer";
import FaqList from "./components/FaqList";
import Header from "./components/Header";
import QuestionDesk from "./components/QuestionDesk";
import { services } from "./data";

const mediaHref = process.env.MCCANNEY_MEDIA_URL || (process.env.NODE_ENV === "development" ? "http://localhost:4173/" : "https://media.mccanneycapital.com/");

export default function Home() {
  return (
    <main>
      <Header mediaHref={mediaHref} />

      <section className="home-hero">
        <div className="home-hero-copy">
          <p className="eyebrow"><span /> Independent retirement + insurance strategy</p>
          <h1>You don’t need another pitch. You need an <em>answer.</em></h1>
          <p className="hero-lede">
            Bring one question, one statement, or the whole plan. Mark will show you what the
            numbers support, what they do not, and what would have to be true before changing anything.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/contact">Start with one question</Link>
            <a className="button text-button" href="tel:6142146668">Call Mark · (614) 214-6668 ↗</a>
          </div>
          <div className="hero-promises">
            <span><b>01</b> Answer first</span>
            <span><b>02</b> Math visible</span>
            <span><b>03</b> Keep it can win</span>
          </div>
        </div>
        <div className="home-hero-portrait">
          <img className="cover-image" src="/mark-mccanney.webp" alt="Mark McCanney" fetchPriority="high" />
          <div className="portrait-label"><span>MARK McCANNEY</span><b>Numbers first.<br />Pressure never.</b></div>
          <div className="portrait-stamp">EST.<br />2004</div>
        </div>
      </section>

      <section className="stat-bar" aria-label="Practice facts shown on the current website">
        <div><strong>22</strong><span>Years advising families</span></div>
        <div><strong>1,400+</strong><span>Portfolios analyzed</span></div>
        <div><strong>12</strong><span>States licensed</span></div>
        <div><strong>$0</strong><span>Initial review cost</span></div>
      </section>

      <section className="question-section">
        <div className="section-heading-row">
          <div><p className="eyebrow"><span /> Skip the autobiography</p><h2>What do you actually want to know?</h2></div>
          <p>Choose the question. See the first answer immediately. A broader conversation is available—not compulsory.</p>
        </div>
        <QuestionDesk />
      </section>

      <section className="services-section" id="services">
        <div className="section-heading-row light">
          <div><p className="eyebrow"><span /> How Mark helps</p><h2>Problems first.<br />Products later.</h2></div>
          <p>Each engagement begins with a decision, not a carrier shelf. The analysis can conclude that your current approach is working.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <Link href={`/services#${service.slug}`} className={`service-card ${service.color}`} key={service.slug}>
              <div className="service-top"><span>{service.number}</span><small>{service.title}</small></div>
              <h3>{service.question}</h3>
              <p>{service.answer}</p>
              <div className="service-footer"><span>See how it works</span><b>↗</b></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="process-preview">
        <div className="process-lead">
          <p className="eyebrow"><span /> The process</p>
          <h2>Bring the question.<br />We’ll show the work.</h2>
          <p>Comprehensive planning is available when it improves the decision. It is not the cover charge for a basic answer.</p>
          <Link className="button primary" href="/process">See the full process</Link>
        </div>
        <div className="process-steps">
          <div><span>01</span><h3>Name the decision</h3><p>What do you want to know today? That defines the first scope.</p></div>
          <div><span>02</span><h3>Read the real documents</h3><p>Statements, contracts, riders, and guarantees—not generic averages.</p></div>
          <div><span>03</span><h3>Show the math</h3><p>Plain scenarios, visible assumptions, and the losing columns included.</p></div>
          <div><span>04</span><h3>Choose the next step</h3><p>Keep it, change it, watch it, or go deeper. You decide.</p></div>
        </div>
      </section>

      <section className="anti-pitch">
        <div className="anti-stamp">NO<br />SALES<br />MAZE</div>
        <div className="anti-title"><p className="eyebrow"><span /> What is different</p><h2>Transparency is a workflow, not a slogan.</h2></div>
        <div className="do-dont">
          <div><span>What you get</span><ul><li>The short answer first</li><li>Assumptions you can inspect</li><li>Alternatives, including doing nothing</li><li>Tradeoffs in the same type size</li><li>Compensation discussed before a decision</li></ul></div>
          <div><span>What you don’t</span><ul><li>A fake “instant” result behind a form</li><li>Fear dressed up as urgency</li><li>A replacement decided in advance</li><li>A product compared to a straw man</li><li>A disappearing advisor after issue</li></ul></div>
        </div>
      </section>

      <section className="about-preview">
        <div className="about-image"><img className="cover-image" src="/mark-mccanney.webp" alt="Mark McCanney in Columbus, Ohio" /></div>
        <div className="about-preview-copy">
          <p className="eyebrow"><span /> About Mark</p>
          <h2>“Why didn’t anyone show us this before we signed?”</h2>
          <p>
            That client question became the operating principle. Mark built his practice around
            translating dense contracts, modeling the decision in plain language, and letting the
            numbers arrive before the recommendation.
          </p>
          <div className="credentials"><span>Licensed Insurance Producer</span><span>Series 65</span><span>NAIFA Member</span><span>OH #579496</span></div>
          <Link className="button primary" href="/about">Read Mark’s story</Link>
        </div>
      </section>

      <section className="media-bridge">
        <div>
          <p className="eyebrow"><span /> McCanney Capital Media</p>
          <h2>Learn enough to challenge the recommendation.</h2>
        </div>
        <div>
          <p>The media company answers the questions the industry tends to turn into funnels: Is my annuity any good? Can I retire? What is actually guaranteed?</p>
          <a className="button inverse" href={mediaHref} target="_blank" rel="noreferrer">Open the straight-answer library ↗</a>
        </div>
      </section>

      <section className="faq-preview">
        <div className="section-heading-row"><div><p className="eyebrow"><span /> Frequently asked</p><h2>Questions that deserve a straight answer.</h2></div><Link className="button text-button" href="/faq">See every FAQ ↗</Link></div>
        <FaqList limit={5} />
      </section>

      <section className="closing-cta">
        <p>ONE QUESTION IS ENOUGH TO START.</p>
        <h2>What do you want to know?</h2>
        <div><Link className="button inverse" href="/contact">Ask Mark</Link><a className="button outline-light" href="tel:6142146668">Or call (614) 214-6668</a></div>
      </section>

      <Footer />
    </main>
  );
}
