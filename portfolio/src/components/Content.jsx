// import { motion } from 'framer-motion';
// import { useState } from 'react';

// const Content = () => {
//   const [activeTab, setActiveTab] = useState('articles');
  
//   const contentItems = {
//     articles: [
//       {
//         title: 'Getting Started with React Hooks',
//         excerpt: 'Learn how to use React Hooks to simplify your functional components and manage state effectively.',
//         date: 'May 15, 2023',
//         readTime: '5 min read',
//         tags: ['React', 'JavaScript']
//       },
//       {
//         title: 'Python Django vs Flask: Which to Choose?',
//         excerpt: 'A comprehensive comparison between Django and Flask for your next Python web project.',
//         date: 'April 2, 2023',
//         readTime: '8 min read',
//         tags: ['Python', 'Backend']
//       },
//       {
//         title: 'The Power of Tailwind CSS',
//         excerpt: 'Why I switched from traditional CSS to Tailwind and how it improved my workflow.',
//         date: 'March 10, 2023',
//         readTime: '6 min read',
//         tags: ['CSS', 'Frontend']
//       }
//     ],
//     tutorials: [
//       {
//         title: 'Building a REST API with Node.js',
//         excerpt: 'Step-by-step guide to creating a robust REST API using Express and MongoDB.',
//         date: 'June 5, 2023',
//         readTime: '12 min read',
//         tags: ['Node.js', 'API']
//       },
//       {
//         title: 'Authentication in React Apps',
//         excerpt: 'Implementing JWT authentication in your React applications with protected routes.',
//         date: 'May 22, 2023',
//         readTime: '10 min read',
//         tags: ['React', 'Security']
//       }
//     ],
//     notes: [
//       {
//         title: 'JavaScript Array Methods Cheatsheet',
//         excerpt: 'Quick reference for the most useful JavaScript array methods with examples.',
//         date: 'June 10, 2023',
//         readTime: '3 min read',
//         tags: ['JavaScript']
//       },
//       {
//         title: 'Git Commands I Use Daily',
//         excerpt: 'My essential Git commands for efficient version control workflow.',
//         date: 'April 18, 2023',
//         readTime: '4 min read',
//         tags: ['Git']
//       }
//     ]
//   };

//   return (
//     <section id="content" className="py-20 bg-white">
//       <div className="container mx-auto px-6">
//         <motion.div 
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Content</h2>
//           <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
//           <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//             Articles, tutorials, and notes sharing my knowledge and experiences in software development.
//           </p>
//         </motion.div>

//         <motion.div 
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="mb-12"
//         >
//           <div className="flex justify-center space-x-2">
//             {['articles', 'tutorials', 'notes'].map((tab) => (
//               <motion.button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className={`px-6 py-2 rounded-full font-medium transition-colors ${
//                   activeTab === tab 
//                     ? 'bg-indigo-600 text-white' 
//                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                 }`}
//               >
//                 {tab.charAt(0).toUpperCase() + tab.slice(1)}
//               </motion.button>
//             ))}
//           </div>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {contentItems[activeTab].map((item, index) => (
//             <motion.div 
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -5 }}
//               className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
//             >
//               <div className="h-48 bg-indigo-100 flex items-center justify-center">
//                 <span className="text-5xl text-indigo-600">
//                   {activeTab === 'articles' ? '📝' : activeTab === 'tutorials' ? '🎓' : '📓'}
//                 </span>
//               </div>
//               <div className="p-6">
//                 <div className="flex justify-between items-start mb-2">
//                   <span className="text-sm text-gray-500">{item.date}</span>
//                   <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded">
//                     {item.readTime}
//                   </span>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
//                 <p className="text-gray-600 mb-4">{item.excerpt}</p>
//                 <div className="flex flex-wrap gap-2">
//                   {item.tags.map((tag, i) => (
//                     <span key={i} className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//                 <motion.a
//                   href="#"
//                   whileHover={{ x: 5 }}
//                   className="mt-4 inline-block text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
//                 >
//                   Read more →
//                 </motion.a>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div 
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           viewport={{ once: true }}
//           className="text-center mt-12"
//         >
//           <motion.a
//             href="#"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-block border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-full font-medium hover:bg-indigo-50 transition-colors"
//           >
//             View All {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Content;