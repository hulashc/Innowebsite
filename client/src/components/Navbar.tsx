import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import logo from "@/assets/logo.png";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once on load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSectionClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    
    // Check if we're currently on the home page
    if (location === '/') {
      // We're on home page, just scroll to the section
      setTimeout(() => {
        if (sectionId === 'top') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }, 100);
    } else {
      // We're on a different page, navigate to home with scroll parameter
      setLocation(`/?scroll=${sectionId}`);
    }
  };

  return (
    <header id="navbar" className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0f172a]/80 nav-blur shadow-lg' : ''
    }`}>
      <nav className="py-4 px-4 md:px-8 mx-auto max-w-7xl">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => handleSectionClick('top')}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <img src={logo} alt="Logo" className="h-10 w-10" />
            <span className="text-2xl font-bold">Innowise<span className="text-[#00f0ff]">Solutions</span></span>
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-100"
            onClick={toggleMobileMenu}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/services" 
              className="text-gray-300 hover:text-[#00f0ff] transition-colors"
            >
              Services
            </Link>
            <button 
              onClick={() => handleSectionClick('about')}
              className="text-gray-300 hover:text-[#00f0ff] transition-colors"
            >
              About Us
            </button>
            <button 
              onClick={() => handleSectionClick('contact')}
              className="text-gray-300 hover:text-[#00f0ff] transition-colors"
            >
              Contact Us
            </button>
            <button 
              onClick={() => handleSectionClick('get-started')}
              className="bg-gradient-to-r from-[#00f0ff] to-[#a855f7] px-5 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-[#00f0ff]/30 transition-all animate-pulse-glow"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} mt-4 rounded-lg bg-[#0f172a]/80 nav-blur p-4`}>
          <div className="flex flex-col space-y-4">
            <Link 
              href="/services" 
              className="text-gray-300 hover:text-[#00f0ff] transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <button 
              onClick={() => handleSectionClick('about')}
              className="text-gray-300 hover:text-[#00f0ff] transition-colors py-2 text-left"
            >
              About Us
            </button>
            <button 
              onClick={() => handleSectionClick('contact')}
              className="text-gray-300 hover:text-[#00f0ff] transition-colors py-2 text-left"
            >
              Contact Us
            </button>
            <button 
              onClick={() => handleSectionClick('get-started')}
              className="bg-gradient-to-r from-[#00f0ff] to-[#a855f7] px-5 py-2 rounded-full font-semibold text-center hover:shadow-lg hover:shadow-[#00f0ff]/30 transition-all"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}