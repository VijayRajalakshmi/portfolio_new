import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div 
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center text-white px-6"
      style={{ backgroundImage: "url('/coding-bg.jpg')" }} // Add your image in the public folder
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-3xl bg-black bg-opacity-60 p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-4xl font-bold mb-4 text-blue-400">About Me</h2>
        <p className="text-lg leading-relaxed">
          Hello! I am a passionate <span className="text-blue-300 font-semibold">Front-end Developer</span> 
          with a deep love for crafting visually appealing and highly functional web applications.
          With expertise in <span className="text-blue-300 font-semibold">React.js, JavaScript, and UI/UX design</span>, 
          I thrive on transforming creative ideas into seamless digital experiences.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          Over the years, I have honed my skills in building dynamic, responsive, and 
          user-friendly websites. My goal is to blend aesthetics with performance, ensuring that each 
          project not only looks great but also functions flawlessly. I am constantly learning and staying 
          updated with the latest industry trends to deliver the best solutions.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
