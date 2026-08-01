"use client";

import { useState } from "react";
import { faqs } from "../data";

export default function FaqList({ limit }: { limit?: number }) {
  const [open, setOpen] = useState<number | null>(0);
  const items = limit ? faqs.slice(0, limit) : faqs;
  return (
    <div className="faq-list">
      {items.map((faq, index) => (
        <div className={open === index ? "faq-item open" : "faq-item"} key={faq.question}>
          <button type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? null : index)}>
            <span>{String(index + 1).padStart(2, "0")}</span><strong>{faq.question}</strong><b>{open === index ? "−" : "+"}</b>
          </button>
          {open === index && <p>{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
}
