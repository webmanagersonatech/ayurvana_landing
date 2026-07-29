import { motion } from "framer-motion";
import {
    Users,
    Award,
    Star,
    Mail,

    Leaf,
    Shield,
    Clock,
    ArrowRight,
    Home,
    ChevronRight,
    Search,
    Filter,
    SlidersHorizontal,
} from "lucide-react";
import { useState, useMemo } from "react";
import { Toaster } from 'react-hot-toast';

// ---------------------------------------------------------------------------
// Animation Variants (Reused from ProductsPage)
// ---------------------------------------------------------------------------

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
};

// ---------------------------------------------------------------------------
// Breadcrumb Component (Reused)
// ---------------------------------------------------------------------------

function Breadcrumb({ currentPage, subPage }) {
    return (
        <nav className="flex items-center gap-2 text-sm text-[#6E695D] py-4">
            <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2"
            >
                <Home className="w-4 h-4" />
                <span>Home</span>
            </motion.div>
            <ChevronRight className="w-4 h-4" />
            <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
            >
                {currentPage}
            </motion.span>
            {subPage && (
                <>
                    <ChevronRight className="w-4 h-4" />
                    <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-[#1B3324] font-medium"
                    >
                        {subPage}
                    </motion.span>
                </>
            )}
        </nav>
    );
}

// ---------------------------------------------------------------------------
// Team Member Data
// ---------------------------------------------------------------------------

const teamMembers = [
    {
        id: 1,
        name: "Dr. Ananya Sharma",
        role: "Chief Ayurvedic Practitioner",
        bio: "With over 15 years of experience in Ayurvedic medicine, Dr. Sharma leads our product formulation and wellness programs.",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
        specialty: "Herbal Medicine & Panchakarma",
        experience: "15+ years",
        rating: 4.9,
        reviews: 234,
        social: {
            linkedin: "#",
            twitter: "#",
            instagram: "#",
            email: "ananya@ayurwell.com",
        },
        badge: "Founder",
    },
    {
        id: 2,
        name: "Dr. Vikram Mehta",
        role: "Senior Ayurvedic Consultant",
        bio: "Specializing in digestive health and stress management, Dr. Mehta brings a holistic approach to patient care.",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80",
        specialty: "Digestive Health & Stress Management",
        experience: "12+ years",
        rating: 4.8,
        reviews: 189,
        social: {
            linkedin: "#",
            twitter: "#",
            instagram: "#",
            email: "vikram@ayurwell.com",
        },
        badge: "Senior Consultant",
    },
    {
        id: 3,
        name: "Priya Patel",
        role: "Ayurvedic Nutritionist",
        bio: "Priya combines traditional Ayurvedic principles with modern nutritional science to create personalized diet plans.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
        specialty: "Nutrition & Diet Planning",
        experience: "8+ years",
        rating: 4.7,
        reviews: 156,
        social: {
            linkedin: "#",
            twitter: "#",
            instagram: "#",
            email: "priya@ayurwell.com",
        },
        badge: "Nutrition Expert",
    },
    {
        id: 4,
        name: "Dr. Rajesh Kumar",
        role: "Research & Development Lead",
        bio: "Dr. Kumar oversees our R&D team, ensuring every product meets the highest standards of quality and efficacy.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
        specialty: "Pharmaceutical Research",
        experience: "20+ years",
        rating: 4.9,
        reviews: 278,
        social: {
            linkedin: "#",
            twitter: "#",
            instagram: "#",
            email: "rajesh@ayurwell.com",
        },
        badge: "R&D Head",
    },
    {
        id: 5,
        name: "Dr. Smita Reddy",
        role: "Ayurvedic Dermatologist",
        bio: "Dr. Reddy specializes in Ayurvedic skincare and has developed our entire range of natural skincare products.",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80",
        specialty: "Ayurvedic Skincare",
        experience: "10+ years",
        rating: 4.6,
        reviews: 143,
        social: {
            linkedin: "#",
            twitter: "#",
            instagram: "#",
            email: "smita@ayurwell.com",
        },
        badge: "Skincare Specialist",
    },
    {
        id: 6,
        name: "Arjun Nair",
        role: "Herbalist & Formulator",
        bio: "Arjun has deep knowledge of medicinal herbs and works closely with farmers to source the finest quality ingredients.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
        specialty: "Herbal Formulation",
        experience: "14+ years",
        rating: 4.8,
        reviews: 167,
        social: {
            linkedin: "#",
            twitter: "#",
            instagram: "#",
            email: "arjun@ayurwell.com",
        },
        badge: "Master Herbalist",
    },
    {
        id: 7,
        name: "Dr. Meera Iyer",
        role: "Yoga & Wellness Coach",
        bio: "Dr. Iyer integrates Ayurvedic principles with yoga therapy to promote complete mind-body wellness.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
        specialty: "Yoga Therapy & Wellness",
        experience: "9+ years",
        rating: 4.7,
        reviews: 198,
        social: {
            linkedin: "#",
            twitter: "#",
            instagram: "#",
            email: "meera@ayurwell.com",
        },
        badge: "Wellness Coach",
    },
    {
        id: 8,
        name: "Dr. Sanjay Gupta",
        role: "Quality Assurance Director",
        bio: "Dr. Gupta ensures all our products are lab-tested and meet international quality standards.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
        specialty: "Quality Assurance",
        experience: "18+ years",
        rating: 4.9,
        reviews: 201,
        social: {
            linkedin: "#",
            twitter: "#",
            instagram: "#",
            email: "sanjay@ayurwell.com",
        },
        badge: "QA Director",
    },
];


// ---------------------------------------------------------------------------
// Stats Section
// ---------------------------------------------------------------------------


// ---------------------------------------------------------------------------
// Team Values Section
// ---------------------------------------------------------------------------

const values = [
    {
        icon: Leaf,
        title: "Authentic Ayurveda",
        desc: "We follow traditional Ayurvedic principles in everything we do.",
    },
    {
        icon: Shield,
        title: "Quality First",
        desc: "Every product is rigorously tested for purity and potency.",
    },
    {
        icon: Users,
        title: "Patient-Centered",
        desc: "Our approach is always personalized to individual needs.",
    },
    {
        icon: Clock,
        title: "Time-Tested Wisdom",
        desc: "We blend ancient wisdom with modern scientific validation.",
    },
];


// ---------------------------------------------------------------------------
// Team Member Card Component
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Team Member Card Component (Fixed)
// ---------------------------------------------------------------------------

function TeamMemberCard({ member, index }) {
    return (
        <motion.div
            variants={scaleIn}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -8 }}
            className="group h-full "
        >
            <div className="relative flex h-full flex-col rounded-2xl border border-[#E8DDC4] bg-white shadow-lg transition-all duration-300 hover:shadow-2xl">

                {/* Header */}
                <div className="relative h-32 rounded-t-2xl overflow-hidden bg-gradient-to-r from-[#1B3324] to-[#2A4D36]">
                    <div
                        className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage:
                                "radial-gradient(circle,#C49A3C 1px,transparent 1px)",
                            backgroundSize: "20px 20px",
                        }}
                    />
                </div>

                {/* Floating Image */}
                <div className="absolute left-1/2 top-6 -translate-x-1/2 z-20">
                    <div className="bg-white p-1.5 shadow-xl ring-2 ring-[#C49A3C] transition-transform duration-300 group-hover:scale-105">
                        <img loading="lazy" decoding="async"
                            src={member.image}
                            alt={member.name}
                            className="h-44 w-32 rounded-md object-cover"
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col px-6 pt-28 pb-6">

                    {/* Name */}
                    <h3 className="text-center text-2xl font-serif font-semibold text-[#2E2A22] leading-tight min-h-[64px] flex items-center justify-center">
                        {member.name}
                    </h3>

                    {/* Role */}
                    <p className="mt-2 text-center text-xs font-semibold uppercase tracking-[0.25em] text-[#C49A3C] min-h-[32px] flex items-center justify-center">
                        {member.role}
                    </p>

                    {/* Badge */}
                    <div className="mt-4 h-8 flex items-center justify-center">
                        {member.badge && (
                            <span className="rounded-full border border-[#C49A3C]/30 bg-[#C49A3C]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#C49A3C]">
                                {member.badge}
                            </span>
                        )}
                    </div>

                    {/* Specialty */}
                    <div className="mt-2 min-h-[46px] text-center text-sm leading-6">
                        <span className="font-semibold text-[#6E695D]">
                            Specialty:
                        </span>{" "}
                        <span className="text-[#2E2A22]">
                            {member.specialty}
                        </span>
                    </div>

                    {/* Experience & Rating */}
                    <div className="mt-2 flex items-center justify-center gap-8 border-y border-[#F3E8D3] py-4 text-sm">
                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-[#C49A3C]" />
                            <span>{member.experience}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Star className="h-4 w-4 fill-[#C49A3C] text-[#C49A3C]" />
                            <span>{member.rating}</span>
                            <span className="text-[#6E695D]">
                                ({member.reviews})
                            </span>
                        </div>
                    </div>

                    {/* Button */}
                    {/* <button className="mt-auto w-full rounded-full border border-[#C49A3C] py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#C49A3C] transition-all duration-300 hover:bg-[#C49A3C] hover:text-white">
                        View Profile
                    </button> */}

                </div>
            </div>
        </motion.div>
    );
}
// In your parent component:
<motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch"
>

</motion.div>

// ---------------------------------------------------------------------------
// Main Teams Page
// ---------------------------------------------------------------------------

export default function TeamsPage() {
    const [selectedSpecialty, setSelectedSpecialty] = useState("All Specialties");
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("featured");

    // Filter and sort team members
    const filteredMembers = useMemo(() => {
        let filtered = teamMembers;

        // Specialty filter
        if (selectedSpecialty !== "All Specialties") {
            filtered = filtered.filter((m) => m.specialty === selectedSpecialty);
        }

        // Search filter
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(
                (m) =>
                    m.name.toLowerCase().includes(query) ||
                    m.role.toLowerCase().includes(query) ||
                    m.bio.toLowerCase().includes(query) ||
                    m.specialty.toLowerCase().includes(query)
            );
        }

        // Sorting
        switch (sortBy) {
            case "rating":
                filtered = [...filtered].sort((a, b) => b.rating - a.rating);
                break;
            case "experience":
                filtered = [...filtered].sort((a, b) => {
                    const expA = parseInt(a.experience);
                    const expB = parseInt(b.experience);
                    return expB - expA;
                });
                break;
            default:
                break;
        }

        return filtered;
    }, [selectedSpecialty, searchQuery, sortBy]);

    return (
        <div className="bg-[#FBF7ED] min-h-screen">
            <Toaster />

       {/* Hero Section - Team */}
<section className="relative bg-[#1B3324] overflow-hidden">
  <motion.div
    initial={{ opacity: 0, scale: 1.05 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
    className="relative h-[260px] sm:h-[280px] md:h-[320px] lg:h-[350px]"
  >
    <img loading="lazy" decoding="async"
      src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=1200&q=80"
      alt="Ayurvedic team and practitioners"
      className="absolute inset-0 w-full h-full object-cover opacity-20"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/80 via-forest/60 to-transparent" />

    <div className="relative h-full pt-28 max-w-7xl mx-auto px-4 sm:px-6 flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="max-w-xl lg:max-w-2xl"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-[10px] sm:text-xs font-semibold tracking-[0.15em] text-[#C49A3C] uppercase"
        >
          Our Team
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mt-2 sm:mt-3 leading-tight"
        >
          Meet Our{" "}
          <span className="italic text-[#C49A3C]">Ayurvedic</span> Experts
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-white/70 text-xs sm:text-sm md:text-base mt-2 sm:mt-3 leading-relaxed max-w-sm sm:max-w-md"
        >
          Our experienced practitioners combine ancient Ayurvedic wisdom with modern healthcare expertise for the best wellness solutions.
        </motion.p>
      </motion.div>
    </div>
  </motion.div>
</section>

            <div className="max-w-7xl mx-auto px-6 py-8">
                {/* Breadcrumb */}
                <Breadcrumb currentPage="Our Team" subPage={selectedSpecialty !== "All Specialties" ? selectedSpecialty : undefined} />


                {/* Results Count */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={fadeIn}
                    className="mb-6"
                >
                    <p className="text-[#6E695D] text-sm">
                        Showing {filteredMembers.length} of {teamMembers.length} team members
                    </p>
                </motion.div>

                {/* Team Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch"
                >
                    {filteredMembers.map((member, index) => (
                        <TeamMemberCard key={member.id} member={member} index={index} />
                    ))}
                </motion.div>

                {/* Empty State */}
                {filteredMembers.length === 0 && (
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center py-16"
                    >
                        <div className="w-20 h-20 bg-[#EDE7D9] rounded-full flex items-center justify-center mx-auto mb-4">
                            <Search className="w-10 h-10 text-[#6E695D]" />
                        </div>
                        <h3 className="font-serif text-2xl text-[#2E2A22] mb-2">
                            No team members found
                        </h3>
                        <p className="text-[#6E695D]">
                            Try adjusting your search or filter criteria
                        </p>
                    </motion.div>
                )}
            </div>
        </div>
    );
}