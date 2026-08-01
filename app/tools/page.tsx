import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ToolsLab from "../components/ToolsLab";

export const metadata: Metadata = { title: "Answer Lab", description: "Educational retirement-gap, annuity-clarity, and care-impact tools with instant results and no account gate." };
const mediaHref = process.env.NODE_ENV === "development" ? "http://localhost:4173/" : "https://media.mccanneycapital.com/";

export default function ToolsPage() {
  return (
    <main>
      <Header mediaHref={mediaHref} />
      <section className="page-hero ink-page"><p className="eyebrow"><span /> The answer lab</p><h1>Do something useful.<br />No account required.</h1><p>These simplified tools provide the first layer of an answer. Your entries stay in this browser session and are not sent to McCanney Capital.</p></section>
      <section className="tools-page-section"><ToolsLab /></section>
      <section className="careplan-preview">
        <div className="careplan-label">COMING NEXT · CAREPLAN PRO</div>
        <div><h2>From quick sketch to contract-level simulation.</h2><p>CarePlan Pro will slide into this answer-first workflow with life, annuity, and long-term care modeling; visible assumptions; and side-by-side outcomes that can still conclude “keep what you have.”</p></div>
        <div className="careplan-screen"><div className="screen-bar"><span>CAREPLAN PRO</span><b>SIMULATION · DRAFT</b></div><div className="screen-chart"><i /><i /><i /><i /><i /></div><div className="screen-values"><span>CARE EVENT</span><span>INCOME</span><span>LEGACY</span></div></div>
      </section>
      <section className="closing-cta"><p>THE TOOL STARTS THE CONVERSATION.</p><h2>Your real documents finish it.</h2><Link className="button inverse" href="/contact">Request a contract-level review</Link></section>
      <Footer />
    </main>
  );
}
