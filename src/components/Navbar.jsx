import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
// import AnimatedCursor from "react-animated-cursor";
import Animated from "./Animated";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/menu", label: "Menu" },
    { href: "/gallery", label: "Gallery" },
    { href: "/reservations", label: "Reservations" },
    { href: "/about", label: "About Us" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
     <Animated />
      <nav className="text-white w-full text-xl pt-1 z-50">
        <div className="w-full mx-auto  px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href="/"
                className="text-lg sm:text-xl md:text-2xl poppins-semibold hover:text-gray-300 transition-colors"
              >
                Bombay 2 Goa
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8 poppins-semibold">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="text-white hover:text-gray-300 px-3 py-2 text-sm font-light transition-colors relative group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {link.label}
                    <motion.span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-white origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <motion.button
                type="button"
                className="  inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.95 }}
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed poppins-semibold top-16 left-0 right-0 md:hidden w-full h-[calc(100vh-4rem)] bg-[#1a1a1a] backdrop-blur-sm overflow-hidden mt-3"
            >
              <div className="flex flex-col w-full h-full pt-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="text-white hover:text-gray-300 w-full px-6 py-4 text-base font-light border-b border-gray-800/50"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <div className="h-[1px] bg-white mx-5 mt-2 opacity-40"></div>
    </>
  );
};

export default Navbar;
