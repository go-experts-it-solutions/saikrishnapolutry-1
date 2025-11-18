import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Shield, Heart, Award, ChevronLeft, ChevronRight, Play, Star, Quote } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroImage from "@/assets/hero-farm.jpg";

// Scroll-triggered animation component
const StaggeredGrid = ({ children, delay = 0 }) => {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref}>
      <div
        className={`transition-all duration-1000 ${
          show
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-20 scale-95"
        }`}
        style={{
          transitionDelay: `${delay}ms`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [testimonialSlide, setTestimonialSlide] = useState(0);

  // SLIDER 1: Hero slides data
  const heroSlides = [
    {
      title: "Premium Poultry Equipment",
      subtitle: "You Can Trust",
      description: "World-class ventilation systems and automated solutions certified by BESS LAB",
      image: heroImage,
      badge: "New Arrival",
      color: "from-[#DC143C] to-[#FF1744]"
    },
    {
      title: "Innovation Meets",
      subtitle: "Excellence",
      description: "State-of-the-art feeding systems designed for maximum efficiency and productivity",
      image: heroImage,
      badge: "Best Seller",
      color: "from-blue-600 to-purple-600"
    },
    {
      title: "Certified Quality",
      subtitle: "Guaranteed Results",
      description: "University of Illinois certified equipment for modern poultry farming success",
      image: heroImage,
      badge: "Top Rated",
      color: "from-green-600 to-teal-600"
    }
  ];

  // SLIDER 2: Testimonials/Reviews data
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Farm Owner, Tamil Nadu",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh",
      rating: 5,
      text: "The ventilation system from SKPE has transformed our farm operations. Production increased by 40% and our birds are healthier than ever!",
      location: "Chennai, India"
    },
    {
      name: "Michael Zhang",
      role: "Poultry Manager, Singapore",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      rating: 5,
      text: "Outstanding quality and customer service. The automated feeding system saved us countless hours and reduced feed waste significantly.",
      location: "Singapore"
    },
    {
      name: "Sarah Johnson",
      role: "Agricultural Consultant",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      rating: 5,
      text: "I recommend SKPE to all my clients. Their BESS LAB certification and product reliability are unmatched in the industry.",
      location: "United States"
    },
    {
      name: "Ahmed Hassan",
      role: "Poultry Farm Director",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed",
      rating: 5,
      text: "The technical support team is exceptional. They helped us customize the solution perfectly for our large-scale operations.",
      location: "UAE"
    }
  ];

  useEffect(() => {
    setHeroLoaded(true);

    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-play hero slider
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, heroSlides.length]);

  // Auto-play testimonial slider
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const nextTestimonial = () => {
    setTestimonialSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const features = [
    {
      icon: Leaf,
      title: "Organic Feed",
      description: "100% organic, non-GMO feed for healthier and tastier products",
      color: "#4CAF50",
    },
    {
      icon: Shield,
      title: "Hygienic Environment",
      description: "State-of-the-art facilities with strict hygiene protocols",
      color: "#2196F3",
    },
    {
      icon: Heart,
      title: "Ethical Farming",
      description: "Free-range, stress-free environment for our birds",
      color: "#E91E63",
    },
    {
      icon: Award,
      title: "Certified Quality",
      description: "USDA certified and internationally recognized standards",
      color: "#FF9800",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden font-['Inter',sans-serif]">
      <Navbar />

      {/* Hero Section - 80vh with Custom Padding */}
      <section className="relative h-[80vh] bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">  
        <div className="container mx-auto px-4 h-full">
          <div className="grid lg:grid-cols-2 gap-0 h-full items-center">
            
            {/* Left Side - Content Area with Custom Padding */}
            <div className="relative z-20 py-8 lg:pt-[117px] lg:pb-0 flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="space-y-6 max-w-xl"
                >
                  {/* Animated Badge */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <span className={`inline-block bg-gradient-to-r ${heroSlides[currentSlide].color} text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-xl`}>
                      {heroSlides[currentSlide].badge}
                    </span>
                  </motion.div>

                  {/* Animated Heading */}
                  <div>
                    <motion.h1 
                      className="text-3xl md:text-4xl lg:text-5xl font-semibold font-['Poppins',sans-serif] leading-tight"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <span className="text-white">{heroSlides[currentSlide].title}</span>
                      <br />
                      <span className={`bg-gradient-to-r ${heroSlides[currentSlide].color} bg-clip-text text-transparent`}>
                        {heroSlides[currentSlide].subtitle}
                      </span>
                    </motion.h1>
                  </div>

                  {/* Description */}
                  <motion.p 
                    className="text-l text-gray-300 leading-relaxed font-['Inter',sans-serif]"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {heroSlides[currentSlide].description}
                  </motion.p>

                  {/* CTA Buttons */}
                  <motion.div 
                    className="flex gap-4 flex-wrap"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Link to="/products">
                      <motion.div
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          size="lg"
                          className={`bg-gradient-to-r ${heroSlides[currentSlide].color} text-white px-8 py-6 text-base font-semibold shadow-2xl hover:shadow-[0_20px_50px_rgba(220,20,60,0.4)] transition-all duration-300 font-['Poppins',sans-serif] relative overflow-hidden group`}
                        >
                          <span className="relative z-10 flex items-center gap-2">
                            Explore Products
                            <Play className="w-4 h-4" />
                          </span>
                          {/* Animated Shine */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                            initial={{ x: '-200%' }}
                            animate={{ x: '200%' }}
                            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                          />
                        </Button>
                      </motion.div>
                    </Link>

                    <motion.div
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-base font-semibold transition-all duration-300 font-['Poppins',sans-serif] backdrop-blur-md bg-white/5"
                      >
                        Learn More
                      </Button>
                    </motion.div>
                  </motion.div>

                  {/* Slide Indicators */}
                  <div className="flex items-center gap-4 pt-4">
                    <div className="flex gap-2">
                      {heroSlides.map((_, index) => (
                        <motion.button
                          key={index}
                          onClick={() => {
                            setCurrentSlide(index);
                            setIsAutoPlaying(false);
                          }}
                          className="relative"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <div className={`h-1.5 rounded-full transition-all duration-300 ${
                            currentSlide === index
                              ? "w-12 bg-gradient-to-r " + heroSlides[index].color
                              : "w-6 bg-white/30 hover:bg-white/50"
                          }`} />
                        </motion.button>
                      ))}
                    </div>
                    
                    <div className="text-white/60 text-sm font-mono">
                      {String(currentSlide + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Side - Image Slider with Modern Effects */}
            <div className="relative h-full hidden lg:flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="relative w-full max-w-lg"
                >
                  {/* Decorative Background Blob */}
                  <motion.div
                    className={`absolute -inset-10 bg-gradient-to-r ${heroSlides[currentSlide].color} opacity-20 blur-3xl rounded-full`}
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />

                  {/* Image Container with 3D Effect */}
                  <motion.div
                    className="relative rounded-3xl overflow-hidden shadow-2xl"
                    style={{
                      transformStyle: "preserve-3d",
                      perspective: "1000px"
                    }}
                    whileHover={{ 
                      rotateY: 5,
                      rotateX: 5,
                      scale: 1.02
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.img
                      src={heroSlides[currentSlide].image}
                      alt="Hero Slide"
                      className="w-full h-[500px] object-cover"
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 10, ease: "linear" }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent`} />
                    
                    {/* Floating Stats */}
                    <motion.div
                      className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      <div className="text-white text-center">
                        <div className={`text-3xl font-semibold bg-gradient-to-r ${heroSlides[currentSlide].color} bg-clip-text text-transparent`}>
                          20+
                        </div>
                        <div className="text-xs text-white/80">Years Experience</div>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <motion.button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-xl hover:bg-white/20 p-3 rounded-full border border-white/20 transition-all duration-300 group"
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </motion.button>

              <motion.button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-xl hover:bg-white/20 p-3 rounded-full border border-white/20 transition-all duration-300 group"
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Animated Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />
      </section>

      {/* Farm Introduction */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              heroLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <h2 className="text-3xl font-semibold mb-6 font-['Poppins',sans-serif] bg-gradient-to-r from-[#DC143C] to-black bg-clip-text text-transparent tracking-tight">
              Welcome to SKPE Poultry Equipments
            </h2>

            <p className="text-l text-gray-600 leading-relaxed font-['Inter',sans-serif]">
              For over 20 years, we've been dedicated to providing the finest quality
              poultry equipment. Our commitment to innovation, superior engineering, and
              exceptional service ensures that every product meets the highest standards
              of quality and performance.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-16 font-['Poppins',sans-serif] tracking-tight">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <StaggeredGrid key={index} delay={index * 200}>
                  <Card className="h-full group hover:shadow-2xl hover:-translate-y-5 hover:scale-105 transition-all duration-500 relative overflow-hidden">
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                    <CardContent className="p-8 text-center relative z-10">
                      {/* Pulsing Icon */}
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#DC143C]/10 to-[#FF1744]/20 flex items-center justify-center mx-auto mb-6 relative animate-pulse-slow">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#DC143C]/30 to-transparent animate-ripple" />
                        <Icon size={40} style={{ color: feature.color }} />
                      </div>

                      <h3 className="text-xl font-semibold mb-3 font-['Poppins',sans-serif]">{feature.title}</h3>
                      <p className="text-l text-gray-600 font-['Inter',sans-serif]">{feature.description}</p>
                    </CardContent>
                  </Card>
                </StaggeredGrid>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial Slider */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-[#DC143C]/5 to-gray-900 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#DC143C]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-gradient-to-r from-[#DC143C] to-[#FF1744] text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                Client Success Stories
              </span>
              <h2 className="text-3xl font-semibold text-gray-900 mb-4 font-['Poppins',sans-serif]">
                Trusted by Farmers Worldwide
              </h2>
              <p className="text-l text-gray-600 max-w-2xl mx-auto font-['Inter',sans-serif]">
                See what our satisfied customers have to say about our products
              </p>
            </motion.div>
          </div>

          {/* Testimonial Slider */}
          <div className="max-w-5xl mx-auto relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialSlide}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <Card className="bg-white shadow-2xl border-none overflow-hidden">
                  <CardContent className="p-8 md:p-12">
                    <div className="grid md:grid-cols-3 gap-8 items-center">
                      {/* Left - Image */}
                      <div className="flex flex-col items-center text-center">
                        <motion.div
                          className="relative mb-4"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#DC143C]/20 shadow-xl">
                            <img
                              src={testimonials[testimonialSlide].image}
                              alt={testimonials[testimonialSlide].name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -top-2 -right-2 bg-gradient-to-r from-[#DC143C] to-[#FF1744] p-2 rounded-full shadow-lg">
                            <Quote className="w-5 h-5 text-white" />
                          </div>
                        </motion.div>

                        <h3 className="text-xl font-semibold text-gray-900 font-['Poppins',sans-serif] mb-1">
                          {testimonials[testimonialSlide].name}
                        </h3>
                        <p className="text-sm text-gray-600 font-['Inter',sans-serif] mb-2">
                          {testimonials[testimonialSlide].role}
                        </p>
                        <p className="text-xs text-[#DC143C] font-semibold">
                          📍 {testimonials[testimonialSlide].location}
                        </p>
                      </div>

                      {/* Right - Content */}
                      <div className="md:col-span-2">
                        {/* Star Rating */}
                        <div className="flex gap-1 mb-4">
                          {[...Array(testimonials[testimonialSlide].rating)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                            </motion.div>
                          ))}
                        </div>

                        {/* Testimonial Text */}
                        <blockquote className="text-l text-gray-700 leading-relaxed font-['Inter',sans-serif] italic mb-6">
                          "{testimonials[testimonialSlide].text}"
                        </blockquote>

                        {/* Decorative Line */}
                        <div className="h-1 w-20 bg-gradient-to-r from-[#DC143C] to-[#FF1744] rounded-full" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <motion.button
                onClick={prevTestimonial}
                className="bg-white hover:bg-[#DC143C] text-[#DC143C] hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 border-2 border-[#DC143C]/20"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setTestimonialSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      testimonialSlide === index
                        ? "w-8 h-3 bg-gradient-to-r from-[#DC143C] to-[#FF1744]"
                        : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextTestimonial}
                className="bg-white hover:bg-[#DC143C] text-[#DC143C] hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 border-2 border-[#DC143C]/20"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Counter */}
            <div className="text-center mt-4 text-gray-600 font-mono text-sm">
              {String(testimonialSlide + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold mb-4 font-['Poppins',sans-serif] tracking-tight">
            Our Premium Products
          </h2>
          <p className="text-l text-gray-600 font-['Inter',sans-serif]">
            Discover our range of high-quality poultry equipment
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <StaggeredGrid key={product.id} delay={index * 150}>
              <ProductCard product={product} />
            </StaggeredGrid>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gradient-to-br from-[#DC143C]/5 to-black/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-6 font-['Poppins',sans-serif] tracking-tight">
            Certified Excellence
          </h2>

          <p className="text-l text-gray-600 text-center mb-16 max-w-3xl mx-auto font-['Inter',sans-serif]">
            Our equipment is certified by leading organizations, ensuring the highest
            standards of quality, safety, and performance.
          </p>

          <div className="flex flex-wrap justify-center gap-12">
            {[
              { icon: Award, label: "ISO Certified" },
              { icon: Shield, label: "Quality Assured" },
              { icon: Heart, label: "Animal Welfare" },
            ].map((cert, index) => {
              const Icon = cert.icon;
              return (
                <StaggeredGrid key={index} delay={index * 300}>
                  <div className="text-center group cursor-pointer">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#DC143C] to-[#FF1744] flex items-center justify-center mx-auto mb-4 shadow-2xl group-hover:scale-125 group-hover:rotate-[360deg] transition-all duration-700">
                      <Icon size={60} className="text-white" />
                    </div>
                    <p className="text-xl font-semibold font-['Poppins',sans-serif]">{cert.label}</p>
                  </div>
                </StaggeredGrid>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 container mx-auto px-4">
        <Card className="bg-gradient-to-br from-[#DC143C] to-black text-white overflow-hidden relative">
          {/* Moving Light Effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)] animate-move-light" />

          <CardContent className="p-16 text-center relative z-10">
            <h2 className="text-3xl font-semibold mb-6 font-['Poppins',sans-serif] tracking-tight">
              Ready to Experience Premium Quality?
            </h2>

            <p className="text-l mb-8 opacity-95 max-w-2xl mx-auto font-['Inter',sans-serif]">
              Download our complete product brochure to learn more about our offerings
            </p>

            <Button
              size="lg"
              className="bg-white text-[#DC143C] px-12 py-7 text-xl font-semibold hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-white/30 font-['Poppins',sans-serif] tracking-wide"
            >
              Download Brochure
            </Button>
          </CardContent>
        </Card>
      </section>

      <Footer />

      {/* Global Animations */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }

        @keyframes ripple {
          0% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        @keyframes move-light {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(50%, 50%);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-ripple {
          animation: ripple 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-move-light {
          animation: move-light 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Index;
