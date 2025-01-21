import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import Animated from "./Animated";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {  
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <>
      <Animated />
      <Navbar />
      <motion.div
        className="container mx-auto p-4 md:p-10 kalnia-one"
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
      >
        <motion.h1
          className="text-white text-center mb-10 text-2xl sm:text-3xl md:text-5xl font-medium"
          variants={fadeIn}
        >
          - About Us -
        </motion.h1>

        <div className="flex flex-col items-center max-w-7xl mx-auto">
          <motion.img
            src="about.png"
            className="w-full md:w-4/5 lg:w-2/3 h-auto rounded-lg shadow-lg"
            alt="Restaurant front view"
            variants={fadeIn}
          />

          <motion.div
            className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            variants={fadeIn}
          >
            <motion.p
              className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed"
              variants={fadeIn}
            >
              Bombay 2 Goa is a family-owned restaurant that has been serving
              authentic Indian cuisine since 1995. We are proud to offer a wide
              variety of dishes that are made from the freshest ingredients and
              spices. Our menu features a mix of traditional and modern Indian
              dishes that are sure to satisfy your taste buds. Whether you are
              in the mood for something spicy or something sweet, we have
              something for everyone. Come visit us today and experience the
              flavors of India right here in the heart of New York City.
            </motion.p>
            <motion.img
              src="k8.png"
              className="w-full rounded-lg shadow-lg"
              alt="Restaurant interior"
              variants={fadeIn}
            />
          </motion.div>

          <motion.div
            className="mt-10 flex flex-col items-center"
            variants={fadeIn}
          >
            <motion.p
              className="text-white text-lg md:text-xl lg:text-2xl text-left mb-8 leading-relaxed"
              variants={fadeIn}
            >
              Our restaurant is known for its warm and welcoming atmosphere, and
              our staff is dedicated to providing you with the best dining
              experience.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full"
              variants={fadeIn}
            >
              <motion.img
                src="k8.png"
                className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                alt="Restaurant ambiance"
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
              />
              <motion.img
                src="k8.png"
                className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                alt="Restaurant staff"
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
