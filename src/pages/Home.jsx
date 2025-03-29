import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const profilePic = "/assets/image.png"; // Profile image

const gradientVariants = {
  initial: {
    background:
      "linear-gradient(135deg, #ff9a9e, #fad0c4)",
  },
  animate: {
    background: [
      "linear-gradient(135deg, #ff9a9e, #fad0c4)",
      "linear-gradient(135deg, #a18cd1, #fbc2eb)",
      "linear-gradient(135deg, #fad0c4, #ffd1ff)",
      "linear-gradient(135deg, #fbc2eb, #a6c1ee)",
    ],
    transition: {
      duration: 10,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const Home = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Show typewriter effect after the profile animation
    const timer = setTimeout(() => {
      setShowText(true);
    }, 1000); // 1-second delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="flex flex-col md:flex-row items-center justify-center min-h-screen w-full"
      variants={gradientVariants}
      initial="initial"
      animate="animate"
    >
      {/* Profile Image Animation */}
      <motion.img
        src={profilePic}
        alt="Profile"
        className="w-48 h-48 rounded-full border-4 border-white shadow-lg"
        initial={{ opacity: 0, y: -50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Typewriter Effect with Delay */}
      {showText && (
        <div className="ml-0 md:ml-6 text-2xl font-semibold text-gray-800">
          <Typewriter
            options={{
              strings: [
                "I'm a React Developer",
                "I'm a Frontend Developer",
                "I'm a Freelancer",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
            }}
          />
        </div>
      )}
    </motion.div>
  );
};

export default Home;
