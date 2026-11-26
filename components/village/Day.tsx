import { useState } from "react";
import { SectionHead } from "./ui";

type Period = "Morning" | "Afternoon" | "Evening";
const schedule: { time: string; title: string; text: string; period: Period }[] = [
  { time: "5.30 AM", title: "Wake with the village", text: "Warm herbal water and a slow lap of the track as mist lifts off the pond.", period: "Morning" },
  { time: "6.30 AM", title: "Yoga & pranayama", text: "At the Prana Shala or amphitheatre, followed by the morning routine.", period: "Morning" },
  { time: "7.30 AM", title: "First treatment", text: "Your prescribed treatment, with relevant observations recorded.", period: "Morning" },
  { time: "9.00 AM", title: "Sattvic breakfast", text: "Millets, seasonal fruit and food aligned with your programme.", period: "Morning" },
  { time: "10.30 AM", title: "Hands at work", text: "Pottery, weaving, painting or block printing at Sona Gramam.", period: "Morning" },
  { time: "1.00 PM", title: "Lunch & rest", text: "The main meal of the day, followed by unhurried time.", period: "Afternoon" },
  { time: "3.30 PM", title: "The spa", text: "A prescribed therapy or restorative treatment.", period: "Afternoon" },
  { time: "5.30 PM", title: "Into the fields", text: "A bullock cart ride or time beside the pond.", period: "Evening" },
  { time: "7.00 PM", title: "Early dinner", text: "A light, seasonal meal, served unhurriedly.", period: "Evening" },
  { time: "8.00 PM", title: "The amphitheatre", text: "A weekly talk, folk music or a quiet evening outdoors.", period: "Evening" },
  { time: "9.30 PM", title: "Rest", text: "A calm, screen-light evening and time for sleep.", period: "Evening" },
];
const tabs = ["Full day", "Morning", "Afternoon", "Evening"] as const;

export default function Day() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("Full day");
  const items = schedule.filter((s) => tab === "Full day" || s.period === tab);
  return (
    <section id="day" className="py-20 lg:py-28 bg-cream-dark">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHead
          eyebrow="A day in Ayurvana"
          lead="No two guests keep the same day, because no two programmes are the same. This is an illustrative rhythm; individual schedules vary."
        >
          A day set by the sun, your physician's chart, and very little else.
        </SectionHead>
        <div role="group" aria-label="Filter the day" className="flex flex-wrap gap-2 mb-10">
          {tabs.map((t) => (
            <button
              key={t}
              type="button"
              aria-pressed={tab === t}
              onClick={() => setTab(t)}
              className={`px-5 py-2.5 text-[11px] tracking-[0.18em] uppercase border transition-colors ${
                tab === t
                  ? "bg-forest text-cream-light border-forest"
                  : "border-forest/40 text-forest hover:border-forest"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <ol className="divide-y divide-line border-y border-line">
          {items.map((s) => (
            <li key={s.time} className="grid sm:grid-cols-[130px_1fr] gap-2 sm:gap-8 py-5">
              <time className="font-serif text-xl text-forest">{s.time}</time>
              <div>
                <h3 className="font-serif text-xl text-text-dark">{s.title}</h3>
                <p className="text-sm text-text-muted mt-1 leading-relaxed">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
