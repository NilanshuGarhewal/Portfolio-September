"use client";
import React, { useState } from "react";
import Link from "next/link";
// import Image from "next/image";

import img1 from "@/assets/images/img1.webp";
import img2 from "@/assets/images/img2.jpg";
import img3 from "@/assets/images/img3.jpg";

const projects = [
  { id: 0, name: "0", tooltip: "Gresic Music", image: img1 },
  { id: 1, name: "1", tooltip: "Stazy", image: img2 },
  { id: 2, name: "2", tooltip: "Vox V1", image: img3 },
];

const ProjectSection = () => {
  const [tooltip, setTooltip] = useState("");
  const [visible, setVisible] = useState(false);
  // const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });

  React.useEffect(() => {
    let raf: number;

    const smoothFollow = () => {
      setPos((prev) => {
        const dx = targetPos.x - prev.x;
        const dy = targetPos.y - prev.y;

        return {
          x: prev.x + dx * 0.1, // 0.1 = speed (lower is smoother/slower)
          y: prev.y + dy * 0.1,
        };
      });

      raf = requestAnimationFrame(smoothFollow);
    };

    raf = requestAnimationFrame(smoothFollow);
    return () => cancelAnimationFrame(raf);
  }, [targetPos]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setTargetPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="project-section">
      <div className="project-heading">
        <span className="name">Projects</span>
        <Link className="go-to-projects" href="/projects">
          see all projects
        </Link>
      </div>

      <div
        className="project-wrapper"
        onMouseLeave={() => {
          setVisible(false);
          // setHoveredProject(null);
        }}
      >
        {projects.map((p) => (
          <Link
            href="/"
            key={p.id}
            className="project-box"
            onMouseEnter={() => {
              setTooltip(p.tooltip);
              setVisible(true);
              // setHoveredProject(p.id);
            }}
            onMouseMove={handleMouseMove}
          >
            <p>{p.name}</p>

            {/* <span
              style={{ opacity: hoveredProject === p.id ? 1 : 0 }}
              className="show-image"
            >
              <Image className="image" src={p.image} alt="image" />
            </span> */}
          </Link>
        ))}
      </div>

      {/* Single tooltip */}
      {visible && (
        <div
          className="tooltip"
          style={{ left: pos.x + 15, top: pos.y + 15, position: "fixed" }}
        >
          {tooltip}
        </div>
      )}
    </div>
  );
};

export default ProjectSection;
