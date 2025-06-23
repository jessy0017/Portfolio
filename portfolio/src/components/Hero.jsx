import { motion } from 'framer-motion';
import portforlio from '../assets/portforlio.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 pt-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mb-10 md:mb-0"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Hi, I'm <span className="text-indigo-600">Jessica</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
            Full-Stack Developer
          </h2>
          <p className="text-gray-600 mb-8 max-w-lg">
            Passionate about creating beautiful, functional web applications. 
            Currently expanding my expertise in back-end development while 
            building innovative solutions.
          </p>
          <div className="flex space-x-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition-colors"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-full font-medium hover:bg-indigo-50 transition-colors"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-100 shadow-xl">
            <img 
              src={portforlio} 
              alt="Jessica Zunuo Puozaa" 
              className="w-full h-full object-cover"
            />
            <motion.div 
              animate={{ 
                rotate: [0, 360],
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 border-2 border-dashed border-indigo-200 rounded-full"
            />
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <a href="#about" className="text-gray-500 hover:text-indigo-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;