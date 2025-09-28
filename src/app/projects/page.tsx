import React from "react";
import ProjectHeroSection from "./ProjectHeroSection";
import ProjectMainSection from "./ProjectMainSection";

const page = () => {
  return (
    <div className="project-page">
      <ProjectHeroSection />
      <ProjectMainSection />
    </div>
  );
};

export default page;
