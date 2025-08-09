import Section from '../shared/Section';
import { maheshBabuData } from '../../utils/data';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import './CurrentProjects.css';

const CurrentProjects = () => {
  const { upcomingProject } = maheshBabuData.career;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);

  const images = [
    "/images/ssmb-29.webp",
    "/images/ssrmb.webp"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      
      // Change image after glitch effect starts
      setTimeout(() => {
        setCurrentImageIndex(prev => (prev + 1) % images.length);
      }, 200);
      
      // End glitch effect
      setTimeout(() => {
        setIsGlitching(false);
      }, 600);
      
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Section id="current-projects" title="Current & Upcoming">
      <div className="max-w-4xl mx-auto">
        <div className="glassmorphism p-2 rounded-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            {/* Project Image with Glitch Effect */}
            <div className="relative">
              <div className={`glitch-container ${isGlitching ? 'glitching' : ''}`}>
                <img 
                  src={images[currentImageIndex]}
                  alt={`${upcomingProject.title} movie poster`}
                  className="glitch-image"
                />
                {/* Glitch layers */}
                <img 
                  src={images[currentImageIndex]}
                  alt=""
                  className="glitch-image glitch-layer-1"
                />
                <img 
                  src={images[currentImageIndex]}
                  alt=""
                  className="glitch-image glitch-layer-2"
                />
              </div>
            </div>
            
            {/* Project Details */}
            <div className="text-center md:text-left">
              <h3 className="text-4xl md:text-5xl font-headers text-red-700 mb-3">{upcomingProject.title}</h3>
              <p className="text-xl md:text-2xl text-gray mb-2">with director <span className="font-bold text-secondary">{upcomingProject.director}</span></p>
              <p className="text-lg md:text-xl text-light mb-2">A {upcomingProject.genre}</p>
              <p className="text-xl md:text-2xl font-stats text-red-700">Nov - 25, jaathini... 🤙🤙</p>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default CurrentProjects;
