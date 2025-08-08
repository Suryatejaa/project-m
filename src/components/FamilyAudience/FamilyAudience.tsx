import Section from '../shared/Section';
import { maheshBabuData } from '../../utils/data';
import { motion } from 'framer-motion';
import { Tv, Star, Diamond, Trophy, TrendingUp, Users, Zap, Crown } from 'lucide-react';

const FamilyAudience = () => {
  const { familyAudienceConnection, televisionDominance } = maheshBabuData;

  return (
    <Section 
      id="family-audience" 
      title="The Ultimate Family Hero"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          {familyAudienceConnection.map((reason, index) => (
            <motion.div
              key={index}
              className="glassmorphism p-6 rounded-lg"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-2xl font-headers text-secondary mb-3">{reason.title}</h3>
              <ul className="list-disc list-inside text-gray space-y-1">
                {reason.points.map((point, i) => <li key={i}>{point}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="glassmorphism p-2 rounded-xl overflow-hidden relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          {/* Background pattern for Gen Z vibe */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 right-4">
              <Tv size={64} className="text-secondary" />
            </div>
            <div className="absolute bottom-4 left-4">
              <Star size={48} className="text-accent" />
            </div>
            <div className="absolute top-1/2 left-1/4">
              <Diamond size={32} className="text-success" />
            </div>
          </div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
              <img 
                src="/src/assets/images/athadu-poster.webp" 
                alt="Athadu Movie Poster" 
                className="w-full lg:w-3/12 h-auto object-cover shadow-lg " 
              />
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-headers text-accent mb-2">TV LEGEND: "{televisionDominance.film}"</h3>
                <div className="text-6xl font-stats text-success mb-2 font-extrabold tracking-tight">
                  {televisionDominance.telecasts}
                </div>
                <div className="text-xl font-bold text-secondary uppercase tracking-wide">
                  TELECASTS & COUNTING! <TrendingUp className="inline ml-2 text-accent" size={24} />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {televisionDominance.impact.map((item, i) => (
                <motion.div 
                  key={i}
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-lg"
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
                >
                  <div className="text-accent">
                    {i === 0 ? <Crown size={24} /> : 
                     i === 1 ? <TrendingUp size={24} /> : 
                     i === 2 ? <Users size={24} /> : 
                     <Zap size={24} />}
                  </div>
                  <p className="text-gray font-medium">{item}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-secondary to-accent text-primary font-bold rounded-full text-sm uppercase tracking-wide">
                ABSOLUTE LEGEND STATUS <Star className="inline ml-2" size={16} />
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default FamilyAudience;
