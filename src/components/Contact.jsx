import { motion } from 'framer-motion';
import React from 'react';

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="py-20 px-4 sm:px-6 max-w-xl mx-auto text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
      <motion.form
        className="flex flex-col gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-gray-800 text-white" />
        <input type="email" placeholder="Your Email" className="w-full p-3 rounded bg-gray-800 text-white" />
        <textarea rows="5" placeholder="Your Message" className="w-full p-3 rounded bg-gray-800 text-white" />
        <button className="bg-purple-600 hover:bg-purple-700 p-3 rounded text-white font-semibold">Send Message</button>
      </motion.form>
    </motion.section>
  );
};

export default Contact;