import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import BirthdayBlast from './BirthdayBlast';
import { maheshBabuData } from '../../utils/data';
import { BeerIcon, BetweenVerticalStartIcon, StarIcon } from 'lucide-react';

const Hero = () => {
  const [showBlast, setShowBlast] = useState(false);
  const [blastCompleted, setBlastCompleted] = useState(false);
  const { personalInfo } = maheshBabuData;

  // Show blast immediately on component mount since it's his birthday
  useEffect(() => {
    console.log('Hero mounted, starting birthday blast');
    setShowBlast(true);
  }, []);

  const handleBlastComplete = useCallback(() => {
    console.log('Blast complete callback triggered');
    setShowBlast(false);
    setBlastCompleted(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-start text-left md:items-start md:text-left relative overflow-hidden">
      {/* Birthday Blast Effect */}
      <BirthdayBlast 
        show={showBlast} 
        onComplete={handleBlastComplete}
      />
      
      <div className="absolute inset-0 bg-primary opacity-50 z-10"></div>
      
      {/* Desktop Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center hidden md:block" 
        style={{backgroundImage: "url('/images/hero-background.webp')"}}
      ></div>

      {/* Mobile Background */}
      <div 
        className="absolute inset-0 bg-cover bg-left md:hidden" 
        style={{
          backgroundImage: "url('/images/hero-background-mobile.webp')",
          }}
      ></div>

      <div className="top-40 lg:top-20 md:top-20 mt-40 lg:mt-20 md:mt-20 pt-20 flex flex-col items-start relative z-20 p-1 w-full md:w-3/5 lg:w-1/2 md:pl-1 lg:pl-2">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: blastCompleted ? 0 : 6 }}
          className="text-2xl sm:text-5xl md:text-5xl font-extrabold font-headers text-light"
        >
          {blastCompleted ? "🎉 The Prince Turns 50! 🎉" : "The Prince Turns 50"}
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: blastCompleted ? 0.5 : 6.5, ease: "easeOut" }}
          className="text-xl sm:text-2xl md:text-4xl font-quotes text-secondary"
        >
          Celebrating Superstar Mahesh Babu <StarIcon className="inline-block" />
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: blastCompleted ? 1 : 7, ease: "easeOut" }}
          className="mt-0"
        >
          {/* Birthday celebration message since it's already his birthday */}
          <motion.div
            className="text-left md:text-left"
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <div className="text-xl md:text-5xl pl-2 font-bold text-accent">
              IT'S HIS BIRTHDAY!💫
            </div>
            <div className="text-lg md:text-2xl pl-2 text-light">
              August 9th, 2025 - Golden Jubilee Celebration!
            </div>
            
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
