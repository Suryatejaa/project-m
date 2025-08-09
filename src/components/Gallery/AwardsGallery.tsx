import Section from '../shared/Section';
import { maheshBabuData } from '../../utils/data';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Award, Star, Crown, Medal, Zap, Calendar, Film, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import './AwardsGallery.css';

const AwardsGallery = () => {
  const { achievements } = maheshBabuData;
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCardExpansion = (index: number) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const getAwardIcon = (name: string) => {
    if (name.includes('National')) return <Crown size={40} className="text-red-200" />;
    if (name.includes('Nandi')) return <Medal size={40} className="text-red-300" />;
    if (name.includes('Filmfare')) return <Trophy size={40} className="text-red-400" />;
    if (name.includes('SIIMA')) return <Star size={40} className="text-red-500" />;
    if (name.includes('CineMAA')) return <Award size={40} className="text-red-600" />;
    return <Zap size={40} className="text-red-700" />;
  };

  const getCategoryGradient = (category: string) => {
    if (category.includes('Government')) return 'from-red-900 via-red-800 to-black';
    if (category.includes('State')) return 'from-red-800 via-red-700 to-red-900';
    if (category.includes('Industry')) return 'from-red-700 via-red-600 to-red-800';
    if (category.includes('Pan-South')) return 'from-red-600 via-red-500 to-red-700';
    if (category.includes('Recognition')) return 'from-red-500 via-red-400 to-red-600';
    return 'from-red-400 via-red-500 to-red-700';
  };

  return (
    <Section id="awards-gallery" title="🏆 Awards & Recognition">
      <div className="mb-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-lg md:text-xl text-secondary font-quotes italic"
        >
          "25 Awards • 35 Nominations • 2 Decades of Excellence"
        </motion.div>
        <div className="text-sm md:text-base text-gray mt-2">
          Telugu Cinema's Most Awarded Contemporary Actor
        </div>
      </div>

      <div className="awards-container">
        {achievements.awards.map((award, index) => (
          <motion.div 
            key={index} 
            className="award-card-enhanced"
            initial={{ opacity: 0, y: 50, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            whileHover={{ 
              y: -20, 
              rotateY: 10,
              scale: 1.05,
              transition: { type: 'spring', stiffness: 300, damping: 20 }
            }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              type: 'spring',
              stiffness: 100
            }}
          >
            {/* Award Header */}
            <div className={` flex space-x-2 items-center justify-center text-center award-header bg-gradient-to-r ${getCategoryGradient(award.category)}`}>
              <div className="award-icon-enhanced">
                {getAwardIcon(award.name)}
              </div>
              <div className="award-category">
                {award.category}
              </div>
            </div>

            {/* Award Content */}
            <div className="award-content">
              <h3 className="award-name-enhanced">{award.name}</h3>
              
              {award.count && (
                <div className="award-count-enhanced">
                  <span className="count-number">{award.count}</span>
                  <span className="count-text">Awards</span>
                </div>
              )}

              {award.for && (
                <div className="award-for-enhanced">
                  <Film size={16} className="inline mr-2" />
                  {award.for}
                </div>
              )}

              {award.year && (
                <div className="award-year">
                  <Calendar size={16} className="inline mr-2" />
                  {award.year}
                </div>
              )}

              {award.significance && (
                <div className="award-significance">
                  <div className="significance-label">Achievement</div>
                  <div className="significance-text">{award.significance}</div>
                </div>
              )}

              {/* Award Details */}
              {award.details && award.details.length > 0 && (
                <>
                  {/* Toggle Button for Mobile */}
                  <button
                    onClick={() => toggleCardExpansion(index)}
                    className="details-toggle-btn md:hidden"
                  >
                    <span>View Award History</span>
                    {expandedCards.includes(index) ? 
                      <ChevronUp size={20} /> : 
                      <ChevronDown size={20} />
                    }
                  </button>

                  {/* Award Details - Hidden by default, shown on hover (desktop) or toggle (mobile) */}
                  <div 
                    className={`award-details ${expandedCards.includes(index) ? 'mobile-expanded' : ''}`}
                  >
                    <div className="details-header">Award History</div>
                    <div className="details-list">
                      {award.details.slice(0, 3).map((detail, idx) => (
                        <div key={idx} className="detail-item">
                          <span className="detail-year">{detail.year}</span>
                          <span className="detail-film">{detail.film || detail.award}</span>
                        </div>
                      ))}
                      {award.details.length > 3 && (
                        <div className="detail-more">
                          +{award.details.length - 3} more...
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Award Glow Effect */}
            <div className={`award-glow bg-gradient-to-r ${getCategoryGradient(award.category)}`}></div>
          </motion.div>
        ))}
      </div>

      {/* Career Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="career-stats"
      >
        <div className="stats-grid">
          <div className="stat-item">
            <Trophy className="stat-icon text-red-400" />
            <div className="stat-number">25+</div>
            <div className="stat-label">Total Awards</div>
          </div>
          <div className="stat-item">
            <Star className="stat-icon text-red-300" />
            <div className="stat-number">35+</div>
            <div className="stat-label">Nominations</div>
          </div>
          <div className="stat-item">
            <Calendar className="stat-icon text-red-500" />
            <div className="stat-number">25</div>
            <div className="stat-label">Years</div>
          </div>
          <div className="stat-item">
            <Crown className="stat-icon text-red-600" />
            <div className="stat-number">1</div>
            <div className="stat-label">National Award</div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default AwardsGallery;
