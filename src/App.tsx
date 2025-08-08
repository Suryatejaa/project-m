import React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Hero from './components/Hero/Hero';
import EarlyLife from './components/EarlyLife/EarlyLife';
import FamilyLegacy from './components/FamilyLegacy/FamilyLegacy';
import CareerMilestones from './components/CareerMilestones/CareerMilestones';
import RecordsAchievements from './components/RecordsAchievements/RecordsAchievements';
import PhilanthropicImpact from './components/PhilanthropicImpact/PhilanthropicImpact';
import AwardsGallery from './components/Gallery/AwardsGallery';
import BusinessVentures from './components/BusinessVentures/BusinessVentures';
import CurrentProjects from './components/CurrentProjects/CurrentProjects';
import Timeline from './components/Timeline/Timeline';
import BirthdayWishes from './components/BirthdayWishes/BirthdayWishes';
import CultClassics from './components/CultClassics/CultClassics';
import ActionLegacy from './components/ActionLegacy/ActionLegacy';
import FamilyAudience from './components/FamilyAudience/FamilyAudience';
import VideoTribute from './components/VideoTribute/VideoTribute';
import BackgroundAudio from './components/BackgroundAudio/BackgroundAudio';

const App = () => {
  const [imageIndex, setImageIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex(prevIndex => {
        const nextIndex = prevIndex + 1;
        return nextIndex > 18 ? 1 : nextIndex; // Reset to 1 when it reaches 8
      });
    }, 5000); // Change image every 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="min-h-screen text-light overflow-x-hidden relative">
      {/* Smooth Animated Background with Framer Motion */}
      <AnimatePresence mode="wait">
        <motion.div
          key={imageIndex}
          className="fixed inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/images/bg-${imageIndex}.webp)`,
            zIndex: -1
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ 
            duration: 0.6, 
            ease: "easeInOut" 
          }}
        />
      </AnimatePresence>

      {/* Background Audio - Plays throughout the entire website */}
      <BackgroundAudio 
        audioSrc="/audio/mahesh-tribute.mp3"
        volume={0.4}
        autoPlay={true}
      />
      
      <Header />
      <main>
        <Hero />
        <VideoTribute />
        <EarlyLife />
        <FamilyLegacy />
        <FamilyAudience />
        <CareerMilestones />
        <Timeline />
        <ActionLegacy />
        <CultClassics />
        <RecordsAchievements />
        <PhilanthropicImpact />
        <AwardsGallery />
        <BusinessVentures />
        <CurrentProjects />
        <BirthdayWishes />
      </main>
      <Footer />
      
      {/* Vercel Analytics & Performance Monitoring */}
      <Analytics />
      <SpeedInsights />
    </div>
  );
};

export default App;
