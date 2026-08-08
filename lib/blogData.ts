export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content: {
    heading?: string;
    body: string;
  }[];
}

export const categories = [
  "All",
  "Wellness",
  "Treatments",
  "Ayurveda",
  "Nutrition",
  "Lifestyle",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "what-is-abhyanga-benefits-of-ayurvedic-oil-massage",
    title: "What is Abhyanga? Benefits of Ayurvedic Oil Massage",
    category: "Wellness",
    date: "June 15, 2025",
    readTime: "5 min read",
    excerpt:
      "Abhyanga, the daily self-massage ritual, is one of Ayurveda's most profound practices for nourishing the body and calming the mind.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80",
    author: { name: "Dr. Meera Nair", role: "Chief Ayurvedic Physician", avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80" },
    content: [
      { body: "Abhyanga is a warm oil self-massage that has been practised for thousands of years as part of a daily Ayurvedic routine. Far more than a relaxing ritual, it is considered a form of preventive medicine that balances the doshas, improves circulation, and calms the nervous system." },
      { heading: "Why Warm Oil Matters", body: "Warm herbal oils penetrate deeper into the tissues, helping to loosen toxins (ama) so they can be flushed from the body. The choice of oil is typically tailored to a person's dominant dosha — sesame oil for Vata, coconut oil for Pitta, and mustard oil for Kapha." },
      { heading: "Benefits Beyond the Skin", body: "Regular Abhyanga has been linked to improved sleep quality, reduced anxiety, better skin texture, and greater joint mobility. The gentle strokes stimulate the lymphatic system while the ritual itself encourages a slower, more mindful start or end to the day." },
      { heading: "How to Begin at Home", body: "Start with just five to ten minutes each morning before bathing. Use long strokes on the limbs and circular motions over joints, always massaging toward the heart. Consistency matters far more than duration — a short daily practice outperforms an occasional long session." },
    ],
  },
  {
    slug: "rasayana-the-ayurvedic-path-to-anti-ageing",
    title: "Rasayana: The Ayurvedic Path to Anti-Ageing",
    category: "Treatments",
    date: "June 8, 2025",
    readTime: "7 min read",
    excerpt:
      "Discover how Rasayana therapies use potent herbal formulations to slow ageing, boost immunity, and restore youthful vitality.",
    image:
      "https://img.magnific.com/free-photo/natural-cosmetics-environmentally-friendly-product-aromatic-cream-oil_169016-2070.jpg?uid=R224290380&ga=GA1.1.1847424523.1777460742&semt=ais_test_b&w=740&q=80",
    author: { name: "Dr. Arjun Menon", role: "Rasayana Specialist", avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&q=80" },
    content: [
      { body: "Rasayana, often translated as 'the path of essence', is the branch of Ayurveda dedicated to rejuvenation. It combines herbal formulations, diet, and lifestyle practices designed to nourish tissues at the deepest level and slow the visible and invisible signs of ageing." },
      { heading: "The Science of Ojas", body: "Central to Rasayana is the concept of Ojas — the subtle essence produced when digestion functions optimally. Strong Ojas is associated with radiant skin, sustained energy, and a resilient immune system, which is why Rasayana therapies place such emphasis on gut health." },
      { heading: "Signature Herbs", body: "Formulations often include Amalaki for its vitamin C content, Ashwagandha for stress resilience, and Guduchi for immune support. These are traditionally prepared as pastes, decoctions, or medicated ghees taken over a sustained course rather than as a quick fix." },
      { heading: "What to Expect From Treatment", body: "A typical Rasayana programme at a wellness centre spans one to three weeks and pairs internal herbal courses with external therapies like Abhyanga and Shirodhara, alongside a sattvic diet designed to support the rejuvenation process." },
    ],
  },
  {
    slug: "customised-ayurvedic-therapy-why-one-size-never-fits-all",
    title: "Customised Ayurvedic Therapy: Why One Size Never Fits All",
    category: "Ayurveda",
    date: "May 28, 2025",
    readTime: "6 min read",
    excerpt:
      "Understanding your dosha — Vata, Pitta, or Kapha — is the foundation of effective Ayurvedic treatment. Here's how personalisation works.",
    image:
      "https://img.magnific.com/premium-photo/full-length-man-lying-bed_1605385-2890.jpg?uid=R224290380&ga=GA1.1.1847424523.1777460742&semt=ais_test_b&w=740&q=80",
    author: { name: "Dr. Meera Nair", role: "Chief Ayurvedic Physician", avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80" },
    content: [
      { body: "Ayurveda's central premise is that every individual has a unique constitution, or Prakriti, shaped by the three doshas: Vata, Pitta, and Kapha. Effective treatment starts not with a diagnosis of disease, but with an understanding of the person." },
      { heading: "Reading the Doshas", body: "Vata governs movement and is linked to dry skin and anxiety when imbalanced. Pitta governs transformation and shows up as inflammation or irritability in excess. Kapha governs structure and stability, and imbalance often appears as sluggishness or weight gain." },
      { heading: "From Diagnosis to Protocol", body: "A consultation typically involves pulse diagnosis (Nadi Pariksha), a review of lifestyle and digestion, and physical observation. From this, a physician designs a protocol combining diet, herbs, and therapies specific to the individual's imbalance." },
      { heading: "Why Generic Plans Fall Short", body: "A detox protocol ideal for a Kapha-dominant person could aggravate Vata in someone else entirely. This is why AyurVana never prescribes a single 'wellness package' — every therapy plan begins with a full constitutional assessment." },
    ],
  },
  {
    slug: "shirodhara-explained-the-ritual-of-pouring-calm",
    title: "Shirodhara Explained: The Ritual of Pouring Calm",
    category: "Treatments",
    date: "May 20, 2025",
    readTime: "5 min read",
    excerpt:
      "A continuous stream of warm oil across the forehead sounds simple — but Shirodhara is one of Ayurveda's most powerful therapies for the mind.",
    image:
      "https://img.magnific.com/premium-photo/young-woman-doing-healthcare-indian-traditional-treatment-ayurveda-body-constitution-centre_175356-9412.jpg?uid=R224290380&ga=GA1.1.1847424523.1777460742&semt=ais_test_b&w=740&q=80",
    author: { name: "Dr. Arjun Menon", role: "Rasayana Specialist", avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&q=80" },
    content: [
      { body: "Shirodhara involves a slow, continuous stream of warm medicated oil poured over the forehead, specifically over the region Ayurveda identifies as the seat of consciousness. Sessions typically last thirty to forty-five minutes and are performed in silence." },
      { heading: "What Happens in the Nervous System", body: "The rhythmic, unbroken flow is thought to entrain brainwave activity toward a deeply relaxed state, similar to the early stages of sleep. Many patients report a meditative clarity that lingers well beyond the session itself." },
      { heading: "Who Benefits Most", body: "Shirodhara is commonly recommended for chronic stress, insomnia, migraines, and Vata-type anxiety. It is often paired with Abhyanga for a fuller nervous-system reset during a wellness retreat." },
    ],
  },
  {
    slug: "ayurvedic-diet-basics-eating-for-your-dosha",
    title: "Ayurvedic Diet Basics: Eating for Your Dosha",
    category: "Nutrition",
    date: "May 12, 2025",
    readTime: "8 min read",
    excerpt:
      "Food is medicine in Ayurveda. Learn the foundational principles of eating in a way that supports — rather than disrupts — your constitution.",
    image:
      "https://img.magnific.com/free-photo/top-view-greens-salad-with-corns-along-with-with-seasonings-eggs-dark-blue-background_140725-50945.jpg?uid=R224290380&ga=GA1.1.1847424523.1777460742&semt=ais_test_b&w=740&q=80",
    author: { name: "Dr. Priya Varma", role: "Ayurvedic Nutritionist", avatar: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=200&q=80" },
    content: [
      { body: "In Ayurveda, digestion — or Agni — is considered the cornerstone of health. Rather than counting calories, an Ayurvedic diet focuses on what, when, and how you eat in relation to your unique constitution and the season." },
      { heading: "The Six Tastes", body: "A balanced Ayurvedic meal ideally includes all six tastes — sweet, sour, salty, bitter, pungent, and astringent — in proportions suited to your dosha. This naturally curbs cravings and supports complete nourishment." },
      { heading: "Practical Guidelines", body: "Eat your largest meal at midday when digestive fire is strongest, favour warm and freshly cooked food over cold or processed options, and allow three to four hours between meals to let digestion complete fully." },
    ],
  },
  {
    slug: "panchakarma-a-beginners-guide-to-ayurvedic-detox",
    title: "Panchakarma: A Beginner's Guide to Ayurvedic Detox",
    category: "Treatments",
    date: "April 30, 2025",
    readTime: "9 min read",
    excerpt:
      "Panchakarma is Ayurveda's most comprehensive detoxification programme. Here's what the five actions actually involve and who should consider it.",
    image:
      "https://img.magnific.com/premium-photo/ayurvedic-practise_1134901-336808.jpg?uid=R224290380&ga=GA1.1.1847424523.1777460742&semt=ais_test_b&w=740&q=80",
    author: { name: "Dr. Meera Nair", role: "Chief Ayurvedic Physician", avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80" },
    content: [
      { body: "Panchakarma literally means 'five actions' — a structured sequence of therapies designed to cleanse the body of accumulated toxins before restoring balance through rejuvenation. It's typically undertaken as a supervised, multi-day retreat." },
      { heading: "Preparation Phase", body: "Before the core therapies begin, patients undergo Purvakarma — internal oleation with medicated ghee and external oil massages — to loosen toxins from deep tissues and bring them toward the digestive tract." },
      { heading: "The Five Core Therapies", body: "These may include Vamana (therapeutic emesis), Virechana (purgation), Basti (medicated enemas), Nasya (nasal administration), and Raktamokshana (bloodletting), though not all five are used for every patient." },
      { heading: "Is It Right for You", body: "Panchakarma is powerful and should only be undertaken under professional supervision after a full consultation, particularly for anyone with chronic conditions or who is pregnant." },
    ],
  },
  {
    slug: "dinacharya-building-an-ayurvedic-morning-routine",
    title: "Dinacharya: Building an Ayurvedic Morning Routine",
    category: "Lifestyle",
    date: "April 18, 2025",
    readTime: "6 min read",
    excerpt:
      "Small, consistent morning rituals can have an outsized impact on energy and mood. Here's how to structure a Dinacharya that fits real life.",
    image:
      "https://img.magnific.com/premium-photo/young-man-holding-camera-while-standing-bed_1605427-5121.jpg?uid=R224290380&ga=GA1.1.1847424523.1777460742&semt=ais_test_b&w=740&q=80",
    author: { name: "Dr. Priya Varma", role: "Ayurvedic Nutritionist", avatar: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=200&q=80" },
    content: [
      { body: "Dinacharya, or daily routine, is one of Ayurveda's simplest yet most impactful concepts: aligning your habits with nature's rhythms to support steady energy and a calm mind throughout the day." },
      { heading: "Rise Before the Sun", body: "Waking during the Vata hours of early morning (roughly 4:30–6:00 am) is believed to support lightness and mental clarity, in contrast to waking during the heavier Kapha hours later in the morning." },
      { heading: "A Simple Sequence", body: "A basic Dinacharya might include tongue scraping, warm water, a few minutes of Abhyanga, gentle movement or yoga, and a seated moment of stillness before the day's first meal." },
    ],
  },
  
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(current: BlogPost, count = 3): BlogPost[] {
  return blogPosts
    .filter((post) => post.slug !== current.slug && post.category === current.category)
    .concat(blogPosts.filter((post) => post.slug !== current.slug && post.category !== current.category))
    .slice(0, count);
}
