import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const metadata: Metadata = { title: "About Mark McCanney", description: "Meet Mark McCanney, a Columbus-based retirement and insurance strategist focused on making the math visible." };
const mediaHref = process.env.MCCANNEY_MEDIA_URL || (process.env.NODE_ENV === "development" ? "http://localhost:4173/" : "https://media.mccanneycapital.com/");

export default function AboutPage() {
  return (
    <main>
      <Header mediaHref={mediaHref} />
      <section className="about-hero">
        <div className="about-hero-image"><img className="cover-image" src="/mark-mccanney.webp" alt="Mark McCanney" fetchPriority="high" /><div className="image-caption">COLUMBUS · OHIO · EST. 2004</div></div>
        <div className="about-hero-copy"><p className="eyebrow"><span /> About Mark McCanney</p><h1>I built this practice around a client’s obvious question.</h1><blockquote>“Why didn’t anyone show us this before we signed?”</blockquote></div>
      </section>
      <section className="story-section">
        <aside><span>THE ORIGIN</span><b>Dense contract.<br />Simple question.</b></aside>
        <div>
          <p className="dropcap">A couple had placed their life savings into an annuity they did not understand. Their advisor had moved on. The illustration was dozens of pages long, and neither could explain what would happen if one needed memory care later.</p>
          <p>Mark built a side-by-side model. When the couple finally saw the numbers clearly, their response became the operating principle for the practice: show people what the decision actually does before asking them to make it.</p>
          <p>Today the work spans retirement income, annuity analysis, life insurance, and long-term care planning. The tools are more sophisticated. The standard is still simple: make the math visible.</p>
        </div>
      </section>
      <section className="credential-band">
        <div><span>22</span><p>Years advising families</p></div><div><span>1,400+</span><p>Portfolios analyzed</p></div><div><span>Series 65</span><p>Shown on current site</p></div><div><span>OH #579496</span><p>Insurance license shown</p></div>
      </section>
      <section className="beliefs-section">
        <div><p className="eyebrow"><span /> What Mark believes</p><h2>The client should leave harder to manipulate.</h2></div>
        <div className="belief-list">
          <div><span>01</span><h3>Clarity is part of the product.</h3><p>If the client cannot explain the contract, the job is not finished.</p></div>
          <div><span>02</span><h3>Complexity must earn its keep.</h3><p>A sophisticated strategy is useful only when it solves a real problem better than the simpler alternatives.</p></div>
          <div><span>03</span><h3>Incentives belong in the room.</h3><p>Role, compensation, tradeoffs, and alternatives should be visible before a decision.</p></div>
          <div><span>04</span><h3>The claim matters more than the close.</h3><p>Insurance exists for the difficult day. Service should be designed around that day.</p></div>
        </div>
      </section>
      <section className="closing-cta"><p>ONE QUESTION STARTED THE PRACTICE.</p><h2>What question brings you here?</h2><Link className="button inverse" href="/contact">Ask Mark</Link></section>
      <Footer />
    </main>
  );
}
