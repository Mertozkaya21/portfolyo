import React from 'react';
import './App.css';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certificates from './components/Certificates';  
import Resume from './components/Resume';       

function App() {
  return (
    <AppProvider>
      <div className="App">
        <div className="animated-bg"></div>
        <Navbar />
        <main>
          <Hero/>
          <Projects/>
          <Certificates/>
          <Resume/>
          <Contact/>
        </main>
      </div>
    </AppProvider>
  );
}

export default App;
