// src/components/Certificates.js
import React from 'react';
import certificates from '../data/certificates.json';

export default function Certificates() {
  return (
    <section id="certificates" className="section-certificates fade-in">
      <div className="container">
        <h2 className="section-title">Sertifikalar</h2>
        <ul className="certificate-list">
          {certificates.map(cert => (
            <li key={cert.id}>
              <a
                href={cert.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {cert.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
