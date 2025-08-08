import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface BackgroundAudioProps {
  audioSrc: string;
  volume?: number; // 0-1
  autoPlay?: boolean;
}

const BackgroundAudio = ({ 
  audioSrc, 
  volume = 0.6,
  autoPlay = true 
}: BackgroundAudioProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;
    
    // Add event listeners
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      audio.currentTime = 0;
      if (isPlaying) {
        audio.play().catch(() => setIsPlaying(false));
      }
    };

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);

    // Try autoplay on mount
    if (autoPlay) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setShowControls(false);
          })
          .catch(() => {
            setIsPlaying(false);
            setShowControls(true); // Show controls if autoplay fails
          });
      }
    }

    // Listen for user interaction to retry audio
    const handleUserInteraction = () => {
      if (!isPlaying && autoPlay) {
        audio.play()
          .then(() => {
            setIsPlaying(true);
            setShowControls(false);
          })
          .catch(() => setShowControls(true));
      }
    };

    // Add interaction listeners
    document.addEventListener('click', handleUserInteraction, { once: true });
    document.addEventListener('touchstart', handleUserInteraction, { once: true });
    document.addEventListener('keydown', handleUserInteraction, { once: true });

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
  }, [volume, autoPlay, isPlaying]);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play()
        .then(() => setShowControls(false))
        .catch(() => console.log('Failed to play audio'));
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        style={{ display: 'none' }}
      >
        <source src={audioSrc} type="audio/mpeg" />
        <source src={audioSrc.replace('.mp3', '.ogg')} type="audio/ogg" />
        <source src={audioSrc.replace('.mp3', '.wav')} type="audio/wav" />
      </audio>

      {/* Audio Controls - only show if autoplay fails */}
      {showControls && (
        <div className="fixed bottom-4 right-4 z-50">
          <button
            onClick={toggleAudio}
            className="bg-accent text-primary p-3 rounded-full shadow-lg hover:bg-accent/90 transition-all duration-300"
            title={isPlaying ? 'Pause background music' : 'Play background music'}
          >
            {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
          </button>
        </div>
      )}
    </>
  );
};

export default BackgroundAudio;
