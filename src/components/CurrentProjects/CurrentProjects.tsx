import Section from '../shared/Section';
import { maheshBabuData } from '../../utils/data';
import { motion } from 'framer-motion';

const CurrentProjects = () => {
  const { upcomingProject } = maheshBabuData.career;

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
            {/* Project Image */}
            <div className="relative">
              <img 
                src="/images/ssmb-29.webp" 
                alt={`${upcomingProject.title} movie poster`}
                className="w-full max-w-sm mx-auto rounded-lg shadow-2xl"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div> */}
            </div>
            
            {/* Project Details */}
            <div className="text-center md:text-left">
              <h3 className="text-4xl md:text-5xl font-headers text-accent mb-4">{upcomingProject.title}</h3>
              <p className="text-xl md:text-2xl text-gray mb-2">with director <span className="font-bold text-secondary">{upcomingProject.director}</span></p>
              <p className="text-lg md:text-xl text-light mb-4">A {upcomingProject.genre}</p>
              <p className="text-xl md:text-2xl font-stats text-accent">Release date: {upcomingProject.release}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default CurrentProjects;
