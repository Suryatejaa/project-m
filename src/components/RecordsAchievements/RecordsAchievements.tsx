import Section from '../shared/Section';
import { maheshBabuData } from '../../utils/data';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const RecordsAchievements = () => {
  const { achievements } = maheshBabuData;
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  const StatCard = ({ value, label, suffix = '' }: { value: number, label: string, suffix?: string }) => (
    <motion.div 
      className="glassmorphism p-6 rounded-lg text-center"
      whileHover={{ y: -10 }}
    >
      <div className="text-5xl font-stats font-bold text-accent">
        {inView && <CountUp end={value} duration={3} />}
        {suffix}
      </div>
      <div className="text-xl font-body text-gray mt-2">{label}</div>
    </motion.div>
  );

  return (
    <Section id="records-achievements" title="Records & Achievements">
      <div ref={ref} className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <StatCard value={achievements.records.television.telecasts} label={`Telecasts for "${achievements.records.television.film}"`} />
        <StatCard value={maheshBabuData.career.filmography.totalLeadRoles} label="Films as Lead Actor" />
        <StatCard value={maheshBabuData.career.filmography.careerSpan} label="Years in Cinema" />
      </div>
    </Section>
  );
};

export default RecordsAchievements;
