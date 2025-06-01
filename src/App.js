import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certificates from './components/Certificates';  // Eklendi
import Resume from './components/Resume';              // Eklendi

function App() {
  return (
    <div className="App">
      {/* Arka plana basit bir canlı gradient animasyonu eklemek için */}
      <div className="animated-bg"></div>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Certificates />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}

export default App;
