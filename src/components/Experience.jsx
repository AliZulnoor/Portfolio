import { motion } from 'framer-motion';

const skills = ["Image Transformation", "AI Styling", "3D Web Design", "React", "Tailwind CSS", "Three.js"];

const Experience = () => {
  return (
    <motion.section
      className="py-20 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-4xl font-bold mb-10">Our Capabilities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 py-6 rounded-lg hover:bg-purple-600 transition"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;