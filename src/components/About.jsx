import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-20 px-4 sm:px-6 md:px-8 max-w-4xl mx-auto text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-4xl font-bold mb-4">About Silkfy</h2>
      <p className="text-gray-400 text-sm sm:text-lg">
        Silkfy is a fun and creative AI tool that transforms your photos into stunning art styles like sketches, cartoons, or digital paintings.
      </p>
    </motion.section>
  );
};

export default About;