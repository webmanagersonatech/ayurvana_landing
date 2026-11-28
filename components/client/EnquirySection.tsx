"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "../village/ui";

const labelCls = "grid gap-2 text-[9px] uppercase tracking-[0.16em] text-[#d4c1b0]";
const inputCls =
  "w-full rounded-none border-0 border-b border-[#806f61] bg-transparent py-3 text-xs normal-case tracking-normal text-white outline-none placeholder:text-white/40 focus:border-gold";

/**
 * "Begin your journey" enquiry block from the client page.
 * Same fields and same behaviour as the client file: it prepares the enquiry
 * and copies it to the clipboard. Connect `onSubmit` to your inbox / CRM / API
 * when the reservations flow is ready.
 */
export default function EnquirySection() {
  const [note, setNote] = useState(
    "This enquiry interface is a front-end preview. Connect it to the reservations inbox or CRM before publishing."
  );

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    if (!f.reportValidity()) return;
    const d = Object.fromEntries(new FormData(f).entries()) as Record<string, string>;
    const summary = [
      "AYURVANA ENQUIRY",
      "",
      `Name: ${d.name}`,
      `Email: ${d.email}`,
      `Phone: ${d.phone || "Not provided"}`,
      `Interest: ${d.interest || "Not specified"}`,
      `Duration: ${d.duration || "Not decided"}`,
      `Dates: ${d.dates || "Not specified"}`,
      `Message: ${d.message || "—"}`,
    ].join("\n");
    try {
      await navigator.clipboard.writeText(summary);
      setNote(
        "Your enquiry has been copied. Please share it with the Ayurvana reservations team. This preview is not connected to a live inbox yet."
      );
    } catch {
      setNote("Your details are filled in. Please copy them before leaving this page; online submission is not connected yet.");
    }
  }

  return (
    <section id="contact" className="bg-forest-dark py-[110px] text-cream">
      <div className="mx-auto grid max-w-[1280px] items-start gap-9 px-[22px] lg:grid-cols-[.9fr_1.1fr] lg:gap-[10%] lg:px-8">
        <Reveal>
          <div className="text-[9px] font-semibold uppercase tracking-[0.28em] text-gold-light">Begin your journey</div>
          <h2
            className="my-[18px] font-display font-normal text-cream"
            style={{ fontSize: "clamp(50px,6vw,84px)", lineHeight: 0.99, letterSpacing: "-0.02em" }}
          >
            Come for the treatment.
            <br />
            Leave as someone you recognise.
          </h2>
          <p className="text-xs leading-[1.8] text-[#d7c8b9]">
            Founding guests, corporate partners and artisans are invited to register their interest.
          </p>
          <p className="mt-[35px] text-xs leading-[1.8] text-[#d7c8b9]">
            Ayurvana
            <br />
            A Sona Star Initiative
            <br />
            Salem District, Tamil Nadu, India
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="text-[9px] font-semibold uppercase tracking-[0.28em] text-gold-light">Reservations &amp; enquiries</div>
          <h2 className="mb-6 mt-[14px] font-display text-[42px] font-normal leading-none text-cream">Let&apos;s begin.</h2>
          <form onSubmit={onSubmit} className="grid gap-[18px] sm:grid-cols-2">
            <label className={labelCls}>
              Your name
              <input name="name" required autoComplete="name" placeholder="Full name" className={inputCls} />
            </label>
            <label className={labelCls}>
              Email address
              <input name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={inputCls} />
            </label>
            <label className={labelCls}>
              Phone number
              <input name="phone" type="tel" autoComplete="tel" placeholder="+91" className={inputCls} />
            </label>
            <label className={labelCls}>
              I&apos;m interested in
              <select name="interest" className={inputCls} defaultValue="">
                <option value="" className="text-text-dark">Select an interest</option>
                {["Wellness programme", "Accommodation", "She Health", "Corporate retreat", "Health tourism", "Artisan partnership"].map((o) => (
                  <option key={o} className="text-text-dark">{o}</option>
                ))}
              </select>
            </label>
            <label className={labelCls}>
              Preferred stay duration
              <select name="duration" className={inputCls} defaultValue="">
                <option value="" className="text-text-dark">Not decided</option>
                {["7 nights", "14 nights", "21 nights or more"].map((o) => (
                  <option key={o} className="text-text-dark">{o}</option>
                ))}
              </select>
            </label>
            <label className={labelCls}>
              Preferred dates
              <input name="dates" placeholder="Month / approximate dates" className={inputCls} />
            </label>
            <label className={`${labelCls} sm:col-span-2`}>
              Tell us a little more
              <textarea name="message" placeholder="What would you like to explore?" className={`${inputCls} min-h-[90px] resize-y`} />
            </label>
            <button type="submit" className="btn-primary justify-self-start sm:col-span-2">
              Prepare enquiry ↗
            </button>
            <p aria-live="polite" className="m-0 text-[10px] leading-[1.7] text-[#b8a99b] sm:col-span-2">
              {note}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
