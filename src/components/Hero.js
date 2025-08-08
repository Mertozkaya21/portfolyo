// 4. src/components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { translations } from '../translations/translations';

export default function Hero() {
  const { language } = useAppContext();
  const t = translations[language];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="floating-shapes">
          <motion.div className="shape shape-1" variants={floatingVariants} animate="animate" />
          <motion.div className="shape shape-2" variants={floatingVariants} animate="animate" style={{ animationDelay: '1s' }} />
          <motion.div className="shape shape-3" variants={floatingVariants} animate="animate" style={{ animationDelay: '2s' }} />
        </div>
      </div>
      
      <div className="container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-text" variants={itemVariants}>
            <motion.h1 
              className="hero-title"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t.hero.greeting} <span className="highlight">{t.hero.name}</span>
            </motion.h1>
            
            <motion.p 
              className="hero-subtitle"
              variants={itemVariants}
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div 
              className="hero-stats"
              variants={itemVariants}
            >
              <div className="stat">
                <span className="stat-number">4+</span>
                <span className="stat-label">{t.hero.stats.experience}</span>
              </div>
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">{t.hero.stats.projects}</span>
              </div>
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">{t.hero.stats.technologies}</span>
              </div>
            </motion.div>

            <motion.div 
              className="hero-actions"
              variants={itemVariants}
            >
              <motion.a
                href="#contact"
                className="cta-button primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
                {t.hero.actions.contact}
              </motion.a>
              
              <motion.a
                href="#resume"
                className="cta-button secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                {t.hero.actions.downloadCV}
              </motion.a>
            </motion.div>

            <motion.div 
              className="hero-social"
              variants={itemVariants}
            >
              <motion.a
                href="https://github.com/Mertozkaya21"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="social-link"
              >
                <Github size={24} />
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/mertozkaya1"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="social-link"
              >
                <Linkedin size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-visual"
            variants={itemVariants}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="profile-card">
              <div className="profile-image">
                <div className="profile-placeholder">
                  <span>MÖ</span>
                </div>
              </div>
              <div className="profile-info">
                <h3>{t.hero.name}</h3>
                <p>{t.hero.profile.title}</p>
                <div className="tech-stack">
                  <span className="tech-tag">{t.hero.profile.skills.unity}</span>
                  <span className="tech-tag">{t.hero.profile.skills.java}</span>
                  <span className="tech-tag">{t.hero.profile.skills.python}</span>
                  <span className="tech-tag">{t.hero.profile.skills.machineLearning}</span>
                  <span className="tech-tag">{t.hero.profile.skills.embeddedSystems}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
