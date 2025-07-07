import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, Sparkles, Code, Palette, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-blue-900 to-purple-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gold/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Subtle Check Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px),
          repeating-linear-gradient(45deg, rgba(255,215,0,0.03) 0, rgba(255,215,0,0.03) 2px, transparent 2px, transparent 20px),
          repeating-linear-gradient(-45deg, rgba(80,80,255,0.03) 0, rgba(80,80,255,0.03) 2px, transparent 2px, transparent 20px)
        `,
        backgroundSize: '50px 50px, 50px 50px, 40px 40px, 40px 40px',
        zIndex: 1
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-6"
          >
            <Sparkles size={16} className="mr-2" />
            Bespoke Website Development
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Crafting Digital
          <span className="block text-gold">Excellence</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Transform your vision into a stunning, high-performance website that captivates your audience and drives results.
        </motion.p>

        {/* Feature Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex justify-center items-center space-x-8 mb-12"
        >
          <div className="flex items-center text-gold">
            <Code size={20} className="mr-2" />
            <span className="text-sm font-medium">Custom Code</span>
          </div>
          <div className="flex items-center text-gold">
            <Palette size={20} className="mr-2" />
            <span className="text-sm font-medium">Unique Design</span>
          </div>
          <div className="flex items-center text-gold">
            <Zap size={20} className="mr-2" />
            <span className="text-sm font-medium">Lightning Fast</span>
          </div>
        </motion.div>

        {/* CTA Buttons + Scroll Indicator Wrapper */}
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-row gap-10 justify-center items-center mb-6 z-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="flex items-center justify-center px-4 py-3 rounded-full font-bold text-base bg-gold text-white shadow-lg border-2 border-gold hover:bg-gold/90 hover:border-gold/80 transition-all duration-200 min-w-[120px]"
            >
              Start Your Project
              <ArrowDown size={20} className="ml-2 text-white group-hover:translate-y-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToPortfolio}
              className="flex items-center justify-center px-4 py-3 rounded-full font-bold text-base border-2 border-white text-white bg-transparent hover:bg-gold hover:text-white hover:border-gold transition-all duration-200 min-w-[120px]"
            >
              View Portfolio
              <ArrowDown size={20} className="ml-2 text-white group-hover:text-white transition-colors" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 