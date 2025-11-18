import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  X,
  ChevronRight,
  Filter,
} from "lucide-react";

// Import images
import BabyChickDrinkerImg from "@/assets/Baby Chick Drinker.png";
import ChickDrinkerImg from "@/assets/Chick Drinker.png";
import VaccinatorImg from "@/assets/Vaccinator.png";
import heroImage from "@/assets/hero-farm.jpg"; // Background image

// Products Data
const allProducts = [
  { id: 1, name: "Baby Chick Drinker", category: "Drinking Equipments", image: BabyChickDrinkerImg, description: "Compact drinker designed for baby chicks", price: "$29.99", featured: true },
  { id: 2, name: "Chick Drinker", category: "Drinking Equipments", image: ChickDrinkerImg, description: "Standard drinker for growing chicks", price: "$34.99" },
  { id: 3, name: "Jumbo Drinkler", category: "Drinking Equipments", image: VaccinatorImg, description: "High-capacity drinking system", price: "$49.99", featured: true },
  { id: 4, name: "Deluxe Drinker", category: "Drinking Equipments", image: BabyChickDrinkerImg, description: "Premium quality drinker with advanced features", price: "$44.99" },
  { id: 5, name: "Deluxe Jumbo Drinker", category: "Drinking Equipments", image: ChickDrinkerImg, description: "Large capacity premium drinker", price: "$54.99" },
  { id: 6, name: "Grower Drinkler", category: "Drinking Equipments", image: VaccinatorImg, description: "Perfect for grower phase birds", price: "$39.99" },
  { id: 7, name: "Nipples & Pressure Regulator", category: "Drinking Equipments", image: BabyChickDrinkerImg, description: "Complete nipple drinking system accessories", price: "$24.99" },
  { id: 8, name: "Chick Feeder", category: "Feeding Equipments", image: ChickDrinkerImg, description: "Efficient feeder for young chicks", price: "$32.99", featured: true },
  { id: 9, name: "Turbo Feeder", category: "Feeding Equipments", image: VaccinatorImg, description: "High-capacity turbo feeding system", price: "$59.99" },
  { id: 10, name: "Feeder", category: "Feeding Equipments", image: BabyChickDrinkerImg, description: "Standard poultry feeder", price: "$28.99" },
  { id: 11, name: "Parent Feeders", category: "Feeding Equipments", image: ChickDrinkerImg, description: "Specialized feeders for parent stock", price: "$64.99" },
  { id: 12, name: "Baby Chick Feeder", category: "Feeding Equipments", image: VaccinatorImg, description: "Small capacity feeder for baby chicks", price: "$26.99" },
  { id: 13, name: "Egg Tray", category: "Transport Equipments", image: BabyChickDrinkerImg, description: "Colorful stackable egg trays", price: "$12.99", featured: true },
  { id: 14, name: "Chick Transport", category: "Transport Equipments", image: ChickDrinkerImg, description: "Safe transport boxes for chicks", price: "$45.99" },
  { id: 15, name: "Bird-Transport", category: "Transport Equipments", image: VaccinatorImg, description: "Ventilated crates for bird transportation", price: "$38.99" },
  { id: 16, name: "Foggers", category: "Climate Control", image: BabyChickDrinkerImg, description: "Cooling and humidification system", price: "$89.99" },
  { id: 17, name: "Sprinklers", category: "Climate Control", image: ChickDrinkerImg, description: "Automated sprinkling system", price: "$76.99" },
  { id: 18, name: "Box Fan", category: "Climate Control", image: VaccinatorImg, description: "Industrial ventilation fan", price: "$129.99", featured: true },
  { id: 19, name: "Cooling Pad", category: "Climate Control", image: BabyChickDrinkerImg, description: "Evaporative cooling pads", price: "$95.99" },
  { id: 20, name: "Electric Brooder", category: "Brooding Equipments", image: ChickDrinkerImg, description: "Electric heating brooder system", price: "$149.99" },
  { id: 21, name: "Electric Brooder with Thermostat & Fan", category: "Brooding Equipments", image: VaccinatorImg, description: "Advanced brooder with temperature control", price: "$189.99" },
  { id: 22, name: "Vaccinator", category: "Disinfecting Equipments", image: BabyChickDrinkerImg, description: "Professional vaccination equipment", price: "$79.99" },
  { id: 23, name: "Debeaker Machine Manual", category: "Disinfecting Equipments", image: ChickDrinkerImg, description: "Manual debeaking machine", price: "$199.99" },
  { id: 24, name: "G-KIIL Flame-Gun-Baby", category: "Other Equipments", image: VaccinatorImg, description: "Compact flame gun for sanitation", price: "$54.99" },
  { id: 25, name: "G-KIll Flame Gun (2-Burner)", category: "Other Equipments", image: BabyChickDrinkerImg, description: "Two-burner flame gun system", price: "$84.99" },
  { id: 26, name: "G-KIll Flame Gun(4-Burner)", category: "Other Equipments", image: ChickDrinkerImg, description: "Four-burner industrial flame gun", price: "$124.99" },
  { id: 27, name: "Rakewell Raking Machine Manual", category: "Other Equipments", image: VaccinatorImg, description: "Manual litter raking machine", price: "$299.99" },
];

// Smooth Scroll Animation
const FadeInSection = ({ children, delay = 0 }) => {
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
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const categories = [
    "All",
    "Drinking Equipments",
    "Feeding Equipments",
    "Transport Equipments",
    "Climate Control",
    "Brooding Equipments",
    "Disinfecting Equipments",
    "Other Equipments"
  ];

  useEffect(() => {
    let filtered = allProducts;

    if (selectedCategory !== "All") {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Navbar />

      {/* HERO - With Background Image */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Background"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#DC143C]/80 via-black/70 to-black/80" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <FadeInSection>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 text-white font-['Poppins',sans-serif] drop-shadow-2xl">
              Products.
            </h1>
          </FadeInSection>
          
          <FadeInSection delay={200}>
            <p className="text-l text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed font-['Inter',sans-serif] drop-shadow-lg">
              Premium poultry equipment designed for performance. Engineered for excellence.
            </p>
          </FadeInSection>

          {/* Apple-style Search */}
          <FadeInSection delay={400}>
            <div className="max-w-2xl mx-auto relative">
              <div className={`relative transition-all duration-300 ${isSearchFocused ? 'scale-105' : ''}`}>
                <Search className={`absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${isSearchFocused ? 'text-[#DC143C]' : 'text-gray-400'}`} />
                <Input
                  type="text"
                  placeholder="Search products"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="w-full pl-14 pr-14 py-7 text-lg bg-white/95 backdrop-blur-md border-0 rounded-full focus:bg-white focus:ring-2 focus:ring-white/30 transition-all font-['Inter',sans-serif] shadow-2xl"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-5 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-400" />
                  </button>
                )}
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* CATEGORIES - Horizontal Scroll */}
      <section className="py-12 border-y border-gray-200 sticky top-20 bg-white/80 backdrop-blur-2xl z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide pb-2">
            <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-full">
              <Filter className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-600 font-['Inter',sans-serif]">Filter</span>
            </div>
            
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 font-['Poppins',sans-serif] ${
                  selectedCategory === cat
                    ? 'bg-[#DC143C] text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS - Clean Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-32">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-3xl font-semibold text-gray-900 mb-2 font-['Poppins',sans-serif]">No results found</h3>
              <p className="text-l text-gray-600 mb-8 font-['Inter',sans-serif]">Try adjusting your search or filter</p>
              <Button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="bg-[#DC143C] hover:bg-[#B01030] text-white rounded-full px-8 py-6 font-['Poppins',sans-serif] font-semibold"
              >
                Clear all filters
              </Button>
            </div>
          ) : (
            <>
              <div className="mb-8 text-center">
                <p className="text-l text-gray-600 font-medium font-['Inter',sans-serif]">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
                {filteredProducts.map((product, index) => (
                  <FadeInSection key={product.id} delay={index * 100}>
                    <Link to={`/products/${product.id}`}>
                      <div className="group cursor-pointer">
                        <div className="relative aspect-square bg-gray-50 rounded-3xl overflow-hidden mb-6">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-700 ease-out"
                          />
                          
                          {product.featured && (
                            <div className="absolute top-4 left-4 px-4 py-1.5 bg-[#DC143C] text-white text-xs font-semibold rounded-full font-['Poppins',sans-serif]">
                              Featured
                            </div>
                          )}

                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                            <Button className="bg-white text-[#DC143C] hover:bg-gray-100 rounded-full px-6 py-2 font-semibold shadow-2xl font-['Poppins',sans-serif]">
                              Quick View
                            </Button>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-start justify-between gap-3">
                            <h3 className="font-semibold text-lg text-gray-900 group-hover:text-[#DC143C] transition-colors flex-1 font-['Poppins',sans-serif]">
                              {product.name}
                            </h3>
                            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#DC143C] group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                          </div>
                          
                          <p className="text-l text-gray-600 leading-relaxed line-clamp-2 font-['Inter',sans-serif]">
                            {product.description}
                          </p>
                          
                          <p className="text-lg font-semibold text-gray-900 pt-2 font-['Poppins',sans-serif]">
                            {product.price}
                          </p>

                          <div className="pt-2">
                            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full font-['Inter',sans-serif]">
                              {product.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </FadeInSection>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInSection>
            <h2 className="text-3xl font-semibold tracking-tight mb-6 text-gray-900 font-['Poppins',sans-serif]">
              Need help choosing?
            </h2>
          </FadeInSection>
          
          <FadeInSection delay={200}>
            <p className="text-l text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed font-['Inter',sans-serif]">
              Our specialists can help you find the perfect equipment for your poultry farm.
            </p>
          </FadeInSection>

          <FadeInSection delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-[#DC143C] hover:bg-[#B01030] text-white rounded-full px-8 py-6 text-lg font-semibold font-['Poppins',sans-serif]">
                  Contact a specialist
                </Button>
              </Link>
              <Button variant="outline" className="border-2 border-gray-300 hover:border-gray-400 text-gray-900 rounded-full px-8 py-6 text-lg font-semibold font-['Poppins',sans-serif]">
                Download catalog
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

      <Footer />

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Products;
