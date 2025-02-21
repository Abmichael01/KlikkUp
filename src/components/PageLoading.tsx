import React from "react";
import { motion } from "framer-motion";
import Logo from "./Logo/Logo";

const PageLoading: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900">
      {/* Logo with Click-Like Bounce Animation */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: [1, 0.9, 1.1, 1] }} // Shrinks slightly then bounces
        transition={{
          duration: 0.4,
          repeat: Infinity,
          repeatDelay: 1.5,
          ease: "easeInOut",
        }}
      >
        <Logo noLink />
      </motion.div>

      {/* Three-Dot Loading Animation */}
      <div className="flex space-x-2 mt-4">
        {[...Array(3)].map((_, i) => (
          <motion.span
            key={i}
            className="w-3 h-3 bg-blue-900 dark:bg-white rounded-full"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: i * 0.2, // Staggered effect
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PageLoading;
