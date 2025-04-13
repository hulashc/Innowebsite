const features = [
  {
    icon: "fas fa-bolt",
    title: "Lightning-Fast Performance",
    description: "Globally distributed data centers ensure low-latency access for your users wherever they are.",
    color: "bg-[#00f0ff]/10 text-[#00f0ff]",
    delay: "200ms"
  },
  {
    icon: "fas fa-lock",
    title: "Enterprise-Grade Security",
    description: "Advanced security protocols with continuous monitoring and threat detection systems.",
    color: "bg-[#a855f7]/10 text-[#a855f7]",
    delay: "300ms"
  },
  {
    icon: "fas fa-arrows-alt-v",
    title: "Infinite Scalability",
    description: "Seamlessly scale your resources up or down based on demand without service interruptions.",
    color: "bg-[#00f0ff]/10 text-[#00f0ff]",
    delay: "400ms"
  },
  {
    icon: "fas fa-coins",
    title: "Cost-Efficient Solutions",
    description: "Pay only for what you use with transparent pricing and no hidden costs or long-term commitments.",
    color: "bg-[#a855f7]/10 text-[#a855f7]",
    delay: "500ms"
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 fade-in">Why Choose NebulaCloud?</h2>
              <p className="text-gray-300 mb-8 fade-in" style={{transitionDelay: '100ms'}}>
                Our cloud platform is built with a focus on performance, security, and scalability to help you innovate faster and stay ahead.
              </p>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 fade-in" style={{transitionDelay: feature.delay}}>
                    <div className={`${feature.color} rounded-full p-3`}>
                      <i className={`${feature.icon} text-xl`}></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative fade-in" style={{transitionDelay: '600ms'}}>
              <div className="aspect-square max-w-lg mx-auto relative">
                {/* Abstract graphic element representing cloud technology */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/20 to-[#a855f7]/20 rounded-full blur-2xl opacity-70"></div>
                
                <div className="absolute w-full h-full flex items-center justify-center">
                  <div className="relative w-4/5 h-4/5">
                    {/* Central cloud icon */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#00f0ff] text-7xl">
                      <i className="fas fa-cloud"></i>
                    </div>
                    
                    {/* Orbiting elements */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#a855f7]/80 p-3 rounded-full animate-float">
                      <i className="fas fa-server text-white"></i>
                    </div>
                    
                    <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 bg-[#00f0ff]/80 p-3 rounded-full animate-float-slow">
                      <i className="fas fa-database text-white"></i>
                    </div>
                    
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-[#a855f7]/80 p-3 rounded-full animate-float">
                      <i className="fas fa-shield-alt text-white"></i>
                    </div>
                    
                    <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-[#00f0ff]/80 p-3 rounded-full animate-float-slow">
                      <i className="fas fa-code-branch text-white"></i>
                    </div>
                    
                    {/* Connecting lines (pulse effect) */}
                    <div className="absolute inset-0 rounded-full border-4 border-[#00f0ff]/20 animate-pulse"></div>
                    <div className="absolute inset-8 rounded-full border-4 border-[#a855f7]/20 animate-pulse" style={{animationDelay: '1s'}}></div>
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
