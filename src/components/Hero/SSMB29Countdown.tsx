import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Film, Zap } from 'lucide-react';

interface SSMB29CountdownProps {
  targetDate: string;
}

const SSMB29Countdown: React.FC<SSMB29CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const target = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const CountdownBox = ({ value, label, color }: { value: number; label: string; color: string }) => (
    <motion.div 
      className={`flex flex-col items-center p-2 md:p-2 bg-gradient-to-br ${color} rounded-xl shadow-lg backdrop-blur-sm border border-white/20`}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <motion.div 
        className="text-2xl md:text-4xl font-bold text-white mb-1"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
      >
        {value.toString().padStart(2, '0')}
      </motion.div>
      <div className="text-xs md:text-sm text-white/90 font-semibold uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );

  return (
    <div className="w-full">
      {/* Never Seen Reveal Caption */}
      

      {/* Countdown */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center"
      >       
        <div className="grid grid-cols-4 gap-3 md:gap-6 max-w-md mx-auto">
          <CountdownBox 
            value={timeLeft.days} 
            label="Days" 
            color="from-red-700 to-gray-500"
          />
          <CountdownBox 
            value={timeLeft.hours} 
            label="Hours" 
            color="from-red-700 to-gray-500"
          />
          <CountdownBox 
            value={timeLeft.minutes} 
            label="Minutes" 
            color="from-red-700 to-gray-500"
          />
          <CountdownBox 
            value={timeLeft.seconds} 
            label="Seconds" 
            color="from-red-700 to-gray-500"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default SSMB29Countdown;
