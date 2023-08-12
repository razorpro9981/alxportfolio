import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: "Freelance Developer",
      role: "Frontend Developer",
      url: "/",
      start: "February 2020",
      end: "Present",
      shortDescription: [
        "During my university years, my journey into the world of web development took off as I delved into crafting captivating landing pages using React.",
        "The combination of creativity and coding skills allowed me to bring ideas to life and engage users effectively.",
        "As time marched on, so did my skills and aspirations. With each project, I honed my abilities, embracing new technologies and pushing the boundaries of what's possible. My dedication to continuous growth has led me to develop.",
      ],
    },
    {
      name: "GlobalAV",
      role: "Content Manager Assistant",
      url: "/",
      start: "January 2022",
      end: "November 2022",
      shortDescription: [
        "At GlobalAV my contribution extended beyond the conventional, as I leveraged cutting-edge AI technologies to devise efficient work and content plans. This strategic approach not only streamlined the team's workflow but also catalyzed the productivity of the entire collective. ",
        
        "Through this integration of technology and creativity, I championed innovation in content management, leaving a profound impact on the efficiency and efficacy of our operations.",

        "As my chapter at GlobalAV reached its conclusion, I carried with me an array of invaluable experiences and accomplishments. ",
        
      ],
    },
    {
      name: "Uzuri Glow",
      role: "Product Design Assistant",
      url: "/",
      start: "February 2023",
      end: "June 2023",
      shortDescription: [
        "During my tenure at Uzuri Glow, I had the privilege of serving as a Product Design Assistant. With a passion for innovative design and a flair for creativity, I contributed to the dynamic team, collaborating to bring ideas to life. From concept exploration to visual refinement, I played a pivotal role in the design process, crafting user-centric solutions that resonated with our audience.",

        "As I transitioned from Uzuri Glow, I carried forward invaluable experiences that continue to shape my journey as a designer. Explore my portfolio to witness the evolution of my design endeavors and the mark I've left on this creative voyage.",
      ],
    },
    
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
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
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} className="link">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
