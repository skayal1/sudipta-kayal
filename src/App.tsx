import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import FeaturedProject from './components/FeaturedProject';
import Contact from './components/Contact';
import { useScrollAnimation } from './hooks/useScrollAnimation';

function App() {
  const { activeSection, setActiveSection } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <FeaturedProject />
      <Contact />
    </div>
  );
}

export default App;