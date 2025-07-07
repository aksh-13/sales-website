import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, ArrowRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'corporate', name: 'Corporate' },
    { id: 'portfolio', name: 'Portfolio' },
    { id: 'landing', name: 'Landing Pages' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'ai', name: 'AI Tools' },
  ];

  const projects = [
    {
      id: 0,
      title: "Personal Portfolio – Akshaj Shrotri",
      category: "portfolio",
      description: "My personal website showcasing my work, skills, and contact information. Built with a modern, bespoke design.",
      image: "/akshaj.png",
      technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://www.akshajshrotri.com/",
      githubUrl: "#"
    },
    {
      id: 7,
      title: "Vishal Shrotri – Mortgage Agent Website",
      category: "corporate",
      description: "A professional website for a Toronto-based mortgage agent, featuring mortgage solutions, client testimonials, and contact options.",
      image: "/vishal.png",
      technologies: ["Next.js", "React", "Tailwind CSS", "Contact Forms"],
      liveUrl: "https://vishal-shrotri.vercel.app",
      githubUrl: "#"
    },
    {
      id: 8,
      title: "Travana – AI Trip Planner",
      category: "ai",
      description: "An AI-powered trip planning tool that generates personalized itineraries, 3D maps, and accommodation recommendations.",
      image: "/Travana.png",
      technologies: ["React", "TypeScript", "OpenAI API", "Mapbox"],
      liveUrl: "https://spurhacks-final-akshajs-projects-2701b487.vercel.app/",
      githubUrl: "#"
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-10 relative overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
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
            <Eye size={16} className="mr-2" />
            Our Work
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our portfolio of exceptional websites that have transformed businesses and delighted users.
          </p>
        </motion.div>

        {/* Category Filter */}
        {/* Removed category filter buttons */}

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-300"
              >
                {/* Project Image */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative h-64 overflow-hidden group"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink size={32} className="text-gold drop-shadow-lg" />
                  </div>
                </a>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gold/10 text-gold text-xs rounded-full border border-gold/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gold hover:text-gold/80 transition-colors duration-200 font-semibold cursor-pointer"
                  >
                    View Project
                    <ArrowRight size={16} className="ml-2" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
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
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio; 