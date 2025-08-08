import { Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
    return (
      <footer className="py-2 text-center bg-gradient-to-r from-primary border-none border-gray-800 space-y-4">
        <div className='flex flex-col items-center'>
        <p className="text-gray flex items-center justify-center gap-2">
          Designed with ❤️ for Superstar Mahesh Babu's 50th Birthday.
        </p>
        <p className="text-sm text-gray-600 mt-2">
          This is a fan-made project and not for commercial use. All information is based on publicly available data.
        </p>
        <p className="text-sm text-gray-500">Developed by: <a href="https://www.instagram.com/itz.me.surya/" target="_blank" rel="noopener noreferrer" className="underline">itz.me.surya</a></p>
        </div>
        {/* Credits Section */}
        <div className='flex flex-row gap-1 justify-center items-center text-gray-500 text-xs'>
          <p className="text-xs text-gray-600">Audio Credits:</p>
          <a
            href="https://youtu.be/VXCzunaWMa4?si=0Vp4HnHo99eZ0Cz_"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex underline items-center gap-2 text-xs text-gray-500 hover:text-secondary transition-colors"
          >
            <ExternalLink size={12} />
            YouTube
          </a>
      <span>|</span>
          <p className="text-xs text-gray-600">Reel Credits:</p>
          <a
            href="https://www.instagram.com/reel/C35CqgxPeYg/?igsh=N2g1cTFhN2J4aGdr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center underline gap-2 text-xs text-gray-500 hover:text-secondary transition-colors"
          >
            <ExternalLink size={12} />
            Instagram
          </a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  