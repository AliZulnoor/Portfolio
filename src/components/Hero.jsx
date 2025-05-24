import { motion } from 'framer-motion';
import React from 'react';

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 sm:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-2xl sm:text-4xl md:text-6xl font-extrabold mb-4"
      >
        Turn Photos into Art with AI
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-sm sm:text-lg text-gray-400 max-w-xl mb-6"
      >
        Silkfy lets you turn selfies into sketches, cartoons, or even dreamscapes.
      </motion.p>

      <motion.button
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-md text-white font-semibold"
      >
        Try It Now
      </motion.button>
    </section>
  );
};

export default Hero;