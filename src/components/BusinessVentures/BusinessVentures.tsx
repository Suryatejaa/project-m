import Section from '../shared/Section';
import { maheshBabuData } from '../../utils/data';
import { motion } from 'framer-motion';

const BusinessVentures = () => {
  const { businessVentures } = maheshBabuData;

  return (
    <Section id="business-ventures" title="Business Ventures">
      <div className="flex flex-col lg:flex-row mg:flex-row max-w-4xl mx-auto justify-center gap-8">
        {businessVentures.map((venture, index) => (
          <motion.div
            key={index}
            className="glassmorphism p-8 rounded-lg text-center"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-3xl font-headers text-secondary">{venture.name}</h3>
            <p className="text-xl text-gray mt-2">{venture.type}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default BusinessVentures;
