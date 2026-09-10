export interface TreatmentCategory {
  category: string;
  items: string;
}

export interface PackageTier {
  duration: string;
  focus: string;
  inclusions: string;
  price: string;
}

export interface RoomTariff {
  type: string;
  description: string;
  price: string;
}

export interface Competitor {
  slug: string;
  name: string;
  location?: string;
  positioning: string;
  categories: TreatmentCategory[];
  packages: PackageTier[];
  rooms: RoomTariff[];
  roomNote?: string;
}

export const competitors: Competitor[] = [
  {
    slug: "nimba",
    name: "Nimba Nature Cure",
    location: "Gujarat",
    positioning: "Naturopathy-led destination blending Eastern and Western healing principles.",
    categories: [
      {
        category: "Naturopathy",
        items:
          "Fasting Therapy • Mud Therapy • Manipulative Therapy • Vibro Massage • Diet Therapy • Chromo Therapy • Fomentation Massage • Therapeutic Packs • Lifestyle Counselling",
      },
      {
        category: "Ayurveda & Panchakarma",
        items: "Abhyangam • Vasti • Udhvarthana • Pizichil • Shirodhara • Herbal Lepam • Potli Massage • Marma Massage",
      },
      {
        category: "Yoga & Divine Healing",
        items:
          "Therapeutic Yoga • Power Yoga • Aqua Yoga • Guided Meditation • Yoga Nidra • Shankhaprakshalana • Shat Kriya & Shatkarmas • Mantra Chanting • Chair Yoga",
      },
      {
        category: "Hydrotherapy",
        items:
          "Hydro Colon Therapy • Spine & Sitz Hydrotherapy • Hydro-Reflexology • Underwater Hydrotherapy • Circular Jet Hydrotherapy • Herbal Enema • Ozone Therapy • Whirlpool Bath • Vichy Shower",
      },
      {
        category: "Holistic Therapies",
        items:
          "Deep Tissue Massage • Hot Stone Massage • Pranic Healing • Acupuncture • Cupping Therapy • Raaga Therapy • Hypnotherapy • Physiotherapy • Crystal Healing • Agni Hotram",
      },
    ],
    packages: [
      {
        duration: "5 Nights",
        focus: "Experience the healing power of naturopathy",
        inclusions: "Room type: Amukha / Sumukha / Pramukha",
        price: "₹47,500 – 57,500 (single) • ₹75,000 – 85,000 (double)",
      },
      {
        duration: "7 Nights",
        focus: "Wholesome Detox — flush out toxins, inner cleansing",
        inclusions: "Room type: Amukha / Sumukha / Pramukha",
        price: "₹66,500 – 80,500 (single) • ₹1,05,000 – 1,19,000 (double)",
      },
      {
        duration: "10 Nights",
        focus: "Immunity Enhancement — discover inner strength",
        inclusions: "Room type: Amukha / Sumukha / Pramukha",
        price: "₹95,000 – 1,15,000 (single) • ₹1,50,000 – 1,70,000 (double)",
      },
      {
        duration: "15 Nights",
        focus: "Lifestyle Disorder Management — prevention, control & care",
        inclusions: "Room type: Amukha / Sumukha / Pramukha",
        price: "₹1,42,500 – 1,72,500 (single) • ₹2,25,000 – 2,55,000 (double)",
      },
    ],
    rooms: [
      { type: "Amukha", description: "Entry-level living space", price: "₹9,500 / night (single) • ₹15,000 (double)" },
      { type: "Sumukha", description: "Mid-tier living space", price: "₹10,500 / night (single) • ₹16,000 (double)" },
      { type: "Pramukha", description: "Premium living space", price: "₹11,500 / night (single) • ₹17,000 (double)" },
    ],
    roomNote:
      "Tariff is nightly and includes accommodation, meals, consultations & regular treatments. Minimum stay is 5 nights.",
  },
  {
    slug: "atmantan",
    name: "Atmantan Luxury Retreat",
    location: "Pune",
    positioning: "Doctor-led luxury wellness retreat focused on clinical and metabolic programs.",
    categories: [
      {
        category: "Ayurveda & Panchakarma",
        items: "Panchakarma Detox • Abhyanga • Shirodhara • Pizhichil • Kizhi • Nasya • Basti",
      },
      {
        category: "Naturopathy & Detox",
        items: "Therapeutic Fasting • Juice & Raw Food Therapy • Colon Hydrotherapy • Mud Therapy • Hydrotherapy",
      },
      {
        category: "Yoga & Mind–Body",
        items: "Personalized Yoga Therapy • Pranayama • Meditation • Yoga Nidra • Stress & Sleep Therapy",
      },
      {
        category: "Physiotherapy & Rehab",
        items: "Pain Management • Spine Care • Postural Correction • Sports Injury Rehab • Electrotherapy",
      },
      {
        category: "Clinical Programs",
        items: "Diabetes Reversal • Hypertension Control • Gut Health • Hormonal Balance • Immunity Boost",
      },
      {
        category: "Weight & Metabolic Health",
        items: "Medical Weight Loss • Metabolic Reset • Fat & Inch Loss • Obesity Management",
      },
      {
        category: "Mental & Emotional Wellness",
        items: "Stress Reduction • Burnout Recovery • Emotional Detox • Psychosomatic Healing",
      },
      {
        category: "Luxury Spa & Rejuvenation",
        items: "Aromatherapy • Deep Tissue Massage • Swedish / Balinese Massage • Reflexology",
      },
      {
        category: "Preventive Diagnostics",
        items: "Functional Medicine Tests • Lifestyle Assessment • Nutritional Analysis",
      },
      {
        category: "Personalized Care Model",
        items: "Doctor-Led Programs • Customized Treatment Plans • Continuous Monitoring",
      },
    ],
    packages: [
      {
        duration: "3 Days",
        focus: "Stress Relief & Rejuvenation",
        inclusions: "Medical consultation, Yoga, Spa therapies, Detox diet",
        price: "₹1.25 – 1.75 Lakhs",
      },
      {
        duration: "7 Days",
        focus: "Detox & Lifestyle Reset",
        inclusions: "Panchakarma / Naturopathy, Yoga, Diet therapy",
        price: "₹2.75 – 3.50 Lakhs",
      },
      {
        duration: "14 Days",
        focus: "Metabolic & Clinical Healing",
        inclusions: "Weight loss, Diabetes, Gut & Hormonal balance",
        price: "₹5.00 – 6.50 Lakhs",
      },
      {
        duration: "21 Days",
        focus: "Deep Detox & Disease Reversal",
        inclusions: "Intensive Panchakarma, Rehab, Mind–body therapy",
        price: "₹7.50 – 9.00 Lakhs",
      },
    ],
    rooms: [
      { type: "Garden Room", description: "Premium garden-facing luxury room", price: "₹45,000 – 55,000 / night" },
      { type: "Lake View Room", description: "Scenic lake-facing room", price: "₹55,000 – 65,000 / night" },
      { type: "Terrace Suite", description: "Private terrace, premium living", price: "₹70,000 – 85,000 / night" },
      { type: "Atmantan Suite", description: "Ultra-luxury suite with personalized services", price: "₹90,000 – 1,20,000 / night" },
    ],
  },
  {
    slug: "kshemavana",
    name: "Kshemavana Wellness Center",
    positioning: "Clinical naturopathy center with accessible, tiered accommodation options.",
    categories: [
      {
        category: "Naturopathy Therapies",
        items: "Diet Therapy • Therapeutic Fasting • Juice Therapy • Raw Food Therapy • Detox Diet Programs",
      },
      {
        category: "Hydrotherapy",
        items: "Hip Bath • Spinal Bath • Steam Bath • Immersion Bath • Contrast Bath",
      },
      {
        category: "Mud & Earth Therapy",
        items: "Mud Packs (Abdomen, Eyes, Spine) • Full Mud Bath",
      },
      {
        category: "Massage & Manipulative Therapy",
        items: "Therapeutic Massage • Partial Massage • Reflexology",
      },
      {
        category: "Clinical Naturopathy",
        items: "Diabetes Management • Hypertension Control • Obesity Management • Digestive Disorders",
      },
      {
        category: "Yoga Therapy",
        items: "Asana Therapy • Pranayama • Meditation • Yoga Nidra",
      },
      {
        category: "Physiotherapy & Rehabilitation",
        items: "Musculoskeletal Rehab • Joint & Spine Care • Postural Correction",
      },
      {
        category: "Lifestyle Disease Programs",
        items: "Cardiac Care • Respiratory Disorders • Thyroid Management",
      },
      {
        category: "Mental & Emotional Wellness",
        items: "Stress Management • Anxiety Control • Sleep Improvement Programs",
      },
      {
        category: "Preventive & Holistic Care",
        items: "Lifestyle Modification • Health Education • Personalized Wellness Plans",
      },
    ],
    packages: [
      {
        duration: "7 Days",
        focus: "Detox & Lifestyle Correction",
        inclusions: "Medical consultation, Naturopathy therapies, Yoga, Diet therapy",
        price: "₹35,000 – 50,000",
      },
      {
        duration: "14 Days",
        focus: "Lifestyle Disease Management",
        inclusions: "Diabetes, BP, Obesity, Digestive care, Yoga therapy",
        price: "₹65,000 – 85,000",
      },
      {
        duration: "21 Days",
        focus: "Intensive Healing & Rehabilitation",
        inclusions: "Deep detox, Hydrotherapy, Mud therapy, Rehab",
        price: "₹95,000 – 1,20,000",
      },
      {
        duration: "28 Days",
        focus: "Chronic Disease & Preventive Care",
        inclusions: "Long-term lifestyle modification & monitoring",
        price: "₹1,25,000 – 1,50,000",
      },
    ],
    rooms: [
      { type: "General Ward", description: "Shared accommodation", price: "₹500 – 800 / day" },
      { type: "Standard Room", description: "Non-AC private room", price: "₹1,200 – 1,800 / day" },
      { type: "Deluxe Room", description: "Attached bathroom, enhanced comfort", price: "₹2,000 – 2,800 / day" },
      { type: "AC / Premium Room", description: "AC, privacy, senior-friendly", price: "₹3,000 – 4,000 / day" },
    ],
  },
  {
    slug: "jindal",
    name: "Jindal Wellness Center",
    positioning: "Broad naturopathy & manual-therapy menu with acupuncture and heat-based treatments.",
    categories: [
      {
        category: "Naturopathy Treatments",
        items:
          "Hydrotherapy (water baths & jets) • Mud Therapy (packs & full body mud) • Fasting Therapy • Detoxification Protocols • Diet Therapy",
      },
      {
        category: "Yoga & Mind-Body Therapy",
        items: "Yoga Sessions • Meditation • Pranayama (breathing techniques)",
      },
      {
        category: "Physiotherapy & Manual Therapy",
        items: "Physiotherapy for mobility & pain relief • Manual therapies including oil therapy & muscle work",
      },
      {
        category: "Acupuncture",
        items: "Needle-based therapy to influence energy flow and assist healing",
      },
      {
        category: "Diet & Nutrition",
        items: "Therapeutic diet planning emphasizing seasonal natural foods",
      },
      {
        category: "Manual & Massage Therapies",
        items:
          "Deep Tissue Therapy • Hot Stone Therapy • Rejuvenation Therapy • Kairali Therapy • Vibro Therapy • Lymphatic Therapy • Salt Glow Therapy • Oil Therapy",
      },
      {
        category: "Hydrotherapy Variants",
        items:
          "Jacuzzi & Whirlpool • Jet Hydro Therapy • Colon Hydrotherapy • Oxygen Bath • Asthma Bath • Contrast Baths • Immersion & Hot-Cold Hip/Foot Baths",
      },
      {
        category: "Mud & Heat Therapies",
        items: "Full Mud Bath • Mud Packs • Heat Therapies (Infrared, Sauna)",
      },
      {
        category: "Ayurvedic-Style Applications",
        items: "Shirodhara • Basti • Neem-Aloe-Turmeric Therapy • Pack Therapies (abdominal, chest, spinal)",
      },
      {
        category: "Other Wellness Support",
        items: "Individual Yoga Sessions • Acupuncture Sessions • Facial Steam & Inhalation",
      },
    ],
    packages: [
      {
        duration: "7 Days",
        focus: "Detox & Lifestyle Reset",
        inclusions: "Naturopathy treatments, hydrotherapy, yoga, diet therapy",
        price: "₹45,000 – 75,000 (est.)",
      },
      {
        duration: "14 Days",
        focus: "Chronic & Lifestyle Management",
        inclusions: "Comprehensive naturopathy, yoga, consultations",
        price: "₹85,000 – 1,20,000 (est.)",
      },
      {
        duration: "21 Days",
        focus: "Intensive Healing & Rejuvenation",
        inclusions: "Extended detox, therapy schedule, personalized diet",
        price: "₹1,20,000 – 1,80,000 (est.)",
      },
      {
        duration: "28 Days",
        focus: "Holistic Long-Term Wellness",
        inclusions: "Full naturopathy protocols, rehab, lifestyle planning",
        price: "₹1,60,000 – 2,40,000 (est.)",
      },
    ],
    rooms: [],
    roomNote: "Room tariff not separately disclosed — priced within the package tiers above.",
  },
];

// Ayurvana's own packages, positioned against the market above.
export const ayurvanaPackages: PackageTier[] = [
  {
    duration: "3 Days",
    focus: "Restore — Stress Relief & Rejuvenation",
    inclusions: "Doctor consultation, Abhyanga & Shirodhara, Yoga & Pranayama, Sattvic detox meals",
    price: "₹28,000 – 38,000",
  },
  {
    duration: "7 Days",
    focus: "Renew — Detox & Lifestyle Reset",
    inclusions: "Personalised Panchakarma, herbal steam & Kizhi, Yoga Nidra, Ayurvedic diet therapy",
    price: "₹55,000 – 72,000",
  },
  {
    duration: "14 Days",
    focus: "Revive — Metabolic & Clinical Healing",
    inclusions: "Advanced Panchakarma, metabolic tracking, hormonal balance support, weekly physician review",
    price: "₹1,05,000 – 1,35,000",
  },
  {
    duration: "21 Days",
    focus: "Transform — Deep Detox & Disease Reversal",
    inclusions: "Intensive Panchakarma & Rasayana, physiotherapy, mind-body program, take-home wellness plan",
    price: "₹1,60,000 – 1,95,000",
  },
];
