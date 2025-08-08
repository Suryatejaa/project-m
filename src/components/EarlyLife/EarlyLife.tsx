import Section from '../shared/Section';
import { maheshBabuData } from '../../utils/data';
import { motion } from 'framer-motion';

const EarlyLife = () => {
  const { personalInfo, family } = maheshBabuData;

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };
  return (
    <Section 
      id="early-life" 
      title="Early Life & Childhood"
    >
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        
        <motion.div
          variants={cardVariants}
          className="glassmorphism p-2 rounded-lg"
        >
          <motion.div
          variants={cardVariants}
          className="flex justify-center"
        >
          <img src="/images/young-mahesh.webp" alt="Young Mahesh Babu" className="rounded-lg shadow-lg w-full max-w-xs" />
        </motion.div>
          <p className="font-body text-lg text-gray leading-relaxed">
            Born in <span className="font-bold text-secondary">{personalInfo.birthPlace}</span>, Mahesh Babu grew up in Chennai at his maternal grandmother's house. His father, the legendary actor <span className="font-bold text-accent">{family.father}</span>, was often busy with film shoots, so his elder brother, Ramesh Babu, took charge of his education.
          </p>
          <p className="font-body text-lg text-gray leading-relaxed mt-4">
            A fun fact: despite his fluency in Telugu, he couldn't read or write the language initially. He pursued a commerce degree from Loyola College, where actor Vijay was his classmate.
          </p>
        </motion.div>
        
      </div>
    </Section>
  );
};

export default EarlyLife;
