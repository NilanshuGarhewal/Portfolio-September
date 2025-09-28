import HeroSection from "@/app/home/heroSection/HeroSection";
import React from "react";
import AboutSection from "./home/aboutSection/AboutSection";
import ProjectSection from "./home/projectSection/ProjectSection";

const page = () => {
  return (
      <div className="home">
        <HeroSection />

        <AboutSection />

        <ProjectSection />
      </div>
  );
};

export default page;
