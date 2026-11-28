import { lineArt } from "./siteImages";

const steps = [
  {
    label: "01 / Restore",
    title: ["Begin with yourself."],
    desc: "Physician-guided care, traditional therapies and a programme shaped around your needs.",
  },
  {
    label: "02 / Reconnect",
    title: ["Find your own pace."],
    desc: "Movement, breath, nourishing food and quiet spaces make room for a more considered day.",
  },
  {
    label: "03 / Belong",
    title: ["Take a little of it home."],
    desc: "Meet makers, learn a craft and carry a slower, more grounded rhythm beyond your stay.",
  },
];

export default function WellnessExperience() {
  return (
    <section
      id="services"
      className="section-pad relative overflow-hidden  on-dark"
    >
      <img
        src={lineArt.sprigLight}
        alt=""
        aria-hidden="true"
        className="absolute -left-10 bottom-0 w-56 lg:w-80 opacity-[0.06] pointer-events-none select-none"
      />
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="section-head center">
          <span className="section-label">A slower way to feel well</span>

          <h2 className="section-title mt-3">
            Wellness is <span className="title-accent">not a room.</span>
          </h2>

          <p className="section-lead">
            It is a sequence of moments, places and practices that begin to feel
            like a new rhythm.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.label}
              className="group ui-card-dark p-8"
            >
              <p className="text-gold-light group-hover:text-white transition-colors duration-300 text-xs font-semibold tracking-widest uppercase mb-5">
                {step.label}
              </p>

              <h3 className="card-title mb-4">
                {step.title[0]}
                <br />
                <span className="italic">{step.title[1]}</span>
              </h3>

              <p className="card-text">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}