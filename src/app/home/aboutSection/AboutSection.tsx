"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const parts = [
  "I'm ",
  <span className="glow-text" key={1}>
    Nilanshu Garhewal
  </span>,
  ,
  ", & i am specialized in building clean, efficient, and user-friendly solutions with modern technologies. Over the past few years, I’ve worked on multiple",
  <span className="glow-text" key={2}>
    Projects
  </span>,
  ,
  "that improved usability, optimized performance, and turned ideas into working products.",
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // GSAP animation (word by word now 🚀)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = textRef.current!.querySelectorAll("span");
      gsap.set(words, { opacity: 0.3 });
      gsap.to(words, {
        opacity: 1,
        stagger: 0.15, // slower so it feels word-by-word
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
  }, []);

  return (
    <div className="about-section" ref={sectionRef}>
      <div className="about-text" ref={textRef}>
        {parts.map((part, i) =>
          typeof part === "string"
            ? part.split(" ").map((word, j) => (
                <span key={`${i}-${j}`} style={{ marginRight: "0.3rem" }}>
                  {word}
                </span>
              ))
            : part
        )}
      </div>
    </div>
  );
};

export default AboutSection;
