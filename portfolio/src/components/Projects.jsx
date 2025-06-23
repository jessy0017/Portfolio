import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with React frontend and Django REST framework backend.',
      tags: ['React', 'Django', 'Redux', 'Stripe'],
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates using Socket.io.',
      tags: ['Node.js', 'Express', 'MongoDB', 'Socket.io'],
      link: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather application with 5-day forecasts and location search.',
      tags: ['React', 'Chart.js', 'Weather API'],
      link: '#'
    },
    {
      title: 'Recipe Finder',
      description: 'Search and save your favorite recipes with nutritional information.',
      tags: ['Python', 'Flask', 'PostgreSQL'],
      link: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website for a photographer client.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: '#'
    },
    {
      title: 'Chat Application',
      description: 'Real-time chat application with user authentication and rooms.',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      link: '#'
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-indigo-100 flex items-center justify-center">
                <span className="text-5xl text-indigo-600">📁</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <motion.a
                  href={project.link}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
                >
                  View Project →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition-colors"
          >
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;