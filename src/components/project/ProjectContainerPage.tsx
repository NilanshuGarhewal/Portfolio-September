"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";

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

type ProjectContainerPageProps = {
  setShowProject: (value: boolean) => void;
  showProject: boolean;
  project: Project; // ✅ added project here
};

const ProjectContainerPage: React.FC<ProjectContainerPageProps> = ({
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

  return (
    <motion.div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
      // transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="project-page-container"
    >
      <motion.div
        initial={{ x: "110%" }}
        animate={{ x: "0" }}
        exit={{ x: "110%" }}
        transition={{
          duration: 1,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.3,
        }}
        className="project-page-content"
      >
        {/* Close Header */}
        <div className="project-close">
          <div className="project-close-des">nilanshu garhewal</div>
          <div
            className="project-close-btn"
            onClick={() => setShowProject(false)}
          >
            close
          </div>
        </div>

        {/* Main Project Content */}
        <div className="project-content">
          <div className="project-info-wrapper">
            <div className="project-logo">
              <div className="logo-wrapper">hi</div>
            </div>

            <div className="project-info-box">
              <div className="project-name">{project.name}</div>

              <div className="project-info-table">
                <div className="project-information">
                  <div className="project-info-title">RELEASE DATE</div>
                  <div className="project-info-des">{project.releaseDate}</div>
                </div>

                <div className="project-information">
                  <div className="project-info-title">INFO</div>
                  <div className="project-info-des">{project.info}</div>
                </div>

                <div className="project-information">
                  <div className="project-info-title">TECH USED</div>
                  <div className="project-info-des">{project.techUsed}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Optional project images */}
          <div className="project-images-wrapper">
            <Image src={image} alt="image" className="img"></Image>
          </div>
        </div>

        {/* Links */}
        <div className="project-view">
          <div className="link-wrapper-black">
            <span className="link">
              <a href="#">view website</a>
              <div className="link-dot"></div>
            </span>
          </div>

          <div className="link-wrapper-black">
            <span className="link">
              <a href="#">linkedin</a>
              <div className="link-dot"></div>
            </span>

            <span className="link">
              <a href="#">github</a>
              <div className="link-dot"></div>
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectContainerPage;
