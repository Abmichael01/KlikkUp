import MainPadding from "@/layouts/MainPadding";
import type React from "react";
import { motion } from "framer-motion";
import { Coins, Repeat, Zap } from "lucide-react";
import { Link } from "react-router";

const Banner1: React.FC = () => {
  const iconVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: {
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
  };

  const textVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <MainPadding className="bg-gradient-to-br from-primary via-primary/80 to-secondary/50 relative">
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ backgroundPosition: "0 0" }}
        animate={{ backgroundPosition: "100% 100%" }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          duration: 20,
          ease: "linear",
        }}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />
      <div className="relative overflow-hidden">
        <div className="relative z-10 text-white text-center py-16 px-4 sm:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            className="flex flex-col gap-8 items-center justify-center"
          >
            <div className="flex justify-center items-center gap-4 sm:gap-8">
              <motion.div
                variants={iconVariants}
                className="bg-white rounded-full p-3 sm:p-4"
              >
                <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </motion.div>
              <motion.div
                variants={iconVariants}
                className="bg-white rounded-full p-3 sm:p-4"
              >
                <Coins className="w-8 h-8 sm:w-10 sm:h-10 text-secondary" />
              </motion.div>
              <motion.div
                variants={iconVariants}
                className="bg-white rounded-full p-3 sm:p-4"
              >
                <Repeat className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </motion.div>
            </div>
            <motion.div variants={textVariants} className="space-y-2">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold fancy-font">
                Klikk. Earn. Repeat!
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mt-4">
                Don't just consume content – get rewarded for it. Sign up and
                start farming now!
              </p>
            </motion.div>
            <motion.div
              variants={textVariants}
              className="flex flex-wrap gap-4 items-center justify-center mt-6"
            >
              <Link to="/auth/register">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary py-3 px-8 rounded-full font-semibold hover:bg-secondary hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 shadow-lg"
                >
                  Get Started Now!
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        {/* <motion.div
          className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-primary to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        /> */}
      </div>
    </MainPadding>
  );
};

export default Banner1;
