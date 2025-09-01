import React from "react";
import { motion } from "framer-motion";

const Herosection = () => {
  return (
    <div className="flex justify-center items-center space-x-4 flex-wrap space-y-4">
      <motion.div
        className="flex shadow-2xl p-10 border-1 mr-10 rounded-2xl flex-col items-start space-y-5 max-w-2xl"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="font-black text-black text-3xl">
          {"Hi, I’m".split("").map((item, idx) => {
            return <span>{item}</span>;
          })}{" "}
        </span>
        <span className="font-black text-shadow-2xl  text-black text-3xl">
          {"Priyanshu Sonowal".split("").map((item, idx) => {
            return <span>{item}</span>;
          })}{" "}
        </span>
        <span className="text-black  text-left font-semibold text-xl">
          I’m an aspiring AI/ML Engineer with a strong foundation in Python,
          Java, C, and SQL, and practical experience working with Scikit-Learn,
          data analysis, and model building. My expertise extends to
          mathematics, statistics, and data structures, which I apply to develop
          intelligent systems and solve real-world problems. I enjoy exploring
          machine learning, deep learning, NLP, and computer vision, and I’m
          passionate about continuously learning, experimenting, and building
          AI-powered solutions that create meaningful impact.
        </span>
        <div className="h-1 w-full bg-amber-200 bg-gradient-to-r from-indigo-600 to-pink-400 shadow-2xl shadow-sky-500" />

        <span className="font-medium text-xl text-left text-black drop-shadow-lg">
          I am a crypto trader along with 3 years of experience in this field.
          analyzing market trends, executing profitable trades, and managing
          risk across various digital assets. Skilled in technical and
          fundamental analysis with a strong understanding of blockchain and
          cryptocurrency markets.
        </span>
      </motion.div>
      <motion.div
        className="relative group mt-3 cursor-pointer"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
      >
        {/* 

        <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"></div> */}
        <div className="absolute -inset-4 blur-lg opacity-30  bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full  group-hover:opacity-50 transition-opacity duration-500"></div>
        <motion.div
          className="relative h-80 w-80 sm:h-100 sm:w-100 rounded-full  overflow-hidden border-4 border-white shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-500 group-hover:scale-[1.1]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ boxShadow: "0 0 10px 10px #60A5FA" }}
          transition={{ damping: 15, type: "spring", stiffness: 200 }}
        >
          <motion.img
            className="w-full h-full object-cover"
            src="/images/profilePic.jpg"
            alt="Rajnish Nath"
            width={400}
            height={400}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.12 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Herosection;
