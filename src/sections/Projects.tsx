import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/project1.png",
      projectName: "Ethtyr",
      projectLink: "https://razorpro9981.github.io/something/",
      projectDescription:
        "I developed a decentralized web application using Ethereum blockchain to facilitate secure and transparent transactions of Ethereum cryptocurrency.",
      projectTech: [
        "React",
        "Ethers.js",
        "Vite",
        "MetaMask API",
        
      ],
      projectExternalLinks: {
        github: "https://github.com/razorpro9981/something",
        externalLink: "https://razorpro9981.github.io/something/",
      },
    },
    {
      image: "/project2.png",
      projectName: "Promptopia",
      projectLink: "https://promptopia-ivx8.vercel.app/",
      projectDescription:
        "This is a web app made with Nextjs to allow users to share AI prompts with each other",
      projectTech: [
        "Next.js",
        "API Integration",
        "Node.js",
        "MongoDB",
        
      ],
      projectExternalLinks: {
        github: "https://github.com/razorpro9981/promptopia",
        externalLink: "https://promptopia-ivx8.vercel.app/",
      },
    },
    {
      image: "/project3.png",
      projectName: "Netflix App",
      projectLink: "https://netlify.com",
      projectDescription:
        "I  Designed and developed a modern and responsive website using Bootstrap framework.Utilized HTML, CSS, and Bootstrap components to create an engaging user interface for a fictional dog dating app,TinDog.",
      projectTech: [
        "Bootstrap",
        "CSS",
        "Tailwind",

      ],
      projectExternalLinks: {
        github: "https://github.com/razorpro9981/tindog",
        externalLink: "https://razorpro9981.github.io/tindog/",
      },
    },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
