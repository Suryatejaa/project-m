import Section from '../shared/Section';
import { maheshBabuData } from '../../utils/data';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import './AwardsGallery.css';

const AwardsGallery = () => {
  const { achievements } = maheshBabuData;

  return (
    <Section id="awards-gallery" title="Awards Gallery">
      <div className="awards-container">
        {achievements.awards.map((award, index) => (
          <motion.div 
            key={index} 
            className="award-card"
            whileHover={{ y: -15, rotateZ: 3 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="award-icon">
              <Trophy size={48} className="text-accent" />
            </div>
            <h3 className="award-name text-accent">{award.name}</h3>
            {award.count && <p className="award-count">{award.count} times</p>}
            {award.for && <p className="award-for">for "{award.for}"</p>}
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default AwardsGallery;
