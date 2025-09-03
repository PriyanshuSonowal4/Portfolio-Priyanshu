import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <motion.div
      className="mt-10 text-left"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="h-1 w-full  bg-amber-200 bg-gradient-to-r from-indigo-600 to-pink-400 shadow-2xl shadow-sky-500" />

      <div className="w-full mx-auto mt-6 lg:w-5/12 lg:pr-12">
        <motion.div
          className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-sm font-semibold mb-6">
            <div className="w-2 h-2 bg-white rounded-full mr-2" />
            Currently Pursuing
          </div>

          <h3 className="text-3xl lg:text-4xl font-bold text-[#0D1B2A] mb-4">
            Bachelor of Computer Applications
          </h3>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Manipal University Jaipur (Online)
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full" />
              <span className="text-lg text-[#0D1B2A]/80 font-medium">
                Duration: 3 Years
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-indigo-500 rounded-full" />
              <span className="text-lg text-[#0D1B2A]/80 font-medium">
                Focus: Computer Applications & Technology
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Education;
