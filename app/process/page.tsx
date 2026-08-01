import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const metadata: Metadata = { title: "The Process", description: "An answer-first retirement and insurance analysis process: define, inspect, model, compare, decide, and service." };
const mediaHref = process.env.NODE_ENV === "development" ? "http://localhost:4173/" : "https://media.mccanneycapital.com/";

const steps = [
  ["01", "Name the decision", "You tell Mark what you want to know now. That question defines the first scope; it does not automatically trigger a full financial excavation."],
  ["02", "Gather only what matters", "For a contract question, that may be a statement and contract. For retirement timing, it may be spending, dependable income, savings, and timing."],
  ["03", "Read the real documents", "Guarantees, projections, surrender values, riders, caps, fees, benefit triggers, and insurer details come from the source documents—not the headline."],
  ["04", "Model the honest scenarios", "The analysis includes lower assumptions, bad timing, changed needs, care events, and the cost of leaving an existing arrangement."],
  ["05", "Put alternatives side by side", "Keep it, modify it, replace it, self-fund, wait, or do nothing. The recommendation is incomplete until the alternatives are visible."],
  ["06", "Decide—and stay for the result", "If you proceed, responsibilities, compensation, implementation, review, and claim support are explained. The relationship does not end at issue."],
];

export default function ProcessPage() {
  return (
    <main>
      <Header mediaHref={mediaHref} />
      <section className="page-hero red-page"><p className="eyebrow"><span /> The McCanney process</p><h1>Answer first.<br />Earn the next step.</h1><p>More analysis is not automatically better. It is better only when it changes or strengthens the decision.</p></section>
      <section className="long-process">
        {steps.map(([number, title, copy]) => <div className="long-step" key={number}><span>{number}</span><h2>{title}</h2><p>{copy}</p></div>)}
      </section>
      <section className="deliverable-section">
        <div><p className="eyebrow"><span /> What leaves the room</p><h2>A conclusion you can explain to somebody else.</h2></div>
        <div className="report-mock"><div className="report-top"><span>MCCANNEY CAPITAL</span><b>DECISION NOTE · 01</b></div><h3>Question</h3><p>Is the existing annuity still doing the job?</p><h3>First conclusion</h3><p>Keep pending two contract checks.</p><div className="report-grid"><div><small>GREEN</small><strong>Income benefit</strong></div><div><small>YELLOW</small><strong>Liquidity</strong></div><div><small>CHECK</small><strong>Issuer strength</strong></div></div><div className="report-mark">SHOW THE WORK →</div></div>
      </section>
      <section className="closing-cta"><p>BRING ONE STATEMENT OR THE WHOLE PLAN.</p><h2>Either way, start with the question.</h2><Link className="button inverse" href="/contact">Begin a review</Link></section>
      <Footer />
    </main>
  );
}
