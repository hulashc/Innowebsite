import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { Link } from 'wouter';

export default function TermsOfService() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Fade-in animation
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const fadeInObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          fadeInObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    fadeElements.forEach(element => {
      fadeInObserver.observe(element);
    });

    return () => {
      fadeElements.forEach(element => {
        fadeInObserver.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 fade-in">Terms of Service</h1>
            
            <div className="space-y-8 text-gray-300">
              <section className="fade-in" style={{transitionDelay: '100ms'}}>
                <h2 className="text-2xl font-semibold mb-4 text-white">1. Introduction</h2>
                <p className="mb-4">
                  Welcome to Innowise Solutions ("Company", "we", "our", "us")! These Terms of Service ("Terms", "Terms of Service") govern your use of our website and services operated by Innowise Solutions.
                </p>
                <p>
                  Our Privacy Policy also governs your use of our service and explains how we collect, safeguard and disclose information that results from your use of our web pages. Please read it here.
                </p>
              </section>
              
              <section className="fade-in" style={{transitionDelay: '200ms'}}>
                <h2 className="text-2xl font-semibold mb-4 text-white">2. Agreements</h2>
                <p className="mb-4">
                  By accessing or using the service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the service.
                </p>
                <p>
                  You represent that you are over the age of 18. The Company does not permit those under 18 to use the service.
                </p>
              </section>
              
              <section className="fade-in" style={{transitionDelay: '300ms'}}>
                <h2 className="text-2xl font-semibold mb-4 text-white">3. Service Usage</h2>
                <p className="mb-4">
                  Our service allows you to access, deploy, and manage cloud infrastructure resources. You are responsible for maintaining the security of your account and password.
                </p>
                <p>
                  The Company cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.
                </p>
              </section>
              
              <section className="fade-in" style={{transitionDelay: '400ms'}}>
                <h2 className="text-2xl font-semibold mb-4 text-white">4. Intellectual Property</h2>
                <p className="mb-4">
                  The service and its original content (excluding content provided by users), features, and functionality are and will remain the exclusive property of Innowise Solutions and its licensors.
                </p>
                <p>
                  The service is protected by copyright, trademark, and other laws of both the country and foreign countries.
                </p>
              </section>
              
              <section className="fade-in" style={{transitionDelay: '500ms'}}>
                <h2 className="text-2xl font-semibold mb-4 text-white">5. Termination</h2>
                <p className="mb-4">
                  We may terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                </p>
                <p>
                  All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                </p>
              </section>
              
              <section className="fade-in" style={{transitionDelay: '600ms'}}>
                <h2 className="text-2xl font-semibold mb-4 text-white">6. Changes</h2>
                <p className="mb-4">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
                </p>
                <p>
                  What constitutes a material change will be determined at our sole discretion.
                </p>
              </section>
              
              <section className="fade-in" style={{transitionDelay: '700ms'}}>
                <h2 className="text-2xl font-semibold mb-4 text-white">7. Contact Us</h2>
                <p className="mb-4">
                  If you have any questions about these Terms, please contact us at:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>By email: legal@innowisesolutions.example</li>
                  <li>By phone: +1 (555) 123-4567</li>
                </ul>
              </section>
            </div>
            
            <div className="mt-12 flex justify-center fade-in" style={{transitionDelay: '800ms'}}>
              <Link href="/">
                <Button variant="outline" className="border-[#00f0ff] text-[#00f0ff] hover:bg-[#00f0ff]/10">
                  <i className="fas fa-arrow-left mr-2"></i> Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}