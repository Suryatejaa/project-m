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
          <div className="relative overflow-hidden rounded-2xl max-w-4xl mx-auto">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-secondary/10 to-primary/30 backdrop-blur-xl"></div>

            {/* Main Content */}
            <div className="relative z-10 p-8 md:p-12">
              {/* Animated Birthday Header */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.8, type: "spring", bounce: 0.4 }}
                className="mb-8"
              >
                <h4 className="text-4xl md:text-6xl font-headers text-accent mb-4 leading-tight">
                  {/* <span className="inline-block animate-bounce">🎉</span> */}
                  <span className="bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent font-black">
                    Happy 50th Birthday babu
                  </span>
                  <span >🥹🥹</span>
                  <br />
                  {/* <span className="text-3xl md:text-5xl text-light font-bold">Superstar Babu</span> */}
                  {/* <span className="inline-block animate-bounce delay-200">🎉</span> */}
                </h4>
              </motion.div>

              {/* Inspirational Quote */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="text-xl md:text-2xl text-light mb-8 font-light italic leading-relaxed"
              >
                "Here's to many more years of inspiring performances and making a difference in the world!"
              </motion.p>

              {/* Personal Image Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="relative mb-8"
              >
                <div className="relative max-w-md mx-auto">
                  <img
                    src="/images/surya-img(1).webp"
                    alt="Birthday Tribute"
                    className="w-full h-auto rounded-xl shadow-2xl border-4 border-accent/50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-xl"></div>

                  {/* Floating Heart Emojis */}
                  <div className="absolute -top-4 -right-4 text-3xl animate-bounce">❤️</div>
                  <div className="absolute -bottom-4 -left-4 text-2xl animate-bounce delay-300">🌟</div>
                </div>
              </motion.div>

              {/* Personal Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.6, duration: 0.8 }}
                className="border-t border-accent/30 pt-6"
              >
                <div className="bg-gradient-to-r from-transparent via-accent/10 to-transparent p-6 rounded-xl">
                  <p className="text-lg md:text-xl text-light font-medium mb-4 leading-relaxed">
                    <span className="text-accent font-bold">The boy who grew up watching your movies since childhood.</span>
                    <br />
                    Every frame, every dialogue, every emotion - they shaped my dreams and aspirations.
                  </p>

                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-secondary font-bold text-lg">Created with</span>
                    <span className="text-2xl animate-pulse">💖</span>
                    <span className="text-secondary font-bold text-lg">by</span>
                  </div>

                  <a
                    href="https://www.instagram.com/itz.me.surya/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xl font-bold text-accent hover:text-accent/80 transition-all duration-300 hover:scale-105 underline decoration-2 underline-offset-4"
                  >
                    <span>@itz.me.surya</span>
                    <span className="text-sm">📸</span>
                  </a>

                  <p className="text-sm text-gray/80 italic mt-4 font-light">
                    "A tribute from your biggest fan for your 50th Birthday" ✨
                  </p>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 text-accent/30 text-6xl">🎬</div>
              <div className="absolute bottom-4 right-4 text-secondary/30 text-4xl">⭐</div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default BirthdayWishes;
