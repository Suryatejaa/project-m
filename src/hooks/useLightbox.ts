import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';
import { useEffect } from 'react';

export const useLightbox = () => {
  useEffect(() => {
    const lightbox = GLightbox({
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
    });

    return () => {
      lightbox.destroy();
    };
  }, []);
};
