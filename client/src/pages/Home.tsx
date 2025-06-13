import { useEffect } from 'react';
import { useLocation } from 'wouter';

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import FeaturesSection from '@/components/FeaturesSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

export default function Home() {
  const [location] = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sectionId = params.get('scroll');

    setTimeout(() => {
      if (sectionId === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (sectionId) {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }, 100);
  }, [location]);

  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in');
    const fadeInObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          fadeInObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    fadeElements.forEach(element => fadeInObserver.observe(element));

    return () => {
      fadeElements.forEach(element => fadeInObserver.unobserve(element));
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <FeaturesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
