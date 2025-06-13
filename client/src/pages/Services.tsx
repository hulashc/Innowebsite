import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Define service category and product interfaces
interface ServiceProduct {
  id: string;
  name: string;
  description: string;
  features: string[];
  price: string;
  popular?: boolean;
}

interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  products: ServiceProduct[];
}

export default function Services() {
  const [location, setLocation] = useLocation();

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

  // Handle navigation to contact section
  const handleContactSales = () => {
    // Since we're on services page, navigate to home with contact parameter
    setLocation('/?scroll=contact');
  };

  // Define service categories and products
  const serviceCategories: ServiceCategory[] = [
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure',
      description: 'High-performance computing and storage solutions for your business needs.',
      products: [
        {
          id: 'innowise-compute',
          name: 'Innowise Compute',
          description: 'Virtual machines optimized for performance, flexibility, and cost-effectiveness.',
          features: [
            'Instant scaling capabilities',
            'Global availability zones',
            'Dedicated CPU options',
            'Ultra-fast SSD storage',
            '99.99% uptime guarantee'
          ],
          price: '',
          popular: true
        },
        {
          id: 'innowise-kubernetes',
          name: 'Innowise Kubernetes',
          description: 'Fully managed Kubernetes service for container orchestration.',
          features: [
            'Automated scaling and deployment',
            'Integrated monitoring and logging',
            'Multi-cluster management',
            'Auto-healing capabilities',
            'Enterprise security features'
          ],
          price: '',
        },
        {
          id: 'innowise-serverless',
          name: 'Innowise Serverless',
          description: 'Run code without provisioning or managing servers.',
          features: [
            'Pay-per-execution model',
            'Automatic scaling to zero',
            'Support for multiple runtimes',
            'Low-latency triggers',
            'Integrated with other Innowise services'
          ],
          price: '',
        }
      ]
    },
    {
      id: 'databases',
      name: 'Managed Databases',
      description: 'Fully managed database services with high availability and security.',
      products: [
        {
          id: 'innowise-postgres',
          name: 'Innowise PostgreSQL',
          description: 'Fully managed PostgreSQL database service with high availability.',
          features: [
            'Automated backups and point-in-time recovery',
            'Read replicas for scaling',
            'Enterprise-grade security',
            'Automatic version upgrades',
            'Dedicated technical support'
          ],
          price: '',
          popular: true
        },
        {
          id: 'innowise-redis',
          name: 'Innowise Redis',
          description: 'Managed in-memory data store and cache service.',
          features: [
            'Sub-millisecond latency',
            'Persistence options',
            'Automatic failover',
            'Cluster mode support',
            'Data encryption in transit and at rest'
          ],
          price: '',
        },
        {
          id: 'innowise-mongodb',
          name: 'Innowise MongoDB',
          description: 'Fully managed MongoDB service for document-based data.',
          features: [
            'Automated sharding',
            'Continuous backup',
            'Multi-region deployment options',
            'Performance optimization',
            'Document validation rules'
          ],
          price: '',
        }
      ]
    },
    {
      id: 'security',
      name: 'Security & Compliance',
      description: 'Enterprise-grade security solutions for your cloud infrastructure.',
      products: [
        {
          id: 'innowise-firewall',
          name: 'Innowise Cloud Firewall',
          description: 'Advanced network security for your cloud resources.',
          features: [
            'DDoS protection',
            'Intrusion detection and prevention',
            'Traffic analytics',
            'Custom rule configurations',
            'Real-time monitoring'
          ],
          price: '',
          popular: true
        },
        {
          id: 'innowise-identity',
          name: 'Innowise Identity',
          description: 'Comprehensive identity and access management solution.',
          features: [
            'Single sign-on (SSO)',
            'Multi-factor authentication',
            'Fine-grained permissions',
            'Role-based access control',
            'Audit logging'
          ],
          price: '',
        },
        {
          id: 'innowise-secrets',
          name: 'Innowise Secrets Manager',
          description: 'Secure storage and management for API keys, credentials, and certificates.',
          features: [
            'Centralized secrets storage',
            'Automatic rotation',
            'Access control integration',
            'Version history',
            'Encryption by default'
          ],
          price: '',
        }
      ]
    },
    {
      id: 'devops',
      name: 'DevOps Acceleration',
      description: 'Tools and services to streamline your development workflow.',
      products: [
        {
          id: 'innowise-ci-cd',
          name: 'Innowise CI/CD',
          description: 'Continuous integration and deployment platform for automated testing and delivery.',
          features: [
            'Parallel test execution',
            'Multi-environment deployments',
            'Custom workflows',
            'GitHub, GitLab, and Bitbucket integration',
            'Deployment rollbacks'
          ],
          price: '',
          popular: true
        },
        {
          id: 'innowise-monitoring',
          name: 'Innowise Monitoring',
          description: 'Comprehensive monitoring and observability solution.',
          features: [
            'Custom dashboards',
            'Anomaly detection',
            'Alert management',
            'Log aggregation',
            'Performance analytics'
          ],
          price: '',
        },
        {
          id: 'innowise-iaas',
          name: 'Innowise Infrastructure as Code',
          description: 'Manage infrastructure using code for consistent deployment.',
          features: [
            'Version-controlled infrastructure',
            'Drift detection',
            'Pre-deployment validation',
            'Resource dependency management',
            'Support for multiple providers'
          ],
          price: '',
        }
      ]
    },
    {
      id: 'analytics',
      name: 'Analytics & AI',
      description: 'Data analytics and artificial intelligence solutions to derive insights from your data.',
      products: [
        {
          id: 'innowise-data-warehouse',
          name: 'Innowise Data Warehouse',
          description: 'Scalable data warehouse for analytics and business intelligence.',
          features: [
            'Petabyte-scale storage',
            'SQL query interface',
            'Automatic scaling',
            'Data loading automation',
            'BI tool integration'
          ],
          price: '',
          popular: true
        },
        {
          id: 'innowise-ml',
          name: 'Innowise Machine Learning',
          description: 'Ready-to-use machine learning models and custom ML platform.',
          features: [
            'Pre-trained models',
            'Custom model training',
            'Model deployment and serving',
            'AutoML capabilities',
            'Jupyter notebook integration'
          ],
          price: '',
        },
        {
          id: 'innowise-stream',
          name: 'Innowise Stream Processing',
          description: 'Real-time data processing for analytics and event-driven applications.',
          features: [
            'Low-latency processing',
            'Scalable architecture',
            'Built-in connectors',
            'Event-time processing',
            'Windowing operations'
          ],
          price: '',
        }
      ]
    }
  ];

  // Default to the first category
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0].id);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our <span className="gradient-text">Services</span></h1>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Discover our comprehensive range of technology solutions designed to accelerate your business growth and digital transformation.
              </p>
            </div>
            
            <div className="fade-in" style={{transitionDelay: '100ms'}}>
              <Tabs defaultValue={activeCategory} className="w-full" onValueChange={setActiveCategory}>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                  {/* Category Tabs - Vertical on desktop, horizontal scroll on mobile */}
                  <div className="lg:col-span-1 order-2 lg:order-1">
                    <div className="bg-[#111827] rounded-xl border border-gray-800 p-4 sticky top-24">
                      <h3 className="text-xl font-semibold mb-4 px-1">Categories</h3>
                      <TabsList className="flex flex-col space-y-2 h-auto bg-transparent">
                        {serviceCategories.map((category) => (
                          <TabsTrigger 
                            key={category.id} 
                            value={category.id}
                            className="justify-start w-full px-4 py-3 text-left border border-transparent data-[state=active]:border-[#00f0ff]/30 data-[state=active]:bg-[#00f0ff]/5 hover:bg-[#00f0ff]/5 transition-colors duration-200"
                          >
                            {category.name}
                          </TabsTrigger>
                        ))}
                      </TabsList>
                      
                      <div className="mt-6 p-4 bg-[#0f172a] rounded-lg border border-gray-800">
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Need help choosing?</h4>
                        <p className="text-sm text-gray-400 mb-3">
                          Our technology experts can guide you through our services and help you find the perfect solution.
                        </p>
                        <Button 
                          onClick={handleContactSales}
                          className="w-full bg-gradient-to-r from-[#00f0ff] to-[#a855f7] text-white hover:shadow-lg hover:shadow-[#00f0ff]/20"
                        >
                          Contact Sales
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Products Content */}
                  <div className="lg:col-span-3 order-1 lg:order-2">
                    {serviceCategories.map((category) => (
                      <TabsContent key={category.id} value={category.id} className="mt-0">
                        <div className="mb-8">
                          <h2 className="text-3xl font-bold mb-3">{category.name}</h2>
                          <p className="text-gray-300 mb-8">{category.description}</p>
                          
                          <div className="grid grid-cols-1 gap-6">
                            {category.products.map((product) => (
                              <div 
                                key={product.id}
                                className="bg-[#111827] rounded-xl border border-gray-800 overflow-hidden hover:border-[#00f0ff]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#00f0ff]/10"
                              >
                                <div className="p-6">
                                  <div className="flex justify-between items-start mb-4">
                                    <div>
                                      <h3 className="text-xl font-bold mb-1 flex items-center">
                                        {product.name}
                                        {product.popular && (
                                          <Badge className="ml-3 bg-[#00f0ff]/20 text-[#00f0ff] hover:bg-[#00f0ff]/30">
                                            Popular
                                          </Badge>
                                        )}
                                      </h3>
                                      <p className="text-gray-300">{product.description}</p>
                                    </div>
                                    <span className="text-[#00f0ff] font-semibold whitespace-nowrap">{product.price}</span>
                                  </div>
                                  
                                  <div className="mt-6">
                                    <h4 className="text-sm font-semibold mb-3 text-gray-200">Features</h4>
                                    <ul className="space-y-2">
                                      {product.features.map((feature, index) => (
                                        <li key={index} className="flex items-start space-x-2 text-gray-300">
                                          <span className="text-[#00f0ff] mt-1"><i className="fas fa-check-circle"></i></span>
                                          <span>{feature}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </TabsContent>
                    ))}
                  </div>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}