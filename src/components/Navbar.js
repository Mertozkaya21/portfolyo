import React from 'react';
import { Github, Linkedin } from 'lucide-react';
export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        <nav>
          <ul className="nav-links">
            <li><a href="#projects">Projeler</a></li>
            <li><a href="#certificates">Sertifikalar</a></li>
            <li><a href="#resume">Özgeçmiş</a></li>
            <li><a href="#contact">İletişim</a></li>
          </ul>
        </nav>
        <div className="social-icons">
          <a
            href="https://github.com/Mertozkaya21"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/mertozkaya1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </header>
  );
}
