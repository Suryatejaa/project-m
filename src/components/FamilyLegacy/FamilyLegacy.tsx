import Section from '../shared/Section';
import { maheshBabuData } from '../../utils/data';
import { motion } from 'framer-motion';

const FamilyLegacy = () => {
  const { family } = maheshBabuData;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <Section id="family-legacy" title="Family Legacy">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-xl text-gray mb-2">
          Mahesh Babu hails from the illustrious Ghattamaneni family, a true dynasty in Telugu cinema.
        </p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <motion.div variants={itemVariants} className="glassmorphism p-6 rounded-lg">
            <h3 className="text-2xl font-headers text-accent mb-2">Parents</h3>
            <p className="text-lg">{family.father} & {family.mother}</p>
            <p className="text-md text-gray">(Stepmother: {family.stepMother})</p>
          </motion.div>

          <motion.div variants={itemVariants} className="glassmorphism p-6 rounded-lg">
            <h3 className="text-2xl font-headers text-accent mb-2">Spouse</h3>
            <p className="text-lg">{family.spouse.name}</p>
            <p className="text-md text-gray">Married: {family.spouse.marriedDate}</p>
          </motion.div>

          <motion.div variants={itemVariants} className="glassmorphism p-6 rounded-lg">
            <h3 className="text-2xl font-headers text-accent mb-2">Children</h3>
            {family.children.map(child => (
              <p key={child.name} className="text-lg">{child.name}</p>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="glassmorphism p-6 rounded-lg lg:col-span-3">
            <h3 className="text-2xl font-headers text-accent mb-2">Siblings</h3>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              {family.siblings.map(sibling => (
                <span key={sibling.name} className="text-lg">{sibling.name} ({sibling.relation})</span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default FamilyLegacy;
