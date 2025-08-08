import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Send } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { translations } from '../translations/translations';

export default function Contact() {
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

  const contactInfo = [
    {
      icon: Mail,
      label: t.contact.email,
      value: "mertozkaya2k1@gmail.com",
      link: "mailto:mertozkaya2k1@gmail.com"
    },
    {
      icon: MapPin,
      label: t.contact.location,
      value: t.contact.locationValue,
      link: null
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {t.contact.title}
        </motion.h2>
        
        <motion.div 
          className="contact-content"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div 
            className="contact-card"
            variants={itemVariants}
            whileHover={{ 
              y: -10,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="contact-header">
              <div className="contact-icon">
                <Send size={32} />
              </div>
              <div className="contact-info">
                <h3>{t.contact.subtitle}</h3>
                <p>{t.contact.description}</p>
              </div>
            </div>

            <div className="contact-methods">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={contact.label}
                  className="contact-method"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="method-icon">
                    <contact.icon size={20} />
                  </div>
                  <div className="method-info">
                    <span className="method-label">{contact.label}</span>
                    {contact.link ? (
                      <motion.a
                        href={contact.link}
                        target={contact.label === t.contact.email ? "_self" : "_blank"}
                        rel="noopener noreferrer"
                        className="method-value"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {contact.value}
                      </motion.a>
                    ) : (
                      <span className="method-value">{contact.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="contact-actions"
              variants={itemVariants}
            >
              <motion.a
                href="mailto:mertozkaya2k1@gmail.com"
                className="contact-button primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
                <span>{t.contact.sendEmail}</span>
              </motion.a>
            </motion.div>

            <div className="contact-bg"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
