import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import "./LoadingScreen.css";

// Import all icons dynamically
const iconPaths = [
  "/assets/icons/shirt.png",
  "/assets/icons/shoes.png",
  "/assets/icons/sunglasses.png",
  "/assets/icons/sandals.png"
];

const LoadingScreen = () => {
  const [currentIcon, setCurrentIcon] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % iconPaths.length);
    }, 480); // Faster transition speed (0.5s)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-container">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIcon}
          src={iconPaths[currentIcon]}
          alt="Loading Icon"
          className="loading-icon"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }} // Faster transition (0.3s)
        />
      </AnimatePresence>
      <motion.p
        className="loading-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }} // Faster text animation
      >
        Specially Handpicked for you
      </motion.p>
    </div>
  );
};

export default LoadingScreen;
