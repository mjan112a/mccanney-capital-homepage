import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { services } from "../data";

export const metadata: Metadata = { title: "How We Help", description: "Retirement income, annuity, long-term care, life insurance, stress-testing, and advisor-collaboration services." };
const mediaHref = process.env.MCCANNEY_MEDIA_URL || (process.env.NODE_ENV === "development" ? "http://localhost:4173/" : "https://media.mccanneycapital.com/");

export default function ServicesPage() {
  return (
    <main>
      <Header mediaHref={mediaHref} />
      <section className="page-hero sky-page"><p className="eyebrow"><span /> How we help</p><h1>Six decisions.<br />No product parade.</h1><p>Each service begins with a question and a defined scope. The product discussion earns its way in only when it helps answer that question.</p></section>
      <section className="service-detail-list">
        {services.map((service) => (
          <article id={service.slug} key={service.slug} className={`service-detail ${service.color}`}>
            <div className="service-detail-num">{service.number}</div>
            <div><span>{service.title}</span><h2>{service.question}</h2></div>
            <div><p>{service.answer}</p><ul>{service.includes.map((item) => <li key={item}>{item}</li>)}</ul><Link href="/contact">Bring this question to Mark →</Link></div>
          </article>
        ))}
      </section>
      <section className="fit-section">
        <div><p className="eyebrow"><span /> Fit check</p><h2>This works best when you want to understand before you act.</h2></div>
        <div className="fit-columns"><div><strong>Likely a fit</strong><p>You have a specific retirement, contract, income, care, or insurance decision and want the math and tradeoffs made visible.</p></div><div><strong>Probably not a fit</strong><p>You want a predetermined product, a guaranteed forecast, or a recommendation that skips the underlying contract and household facts.</p></div></div>
      </section>
      <section className="closing-cta"><p>THE RIGHT ANSWER MAY BE “KEEP IT.”</p><h2>Make the decision prove itself.</h2><Link className="button inverse" href="/contact">Start with the question</Link></section>
      <Footer />
    </main>
  );
}
