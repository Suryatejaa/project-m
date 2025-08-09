import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import BirthdayBlast from './BirthdayBlast';
import SSMB29Countdown from './SSMB29Countdown';
import { maheshBabuData } from '../../utils/data';
import { StarIcon, Film, Zap } from 'lucide-react';

const Hero = () => {
  const [showBlast, setShowBlast] = useState(false);
  const [blastCompleted, setBlastCompleted] = useState(true); // Skip blast for now, focus on SSMB29
  const [showSSMB29, setShowSSMB29] = useState(false);
  const { personalInfo } = maheshBabuData;

  // Show SSMB29 announcement after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSSMB29(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleBlastComplete = useCallback(() => {
    setShowBlast(false);
    setBlastCompleted(true);
    setShowSSMB29(true);
  }, []);

  const november1st2025 = "2025-11-01T00:00:00";

  return (
    <section className="min-h-screen flex flex-col justify-center items-start text-left md:items-start md:text-left relative overflow-hidden">
      {/* Birthday Blast Effect */}
      <BirthdayBlast 
        show={showBlast} 
        onComplete={handleBlastComplete}
      />
      
      <div className="absolute inset-0 bg-primary opacity-60 z-10"></div>
      
      {/* SSMB29 Poster Background (when available) */}
      <div
        className="absolute inset-0 bg-cover bg-right hidden md:block"
        style={{ backgroundImage: "url('/images/ssrmb.webp')" }}
      ></div>

      {/* Fallback Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center md:hidden" 
        style={{
          backgroundImage: "url('/images/ssrmb.webp')",
        }}
      ></div>

      <div className="relative z-20 p-2 w-full max-w-6xl mx-auto">

        {/* SSMB29 Announcement Section */}
        {showSSMB29 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="md:p-2 mt-40 pt-60"
          >
           
            {/* SSMB29 Poster Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-center mb-1"
            >                        
              <motion.h3
                className="text-3xl md:text-5xl text-center font-bold text-white mb-1"
                animate={{ 
                  textShadow: [
                    '0 0 10px rgba(210, 4, 4, 1)',
                    '0 0 20px rgba(216, 3, 3, 1)',
                    '0 0 10px rgba(248, 1, 1, 1)',
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
              >
              NEVER-BEFORE-SEEN
              </motion.h3>             
            </motion.div>

            {/* Countdown Component */}
            <SSMB29Countdown targetDate={november1st2025} />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hero;
