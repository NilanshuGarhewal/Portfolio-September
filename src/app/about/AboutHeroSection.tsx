import Image from "next/image";
import React from "react";

const AboutHeroSection = () => {
  return (
    <div className="about-hero-section">
      <div className="about-name-container">
        <span className="about-hero-section-text abst1">{"Hello, I'm"}</span>
        <div className="divider"></div>
        <span className="about-hero-section-text abst2">Nilanshu Garhewal</span>
      </div>

      <span className="pixel-map">
        <Image
          src={"/images/pixellated-india-map.png"}
          alt="map"
          fill
        />
      </span>
    </div>
  );
};

export default AboutHeroSection;
