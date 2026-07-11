import React from "react";
import ProjectWrapper from "./ProjectWrapper";

const projects = [
  {
    id: "1",
    name: "BlueState Music",
    des: "Typebeats, Originals & Remixes.",
    releaseDate: "03-08-2025",
    info: "An independent music production project where I create and share typebeats, original instrumentals, and remix tracks. Built to showcase creativity and connect with music enthusiasts.",
    techUsed: "React.JS, TypeScript, SCSS, Express, PostgreSQL.",
    image: "/images/projects/bluestate_image.png",
    website: "https://bluestate.vercel.app/home",
    github: "https://github.com/nilanshugarhewal/BlueState-Music",
  },
  {
    id: "2",
    name: "Elevate",
    des: "Student Dashboard for Academics.",
    releaseDate: "23-02-2026",
    info: "Elevate is a dashboard created for students to manage their grades, attendence, assignments, lectures and other academic related stuff.",
    techUsed: "Next.JS, TypeScript, PostgreSQL",
    image: "/images/projects/elevate_image.png",
    website: "https://elevate-student-dashboard.vercel.app/dashboard",
    github: "https://github.com/nilanshugarhewal/elevate",
  },
  {
    id: "3",
    name: "Spliq",
    des: "Frontend & Backend for Demucs Music Source Seperation.",
    releaseDate: "06-10-2025",
    info: "Spliq provides a frontend & backend for Demucs Music Source Seperation tool, which can seperate music into different stems like vocals, drums, bass & others. You can read more about this in GitHub.",
    techUsed: "Python, Demucs, React, Node.",
    image: "/images/projects/spliq_image.png",
    website: "",
    github: "https://github.com/nilanshugarhewal/spliq.git",
  },
  {
    id: "4",
    name: "VOX-V1",
    des: "FREE MUSIC STREAMING PLATFORM.",
    releaseDate: "14-07-2025",
    info: "A free and minimalistic music streaming web app that lets users upload, explore, and listen to tracks online.",
    techUsed: "React, YtDlp, Node.js, Express",
    image: "/images/projects/vox_image.png",
    website: "",
    github: "https://github.com/nilanshugarhewal/vox.git",
  },
  {
    id: "5",
    name: "Stazy",
    des: "A Home Rental Site.",
    releaseDate: "15-02-2025",
    info: "A web platform that helps users search, list, and rent houses with ease. Includes filtering, map integration, and search homes across states.",
    techUsed: "HTML, CSS, JAVASCRIPT, map api, mongodb",
    image: "/images/projects/stazy_image.png",
    website: "",
    github: "https://github.com/nilanshugarhewal/stazy.git",
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
