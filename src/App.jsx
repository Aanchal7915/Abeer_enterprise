import React, { useState, useEffect } from 'react';
import { Phone, MapPin, MessageCircle, Star, Award, Truck, Shield, Package, Calculator, Info, ArrowRight, CheckCircle, Zap, Globe, Users, TrendingUp } from 'lucide-react';
import Logo from './components/Logo';

function App() {
  const [selectedMicron, setSelectedMicron] = useState('36');
  const [isLoading, setIsLoading] = useState(true);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);


  const showToast = (message = 'Opening phone dialer...') => {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const products = [
    {
      id: 1,
      image: '/IMG-20250621-WA0067-removebg-preview.png',
      title: 'Premium Packaging Tapes',
      description: 'High-quality adhesive tapes for secure packaging and shipping needs.'
    },
    {
      id: 2,
      image: '/IMG-20250621-WA0066-removebg-preview.png',
      title: 'Industrial Grade Tapes',
      description: 'Heavy-duty tapes designed for industrial applications and demanding environments.'
    },
    {
      id: 3,
      image: '/IMG-20250621-WA0064-removebg-preview.png',
      title: 'Specialty Adhesive Solutions',
      description: 'Custom adhesive solutions tailored to your specific requirements.'
    },
    {
      id: 4,
      image: '/IMG-20250621-WA0065-removebg-preview.png',
      title: 'Custom Branded Tapes',
      description: 'Personalized tapes with your company name and branding for professional packaging.'
    },
    {
      id: 5,
      image: '/1-removebg-preview.png',
      title: 'Tissue Tape',
      description: 'Lightweight and flexible tissue tapes perfect for delicate packaging and temporary applications.'
    },
    {
      id: 6,
      image: '/2-removebg-preview.png',
      title: 'Masking Tape',
      description: 'Professional masking tapes for painting, crafting, and precision applications with clean removal.'
    },
    {
      id: 7,
      image: '/3-removebg-preview.png',
      title: 'Jumbo Tape',
      description: 'Extra-wide jumbo tapes for heavy-duty packaging and industrial applications requiring maximum coverage.'
    },
    {
      id: 8,
      image: '/4-removebg-preview.png',
      title: '0.5" White Tape',
      description: 'Narrow white adhesive tape ideal for labeling, sealing small packages, and detailed applications.'
    },
    {
      id: 9,
      image: '/5-removebg-preview.png',
      title: '1" White Tape',
      description: 'Standard width white tape perfect for general packaging, sealing, and professional applications.'
    },
    {
      id: 10,
      image: '/7.png',
      title: 'Colour Tape',
      description: 'Vibrant colored tapes available in multiple colors for coding, organization, and decorative purposes.'
    },
    {
      id: 11,
      image: '/8-removebg-preview.png',
      title: 'Printed Tapes',
      description: 'Custom printed tapes with your company logo, text, or designs for professional branding and identification.'
    },
    {
      id: 12,
      image: '/9-removebg-preview.png',
      title: '3" Brown Tape',
      description: 'Extra-wide brown packaging tape for heavy-duty sealing and industrial packaging applications.'
    }
  ];

  const pricingData = {
    '36': {
      micron: '36 MICRON',
      color: 'bg-yellow-500',
      prices: {
        '1"': { qty: 144 },
        '1.5"': { qty: 96 },
        '2"': { qty: 72 },
        '2.5"': { qty: 60 },
        '3"': { qty: 48 }
      }
    },
    '38': {
      micron: '38 MICRON',
      color: 'bg-blue-500',
      prices: {
        '1"': { qty: 144 },
        '1.5"': { qty: 96 },
        '2"': { qty: 72 },
        '2.5"': { qty: 60 },
        '3"': { qty: 48 }
      }
    },
    '40': {
      micron: '40 MICRON',
      color: 'bg-cyan-500',
      prices: {
        '1"': { qty: 144 },
        '1.5"': { qty: 96 },
        '2"': { qty: 72 },
        '2.5"': { qty: 60 },
        '3"': { qty: 48 }
      }
    },
    '42': {
      micron: '42 MICRON',
      color: 'bg-green-500',
      prices: {
        '1"': { qty: 144 },
        '1.5"': { qty: 96 },
        '2"': { qty: 72 },
        '2.5"': { qty: 60 },
        '3"': { qty: 48 }
      }
    },
    '44': {
      micron: '44 MICRON',
      color: 'bg-indigo-500',
      prices: {
        '1"': { qty: 144 },
        '1.5"': { qty: 96 },
        '2"': { qty: 72 },
        '2.5"': { qty: 60 },
        '3"': { qty: 48 }
      }
    }
  };

  const features = [
    {
      icon: <Award className="w-10 h-10 text-blue-600" />,
      title: 'Premium Quality',
      description: 'Superior adhesive strength and durability with industry-leading standards',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Truck className="w-10 h-10 text-green-600" />,
      title: 'Fast Delivery',
      description: 'Quick turnaround times for all orders with nationwide shipping',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Shield className="w-10 h-10 text-purple-600" />,
      title: 'Reliable Service',
      description: 'Trusted by businesses across the region with 99% satisfaction rate',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Zap className="w-10 h-10 text-yellow-600" />,
      title: 'Custom Solutions',
      description: 'Tailored tape solutions for your specific business requirements',
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Customers', icon: <Users className="w-6 h-6" /> },
    { number: '10K+', label: 'Products Delivered', icon: <Package className="w-6 h-6" /> },
    { number: '15+', label: 'Years Experience', icon: <TrendingUp className="w-6 h-6" /> },
    { number: '24/7', label: 'Customer Support', icon: <Globe className="w-6 h-6" /> }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919306617201', '_blank');
    showToast('Redirecting to WhatsApp...');
  };

  const handleCallClick = (number) => {
    window.open(`tel:${number}`, '_self');
    showToast('Opening phone dialer...');
  };

  const handlePriceInquiry = (micron, size) => {
    const message = `Hi! I'm interested in ${micron} MICRON tape, size ${size}. Could you please provide pricing details and more information?`;
    window.open(`https://wa.me/919306617201?text=${encodeURIComponent(message)}`, '_blank');
    showToast('Redirecting to WhatsApp...');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-6"></div>
            <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-r-blue-300 rounded-full animate-spin mx-auto" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Abeer Enterprises</h2>
          <p className="text-blue-200">Loading premium tape solutions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Notification Toast */}
      {showNotification && (
        <div className="fixed top-4 right-4 z-50 animate-slide-in-right">
          <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-xl flex items-center space-x-2">
            <CheckCircle className="w-5 h-5" />
            <span>{notificationMessage}</span>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-xl sticky top-0 z-40 border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4 group">
              <div className="transform group-hover:scale-110 transition-transform duration-300">
                <Logo />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Abeer Enterprises
                </h1>
                <p className="text-sm text-gray-600 font-medium">Manufacture & Supplier of all kinds of Tapes</p>
              </div>
            </div>
            
            {/* Navigation Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('products')}
                className="text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 transform hover:scale-105 relative group"
              >
                Products
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 transform hover:scale-105 relative group"
              >
                Pricing
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 transform hover:scale-105 relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </nav>
            
            <div className="flex items-center space-x-3">
              <button
                onClick={handleWhatsAppClick}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-xl flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
              >
                <MessageCircle className="w-5 h-5 group-hover:animate-bounce" />
                <span className="hidden sm:inline font-semibold">WhatsApp</span>
              </button>
              
              <button
                onClick={() => handleCallClick('9306617201')}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
              >
                <Phone className="w-5 h-5 group-hover:animate-pulse" />
                <span className="hidden sm:inline font-semibold">Call Now</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Hero Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/background_images.jpg')`
          }}
        ></div>
        {/* Overlay for content visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-indigo-900/80 to-purple-900/80"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-300/20 rounded-full blur-2xl animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-indigo-300/30 rounded-full blur-lg animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              Premium <span className="animate-text-shimmer drop-shadow-lg">Tape Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-12 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-lg">
              We manufacture customized tapes according to your company name and requirements. 
              Quality, reliability, and customer satisfaction are our top priorities.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <button
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-5 rounded-2xl flex items-center space-x-3 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-500/25 group text-lg font-semibold animate-pulse-glow relative overflow-hidden"
            >
              <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <MessageCircle className="w-6 h-6 group-hover:animate-bounce relative z-10" />
              <span className="relative z-10">Get Quote on WhatsApp</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            </button>
            
            <button
              onClick={() => handleCallClick('9306617201')}
              className="bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 text-white px-10 py-5 rounded-2xl flex items-center space-x-3 transition-all duration-300 transform hover:scale-105 shadow-2xl group text-lg font-semibold animate-glow relative overflow-hidden"
            >
              <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Phone className="w-6 h-6 group-hover:animate-pulse relative z-10" />
              <span className="relative z-10">Call for Orders</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 relative overflow-hidden">
                  <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex justify-center mb-4">
                      <div className="bg-gradient-to-r from-blue-400 to-indigo-500 p-3 rounded-full group-hover:animate-pulse animate-glow">
                        {stat.icon}
                      </div>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:animate-text-shimmer">{stat.number}</h3>
                    <p className="text-blue-200 font-medium group-hover:text-white transition-colors duration-300">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



       {/* Products Section */}
       <section id="products" className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-20 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-60 h-60 bg-indigo-200/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6 p-3">
              Our Product Range
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of high-quality tapes designed to meet all your packaging and industrial needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={product.id} className="group animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 hover:border-gray-200 relative">
                  <div className="aspect-square overflow-hidden relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Premium
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {product.title}
                    </h4>
                    <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors">
                      {product.description}
                    </p>
                    <button
                      onClick={handleWhatsAppClick}
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 group/btn"
                    >
                      <span className="flex items-center justify-center space-x-2">
                        <MessageCircle className="w-5 h-5 group-hover/btn:animate-bounce" />
                        <span>Inquire on WhatsApp</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      
      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-60 h-60 bg-indigo-200/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6 p-3">
              Our Pricing
            </h3>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Competitive rates for all tape specifications with transparent pricing and no hidden costs
            </p>
            
            {/* Micron Selector */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {Object.keys(pricingData).map((micron) => (
                <button
                  key={micron}
                  onClick={() => setSelectedMicron(micron)}
                  className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                    selectedMicron === micron
                      ? `${pricingData[micron].color} text-white shadow-2xl scale-105`
                      : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {pricingData[micron].micron}
                </button>
              ))}
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {Object.entries(pricingData[selectedMicron].prices).map(([size, data]) => (
              <div key={size} className="group">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 hover:border-gray-200">
                  <div className={`${pricingData[selectedMicron].color} text-white p-6 text-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative">
                      <div className="bg-white/20 p-3 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Package className="w-10 h-10 mx-auto" />
                      </div>
                      <h4 className="text-2xl font-bold mb-2">{size}</h4>
                      <p className="text-sm opacity-90 font-medium">Tape Size</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-xl">
                        <span className="text-sm font-medium text-gray-600">Qty in Box:</span>
                        <span className="font-bold text-lg text-gray-900">{data.qty}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      {[
                        { length: '65 MTR', color: 'from-blue-500 to-blue-600' },
                        { length: '90 MTR', color: 'from-green-500 to-green-600' },
                        { length: '100 MTR', color: 'from-purple-500 to-purple-600' },
                        { length: '150 MTR', color: 'from-orange-500 to-orange-600' }
                      ].map((item, index) => (
                        <div key={index} className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                          <span className="text-sm font-medium text-gray-700">{item.length}:</span>
                          <button
                            onClick={() => handlePriceInquiry(pricingData[selectedMicron].micron, `${size} - ${item.length}`)}
                            className={`bg-gradient-to-r ${item.color} hover:shadow-lg text-white px-4 py-2 rounded-lg text-xs font-bold transition-all duration-300 transform hover:scale-105`}
                          >
                            Get Quote
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Terms & Conditions */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-xl">
                <Info className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Terms & Conditions</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-sm text-gray-600 space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Rates are ex-works</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Tape size 2.5" will be 5% extra cost</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Take extra as applicable GST 18% & HSN CODE: 3919</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Minimum order QTY will be 10 Boxes</span>
                    </li>
                  </ul>
                  <ul className="text-sm text-gray-600 space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Delivery will be 50% on order 50% upon delivery</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Printing/colour charges will be extra: single 20% double 25% triple 35%</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Brown, milky & transparent are same rate</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Cylinder/Die charges will be extra for single cr 4000/3000</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      
      {/* Custom Tape Highlight */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed"
          style={{
            backgroundImage: `url('/bg-images.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        {/* Enhanced Overlay for better content visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-indigo-900/85 to-purple-900/90"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
        
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-300/20 rounded-full blur-3xl animate-bounce" style={{animationDuration: '4s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-300/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h3 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight" style={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)',
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.6))'
            }}>
              Customized Tapes According to Your Company Name
            </h3>
            <p className="text-xl md:text-2xl text-white mb-12 max-w-4xl mx-auto leading-relaxed font-light" style={{
              textShadow: '1px 1px 3px rgba(0,0,0,0.7), 0 0 15px rgba(0,0,0,0.4)',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))'
            }}>
              Stand out with personalized packaging tapes featuring your company branding. 
              Perfect for professional packaging and brand recognition.
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-6 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/25 group relative overflow-hidden"
              style={{
                boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 20px rgba(255,255,255,0.2)',
                border: '2px solid rgba(255,255,255,0.3)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="flex items-center space-x-3 relative z-10">
                <span>Order Custom Tapes Now</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </section>



      {/* Features Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6 p-3">
              Why Choose Abeer Enterprises?
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver excellence in every product and service, ensuring your business needs are met with the highest standards.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 hover:border-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="flex justify-center mb-6">
                      <div className={`bg-gradient-to-r ${feature.color} p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {feature.icon}
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


     
      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-indigo-200/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
              Get in Touch
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to discuss your tape requirements? We're here to help you find the perfect solution.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-10">
              <div className="group">
                <div className="flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">Our Location</h4>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Shiv Colony Gali No. 07<br />
                      Devru Road, Near Nasha Mukti Kendra<br />
                      Sonipat 131001, Haryana
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">Contact Numbers</h4>
                    <div className="space-y-3">
                      <button
                        onClick={() => handleCallClick('8168302121')}
                        className="block text-blue-600 hover:text-blue-800 font-bold text-lg transition-colors hover:underline"
                      >
                        +91 81683 02121
                      </button>
                      <button
                        onClick={() => handleCallClick('9306617201')}
                        className="block text-blue-600 hover:text-blue-800 font-bold text-lg transition-colors hover:underline"
                      >
                        +91 93066 17201
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 p-10 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-300/20 rounded-full blur-2xl"></div>
              
              <div className="relative">
                <h4 className="text-3xl font-bold text-white mb-6">Ready to Order?</h4>
                <p className="text-blue-100 mb-8 text-lg leading-relaxed">
                  Contact us today for premium quality tapes and customized solutions for your business needs.
                </p>
                <div className="space-y-4">
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full bg-white text-blue-600 hover:bg-gray-100 py-5 rounded-2xl flex items-center justify-center space-x-3 transition-all duration-300 transform hover:scale-105 shadow-xl group font-bold text-lg"
                  >
                    <MessageCircle className="w-6 h-6 group-hover:animate-bounce" />
                    <span>Chat on WhatsApp</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <button
                    onClick={() => handleCallClick('9306617201')}
                    className="w-full bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 text-white py-5 rounded-2xl flex items-center justify-center space-x-3 transition-all duration-300 transform hover:scale-105 shadow-xl group font-bold text-lg"
                  >
                    <Phone className="w-6 h-6 group-hover:animate-pulse" />
                    <span>Call Now</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/20"></div>
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="transform hover:scale-110 transition-transform duration-300">
                  <Logo isFooter={true} />
                </div>
                <div>
                  <h5 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    Abeer Enterprises
                  </h5>
                  <p className="text-gray-300 text-lg font-medium">Manufacture & Supplier of all kinds of Tapes</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed max-w-md">
                Your trusted partner for high-quality adhesive tapes and customized packaging solutions. 
                Delivering excellence since day one with unmatched quality and service.
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-green-600 hover:bg-green-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg group"
                >
                  <MessageCircle className="w-6 h-6 group-hover:animate-bounce" />
                </button>
                <button
                  onClick={() => handleCallClick('9306617201')}
                  className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg group"
                >
                  <Phone className="w-6 h-6 group-hover:animate-pulse" />
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h6 className="text-xl font-bold text-white mb-6">Quick Links</h6>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection('products')}
                    className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline"
                  >
                    Our Products
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('pricing')}
                    className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline"
                  >
                    Pricing
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline"
                  >
                    Contact Us
                  </button>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline">
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h6 className="text-xl font-bold text-white mb-6">Contact Info</h6>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Shiv Colony Gali No. 07<br />
                      Devru Road, Near Nasha Mukti Kendra<br />
                      Sonipat 131001, Haryana
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <div>
                    <button
                      onClick={() => handleCallClick('9306617201')}
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      +91 93066 17201
                    </button>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <div>
                    <button
                      onClick={() => handleCallClick('8168302121')}
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      +91 81683 02121
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © 2025 Abeer Enterprises. All rights reserved.
              </p>
              <div className="flex items-center space-x-6">
                <span className="text-gray-400 text-sm">Designed with</span>
                <span className="text-red-500 animate-pulse">❤️</span>
                <span className="text-gray-400 text-sm">for our customers</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 z-50 group animate-bounce"
        style={{animationDuration: '3s'}}
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-8 h-8 group-hover:animate-pulse" />
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
          Live
        </div>
      </button>
    </div>
  );
}

export default App;