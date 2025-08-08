import Section from '../shared/Section';
import { maheshBabuData } from '../../utils/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const CareerMilestones = () => {
  const { career } = maheshBabuData;

  return (
    <Section id="career-milestones" title="Career Milestones">
      <div className="container mx-auto">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
        >
          {career.definingFilms.map((film, index) => (
            <SwiperSlide key={index} style={{ width: '300px', height: '450px' }}>
              <div className="relative w-full h-full rounded-lg overflow-hidden glassmorphism">
                <img src={`/src/assets/images/${film.image}`} alt={film.film} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50">
                  <h3 className="text-2xl font-headers text-accent">{film.film}</h3>
                  <p className="text-lg text-light">{film.year}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  );
};

export default CareerMilestones;
