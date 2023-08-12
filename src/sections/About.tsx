import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
          I&apos;m a passionate web developer who thrives on turning innovative ideas into functional and visually appealing digital experiences. With a strong foundation in coding and an eye for design, I specialize in crafting user-friendly websites that not only look great but also provide seamless and engaging interactions. From front-end magic to back-end wizardry, I&apos;m committed to creating online solutions that leave a lasting impression. Welcome to my portfolio website!&nbsp;
          </p>
          <p className="about-grid-info-text">
            
          </p>

          <p className="about-grid-info-text">
          
          </p>
          <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">Vite</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">API Integration</li>
            <li className="about-grid-info-list-item">MongoDB</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">Tailwind CSS</li>
            <li className="about-grid-info-list-item">Adobe XD</li>
            <li className="about-grid-info-list-item">CSS</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            {/* <Image src="/kishan.jpeg" alt="profile" fill /> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
