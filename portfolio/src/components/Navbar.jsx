import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-white shadow-md' : 'py-4 bg-transparent'}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-2"
        >
          <span className="text-2xl font-bold text-indigo-600">JZP</span>
          <span className="text-lg font-semibold">Jessica Zunuo</span>
        </motion.div>

        <div className="hidden md:flex space-x-8">
          {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
            <motion.a 
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.1, color: '#6366f1' }}
              className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-indigo-600 text-white px-4 py-2 rounded-full font-medium hover:bg-indigo-700 transition-colors"
        >
          Let's Talk
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;