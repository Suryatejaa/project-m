import Section from '../shared/Section';
import ReelVideo from '../ReelVideo/ReelVideo';
import { motion } from 'framer-motion';
import { Play, Volume2 } from 'lucide-react';

const VideoTribute = () => {
  return (
    <Section id="video-tribute" title="The Legend in Motion" className="relative min-h-screen">
      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between min-h-[80vh] px-1 gap-8">
        
        {/* Left side - Reel Video */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex-shrink-0"
        >
          <ReelVideo 
            videoSrc="/videos/mahesh-reel.mp4"
            title="Mahesh Babu Highlights"
          />
        </motion.div>

        {/* Right side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="glassmorphism p-2 rounded-2xl max-w-2xl mx-auto lg:mx-0"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <h3 className="text-3xl md:text-4xl font-headers text-secondary">
              Experience the Magic
            </h3>
          </div>
          
          <p className="text-lg md:text-xl text-gray mb-6 leading-relaxed">
            Watch as Mahesh Babu's journey unfolds - from his early days to becoming 
            Telugu cinema's undisputed Superstar. Every frame tells a story of dedication, 
            charisma, and cinematic excellence.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <span className="bg-secondary/20 text-secondary px-4 py-2 rounded-full">
              25 Years of Excellence
            </span>
            <span className="bg-accent/20 text-accent px-4 py-2 rounded-full">
              Countless Memories
            </span>
            <span className="bg-success/20 text-success px-4 py-2 rounded-full">
              One Legend
            </span>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default VideoTribute;
