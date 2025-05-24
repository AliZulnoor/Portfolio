import { motion } from 'framer-motion';

const projects = [
  {
    title: "AI Photo Styler",
    description: "Transforms your uploaded images into artistic styles.",
  },
  {
    title: "Text-to-Image Generator",
    description: "Type anything and watch AI turn it into a picture.",
  },
];

const Projects = () => {
  return (
    <motion.section
      className="py-20 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-4xl font-bold mb-10">Featured Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;