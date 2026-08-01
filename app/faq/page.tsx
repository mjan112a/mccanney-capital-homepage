import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import FaqList from "../components/FaqList";
import Header from "../components/Header";

export const metadata: Metadata = { title: "FAQ", description: "Straight answers about McCanney Capital, annuity reviews, long-term care planning, compensation, tools, and first meetings." };
const mediaHref = process.env.NODE_ENV === "development" ? "http://localhost:4173/" : "https://media.mccanneycapital.com/";

export default function FaqPage() {
  return (
    <main>
      <Header mediaHref={mediaHref} />
      <section className="page-hero yellow-page"><p className="eyebrow"><span /> Frequently asked questions</p><h1>Retirement and insurance—without the evasive part.</h1><p>If a question depends on facts not yet available, the answer says so. That is better than fake certainty.</p></section>
      <section className="faq-page-section"><FaqList /></section>
      <section className="closing-cta"><p>YOUR QUESTION IS NOT ON THE LIST?</p><h2>Ask the actual person.</h2><div><Link className="button inverse" href="/contact">Ask Mark</Link><a className="button outline-light" href="tel:6142146668">Call (614) 214-6668</a></div></section>
      <Footer />
    </main>
  );
}
