import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <h2 className="text-2xl font-bold mb-2">Jessica Zunuo Puozaa</h2>
            <p className="text-gray-400">Full-Stack Developer</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            <motion.a
              href="https://github.com/jessy0017"
              whileHover={{ y: -5 }}
              className="text-gray-400 hover:text-white transition-colors text-2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">GitHub</span>
              <FaGithub />
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/jessica-zunuo-puozaa"
              whileHover={{ y: -5 }}
              className="text-gray-400 hover:text-white transition-colors text-2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin />
            </motion.a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400"
        >
          <p>© {currentYear} Jessica Zunuo Puozaa. All rights reserved.</p>
          <p className="mt-2"></p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
