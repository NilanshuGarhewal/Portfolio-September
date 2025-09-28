"use client";
import React, { useState, useEffect } from "react";
import FooterLink from "@/library/footerLink/FooterLink";

const footerData = [
  {
    heading: "portfolio",
    links: [
      { name: "home", href: "/" },
      { name: "about", href: "/" },
      { name: "projects", href: "/" },
      { name: "resume", href: "/" },
    ],
  },
  {
    heading: "contact",
    links: [
      { name: "linkedin", href: "/" },
      { name: "github", href: "/" },
      { name: "contact", href: "/" },
    ],
  },
  {
    heading: "legal",
    links: [{ name: "privacy policy", href: "/" }],
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
          <p>{dateTime ? dateTime.toLocaleTimeString() : ""}</p>
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
