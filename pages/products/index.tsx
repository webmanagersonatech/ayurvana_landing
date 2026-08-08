import { motion } from "framer-motion";
import {
  ShoppingBag,
  Leaf,
  Droplet,
  Sparkles,
  Pill,
  Flower2,
  FlaskConical,
  Users,
  Award,
  Star,
  Heart,
  Shield,
  Clock,
  Truck,
  ArrowRight,
  Search,
  Filter,
  SlidersHorizontal,
  ChevronRight,
  Home,
} from "lucide-react";
import { useState, useMemo } from "react";
import { useCart } from "../../context/CartContext";

// Animation variants
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
// Product Data
// ---------------------------------------------------------------------------

const products = [
  {
    id: 1,
    name: "Organic Ashwagandha Capsules",
    category: "Herbal Supplements",
    price: 2499,
    rating: 4.9,
    reviews: 127,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80",
    description: "100% organic ashwagandha root extract for stress relief and vitality.",
    badge: "Bestseller",
    isNew: false,
    isOrganic: true,
  },
  {
    id: 2,
    name: "Triphala Powder",
    category: "Herbal Supplements",
    price: 1699,
    rating: 4.7,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80",
    description: "Traditional Ayurvedic blend of three fruits for digestive health.",
    badge: "Organic",
    isNew: false,
    isOrganic: true,
  },
  {
    id: 3,
    name: "Sandalwood & Rose Face Oil",
    category: "Skincare",
    price: 2999,
    rating: 4.8,
    reviews: 56,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&q=80",
    description: "Nourishing face oil with sandalwood and rose for radiant skin.",
    badge: "New",
    isNew: true,
    isOrganic: true,
  },
  {
    id: 4,
    name: "Ayurvedic Immunity Boost Kit",
    category: "Wellness Kits",
    price: 4299,
    rating: 4.9,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80",
    description: "Complete immunity boosting kit with tulsi, giloy, and ashwagandha.",
    badge: "Top Rated",
    isNew: false,
    isOrganic: true,
  },
  {
    id: 5,
    name: "Brahmi Brain Health Tonic",
    category: "Herbal Supplements",
    price: 1999,
    rating: 4.6,
    reviews: 45,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80",
    description: "Brahmi extract tonic for cognitive function and mental clarity.",
    badge: "",
    isNew: false,
    isOrganic: false,
  },
  {
    id: 6,
    name: "Neem & Turmeric Face Mask",
    category: "Skincare",
    price: 1899,
    rating: 4.5,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&q=80",
    description: "Detoxifying face mask with neem and turmeric for clear skin.",
    badge: "Sale",
    isNew: false,
    isOrganic: true,
  },
  {
    id: 7,
    name: "Sleep Well Ayurvedic Tea",
    category: "Teas & Beverages",
    price: 1399,
    rating: 4.4,
    reviews: 34,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80",
    description: "Caffeine-free herbal tea blend with chamomile and ashwagandha.",
    badge: "",
    isNew: true,
    isOrganic: true,
  },
  {
    id: 8,
    name: "Digestive Enzyme Drops",
    category: "Herbal Supplements",
    price: 2399,
    rating: 4.3,
    reviews: 62,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80",
    description: "Liquid digestive enzyme drops for improved gut health.",
    badge: "",
    isNew: false,
    isOrganic: false,
  },
  {
    id: 9,
    name: "Ayurvedic Hair Oil",
    category: "Hair Care",
    price: 1599,
    rating: 4.7,
    reviews: 94,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&q=80",
    description: "Traditional hair oil with bhringraj and amla for hair growth.",
    badge: "Organic",
    isNew: false,
    isOrganic: true,
  },
  {
    id: 10,
    name: "Moringa Superfood Powder",
    category: "Superfoods",
    price: 1899,
    rating: 4.8,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80",
    description: "Nutrient-rich moringa powder for daily wellness boost.",
    badge: "Bestseller",
    isNew: false,
    isOrganic: true,
  },
  {
    id: 11,
    name: "Meditation & Wellness Kit",
    category: "Wellness Kits",
    price: 3499,
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80",
    description: "Complete meditation kit with incense, essential oils, and guide.",
    badge: "New",
    isNew: true,
    isOrganic: true,
  },
  {
    id: 12,
    name: "Lavender & Chamomile Mist",
    category: "Skincare",
    price: 1199,
    rating: 4.2,
    reviews: 28,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&q=80",
    description: "Calming facial mist with lavender and chamomile extracts.",
    badge: "",
    isNew: false,
    isOrganic: true,
  },
];

const categories = [
  "All Products",
  "Herbal Supplements",
  "Skincare",
  "Wellness Kits",
  "Teas & Beverages",
  "Hair Care",
  "Superfoods",
];

// ---------------------------------------------------------------------------
// Breadcrumb Component
// ---------------------------------------------------------------------------

function Breadcrumb({ currentPage, category }) {
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
        Products
      </motion.span>
      {category && category !== "All Products" && (
        <>
          <ChevronRight className="w-4 h-4" />
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#1B3324] font-medium"
          >
            {category}
          </motion.span>
        </>
      )}
    </nav>
  );
}

// ---------------------------------------------------------------------------
// Product Card Component
// ---------------------------------------------------------------------------

function ProductCard({ product, index, addToCart }) {
  return (
    <motion.div
      variants={scaleIn}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-square bg-[#FBF7ED]">
        <img loading="lazy" decoding="async"
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-forest-dark text-white text-xs font-semibold px-3 py-1 rounded-full">
            {product.badge}
          </span>
        )}
        {product.isOrganic && (
          <span className="absolute top-3 right-3 bg-[#C49A3C] text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
            <Leaf className="w-3 h-3" /> Organic
          </span>
        )}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="absolute bottom-3 right-3 bg-white text-[#1B3324] p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Heart className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <span className="text-xs text-[#6E695D] font-medium">
            {product.category}
          </span>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-[#C49A3C] text-[#C49A3C]" />
            <span className="text-sm font-semibold text-[#2E2A22]">
              {product.rating}
            </span>
            <span className="text-xs text-[#6E695D]">({product.reviews})</span>
          </div>
        </div>

        <h3 className="font-serif text-lg text-[#2E2A22] mb-2 line-clamp-2 group-hover:text-[#1B3324] transition-colors">
          {product.name}
        </h3>

        <p className="text-[#6E695D] text-sm leading-relaxed mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-[#EDE7D9]">
          <span className="font-serif text-xl font-semibold text-[#1B3324]">
            ₹{product.price}
          </span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => addToCart(product)}
            className="bg-forest-dark text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 hover:bg-[#2D5016] transition-colors"
          >
            <ShoppingBag className="w-4 h-4" /> Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Features Section
// ---------------------------------------------------------------------------

const features = [
  {
    icon: Leaf,
    title: "100% Organic",
    desc: "Sourced from certified organic farms",
  },
  {
    icon: Award,
    title: "Ayurvedic Certified",
    desc: "Authentic Ayurvedic formulations",
  },
  {
    icon: Shield,
    title: "Lab Tested",
    desc: "Third-party tested for purity",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    desc: "On orders over ₹2,500",
  },
];

function Features() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6"
    >
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <motion.div
            key={feature.title}
            variants={fadeInUp}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-3 p-2.5 bg-gradient-to-r from-[#FBF7ED] to-white rounded-lg border-l-4 border-[#1B3324] shadow-sm hover:shadow-md transition-all duration-300"
          >
            <Icon className="w-5 h-5 text-[#1B3324] flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-xs text-[#2E2A22]">
                {feature.title}
              </h4>
              <p className="text-[10px] text-[#6E695D] truncate">{feature.desc}</p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Main Products Page
// ---------------------------------------------------------------------------

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const { addToCart } = useCart();

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Category filter
    if (selectedCategory !== "All Products") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      );
    }

    // Sorting
    switch (sortBy) {
      case "price-low":
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered = [...filtered].sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="bg-[#FBF7ED] min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-forest-dark overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative h-[300px] md:h-[350px]"
        >
          <img loading="lazy" decoding="async"
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80"
            alt="Ayurvedic products and herbs"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
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
                Our Products
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="font-serif text-4xl md:text-5xl text-white mt-4 leading-tight"
              >
                Ayurvedic{" "}
                <span className="italic text-[#C49A3C]">Wellness</span> Products
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-white/80 text-sm md:text-base mt-5 leading-relaxed max-w-md"
              >
                Discover our curated collection of authentic Ayurvedic products,
                crafted with ancient wisdom and modern quality standards.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <Breadcrumb currentPage="Products" category={selectedCategory} />

        {/* Features */}
        <Features />

        {/* Filters and Search */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6E695D]" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white rounded-lg border border-[#EDE7D9] focus:outline-none focus:border-[#1B3324] text-[#2E2A22] placeholder-[#6E695D]"
              />
            </div>

            <div className="flex items-center gap-3">
              {/* Category Filter Dropdown */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none bg-white border border-[#EDE7D9] rounded-lg px-4 py-3 pr-10 text-[#2E2A22] text-sm focus:outline-none focus:border-[#1B3324] cursor-pointer"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                <Filter className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6E695D] pointer-events-none" />
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-[#EDE7D9] rounded-lg px-4 py-3 pr-10 text-[#2E2A22] text-sm focus:outline-none focus:border-[#1B3324] cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <SlidersHorizontal className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6E695D] pointer-events-none" />
              </div>
            </div>
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
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              addToCart={addToCart}
            />
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
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
              No products found
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