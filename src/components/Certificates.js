import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileText, ExternalLink, Award } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { translations } from '../translations/translations';

export default function Certificates() {
  const [certificates, setCertificates] = useState([]);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const { language } = useAppContext();
  const t = translations[language];

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/certificates/certificates.json`)
      .then((res) => res.json())
      .then((data) => setCertificates(data));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="certificates" className="certificates-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {t.certificates.title}
        </motion.h2>
        
        <motion.div 
          className="certificates-grid"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.pdfLink}
              className="certificate-card"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="certificate-icon">
                <Award size={24} />
              </div>
              
              <div className="certificate-content">
                <h3 className="certificate-title">{cert.title}</h3>
                
                <motion.a
                  href={`${process.env.PUBLIC_URL}${cert.pdfLink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-link"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FileText size={16} />
                  <span>{t.certificates.viewCertificate}</span>
                  <ExternalLink size={14} />
                </motion.a>
              </div>

              <div className="certificate-bg"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
