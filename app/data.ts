export const services = [
  {
    number: "01",
    slug: "retirement-income",
    title: "Retirement income",
    question: "Can I retire—and what can I actually spend?",
    answer:
      "We compare dependable income with expected spending, then stress-test the gap your savings must carry. You get a useful first answer before a full planning engagement is proposed.",
    includes: ["Income-gap analysis", "Social Security timing", "Sequence-risk stress test"],
    color: "lime",
  },
  {
    number: "02",
    slug: "annuity-review",
    title: "Annuity second opinion",
    question: "Is this contract any good for the job I need it to do?",
    answer:
      "We translate guarantees, income benefits, surrender values, crediting limits, riders, and issuer strength into an understandable keep-change-or-watch decision.",
    includes: ["Contract translation", "Keep vs. replace comparison", "Exit-cost analysis"],
    color: "sky",
  },
  {
    number: "03",
    slug: "long-term-care",
    title: "Long-term care resilience",
    question: "What happens to the other spouse if care is needed?",
    answer:
      "We model the care event first, then compare self-funding, family support, traditional coverage, and hybrid strategies without pretending one answer fits everybody.",
    includes: ["Care-cost scenarios", "Spousal impact", "Funding alternatives"],
    color: "lavender",
  },
  {
    number: "04",
    slug: "life-insurance",
    title: "Life insurance strategy",
    question: "Do I need this policy—and is it built to last?",
    answer:
      "We define the financial problem, separate guarantees from projections, and test whether premiums, cash value, loans, and death benefits behave as expected.",
    includes: ["Needs analysis", "Illustration stress test", "Existing-policy review"],
    color: "yellow",
  },
  {
    number: "05",
    slug: "portfolio-stress-test",
    title: "Portfolio stress testing",
    question: "What breaks if markets, rates, or life refuse to cooperate?",
    answer:
      "We run understandable what-if scenarios across the whole retirement picture, including poor early returns, inflation, changing income, and a care event.",
    includes: ["Down-market scenarios", "Inflation pressure", "Plain-English report"],
    color: "paper",
  },
  {
    number: "06",
    slug: "advisor-collaboration",
    title: "Advisor collaboration",
    question: "Can you handle the insurance work without taking over the relationship?",
    answer:
      "Yes. Mark can serve as the insurance specialist alongside an RIA, CPA, attorney, or existing advisor—with scope and communication agreed in advance.",
    includes: ["Defined roles", "Shared analysis", "No surprise prospecting"],
    color: "red",
  },
];

export const faqs = [
  {
    question: "What does McCanney Capital actually do?",
    answer:
      "McCanney Capital helps families evaluate retirement income, existing annuities, life insurance, and long-term care risk. The work begins with the decision you are trying to make, then uses your actual contracts and financial facts to show what is working, what is uncertain, and what alternatives deserve consideration.",
  },
  {
    question: "Is the first review really complimentary?",
    answer:
      "The initial review is presented as complimentary and without obligation. Its purpose is to give you a useful first assessment and determine whether deeper analysis would add value. Product recommendations are not required for the review to be useful.",
  },
  {
    question: "Will you tell me to replace my annuity?",
    answer:
      "Only if a documented comparison supports it. A replacement can create surrender charges, restart restrictions, give up existing benefits, or change tax and income features. Keeping the current contract is a legitimate conclusion.",
  },
  {
    question: "How is Mark paid?",
    answer:
      "Compensation can depend on the role, service, and product involved. Before a recommendation, the redesign’s standard is to explain the capacity in which Mark is acting, who pays, and how compensation could differ among the choices being discussed.",
  },
  {
    question: "What should I bring to a first conversation?",
    answer:
      "Bring the question first. If the question involves an existing product, the most recent statement and the contract or illustration are useful. Broader income, spending, asset, tax, and health information should be requested only when it materially affects the answer.",
  },
  {
    question: "Are the website tools financial advice?",
    answer:
      "No. The tools provide simplified, hypothetical educational estimates. They do not incorporate every contract term, tax consequence, health factor, or household objective. Their job is to help you identify the next useful question.",
  },
  {
    question: "Does Medicare pay for long-term care?",
    answer:
      "Medicare does not pay for most ongoing custodial long-term care. It may cover qualifying skilled services under specific conditions. A care plan should identify the exact service, likely setting, available family help, and source of funds rather than relying on the word ‘coverage.’",
  },
  {
    question: "Do you work with my current financial advisor or CPA?",
    answer:
      "Yes. Insurance, investment, tax, and estate decisions overlap. Mark can handle a defined insurance-analysis role, keep the existing professionals informed with your permission, and avoid expanding the engagement by surprise.",
  },
  {
    question: "Where is McCanney Capital located?",
    answer:
      "The office is at 921 Chatham Lane, Suite 302, Columbus, Ohio 43221. The current website states that Mark is licensed in 12 states. Product and service availability still depends on the client’s state and the specific engagement.",
  },
];

export const reviewQuestions = {
  retire: {
    label: "Can I retire?",
    answer:
      "Start with spending, dependable income, investable savings, and timing. That is enough to tell whether the idea looks plausible, tight, or premature.",
    next: "Useful next step: a first-pass income-gap review.",
  },
  annuity: {
    label: "Is my annuity any good?",
    answer:
      "First identify the job—income, safety, growth, liquidity, or legacy. Then compare guarantees, accessible value, costs, restrictions, and issuer strength against that job.",
    next: "Useful next step: upload or bring the current statement and contract.",
  },
  care: {
    label: "How would we pay for care?",
    answer:
      "Name where care would happen, who would coordinate it, which assets would pay, and what remains for the other spouse. Insurance is one funding option, not the entire plan.",
    next: "Useful next step: model one-, three-, and five-year care events.",
  },
  policy: {
    label: "Do I need this life policy?",
    answer:
      "Define the financial problem the policy is meant to solve, how long that problem lasts, what is guaranteed, and whether the funding is sustainable.",
    next: "Useful next step: compare the guaranteed column with lower-assumption scenarios.",
  },
};
