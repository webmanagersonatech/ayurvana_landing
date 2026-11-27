import { Card, Photo, Reveal, SectionHead } from "./ui";

const rooms = [
  ["rooms-standard.jpg", "Two-storey guest accommodation", "Standard rooms", "Thoughtful rooms by the water, with shared and private occupancy options.", "From ₹6,000 per person / night"],
  ["rooms-balcony.jpg", "Guest room exterior", "Balcony rooms", "Eight of the eighteen rooms open onto balconies over the water.", "Tariff by occupancy"],
  ["cottage-exterior.jpg", "Private cottage exterior", "Private cottages", "A house-like stay with living space, bedroom and open-air bathing concept.", "Tariff on request"],
  ["she-room.jpg", "She Room accommodation wing", "She Room & He Room", "Shared, single-gender accommodation for individual guests.", "₹4,500 per bed / night"],
];
const tariff = [
  ["She Room and He Room", "Per bed, shared room", "₹4,500"],
  ["Room, shared occupancy", "Per person", "₹6,000"],
  ["Room, double occupancy", "Per room, two guests", "₹12,000"],
  ["Room, single occupancy", "Per room, one guest", "₹13,000"],
  ["Premium room", "Balcony, terrace, private garden", "From ₹15,600"],
];

export default function Stay() {
  return (
    <section id="stay" className="py-20 lg:py-28 bg-cream-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHead
          eyebrow="Rooms & accommodation"
          lead="Eighteen rooms, approximately 600 sq ft, with capacity for up to five guests. Eight rooms open onto balconies over the water. Premium rooms include a balcony, terrace and small private garden."
        >
          Room for rest.
          <br />
          <span className="title-accent">Space to reconnect.</span>
        </SectionHead>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {rooms.map(([img, alt, t, d, price], i) => (
            <Reveal key={t} delay={i * 0.06}>
              <article className="bg-cream border border-line rounded-2xl overflow-hidden h-full flex flex-col">
                <Photo src={img} alt={alt} className="aspect-[3/2] !rounded-none" />
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="card-title">{t}</h3>
                  <p className="card-text mt-2 flex-1">{d}</p>
                  <span className="mt-4 text-xs tracking-wide text-forest font-semibold">{price}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
         <div className="overflow-x-auto rounded-2xl border border-line">
          <table className="w-full min-w-[520px] text-left text-sm bg-cream">
            <thead className="bg-forest text-cream-light text-xs tracking-[0.16em] uppercase">
              <tr>
                <th className="p-4 font-medium">Accommodation</th>
                <th className="p-4 font-medium">Basis</th>
                <th className="p-4 font-medium text-right">Per night</th>
              </tr>
            </thead>
            <tbody>
              {tariff.map(([a, b, c]) => (
                <tr key={a} className="border-t border-line">
                  <td className="p-4 font-medium text-text-dark">{a}</td>
                  <td className="p-4 text-text-muted">{b}</td>
                  <td className="p-4 text-right font-serif text-lg text-forest">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
         </div>
        </Reveal>
        <p className="mt-6 text-xs text-text-light max-w-3xl leading-relaxed">
          All tariffs exclude GST. Premium rooms are approximately 20% above the single-occupancy tariff. Treatments,
          consultations and spa therapies are charged separately on prescription.
        </p>
      </div>
    </section>
  );
}
