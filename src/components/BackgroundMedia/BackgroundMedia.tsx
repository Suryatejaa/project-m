import { useEffect, useRef } from 'react';

interface BackgroundMediaProps {
  videoSrc: string;
  audioSrc: string;
  className?: string;
  volume?: number; // 0-1
  ytCredits?: string;
}

const BackgroundMedia = ({ 
  videoSrc, 
  audioSrc, 
  className = '', 
  volume = 0.7, // Default volume set to 70%
  ytCredits 
}: BackgroundMediaProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const audio = audioRef.current;

    if (video) {
      video.volume = 0; // Video is muted, audio plays separately
      video.play().catch(console.log);
    }

    if (audio) {
      audio.volume = volume;
      audio.play().catch(console.log);
    }

    // Sync video and audio if one restarts
    const handleVideoEnded = () => {
      if (video && audio) {
        video.currentTime = 0;
        audio.currentTime = 0;
        video.play().catch(console.log);
        audio.play().catch(console.log);
      }
    };

    const handleAudioEnded = () => {
      if (video && audio) {
        video.currentTime = 0;
        audio.currentTime = 0;
        video.play().catch(console.log);
        audio.play().catch(console.log);
      }
    };

    if (video) video.addEventListener('ended', handleVideoEnded);
    if (audio) audio.addEventListener('ended', handleAudioEnded);

    return () => {
      if (video) video.removeEventListener('ended', handleVideoEnded);
      if (audio) audio.removeEventListener('ended', handleAudioEnded);
    };
  }, [volume]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Background Video - Muted */}
      <video
        ref={videoRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover pointer-events-none"
        style={{
          width: 'calc(100% + 40px)',
          height: 'calc(100% + 40px)',
        }}
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={videoSrc} type="video/mp4" />
        <source src={videoSrc.replace('.mp4', '.webm')} type="video/webm" />
      </video>

      {/* Background Audio */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        style={{ display: 'none' }}
      >
        <source src={audioSrc} type="audio/mpeg" />
        <source src={audioSrc.replace('.mp3', '.ogg')} type="audio/ogg" />
      </audio>

      {/* Credits overlay */}
      {ytCredits && (
        <div className="absolute bottom-4 right-4 z-30">
          <a
            href={ytCredits}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/70 hover:text-white bg-black/50 px-2 py-1 rounded backdrop-blur-sm transition-colors"
          >
            Video Credits: Original Source
          </a>
        </div>
      )}

      {/* Overlay to prevent interaction */}
      <div 
        className="absolute inset-0 bg-transparent z-20 pointer-events-auto cursor-default"
        onClick={(e) => e.preventDefault()}
        onMouseDown={(e) => e.preventDefault()}
      />
    </div>
  );
};

export default BackgroundMedia;
