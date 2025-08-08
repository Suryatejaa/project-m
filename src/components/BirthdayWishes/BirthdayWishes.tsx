import Section from '../shared/Section';
import { motion } from 'framer-motion';

const BirthdayWishes = () => {
  const birthdayMessages = [
    {
      message: "Happy 50th Birthday to the Prince of Tollywood! Your journey inspires millions.",
      author: "Fans Worldwide"
    },
    {
      message: "From Pokiri to Srimanthudu, every character you've portrayed has left an indelible mark on our hearts.",
      author: "Cinema Lovers"
    },
    {
      message: "May this golden milestone bring you more success, happiness, and memorable cinematic moments.",
      author: "Telugu Film Industry"
    },
    {
      message: "Your dedication to both entertainment and social causes makes you a true superstar in every sense.",
      author: "Admirers"
    }
  ];

  return (
    <Section id="birthday-wishes" title="Birthday Tributes">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-headers text-accent mb-4"
          >
            Celebrating 50 Years of Excellence
          </motion.h3>
          <p className="text-xl text-gray">Messages from fans and the film fraternity</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {birthdayMessages.map((tribute, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glassmorphism p-6 rounded-xl"
            >
              <p className="text-lg text-light mb-4 italic">"{tribute.message}"</p>
              <p className="text-secondary font-semibold">- {tribute.author}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="glassmorphism p-3 rounded-xl max-w-2xl mx-auto">
            <h4 className="text-3xl font-headers text-accent mb-4">🎉 Happy 50th Birthday! 🎉</h4>
            <p className="text-xl text-light mb-6">
              Here's to many more years of inspiring performances and making a difference in the world!
            </p>
            <div className="border-t border-accent/30 pt-2">
            <img 
                src="/src/assets/images/surya-img.webp" 
                alt="Birthday Tribute"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>

              <p className="text-lg text-white font-semibold mb-2">
                The boy grown up watching your movies since childhood.
                <br />
                <a 
                  href="https://www.instagram.com/itz.me.surya/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 transition-colors ml-2 underline"
                >
                  - itz.me.surya
                </a>
              </p>
              <p className="text-sm text-gray italic">
                Created with love for Mahesh Babu's 50th Birthday ❤️
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default BirthdayWishes;
