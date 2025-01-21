import React from "react";
import bgimage from "../../public/bg.png";
import Navbar from "./Navbar";
import { ArrowRight } from 'lucide-react';
import { motion } from "framer-motion"; // Add this import
import Animated from "./Animated";

const Home = () => {
  return (
    <>
     <Animated />
      <div
        style={{
          backgroundImage: `linear-gradient(hsl(0,0%,0%,50%),hsl(0,0%,0%,50%)),url(${bgimage})`,
        }}
        className="bg-cover bg-center h-screen w-full relative"
      >
        <Navbar />
        <div className="flex items-center md:flex-row flex-col p-5 box justify-around md:gap-40 text-white h-[calc(100vh-80px)]">
          <div className="flex justify-center gap-8 flex-col">
            <motion.p 
              className="kalnia-one text-4xl sm:text-6xl md:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Bombay Special
            </motion.p>
            <motion.p 
              className="poppins-regular text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Explore the taste of Mumbai's food
            </motion.p>
            <motion.button 
              className="border-[1px] border-white rounded-full bg-white bg-opacity-10 px-2 py-2 w-36"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Order Now
            </motion.button>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.button 
              className="border-[1px] border-white bg-white bg-opacity-10 rounded-full p-5"
              whileHover={{ scale: 1.1, rotate: 90 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;