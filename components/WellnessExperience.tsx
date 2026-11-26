

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
      className="relative overflow-hidden pb-16"
    >
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-gold-light text-xs font-semibold tracking-widest uppercase">
            A slower way to feel well
          </span>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mt-3 leading-tight">
            Wellness is
           
            <span className="italic text-gold-light"> not a room.</span>
          </h2>

          <p className="text-white/85 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            It is a sequence of moments, places and practices that begin to feel
            like a new rhythm.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.label}
              className="group relative -mt-px md:mt-0 md:-ml-px p-8  border border-white/20 hover:border-white hover:z-10 transition-all duration-300"
            >
              <p className="text-gold-light group-hover:text-white transition-colors duration-300 text-xs font-semibold tracking-widest uppercase mb-5">
                {step.label}
              </p>

              <h3 className="font-serif text-2xl lg:text-3xl text-white leading-tight mb-4">
                {step.title[0]}
                <br />
                <span className="italic">{step.title[1]}</span>
              </h3>

              <p className="text-white/85 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}