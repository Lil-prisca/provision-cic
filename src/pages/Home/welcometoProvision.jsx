import React from "react";
import "../../styles/home/welcome.css";

import img1 from "../../assets/coventry-f6acc2bd 1 (1).png";
import img2 from "../../assets/home-hero-big-fa694ebf 1 (1).png";
import img3 from "../../assets/download 2 (1).png";
import img4 from "../../assets/download 1 (1).png";

import { motion } from "framer-motion";

/* Parent controls stagger timing */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

/* Each image slides up individually */
const imageVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const WelcometoProvision = () => {
  return (
    <div className="welcome-container">
      <h3>Welcome to Provision CIC</h3>

      <p>
        Our core ethos centers on the well-being of individuals. This is evident
        in our dedication to providing safe, high-quality homes and supporting
        people in their journey toward greater independence.
      </p>

      <a href="">
        <button className="welcomebtn">Get in Touch</button>
      </a>

      {/* STAGGERED IMAGE ANIMATION */}
      <motion.div
        className="images"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="img1" variants={imageVariants}>
          <img src={img1} alt="" />
        </motion.div>

        <motion.div className="img2" variants={imageVariants}>
          <img src={img2} alt="" />
        </motion.div>

        <motion.div className="img3" variants={imageVariants}>
          <img src={img3} alt="" />
        </motion.div>

        <motion.div className="img4" variants={imageVariants}>
          <img src={img4} alt="" />
        </motion.div>

        <motion.div className="img3 img5" variants={imageVariants}>
          <img src={img3} alt="" />
        </motion.div>

        <motion.div className="img4 img6" variants={imageVariants}>
          <img src={img4} alt="" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WelcometoProvision;
