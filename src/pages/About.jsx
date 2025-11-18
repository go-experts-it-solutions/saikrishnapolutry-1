import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Award,
  Factory,
  Shield,
  Users,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  Building,
  Facebook,
  Twitter,
  Linkedin
} from "lucide-react";
import heroImage from "@/assets/hero-farm.jpg";

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

const About = () => {
  const founders = [
    {
      name: "Sri Srikanth Manchala",
      description: "A commerce graduate by qualification, this man started his business exploits in the poultry sector with zeal, passion and went on to promote companies like Sai Krishna Plastic Industries, Saman Wires, Baby Polymers and Sai Krishna Poultry Equipments. He is among the manufacturers of innovative poultry equipment and plastic furniture etc. His growth from just a poultry equipment dealer to a manufacturer during the last 25 years is phenomenal and inspiring. He is also a manufacturer of Automatic poultry equipment in the South Region and has end to end experience in the industry.",
      social: { facebook: "#", twitter: "#", linkedin: "#" }
    },
    {
      name: "Sri Naveen Kumar Manchala",
      description: "Mr. Naveen Kumar as a very young age, joined his brother Mr. Srikanth in the business venture. He is the managing partner of Sai Krishna Plastic Industries. He has been a tremendous help in the upbringing of it. He is involved in day to day operations and is always ready to take up more.",
      social: { facebook: "#", twitter: "#", linkedin: "#" }
    },
    {
      name: "Sri Yada Santosh Kumar",
      description: "Mr. Santosh is a B.Tech graduate, a computer science professional. After completing his Bachelor's degree, he has worked with Infosys Technologies Limited, both in India and abroad. After gaining enough knowledge and experience, he came back home to spearhead Sai Krishna Poultry Equipments. The group was mainly in the concentrating the Poultry sector from the start.",
      social: { facebook: "#", twitter: "#", linkedin: "#" }
    }
  ];

  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Navbar />

      {/* Hero Section with Background */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="About us" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#DC143C]/80 via-black/70 to-black/80" />
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <RevealOnScroll>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white font-['Poppins',sans-serif] drop-shadow-2xl">
              About us
            </h1>
            <div className="flex items-center justify-center gap-2 text-white/90 text-sm font-['Inter',sans-serif]">
              <Link to="/" className="hover:text-white transition-colors">HOME</Link>
              <span>/</span>
              <span>ABOUT US</span>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <RevealOnScroll>
            <div className="text-center mb-8">
              <p className="text-[#DC143C] font-['Georgia',serif] italic text-lg mb-2">
                Welcome to Sai Krishna Plastic Industries
              </p>
              <h2 className="text-4xl font-bold text-gray-900 font-['Poppins',sans-serif]">
                About Sai Krishna Plastic Industries
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-12">
            {/* Left: Images */}
            <RevealOnScroll delay={200}>
              <div className="grid grid-cols-2 gap-4">
                <img src={heroImage} alt="Factory exterior" className="rounded-2xl shadow-lg w-full aspect-square object-cover" />
                <img src={heroImage} alt="Factory interior" className="rounded-2xl shadow-lg w-full aspect-square object-cover" />
                <img src={heroImage} alt="Showroom" className="rounded-2xl shadow-lg w-full aspect-square object-cover col-span-2" />
              </div>
            </RevealOnScroll>

            {/* Right: Content */}
            <RevealOnScroll delay={400}>
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Sai Krishna Plastic Industries, situated in Hyderabad, Telangana, has been a trailblazer in the poultry equipment industry since its inception in 2002.
                </p>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-['Poppins',sans-serif]">Leadership</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Under the expert guidance of Managing Partners, Mr. Srikanth M and Naveen Kumar, the company has thrived. With a combined experience of 20+ years, they bring unparalleled industry expertise.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-['Poppins',sans-serif]">Infrastructure & Capabilities</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The company boasts - State-of-the-art infrastructure spanning a vast area - Advanced Plastic Injection Molding Machines - Ample storage facilities - Strategic location in Hyderabad.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-['Poppins',sans-serif]">Market Presence</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Sai Krishna Plastic Industries has established - Extensive dealer network across India - Strong international presence.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-['Poppins',sans-serif]">Key Strengths</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#DC143C] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">25+ years of industry expertise</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#DC143C] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Cutting-edge technology</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#DC143C] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Pan-India distribution network</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#DC143C] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Global export capabilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#DC143C] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Timely delivery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#DC143C] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Customer satisfaction</span>
                    </li>
                  </ul>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Stats */}
          <RevealOnScroll delay={600}>
            <div className="grid grid-cols-2 gap-8 mt-16 max-w-2xl mx-auto">
              <Card className="text-center border-2 border-[#DC143C]">
                <CardContent className="p-8">
                  <div className="text-5xl font-bold text-[#DC143C] mb-2 font-['Poppins',sans-serif]">30</div>
                  <div className="text-sm text-gray-600 font-semibold">Years of<br/>EXPERIENCE</div>
                </CardContent>
              </Card>
              <Card className="text-center border-2 border-[#DC143C]">
                <CardContent className="p-8">
                  <div className="text-5xl font-bold text-[#DC143C] mb-2 font-['Poppins',sans-serif]">50</div>
                  <div className="text-sm text-gray-600 font-semibold">Number of<br/>PRODUCTS</div>
                </CardContent>
              </Card>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={800}>
            <div className="text-center mt-12">
              <Button className="bg-[#DC143C] hover:bg-[#B01030] text-white px-8 py-6 rounded-lg font-['Poppins',sans-serif] font-semibold">
                READ MORE
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <p className="text-[#DC143C] font-['Georgia',serif] italic text-lg mb-2">Founders</p>
              <h2 className="text-4xl font-bold text-gray-900 font-['Poppins',sans-serif]">Founders</h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {founders.map((founder, index) => (
              <RevealOnScroll key={index} delay={index * 200}>
                <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    {/* Avatar Placeholder */}
                    <div className="w-32 h-32 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Users className="w-16 h-16 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4 font-['Poppins',sans-serif]">
                      {founder.name}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                      {founder.description}
                    </p>

                    {/* Social Icons */}
                    <div className="flex justify-center gap-3">
                      <a href={founder.social.facebook} className="w-10 h-10 bg-[#DC143C] rounded-full flex items-center justify-center hover:bg-[#B01030] transition-colors">
                        <Facebook className="w-5 h-5 text-white" />
                      </a>
                      <a href={founder.social.twitter} className="w-10 h-10 bg-[#DC143C] rounded-full flex items-center justify-center hover:bg-[#B01030] transition-colors">
                        <Twitter className="w-5 h-5 text-white" />
                      </a>
                      <a href={founder.social.linkedin} className="w-10 h-10 bg-[#DC143C] rounded-full flex items-center justify-center hover:bg-[#B01030] transition-colors">
                        <Linkedin className="w-5 h-5 text-white" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
