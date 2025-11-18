import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, ChevronRight, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../assets/SKPELOGO.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const location = useLocation();

  // Product Categories Data Structure
  const megaMenuCategories = [
    {
      title: "DRINKING SYSTEM",
      color: "from-blue-500 to-cyan-500",
      icon: "💧",
      items: [
        { name: "Bell Drinkers", path: "/products/bell-drinkers" },
        { name: "Manual Drinkers", path: "/products/manual-drinkers" },
        { name: "Nipple Accessories", path: "/products/nipple-accessories" },
        { name: "Nipple Drinking System", path: "/products/nipple-drinking-system" },
      ],
    },
    {
      title: "FEEDING SYSTEM",
      color: "from-green-500 to-emerald-500",
      icon: "🌾",
      items: [
        { name: "Auto. Feeding System Breeder", path: "/products/auto-feeding-breeder" },
        { name: "Auto. Feeding System Broiler", path: "/products/auto-feeding-broiler" },
        { name: "Feed Partition", path: "/products/feed-partition" },
        { name: "Manual Feeders", path: "/products/manual-feeders" },
        { name: "Silo System", path: "/products/silo-system" },
      ],
    },
    {
      title: "CLIMATE CONTROL",
      color: "from-orange-500 to-red-500",
      icon: "🌡️",
      items: [
        { name: "Clima Therm", path: "/products/clima-therm" },
        { name: "Controllers", path: "/products/controllers" },
        { name: "Fogger System", path: "/products/fogger-system" },
        { name: "Ventilation", path: "/products/ventilation" },
      ],
    },
    {
      title: "HOUSING",
      color: "from-purple-500 to-pink-500",
      icon: "🏠",
      items: [
        { name: "Clima Shield", path: "/products/clima-shield" },
        { name: "Curtain Winching System", path: "/products/curtain-winching" },
        { name: "Laying Nest", path: "/products/laying-nest" },
        { name: "Slatt", path: "/products/slatt" },
        { name: "Tiny Homes For The Rural", path: "/products/tiny-homes" },
      ],
    },
    {
      title: "BIRD TRANSPORT",
      color: "from-yellow-500 to-amber-500",
      icon: "🚚",
      items: [
        { name: "Chick Transport Box (4 Compartment)", path: "/products/chick-transport-box" },
        { name: "Chicken Carrier With Plastic", path: "/products/chicken-carrier" },
        { name: "Meat Crate", path: "/products/meat-crate" },
        { name: "Poultry Transport Crate", path: "/products/poultry-transport-crate" },
      ],
    },
    {
      title: "OTHER",
      color: "from-indigo-500 to-blue-500",
      icon: "⚙️",
      items: [
        { name: "Face Shield", path: "/products/face-shield" },
        { name: "Medicator", path: "/products/medicator" },
        { name: "Other", path: "/products/other" },
        { name: "Vaccinator", path: "/products/vaccinator" },
      ],
    },
    {
      title: "HATCHERY / FEEDMILL / PROCESSING",
      color: "from-teal-500 to-green-500",
      icon: "🏭",
      items: [
        { name: "Roofing Sheets", path: "/products/roofing-sheets" },
      ],
    },
    {
      title: "VERTICAL FARMING",
      color: "from-lime-500 to-green-500",
      icon: "🌱",
      items: [
        { name: "Vertical Farming For Breeders", path: "/products/vertical-farming-breeders" },
        { name: "Vertical Farming For Layers", path: "/products/vertical-farming-layers" },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home", hasMegaMenu: false },
    { path: "/products", label: "Products", hasMegaMenu: true },
    { path: "/about", label: "About Us", hasMegaMenu: false },
    { path: "/contact", label: "Contact", hasMegaMenu: false },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-white/90 backdrop-blur-2xl shadow-2xl border-b-2 border-[#DC143C]/20"
          : "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="relative group flex items-center">
            <div className="relative">
              <div className="relative bg-white/80 backdrop-blur-sm p-3 rounded-xl border-2 border-transparent group-hover:border-[#DC143C]/50 transition-all duration-500">
                <img
                  src={logo}
                  alt="SKPE Logo"
                  className="h-16 w-auto object-contain transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-3"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-xl" />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 relative">
            {navLinks.map((link, index) => {
              const active = isActive(link.path);
              const hovered = hoveredPath === link.path;

              return (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={() => {
                    setHoveredPath(link.path);
                    if (link.hasMegaMenu) {
                      setShowMegaMenu(true);
                    }
                  }}
                  onMouseLeave={() => {
                    setHoveredPath(null);
                    if (link.hasMegaMenu) {
                      setShowMegaMenu(false);
                    }
                  }}
                >
                  <Link
                    to={link.path}
                    className="relative px-6 py-3 group block"
                    style={{
                      animation: `fadeInDown 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${
                        index * 0.1
                      }s both`,
                    }}
                  >
                    <span
                      className={`relative z-10 text-sm font-bold tracking-wide transition-all duration-500 flex items-center gap-2 ${
                        active || hovered || (link.hasMegaMenu && showMegaMenu)
                          ? "text-[#DC143C]"
                          : "text-gray-800"
                      }`}
                      style={{
                        textShadow:
                          hovered || (link.hasMegaMenu && showMegaMenu)
                            ? "2px 2px 4px rgba(220, 20, 60, 0.3)"
                            : "none",
                        transform:
                          hovered || (link.hasMegaMenu && showMegaMenu)
                            ? "translateY(-2px)"
                            : "translateY(0)",
                      }}
                    >
                      {link.label}
                      {link.hasMegaMenu && (
                        <ChevronDown
                          className={`w-4 h-4 transform transition-all duration-500 ${
                            showMegaMenu ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      )}
                      {!link.hasMegaMenu && (
                        <ChevronRight
                          className={`w-4 h-4 transform transition-all duration-500 ${
                            hovered ? "translate-x-1 opacity-100" : "translate-x-0 opacity-0"
                          }`}
                        />
                      )}
                    </span>

                    {!link.hasMegaMenu && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r from-[#DC143C] via-[#FF1744] to-black transition-all duration-500 rounded-full ${
                            active ? "w-full" : hovered ? "w-full animate-shimmer" : "w-0"
                          }`}
                          style={{
                            boxShadow:
                              hovered || active ? "0 0 20px rgba(220, 20, 60, 0.8)" : "none",
                          }}
                        />
                      </div>
                    )}

                    {(active || hovered || (link.hasMegaMenu && showMegaMenu)) && (
                      <div className="absolute inset-0 -z-10">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#DC143C]/20 rounded-full blur-2xl animate-pulse" />
                      </div>
                    )}

                    <div
                      className={`absolute inset-0 rounded-xl transition-all duration-500 ${
                        hovered || (link.hasMegaMenu && showMegaMenu)
                          ? "ring-2 ring-[#DC143C]/50 ring-offset-2 ring-offset-white scale-105"
                          : "ring-0"
                      }`}
                    />
                  </Link>

                  {/* MEGA MENU - Attached directly to Products link */}
                  {link.hasMegaMenu && showMegaMenu && (
                    <div
                      className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50"
                      onMouseEnter={() => setShowMegaMenu(true)}
                      onMouseLeave={() => setShowMegaMenu(false)}
                    >
                      {/* Bridge Element - Invisible connector to prevent gap */}
                      <div className="absolute top-0 left-0 right-0 h-2 bg-transparent" />
                      
                      <div className="w-[1200px] max-w-[95vw] bg-white/95 backdrop-blur-2xl shadow-2xl rounded-2xl border-2 border-[#DC143C]/20 overflow-hidden animate-fadeInDown">
                        <div className="p-8">
                          <div className="grid grid-cols-4 gap-6">
                            {megaMenuCategories.map((category, index) => (
                              <div
                                key={category.title}
                                className="group animate-fadeInUp"
                                style={{
                                  animationDelay: `${index * 0.05}s`,
                                  animationFillMode: "both",
                                }}
                              >
                                <div className="flex items-center gap-2 mb-4 pb-2 border-b-2 border-transparent group-hover:border-[#DC143C] transition-all duration-300">
                                  <span className="text-2xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                                    {category.icon}
                                  </span>
                                  <h3
                                    className={`text-xs font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent group-hover:tracking-wide transition-all duration-300`}
                                  >
                                    {category.title}
                                  </h3>
                                </div>

                                <ul className="space-y-2">
                                  {category.items.map((item) => (
                                    <li key={item.path}>
                                      <Link
                                        to={item.path}
                                        className="block py-2 px-3 text-sm text-gray-700 rounded-lg hover:bg-gradient-to-r hover:from-[#DC143C]/10 hover:to-[#FF1744]/10 hover:text-[#DC143C] hover:translate-x-2 transition-all duration-300 relative group/item"
                                        onClick={() => setShowMegaMenu(false)}
                                      >
                                        <span className="relative z-10">{item.name}</span>
                                        <ChevronRight className="w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all duration-300" />
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -translate-x-full group-hover/item:translate-x-full transition-transform duration-700 rounded-lg" />
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>

                          <div className="mt-8 pt-6 border-t border-gray-200">
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="text-lg font-bold text-gray-800 mb-1">
                                  Can't find what you're looking for?
                                </h4>
                                <p className="text-sm text-gray-600">
                                  Contact our team for custom solutions and expert guidance
                                </p>
                              </div>
                              <Button className="bg-gradient-to-r from-[#DC143C] to-black text-white px-6 py-3 rounded-xl hover:shadow-[0_0_30px_rgba(220,20,60,0.5)] transition-all duration-300">
                                Contact Expert
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Premium CTA Button */}
            <div
              className="ml-4 relative group"
              style={{
                animation: `fadeInDown 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${
                  navLinks.length * 0.1
                }s both`,
              }}
            >
              <Button className="relative overflow-hidden bg-gradient-to-r from-[#DC143C] via-[#FF1744] to-black bg-[length:200%_100%] hover:bg-[position:100%_0] text-white font-bold px-8 py-6 rounded-2xl shadow-2xl hover:shadow-[0_0_40px_rgba(220,20,60,0.6)] transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 border-2 border-white/20">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <div className="absolute inset-0 bg-black/20 scale-0 group-hover:scale-100 transition-transform duration-700 rounded-2xl" />
                <span className="relative z-10 flex items-center gap-3">
                  <Download className="w-5 h-5 animate-bounce" />
                  <span className="group-hover:tracking-wider transition-all duration-300">
                    Download Brochure
                  </span>
                </span>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping animation-delay-500" />
              </Button>
              <div className="absolute -inset-3 bg-gradient-to-r from-[#DC143C]/30 via-[#FF1744]/30 to-black/30 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500 -z-10" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 relative group rounded-xl hover:bg-[#DC143C]/10 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-7 h-7 flex items-center justify-center">
              <Menu
                size={28}
                className={`absolute transition-all duration-500 ${
                  isOpen
                    ? "opacity-0 rotate-180 scale-0"
                    : "opacity-100 rotate-0 scale-100 text-[#DC143C]"
                }`}
              />
              <X
                size={28}
                className={`absolute transition-all duration-500 ${
                  isOpen
                    ? "opacity-100 rotate-0 scale-100 text-[#DC143C]"
                    : "opacity-0 -rotate-180 scale-0"
                }`}
              />
            </div>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#DC143C]/20 to-black/20 scale-0 group-hover:scale-150 transition-transform duration-500" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-700 ease-out ${
            isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pb-6 pt-4 space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block relative overflow-hidden group ${
                  isOpen ? "animate-slideInLeft" : ""
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "both",
                }}
              >
                <div
                  className={`relative py-4 px-6 rounded-2xl text-sm font-bold transition-all duration-500 transform group-hover:scale-105 flex items-center gap-3 ${
                    isActive(link.path)
                      ? "text-white bg-gradient-to-r from-[#DC143C] to-black shadow-lg"
                      : "text-gray-800 bg-gray-50 group-hover:bg-gradient-to-r group-hover:from-[#DC143C]/10 group-hover:to-black/10"
                  }`}
                >
                  <span className="relative z-10 flex-1">{link.label}</span>
                  <ChevronRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-2xl" />
                </div>
                {isActive(link.path) && (
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-[#DC143C] to-black rounded-r-full animate-pulse" />
                )}
              </Link>
            ))}

            <Button
              className={`w-full mt-6 bg-gradient-to-r from-[#DC143C] via-[#FF1744] to-black text-white font-bold py-6 rounded-2xl shadow-2xl hover:shadow-[0_0_30px_rgba(220,20,60,0.6)] transform hover:scale-105 transition-all duration-500 border-2 border-white/20 ${
                isOpen ? "animate-slideInLeft" : ""
              }`}
              style={{
                animationDelay: `${navLinks.length * 0.1}s`,
                animationFillMode: "both",
              }}
            >
              <Download className="w-5 h-5 mr-3" />
              Download Brochure
            </Button>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes shimmer {
          0%, 100% {
            background-position: -200% 0;
          }
          50% {
            background-position: 200% 0;
          }
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .animate-fadeInDown {
          animation: fadeInDown 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .animate-shimmer {
          background-size: 200% 100%;
          animation: shimmer 2s ease-in-out infinite;
        }

        .animation-delay-500 {
          animation-delay: 500ms;
        }

        html {
          scroll-behavior: smooth;
        }

        * {
          -webkit-tap-highlight-color: transparent;
        }

        nav {
          will-change: transform;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
