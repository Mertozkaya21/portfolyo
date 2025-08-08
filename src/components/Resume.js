// src/components/Resume.js

export default function Resume() {
  return (
    <section id="resume" className="section-resume fade-in">
      <div className="container">
        <h2 className="section-title">Özgeçmiş</h2>
        <p>
          Aşağıdaki bağlantıya tıklayarak özgeçmişimi görüntüleyebilirsiniz.
        </p>
        <a
          href={`${process.env.PUBLIC_URL}/CV/Mert_Ozkaya_CV.pdf`}
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
