import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div 
      className="relative flex flex-col items-center justify-center min-h-screen px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background with Overlay */}
      <div className="absolute inset-0 bg-[url('/your-gif.gif')] bg-cover bg-center opacity-30"></div>

      <div className="relative bg-black bg-opacity-50 p-10 rounded-2xl shadow-lg max-w-2xl w-full backdrop-blur-md">
        <h2 className="text-4xl font-bold text-white text-center mb-4">Contact Me</h2>
        <p className="text-lg text-gray-300 text-center mb-6">Feel free to reach out for collaborations or any inquiries.</p>
        
        <form className="space-y-4">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full p-3 border border-gray-600 bg-transparent text-white rounded-lg focus:ring focus:ring-blue-500"
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="w-full p-3 border border-gray-600 bg-transparent text-white rounded-lg focus:ring focus:ring-blue-500"
          />
          <textarea 
            placeholder="Your Message" 
            className="w-full p-3 border border-gray-600 bg-transparent text-white rounded-lg focus:ring focus:ring-blue-500" 
            rows="4"
          ></textarea>
          <button 
            type="submit" 
            className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-full shadow-lg hover:scale-105 transition transform"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
