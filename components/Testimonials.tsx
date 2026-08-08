const testimonials = [
  {
    name: "Ananya Krishnan",
    location: "Chennai",
    rating: 5,
    text: "The shirodhara session at Wivana was transformative. After years of insomnia, I finally slept soundly. The therapists are incredibly knowledgeable and gentle.",
    avatar: "AK",
    color: "bg-sage",
  },
  {
    name: "Rajan Pillai",
    location: "Bangalore",
    rating: 5,
    text: "I came with chronic lower back pain and left feeling lighter than I had in a decade. The Panchakarma program was thorough and the staff made me feel completely at ease.",
    avatar: "RP",
    color: "bg-gold",
  },
  {
    name: "Meena Subramaniam",
    location: "Salem",
    rating: 5,
    text: "Wivana is my monthly ritual now. The abhyanga massage keeps my stress levels in check and the herbal teas they recommend are wonderful. Truly a sanctuary.",
    avatar: "MS",
    color: "bg-warm-brown",
  },
  {
    name: "David Chen",
    location: "Singapore",
    rating: 5,
    text: "Flew in specifically for the rejuvenation programme. The consultation was thorough, the treatments were blissful, and I left with a personalised wellness guide to follow at home.",
    avatar: "DC",
    color: "bg-forest",
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-gold fill-gold" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <span className="section-label">Testimonials</span>
            <h2 className="section-title mt-3">What Our Customers Say</h2>
          </div>
          <a href="#reviews" className="btn-outline shrink-0">
            See All Reviews
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-cream rounded-2xl p-6 card-hover">
              <StarRating count={t.rating} />
              <p className="text-text-dark text-sm leading-relaxed mt-4 mb-6 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-semibold shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-text-dark text-sm">{t.name}</div>
                  <div className="text-text-muted text-xs">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
