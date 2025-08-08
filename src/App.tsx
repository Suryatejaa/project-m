import React from 'react';
import { useState, useEffect } from 'react';

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
        return nextIndex > 7 ? 1 : nextIndex; // Reset to 1 when it reaches 8
      });
    }, 5000); // Change image every 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once on mount

  // Dynamically set background image based on imageIndex
  const backgroundImage = `/src/assets/images/bg-${imageIndex}.webp`;

  return (
    <div 
      className="min-h-screen text-light overflow-x-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background Audio - Plays throughout the entire website */}
      <BackgroundAudio 
        audioSrc="/src/assets/audio/mahesh-tribute.mp3"
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
    </div>
  );
};

export default App;
