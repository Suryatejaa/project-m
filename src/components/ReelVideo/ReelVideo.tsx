import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface ReelVideoProps {
  videoSrc: string;
  className?: string;
  title?: string;
}

const ReelVideo = ({ videoSrc, className = '', title }: ReelVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(console.log);
    }
  }, []);

  return (
    <motion.div 
      className={`relative overflow-hidden rounded-lg shadow-2xl border-2 border-white/10 ${className}`}
      style={{
        aspectRatio: '9/16', // Reel size (portrait)
        width: `${2.2 * 280}px`, // 0.2 * original width
        maxWidth: '90vw',
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Video */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={videoSrc} type="video/mp4" />
        <source src={videoSrc.replace('.mp4', '.webm')} type="video/webm" />
      </video>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>

      {/* Title overlay */}
      {title && (
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white text-lg font-bold drop-shadow-lg">
            {title}
          </h3>
        </div>
      )}

      {/* Reel-style play indicator */}
      <div className="absolute top-4 right-4">
        <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
      </div>
    </motion.div>
  );
};

export default ReelVideo;
