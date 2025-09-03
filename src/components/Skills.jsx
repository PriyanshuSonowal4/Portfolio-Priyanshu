import React from "react";
import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "SQL",
  "Git",
  "GitHub",
  "Tailwind CSS",
  "TypeScript",
];

const Skills = () => {
  return (
    <motion.div
      className="mt-30"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h1 className="text-transparent bg-clip-text w-fit mx-auto text-xl bg-gradient-to-r from-indigo-600 to-pink-400 font-black">
        SKILLS
      </h1>
      <div className="flex justify-center mt-5 flex-wrap gap-3">
        {skills.map((skill, idx) => (
          <motion.div
            className="relative"
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.05, ease: "easeOut" }}
          >
            <div className="absolute inset-1 bg-gradient-to-r from-indigo-300 to-pink-100 blur-lg  bg-blue-200" />
            <div className="w-fit p-2 shadow-2xl shadow-black relative rounded-full bg-transparent text-black">
              {skill}
            </div>
          </motion.div>
        ))}
      </div>
      <h1 className="text-transparent bg-clip-text mt-5 w-fit mx-auto text-xl bg-gradient-to-r from-indigo-600 to-pink-400 font-black">
        Other Skills
      </h1>
      <div className="relative w-fit mx-auto">
        <div className="absolute inset-1 bg-gradient-to-r from-indigo-300 to-pink-100 blur-lg  bg-blue-200" />

        <div className="w-fit p-2 shadow-2xl mt-3 shadow-black relative rounded-full bg-transparent text-black">
          Crypto Trading
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
