import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import Animated from "./Animated";

const Gallery = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
       <Animated />
      <Navbar />
      <div className="p-10 kalnia-one">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-center mb-14 mt-5 text-2xl sm:text-3xl md:text-5xl font-medium"
        >
          - Gallery -
        </motion.p>
        <motion.div
          className="grid grid-cols-2 gap-4 md:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid gap-4">
            <motion.div variants={item}>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center transition-transform duration-300 hover:scale-105"
                src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="gallery-photo"
              />
            </motion.div>
            <motion.div variants={item}>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center transition-transform duration-300 hover:scale-105"
                src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
                alt="gallery-photo"
              />
            </motion.div>
            <motion.div variants={item}>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center transition-transform duration-300 hover:scale-105"
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                alt="gallery-photo"
              />
            </motion.div>
          </div>
          <div className="grid gap-4">
            <motion.div variants={item}>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center transition-transform duration-300 hover:scale-105"
                src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="gallery-photo"
              />
            </motion.div>
            <motion.div variants={item}>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center transition-transform duration-300 hover:scale-105"
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="gallery-photo"
              />
            </motion.div>
            <motion.div variants={item}>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center transition-transform duration-300 hover:scale-105"
                src="https://docs.material-tailwind.com/img/team-3.jpg"
                alt="gallery-photo"
              />
            </motion.div>
          </div>
          <div className="grid gap-4">
            <motion.div variants={item}>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center transition-transform duration-300 hover:scale-105"
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                alt="gallery-photo"
              />
            </motion.div>
            <motion.div variants={item}>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center transition-transform duration-300 hover:scale-105"
                src="https://docs.material-tailwind.com/img/team-3.jpg"
                alt="gallery-photo"
              />
            </motion.div>
            <motion.div variants={item}>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center transition-transform duration-300 hover:scale-105"
                src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="gallery-photo"
              />
            </motion.div>
          </div>
          <div className="grid gap-4">
            <motion.div variants={item}>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center transition-transform duration-300 hover:scale-105"
                src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="gallery-photo"
              />
            </motion.div>
            <motion.div variants={item}>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center transition-transform duration-300 hover:scale-105"
                src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
                alt="gallery-photo"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Gallery;
