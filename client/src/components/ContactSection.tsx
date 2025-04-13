import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    
    // Form would be submitted to backend in a real implementation
    toast({
      title: "Message Sent",
      description: "Thank you for your message! We'll get back to you shortly.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
  };

  const socialLinks = [
    { icon: "fab fa-twitter", href: "#", color: "text-gray-400 hover:text-[#00f0ff]" },
    { icon: "fab fa-linkedin", href: "#", color: "text-gray-400 hover:text-[#00f0ff]" },
    { icon: "fab fa-facebook", href: "#", color: "text-gray-400 hover:text-[#00f0ff]" },
    { icon: "fab fa-github", href: "#", color: "text-gray-400 hover:text-[#00f0ff]" },
  ];

  return (
    <section id="contact" className="py-20 bg-[#0f172a] relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#111827] to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 fade-in">Get in Touch</h2>
            <p className="text-gray-400 max-w-2xl mx-auto fade-in" style={{transitionDelay: '100ms'}}>
              Have questions about our cloud services? Our team is ready to help you find the right solutions for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="fade-in" style={{transitionDelay: '200ms'}}>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                  <Input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#111827] border border-gray-700 rounded-lg px-4 py-3 text-gray-100 focus:border-[#00f0ff] focus:ring-[#00f0ff]/20" 
                    placeholder="Enter your name" 
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                  <Input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#111827] border border-gray-700 rounded-lg px-4 py-3 text-gray-100 focus:border-[#00f0ff] focus:ring-[#00f0ff]/20" 
                    placeholder="Enter your email" 
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">Company Name</label>
                  <Input 
                    type="text" 
                    id="company" 
                    name="company" 
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-[#111827] border border-gray-700 rounded-lg px-4 py-3 text-gray-100 focus:border-[#00f0ff] focus:ring-[#00f0ff]/20" 
                    placeholder="Enter your company name" 
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#111827] border border-gray-700 rounded-lg px-4 py-3 text-gray-100 focus:border-[#00f0ff] focus:ring-[#00f0ff]/20" 
                    placeholder="Tell us about your project or questions" 
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-[#00f0ff] to-[#a855f7] py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#00f0ff]/30 transition-all"
                >
                  Send Message
                </Button>
              </form>
            </div>
            
            <div className="fade-in" style={{transitionDelay: '300ms'}}>
              <Card className="bg-[#111827] rounded-xl p-8 border border-gray-800 h-full">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-6 gradient-text">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-[#00f0ff] text-xl mt-1">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-1">Email Us</h4>
                        <p className="text-gray-400">support@nebulacloud.example</p>
                        <p className="text-gray-400">sales@nebulacloud.example</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="text-[#a855f7] text-xl mt-1">
                        <i className="fas fa-phone-alt"></i>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-1">Call Us</h4>
                        <p className="text-gray-400">+1 (555) 123-4567</p>
                        <p className="text-gray-400">Mon-Fri, 9AM-6PM EST</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="text-[#00f0ff] text-xl mt-1">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-1">Our Location</h4>
                        <p className="text-gray-400">123 Cloud Avenue</p>
                        <p className="text-gray-400">San Francisco, CA 94105</p>
                      </div>
                    </div>
                    
                    <div className="pt-6">
                      <h4 className="text-lg font-medium mb-3">Connect With Us</h4>
                      <div className="flex space-x-4">
                        {socialLinks.map((link, index) => (
                          <a key={index} href={link.href} className={`${link.color} transition-colors text-xl`}>
                            <i className={link.icon}></i>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
