import Link from "next/link";

/**
 * Hero from the client's Website_HTML.html ("quiet cinematic welcome").
 * Copy, order and rail are identical to the client file.
 */
export default function ClientHero() {
  return (
    <section
      id="home"
      aria-label="Ayurvana home"
      className="relative isolate grid h-[100svh] min-h-[650px] place-items-center overflow-hidden bg-[#30231c] bg-cover text-center text-[#fff8ef]"
      style={{
        backgroundImage: "url('/images/ayurvana/hero-bg.jpg')",
        backgroundPosition: "center 54%",
      }}
    >
      {/* shade */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(180deg,rgba(31,22,16,.34) 0%,rgba(31,22,16,.08) 34%,rgba(31,22,16,.40) 100%), radial-gradient(ellipse at center,rgba(31,22,16,.10) 0%,rgba(31,22,16,.35) 72%)",
        }}
      />

      <div className="relative z-[1] mx-auto flex w-[calc(100%-38px)] max-w-[780px] flex-col items-center justify-center px-0 pb-[90px] pt-[86px] text-center sm:w-[min(820px,calc(100%-48px))] sm:pb-16 sm:pt-[82px]">
        <div className="font-dm text-[9px] font-semibold uppercase tracking-[0.28em] text-[#f0dfc8]">
          A Sona Star Initiative <span className="px-[7px] text-[#d0ad79]">·</span> Salem, Tamil Nadu
        </div>

        <h1
          className="font-display font-normal text-[#fff8ef]"
          style={{
            fontSize: "clamp(64px,9vw,128px)",
            lineHeight: 0.92,
            letterSpacing: "-0.055em",
            margin: "25px 0 20px",
            textShadow: "0 4px 30px rgba(25,17,12,.16)",
          }}
        >
          Ayurvana
        </h1>

        <div
          className="font-display max-w-[620px] text-[#fff8ef]"
          style={{ fontSize: "clamp(22px,3vw,36px)", lineHeight: 1.22, textWrap: "balance" as never }}
        >
          A village for the body,
          <br />
          the mind and the hands.
        </div>

        <p className="mx-auto mt-[15px] max-w-[470px] font-dm text-[12px] leading-[1.8] tracking-[0.025em] text-[#fff8ef]/80 sm:mt-5 sm:text-[14px]">
          Where physician-led care, restorative rituals and living craft traditions come together.
        </p>

        <div className="mt-[26px] flex flex-col items-center gap-[17px] sm:mt-[34px] sm:flex-row sm:gap-[26px]">
          <Link
            href="#healing"
            className="inline-flex items-center justify-center gap-3 border border-[#f5eee2] bg-[#f5eee2] px-6 py-4 font-dm text-[9px] font-medium uppercase tracking-[0.13em] text-forest transition duration-300 hover:-translate-y-[3px] hover:bg-white"
          >
            Explore wellness <span>↗</span>
          </Link>
          <Link
            href="#stay"
            className="inline-flex items-center gap-3 border-b border-[#d0ad79]/75 pb-2 font-dm text-[10px] uppercase tracking-[0.14em] text-[#fff8ef]"
          >
            Discover your stay <span>↗</span>
          </Link>
        </div>
      </div>

      {/* information rail */}
      <div className="absolute inset-x-5 bottom-0 z-[2] grid min-h-[78px] grid-cols-[1fr_auto] items-center gap-[10px] border-t border-[#f0dfc8]/35 py-[14px] text-left font-dm sm:inset-x-[clamp(26px,5.5vw,82px)] sm:min-h-[92px] sm:grid-cols-[1fr_auto_1fr] sm:gap-6 sm:py-[18px]">
        <div className="flex flex-col gap-[6px] sm:gap-2">
          <span className="text-[7px] uppercase leading-none tracking-[0.24em] text-[#f0dfc8]/60 sm:text-[8px]">
            The approach
          </span>
          <span className="text-[8px] leading-[1.3] tracking-[0.08em] text-[#fff8ef] sm:text-[10px] sm:tracking-[0.1em]">
            Ayurveda <i className="px-[5px] not-italic text-[#d0ad79]">·</i> Naturopathy{" "}
            <i className="px-[5px] not-italic text-[#d0ad79]">·</i> Living craft
          </span>
        </div>

        <Link href="#philosophy" className="group flex items-center gap-[9px] justify-self-center py-[9px] text-[#f0dfc8] sm:gap-[18px]">
          <span className="text-[7px] uppercase leading-none tracking-[0.2em] transition-all duration-300 group-hover:tracking-[0.29em] group-hover:text-white sm:text-[8px]">
            Discover Ayurvana
          </span>
          <span
            aria-hidden="true"
            className="grid h-6 w-6 place-items-center rounded-full border border-[#d0ad79]/65 text-[13px] text-[#d0ad79] transition duration-300 group-hover:translate-y-1 group-hover:bg-[#d0ad79]/10 sm:h-[27px] sm:w-[27px]"
          >
            ↓
          </span>
        </Link>

        <div className="hidden flex-col items-end gap-2 text-right sm:flex">
          <span className="text-[8px] uppercase leading-none tracking-[0.24em] text-[#f0dfc8]/60">Find us</span>
          <span className="text-[10px] leading-[1.3] tracking-[0.1em] text-[#fff8ef]">
            Salem, Tamil Nadu <i className="px-[5px] not-italic text-[#d0ad79]">↗</i>
          </span>
        </div>
      </div>

      <div className="absolute bottom-[110px] right-[clamp(24px,5vw,72px)] z-[2] hidden font-display text-[13px] text-[#f0dfc8] lg:block">
        01 — 18
      </div>
    </section>
  );
}
