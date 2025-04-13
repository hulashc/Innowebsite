import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { Link } from 'wouter';

export default function PrivacyPolicy() {
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
            <h1 className="text-3xl md:text-4xl font-bold mb-8 fade-in">Privacy Policy</h1>
            
            <div className="space-y-8 text-gray-300">
              <section className="fade-in" style={{transitionDelay: '100ms'}}>
                <h2 className="text-2xl font-semibold mb-4 text-white">1. Introduction</h2>
                <p className="mb-4">
                  At NebulaCloud, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                </p>
                <p>
                  Please read this privacy policy carefully before using our services.
                </p>
              </section>
              
              <section className="fade-in" style={{transitionDelay: '200ms'}}>
                <h2 className="text-2xl font-semibold mb-4 text-white">2. Data We Collect</h2>
                <p className="mb-4">
                  We may collect several different types of information for various purposes to provide and improve our service to you.
                </p>
                <h3 className="text-xl font-medium mb-2 text-gray-100">Personal Data</h3>
                <p className="mb-4">
                  While using our service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). This includes:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Email address</li>
                  <li>First name and last name</li>
                  <li>Phone number</li>
                  <li>Address, State, Province, ZIP/Postal code, City</li>
                  <li>Cookies and Usage Data</li>
                </ul>
              </section>
              
              <section className="fade-in" style={{transitionDelay: '300ms'}}>
                <h2 className="text-2xl font-semibold mb-4 text-white">3. How We Use Your Data</h2>
                <p className="mb-4">
                  NebulaCloud uses the collected data for various purposes:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>To provide and maintain our service</li>
                  <li>To notify you about changes to our service</li>
                  <li>To provide customer support</li>
                  <li>To gather analysis or valuable information so that we can improve our service</li>
                  <li>To monitor the usage of our service</li>
                  <li>To detect, prevent and address technical issues</li>
                  <li>To fulfill any other purpose for which you provide it</li>
                </ul>
              </section>
              
              <section className="fade-in" style={{transitionDelay: '400ms'}}>
                <h2 className="text-2xl font-semibold mb-4 text-white">4. Data Security</h2>
                <p className="mb-4">
                  The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                </p>
                <p>
                  We implement a variety of security measures when a user enters, submits, or accesses their information to maintain the safety of your personal data.
                </p>
              </section>
              
              <section className="fade-in" style={{transitionDelay: '500ms'}}>
                <h2 className="text-2xl font-semibold mb-4 text-white">5. Your Data Protection Rights</h2>
                <p className="mb-4">
                  You have the following data protection rights:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>The right to access, update or delete the information we have on you</li>
                  <li>The right of rectification</li>
                  <li>The right to object</li>
                  <li>The right of restriction</li>
                  <li>The right to data portability</li>
                  <li>The right to withdraw consent</li>
                </ul>
              </section>
              
              <section className="fade-in" style={{transitionDelay: '600ms'}}>
                <h2 className="text-2xl font-semibold mb-4 text-white">6. Changes to This Privacy Policy</h2>
                <p className="mb-4">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                </p>
                <p>
                  You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                </p>
              </section>
              
              <section className="fade-in" style={{transitionDelay: '700ms'}}>
                <h2 className="text-2xl font-semibold mb-4 text-white">7. Contact Us</h2>
                <p className="mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>By email: privacy@nebulacloud.example</li>
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