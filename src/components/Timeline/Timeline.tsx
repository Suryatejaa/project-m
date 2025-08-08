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
  { year: 1999, event: 'Lead actor debut in "Raja Kumarudu"' },
  { year: 2001, event: 'Breakthrough with "Murari" - supernatural drama success' },
  { year: 2003, event: 'Career defining hit "Okkadu" - First Filmfare Award' },
  { year: 2005, event: '"Athadu" - Future TV phenomenon with 1,500+ telecasts' },
  { year: 2006, event: 'Industry blockbuster "Pokiri" - Superstar status achieved' },
  { year: 2010, event: '"Khaleja" - Cult classic ahead of its time' },
  { year: 2011, event: '"Dookudu" - Cemented superstar status' },
  { year: 2012, event: '"Businessman" - Commercial success with Puri Jagannadh' },
  { year: 2014, event: '"1: Nenokkadine" - Experimental masterpiece' },
  { year: 2015, event: 'Social impact with "Srimanthudu" - Village adoption movement' },
  { year: 2018, event: '"Bharat Ane Nenu" - Political drama with social message' },
  { year: 2019, event: 'National Award for "Maharshi" - Agricultural awareness' },
  { year: 2020, event: '"Sarileru Neekevvaru" - Action-comedy blockbuster' },
  { year: 2021, event: 'Philanthropic initiatives - Education and healthcare focus' },  
  { year: 2022, event: 'Pure Little Hearts Foundation launch - 4,500+ heart surgeries' },
  { year: 2024, event: 'Guntur Kaaram - Blockbuster combo with Trivikram Srinivas' },
  { year: 2027, event: 'Upcoming "SSMB29" with SS Rajamouli' },
];

const detailedTimelineEvents = [
  { 
    year: 1979, 
    event: 'Debut as a child artist in "Needa"',
    details: 'Started acting at age 4, appeared in 9 films as child artist until 1990',
    category: 'Early Career',
    significance: 'Beginning of 45-year cinema journey'
  },
  { 
    year: 1999, 
    event: 'Lead actor debut in "Raja Kumarudu"',
    details: 'Directed by K. Raghavendra Rao, won Nandi Award for Best Male Debut',
    category: 'Breakthrough',
    significance: 'Transition from child artist to leading man'
  },
  { 
    year: 2001, 
    event: 'Breakthrough with "Murari"',
    details: 'Supernatural drama directed by Krishna Vamsi, established his acting credentials',
    category: 'Success',
    significance: 'First major critical and commercial success'
  },
  { 
    year: 2003, 
    event: 'Career defining hit "Okkadu"',
    details: 'Directed by Gunasekhar, won first Filmfare Award for Best Actor - Telugu',
    category: 'Milestone',
    significance: 'Established as a reliable commercial hero'
  },
  { 
    year: 2005, 
    event: '"Athadu" - Future TV phenomenon',
    details: 'Directed by Trivikram, holds record of 1,500+ TV telecasts, highest TRP generator',
    category: 'Cultural Impact',
    significance: 'Created unprecedented television dominance'
  },
  { 
    year: 2006, 
    event: 'Industry blockbuster "Pokiri"',
    details: 'Directed by Puri Jagannadh, highest-grossing Telugu film for years',
    category: 'Superstardom',
    significance: 'Achieved superstar status, pan-India recognition'
  },
  { 
    year: 2010, 
    event: '"Khaleja" - Cult classic ahead of its time',
    details: 'Directed by Trivikram, initially underperformed but gained massive cult following',
    category: 'Cult Classic',
    significance: 'Philosophical depth, considered one of Telugu cinema\'s most intelligent films'
  },
  { 
    year: 2011, 
    event: '"Dookudu" - Cemented superstar status',
    details: 'Directed by Srinu Vaitla, massive blockbuster that confirmed his top position',
    category: 'Peak Success',
    significance: 'Solidified position as Telugu cinema\'s top star'
  },
  {
    year: 2012,
    event: '"Businessman" - Commercial success with Puri Jagannadh',
    details: 'Directed by Puri Jagannadh, marked a successful collaboration',
    category: 'Commercial Success',
    significance: 'Reinforced his box office appeal just with his eyes'
  },
  { 
    year: 2013, 
    event: '"Seethamma Vakitlo Sirimalle Chettu"',
    details: 'Multi-starrer family drama with Venkatesh, won Filmfare Award',
    category: 'Family Drama',
    significance: 'Showcased family values and multi-generational appeal'
  },
  { 
    year: 2014, 
    event: '"1: Nenokkadine" - Experimental masterpiece',
    details: 'Directed by Sukumar, psychological thriller with international locations',
    category: 'Experimental',
    significance: 'Commercial disappointment but re-evaluated as cult classic on OTT'
  },
  { 
    year: 2015, 
    event: 'Social impact with "Srimanthudu"',
    details: 'Directed by Koratala Siva, inspired village adoption movement across India',
    category: 'Social Impact',
    significance: 'Created real-life social change, celebrities adopted villages'
  },
  { 
    year: 2018, 
    event: '"Bharat Ane Nenu" - Political drama',
    details: 'Directed by Koratala Siva, played Chief Minister role with social message',
    category: 'Political Drama',
    significance: 'Combined entertainment with political awareness'
  },
  { 
    year: 2019, 
    event: 'National Award for "Maharshi"',
    details: 'Won National Film Award for Best Popular Film, inspired weekend farming',
    category: 'National Recognition',
    significance: 'Government recognition, created agricultural awareness movement'
  },
  { 
    year: 2020, 
    event: '"Sarileru Neekevvaru" - Action-comedy blockbuster',
    details: 'Directed by Anil Ravipudi, army officer role, massive commercial success',
    category: 'Commercial Success',
    significance: 'Proved his box office dominance continued'
  },
  { 
    year: 2021, 
    event: 'Philanthropic milestone - Healthcare focus',
    details: 'Donated ₹30 crore annually (30% of income), helped 1,000+ children with medical treatment',
    category: 'Philanthropy',
    significance: 'Established reputation as India\'s most charitable superstar'
  },
  { 
    year: 2022, 
    event: 'Pure Little Hearts Foundation launch',
    details: 'Partnership with Rainbow Children\'s Heart Institute, 4,500+ heart surgeries funded',
    category: 'Foundation Work',
    significance: 'Systematic approach to pediatric cardiac care for underprivileged children'
  },
  { 
    year: 2024, 
    event: '"Guntur Kaaram" - Latest release',
    details: 'Directed by Trivikram Srinivas, marked their third collaboration',
    category: 'Recent Work',
    significance: 'Continued successful partnership with acclaimed director'
  },
  { 
    year: 2025, 
    event: '50th Birthday Milestone - August 9th',
    details: 'Celebrating 25 years as lead actor, 45 years total in cinema',
    category: 'Personal Milestone',
    significance: 'Golden jubilee celebration of legendary career'
  },
  { 
    year: 2027, 
    event: 'Upcoming "SSMB29" with SS Rajamouli',
    details: 'A Globetrotting action thriller expected in 2027, adopting muscular physique',
    category: 'Future Projects',
    significance: 'Collaboration with India\'s most celebrated director'
  }
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
          {detailedTimelineEvents.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-year">{item.year}</div>
                <p className="timeline-event">{item.event}</p>
                <p className="timeline-details">{item.details}</p>
                <p className="timeline-category">{item.category}</p>
                <p className="timeline-significance">{item.significance}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Timeline;
