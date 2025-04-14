export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[#00f0ff]/5 to-[#a855f7]/5 opacity-60"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 fade-in">About Innowise Solutions</h2>
              <p className="text-gray-300 mb-6 fade-in" style={{transitionDelay: '100ms'}}>
                Founded in 2018, Innowise Solutions has been at the forefront of technology innovation, providing cutting-edge solutions to businesses worldwide. Our mission is to empower organizations of all sizes with scalable, secure, and innovative technology solutions.
              </p>
              <p className="text-gray-300 mb-6 fade-in" style={{transitionDelay: '200ms'}}>
                With a team of over 200 technology experts and engineers, we're dedicated to helping our clients navigate the complexities of digital transformation and unlock new opportunities through innovative solutions.
              </p>
              
              <div className="grid grid-cols-2 gap-6 fade-in" style={{transitionDelay: '300ms'}}>
                <div className="bg-[#111827] rounded-lg p-4 border border-gray-800">
                  <div className="text-3xl font-bold mb-2 text-[#00f0ff]">200+</div>
                  <div className="text-gray-400">Technology Experts</div>
                </div>
                <div className="bg-[#111827] rounded-lg p-4 border border-gray-800">
                  <div className="text-3xl font-bold mb-2 text-[#a855f7]">15+</div>
                  <div className="text-gray-400">Countries</div>
                </div>
                <div className="bg-[#111827] rounded-lg p-4 border border-gray-800">
                  <div className="text-3xl font-bold mb-2 text-[#00f0ff]">98%</div>
                  <div className="text-gray-400">Customer Satisfaction</div>
                </div>
                <div className="bg-[#111827] rounded-lg p-4 border border-gray-800">
                  <div className="text-3xl font-bold mb-2 text-[#a855f7]">24/7</div>
                  <div className="text-gray-400">Support Available</div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 fade-in" style={{transitionDelay: '400ms'}}>
              <div className="relative">
                {/* Abstract graphic element */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#00f0ff]/20 to-[#a855f7]/20 rounded-2xl blur-xl opacity-70"></div>
                
                <div className="relative bg-[#111827] rounded-xl p-8 border border-gray-800">
                  <div className="text-center mb-8">
                    <div className="inline-block bg-[#00f0ff]/10 rounded-full p-6 mb-4">
                      <i className="fas fa-rocket text-[#00f0ff] text-4xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
                    <p className="text-gray-400">
                      To be the leading technology solutions provider that enables businesses to innovate fearlessly in a digital-first world.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-[#00f0ff]">
                        <i className="fas fa-check-circle"></i>
                      </div>
                      <p className="text-gray-300">Enterprise-grade security and compliance</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="text-[#a855f7]">
                        <i className="fas fa-check-circle"></i>
                      </div>
                      <p className="text-gray-300">Sustainable and eco-friendly technology solutions</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="text-[#00f0ff]">
                        <i className="fas fa-check-circle"></i>
                      </div>
                      <p className="text-gray-300">Transparent pay-as-you-go pricing model</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="text-[#a855f7]">
                        <i className="fas fa-check-circle"></i>
                      </div>
                      <p className="text-gray-300">Continuous innovation and platform evolution</p>
                    </div>
                  </div>
                  
                  <div className="mt-8 text-center">
                    <a href="#contact" className="inline-flex items-center text-[#00f0ff] hover:underline" onClick={(e) => {
                      e.preventDefault();
                      const contact = document.getElementById('contact');
                      if (contact) {
                        window.scrollTo({
                          top: contact.offsetTop - 80,
                          behavior: 'smooth'
                        });
                      }
                    }}>
                      Learn more about our journey <i className="fas fa-arrow-right ml-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}