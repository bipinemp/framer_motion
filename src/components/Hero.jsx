import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="hero">
      <div className="hero1">
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            bounce: 0.1,
            delay: 1.65,
          }}
        >
          Hi👋👋, my name is
        </motion.p>
      </div>
      <div className="hero2">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            bounce: 0.1,
            delay: 1.75,
          }}
        >
          Bipin Bhandari.
        </motion.h1>
      </div>
      <div className="hero3">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            bounce: 0.1,
            delay: 1.85,
          }}
        >
          Front-End React Developer
        </motion.h1>
      </div>
      <div className="hero4">
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            bounce: 0.1,
            delay: 1.95,
          }}
        >
          Welcome to my frontend web developer portfolio! As a beginner, I
          showcase my skills in creating engaging websites.
        </motion.p>
      </div>
      <div className="hero5">
        <motion.button
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            bounce: 0.1,
            delay: 2.05,
          }}
        >
          <a href="#contact"> Contact me 🤝</a>
        </motion.button>
      </div>
    </div>
  );
}

export default Hero;
