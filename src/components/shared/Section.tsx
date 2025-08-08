import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section = ({ id, title, children, className = '' }: SectionProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <motion.section
      id={id}
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={`py-16 px-4 md:px-8 relative overflow-hidden ${className}`}
    >
      {/* Cinematic background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/65 to-secondary/10 pointer-events-none"></div>
      
      <div className="relative z-10">
        <motion.h2 
          className="text-4xl md:text-6xl lg:text-7xl font-headers font-black text-center mb-12 bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {title}
        </motion.h2>
        {children}
      </div>
    </motion.section>
  );
};

export default Section;
