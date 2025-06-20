import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: "fas fa-server",
    title: "Cloud Infrastructure",
    description: "Flexible, scalable infrastructure solutions with pay-as-you-go pricing to optimize your IT investments.",
    color: "text-[#00f0ff]",
    delay: "200ms"
  },
  {
    icon: "fas fa-shield-alt",
    title: "Security & Compliance",
    description: "Advanced security protocols and compliance frameworks to protect your data and meet industry standards.",
    color: "text-[#a855f7]",
    delay: "300ms"
  },
  {
    icon: "fas fa-database",
    title: "Managed Databases",
    description: "Fully managed database services with automated backups, scaling, and high availability configurations.",
    color: "text-[#00f0ff]",
    delay: "400ms"
  },
  {
    icon: "fas fa-rocket",
    title: "DevOps Acceleration",
    description: "Streamline your development pipeline with integrated CI/CD tools and container orchestration services.",
    color: "text-[#a855f7]",
    delay: "500ms"
  },
  {
    icon: "fas fa-chart-line",
    title: "Analytics & AI",
    description: "Harness the power of your data with advanced analytics, machine learning, and AI-driven insights.",
    color: "text-[#00f0ff]",
    delay: "600ms"
  },
  {
    icon: "fas fa-headset",
    title: "24/7 Expert Support",
    description: "Round-the-clock technical support from certified cloud engineers to resolve issues promptly.",
    color: "text-[#a855f7]",
    delay: "700ms"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-[#0f172a] relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#111827] to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 fade-in">Our Cloud Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto fade-in" style={{transitionDelay: '100ms'}}>
            Comprehensive cloud solutions designed to meet your business needs with security, scalability, and performance
          </p>
          <div className="mt-6 fade-in" style={{transitionDelay: '150ms'}}>
            <Link href="/services">
              <Button className="bg-gradient-to-r from-[#00f0ff] to-[#a855f7] text-white">
                View All Services <i className="fas fa-angle-right ml-2"></i>
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-[#111827] rounded-xl p-8 border border-gray-800 card-hover fade-in" 
              style={{transitionDelay: service.delay}}
            >
              <div className={`${service.color} text-4xl mb-4`}>
                <i className={service.icon}></i>
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <Link href="/services" className={`inline-flex items-center ${service.color}`}>
                Learn more <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
