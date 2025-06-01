// src/components/Resume.js
import React from 'react';
import resumeData from '../data/resume.json';

export default function Resume() {
  return (
    <section id="resume" className="section-resume fade-in">
      <div className="container">
        <h2 className="section-title">Özgeçmiş</h2>
        <p>
          Aşağıdaki bağlantıya tıklayarak özgeçmişimi PDF formatında indirebilir ya da görüntüleyebilirsiniz.
        </p>
        <a
          href={resumeData.pdfLink}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-link"
        >
          Özgeçmişi İncele / İndir (PDF)
        </a>
      </div>
    </section>
  );
}
