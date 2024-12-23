import { motion } from "framer-motion";
import GradientBackground from "./GradientBackground";
import { FaArrowRight } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <GradientBackground />

      <div className="relative z-10 text-center px-4">
        {/* Available for project Label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 mb-8 px-6 py-3 bg-gray-800 backdrop-blur-lg rounded-full"
        >
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          <span className="text-softWhite/90 text-sm font-semibold">
            Available for Projects
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-6xl font-extrabold mb-6"
        >
          <span className="bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">
            Turning Ideas Into
            <br />
            Stunning Websites
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white/70 text-xl mb-12 max-w-2xl mx-auto"
        >
          Passionate about crafting clean, responsive, and user-friendly
          designs. Every line of code is built with care and precision.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex gap-4 justify-center"
        >
          <button className="flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium border duration-300 hover:-translate-y-1">
            Explore my work
            <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-lg text-white font-medium hover:bg-white/20 transition-all duration-300 hover:-translate-y-1">
            Lets Connect
          </button>
        </motion.div>
      </div>
    </div>
  );
}
