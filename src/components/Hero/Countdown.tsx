import { useCountdown } from '../../hooks/useCountdown';
import { motion } from 'framer-motion';

const Countdown = ({ targetDate }: { targetDate: string }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  const CountdownItem = ({ value, label }: { value: number; label: string }) => (
    <motion.div 
      className="flex flex-col items-center"
      whileHover={{ scale: 1.1 }}
    >
      <div className="text-4xl sm:text-5xl md:text-7xl font-stats font-bold text-accent">
        {value < 0 ? 0 : value}
      </div>
      <div className="text-base sm:text-lg md:text-xl font-headers uppercase text-gray">{label}</div>
    </motion.div>
  );

  if (days + hours + minutes + seconds <= 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-4xl md:text-6xl font-headers text-center text-accent"
      >
        Happy 50th Birthday, Superstar!
      </motion.div>
    );
  }

  return (
    <div className="flex justify-left sm:justify-center lg:justify-left md:justify-left space-x-2 sm:space-x-4 md:space-x-8">
      <CountdownItem value={days} label="Days" />
      <CountdownItem value={hours} label="Hours" />
      <CountdownItem value={minutes} label="Minutes" />
      <CountdownItem value={seconds} label="Seconds" />
    </div>
  );
};

export default Countdown;
