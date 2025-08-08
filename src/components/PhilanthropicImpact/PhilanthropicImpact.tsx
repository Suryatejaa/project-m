import Section from '../shared/Section';
import { maheshBabuData } from '../../utils/data';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const PhilanthropicImpact = () => {
  const { philanthropy } = maheshBabuData;
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  const HeartbeatIcon = () => (
    <motion.div
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      className="text-success"
    >
      <Heart size={64} fill="currentColor" />
    </motion.div>
  );

  return (
    <Section id="philanthropy" title="Philanthropic Impact">
      <div ref={ref} className="max-w-6xl mx-auto text-center">
        <p className="text-xl text-gray mb-12">
          Mahesh Babu dedicates a significant portion of his income to charity, making him one of India's most charitable superstars.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div className="glassmorphism p-8 rounded-lg" whileHover={{ y: -10 }}>
            <div className="text-6xl font-stats font-bold text-accent">
              ₹{inView && <CountUp end={philanthropy.annualDonation} duration={3} />} Cr
            </div>
            <div className="text-xl font-body text-gray mt-2">Annual Donation</div>
          </motion.div>

          <motion.div className="glassmorphism p-8 rounded-lg flex flex-col items-center justify-center" whileHover={{ y: -10 }}>
            <HeartbeatIcon />
            <div className="text-6xl font-stats font-bold text-success mt-4">
              {inView && <CountUp end={philanthropy.heartSurgeries.total} duration={4} separator="," />}+
            </div>
            <div className="text-xl font-body text-gray mt-2">Heart Surgeries Funded</div>
          </motion.div>

          <motion.div className="glassmorphism p-8 rounded-lg" whileHover={{ y: -10 }}>
            <div className="text-6xl font-stats font-bold text-accent">
              {philanthropy.adoptedVillages.length}
            </div>
            <div className="text-xl font-body text-gray mt-2">Villages Adopted</div>
            <div className="text-md text-secondary mt-1">
              {philanthropy.adoptedVillages.map(v => v.name).join(' & ')}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default PhilanthropicImpact;
