export default function CallToAction() {
  return (
    <section id="get-started" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/10 to-[#a855f7]/10 opacity-60"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 fade-in">Ready to Transform Your Cloud Experience?</h2>
          <p className="text-gray-300 text-lg mb-10 fade-in" style={{transitionDelay: '100ms'}}>
            Join thousands of businesses that trust NebulaCloud for their mission-critical infrastructure.
          </p>
          
          <div className="bg-[#0f172a]/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 max-w-3xl mx-auto fade-in" style={{transitionDelay: '200ms'}}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">30 Days</div>
                <p className="text-gray-400">Free Trial</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">$300</div>
                <p className="text-gray-400">Credit for New Users</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">No Lock-in</div>
                <p className="text-gray-400">Pay-as-you-go</p>
              </div>
            </div>
            
            <a href="#" className="inline-block bg-gradient-to-r from-[#00f0ff] to-[#a855f7] px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-[#00f0ff]/30 transition-all animate-pulse-glow">
              Start Your Free Trial
            </a>
            <p className="text-gray-500 mt-4 text-sm">No credit card required to start</p>
          </div>
        </div>
      </div>
    </section>
  );
}
