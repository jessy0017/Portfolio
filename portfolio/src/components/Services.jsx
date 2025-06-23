 import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: 'Frontend Development',
      description: 'Building responsive, interactive user interfaces with React, Vue, or vanilla JavaScript.',
      icon: '💻'
    },
    {
      title: 'Backend Development',
      description: 'Creating robust server-side applications with Python, Node.js, and various frameworks.',
      icon: '⚙️'
    },
    {
      title: 'Full-Stack Solutions',
      description: 'End-to-end web application development from concept to deployment.',
      icon: '🌐'
    },
    {
      title: 'API Development',
      description: 'Designing and implementing RESTful APIs for seamless frontend-backend communication.',
      icon: '🔗'
    },
    {
      title: 'UI/UX Design',
      description: 'Creating intuitive user experiences with modern design principles.',
      icon: '🎨'
    },
    {
      title: 'Code Review',
      description: 'Providing constructive feedback to improve code quality and maintainability.',
      icon: '🔍'
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Services</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;