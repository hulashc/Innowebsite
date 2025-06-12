import { Link } from 'wouter';

export default function Footer() {
  const footerLinks = {
    services: [
      { name: "Cloud Infrastructure", href: "/services" },
      { name: "Managed Databases", href: "/services" },
      { name: "Security & Compliance", href: "/services" },
      { name: "DevOps Acceleration", href: "/services" },
      { name: "Analytics & AI", href: "/services" }
    ],
    company: [
      { name: "About Us", href: "/#about" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Press", href: "#" },
      { name: "Partners", href: "#" }
    ],
    resources: [
      { name: "Documentation", href: "#" },
      { name: "API Reference", href: "#" },
      { name: "Status Page", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Contact Support", href: "/#contact" }
    ]
  };

  const socialLinks = [
    { icon: "fab fa-twitter", href: "#" },
    { icon: "fab fa-linkedin", href: "https://uk.linkedin.com/company/innowise-solutions-ltd" },
    { icon: "fab fa-facebook", href: "#" },
    { icon: "fab fa-github", href: "#" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Cookie Policy", href: "#" }
  ];

  return (
    <footer className="bg-[#0f172a] py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <i className="fas fa-lightbulb text-[#00f0ff] text-2xl"></i>
              <span className="text-xl font-bold">Innowise<span className="text-[#00f0ff]">Solutions</span></span>
            </Link>
            <p className="text-gray-400 mb-6">
              Innovative cloud solutions for businesses of all sizes. Secure, scalable, and cost-effective.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} className="text-gray-400 hover:text-[#00f0ff] transition-colors">
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-[#00f0ff] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-gray-400">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-[#00f0ff] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3 text-gray-400">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-[#00f0ff] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Innowise Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            {legalLinks.map((link, index) => (
              link.href.startsWith("/") ? (
                <Link key={index} href={link.href} className="hover:text-gray-300 transition-colors">
                  {link.name}
                </Link>
              ) : (
                <a key={index} href={link.href} className="hover:text-gray-300 transition-colors">
                  {link.name}
                </a>
              )
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
