"use client";

import Link from "next/link";
import { useState } from "react";
import { reviewQuestions } from "../data";

export default function QuestionDesk() {
  const [selected, setSelected] = useState<keyof typeof reviewQuestions>("retire");
  const item = reviewQuestions[selected];

  return (
    <div className="question-desk">
      <div className="question-options">
        <span className="desk-kicker">Pick the actual question</span>
        {(Object.entries(reviewQuestions) as [keyof typeof reviewQuestions, typeof item][]).map(([key, value]) => (
          <button type="button" className={selected === key ? "active" : ""} key={key} onClick={() => setSelected(key)}>
            <span>{String(Object.keys(reviewQuestions).indexOf(key) + 1).padStart(2, "0")}</span>
            {value.label}
          </button>
        ))}
      </div>
      <div className="question-answer" aria-live="polite">
        <span className="answer-label">Here’s where Mark starts</span>
        <p>“{item.answer}”</p>
        <div className="answer-next">{item.next}</div>
        <Link href="/contact">Ask Mark this question →</Link>
      </div>
    </div>
  );
}
