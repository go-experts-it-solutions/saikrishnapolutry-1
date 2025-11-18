import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, MessageSquare, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-24 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#DC143C]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#DC143C]/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-white font-['Poppins',sans-serif]">
            Get in Touch
          </h1>
          <p className="text-l text-white/90 max-w-2xl mx-auto font-['Inter',sans-serif]">
            Have questions about our poultry equipment? We're here to help you find the perfect solution for your farm.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Form */}
          <AnimatedSection animation="fade-in-left">
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <h2 className="text-3xl font-semibold mb-2 text-gray-900 font-['Poppins',sans-serif]">
                  Send Us a Message
                </h2>
                <p className="text-l text-gray-600 mb-6 font-['Inter',sans-serif]">
                  Fill out the form below and our team will respond within 24 hours
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-l font-semibold text-gray-900 mb-2 font-['Inter',sans-serif]">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="h-12 text-l font-['Inter',sans-serif]"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-l font-semibold text-gray-900 mb-2 font-['Inter',sans-serif]">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="h-12 text-l font-['Inter',sans-serif]"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-l font-semibold text-gray-900 mb-2 font-['Inter',sans-serif]">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="h-12 text-l font-['Inter',sans-serif]"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-l font-semibold text-gray-900 mb-2 font-['Inter',sans-serif]">
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements..."
                      rows={5}
                      className="text-l font-['Inter',sans-serif]"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-[#DC143C] hover:bg-[#B01030] text-white h-14 text-lg font-semibold font-['Poppins',sans-serif] rounded-xl shadow-lg hover:shadow-xl transition-all"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Contact Information */}
          <AnimatedSection animation="fade-in-right">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-semibold mb-3 text-gray-900 font-['Poppins',sans-serif]">
                  Contact Information
                </h2>
                <p className="text-l text-gray-600 font-['Inter',sans-serif]">
                  Reach out to us through any of the following channels. We're here to help with all your poultry equipment needs!
                </p>
              </div>

              {/* Address */}
              <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#DC143C]">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-50 to-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-[#DC143C]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 font-['Poppins',sans-serif]">Visit Us</h3>
                    <p className="text-l text-gray-600 leading-relaxed font-['Inter',sans-serif]">
                      SKPE Poultry Equipments<br />
                      Telangana, India
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Phone */}
              <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#DC143C]">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-50 to-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-7 h-7 text-[#DC143C]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 font-['Poppins',sans-serif]">Call Us</h3>
                    <p className="text-l text-gray-600 leading-relaxed font-['Inter',sans-serif]">
                      Phone: +91 XXXXX XXXXX<br />
                      WhatsApp Available
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#DC143C]">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-50 to-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-7 h-7 text-[#DC143C]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 font-['Poppins',sans-serif]">Email Us</h3>
                    <p className="text-l text-gray-600 leading-relaxed font-['Inter',sans-serif]">
                      General: info@skpepoultry.com<br />
                      Sales: sales@skpepoultry.com
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#DC143C]">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-50 to-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7 text-[#DC143C]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 font-['Poppins',sans-serif]">Business Hours</h3>
                    <p className="text-l text-gray-600 leading-relaxed font-['Inter',sans-serif]">
                      Monday - Saturday: 9:00 AM - 6:00 PM<br />
                      Sunday: By Appointment
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3 text-gray-900 font-['Poppins',sans-serif]">
              Find Us on Map
            </h2>
            <p className="text-l text-gray-600 font-['Inter',sans-serif]">
              Located in Telangana, serving poultry farms across India
            </p>
          </div>
          
          <Card className="overflow-hidden max-w-6xl mx-auto shadow-xl border-0">
            <div className="aspect-[21/9] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#DC143C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-10 h-10 text-[#DC143C]" />
                </div>
                <p className="text-l text-gray-600 font-semibold mb-2 font-['Poppins',sans-serif]">
                  SKPE Poultry Equipments
                </p>
                <p className="text-l text-gray-500 font-['Inter',sans-serif]">
                  Telangana, India
                </p>
                <p className="text-sm text-gray-400 mt-4 font-['Inter',sans-serif]">
                  Google Maps integration available
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#DC143C] to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-white font-['Poppins',sans-serif]">
            Ready to Upgrade Your Farm?
          </h2>
          <p className="text-l text-white/90 mb-8 max-w-2xl mx-auto font-['Inter',sans-serif]">
            Download our complete product catalog or speak with a specialist today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-[#DC143C] hover:bg-gray-100 h-14 px-8 text-lg font-semibold font-['Poppins',sans-serif] rounded-xl shadow-xl"
            >
              Download Catalog
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#DC143C] h-14 px-8 text-lg font-semibold font-['Poppins',sans-serif] rounded-xl"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
