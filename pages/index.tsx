import Head from "next/head";

import Hero from "../components/Hero";
import About from "../components/About";
import QuoteBand from "../components/QuoteBand";
import HowItWorks from "../components/HowItWorks";
import WellnessExperience from "../components/WellnessExperience";
import PartnersBand from "../components/PartnersBand";
import Treatments from "../components/Treatments";
import Testimonials from "../components/Testimonials";
import SpaExperience from "../components/SpaExperience";
import FAQ from "../components/FAQ";
import Blog from "../components/Blog";


export default function Home() {
  return (
    <>
      <Head>
        {/* Primary SEO */}
        <title>Ayurvana Ayurveda | Holistic Healing & Wellness in Puducherry</title>
        <meta
          name="description"
          content="Experience authentic Ayurvedic healing at Ayurvana — a serene wellness sanctuary in Puducherry offering Panchakarma, Shirodhara, Abhyanga, and personalised holistic treatments."
        />
        <meta name="keywords" content="Ayurveda Puducherry, Ayurvedic treatment, Panchakarma, Shirodhara, holistic healing, wellness spa, Ayurvana, herbal therapy" />
        <meta name="author" content="Ayurvana Ayurveda" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://Ayurvana.com/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://Ayurvana.com/" />
        <meta property="og:title" content="Ayurvana Ayurveda | Holistic Healing & Wellness in Puducherry" />
        <meta
          property="og:description"
          content="Experience authentic Ayurvedic healing at Ayurvana — personalised treatments for mind, body & spirit. Book your consultation today."
        />
        <meta property="og:image" content="https://ayurvanalanding.vercel.app/images/Ayurvana.webp" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Ayurvana Ayurveda" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ayurvana Ayurveda | Holistic Healing & Wellness" />
        <meta name="twitter:description" content="Authentic Ayurvedic treatments in Puducherry. Personalised care for mind, body & spirit." />
        <meta name="twitter:image" content="https://ayurvanalanding.vercel.app/images/Ayurvana.webp" />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HealthAndBeautyBusiness",
              name: "Ayurvana Ayurveda",
              description:
                "Authentic Ayurvedic wellness sanctuary offering Panchakarma, Shirodhara, Abhyanga and personalised holistic treatments in Puducherry.",
              url: "https://Ayurvana.com",
              telephone: "+91-413-221-4567",
              email: "hello@Ayurvana.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "12, Rangapillai Street, White Town",
                addressLocality: "Puducherry",
                postalCode: "605001",
                addressCountry: "IN",
              },
              openingHours: "Mo-Sa 08:00-20:00",
              priceRange: "₹₹",
              image: "https://ayurvanalanding.vercel.app/images/Ayurvana.webp",
              sameAs: [
                "https://facebook.com/Ayurvana",
                "https://instagram.com/Ayurvana",
              ],
            }),
          }}
        />
      </Head>



      <main>
        <Hero />
        <About />

        <div
          className="relative bg-fixed bg-center bg-cover"
          style={{
            backgroundImage:
              "url('/images/bg.webp')",
          }}
        >
          {/* Darker overlay */}
          <div className="absolute inset-0 bg-black/60 z-[5]" />

          {/* Ayurvedic Corner Decorations - Compact */}
          {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((pos) => {
            const positions = {
              'top-left': 'top-4 left-4',
              'top-right': 'top-4 right-4',
              'bottom-left': 'bottom-4 left-4',
              'bottom-right': 'bottom-4 right-4',
            };
            const rotate = {
              'top-left': 'rotate-0',
              'top-right': 'rotate-90',
              'bottom-left': 'rotate-270',
              'bottom-right': 'rotate-180',
            };
            return (
              <div key={pos} className={`absolute ${positions[pos]} z-20 ${rotate[pos]}`}>
                <div className="w-12 h-12 relative">
                  <div className="absolute inset-0 border-2 border-gold/30 rounded-tl-2xl"></div>
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-gold/50 rounded-tl-lg"></div>
                  <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-gold/40 rounded-tl-md"></div>
                  <div className="absolute top-3 left-3 w-1.5 h-1.5 bg-gold/40 rounded-full"></div>
                </div>
              </div>
            );
          })}

          {/* Content */}
          <div className="relative z-10">
            <HowItWorks />
            <WellnessExperience />
          </div>
        </div>



        <PartnersBand />

        <Testimonials />
        <SpaExperience />
        <FAQ />
        <Blog />
      </main>


    </>
  );
}
