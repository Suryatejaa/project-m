import Section from '../shared/Section';
import { maheshBabuData } from '../../utils/data';
import { motion } from 'framer-motion';

const CultClassics = () => {
  const { cultClassics } = maheshBabuData;

  return (
    <Section id="cult-classics" title="Cult Classics & Underrated Gems">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {cultClassics.map((film, index) => (
          <motion.div
            key={index}
            className="glassmorphism p-2 rounded-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <img 
              src={`/src/assets/images/${film.image}`} 
              alt={film.film} 
              className="w-full h-46 object-cover rounded-lg mb-4" 
            />
            <h3 className="text-3xl font-headers text-accent mb-3">{film.film} ({film.year})</h3>
            <p className="text-lg text-secondary mb-4">Directed by {film.director}</p>
            <p className="font-body text-gray mb-2"><span className="font-bold">Why it's Iconic:</span> {film.whyIconic}</p>
            <p className="font-body text-gray"><span className="font-bold">Legacy:</span> {film.legacy}</p>
            {film.fanLove && <p className="font-body text-gray mt-2"><span className="font-bold">Fan Love:</span> {film.fanLove}</p>}
            {film.whyLegendary && (
              <ul className="list-disc list-inside mt-2 text-gray">
                {film.whyLegendary.map((point, i) => <li key={i}>{point}</li>)}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default CultClassics;
