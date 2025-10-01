import React from "react";

const DetailedAboutPage = () => {
  return (
    <div className="detailed-about-page">
      <div className="detailed-about-text-wrapper">
        <div className="about-heading">
          <p>About</p>
          <div className="divisor"></div>
        </div>
        <div className="about-text">
          <div className="about-text-para">
            With a sharp eye for design and a passion for smooth user
            interactions, Nilanshu is a full-stack developer who crafts digital
            products that are clean, responsive, and a joy to use because a
            great code should not only work — it should flow.
          </div>

          <div className="about-text-para">
            From React and Next.js to Flask and API design, he’s learned by
            doing — building real projects from the ground up. His standout
            project, GRESICMUSIC is a full-stack music streaming app designed
            with polished UI, and seamless animations using tools like Framer
            Motion and GSAP.
          </div>

          <div className="about-text-para">
            Beyond code, Nilanshu is also a music producer — a creative skill
            that sharpens his sense of rhythm, detail, and storytelling. This
            crossover gives his work a unique energy — where logic meets vibe.
          </div>

          <div className="about-text-para">
            {
              "Currently, he's diving deeper into advanced frontend animation, backend architecture, and system design, with a goal to become a top-tier creative developer. Whether he’s writing JavaScript or composing beats, the mission stays the same: build things people feel."
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedAboutPage;
