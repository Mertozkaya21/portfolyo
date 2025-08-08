import React from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useAppContext();

  return (
    <motion.button
      className="language-toggle"
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.span
        className="language-text"
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {language === 'tr' ? 'EN' : 'TR'}
      </motion.span>
    </motion.button>
  );
}
