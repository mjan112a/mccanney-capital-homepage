import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const metadata: Metadata = { title: "Start With a Question", description: "Ask Mark McCanney one retirement, annuity, life insurance, or long-term care question." };
const mediaHref = process.env.MCCANNEY_MEDIA_URL || (process.env.NODE_ENV === "development" ? "http://localhost:4173/" : "https://media.mccanneycapital.com/");

export default function ContactPage() {
  return (
    <main>
      <Header mediaHref={mediaHref} />
      <section className="contact-page">
        <div className="contact-intro">
          <p className="eyebrow"><span /> Start here</p>
          <h1>One question is enough.</h1>
          <p>You do not need to prepare your financial autobiography. Tell Mark what you want to know. He can tell you what information would materially improve the answer.</p>
          <div className="contact-direct"><small>Prefer to talk directly?</small><a href="tel:6142146668">(614) 214-6668 ↗</a><p>921 Chatham Lane, Suite 302<br />Columbus, Ohio 43221</p></div>
          <div className="contact-mark"><img src="/mark-mccanney.webp" alt="Mark McCanney" width="120" height="120" /><blockquote>“I’ll show you the math before I ask you to make a decision.”</blockquote></div>
        </div>
        <div className="contact-form-wrap"><span className="form-kicker">LOCAL PROTOTYPE · FORM PREVIEW</span><h2>What do you want answered?</h2><ContactForm /></div>
      </section>
      <Footer />
    </main>
  );
}
