import React, {useState, useEffect} from 'react';

export default function Certificates() {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/certificates/certificates.json`)
      .then((res) => res.json())
      .then((data) => setCertificates(data));
  }, []);

  return (
    <section id="certificates" className="section-certificates fade-in">
      <div className="container">
        <h2 className="section-title">Sertifikalar</h2>
        <ul className="certificate-list">
          {certificates.map(cert => (
            <li key={cert.pdfLink}>
              <a
                href={`${process.env.PUBLIC_URL}${cert.pdfLink}`}
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
