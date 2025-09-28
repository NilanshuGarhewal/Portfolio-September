"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const parts = [
  "Loves to transform ideas into clean, functional, and user-friendly \n",
  "digital experiences. My expertise lies in building modern ",
  <span className="glow-text" key={1}>
    web applications
  </span>,
  " with\n",
  "React, Next.js, and, ",
  <span className="glow-text" key={2}>
    backend technologies
  </span>,
  ,
  " , and I am constantly exploring new tools to \n",
  "stay ahead of the curve. I thrive in collaborative environments where I can learn, \n",
  "share knowledge, and create ",
  <span className="glow-text" key={3}>
    solutions
  </span>,
  ,
  " that make a real impact. \n",
];

const partsMobile = [
  "Hello, I'm ",
  <span className="glow-text" key={1}>
    Nilanshu Garhewal
  </span>,
  "\n",
  "My expertise lies in building modern\n",
  "web applications with React, Next.js,\n and, ",
  <span className="glow-text" key={2}>
    backend technologies
  </span>,
  ,
  " and I am\nconstantly exploring new tools to stay\n",
  "ahead of the curve. I thrive in\ncollaborative environments where\nI can learn,",
  "share knowledge, and create\n",
  <span className="glow-text" key={3}>
    solutions
  </span>,
  ,
  "that\nmake a real impact. \n",
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 600);
    checkScreen(); // initial check
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // GSAP animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const chars = textRef.current!.querySelectorAll("span");
      gsap.set(chars, { opacity: 0.3 });
      gsap.to(chars, {
        opacity: 1,
        stagger: 0.03,
        ease: "power1.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2000",
          scrub: true,
          pin: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]); // re-run if screen changes

  const textToUse = isMobile ? partsMobile : parts;

  return (
    <div className="about-section" ref={sectionRef}>
      <div className="about-text" ref={textRef}>
        {textToUse.map((part, i) =>
          typeof part === "string"
            ? part
                .split("")
                .map((char, j) => (
                  <span key={`${i}-${j}`}>
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))
            : part
        )}
      </div>
    </div>
  );
};

export default AboutSection;
