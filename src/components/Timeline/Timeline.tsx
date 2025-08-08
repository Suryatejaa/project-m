import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Section from '../shared/Section';
import { maheshBabuData } from '../../utils/data';
import './Timeline.css';

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const timelineRef = useRef(null);
  const { career } = maheshBabuData;

  const timelineEvents = [
    { year: 1979, event: 'Debut as a child artist in "Needa"' },
    { year: 1999, event: `Lead actor debut in "${career.debut.film}"` },
    { year: 2003, event: `Breakthrough with "${career.breakthrough[1].film}"` },
    { year: 2006, event: `Industry hit with "${career.definingFilms[0].film}"` },
    { year: 2015, event: `Social impact with "${career.definingFilms[3].film}"` },
    { year: 2019, event: `National Award for "${career.definingFilms[5].film}"` },
    { year: 2027, event: `Upcoming project "${career.upcomingProject.title}"` },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.timeline-item');
      gsap.to('.timeline-line-progress', {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      });

      items.forEach((item) => {
        gsap.from(item as Element, {
          opacity: 0,
          y: 100,
          scrollTrigger: {
            trigger: item as Element,
            start: 'top 80%',
            end: 'top 60%',
            scrub: true,
          },
        });
      });
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="legacy-timeline" title="Legacy Timeline">
      <div ref={timelineRef} className="timeline-container">
        <div className="timeline-line">
          <div className="timeline-line-progress"></div>
        </div>
        <div className="timeline-items">
          {timelineEvents.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-year">{item.year}</div>
                <p className="timeline-event">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Timeline;
