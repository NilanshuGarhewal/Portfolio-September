"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { AnimatePresence } from "framer-motion";
import ProjectContainerPage from "@/components/project/ProjectContainerPage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ProjectWrapperProps = {
  project: {
    id: string;
    name: string;
    des: string;
    releaseDate: string;
    info: string;
    techUsed: string;
    image: string,
    website: string,
    github: string;
  };
};

const ProjectWrapper = ({ project }: ProjectWrapperProps) => {
  const [showProject, setShowProject] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (wrapperRef.current) {
      gsap.fromTo(
        wrapperRef.current,
        { autoAlpha: 0.3 },
        {
          autoAlpha: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 90%", // start when near viewport
            end: "bottom 60%", // end scroll
            scrub: true,
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    if (nameRef.current) {
      const chars = nameRef.current.querySelectorAll(".char");

      gsap.set(chars, { opacity: 0, y: 18 }); // start hidden & slightly down

      gsap.to(chars, {
        opacity: 1,
        stagger: 0.07, // delay between each char
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: wrapperRef.current,
          toggleActions: "play none none reverse",
          start: "top 90%", // start when near viewport
          end: "bottom 60%", // end scroll
          scrub: true,
        },
      });
    }
  }, []);

  // wrap project name in span for each char
  const splitName = project.name.split("").map((char, i) => (
    <span key={i} className="char">
      {char}
    </span>
  ));

  return (
    <>
      <div
        ref={wrapperRef}
        className="project-wrapper"
        onClick={() => setShowProject(true)}
      >
        <div className="project-name" ref={nameRef}>
          {splitName}
        </div>

        <div className="project-go">
          <div className="project-go-des">{project.des}</div>
          <div className="project-go-arrow">
            <ArrowRightIcon weight="regular" size={22} />
          </div>
        </div>

        <div className="project-wrapper-background">
          <div className="pwb1"></div>
          <div className="pwb2"></div>
        </div>
      </div>

      <AnimatePresence>
        {showProject && (
          <ProjectContainerPage
            setShowProject={setShowProject}
            showProject={showProject}
            project={project}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectWrapper;
