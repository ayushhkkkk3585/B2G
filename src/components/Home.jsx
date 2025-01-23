import React, { useState } from "react";
import bgimage from "../../public/bg.png";
import back from "../../public/back.jpg";
import Navbar from "./Navbar";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Animated from "./Animated";

const Home = () => {
  // Define arrays for content cycling
  const contents = [
    {
      title: "Bombay Special",
      subtitle: "Explore the taste of Mumbai's food",
      bgImage: bgimage,
    },
    {
      title: "Delhi Delights",
      subtitle: "Experience the flavors of the capital",
      bgImage: back, // Replace with your second image import
    },
    {
      title: "Kolkata Kitchen",
      subtitle: "Savor the sweetness of Bengal",
      bgImage: bgimage, // Replace with your third image import
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleArrowClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === contents.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentContent = contents[currentIndex];

  return (
    <>
      <Animated />
      <div
        style={{
          backgroundImage: `linear-gradient(hsl(0,0%,0%,50%),hsl(0,0%,0%,50%)),url(${currentContent.bgImage})`,
        }}
        className="bg-cover bg-center h-screen w-full relative"
      >
        <Navbar />
        <div className="flex items-center md:flex-row flex-col p-5 box justify-around md:gap-40 text-white h-[calc(100vh-80px)]">
          <div className="flex justify-center gap-8 flex-col">
            <motion.p
              key={currentContent.title}
              className="kalnia-one text-4xl sm:text-6xl md:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {currentContent.title}
            </motion.p>
            <motion.p
              key={currentContent.subtitle}
              className="poppins-regular text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {currentContent.subtitle}
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
              onClick={handleArrowClick}
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
