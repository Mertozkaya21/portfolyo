// src/components/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Play } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { translations } from '../translations/translations';

const projectList = [
  {
    id: 1,
    title: 'Bilconnect Backend Geliştirme',
    titleEn: 'Bilconnect Backend Development',
    description: 'Bilconnect projesinde backend geliştirici olarak bulundum. Firebase ve Java kullanarak kullanıcı yönetimi, veri saklama ve kimlik doğrulama sistemleri implementasyonu yaptım.',
    descriptionEn: 'I worked as a backend developer in the Bilconnect project. I implemented user management, data storage, and authentication systems using Firebase and Java.',
    repoLink: 'https://github.com/Mertozkaya21/Bilconnect',
    tags: ["Backend" ,"Firebase","Java"],
    icon: "🔥"
  },
  {
    id: 2,
    title: 'Unity Projeleri',
    titleEn: 'Unity Projects',
    description: 'Temel düzeyde Unity kullanarak projeler geliştirdim. Projelerin esas amacı aslında eğlence amaçlı olsa da temel unity mekaniklerini öğrendim. Object Pooling, Game Manager, Coroutines, Spawning, Scene Flow, Data Persistence gibi konularda deneyim kazandım.',
    descriptionEn: 'I developed projects using Unity at a basic level. Although the main purpose of the projects was entertainment, I learned basic Unity mechanics. I gained experience in Object Pooling, Game Manager, Coroutines, Spawning, Scene Flow, Data Persistence, and similar topics.',
    repoLink: 'https://youtu.be/Gc6-w1v-_yk',
    tags: ["Unity" ,"Game Development"],
    icon: "🎮"
  },
  {
    id: 3,
    title: 'UART Protokolü (Basys3)',
    titleEn: 'UART Protocol (Basys3)',
    description: 'Basys3 FPGA kartında UART iletişim protokolünü uyguladım. İki Basys3 kartını bir kabloyla birbirine bağlayarak aralarında veri iletimini sağladım.',
    descriptionEn: 'I implemented the UART communication protocol on the Basys3 FPGA card. I connected two Basys3 cards with a cable to enable data transmission between them.',
    repoLink: 'https://github.com/Mertozkaya21/UART-protocol',
    tags: ["Embedded Software" ,"Basys3", "UART"],
    icon: "⚡"
  },
  {
    id: 4,
    title: 'Bilkent Tanıtım Ofisi Backend',
    titleEn: 'Bilkent Promotion Office Backend',
    description: 'Bilkent Tanıtım Ofisi uygulamasında backend geliştirici olarak Spring Boot kullanarak RESTful servisler yazdım ve SQL tabanlı veritabanı tasarımı gerçekleştirdim.',
    descriptionEn: 'As a backend developer in the Bilkent Promotion Office application, I wrote RESTful services using Spring Boot and implemented SQL-based database design.',
    repoLink: 'https://github.com/Mertozkaya21/CS-319-Project',
    tags: ["Backend" ,"SpringBoot","SQL"],
    icon: "🏢"
  },
  {
    id: 5,
    title: 'Yaş Tahmini',
    titleEn: 'Age Estimation',
    description: 'Farklı CNN mimarileriyle Transfer Learning kullanarak yaş tahmini modeli geliştirdim. UTKFace veri seti üzerinde eğitim yaptım ve performans analizini gerçekleştirdim. Transfer Learning kullanarak farklı CNN mimarilerini kıyasladım.',
    descriptionEn: 'I developed an age estimation model using Transfer Learning with different CNN architectures. I trained on the UTKFace dataset and performed performance analysis. I compared different CNN architectures using Transfer Learning.',
    tags: ["CNN" , "ResNet", "Transfer Learning"],
    icon: "🤖"
  },
  {
    id: 6,
    title: 'NLP Bias Tespiti',
    titleEn: 'NLP Bias Detection',
    description: 'N-gram ,infomration theoretic approach, LLM as a Judge metodlarını kullanarak metin verisindeki önyargıları tespit eden bir proje. Bigram sıklık analizleri ile kelime ilişkilerini değerlendirerek, Kullback-Leibler sapması ve JSD gibi metriklerle bias puanları hesapladım.',
    descriptionEn: 'A project that detects biases in text data using N-gram, information theoretic approach, and LLM as a Judge methods. I evaluated word relationships through bigram frequency analyses and calculated bias scores using metrics like Kullback-Leibler divergence and JSD.',
    tags: ["NLP" ,"N-gram", "LLM", "BERT"],
    icon: "📊"
  }
];

export default function Projects() {
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
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
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

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {t.projects.title}
        </motion.h2>
        
        <motion.div 
          className="projects-grid"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projectList.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="project-card-header">
                <div className="project-icon">
                  <span>{project.icon}</span>
                </div>
                <div className="project-title">
                  <h3>{language === 'tr' ? project.title : project.titleEn}</h3>
                </div>
              </div>

              <div className="project-content">
                <p className="project-description">
                  {language === 'tr' ? project.description : project.descriptionEn}
                </p>
                
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <motion.span 
                      key={idx} 
                      className="project-tag"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {project.repoLink && (
                  <motion.a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {project.repoLink.startsWith('https://youtu') ? (
                      <>
                        <Play size={16} />
                        {t.projects.watchVideo}
                      </>
                    ) : (
                      <>
                        <ExternalLink size={16} />
                        {t.projects.viewDetails}
                      </>
                    )}
                  </motion.a>
                )}
              </div>

              <div className="project-card-bg"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
