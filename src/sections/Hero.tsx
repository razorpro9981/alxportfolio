import Button from "@/components/Button";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
function Hero() {

  const buttonStyle = {
    margin: "2rem",
    padding: "10px 20px",
    
  };

  return (
    <div className="hero">
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.6,
        }}
      >
        Hi my name is
      </motion.h1>
      <motion.h2
        className="hero-title-large"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.75,
        }}
      >
        Ebenezer Kissiedu
      </motion.h2>
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.6,
        }}
      >
        I am a software developer and 
      </motion.h1>
      <motion.h3
        className="hero-title-large hero-title-sub"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.05,
        }}
      >
       I do <mark>hard</mark> things.
      </motion.h3>
      <motion.p
        className="hero-text"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.35,
        }}
      >
       
        
      </motion.p>
      <motion.div
        className="hero-button"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.65,
        }}
      >
        <Button
          text="Check out my Elevator Pitch"
          link="https://youtu.be/3btMxwvuDno"
        />
        <br />
         <br />
         <br />
         <br />
        <Button
          text="Check out my Team Video"
          link="https://youtu.be/ZHW5OMhaBRs"
          
        />
        <br />
         <br />
         <br />
         <br />
        <Button
          text="Check out my Team Slide Deck"
          link="https://docs.google.com/presentation/d/1UW7q24RgrBfZUKWhfkbFTHYxspq9uQuIQqecYqVOM-g/edit?usp=sharing"
          
        />
      </motion.div>
    </div>
  );
}

export default Hero;
