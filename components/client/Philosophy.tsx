import { Reveal, IMG } from "../village/ui";

const pillars = [
  ["01", "HEAL", "Heal", "Personalised Ayurvedic and naturopathic programmes guided by qualified practitioners, with care shaped around the individual."],
  ["02", "UNWIND", "Unwind", "A natural pond, a 1.5 km track, an amphitheatre beneath the stars and food prepared with your programme in mind."],
  ["03", "BELONG", "Belong", "Sona Gramam brings guests closer to regional craft through pottery, weaving, painting, workshops and artisan encounters."],
];

/** "Come for the treatment. Stay for the village." — client's philosophy chapter */
export default function Philosophy() {
  return (
    <section id="philosophy" className="overflow-hidden bg-cream-light py-[clamp(86px,10vw,140px)]">
      <div className="mx-auto max-w-[1320px] px-[18px] sm:px-8">
        <header className="mx-auto mb-[clamp(34px,5.5vw,76px)] max-w-[930px] text-center">
          <Reveal>
            <div className="mb-[22px] text-[9px] font-semibold uppercase tracking-[0.28em] text-forest-light">
              A different kind of retreat
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              className="mx-auto mb-7 font-display font-normal text-text-dark"
              style={{ fontSize: "clamp(43px,5.6vw,76px)", lineHeight: 1.02, letterSpacing: "-0.045em", textWrap: "balance" as never }}
            >
              Come for the treatment.
              <br />
              <em className="font-normal italic text-forest">Stay for the village.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mx-auto grid max-w-[680px] gap-3 text-center text-sm leading-[1.9] text-text-muted sm:grid-cols-2 sm:gap-6 sm:text-left">
              <p>
                Every five-star hotel offers the same luxury. Ayurvana offers an experience of a kind. A place where
                physician-led care, restorative rituals, thoughtful architecture and the living craft traditions of Tamil
                Nadu come together.
              </p>
              <p>Guests arrive ready to pause. They leave with a rhythm, a practice and a renewed connection to themselves.</p>
            </div>
          </Reveal>
        </header>

        <Reveal>
          <figure className="relative m-0 h-[clamp(280px,48vw,610px)] w-full overflow-hidden bg-forest-dark">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              loading="lazy"
              decoding="async"
              src={`${IMG}/entrance.jpg`}
              alt="Ayurvana's welcoming entrance and kolam-inspired threshold"
              className="h-full w-full object-cover"
              style={{ objectPosition: "center 54%" }}
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[45%] bg-gradient-to-b from-transparent to-[rgba(32,24,20,.42)]" />
            <figcaption className="absolute inset-x-[clamp(18px,3vw,42px)] bottom-[clamp(18px,2.5vw,32px)] z-[1] flex justify-between gap-5 text-[7px] uppercase tracking-[0.13em] text-[#fff8ef] sm:text-[8px] sm:tracking-[0.2em]">
              <span>Rooted in everyday rituals</span>
              <span>Salem · Tamil Nadu</span>
            </figcaption>
          </figure>
        </Reveal>

        <Reveal>
          <div className="flex items-center justify-center gap-[10px] py-[38px] text-center sm:gap-[clamp(14px,2.4vw,34px)] sm:py-[clamp(48px,6vw,82px)]">
            <span className="self-start font-display text-[clamp(50px,7vw,88px)] leading-[0.7] text-gold">“</span>
            <p className="m-0 font-display text-[21px] leading-[1.3] text-forest sm:text-[clamp(21px,2.5vw,34px)]">
              The kolam at every threshold is drawn fresh each morning.
              <br />
              <em>So, we believe, should a life be.</em>
            </p>
            <span className="hidden h-px w-[clamp(28px,5vw,70px)] self-center bg-gold sm:block" />
          </div>
        </Reveal>

        <div className="grid gap-[22px] border-t border-line sm:grid-cols-3 sm:gap-[clamp(22px,4vw,58px)]">
          {pillars.map(([n, tag, title, text], i) => (
            <Reveal key={n} delay={i * 0.1}>
              <article className="group relative pt-[18px] transition-transform duration-700 sm:pt-[22px] sm:hover:-translate-y-[7px]">
                <div className="flex items-center gap-3 text-[9px] tracking-[0.2em] text-gold">
                  <span>{n}</span>
                  <span className="h-px flex-1 bg-line transition-all duration-500 group-hover:bg-forest" />
                  <span>{tag}</span>
                </div>
                <h3 className="mb-[7px] mt-3 font-display text-[29px] font-normal text-text-dark sm:mb-[10px] sm:mt-5 sm:text-[clamp(27px,3vw,38px)]">
                  {title}
                </h3>
                <p className="m-0 max-w-[350px] text-xs leading-[1.85] text-text-muted">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
