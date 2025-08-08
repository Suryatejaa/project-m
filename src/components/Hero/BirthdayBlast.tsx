import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Star, Zap, Gift, Heart } from 'lucide-react';

interface BirthdayBlastProps {
  show: boolean;
  onComplete: () => void;
}

const BirthdayBlast: React.FC<BirthdayBlastProps> = ({ show, onComplete }) => {
  React.useEffect(() => {
    if (show) {
      console.log('Birthday blast started, will complete in 6 seconds');
      const timer = setTimeout(() => {
        console.log('Birthday blast completing...');
        onComplete();
      }, 6000); // Reduced to 6 seconds for more professional feel
      
      return () => {
        console.log('Cleaning up birthday blast timer');
        clearTimeout(timer);
      };
    }
  }, [show, onComplete]);

  const confettiColors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'];
  
  // Generate professional icon particles
  const iconPieces = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
    startX: Math.random() * 100,
    endX: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 2 + Math.random() * 1.5,
    icon: [Sparkles, Star, Zap, Gift, Heart][Math.floor(Math.random() * 5)],
  }));

  // Generate fireworks
  const fireworks = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: 20 + Math.random() * 60,
    y: 20 + Math.random() * 60,
    delay: Math.random() * 4,
  }));

  // Generate sparkles
  const sparkles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 6,
    scale: 0.5 + Math.random() * 0.5,
  }));

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 pointer-events-none overflow-hidden"
          style={{ background: 'rgba(0, 0, 0, 0.1)' }}
        >
          {/* Professional Icon Animation */}
          {iconPieces.map((piece) => {
            const IconComponent = piece.icon;
            return (
              <motion.div
                key={`icon-${piece.id}`}
                initial={{
                  x: `${piece.startX}vw`,
                  y: '-10vh',
                  rotate: 0,
                  opacity: 1,
                }}
                animate={{
                  x: `${piece.endX}vw`,
                  y: '110vh',
                  rotate: 360,
                  opacity: 0,
                }}
                transition={{
                  duration: piece.duration,
                  delay: piece.delay,
                  ease: 'easeInOut',
                }}
                className="absolute"
              >
                <IconComponent 
                  size={24} 
                  style={{ color: piece.color }}
                />
              </motion.div>
            );
          })}

          {/* Professional Starburst Effects */}
          {fireworks.map((firework) => (
            <motion.div
              key={`firework-${firework.id}`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
              transition={{
                duration: 1.5,
                delay: firework.delay,
                ease: 'easeOut',
              }}
              className="absolute"
              style={{
                left: `${firework.x}%`,
                top: `${firework.y}%`,
              }}
            >
              <div className="relative">
                {/* Professional starburst */}
                {Array.from({ length: 8 }, (_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, x: 0, y: 0 }}
                    animate={{
                      scale: 1,
                      x: Math.cos((i * 45) * Math.PI / 180) * 40,
                      y: Math.sin((i * 45) * Math.PI / 180) * 40,
                    }}
                    transition={{
                      duration: 1,
                      delay: firework.delay,
                      ease: 'easeOut',
                    }}
                    className="absolute"
                  >
                    <Star size={16} className="text-yellow-300" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Professional Sparkle Effects */}
          {sparkles.map((sparkle) => (
            <motion.div
              key={`sparkle-${sparkle.id}`}
              initial={{ scale: 0, rotate: 0, opacity: 0 }}
              animate={{
                scale: [0, sparkle.scale, 0],
                rotate: 360,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                delay: sparkle.delay,
                ease: 'easeInOut',
              }}
              className="absolute"
              style={{
                left: `${sparkle.x}%`,
                top: `${sparkle.y}%`,
              }}
            >
              <Sparkles size={20} className="text-yellow-300" />
            </motion.div>
          ))}

          {/* Professional Celebration Icons */}
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: [0, 1.2, 1], rotate: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute top-1/4 left-1/4"
          >
            <Zap size={48} className="text-yellow-300" />
          </motion.div>
          
          <motion.div
            initial={{ scale: 0, rotate: 45 }}
            animate={{ scale: [0, 1.2, 1], rotate: 0 }}
            transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
            className="absolute top-1/3 right-1/4"
          >
            <Star size={48} className="text-blue-300" />
          </motion.div>

          {/* Central Professional Birthday Message */}
          <motion.div
            initial={{ scale: 0, opacity: 0, y: 50 }}
            animate={{ 
              scale: [0, 1.1, 1], 
              opacity: 1, 
              y: 0,
            }}
            transition={{ 
              duration: 1.5, 
              delay: 0.8, 
              ease: 'easeOut' 
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center bg-black bg-opacity-20 backdrop-blur-sm rounded-2xl p-8 border border-yellow-300/30">
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 2,
                  delay: 1.5,
                  repeat: 2,
                  repeatType: 'reverse'
                }}
                className="text-3xl md:text-6xl font-bold text-yellow-300 mb-4 flex items-center justify-center gap-4"
                style={{ textShadow: '0 0 20px rgba(255, 215, 0, 0.5)' }}
              >
                <Gift size={48} className="text-yellow-300" />
                HAPPY 50th BIRTHDAY!
                <Heart size={48} className="text-red-400" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
                className="text-lg md:text-3xl font-bold text-white mb-2"
                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
              >
                BABUUUUU...🥹🥹
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 2.5 }}
                className="text-base md:text-xl text-yellow-200 flex items-center justify-center gap-2"
              >
                <Star size={24} className="text-yellow-300" />
                GOLDEN JUBILEE CELEBRATION
                <Star size={24} className="text-yellow-300" />
              </motion.div>
            </div>
          </motion.div>

          {/* Professional Floating Elements */}
          <motion.div
            initial={{ y: '100vh', x: '10vw', rotate: 0 }}
            animate={{ y: '-20vh', x: '15vw', rotate: 360 }}
            transition={{ duration: 6, ease: 'easeOut' }}
            className="absolute"
          >
            <Gift size={40} className="text-pink-400" />
          </motion.div>
          
          <motion.div
            initial={{ y: '100vh', x: '80vw', rotate: 0 }}
            animate={{ y: '-20vh', x: '75vw', rotate: -360 }}
            transition={{ duration: 6, delay: 0.8, ease: 'easeOut' }}
            className="absolute"
          >
            <Heart size={40} className="text-red-400" />
          </motion.div>

          {/* Professional Celebration Icon */}
          {/* <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, delay: 2, ease: 'easeOut' }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-4">
              <Gift size={48} className="text-white" />
            </div>
          </motion.div> */}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BirthdayBlast;
