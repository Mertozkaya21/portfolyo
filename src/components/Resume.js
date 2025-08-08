import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, FileText, User, Calendar, MapPin } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { translations } from '../translations/translations';

export default function Resume() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const { language } = useAppContext();
  const t = translations[language];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="resume" className="resume-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {t.resume.title}
        </motion.h2>
        
        <motion.div 
          className="resume-content"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div 
            className="resume-card"
            variants={itemVariants}
            whileHover={{ 
              y: -10,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="resume-header">
              <div className="resume-icon">
                <User size={32} />
              </div>
              <div className="resume-info">
                <h3>{t.hero.name}</h3>
                <p className="resume-subtitle">{t.resume.subtitle}</p>
                <div className="resume-details">
                  <div className="detail-item">
                    <Calendar size={16} />
                    <span>{t.resume.experience}</span>
                  </div>
                  <div className="detail-item">
                    <MapPin size={16} />
                    <span>{t.resume.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="resume-description">
              <p>{t.resume.description}</p>
            </div>

            <motion.div 
              className="resume-actions"
              variants={itemVariants}
            >
              <motion.a
                href={`${process.env.PUBLIC_URL}/CV/Mert_Ozkaya_CV.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="resume-link primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FileText size={20} />
                <span>{t.resume.actions.view}</span>
              </motion.a>
              
              <motion.a
                href={`${process.env.PUBLIC_URL}/CV/Mert_Ozkaya_CV.pdf`}
                download
                className="resume-link secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                <span>{t.resume.actions.download}</span>
              </motion.a>
            </motion.div>

            <div className="resume-bg"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
