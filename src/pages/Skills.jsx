import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";

const skills = [
  { name: "HTML", level: "90%", icon: <FaHtml5 className="text-orange-500 text-4xl ml-2" /> },
  { name: "CSS", level: "85%", icon: <FaCss3Alt className="text-blue-500 text-4xl ml-2" /> },
  { name: "JavaScript", level: "80%", icon: <FaJs className="text-yellow-500 text-4xl ml-2" /> },
  { name: "React", level: "75%", icon: <FaReact className="text-blue-400 text-4xl ml-2" /> },
  { name: "Node.js", level: "70%", icon: <FaNodeJs className="text-green-500 text-4xl ml-2" /> },
];

const Skills = () => {
  return (
    <motion.div 
      className="relative text-center py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/your-background-image.jpg')" }}
      ></div>

      {/* Skills Container */}
      <div className="relative z-10 max-w-4xl mx-auto p-10 bg-gray-900 rounded-lg shadow-lg bg-opacity-90">
        <h2 className="text-4xl font-bold text-white mb-4">My Skills</h2>
        <p className="text-lg text-gray-300 mb-6">Here are some of the technologies I specialize in:</p>

        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center text-left space-x-4">
              <div className="flex items-center space-x-2 w-1/4">
                {skill.icon}
                <p className="text-lg font-semibold text-white">{skill.name}</p>
              </div>
              <div className="w-3/4 bg-gray-700 rounded-full h-4 relative">
                <motion.div 
                  className="bg-blue-500 h-4 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: skill.level }}
                  transition={{ duration: 1 }}
                  style={{ width: skill.level }}
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
