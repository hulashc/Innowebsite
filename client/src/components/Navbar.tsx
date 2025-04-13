import { useState, useEffect } from 'react';
import { Link } from 'wouter';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header id="navbar" className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0f172a]/80 nav-blur shadow-lg' : ''
    }`}>
      <nav className="py-4 px-4 md:px-8 mx-auto max-w-7xl">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <i className="fas fa-cloud text-[#00f0ff] text-2xl"></i>
            <span className="text-xl font-bold">Nebula<span className="text-[#00f0ff]">Cloud</span></span>
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-100"
            onClick={toggleMobileMenu}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a 
              href="#services" 
              className="text-gray-300 hover:text-[#00f0ff] transition-colors"
              onClick={(e) => scrollToSection(e, 'services')}
            >
              Services
            </a>
            <a 
              href="#contact" 
              className="text-gray-300 hover:text-[#00f0ff] transition-colors"
              onClick={(e) => scrollToSection(e, 'contact')}
            >
              Contact Us
            </a>
            <a 
              href="#get-started" 
              className="bg-gradient-to-r from-[#00f0ff] to-[#a855f7] px-5 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-[#00f0ff]/30 transition-all animate-pulse-glow"
              onClick={(e) => scrollToSection(e, 'get-started')}
            >
              Get Started
            </a>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} mt-4 rounded-lg bg-[#0f172a]/80 nav-blur p-4`}>
          <div className="flex flex-col space-y-4">
            <a 
              href="#services" 
              className="text-gray-300 hover:text-[#00f0ff] transition-colors py-2"
              onClick={(e) => scrollToSection(e, 'services')}
            >
              Services
            </a>
            <a 
              href="#contact" 
              className="text-gray-300 hover:text-[#00f0ff] transition-colors py-2"
              onClick={(e) => scrollToSection(e, 'contact')}
            >
              Contact Us
            </a>
            <a 
              href="#get-started" 
              className="bg-gradient-to-r from-[#00f0ff] to-[#a855f7] px-5 py-2 rounded-full font-semibold text-center hover:shadow-lg hover:shadow-[#00f0ff]/30 transition-all"
              onClick={(e) => scrollToSection(e, 'get-started')}
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
