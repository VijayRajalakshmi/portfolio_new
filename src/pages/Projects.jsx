import React from "react";
import { motion } from "framer-motion";
import ResumeImage from "/assets/A_sleek_and_modern_UI_design_for_a_Resume_Builder_.png";
import EcommerceImage from "/assets/A_modern_and_stylish_UI_design_for_an_E-commerce_w.png";

const projects = [
  {
    title: "Resume Builder",
    description: "A sleek and modern UI for creating professional resumes with customization options.",
    image: ResumeImage,  // Use imported image
  },
  {
    title: "E-commerce Website",
    description: "A modern and stylish e-commerce UI with a smooth shopping experience and product display.",
    image: EcommerceImage, // Use imported imag e
  }
];

const Projects = () => {
  return (
    <motion.div 
      className="max-w-6xl mx-auto p-10 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold mb-6 text-white">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={project.image} alt={project.title} className="rounded-lg mb-4 w-full h-60 object-cover"/>
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="text-gray-400 mt-2">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
