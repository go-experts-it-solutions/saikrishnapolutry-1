import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Download, 
  Check,
  ChevronRight,
  Package,
  Shield,
  Award,
  Sparkles,
  Info,
  Phone
} from "lucide-react";

// Import 3 images
import BabyChickDrinkerImg from "@/assets/Baby Chick Drinker.png";
import ChickDrinkerImg from "@/assets/Chick Drinker.png";
import VaccinatorImg from "@/assets/Vaccinator.png";

// Dummy product data
const dummyProducts = [
  {
    id: "1",
    name: "Chick Drinker",
    category: "Drinking Equipments",
    image: ChickDrinkerImg,
    price: "$34.99",
    oldPrice: "$44.99",
    features: [
      "Water level checking with transparent cone",
      "Self stacking capability for easy storage",
      "Easily cleaned and maintained",
      "Two-way stand for adjusting the height"
    ],
    specifications: [
      { label: "Number of Chicks per Drinker", value: "50 to 70" },
      { label: "Water Capacity", value: "3 Ltrs" },
      { label: "Bottom Plate Diameter", value: "240 mm" },
      { label: "Cone Height", value: "235 mm" },
      { label: "Stand Type", value: "2 way adjustable" }
    ],
    description: "Professional-grade drinking equipment designed specifically for young chicks. Features advanced water level monitoring and easy maintenance capabilities."
  }
];

// Smooth reveal animation
const RevealOnScroll = ({ children, delay = 0 }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setVisible(true);
      });
    });
    
    if (domRef.current) observer.observe(domRef.current);
    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = dummyProducts[0];
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-semibold mb-4 font-['Poppins',sans-serif]">Product Not Found</h1>
          <Link to="/products">
            <Button className="bg-[#DC143C] hover:bg-[#B01030] font-['Poppins',sans-serif]">Back to Products</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const similarProducts = [
    { id: "2", name: "Baby Chick Drinker", category: "Drinking Equipments", image: BabyChickDrinkerImg, price: "$29.99" },
    { id: "3", name: "Vaccinator", category: "Disinfecting Equipments", image: VaccinatorImg, price: "$79.99" },
    { id: "4", name: "Jumbo Drinker", category: "Drinking Equipments", image: ChickDrinkerImg, price: "$49.99" }
  ];

  const productImages = [product.image, product.image, product.image];

  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center text-sm font-medium font-['Inter',sans-serif]">
            <Link to="/" className="text-gray-600 hover:text-[#DC143C] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
            <Link to="/products" className="text-gray-600 hover:text-[#DC143C] transition-colors">Products</Link>
            <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
            <span className="text-[#DC143C] font-semibold">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Section - Premium Layout */}
      <section className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* LEFT: Product Image Gallery */}
          <div className="space-y-4">
            <RevealOnScroll>
              {/* Main Image */}
              <motion.div 
                className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={productImages[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-contain p-12 group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Premium Badge */}
                <div className="absolute top-6 right-6 bg-gradient-to-r from-[#DC143C] to-[#FF1744] text-white px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 shadow-xl">
                  <Sparkles className="w-4 h-4" />
                  Premium Quality
                </div>
              </motion.div>

              {/* Thumbnail Gallery */}
              <div className="flex gap-3">
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-24 h-24 rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImage === index 
                        ? 'border-[#DC143C] scale-105 shadow-lg' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img src={img} alt={`View ${index + 1}`} className="w-full h-full object-contain p-2 bg-gray-50" />
                  </button>
                ))}
              </div>
            </RevealOnScroll>
          </div>

          {/* RIGHT: Product Information */}
          <div className="space-y-6">
            
            {/* Category & Title */}
            <RevealOnScroll delay={100}>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full mb-4">
                  <div className="w-2 h-2 bg-[#DC143C] rounded-full animate-pulse" />
                  <span className="text-[#DC143C] font-semibold text-sm font-['Inter',sans-serif]">
                    {product.category}
                  </span>
                </div>
                
                <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-3 font-['Poppins',sans-serif] leading-tight">
                  {product.name}
                </h1>
                
                <p className="text-l text-gray-600 leading-relaxed font-['Inter',sans-serif]">
                  {product.description}
                </p>
              </div>
            </RevealOnScroll>

            {/* Price */}
            <RevealOnScroll delay={150}>
              <div className="flex items-baseline gap-3 py-4 border-y border-gray-200">
                <span className="text-4xl font-semibold text-[#DC143C] font-['Poppins',sans-serif]">
                  {product.price}
                </span>
                <span className="text-l text-gray-400 line-through font-['Inter',sans-serif]">
                  {product.oldPrice}
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                  Save 22%
                </span>
              </div>
            </RevealOnScroll>

            {/* Key Features */}
            <RevealOnScroll delay={200}>
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 font-['Poppins',sans-serif] flex items-center gap-2">
                  <Info className="w-5 h-5 text-[#DC143C]" />
                  Key Features
                </h2>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-l text-gray-700 font-['Inter',sans-serif] leading-relaxed">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>

            {/* CTA Buttons */}
            <RevealOnScroll delay={250}>
              <div className="space-y-3">
                <Button 
                  size="lg" 
                  className="w-full bg-[#DC143C] hover:bg-[#B01030] text-white rounded-xl py-7 text-lg font-semibold font-['Poppins',sans-serif] shadow-lg hover:shadow-xl transition-all group"
                >
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Download Product Brochure
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="w-full border-2 border-[#DC143C] text-[#DC143C] hover:bg-[#DC143C] hover:text-white rounded-xl py-7 text-lg font-semibold font-['Poppins',sans-serif] transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Sales Team
                </Button>
              </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* Specifications Table */}
        <RevealOnScroll delay={300}>
          <div className="mt-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center font-['Poppins',sans-serif]">
              Technical Specifications
            </h2>
            
            <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-xl border border-gray-200">
              <table className="w-full font-['Inter',sans-serif]">
                <tbody>
                  {product.specifications.map((spec, index) => (
                    <motion.tr 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className={index % 2 === 0 ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}
                    >
                      <td className="px-8 py-5 text-l font-semibold border-r border-gray-700">
                        {spec.label}
                      </td>
                      <td className="px-8 py-5 text-l font-semibold">
                        {spec.value}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* Similar Products Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-3 font-['Poppins',sans-serif]">
                Similar Products
              </h2>
              <p className="text-l text-gray-600 font-['Inter',sans-serif]">
                You may also be interested in these products
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {similarProducts.map((prod, index) => (
              <RevealOnScroll key={prod.id} delay={index * 150}>
                <Link to={`/products/${prod.id}`}>
                  <Card className="group hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden border-0">
                    <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6 text-center bg-white">
                      <p className="text-xs text-[#DC143C] mb-2 uppercase tracking-wide font-['Inter',sans-serif] font-semibold">
                        {prod.category}
                      </p>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#DC143C] transition-colors font-['Poppins',sans-serif]">
                        {prod.name}
                      </h3>
                      <p className="text-2xl font-semibold text-[#DC143C] font-['Poppins',sans-serif]">
                        {prod.price}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Package, title: "Free Shipping", desc: "On orders over $50" },
              { icon: Shield, title: "2 Year Warranty", desc: "Quality guaranteed" },
              { icon: Award, title: "Certified Quality", desc: "ISO certified products" }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <RevealOnScroll key={index} delay={index * 100}>
                  <div className="text-center group cursor-pointer">
                    <motion.div 
                      className="w-20 h-20 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-10 h-10 text-[#DC143C]" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 font-['Poppins',sans-serif]">
                      {item.title}
                    </h3>
                    <p className="text-l text-gray-600 font-['Inter',sans-serif]">
                      {item.desc}
                    </p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
