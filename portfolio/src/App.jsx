import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
//import Content from './components/Content'; // Add this import
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
  const anchors = document.querySelectorAll('a[href^="#"]');
  const handleClick = function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  anchors.forEach(anchor => anchor.addEventListener('click', handleClick));

  return () => {
    anchors.forEach(anchor => anchor.removeEventListener('click', handleClick));
  };
}, []);


  return (
    <div className="font-sans text-gray-800">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-2 bg-indigo-600 z-50 origin-left" 
        style={{ scaleX }}
      />

      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;