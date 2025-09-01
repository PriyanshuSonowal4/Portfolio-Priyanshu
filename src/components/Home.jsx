
import React from "react";
import Navbar from "./Navbar";
import Herosection from "./Herosection";
import Skills from "./Skills";
import Education from "./Education";
import { motion } from "framer-motion";


const Home = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Herosection />
      </motion.div>
      <Skills />
      <Education />
    </>
  );
};

export default Home;
