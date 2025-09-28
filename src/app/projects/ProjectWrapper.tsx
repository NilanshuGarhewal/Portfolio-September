"use client";

import React, { useState } from "react";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { AnimatePresence } from "framer-motion";
import ProjectContainerPage from "@/components/project/ProjectContainerPage";

type ProjectWrapperProps = {
  project: {
    id: string;
    name: string;
    des: string;
    releaseDate: string;
    info: string;
    techUsed: string;
  };
};

const ProjectWrapper = ({ project }: ProjectWrapperProps) => {
  const [showProject, setShowProject] = useState<boolean>(false);

  const content = (
    <>
      <div className="project-name">{project.name}</div>
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
    </>
  );

  return (
    <>
      <div className="project-wrapper" onClick={() => setShowProject(true)}>
        {content}
      </div>

      {/* AnimatePresence handles mount/unmount transitions */}
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
