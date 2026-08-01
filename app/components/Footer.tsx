import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="brand footer-brand"><span className="brand-mark">M</span><span><strong>McCanney Capital</strong><small>Columbus, Ohio</small></span></div>
        <div className="footer-line">Numbers first. Pressure never.</div>
        <a className="footer-phone" href="tel:6142146668">(614) 214-6668 ↗</a>
      </div>
      <div className="footer-grid">
        <div>
          <strong>Office</strong>
          <p>921 Chatham Lane, Suite 302<br />Columbus, Ohio 43221</p>
        </div>
        <div>
          <strong>Explore</strong>
          <Link href="/services">How we help</Link>
          <Link href="/process">The process</Link>
          <Link href="/tools">Answer lab</Link>
          <Link href="/faq">FAQ</Link>
        </div>
        <div>
          <strong>Credentials shown on current site</strong>
          <p>Licensed Insurance Producer<br />Series 65<br />NAIFA Member<br />OH License #579496</p>
        </div>
      </div>
      <div className="disclosure">
        <p>
          Educational content only. Not individualized investment, insurance, tax, or legal advice.
          Projections are hypothetical and do not guarantee future results. Product guarantees depend
          on the issuing insurer’s claims-paying ability. Product terms, availability, taxation, and
          public-program rules vary by contract, state, and circumstance.
        </p>
        <span>© 2026 McCanney Capital</span>
      </div>
    </footer>
  );
}
