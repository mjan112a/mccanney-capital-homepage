"use client";

import { useState } from "react";

type Tool = "retire" | "annuity" | "care";

const money = (value: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(Number.isFinite(value) ? value : 0);

export default function ToolsLab() {
  const [tool, setTool] = useState<Tool>("retire");
  return (
    <div className="lab-shell">
      <div className="lab-tabs" role="tablist" aria-label="Answer lab tools">
        <button className={tool === "retire" ? "active" : ""} onClick={() => setTool("retire")} role="tab" aria-selected={tool === "retire"}>Retirement gap</button>
        <button className={tool === "annuity" ? "active" : ""} onClick={() => setTool("annuity")} role="tab" aria-selected={tool === "annuity"}>Contract clarity</button>
        <button className={tool === "care" ? "active" : ""} onClick={() => setTool("care")} role="tab" aria-selected={tool === "care"}>Care impact</button>
      </div>
      {tool === "retire" && <RetirementTool />}
      {tool === "annuity" && <AnnuityTool />}
      {tool === "care" && <CareTool />}
    </div>
  );
}

function NumberField({ label, value, onChange, prefix = "$" }: { label: string; value: number; onChange: (value: number) => void; prefix?: string }) {
  return (
    <label className="number-field">
      <span>{label}</span>
      <div><b>{prefix}</b><input type="number" min="0" step="100" value={value} onChange={(event) => onChange(Number(event.target.value))} /></div>
    </label>
  );
}

function RetirementTool() {
  const [spend, setSpend] = useState(6500);
  const [income, setIncome] = useState(4100);
  const [savings, setSavings] = useState(725000);
  const gap = Math.max(0, spend - income);
  const annualGap = gap * 12;
  const multiple = annualGap ? savings / annualGap : Infinity;
  return (
    <div className="lab-panel">
      <div className="lab-inputs">
        <span className="tool-number">TOOL 01 · FIRST-PASS WORKSHEET</span>
        <h2>How large is the retirement gap?</h2>
        <NumberField label="Expected monthly spending" value={spend} onChange={setSpend} />
        <NumberField label="Dependable monthly income" value={income} onChange={setIncome} />
        <NumberField label="Investable savings" value={savings} onChange={setSavings} />
      </div>
      <div className="lab-output lime-output" aria-live="polite">
        <span>Monthly gap</span>
        <strong>{money(gap)}</strong>
        {gap === 0 ? <p>The dependable income entered covers the spending entered. Taxes, inflation, care costs, and timing still need attention.</p> : <p>Your savings equal about <b>{multiple.toFixed(1)}×</b> the annual gap of {money(annualGap)}. That is a starting fact—not a retirement verdict.</p>}
        <div className="range-row">
          {[20, 25, 30].map((target) => <div key={target}><small>{target}× gap</small><b>{money(annualGap * target)}</b></div>)}
        </div>
        <small className="tool-note">Does not model taxes, inflation, lifespan, returns, sequence risk, debt, or health costs.</small>
      </div>
    </div>
  );
}

function AnnuityTool() {
  const [goal, setGoal] = useState("income");
  const [charge, setCharge] = useState(5);
  const [liquidity, setLiquidity] = useState("some");
  const [checked, setChecked] = useState(false);
  const concerns = [
    charge >= 7 ? "The stated surrender charge creates meaningful exit friction." : charge > 0 ? "The surrender charge belongs in any replacement comparison." : "No stated surrender charge removes one obstacle, not every obstacle.",
    liquidity === "high" ? "High liquidity needs may conflict with a long-duration contract." : "Access rules still need to match the cash you may need.",
    checked ? "You can identify the guaranteed values—a good start." : "Separate guaranteed values from current or illustrated values.",
  ];
  const goalText: Record<string, string> = {
    income: "Start with dependable income, survivor choices, and what happens to principal.",
    safety: "Start with guarantees, issuer strength, access, and the exact meaning of protection.",
    growth: "Start with net crediting rules, limits, time horizon, and realistic alternatives.",
    legacy: "Start with the actual death benefit, lifetime access, and whether insurance is cleaner.",
  };
  return (
    <div className="lab-panel">
      <div className="lab-inputs">
        <span className="tool-number">TOOL 02 · CONTRACT TRIAGE</span>
        <h2>Is the annuity clear enough to judge?</h2>
        <label><span>What job did you hire it to do?</span><select value={goal} onChange={(event) => setGoal(event.target.value)}><option value="income">Retirement income</option><option value="safety">Principal stability</option><option value="growth">Accumulation</option><option value="legacy">Legacy</option></select></label>
        <NumberField label="Current surrender charge" value={charge} onChange={setCharge} prefix="%" />
        <label><span>Near-term liquidity need</span><select value={liquidity} onChange={(event) => setLiquidity(event.target.value)}><option value="low">Low</option><option value="some">Some</option><option value="high">High</option></select></label>
        <label className="check-field"><input type="checkbox" checked={checked} onChange={(event) => setChecked(event.target.checked)} /><span>I can identify what is contractually guaranteed.</span></label>
      </div>
      <div className="lab-output sky-output" aria-live="polite">
        <span>Where to start</span>
        <h3>{goalText[goal]}</h3>
        <ol>{concerns.map((concern) => <li key={concern}>{concern}</li>)}</ol>
        <small className="tool-note">This does not recommend keeping, surrendering, or replacing a contract.</small>
      </div>
    </div>
  );
}

function CareTool() {
  const [monthly, setMonthly] = useState(8500);
  const [years, setYears] = useState(3);
  const [coverage, setCoverage] = useState(3500);
  const [income, setIncome] = useState(7000);
  const gross = monthly * 12 * years;
  const covered = Math.min(monthly, coverage) * 12 * years;
  const household = Math.max(0, gross - covered);
  const monthlyPressure = Math.max(0, monthly - coverage - income);
  return (
    <div className="lab-panel">
      <div className="lab-inputs">
        <span className="tool-number">TOOL 03 · CARE-EVENT SKETCH</span>
        <h2>What part of a care event stays with the family?</h2>
        <NumberField label="Estimated monthly care cost" value={monthly} onChange={setMonthly} />
        <label><span>Years of care</span><input type="range" min="1" max="7" value={years} onChange={(event) => setYears(Number(event.target.value))} /><b className="range-value">{years} years</b></label>
        <NumberField label="Monthly insurance benefit" value={coverage} onChange={setCoverage} />
        <NumberField label="Monthly household income available" value={income} onChange={setIncome} />
      </div>
      <div className="lab-output lavender-output" aria-live="polite">
        <span>Illustrative family share</span>
        <strong>{money(household)}</strong>
        <p>Estimated gross care cost: <b>{money(gross)}</b><br />Estimated insurance benefit: <b>{money(covered)}</b></p>
        <div className="pressure-tag">Monthly pressure after stated income: {money(monthlyPressure)}</div>
        <small className="tool-note">Simplified illustration. Actual benefits depend on eligibility triggers, elimination periods, reimbursement rules, limits, and contract terms.</small>
      </div>
    </div>
  );
}
