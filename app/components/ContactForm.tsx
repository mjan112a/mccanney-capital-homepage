"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent) {
    event.preventDefault();
    setSent(true);
  }
  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row"><label><span>First name</span><input required name="firstName" /></label><label><span>Last name</span><input required name="lastName" /></label></div>
      <label><span>Email address</span><input required type="email" name="email" /></label>
      <label><span>Phone <small>optional</small></span><input type="tel" name="phone" /></label>
      <label><span>What question do you want answered?</span><textarea required name="question" rows={5} placeholder="One question is enough to start." /></label>
      <button className="button primary" type="submit">Preview the request experience</button>
      {sent && <div className="prototype-notice" role="status"><strong>That is the complete experience.</strong><p>This local prototype did not transmit your information. On deployment, this form will connect to the approved scheduling or CRM workflow.</p></div>}
      <p className="form-note">Local review prototype: submissions stay on this page and are not sent anywhere.</p>
    </form>
  );
}
