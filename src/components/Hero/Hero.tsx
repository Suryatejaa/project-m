import { motion } from 'framer-motion';
import Countdown from './Countdown';
import { maheshBabuData } from '../../utils/data';

const Hero = () => {
  const { personalInfo } = maheshBabuData;
  const birthday = `${new Date().getFullYear()}-08-09T00:00:00`;

  return (
    <section className="min-h-screen flex flex-col justify-center items-start text-left md:items-start md:text-left relative overflow-hidden">
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
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-8xl font-extrabold font-headers text-light"
        >
          The Prince Turns 50
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-xl sm:text-2xl md:text-4xl font-quotes text-secondary"
        >
          Celebrating Mahesh Babu
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        >
          <Countdown targetDate={birthday} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
