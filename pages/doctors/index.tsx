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
  Phone,
  MapPin,
  Calendar,
  UserCircle,
  Stethoscope,
  GraduationCap,
  HeartPulse,
  Microscope,
  Brain,
  Activity,
  Pill,
  Sparkles
} from "lucide-react";
import { useState, useMemo } from "react";
import { Toaster } from 'react-hot-toast';

// ---------------------------------------------------------------------------
// Animation Variants
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

const slideInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

// ---------------------------------------------------------------------------
// Breadcrumb Component
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
// Doctor Data
// ---------------------------------------------------------------------------

const doctors = [
  {
    id: 1,
    name: "Dr. Ananya Sharma",
    specialization: "Ayurvedic Medicine & Panchakarma",
    qualifications: "BAMS, MD (Ayurveda)",
    experience: "15+ Years",
    bio: "A leading Ayurvedic practitioner with expertise in Panchakarma therapies and chronic disease management. Dr. Sharma has successfully treated over 10,000 patients worldwide.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
    department: "Ayurvedic Medicine",
    rating: 4.9,
    reviews: 234,
    education: ["BAMS - Ayurvedic University", "MD in Ayurveda - Pune University"],
    languages: ["English", "Hindi", "Sanskrit"],
    availability: "Mon-Sat, 9 AM - 6 PM",
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
      email: "ananya@ayurwell.com",
    },
    badge: "Senior Consultant",
    consultationFee: "₹1500",
    achievements: ["Best Ayurvedic Practitioner Award 2023", "Panchakarma Excellence Award"]
  },
  {
    id: 2,
    name: "Dr. Vikram Mehta",
    specialization: "Digestive Health & Stress Management",
    qualifications: "BAMS, PhD (Ayurveda)",
    experience: "12+ Years",
    bio: "Specializing in digestive disorders and stress-related conditions, Dr. Mehta combines ancient Ayurvedic wisdom with modern therapeutic approaches.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80",
    department: "Gastroenterology & Mental Wellness",
    rating: 4.8,
    reviews: 189,
    education: ["BAMS - Delhi University", "PhD in Ayurvedic Gastroenterology"],
    languages: ["English", "Hindi", "Marathi"],
    availability: "Mon-Fri, 10 AM - 7 PM",
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
      email: "vikram@ayurwell.com",
    },
    badge: "Department Head",
    consultationFee: "₹1800",
    achievements: ["Research Excellence Award 2022", "Best Paper in Ayurvedic Research"]
  },
  {
    id: 3,
    name: "Dr. Priya Patel",
    specialization: "Ayurvedic Nutrition & Dietetics",
    qualifications: "BAMS, MSc (Nutrition)",
    experience: "8+ Years",
    bio: "Dr. Patel is a passionate advocate of Ayurvedic nutrition, helping patients achieve optimal health through personalized diet plans and lifestyle modifications.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    department: "Nutrition & Dietetics",
    rating: 4.7,
    reviews: 156,
    education: ["BAMS - Mumbai University", "MSc in Nutrition - Oxford"],
    languages: ["English", "Hindi", "Gujarati"],
    availability: "Mon-Sat, 8 AM - 5 PM",
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
      email: "priya@ayurwell.com",
    },
    badge: "Nutrition Expert",
    consultationFee: "₹1200",
    achievements: ["Women in Wellness Award 2023", "Ayurvedic Nutrition Pioneer"]
  },
  {
    id: 4,
    name: "Dr. Rajesh Kumar",
    specialization: "Ayurvedic Research & Pharmacology",
    qualifications: "BAMS, PhD (Pharmaceutical Sciences)",
    experience: "20+ Years",
    bio: "Dr. Kumar leads our research initiatives, ensuring every formulation is backed by rigorous scientific validation while honoring traditional Ayurvedic principles.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    department: "Research & Development",
    rating: 4.9,
    reviews: 278,
    education: ["BAMS - Banaras Hindu University", "PhD in Pharmaceutical Sciences"],
    languages: ["English", "Hindi", "Tamil"],
    availability: "Mon-Fri, 9 AM - 6 PM",
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
      email: "rajesh@ayurwell.com",
    },
    badge: "R&D Director",
    consultationFee: "₹2000",
    achievements: ["Innovation in Ayurveda Award", "20+ Research Publications"]
  },
  {
    id: 5,
    name: "Dr. Smita Reddy",
    specialization: "Ayurvedic Dermatology & Skincare",
    qualifications: "BAMS, MD (Dermatology)",
    experience: "10+ Years",
    bio: "Dr. Reddy specializes in treating skin conditions through Ayurvedic formulations and has developed our acclaimed range of natural skincare products.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80",
    department: "Dermatology",
    rating: 4.6,
    reviews: 143,
    education: ["BAMS - Madras University", "MD in Ayurvedic Dermatology"],
    languages: ["English", "Tamil", "Telugu"],
    availability: "Mon-Sat, 10 AM - 8 PM",
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
      email: "smita@ayurwell.com",
    },
    badge: "Skin Specialist",
    consultationFee: "₹1600",
    achievements: ["Best Dermatologist Award 2023", "Skincare Innovation Award"]
  },
  {
    id: 6,
    name: "Dr. Arjun Nair",
    specialization: "Herbal Medicine & Formulation",
    qualifications: "BAMS, MSc (Botany)",
    experience: "14+ Years",
    bio: "With deep knowledge of medicinal herbs, Dr. Nair works closely with farmers and suppliers to source the finest quality ingredients for our products.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    department: "Herbal Medicine",
    rating: 4.8,
    reviews: 167,
    education: ["BAMS - Kerala University", "MSc in Botany - Bangalore"],
    languages: ["English", "Malayalam", "Hindi"],
    availability: "Mon-Fri, 9 AM - 5 PM",
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
      email: "arjun@ayurwell.com",
    },
    badge: "Master Herbalist",
    consultationFee: "₹1400",
    achievements: ["Herbal Research Excellence 2022", "Sustainable Agriculture Award"]
  },

];

// ---------------------------------------------------------------------------
// Doctor Card Component
// ---------------------------------------------------------------------------

function DoctorCard({ doctor, index }) {
  return (
    <motion.div
      variants={scaleIn}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className="group h-full"
    >
      <div className="relative flex h-full flex-col rounded-2xl border border-[#E8DDC4] bg-white shadow-lg transition-all duration-300 hover:shadow-2xl">

        {/* Header with Medical Theme */}
        <div className="relative h-32 rounded-t-2xl overflow-hidden bg-gradient-to-r from-[#1B3324] to-[#2A4D36]">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <Stethoscope className="w-32 h-32 text-white" />
          </div>
          <div className="absolute top-3 right-3 flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
            <Star className="w-4 h-4 fill-[#C49A3C] text-[#C49A3C]" />
            <span className="text-white text-sm font-medium">{doctor.rating}</span>
            <span className="text-white/60 text-xs">({doctor.reviews})</span>
          </div>
          <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
            <Award className="w-4 h-4 text-[#C49A3C]" />
            <span className="text-white/80 text-xs">{doctor.experience}</span>
          </div>
        </div>

        {/* Floating Image */}
        <div className="absolute left-1/2 top-6 -translate-x-1/2 z-20">
          <div className="relative bg-white p-1.5 shadow-xl ring-2 ring-[#C49A3C] transition-transform duration-300 group-hover:scale-105">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="h-44 w-32 rounded-md object-cover"
            />
            <div className="absolute -bottom-2 -right-2 bg-[#1B3324] rounded-full p-1.5 border-2 border-white">
              <Stethoscope className="w-4 h-4 text-[#C49A3C]" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col px-6 pt-28 pb-6">

          {/* Name & Qualifications */}
          <h3 className="text-center text-xl font-serif font-semibold text-[#2E2A22] leading-tight min-h-[56px] flex items-center justify-center">
            {doctor.name}
          </h3>

          <div className="flex items-center justify-center gap-2 mt-1">
            <GraduationCap className="w-4 h-4 text-[#C49A3C]" />
            <p className="text-center text-xs text-[#6E695D] font-medium">
              {doctor.qualifications}
            </p>
          </div>

          {/* Badge */}
          <div className="mt-3 h-7 flex items-center justify-center">
            {doctor.badge && (
              <span className="rounded-full border border-[#1B3324]/20 bg-[#1B3324]/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#1B3324]">
                {doctor.badge}
              </span>
            )}
          </div>

          {/* Specialization */}
          <div className="mt-4 min-h-[48px] text-center">
            <div className="inline-flex items-center gap-2 bg-[#F5F0E8] px-4 py-1.5 rounded-full">
              <HeartPulse className="w-4 h-4 text-[#C49A3C]" />
              <span className="text-sm font-medium text-[#2E2A22]">{doctor.specialization}</span>
            </div>
          </div>

          {/* Department */}
          <div className="mt-3 flex items-center justify-center gap-2 text-sm text-[#6E695D]">
            <Activity className="w-4 h-4 text-[#C49A3C]" />
            <span>{doctor.department}</span>
          </div>

          {/* Languages & Availability */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 border-t border-[#F3E8D3] pt-4">
            <div className="flex items-center gap-1.5 text-xs text-[#6E695D]">
              <Users className="w-3.5 h-3.5 text-[#C49A3C]" />
              <span>{doctor.languages.join(", ")}</span>
            </div>
          </div>

          <div className="mt-2 flex items-center justify-center gap-1.5 text-xs text-[#6E695D]">
            <Clock className="w-3.5 h-3.5 text-[#C49A3C]" />
            <span>{doctor.availability}</span>
          </div>


          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-4 w-full rounded-full bg-[#1B3324] py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#2A4D36] hover:shadow-lg"
          >
            Book Appointment
          </motion.button>

        </div>
      </div>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Stats Section



// ---------------------------------------------------------------------------
// Why Choose Our Doctors Section
// ---------------------------------------------------------------------------

const reasons = [
  {
    icon: GraduationCap,
    title: "Highly Qualified",
    desc: "All our doctors hold prestigious degrees and certifications from top Ayurvedic institutions."
  },
  {
    icon: Sparkles,
    title: "Holistic Approach",
    desc: "We treat the whole person - mind, body, and spirit - for lasting wellness."
  },
  {
    icon: Microscope,
    title: "Evidence-Based",
    desc: "Our treatments combine ancient wisdom with modern scientific validation."
  },
  {
    icon: Users,
    title: "Patient-Centric",
    desc: "Every treatment plan is personalized to meet individual patient needs and goals."
  }
];

// ---------------------------------------------------------------------------
// Main Doctors Page
// ---------------------------------------------------------------------------

export default function DoctorsPage() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("All Specialties");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  // Get unique specializations for filter
  const specialties = useMemo(() => {
    const all = doctors.map(d => d.specialization);
    return ["All Specialties", ...new Set(all)];
  }, []);

  // Filter and sort doctors
  const filteredDoctors = useMemo(() => {
    let filtered = doctors;

    // Specialty filter
    if (selectedSpecialty !== "All Specialties") {
      filtered = filtered.filter((d) => d.specialization === selectedSpecialty);
    }

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (d) =>
          d.name.toLowerCase().includes(query) ||
          d.specialization.toLowerCase().includes(query) ||
          d.department.toLowerCase().includes(query) ||
          d.qualifications.toLowerCase().includes(query) ||
          d.bio.toLowerCase().includes(query)
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
      case "fee":
        filtered = [...filtered].sort((a, b) => {
          const feeA = parseInt(a.consultationFee.replace(/[^0-9]/g, ''));
          const feeB = parseInt(b.consultationFee.replace(/[^0-9]/g, ''));
          return feeA - feeB;
        });
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedSpecialty, searchQuery, sortBy]);

  return (
    <div className="bg-[#FBF7ED] min-h-screen">
      <Toaster position="top-right" />

      {/* Hero Section - Medical Theme */}
      <section className="relative bg-gradient-to-r from-[#1B3324] to-[#2A4D36] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative h-[350px] md:h-[400px]"
        >
          <img
            src="https://images.unsplash.com/photo-1585435557343-3b092031a831?w=1200&q=80"
            alt="Medical professionals and healthcare"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/80 via-forest/60 to-transparent" />

          {/* Decorative elements */}
          <div className="absolute top-20 right-20 opacity-5">
            <Stethoscope className="w-96 h-96 text-white" />
          </div>
       

          <div className="relative pt-28 max-w-7xl mx-auto px-4 sm:px-6 h-full flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="max-w-2xl lg:max-w-3xl"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3"
              >
                <Stethoscope className="w-4 h-4 sm:w-5 sm:h-5 text-[#C49A3C]" />
                <span className="text-[10px] sm:text-xs font-semibold tracking-[0.15em] text-[#C49A3C] uppercase">
                  Expert Doctors
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-tight"
              >
                Meet Your{" "}
                <span className="text-[#C49A3C]">Ayurvedic</span> Doctors
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-white/70 text-xs sm:text-sm md:text-base mt-2 sm:mt-3 leading-relaxed max-w-lg"
              >
                Our team of highly qualified Ayurvedic practitioners combines centuries-old wisdom with modern medical expertise for personalized healthcare.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap items-center gap-2 sm:gap-3 mt-3 sm:mt-4"
              >
                <div className="flex -space-x-2">
                  {doctors.slice(0, 5).map((doc, i) => (
                    <div key={i} className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full border-2 border-white overflow-hidden">
                      <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
                    </div>
                  ))}
                  {doctors.length > 5 && (
                    <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full border-2 border-white bg-[#C49A3C] flex items-center justify-center">
                      <span className="text-white text-[8px] sm:text-[10px] font-bold">+{doctors.length - 5}</span>
                    </div>
                  )}
                </div>
                <span className="text-white/60 text-[10px] sm:text-xs">
                  <span className="font-semibold text-white">{doctors.length}+</span> Expert Doctors
                </span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <Breadcrumb currentPage="Our Doctors" subPage={selectedSpecialty !== "All Specialties" ? selectedSpecialty : undefined} />


        {/* Why Choose Our Doctors */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-serif text-3xl text-center text-[#1B3324] mb-3"
          >
            Why Choose Our <span className="text-[#C49A3C]">Doctors</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-center text-[#6E695D] max-w-2xl mx-auto mb-10"
          >
            Our team of dedicated Ayurvedic professionals brings together expertise, compassion, and a commitment to your well-being.
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="bg-white  border border-[#E8DDC4] p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-[#1B3324]/5 rounded-full">
                    <reason.icon className="w-7 h-7 text-[#1B3324]" />
                  </div>
                </div>
                <h3 className="text-lg font-serif font-semibold text-[#1B3324] mb-2">{reason.title}</h3>
                <p className="text-sm text-[#6E695D] leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

   

        {/* Results Count */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
          className="mb-6"
        >
          <p className="text-[#6E695D] text-sm">
            Showing {filteredDoctors.length} of {doctors.length} doctors
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 items-stretch"
        >
          {filteredDoctors.map((doctor, index) => (
            <DoctorCard key={doctor.id} doctor={doctor} index={index} />
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredDoctors.length === 0 && (
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
              No doctors found
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