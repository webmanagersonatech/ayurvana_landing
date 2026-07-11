// ContactPage.jsx
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  ArrowRight,
  MessageCircle,
  User,
  MessageSquare,
  ChevronRight,
  Home,
} from "lucide-react";
import { useState } from "react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
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

// Contact Info Data
const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: "123 Ayurveda Lane, Varanasi, Uttar Pradesh 221001, India",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+91 98765 43210",
    sub: "Mon-Sat 9AM to 6PM",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: "info@ayurvedawellness.com",
    sub: "We reply within 24 hours",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: "Monday - Saturday",
    sub: "9:00 AM - 6:00 PM",
  },
];

// Breadcrumb Component
function Breadcrumb() {
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
        className="text-[#1B3324] font-medium"
      >
        Contact
      </motion.span>
    </nav>
  );
}

// Main Contact Page Component
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-[#FBF7ED] min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-forest-dark overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative h-[250px] md:h-[300px]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/80 via-forest/60 to-transparent" />
          <div className="relative max-w-7xl pt-20 mx-auto px-6 h-full flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="max-w-2xl"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xs font-semibold tracking-widest text-[#C49A3C] uppercase"
              >
                Get In Touch
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="font-serif text-4xl md:text-5xl text-white mt-4 leading-tight"
              >
                Contact <span className="italic text-[#C49A3C]">Us</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-white/80 text-sm md:text-base mt-5 leading-relaxed max-w-md"
              >
                Have questions about our products? We'd love to hear from you.
                Reach out to us and we'll get back to you soon.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <Breadcrumb />

        {/* Contact Info - Horizontal Layout Without Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#EDE7D9] overflow-hidden mb-20"
        >
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={info.title}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 hover:bg-[#FBF7ED] transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Icon className="w-6 h-6 text-[#C49A3C]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-[#2E2A22] mb-1">
                      {info.title}
                    </h3>
                    <p className="text-[#6E695D] text-sm leading-relaxed">
                      {info.details}
                    </p>
                    {info.sub && (
                      <p className="text-[#6E695D] text-xs mt-1">{info.sub}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Contact Form & Map - Equal Height Layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch"
        >
          {/* Contact Form - Left Side */}
          <motion.div className="flex flex-col h-full">
            <div className="border-b border-[#EDE7D9] pb-6 mb-8">
              <h2 className="font-serif text-3xl text-[#2E2A22] mb-2">
                Send a Message
              </h2>
              <p className="text-[#6E695D]">
                We'd love to hear from you. Fill out the form below.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#2E2A22]">
                  Full Name <span className="text-[#C49A3C]">*</span>
                </label>
                <div className="relative border-b-2 border-[#EDE7D9] focus-within:border-[#1B3324] transition-colors">
                  <User className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6E695D]" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-8 py-3 bg-transparent focus:outline-none text-[#2E2A22] placeholder:text-[#6E695D]/60"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#2E2A22]">
                  Email Address <span className="text-[#C49A3C]">*</span>
                </label>
                <div className="relative border-b-2 border-[#EDE7D9] focus-within:border-[#1B3324] transition-colors">
                  <Mail className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6E695D]" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-8 py-3 bg-transparent focus:outline-none text-[#2E2A22] placeholder:text-[#6E695D]/60"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#2E2A22]">
                  Subject <span className="text-[#C49A3C]">*</span>
                </label>
                <div className="relative border-b-2 border-[#EDE7D9] focus-within:border-[#1B3324] transition-colors">
                  <MessageSquare className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6E695D]" />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full pl-8 py-3 bg-transparent focus:outline-none text-[#2E2A22] placeholder:text-[#6E695D]/60"
                    placeholder="How can we help?"
                  />
                </div>
              </div>

              <div className="space-y-2 flex-1">
                <label className="block text-sm font-medium text-[#2E2A22]">
                  Message <span className="text-[#C49A3C]">*</span>
                </label>
                <div className="border-b-2 border-[#EDE7D9] focus-within:border-[#1B3324] transition-colors h-full">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full py-3 bg-transparent focus:outline-none text-[#2E2A22] placeholder:text-[#6E695D]/60 resize-none h-full min-h-[120px]"
                    placeholder="Write your message here..."
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1B3324] text-white py-4 font-medium flex items-center justify-center gap-3 hover:bg-[#2D5016] transition-colors disabled:opacity-70 disabled:cursor-not-allowed group mt-4"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </motion.button>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 text-green-700 p-4 text-sm text-center border border-green-200"
                >
                  ✓ Thank you! Your message has been sent successfully.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Right Side - Map & Info - Equal Height */}
          <motion.div className="flex flex-col h-full">
            {/* Map Section - Takes remaining space */}
            <div className="flex-1 flex flex-col">
              <h3 className="font-serif text-2xl text-[#2E2A22] mb-4">Find Us</h3>
              <div className="aspect-video bg-[#EDE7D9] overflow-hidden flex-1">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28860.682278284678!2d82.9739422678797!3d25.31764514309468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76febcf4d%3A0x68131710853ff0b5!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Store Location"
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Quick Connect - Fixed height at bottom */}
            <div className="border-t border-[#EDE7D9] pt-8 mt-8">
              <h3 className="font-serif text-2xl text-[#2E2A22] mb-4">
                Quick Connect
              </h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B3324] text-white hover:bg-[#2D5016] transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat with us
                </a>
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-[#1B3324] text-[#1B3324] hover:bg-[#1B3324] hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call now
                </a>
              </div>
              <p className="text-[#6E695D] text-sm mt-4">
                <span className="font-medium">Response time:</span> Within 24 hours
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}