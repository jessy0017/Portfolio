import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
            <p className="text-gray-600 mb-8">
              Have a project in mind or want to discuss potential opportunities? 
              Feel free to reach out through the form or directly via email.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="text-indigo-600 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Email</h4>
                  <a href="mailto:jessyzunuo@gmail.com" className="text-indigo-600 hover:text-indigo-800 transition-colors">
                    jessyzunuo@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-indigo-600 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Phone</h4>
                  <a href="tel:+233544997520" className="text-indigo-600 hover:text-indigo-800 transition-colors">
                    +233 544997520
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-indigo-600 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Location</h4>
                  <p className="text-gray-600">Accra, Ghana</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-medium text-gray-800 mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/jessy0017"
                  whileHover={{ y: -5 }}
                  className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-shadow text-xl text-gray-800 hover:text-black"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                  <span className="sr-only">GitHub</span>
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/jessica-zunuo-puozaa"
                  whileHover={{ y: -5 }}
                  className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-shadow text-xl text-blue-700 hover:text-blue-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                  <span className="sr-only">LinkedIn</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Me a Message</h3>

              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 transition-colors disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              {submitMessage && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg text-center"
                >
                  {submitMessage}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
