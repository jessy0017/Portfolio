import React from 'react';
import { motion } from 'framer-motion';
import portforlio from '../assets/portforlio.jpg';

const About = () => {
  const skills = [
    { name: 'React', level: 50 },
    { name: 'Python', level: 20 },
    { name: 'JavaScript', level: 80 },
    { name: 'Node.js', level: 10 },
    { name: 'HTML/CSS', level: 95 },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/3 mb-10 md:mb-0 flex justify-center"
          >
            <div className="relative w-64 h-64 rounded-lg overflow-hidden shadow-xl">
              <img 
                src={portforlio} 
                alt="Jessica Zunuo Puozaa" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-indigo-600 opacity-10"></div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-2/3 md:pl-12"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Who am I?</h3>
            <p className="text-gray-600 mb-6">
              I'm Jessica Zunuo Puozaa, a passionate software engineering student specializing in full-stack development. 
              With a keen eye for detail and a love for problem-solving, I create web applications that are both 
              beautiful and functional.
            </p>
            <p className="text-gray-600 mb-6">
              Currently, I'm diving deeper into back-end development while maintaining my front-end skills. 
              I'm always eager to learn new technologies and collaborate on exciting projects.
            </p>
            <p className="text-gray-600 mb-8">
              When I'm not coding, you can find me contributing to open-source projects, exploring new Python frameworks, 
              or mentoring fellow developers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-indigo-600 h-2.5 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;