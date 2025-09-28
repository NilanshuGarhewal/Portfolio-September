import React from "react";
import AboutHeroSection from "./AboutHeroSection";
import DetailedAboutPage from "./DetailedAboutPage";

const page = () => {
  return (
    <div className="about">
      <AboutHeroSection />

      <DetailedAboutPage />
    </div>
  );
};

export default page;
