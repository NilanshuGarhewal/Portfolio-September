"use client";
import React, { useState, useEffect } from "react";
import FooterLink from "@/library/footerLink/FooterLink";

const footerData = [
  {
    heading: "portfolio",
    links: [
      { name: "home", href: "/" },
      { name: "about", href: "/about" },
      { name: "projects", href: "/projects" },
    ],
  },
  {
    heading: "contact",
    links: [
      {
        name: "linkedin",
        href: "https://www.linkedin.com/in/nilanshugarhewal",
      },
      { name: "github", href: "https://github.com/NilanshuGarhewal" },
    ],
  },
  {
    heading: "artist",
    links: [
      { name: "gresic music", href: "https://gresicmusic.vercel.app/home" },
      { name: "youtube", href: "https://www.youtube.com/@gresicbeats" },
      { name: "instagram", href: "https://www.instagram.com/gresicmusic" },
    ],
  },
];

const FooterTop = () => {
  const [dateTime, setDateTime] = useState<Date | null>(null);

  useEffect(() => {
    setDateTime(new Date());
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="footer-top">
      <div className="top-text">
        <span>WHERE IDEAS THRIVE & WEBSITE PROSPER</span>
        <span>
          <p>{dateTime ? dateTime.toLocaleDateString() : ""}</p>
          <p className="hide-mobile">
            {dateTime ? dateTime.toLocaleTimeString() : ""}
          </p>
        </span>
      </div>

      <div className="top-links">
        {footerData.map((section) => (
          <div className="link-box" key={section.heading}>
            <span className="link-heading">{section.heading}</span>
            <span className="link-wrapper">
              {section.links.map((link) => (
                <FooterLink key={link.name} {...link} />
              ))}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterTop;
