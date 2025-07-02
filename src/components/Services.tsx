import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Globe, Zap, Shield, Palette, Code, BarChart3 } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Monitor,
      title: "Custom Website Design",
      description: "Bespoke designs that perfectly capture your brand's essence and create memorable user experiences.",
      features: ["Responsive Design", "Brand Integration", "User Experience Focus"]
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Clean, efficient code that ensures your website performs flawlessly across all devices and platforms.",
      features: ["Modern Technologies", "SEO Optimized", "Performance Focused"]
    },
    {
      icon: Smartphone,
      title: "Mobile-First Approach",
      description: "Websites that look and function perfectly on every device, from smartphones to large displays.",
      features: ["Responsive Layout", "Touch Optimized", "Fast Loading"]
    },
    {
      icon: Globe,
      title: "E-commerce Solutions",
      description: "Complete online store solutions that drive sales and provide seamless shopping experiences.",
      features: ["Payment Integration", "Inventory Management", "Analytics"]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Lightning-fast websites that load quickly and provide smooth user interactions.",
      features: ["Speed Optimization", "Caching", "CDN Integration"]
    },
    {
      icon: Shield,
      title: "Security & Maintenance",
      description: "Ongoing security updates and maintenance to keep your website safe and up-to-date.",
      features: ["SSL Certificates", "Regular Updates", "Backup Systems"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-6"
          >
            <Palette size={16} className="mr-2" />
            Our Services
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Premium Web Solutions
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From concept to launch, we deliver exceptional websites that elevate your brand and drive business growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-gold/30 transition-all duration-300"
            >
              {/* Service Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-gold to-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={32} className="text-white" />
              </div>

              {/* Service Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gold text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gold/90 transition-all duration-200"
          >
            Discuss Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 