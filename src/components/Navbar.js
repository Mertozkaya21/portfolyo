import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { translations } from '../translations/translations';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language } = useAppContext();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const navItems = [
    { href: "#projects", label: t.nav.projects },
    { href: "#certificates", label: t.nav.certificates },
    { href: "#resume", label: t.nav.resume },
    { href: "#contact", label: t.nav.contact }
  ];

  return (
    <motion.header 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container">
        <motion.div 
          className="navbar-brand"
          whileHover={{ scale: 1.05 }}
        >
        <a href="#hero" className="logo">
          <img src={`${process.env.PUBLIC_URL}/favicon.svg`} alt="Logo" className="logo-img" />
        </a>
        </motion.div>

        <nav className="nav-desktop">
          <ul className="nav-links">
            {navItems.map((item, index) => (
              <motion.li 
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.a
                  href={item.href}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="nav-link"
                >
                  {item.label}
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </nav>

        <div className="navbar-controls">
          <div className="social-icons">
            <motion.a
              href="https://github.com/Mertozkaya21"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="social-icon"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/mertozkaya1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="social-icon"
            >
              <Linkedin size={20} />
            </motion.a>
          </div>

          <div className="toggle-controls">
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>

        <motion.button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="mobile-menu"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <ul className="mobile-nav-links">
                {navItems.map((item, index) => (
                  <motion.li 
                    key={item.href}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="mobile-nav-link"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              
              <div className="mobile-controls">
                <ThemeToggle />
                <LanguageToggle />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
