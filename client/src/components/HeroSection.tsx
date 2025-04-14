import { Link } from 'wouter';

export default function HeroSection() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-[#00f0ff]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-[#a855f7]/10 rounded-full blur-3xl"></div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full bg-[#00f0ff] animate-float"></div>
      <div className="absolute bottom-1/3 left-1/3 w-6 h-6 rounded-full bg-[#a855f7] opacity-70 animate-float-slow"></div>
      <div className="absolute top-1/3 left-1/4 w-3 h-3 rounded-full bg-[#00f0ff]/50 animate-float"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 fade-in">
            Driving Your <span className="gradient-text">Digital Transformation</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 fade-in" style={{transitionDelay: '200ms'}}>
            Innovative technology solutions that empower businesses to succeed in the digital era
          </p>
          <div className="flex justify-center fade-in" style={{transitionDelay: '400ms'}}>
            <a 
              href="#services" 
              className="border border-[#00f0ff] text-[#00f0ff] px-8 py-3 rounded-full font-semibold hover:bg-[#00f0ff]/10 transition-all"
              onClick={(e) => scrollToSection(e, 'services')}
            >
              Explore Services
            </a>
          </div>
        </div>
        
        {/* Hero stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto fade-in" style={{transitionDelay: '600ms'}}>
          <div className="bg-[#0f172a]/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-800">
            <div className="text-3xl font-bold mb-2 text-[#00f0ff]">99.9%</div>
            <div className="text-gray-400">Uptime Guarantee</div>
          </div>
          <div className="bg-[#0f172a]/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-800">
            <div className="text-3xl font-bold mb-2 text-[#a855f7]">24/7</div>
            <div className="text-gray-400">Expert Support</div>
          </div>
          <div className="bg-[#0f172a]/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-800">
            <div className="text-3xl font-bold mb-2 gradient-text">500+</div>
            <div className="text-gray-400">Enterprise Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
}
