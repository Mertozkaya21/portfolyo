// src/components/Projects.js
import React from 'react';

const projectList = [
  {
    id: 1,
    title: 'Bilconnect Backend Geliştirme',
    description: 'Bilconnect projesinde backend geliştirici olarak bulundum. Firebase ve Java kullanarak kullanıcı yönetimi, veri saklama ve kimlik doğrulama sistemleri implementasyonu yaptım.',
    repoLink: 'https://github.com/Mertozkaya21/Bilconnect',
    tags: ["Backend" ,"Firebase","Java"]
  },
  {
    id: 2,
    title: 'Unity Projeleri',
    description: 'Temel düzeyde Unity kullanarak projeler geliştirdim. Projelerin esas amacı aslında eğlence amaçlı olsa da'+'temel unity mekaniklerini öğrendim. Object Pooling, Game Manager, Coroutines, Spawning, Scene Flow, Data Persistence gibi konularda deneyim kazandım.',
    repoLink: 'https://youtu.be/Gc6-w1v-_yk',
    tags: ["Unity" ,"Game Development"]
  },
  {
    id: 3,
    title: 'UART Protokolü (Basys3)',
    description: 'Basys3 FPGA kartında UART iletişim protokolünü uyguladım. İki Basys3 kartını bir kabloyla birbirine bağlayarak aralarında veri iletimini sağladım.',
    repoLink: 'https://github.com/Mertozkaya21/UART-protocol',
    tags: ["Embedded Software" ,"Basys3", "UART"]
  },
  {
    id: 4,
    title: 'Bilkent Tanıtım Ofisi Backend',
    description: 'Bilkent Tanıtım Ofisi uygulamasında backend geliştirici olarak Spring Boot kullanarak RESTful servisler yazdım ve SQL tabanlı veritabanı tasarımı gerçekleştirdim.',
    repoLink: 'https://github.com/Mertozkaya21/CS-319-Project',
    tags: ["Backend" ,"SpringBoot","SQL"]
  },
  {
    id: 5,
    title: 'Yaş Tahmini',
    description: 'Farklı CNN mimarileriyle Transfer Learning kullanarak yaş tahmini modeli geliştirdim. UTKFace veri seti üzerinde eğitim yaptım ve performans analizini gerçekleştirdim. Transfer Learning kullanarak farklı CNN mimarilerini kıyasladım.',
    tags: ["CNN" , "ResNet", "Transfer Learning"]
  },
    {
    id: 6,
    title: 'NLP Bias Tespiti',
    description: 'N-gram ,infomration theoretic approach, LLM as a Judge metodlarını kullanarak metin verisindeki önyargıları tespit eden bir proje. Bigram sıklık analizleri ile kelime ilişkilerini değerlendirerek, Kullback-Leibler sapması ve JSD gibi metriklerle bias puanları hesapladım.',
    tags: ["NLP" ,"N-gram", "LLM", "BERT"]
  }
];



export default function Projects() {
  const maxTilt = 10;

  const handleMouseMove = (e) => {
    const cardInner = e.currentTarget.querySelector('.card-inner');
    if (!cardInner) return;  // Eğer .card-inner bulunamazsa çık

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const halfW = rect.width / 2;
    const halfH = rect.height / 2;
    const offsetX = (x - halfW) / halfW;
    const offsetY = (y - halfH) / halfH;

    const rotateY = offsetX * maxTilt;
    const rotateX = -offsetY * maxTilt;
    const scale = 1.02;

    cardInner.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(${scale})
    `;
  };

  const handleMouseLeave = (e) => {
    const cardInner = e.currentTarget.querySelector('.card-inner');
    if (!cardInner) return;
    cardInner.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  return (
    <section id="projects" className="fade-in">
      <div className="container">
        <h2 className="section-title">Projeler</h2>
        <div className="projects-grid">
          {projectList.map(proj => (
            <div
              key={proj.id}
              className="project-card"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* İşte iç katman */}
              <div className="card-inner project-card-content">
                <h3>{proj.title}</h3>
                <div className="project-tags">
                  {proj.tags && proj.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag">{tag}</span>
                  ))}
                </div>
                <p>{proj.description}</p>
                {proj.repoLink && (
                  <a
                    href={proj.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {proj.repoLink.startsWith('https://youtu')
                      ? 'Videoyu İzle'
                      : 'Detayları Görüntüle'}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
