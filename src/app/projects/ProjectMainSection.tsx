import React from "react";
import ProjectWrapper from "./ProjectWrapper";

const projects = [
  {
    id: "1",
    name: "Gresic Music",
    des: "Typebeats, Originals & Remixes.",
    releaseDate: "2024-03-15",
    info: "An independent music production project where I create and share typebeats, original instrumentals, and remix tracks. Built to showcase creativity and connect with music enthusiasts.",
    techUsed: "BandLab, FL Studio, YouTube, Canva",
  },
  {
    id: "2",
    name: "Stazy",
    des: "A Home Rental Site.",
    releaseDate: "2024-06-01",
    info: "A web platform that helps users search, list, and rent houses with ease. Includes filtering, map integration, and secure booking system.",
    techUsed: "React, Next.js, TailwindCSS, Firebase, Google Maps API",
  },
  {
    id: "3",
    name: "VOX-V1",
    des: "FREE MUSIC STREAMING PLATFORM.",
    releaseDate: "2024-08-10",
    info: "A free and minimalistic music streaming web app that lets users upload, explore, and listen to tracks online. Inspired by platforms like SoundCloud.",
    techUsed: "Node.js, Express, MongoDB, React, AWS S3",
  },
];

const ProjectMainSection = () => {
  return (
    <section className="project-main-section">
      <div className="project-container">
        {projects.map((p) => (
          <ProjectWrapper key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
};

export default ProjectMainSection;
