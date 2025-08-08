import Section from '../shared/Section';
import { maheshBabuData } from '../../utils/data';
import { motion } from 'framer-motion';

const ActionLegacy = () => {
  const { actionLegacy } = maheshBabuData;

  return (
    <Section id="action-legacy" title="The Action Evolution">
      <div className="flex max-w-xl mx-auto text-center justify-center glassmorphism p-2 rounded-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src={`/src/assets/images/${actionLegacy.image}`} 
            alt={actionLegacy.film} 
            className="w-full lg:w-5/12 h-auto object-cover rounded-lg mb-6" 
          />
          <h3 className="text-4xl font-headers text-secondary mb-4">"{actionLegacy.film}" ({actionLegacy.year})</h3>
          <p className="text-xl text-gray mb-3">{actionLegacy.stuntInnovation}</p>
          <p className="text-xl text-gray mb-3">{actionLegacy.physicalTransformation}</p>
          <p className="text-xl text-accent font-bold">{actionLegacy.legacy}</p>
        </motion.div>
      </div>
    </Section>
  );
};

export default ActionLegacy;
