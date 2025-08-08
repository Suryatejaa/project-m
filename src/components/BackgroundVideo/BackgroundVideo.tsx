import { useEffect, useRef, useState } from 'react';

interface BackgroundVideoProps {
  videoId: string;
  className?: string;
  volume?: number; // 0-100
}

const BackgroundVideo = ({ videoId, className = '', volume = 90 }: BackgroundVideoProps) => {
  const [useSimpleEmbed, setUseSimpleEmbed] = useState(false);

  useEffect(() => {
    // For localhost development, use simple iframe embed to avoid CORS issues
    if (window.location.hostname === 'localhost') {
      setUseSimpleEmbed(true);
    }
  }, []);

  // Simple iframe embed for localhost
  if (useSimpleEmbed) {
    return (
      <div className={`relative w-full h-full overflow-hidden ${className}`}>
        <iframe
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: '120%',
            height: '120%',
            minWidth: '120%',
            minHeight: '120%',
          }}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&cc_load_policy=0&playsinline=1&mute=0&start=0`}
          title="Background Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={false}
        />
        
        {/* Overlay to prevent any interaction */}
        <div 
          className="absolute inset-0 bg-transparent z-20 pointer-events-auto cursor-default"
          onClick={(e) => e.preventDefault()}
          onMouseDown={(e) => e.preventDefault()}
        />
      </div>
    );
  }

  // Full API implementation for production
  return <YouTubeAPIPlayer videoId={videoId} volume={volume} className={className} />;
};

// YouTube API Player Component for production
const YouTubeAPIPlayer = ({ videoId, volume, className }: BackgroundVideoProps) => {
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAPIReady, setIsAPIReady] = useState(false);

  useEffect(() => {
    // Check if YouTube API is already loaded
    if (window.YT && window.YT.Player) {
      setIsAPIReady(true);
      return;
    }

    // Load YouTube IFrame API
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    script.async = true;
    document.head.appendChild(script);

    // Set up the callback for when API is ready
    window.onYouTubeIframeAPIReady = () => {
      setIsAPIReady(true);
    };

    return () => {
      // Cleanup
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch (error) {
          console.log('Player cleanup completed');
        }
      }
    };
  }, []);

  useEffect(() => {
    if (!isAPIReady || !containerRef.current) return;

    // Create YouTube player
    playerRef.current = new window.YT.Player(containerRef.current, {
      height: '100%',
      width: '100%',
      videoId: videoId,
      playerVars: {
        autoplay: 1,
        loop: 1,
        playlist: videoId,
        controls: 0,
        showinfo: 0,
        rel: 0,
        iv_load_policy: 3,
        modestbranding: 1,
        disablekb: 1,
        fs: 0,
        cc_load_policy: 0,
        playsinline: 1,
        enablejsapi: 1,
        mute: 0,
        start: 0,
      },
      events: {
        onReady: (event: any) => {
          try {
            event.target.setVolume(volume);
            event.target.playVideo();
          } catch (error) {
            console.log('YouTube player ready, but some features may be limited');
          }
        },
        onStateChange: (event: any) => {
          try {
            // If video ends, replay it
            if (event.data === window.YT.PlayerState.ENDED) {
              event.target.seekTo(0);
              event.target.playVideo();
            }
          } catch (error) {
            console.log('Video state change handled with limited functionality');
          }
        },
        onError: (event: any) => {
          console.log('YouTube player error:', event.data);
        },
      },
    });
  }, [isAPIReady, videoId, volume]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* YouTube Player Container */}
      <div 
        ref={containerRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: '120%',
          height: '120%',
          minWidth: '120%',
          minHeight: '120%',
        }}
      />
      
      {/* Overlay to prevent any interaction */}
      <div 
        className="absolute inset-0 bg-transparent z-20 pointer-events-auto cursor-default"
        onClick={(e) => e.preventDefault()}
        onMouseDown={(e) => e.preventDefault()}
      />
    </div>
  );
};

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default BackgroundVideo;
