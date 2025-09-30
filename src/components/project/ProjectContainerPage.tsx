"use client";

import React, { useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import image from "@/assets/images/img2.jpg";

type Project = {
  id: string;
  name: string;
  des: string;
  releaseDate: string;
  info: string;
  techUsed: string;
};

type Props = {
  setShowProject: (value: boolean) => void;
  showProject: boolean;
  project: Project;
};

const slideIn: Variants = {
  hidden: { x: "110%" },
  visible: {
    x: 0,
    transition: { duration: 1, ease: [0.83, 0, 0.17, 1], delay: 0.2 },
  },
  exit: {
    x: "110%",
    transition: { duration: 1, ease: [0.83, 0, 0.17, 1], delay: 0.2 },
  },
};

const slideUp = (delay = 0): Variants => ({
  hidden: { y: "100%" },
  visible: {
    y: 0,
    transition: { duration: 1, ease: [0.83, 0, 0.17, 1], delay },
  },
  exit: {
    y: "100%",
    transition: { duration: 1, ease: [0.83, 0, 0.17, 1] },
  },
});

const ProjectContainerPage: React.FC<Props> = ({
  setShowProject,
  showProject,
  project,
}) => {
  useEffect(() => {
    document.body.style.overflow = showProject ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showProject]);

  const infoFields: { title: string; value: string }[] = [
    { title: "RELEASE DATE", value: project.releaseDate },
    { title: "INFO", value: project.info },
    { title: "TECH USED", value: project.techUsed },
  ];

  const links: string[] = ["linkedin", "github"];

  return (
    <motion.div
      className="project-page-container"
      initial={{ backgroundColor: "#00000000" }}
      animate={{
        backgroundColor: "#00000050",
        transition: { duration: 1, ease: [0.83, 0, 0.17, 1] },
      }}
      exit={{
        backgroundColor: "#00000000",
        transition: { duration: 1, ease: [0.83, 0, 0.17, 1], delay: 1 },
      }}
    >
      <motion.div
        variants={slideIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="project-page-content"
      >
        {/* Header */}
        <div className="project-close">
          <motion.div
            variants={slideUp(0.4)}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="project-close-des"
          >
            nilanshu garhewal
          </motion.div>
          <div
            className="project-close-btn"
            onClick={() => setShowProject(false)}
          >
            close
          </div>
        </div>

        {/* Content */}
        <div className="project-content">
          <div className="project-info-wrapper">
            <div className="project-logo">
              <motion.div
                className="logo-wrapper"
                variants={slideUp(0.4)}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                hi
              </motion.div>
            </div>

            <div className="project-info-box">
              <div className="project-name">
                <motion.div
                  variants={slideUp(0.4)}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {project.name}
                </motion.div>
              </div>

              <div className="project-info-table">
                {infoFields.map(({ title, value }, i) => (
                  <div className="project-information" key={title}>
                    <div className="project-info-title">
                      <motion.div
                        variants={slideUp(0.4 + i * 0.3)}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      >
                        {title}
                      </motion.div>
                    </div>

                    <div className="project-info-des">
                      <motion.div
                        variants={slideUp(0.4 + i * 0.3)}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      >
                        {value}
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="project-images-wrapper">
            <motion.div
              className="piw"
              variants={slideUp(1.2)}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Image src={image} alt="project image" className="img" />
            </motion.div>
          </div>
        </div>

        {/* Links */}
        <div className="project-view">
          <div className="link-wrapper-black">
            <motion.div
              className="over"
              variants={slideUp(1.6)}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <span className="link">
                <a href="#">view website</a>
                <div className="link-dot" />
              </span>
            </motion.div>
          </div>

          <div className="link-wrapper-black">
            {links.map((link, i) => (
              <motion.div
                key={i}
                className="over"
                variants={slideUp(1.6)}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <span className="link" key={link}>
                  <a href="#">{link}</a>
                  <div className="link-dot" />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectContainerPage;
