export interface Therapy {
  slug: string;
  title: string;
  shortTitle?: string;
  category: string;
  tag: string;
  duration: string;
  price: string;
  image: string;
  excerpt: string;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  indications: string[];
  benefits: string[];
  content: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const therapyCategories = [
  "All",
  "Physiotherapy & Rehabilitation",
  "Regenerative Medicine",
  "Detox & Panchakarma",
  "Skin & Rejuvenation",
  "Anti-Aging & Wellness",
];

export const therapies: Therapy[] = [
  {
    slug: "physiotherapy-rehabilitation-therapy",
    title: "Physiotherapy",
    category: "Physiotherapy & Rehabilitation",
    tag: "Most Popular",
    duration: "45 mins",
    price: "₹1,500",
    image:
      "https://img.magnific.com/premium-photo/physiotherapist-assisting-elderly-patient-with-leg-exercises_954352-12600.jpg?uid=P71960457&ga=GA1.1.1847424523.1777460742&semt=ais_hybrid&w=740&q=80",
    excerpt:
      "A holistic rehabilitation approach that restores movement, strength, and function through evidence-based exercises, manual therapy, electrotherapy, and posture correction.",
    metaTitle: "Physiotherapy in [City] | Rehabilitation & Pain Recovery",
    metaDescription:
      "Physiotherapy restores mobility and strength through exercise therapy, manual therapy, electrotherapy and posture correction. Book a session at AyurVana.",
    keywords: ["physiotherapy", "rehabilitation therapy", "sports injury physiotherapy"],
    indications: [
      "Musculoskeletal pain",
      "Neurological disorders",
      "Sports injuries",
      "Post-surgical recovery",
      "Chronic conditions",
      "Postural imbalance",
    ],
    benefits: [
      "Improves mobility, strength and flexibility",
      "Reduces pain and inflammation",
      "Enhances circulation and tissue healing",
      "Corrects posture and movement patterns",
      "Prevents recurrence of future injuries",
      "Supports long-term functional independence",
    ],
    content: [
      {
        heading: "What is Physiotherapy?",
        body: "Physiotherapy is a holistic, evidence-based rehabilitation approach that restores movement, strength, and function using a combination of therapeutic exercise, manual therapy, electrotherapy, and posture correction. It addresses the root cause of pain and dysfunction rather than just the symptoms.",
      },
      {
        heading: "How the Session Works",
        body: "Your session begins with a functional assessment of movement, strength, and pain patterns. Our physiotherapist then combines hands-on manual techniques, guided exercises, and electrotherapy modalities as needed, building a personalised plan that progresses as you recover.",
      },
      {
        heading: "Who Should Try This",
        body: "Physiotherapy is suited to people recovering from musculoskeletal pain, neurological conditions, sports injuries, or surgery, as well as anyone managing a chronic condition or looking to prevent future injury through better movement and posture.",
      },
    ],
    faqs: [
      { q: "How many sessions will I need?", a: "This depends on your condition. Acute issues may need a short course of 4–6 sessions, while post-surgical or chronic rehabilitation is typically planned over several weeks." },
      { q: "Is physiotherapy painful?", a: "Some techniques may cause mild, temporary discomfort, especially with manual therapy, but sessions are always adjusted to your comfort level." },
      { q: "Can physiotherapy help after a sports injury?", a: "Yes, it's one of the most effective ways to restore strength, mobility and confidence after a sports injury and to reduce the risk of re-injury." },
    ],
  },
  {
    slug: "led-laser-therapy",
    title: "LED Laser Therapy",
    category: "Regenerative Medicine",
    tag: "Non-Invasive",
    duration: "30 mins",
    price: "₹2,200",
    image: "https://img.magnific.com/premium-photo/woman-is-laying-down-with-red-light-her-face_995663-6881.jpg?uid=P71960457&ga=GA1.1.1847424523.1777460742&semt=ais_hybrid&w=740&q=80",
    excerpt:
      "A non-invasive treatment that uses low-level light energy to stimulate cellular repair and regeneration, easing pain and accelerating recovery without downtime.",
    metaTitle: "LED Laser Therapy in [City] | Painless Cellular Repair Treatment",
    metaDescription:
      "LED laser therapy uses low-level light to improve circulation, reduce inflammation and speed tissue recovery. Non-invasive, no downtime. Book now.",
    keywords: ["led laser therapy", "low level light therapy", "photobiomodulation treatment"],
    indications: [
      "Arthritis",
      "Muscle injuries",
      "Post-operative healing",
      "Skin dullness or ageing",
      "Chronic inflammation",
      "Slow wound healing",
    ],
    benefits: [
      "Improves blood circulation to treated areas",
      "Reduces inflammation and pain",
      "Accelerates wound and tissue healing",
      "Increases cellular ATP production for faster repair",
      "Promotes skin and tissue recovery",
      "Completely painless with zero downtime",
    ],
    content: [
      {
        heading: "What is LED Laser Therapy?",
        body: "LED laser therapy is a non-invasive treatment that uses low-level light energy to stimulate cellular repair and regeneration. It works by boosting mitochondrial activity inside cells, increasing ATP production and supporting the body's natural healing processes.",
      },
      {
        heading: "How the Session Works",
        body: "A handheld LED device is passed gently over the treatment area for around 20–30 minutes. The light is absorbed by the skin and underlying tissue, with no heat, no needles, and no discomfort — you can resume normal activity immediately after.",
      },
      {
        heading: "Who Should Try This",
        body: "LED laser therapy is commonly used for arthritis, muscle injuries, skin rejuvenation, and post-operative recovery. It's a good option for anyone seeking pain relief or faster healing without invasive procedures or downtime.",
      },
    ],
    faqs: [
      { q: "Does LED laser therapy hurt?", a: "No — it's completely painless. Most people feel a mild, pleasant warmth on the skin during the session." },
      { q: "How many sessions are needed to see results?", a: "Many clients notice reduced pain or inflammation within 3–5 sessions, though a full course is often 8–10 sessions depending on the condition." },
      { q: "Is it safe for sensitive skin?", a: "Yes, LED laser therapy is gentle enough for sensitive and post-procedure skin. Our therapist will assess your skin before starting." },
    ],
  },

  {
    slug: "anti-aging-therapy",
    title: "Anti-Aging Therapy",
    category: "Anti-Aging & Wellness",
    tag: "Longevity",
    duration: "Consult-based",
    price: "On Request",
    image:
      "https://img.magnific.com/premium-photo/plastic-surgery-beauty-concept-professional-cosmetician-examining-touching-face-beautiful-young-caucasian-smiling-woman-clinic-esthetic-cosmetology_141172-11357.jpg?uid=P71960457&ga=GA1.1.1847424523.1777460742&semt=ais_hybrid&w=740&q=80",
    excerpt:
      "A comprehensive programme that slows biological ageing and restores optimal cellular function through nutrition, hormonal balance, lifestyle modification, and regenerative treatments.",
    metaTitle: "Anti-Aging Therapy in [City] | Longevity & Vitality Programme",
    metaDescription:
      "Anti-aging therapy combines nutrition, hormonal balance and regenerative treatments to improve skin, energy and vitality while slowing age-related decline.",
    keywords: ["anti-aging therapy", "longevity treatment", "cellular rejuvenation programme"],
    indications: [
      "Premature skin ageing",
      "Low energy levels",
      "Hormonal decline",
      "Cognitive fatigue",
      "Weakened immunity",
      "Metabolic slowdown",
    ],
    benefits: [
      "Improves skin quality and radiance",
      "Boosts energy levels and immunity",
      "Supports metabolic and hormonal balance",
      "Enhances cognitive function",
      "Reduces oxidative stress and inflammation",
      "Supports long-term longevity and vitality",
    ],
    content: [
      {
        heading: "What is Anti-Aging Therapy?",
        body: "Anti-aging therapy is a comprehensive programme focused on slowing biological ageing and restoring optimal cellular function. It combines nutrition guidance, hormonal balance, lifestyle modification, detoxification, and advanced regenerative treatments into a single personalised plan.",
      },
      {
        heading: "How the Programme Works",
        body: "Your programme begins with an in-depth consultation covering health history, lifestyle, and goals. Based on this, our specialists design a plan combining nutritional support, hormonal assessment, detox protocols, and regenerative treatments suited to your needs.",
      },
      {
        heading: "Who Should Try This",
        body: "This therapy suits anyone looking to improve energy, skin quality, immunity, and overall vitality, or to proactively address age-related decline before it becomes a bigger concern.",
      },
    ],
    faqs: [
      { q: "At what age should I start anti-aging therapy?", a: "There's no fixed age — many people begin in their 30s or 40s as a preventive measure, though the programme can be tailored to any age group." },
      { q: "Will I need ongoing sessions?", a: "Anti-aging therapy works best as an ongoing, personalised programme rather than a one-time treatment. Your specialist will recommend a suitable schedule." },
      { q: "Is this therapy purely cosmetic?", a: "No, it addresses overall cellular health, energy, immunity and hormonal balance in addition to visible signs of ageing." },
    ],
  },
  {
    slug: "ozonation-therapy",
    title: "Ozonation Therapy",
    category: "Detox & Panchakarma",
    tag: "Immune Support",
    duration: "45 mins",
    price: "On Request",
    image:
      "https://img.magnific.com/premium-photo/woman-getting-facial-treatment-beauty-salon_946585-8595.jpg?uid=P71960457&ga=GA1.1.1847424523.1777460742&semt=ais_hybrid&w=740&q=80",
    excerpt:
      "Uses medical-grade ozone to improve oxygen utilisation, detoxification, and immune modulation, supporting faster healing and systemic rejuvenation.",
    metaTitle: "Ozonation Therapy in [City] | Detox & Immune Support Treatment",
    metaDescription:
      "Ozonation therapy uses medical-grade ozone to boost circulation, reduce inflammation and support immunity. Book your session at AyurVana.",
    keywords: ["ozonation therapy", "ozone therapy", "immune support detox treatment"],
    indications: [
      "Chronic infections",
      "Pain management needs",
      "Metabolic disorders",
      "Immune dysfunction",
      "Poor cellular oxygenation",
      "Fatigue and low vitality",
    ],
    benefits: [
      "Enhances blood circulation and oxygen utilisation",
      "Reduces microbial load and inflammation",
      "Stimulates the body's antioxidant defenses",
      "Improves mitochondrial and cellular efficiency",
      "Supports immune modulation",
      "Promotes overall systemic rejuvenation",
    ],
    content: [
      {
        heading: "What is Ozonation Therapy?",
        body: "Ozonation therapy uses medical-grade ozone to improve oxygen utilisation, support detoxification, and modulate immune function. It works at a cellular level to enhance circulation and stimulate the body's own antioxidant defenses.",
      },
      {
        heading: "How the Session Works",
        body: "Depending on your treatment plan, ozone is administered using a medical-grade method suited to your condition. Sessions are supervised throughout, with your specialist monitoring response and adjusting future sessions accordingly.",
      },
      {
        heading: "Who Should Try This",
        body: "Ozonation therapy is commonly used for chronic infections, pain management, metabolic disorders, and immune dysfunction, and is often included as part of a broader detox or wellness programme.",
      },
    ],
    faqs: [
      { q: "Is ozonation therapy safe?", a: "When administered by trained professionals using medical-grade protocols, it is considered safe. A consultation will confirm suitability for your specific health profile." },
      { q: "How many sessions are recommended?", a: "This varies by condition — your specialist will recommend a course length based on your consultation and treatment goals." },
      { q: "Will I feel different after a session?", a: "Many clients report feeling more energised and clear-headed, though individual responses vary." },
    ],
  },
  {
    slug: "hydra-facial-therapy",
    title: "Hydra Facial",
    category: "Skin & Rejuvenation",
    tag: "Most Popular",
    duration: "45 mins",
    price: "₹3,500",
    image:
      "https://img.magnific.com/premium-photo/beauty-therapist-performing-detoxifying-facial-treatment-focusing-skin-health-ideal-beaut_980716-213789.jpg?uid=P71960457&ga=GA1.1.1847424523.1777460742&semt=ais_hybrid&w=740&q=80",
    excerpt:
      "An advanced, non-invasive skin rejuvenation treatment that deeply cleanses, exfoliates, extracts impurities, and hydrates the skin simultaneously.",
    metaTitle: "Hydra Facial in [City] | Deep Cleansing & Hydration Treatment",
    metaDescription:
      "Hydra Facial uses vortex technology and nutrient-rich serums to cleanse, exfoliate and hydrate skin for a refreshed, radiant glow. Book at AyurVana.",
    keywords: ["hydra facial", "vortex facial treatment", "skin hydration facial"],
    indications: [
      "Acne-prone skin",
      "Pigmentation",
      "Fine lines",
      "Dull or tired skin",
      "Clogged pores",
      "Uneven skin texture",
    ],
    benefits: [
      "Deeply cleanses and exfoliates the skin",
      "Extracts impurities from clogged pores",
      "Hydrates and nourishes with nutrient-rich serums",
      "Improves skin texture, tone and elasticity",
      "Reduces acne, pigmentation and fine lines",
      "Suitable for all skin types",
    ],
    content: [
      {
        heading: "What is Hydra Facial?",
        body: "Hydra Facial is an advanced, non-invasive skin rejuvenation treatment that combines cleansing, exfoliation, extraction, and hydration in a single session using vortex technology and nutrient-rich serums.",
      },
      {
        heading: "How the Session Works",
        body: "A specialised device is used to cleanse and exfoliate the skin, gently extract impurities from pores, and infuse hydrating serums tailored to your skin's needs — all within a single, comfortable 45-minute session.",
      },
      {
        heading: "Who Should Try This",
        body: "Hydra Facial suits all skin types and is especially popular for those dealing with acne, pigmentation, fine lines, or dullness who want visible results with no downtime.",
      },
    ],
    faqs: [
      { q: "Is Hydra Facial suitable for sensitive skin?", a: "Yes, it is gentle enough for most skin types, including sensitive skin. Our therapist will tailor the serums used to your skin's needs." },
      { q: "Is there any downtime?", a: "No, you can resume your normal routine immediately after the session, often with visibly refreshed skin right away." },
      { q: "How often should I get a Hydra Facial?", a: "Once every 3–4 weeks is commonly recommended to maintain results, though this can be adjusted to your skin's needs." },
    ],
  },
  {
    slug: "stretch-mark-reduction-therapy",
    title: "Stretch Mark Reduction Therapy",
    category: "Skin & Rejuvenation",
    tag: "Skin Renewal",
    duration: "40 mins",
    price: "On Request",
    image:
      "https://img.magnific.com/premium-photo/doctor-with-xray-putting-her-hand-back-patient-with-kinesio-tapes_151013-25395.jpg?uid=P71960457&ga=GA1.1.1847424523.1777460742&semt=ais_hybrid&w=740&q=80",
    excerpt:
      "Improves skin texture and elasticity using advanced technologies such as lasers, radiofrequency, and microneedling to visibly reduce stretch marks.",
    metaTitle: "Stretch Mark Reduction Therapy in [City] | Advanced Skin Renewal",
    metaDescription:
      "Reduce stretch marks with laser, radiofrequency and microneedling treatments that stimulate collagen and improve skin firmness. Book at AyurVana.",
    keywords: ["stretch mark reduction therapy", "stretch mark treatment", "collagen skin renewal"],
    indications: [
      "Pregnancy-related stretch marks",
      "Weight-change stretch marks",
      "Hormonal stretch marks",
      "Loss of skin elasticity",
      "Uneven skin texture",
    ],
    benefits: [
      "Stimulates collagen and elastin production",
      "Reduces the appearance of stretch marks",
      "Improves skin firmness and smoothness",
      "Enhances overall skin tone",
      "Supports long-term skin renewal",
    ],
    content: [
      {
        heading: "What is Stretch Mark Reduction Therapy?",
        body: "Stretch Mark Reduction Therapy focuses on improving skin texture and elasticity using advanced technologies such as lasers, radiofrequency, and microneedling. These treatments stimulate collagen and elastin production to visibly reduce stretch marks over time.",
      },
      {
        heading: "How the Session Works",
        body: "Based on your skin type and the nature of your stretch marks, our specialist selects the most suitable technology and treatment intensity. Sessions are performed in a series, with visible improvement building progressively over the course.",
      },
      {
        heading: "Who Should Try This",
        body: "This therapy is suited to anyone with stretch marks caused by pregnancy, weight changes, or hormonal shifts who wants to improve skin firmness, smoothness, and tone over time.",
      },
    ],
    faqs: [
      { q: "How many sessions are needed to see results?", a: "Most clients need a course of several sessions, spaced a few weeks apart, for visible improvement — your specialist will outline a plan during consultation." },
      { q: "Can stretch marks be completely removed?", a: "Results vary by individual and the age of the stretch marks. The therapy significantly improves their appearance rather than guaranteeing complete removal." },
      { q: "Is the treatment painful?", a: "Most clients experience only mild discomfort, and numbing options are available for more sensitive treatments." },
    ],
  },
  {
    slug: "ayurvedic-facial-therapy",
    title: "Ayurvedic Facial",
    category: "Skin & Rejuvenation",
    tag: "Natural Glow",
    duration: "50 mins",
    price: "₹2,400",
    image:
      "https://img.magnific.com/premium-photo/woman-gets-facial-mask-treatment-spa-relaxed-calm-female-client-lies-down-ayurvedic_1299716-37303.jpg?uid=P71960457&ga=GA1.1.1847424523.1777460742&semt=ais_hybrid&w=740&q=80",
    excerpt:
      "A natural skin rejuvenation therapy based on ancient Ayurvedic principles, using dosha-specific oils and herbs to detoxify, nourish, and restore your natural glow.",
    metaTitle: "Ayurvedic Facial in [City] | Natural Herbal Skin Rejuvenation",
    metaDescription:
      "Ayurvedic Facial uses dosha-specific oils and herbs to cleanse, nourish and balance the skin naturally. Book your session at AyurVana.",
    keywords: ["ayurvedic facial", "herbal facial treatment", "natural skin rejuvenation"],
    indications: [
      "Dull or stressed skin",
      "Uneven skin tone",
      "Dosha imbalance-related skin issues",
      "Early signs of ageing",
      "Stress-related breakouts",
    ],
    benefits: [
      "Detoxifies and cleanses the skin naturally",
      "Improves circulation to the face",
      "Balances skin physiology according to your dosha",
      "Enhances natural glow and radiance",
      "Reduces stress-related skin issues",
      "Supports holistic beauty from within",
    ],
    content: [
      {
        heading: "What is an Ayurvedic Facial?",
        body: "An Ayurvedic Facial is a natural skin rejuvenation therapy based on ancient Ayurvedic principles and herbal formulations. It involves gentle cleansing, exfoliation, massage, and nourishment using oils and herbs selected for your specific dosha.",
      },
      {
        heading: "How the Session Works",
        body: "Your therapist begins with a gentle herbal cleanse, followed by exfoliation and a relaxing facial massage using dosha-specific oils. The session concludes with a nourishing herbal mask to leave your skin balanced and glowing.",
      },
      {
        heading: "Who Should Try This",
        body: "This facial suits anyone seeking a natural, holistic approach to skin health, particularly those wanting to address stress-related dullness or looking for a gentler alternative to chemical-based facials.",
      },
    ],
    faqs: [
      { q: "Is the Ayurvedic Facial suitable for all skin types?", a: "Yes, oils and herbs are selected based on your skin type and dosha, making it suitable for most skin types including sensitive skin." },
      { q: "How soon will I see a glow?", a: "Many clients notice a visible glow immediately after the session, with continued improvement in skin tone from regular treatments." },
      { q: "How often should I book this facial?", a: "Once every 3–4 weeks is generally recommended to maintain and build on results." },
    ],
  },
  {
    slug: "panchakarma-detox-therapy",
    title: "Panchakarma Therapy",
    category: "Detox & Panchakarma",
    tag: "Complete Detox",
    duration: "5–14 days",
    price: "On Request",
    image:
      "https://img.magnific.com/premium-photo/woman-receiving-relaxing-head-massage-outdoors-sunset-surrounded-by-nature-warm-golden_1289534-2452.jpg?uid=P71960457&ga=GA1.1.1847424523.1777460742&semt=ais_hybrid&w=740&q=80",
    excerpt:
      "A classical Ayurvedic detoxification and rejuvenation programme that cleanses the body of accumulated toxins and balances the doshas — Vata, Pitta, and Kapha.",
    metaTitle: "Panchakarma Therapy in [City] | Ayurvedic Detox & Rejuvenation Programme",
    metaDescription:
      "Panchakarma is a classical Ayurvedic detox and rejuvenation programme that balances the doshas and improves digestion, immunity and vitality. Book at AyurVana.",
    keywords: ["panchakarma therapy", "ayurvedic detox programme", "panchakarma treatment plan"],
    indications: [
      "Toxin build-up (ama)",
      "Digestive disorders",
      "Chronic diseases",
      "Stress-related conditions",
      "Joint disorders",
      "Metabolic and hormonal imbalance",
    ],
    benefits: [
      "Deep cleansing of accumulated toxins",
      "Restores balance across Vata, Pitta and Kapha",
      "Improves digestion and metabolism",
      "Boosts immunity and hormonal balance",
      "Supports deep healing and vitality",
      "Promotes long-term holistic health",
    ],
    content: [
      {
        heading: "What is Panchakarma?",
        body: "Panchakarma is a classical Ayurvedic detoxification and rejuvenation programme designed to cleanse the body of accumulated toxins (ama) and restore balance across the three doshas — Vata, Pitta, and Kapha — through five therapeutic procedures.",
      },
      {
        heading: "How the Programme is Structured",
        body: "Each programme begins with a preparatory phase (snehana and swedana) involving oil therapies and steam, followed by the main cleansing procedures chosen for your constitution, and ends with a rejuvenation phase to rebuild strength and vitality.",
      },
      {
        heading: "Who Should Try This",
        body: "Panchakarma suits those dealing with chronic disease, digestive issues, joint disorders, stress, or metabolic imbalance, as well as anyone wanting a structured seasonal reset. Programmes typically run 5–14 days and are planned after an initial consultation.",
      },
    ],
    faqs: [
      { q: "How long does a Panchakarma programme take?", a: "Programmes typically range from 5 to 14 days depending on your health goals and what your consultation reveals." },
      { q: "Do I need a consultation before booking?", a: "Yes, Panchakarma is always personalised. A consultation with our physician determines the right combination of procedures for you." },
      { q: "Are there dietary restrictions during the programme?", a: "Yes, a specific diet is prescribed throughout the programme to support the detox process — our team will guide you fully." },
    ],
  },
  {
    slug: "scrub-therapy",
    title: "Scrub Therapy",
    category: "Skin & Rejuvenation",
    tag: "Exfoliation",
    duration: "40 mins",
    price: "On Request",
    image: "https://img.magnific.com/premium-photo/man-getting-facial-professional-salon-realistic-spa-treatment-skincare_1106493-85727.jpg?uid=P71960457&ga=GA1.1.1847424523.1777460742&semt=ais_hybrid&w=740&q=80",
    excerpt:
      "A rejuvenating body treatment that gently exfoliates dead skin cells, improves circulation, and prepares the body for deeper therapeutic and wellness treatments.",
    metaTitle: "Scrub Therapy in [City] | Exfoliation & Skin Renewal Treatment",
    metaDescription:
      "Scrub therapy exfoliates dead skin, stimulates circulation and unclogs pores for smooth, radiant skin. Book your session at AyurVana.",
    keywords: ["scrub therapy", "body exfoliation treatment", "skin renewal therapy"],
    indications: [
      "Dull or rough skin",
      "Clogged pores",
      "Poor circulation",
      "Uneven skin texture",
      "Pre-treatment skin preparation",
    ],
    benefits: [
      "Gently exfoliates dead skin cells",
      "Improves skin texture and radiance",
      "Stimulates blood circulation",
      "Unclogs pores and enhances nutrient absorption",
      "Supports detoxification through improved lymphatic flow",
      "Prepares the body for further therapeutic treatments",
    ],
    content: [
      {
        heading: "What is Scrub Therapy?",
        body: "Scrub therapy is a rejuvenating body treatment that gently exfoliates dead skin cells using natural or therapeutic scrubs. It improves skin texture, stimulates blood circulation, and unclogs pores while enhancing the skin's ability to absorb nutrients from follow-up treatments.",
      },
      {
        heading: "How the Session Works",
        body: "Your therapist applies a carefully chosen scrub across the body using rhythmic, circulating strokes to lift away dead skin and stimulate lymphatic flow. The treatment finishes with a rinse and hydrating application, leaving skin smooth and refreshed.",
      },
      {
        heading: "Who Should Try This",
        body: "Scrub therapy suits anyone looking to refresh dull or rough skin, improve circulation, or prepare the body for further wellness treatments such as facials, wraps, or massage therapy.",
      },
    ],
    faqs: [
      { q: "How often should I get a scrub therapy session?", a: "Once every 2–3 weeks is generally recommended to maintain smooth, radiant skin without over-exfoliating." },
      { q: "Is scrub therapy suitable for sensitive skin?", a: "Yes, your therapist will select a gentler scrub formulation if you have sensitive skin." },
      { q: "Can I combine this with other treatments?", a: "Yes, scrub therapy is often used as a preparatory step before facials, body wraps, or massage therapies for enhanced results." },
    ],
  },
  {
    slug: "inch-loss-therapy",
    title: "Inch Loss Therapy",
    category: "Anti-Aging & Wellness",
    tag: "Body Contouring",
    duration: "50 mins",
    price: "On Request",
    image: "https://img.magnific.com/premium-photo/woman-measuring-weight-with-measuring-tape-waist-summer-beach-with-transition_1134-13652.jpg?uid=P71960457&ga=GA1.1.1847424523.1777460742&semt=ais_hybrid&w=740&q=80",
    excerpt:
      "A non-surgical body contouring approach that combines massage, heat, wraps, and metabolic stimulation to reduce localized fat and improve body shape.",
    metaTitle: "Inch Loss Therapy in [City] | Non-Surgical Body Contouring",
    metaDescription:
      "Inch loss therapy combines massage, heat and metabolic stimulation to reduce measurements and firm skin without downtime. Book at AyurVana.",
    keywords: ["inch loss therapy", "body contouring treatment", "non-surgical fat reduction"],
    indications: [
      "Localized fat deposits",
      "Loose or uneven body shape",
      "Poor circulation",
      "Post-weight-loss skin laxity",
      "Sluggish lymphatic drainage",
    ],
    benefits: [
      "Reduces body measurements",
      "Improves skin firmness",
      "Boosts circulation and lymphatic drainage",
      "Enhances fat breakdown in targeted areas",
      "Supports healthy weight management",
      "No downtime required",
    ],
    content: [
      {
        heading: "What is Inch Loss Therapy?",
        body: "Inch loss therapy is a non-surgical body contouring approach aimed at reducing localized fat and improving body shape. It combines massage, heat, wraps, and metabolic stimulation to enhance fat breakdown and lymphatic drainage.",
      },
      {
        heading: "How the Session Works",
        body: "Your therapist targets specific areas using a combination of manual techniques, thermal application, and contouring wraps designed to stimulate circulation and support the body's natural fat metabolism.",
      },
      {
        heading: "Who Should Try This",
        body: "This therapy suits anyone looking to reduce localized fat, firm up problem areas, or support an overall weight management plan without surgery or downtime.",
      },
    ],
    faqs: [
      { q: "How many sessions will I need to see results?", a: "Most clients see visible measurement changes over a course of 6–10 sessions, depending on individual goals." },
      { q: "Is inch loss therapy painful?", a: "No, the treatment is comfortable, with most clients finding the massage and heat elements relaxing." },
      { q: "Will the results last?", a: "Results are best maintained with a balanced diet and regular activity alongside your treatment course." },
    ],
  },
  {
    slug: "aromatherapy",
    title: "Aromatherapy",
    category: "Anti-Aging & Wellness",
    tag: "Relaxation",
    duration: "45 mins",
    price: "On Request",
    image: "https://img.magnific.com/premium-photo/peaceful-aromatherapy-setup-with-scented-oils-fresh-rosemary_1302531-634.jpg?uid=P71960457&ga=GA1.1.1847424523.1777460742&semt=ais_hybrid&w=740&q=80",
    excerpt:
      "Uses natural essential oils to promote physical, emotional, and mental well-being, reducing stress and fatigue while enhancing mood and sleep quality.",
    metaTitle: "Aromatherapy in [City] | Essential Oil Relaxation Treatment",
    metaDescription:
      "Aromatherapy uses natural essential oils to reduce stress, improve sleep and enhance mood through inhalation and topical application. Book at AyurVana.",
    keywords: ["aromatherapy", "essential oil therapy", "relaxation treatment"],
    indications: [
      "Stress and anxiety",
      "Fatigue",
      "Poor sleep quality",
      "Low mood",
      "Muscular tension",
    ],
    benefits: [
      "Reduces stress, anxiety and fatigue",
      "Improves sleep quality",
      "Enhances mood and emotional balance",
      "Supports immunity",
      "Promotes deep relaxation",
      "Stimulates the limbic system for calming effects",
    ],
    content: [
      {
        heading: "What is Aromatherapy?",
        body: "Aromatherapy uses natural essential oils extracted from plants to promote physical, emotional, and mental well-being. Through inhalation or topical application, it helps reduce stress, anxiety, fatigue, and pain.",
      },
      {
        heading: "How the Session Works",
        body: "Your therapist selects essential oil blends suited to your needs and applies them through gentle massage or diffusion, allowing the aromatic compounds to stimulate relaxation responses throughout the session.",
      },
      {
        heading: "Who Should Try This",
        body: "Aromatherapy is ideal for anyone experiencing stress, poor sleep, low mood, or general fatigue, and works well as a standalone treatment or alongside other wellness therapies.",
      },
    ],
    faqs: [
      { q: "Are the essential oils safe for all skin types?", a: "Your therapist will select oils suited to your skin sensitivity and any known allergies during your consultation." },
      { q: "How soon will I feel the effects?", a: "Many clients notice a calming effect during or immediately after the session, with cumulative benefits from regular sessions." },
      { q: "Can aromatherapy help with sleep issues?", a: "Yes, certain essential oil blends are specifically chosen to support relaxation and improve sleep quality." },
    ],
  },
  {
    slug: "cupping-therapy",
    title: "Cupping Therapy",
    category: "Physiotherapy & Rehabilitation",
    tag: "Traditional Technique",
    duration: "30 mins",
    price: "On Request",
    image: "https://img.magnific.com/premium-photo/acupuncture-woman-therapist-placing-cup-back-female-patient_141172-8855.jpg?uid=P71960457&ga=GA1.1.1847424523.1777460742&semt=ais_hybrid&w=740&q=80",
    excerpt:
      "A traditional therapeutic technique using suction cups to improve blood circulation, relieve muscle tension, and support faster recovery from pain and stiffness.",
    metaTitle: "Cupping Therapy in [City] | Muscle Tension & Pain Relief",
    metaDescription:
      "Cupping therapy uses suction cups to boost circulation, ease muscle tension and support detoxification. Book your session at AyurVana.",
    keywords: ["cupping therapy", "suction cup treatment", "muscle tension relief"],
    indications: [
      "Musculoskeletal pain",
      "Muscle stiffness",
      "Chronic tension",
      "Stress-related fatigue",
      "Poor circulation",
    ],
    benefits: [
      "Improves blood circulation",
      "Relieves muscle tension and stiffness",
      "Reduces pain and inflammation",
      "Promotes detoxification through lymphatic flow",
      "Supports faster physical recovery",
      "Encourages overall relaxation",
    ],
    content: [
      {
        heading: "What is Cupping Therapy?",
        body: "Cupping therapy is a traditional therapeutic technique that uses suction cups to improve blood circulation and relieve muscle tension. It helps reduce pain, inflammation, and stiffness while promoting detoxification through enhanced lymphatic flow.",
      },
      {
        heading: "How the Session Works",
        body: "Your therapist places specialised cups on targeted areas to create gentle suction, drawing blood flow to the surface and releasing tension in the underlying muscles. Sessions typically last 20–30 minutes.",
      },
      {
        heading: "Who Should Try This",
        body: "Cupping therapy is commonly used for musculoskeletal pain, stress relief, and fatigue, making it a good option for anyone seeking faster recovery and physical relaxation.",
      },
    ],
    faqs: [
      { q: "Does cupping leave marks?", a: "Temporary circular marks may appear at the treatment sites, which typically fade within a few days." },
      { q: "Is cupping therapy painful?", a: "Most clients find it relaxing rather than painful, though there may be mild pressure during suction." },
      { q: "How often can I get cupping therapy?", a: "This depends on your condition — your therapist will recommend a suitable frequency during consultation." },
    ],
  },
  {
    slug: "helio-mud-therapy",
    title: "Helio and Mud Therapy",
    category: "Detox & Panchakarma",
    tag: "Natural Healing",
    duration: "60 mins",
    price: "On Request",
    image: "https://img.magnific.com/premium-photo/man-with-mud-mask-relaxes-spa-floating-peacefully-with-his-eyes-closed-enjoying-rejuvenat_1289534-2642.jpg?uid=P71960457&ga=GA1.1.1847424523.1777460742&semt=ais_hybrid&w=740&q=80",
    excerpt:
      "Combines therapeutic sunlight exposure and mineral-rich mud applications to promote healing, detoxification, and overall physical rejuvenation.",
    metaTitle: "Helio and Mud Therapy in [City] | Natural Detox & Healing Treatment",
    metaDescription:
      "Helio and mud therapy combine sunlight exposure and mineral-rich mud to reduce inflammation, relieve joint pain and boost immunity. Book at AyurVana.",
    keywords: ["helio therapy", "mud therapy", "natural detox treatment"],
    indications: [
      "Joint pain",
      "Chronic inflammation",
      "Skin concerns",
      "Low vitamin D levels",
      "Muscle tension",
    ],
    benefits: [
      "Enhances vitamin D synthesis and immunity",
      "Reduces inflammation and joint pain",
      "Improves skin health",
      "Improves circulation and relaxes muscles",
      "Supports metabolic balance",
      "Promotes overall physical rejuvenation",
    ],
    content: [
      {
        heading: "What is Helio and Mud Therapy?",
        body: "Helio and mud therapy combine therapeutic sunlight exposure and mineral-rich mud applications to promote healing and detoxification. Helio therapy enhances vitamin D synthesis and boosts immunity, while mud therapy reduces inflammation and relieves joint pain.",
      },
      {
        heading: "How the Session Works",
        body: "Your session includes controlled sun exposure combined with the application of mineral-rich mud to targeted areas, allowing both therapies to work together to improve circulation and relax the muscles.",
      },
      {
        heading: "Who Should Try This",
        body: "This therapy suits anyone dealing with joint pain, chronic inflammation, or low vitamin D levels, as well as those seeking a natural approach to detoxification and rejuvenation.",
      },
    ],
    faqs: [
      { q: "Is sun exposure during this therapy safe?", a: "Yes, exposure is carefully controlled and monitored by our specialists to ensure safety and effectiveness." },
      { q: "What does the mud application feel like?", a: "Most clients find the mineral-rich mud soothing and relaxing, particularly on areas with joint discomfort." },
      { q: "How often should I do this therapy?", a: "Frequency depends on your health goals — your specialist will recommend a suitable plan during consultation." },
    ],
  },
  {
    slug: "sleep-therapy",
    title: "Sleep Therapy",
    category: "Anti-Aging & Wellness",
    tag: "Restorative Care",
    duration: "45 mins",
    price: "On Request",
    image: "https://img.magnific.com/premium-photo/young-man-unwinding-massage-table-spa-savoring-tranquility-before-his-treatment_661495-97987.jpg?uid=P71960457&ga=GA1.1.1847424523.1777460742&semt=ais_hybrid&w=740&q=80",
    excerpt:
      "Focuses on improving sleep quality by addressing lifestyle habits, stress, and circadian rhythm imbalance through relaxation and behavioral interventions.",
    metaTitle: "Sleep Therapy in [City] | Insomnia & Sleep Quality Treatment",
    metaDescription:
      "Sleep therapy addresses stress, lifestyle habits and circadian imbalance to manage insomnia and improve sleep quality. Book at AyurVana.",
    keywords: ["sleep therapy", "insomnia treatment", "sleep quality improvement"],
    indications: [
      "Insomnia",
      "Circadian rhythm imbalance",
      "Chronic stress",
      "Poor sleep quality",
      "Nervous system dysregulation",
    ],
    benefits: [
      "Improves sleep quality and duration",
      "Balances hormonal rhythms",
      "Enhances mental clarity",
      "Supports immunity and energy levels",
      "Reduces stress and nervous system overactivity",
      "Promotes overall emotional stability",
    ],
    content: [
      {
        heading: "What is Sleep Therapy?",
        body: "Sleep therapy focuses on improving sleep quality by addressing lifestyle habits, stress, circadian rhythm imbalance, and nervous system regulation. It includes relaxation techniques, behavioral interventions, and supportive therapies to manage insomnia and sleep disorders.",
      },
      {
        heading: "How the Session Works",
        body: "Your therapist begins with an assessment of your sleep patterns and lifestyle factors, then applies relaxation techniques and behavioral guidance tailored to help regulate your circadian rhythm and calm the nervous system.",
      },
      {
        heading: "Who Should Try This",
        body: "Sleep therapy is suited to anyone experiencing insomnia, disrupted sleep patterns, or stress-related sleep issues who wants a structured, non-pharmacological approach to better rest.",
      },
    ],
    faqs: [
      { q: "How quickly will my sleep improve?", a: "Many clients notice improvement within a few sessions, though a full course is often recommended for lasting change." },
      { q: "Is this a substitute for medical treatment of sleep disorders?", a: "This therapy is complementary — clients with diagnosed sleep disorders should continue working with their physician alongside this programme." },
      { q: "What happens during a session?", a: "Sessions typically combine relaxation techniques, lifestyle guidance, and supportive therapies tailored to your specific sleep challenges." },
    ],
  },
  {
    slug: "prenatal-postnatal-therapy",
    title: "Prenatal and Postnatal Therapy",
    category: "Physiotherapy & Rehabilitation",
    tag: "Maternal Care",
    duration: "50 mins",
    price: "On Request",
    image: "https://img.magnific.com/premium-photo/banner-pregnant-woman-making-appropriate-postures-her-baby-womb_669646-10676.jpg?uid=P71960457&ga=GA1.1.1847424523.1777460742&semt=ais_hybrid&w=740&q=80",
    excerpt:
      "Supports women's health before and after childbirth through specialized massages, exercises, and relaxation techniques for faster recovery and well-being.",
    metaTitle: "Prenatal and Postnatal Therapy in [City] | Maternal Wellness Care",
    metaDescription:
      "Prenatal and postnatal therapy relieves pregnancy discomfort and supports postpartum recovery through specialized massage and relaxation techniques. Book at AyurVana.",
    keywords: ["prenatal therapy", "postnatal therapy", "maternal wellness treatment"],
    indications: [
      "Pregnancy-related back pain",
      "Swelling during pregnancy",
      "Postpartum recovery",
      "Muscle tone loss after childbirth",
      "Hormonal imbalance postpartum",
    ],
    benefits: [
      "Relieves back pain and swelling during pregnancy",
      "Aids postpartum physical recovery",
      "Improves muscle tone",
      "Supports lactation",
      "Restores hormonal balance",
      "Promotes maternal emotional well-being",
    ],
    content: [
      {
        heading: "What is Prenatal and Postnatal Therapy?",
        body: "Prenatal and postnatal therapy supports women's health before and after childbirth through specialized massages, exercises, and relaxation techniques. Prenatal therapy relieves back pain, swelling, and stress, while postnatal therapy aids recovery, improves muscle tone, and restores hormonal balance.",
      },
      {
        heading: "How the Session Works",
        body: "Your therapist tailors each session to your stage — using safe, supportive positioning and gentle techniques during pregnancy, or focused recovery-oriented massage and exercises in the postpartum period.",
      },
      {
        heading: "Who Should Try This",
        body: "This therapy is designed for expecting mothers seeking relief from pregnancy discomfort, and for new mothers looking to support physical and emotional recovery after childbirth.",
      },
    ],
    faqs: [
      { q: "Is this therapy safe during all trimesters?", a: "Techniques are adapted to each trimester and your specific condition — your therapist will confirm suitability during consultation." },
      { q: "When can I start postnatal therapy after delivery?", a: "This depends on your delivery type and recovery — please consult your physician and our specialist before beginning." },
      { q: "Will this therapy help with lactation?", a: "Yes, postnatal therapy includes techniques that can support lactation as part of overall recovery." },
    ],
  },
  {
    slug: "myofascial-therapy",
    title: "Myofascial Therapy",
    category: "Physiotherapy & Rehabilitation",
    tag: "Manual Therapy",
    duration: "45 mins",
    price: "On Request",
    image: "https://img.magnific.com/premium-photo/panoramic-shot-bearded-chiropractor-doing-massage-man-massage-table_824701-12873.jpg?uid=P71960457&ga=GA1.1.1847424523.1777460742&semt=ais_hybrid&w=740&q=80",
    excerpt:
      "A manual therapy technique that targets the fascia to relieve pain, stiffness, and movement restriction, restoring natural movement and functional balance.",
    metaTitle: "Myofascial Therapy in [City] | Manual Pain & Mobility Treatment",
    metaDescription:
      "Myofascial therapy targets the fascia with sustained pressure and stretching to relieve pain, stiffness and restore mobility. Book at AyurVana.",
    keywords: ["myofascial therapy", "myofascial release", "manual therapy treatment"],
    indications: [
      "Chronic pain",
      "Sports injuries",
      "Movement restriction",
      "Postural imbalance",
      "Stress-related muscle tension",
    ],
    benefits: [
      "Relieves pain and stiffness",
      "Improves muscle flexibility",
      "Corrects posture",
      "Enhances circulation",
      "Restores natural movement patterns",
      "Supports recovery from sports injuries",
    ],
    content: [
      {
        heading: "What is Myofascial Therapy?",
        body: "Myofascial therapy is a manual therapy technique that targets the fascia to relieve pain, stiffness, and movement restriction. By applying sustained pressure and stretching, it improves muscle flexibility, posture, and circulation.",
      },
      {
        heading: "How the Session Works",
        body: "Your therapist identifies areas of fascial restriction and applies sustained, targeted pressure and stretching techniques, gradually releasing tension and restoring range of motion.",
      },
      {
        heading: "Who Should Try This",
        body: "This therapy is effective for chronic pain, sports injuries, and stress-related tension, making it a good fit for anyone looking to restore natural movement and functional balance.",
      },
    ],
    faqs: [
      { q: "Is myofascial therapy painful?", a: "You may feel pressure or mild discomfort during release of tight areas, but the technique is always adjusted to your comfort level." },
      { q: "How many sessions will I need?", a: "This depends on the severity of restriction — your therapist will recommend a course based on your assessment." },
      { q: "Can this help with chronic pain?", a: "Yes, myofascial therapy is widely used to manage chronic pain by addressing restrictions in the connective tissue." },
    ],
  },
  {
    slug: "rejuvenation-therapy",
    title: "Rejuvenation Therapy",
    category: "Anti-Aging & Wellness",
    tag: "Vitality Boost",
    duration: "Consult-based",
    price: "On Request",
    image: "https://img.magnific.com/premium-photo/woman-having-hydradermie-facial-treatment-spa_380164-219805.jpg?uid=P71960457&ga=GA1.1.1847424523.1777460742&semt=ais_hybrid&w=740&q=80",
    excerpt:
      "Restores energy, vitality, and cellular health through detoxification, nutrition, relaxation, and regenerative treatments for long-term wellness.",
    metaTitle: "Rejuvenation Therapy in [City] | Vitality & Cellular Health Programme",
    metaDescription:
      "Rejuvenation therapy restores energy and cellular health through detox, nutrition and regenerative treatments. Book a consultation at AyurVana.",
    keywords: ["rejuvenation therapy", "vitality treatment", "cellular health programme"],
    indications: [
      "Chronic fatigue",
      "Low immunity",
      "Cellular ageing",
      "Poor organ function",
      "Nervous system imbalance",
    ],
    benefits: [
      "Reduces fatigue",
      "Improves immunity",
      "Enhances skin and organ function",
      "Balances the nervous system",
      "Slows aging processes",
      "Supports long-term physical and mental renewal",
    ],
    content: [
      {
        heading: "What is Rejuvenation Therapy?",
        body: "Rejuvenation therapy focuses on restoring energy, vitality, and cellular health through detoxification, nutrition, relaxation, and regenerative treatments. It helps reduce fatigue, improve immunity, and enhance skin and organ function.",
      },
      {
        heading: "How the Programme Works",
        body: "Your programme begins with a consultation to assess your current health status, followed by a personalised combination of detox protocols, nutritional guidance, and regenerative treatments designed around your goals.",
      },
      {
        heading: "Who Should Try This",
        body: "This therapy suits anyone experiencing fatigue, low immunity, or signs of cellular ageing, and those seeking a comprehensive programme for long-term vitality and wellness.",
      },
    ],
    faqs: [
      { q: "How long does a rejuvenation programme take?", a: "Programme length varies based on your goals and consultation findings — your specialist will outline a suitable timeline." },
      { q: "Will I need a consultation first?", a: "Yes, rejuvenation therapy is personalised and always begins with a detailed consultation." },
      { q: "What results can I expect?", a: "Most clients report improved energy, better sleep, and enhanced overall vitality over the course of the programme." },
    ],
  },
  {
    slug: "detox-therapy",
    title: "Detox Therapy",
    category: "Detox & Panchakarma",
    tag: "Cleansing",
    duration: "Consult-based",
    price: "On Request",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnYurc3BBH6pPmQD6oqXJ1ogge0z65tUfmHIA_pvfxiQ&s=10",
    excerpt:
      "Designed to eliminate toxins from the body and improve metabolic efficiency through therapeutic treatments and lifestyle modification.",
    metaTitle: "Detox Therapy in [City] | Toxin Elimination & Metabolic Reset",
    metaDescription:
      "Detox therapy supports liver, digestion and lymphatic function to eliminate toxins and reset the body's metabolic balance. Book at AyurVana.",
    keywords: ["detox therapy", "toxin elimination treatment", "metabolic reset programme"],
    indications: [
      "Toxin build-up",
      "Sluggish digestion",
      "Low energy",
      "Poor skin health",
      "Weakened immunity",
    ],
    benefits: [
      "Supports liver function and digestion",
      "Improves circulation and lymphatic drainage",
      "Reduces inflammation",
      "Boosts immunity",
      "Improves skin health",
      "Enhances energy levels",
    ],
    content: [
      {
        heading: "What is Detox Therapy?",
        body: "Detox therapy is designed to eliminate toxins from the body and improve metabolic efficiency. It supports liver function, digestion, circulation, and lymphatic drainage through therapeutic treatments and lifestyle modification.",
      },
      {
        heading: "How the Programme Works",
        body: "Your detox programme is personalised following a consultation, combining therapeutic treatments with dietary and lifestyle guidance to help reset the body's physiological balance.",
      },
      {
        heading: "Who Should Try This",
        body: "This therapy suits anyone experiencing sluggish digestion, low energy, or poor skin health, as well as those wanting a structured reset for overall wellness.",
      },
    ],
    faqs: [
      { q: "How long does the detox programme last?", a: "Duration varies based on your goals and health assessment — your specialist will recommend a suitable plan." },
      { q: "Are there dietary changes involved?", a: "Yes, lifestyle and dietary modifications are typically part of the programme to support the detox process." },
      { q: "Is detox therapy safe for everyone?", a: "A consultation helps confirm suitability based on your individual health profile before starting the programme." },
    ],
  },
  {
    slug: "anti-inflammatory-therapy",
    title: "Anti-Inflammatory Therapy",
    category: "Regenerative Medicine",
    tag: "Systemic Care",
    duration: "Consult-based",
    price: "On Request",
    image: "https://img.magnific.com/premium-photo/doctor-gives-omega-3-old-woman-selective-focus-people_73944-24586.jpg?uid=P71960457&ga=GA1.1.1847424523.1777460742&semt=ais_hybrid&w=740&q=80",
    excerpt:
      "Focuses on reducing chronic inflammation that contributes to pain, metabolic disorders, and degenerative diseases through a multidisciplinary approach.",
    metaTitle: "Anti-Inflammatory Therapy in [City] | Chronic Inflammation Management",
    metaDescription:
      "Anti-inflammatory therapy combines nutrition, physical therapies and regenerative approaches to control chronic inflammation. Book at AyurVana.",
    keywords: ["anti-inflammatory therapy", "chronic inflammation treatment", "systemic inflammation care"],
    indications: [
      "Chronic pain",
      "Metabolic disorders",
      "Degenerative joint conditions",
      "Autoimmune-related inflammation",
      "Slow recovery from injury",
    ],
    benefits: [
      "Reduces chronic inflammation",
      "Improves mobility",
      "Supports immunity",
      "Enhances tissue recovery",
      "Restores overall tissue health",
      "Supports long-term systemic health",
    ],
    content: [
      {
        heading: "What is Anti-Inflammatory Therapy?",
        body: "Anti-inflammatory therapy focuses on reducing chronic inflammation that contributes to pain, metabolic disorders, and degenerative diseases. It combines nutrition, physical therapies, stress management, and regenerative approaches to restore tissue health.",
      },
      {
        heading: "How the Programme Works",
        body: "Following a detailed consultation, your specialist designs a plan combining dietary guidance, physical therapies, and regenerative treatments aimed at controlling inflammation at a systemic level.",
      },
      {
        heading: "Who Should Try This",
        body: "This therapy is suited to anyone dealing with chronic pain, metabolic disorders, or degenerative conditions linked to ongoing inflammation, and those seeking a comprehensive management approach.",
      },
    ],
    faqs: [
      { q: "How is chronic inflammation identified?", a: "Your specialist will assess your symptoms, history, and where relevant, lab markers, during your initial consultation." },
      { q: "How long before I notice improvement?", a: "This varies by individual and condition — your specialist will outline realistic timelines based on your assessment." },
      { q: "Does this therapy involve medication?", a: "The approach is primarily therapeutic and lifestyle-based; any medical management is coordinated with your physician." },
    ],
  },
  {
    slug: "cosmetic-therapy",
    title: "Cosmetic Therapy",
    category: "Skin & Rejuvenation",
    tag: "Aesthetic Care",
    duration: "Consult-based",
    price: "On Request",
    image: "https://img.magnific.com/premium-photo/attractive-caucasian-woman-receive-electrical-facial-treatment-tranquility_31965-318845.jpg?uid=P71960457&ga=GA1.1.1847424523.1777460742&semt=ais_hybrid&w=740&q=80",
    excerpt:
      "Non-invasive and minimally invasive treatments aimed at enhancing appearance and skin health, addressing pigmentation, acne, ageing, and body contouring.",
    metaTitle: "Cosmetic Therapy in [City] | Non-Invasive Aesthetic Treatments",
    metaDescription:
      "Cosmetic therapy addresses pigmentation, acne, ageing and body contouring through safe, non-invasive aesthetic treatments. Book at AyurVana.",
    keywords: ["cosmetic therapy", "aesthetic skin treatment", "non-invasive cosmetic care"],
    indications: [
      "Pigmentation",
      "Acne and acne scars",
      "Early signs of ageing",
      "Hair loss",
      "Body contouring needs",
    ],
    benefits: [
      "Improves skin quality and tone",
      "Addresses pigmentation and acne",
      "Reduces visible signs of ageing",
      "Supports hair health",
      "Enhances aesthetic balance",
      "Maintains safe, natural-looking results",
    ],
    content: [
      {
        heading: "What is Cosmetic Therapy?",
        body: "Cosmetic therapy includes non-invasive and minimally invasive treatments aimed at enhancing appearance and skin health. It addresses concerns such as pigmentation, acne, ageing, hair loss, and body contouring.",
      },
      {
        heading: "How the Session Works",
        body: "Your specialist assesses your specific concerns during consultation and recommends a combination of advanced technology and therapeutic care tailored to your skin and aesthetic goals.",
      },
      {
        heading: "Who Should Try This",
        body: "Cosmetic therapy suits anyone looking to address specific skin or appearance concerns using safe, non-invasive methods with natural-looking results.",
      },
    ],
    faqs: [
      { q: "Is cosmetic therapy safe?", a: "Yes, treatments are non-invasive or minimally invasive and administered by trained specialists following a thorough consultation." },
      { q: "Will results look natural?", a: "Yes, the focus is on enhancing your natural features and skin health rather than dramatic alteration." },
      { q: "How many sessions will I need?", a: "This depends on your specific concern — your specialist will outline a personalised treatment plan." },
    ],
  },
  {
    slug: "pain-therapy",
    title: "Pain Therapy",
    category: "Physiotherapy & Rehabilitation",
    tag: "Comprehensive Care",
    duration: "Consult-based",
    price: "On Request",
    image: "https://img.magnific.com/premium-photo/manual-therapy-back-pain-therapists-hands-applying-pressure-relief-discover-benefits_996993-135468.jpg?uid=P71960457&ga=GA1.1.1847424523.1777460742&semt=ais_hybrid&w=740&q=80",
    excerpt:
      "A comprehensive, multidisciplinary approach that identifies and treats the root cause of acute and chronic pain to restore function and quality of life.",
    metaTitle: "Pain Therapy in [City] | Multidisciplinary Pain Management",
    metaDescription:
      "Pain therapy combines physical therapies, manual techniques and regenerative methods to treat the root cause of acute and chronic pain. Book at AyurVana.",
    keywords: ["pain therapy", "chronic pain management", "multidisciplinary pain treatment"],
    indications: [
      "Acute pain",
      "Chronic pain conditions",
      "Nerve sensitivity",
      "Musculoskeletal disorders",
      "Post-injury pain",
    ],
    benefits: [
      "Reduces inflammation and nerve sensitivity",
      "Improves mobility",
      "Restores function",
      "Enhances quality of life",
      "Addresses root cause rather than symptoms alone",
      "Reduces long-term dependence on medication",
    ],
    content: [
      {
        heading: "What is Pain Therapy?",
        body: "Pain therapy is a comprehensive, multidisciplinary approach focused on identifying and treating the root cause of acute and chronic pain. It combines physical therapies, manual techniques, electrotherapy, regenerative methods, and mind–body interventions.",
      },
      {
        heading: "How the Programme Works",
        body: "Your programme begins with a thorough assessment to identify the source of your pain, followed by a personalised combination of therapies designed to reduce inflammation, ease nerve sensitivity, and restore function.",
      },
      {
        heading: "Who Should Try This",
        body: "Pain therapy is suited to anyone dealing with acute or chronic pain who wants a structured, root-cause approach to recovery rather than relying on medication alone.",
      },
    ],
    faqs: [
      { q: "What conditions can pain therapy help with?", a: "It is used for a wide range of acute and chronic pain conditions, including musculoskeletal disorders, nerve sensitivity, and post-injury pain." },
      { q: "Will I need to stop my current pain medication?", a: "This should always be discussed with your physician — pain therapy is designed to complement, not replace, medical guidance." },
      { q: "How long does a pain therapy programme take?", a: "Duration depends on your condition and assessment findings — your specialist will outline a personalised plan." },
    ],
  },
];

export function getTherapyBySlug(slug: string): Therapy | undefined {
  return therapies.find((t) => t.slug === slug);
}

export function getRelatedTherapies(current: Therapy, count = 3): Therapy[] {
  const sameCategory = therapies.filter(
    (t) => t.slug !== current.slug && t.category === current.category
  );
  const rest = therapies.filter(
    (t) => t.slug !== current.slug && t.category !== current.category
  );
  return [...sameCategory, ...rest].slice(0, count);
}