"use client";

import React from "react";
import {
  HouseIcon,
  InfoIcon,
  SquaresFourIcon,
  // AddressBookIcon,
} from "@phosphor-icons/react";
import Image from "next/image";
import Menu from "../menu/Menu";
import Link from "next/link";

const navLinks = [
  {
    href: "/",
    label: "HOME",
    icon: <HouseIcon size={22} weight="fill" />,
  },
  {
    href: "/about",
    label: "ABOUT",
    icon: <InfoIcon size={22} weight="fill" />,
  },
  {
    href: "/projects",
    label: "PROJECTS",
    icon: <SquaresFourIcon size={22} weight="fill" />,
  },
  // {
  //   href: "/contact",
  //   label: "CONTACT",
  //   icon: <AddressBookIcon size={22} weight="fill" />,
  // },
];

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Image
          src="/images/logo-transparent.png"
          alt="logo"
          width={36}
          height={36}
        />
      </div>

      <div className="links-wrapper">
        {navLinks.map(({ href, label, icon }) => (
          <Link key={href} href={href} className="icon-animation hide-mobile">
            <div className="icon-animation-wrapper">
              <div className="icon">{icon}</div>
              <div className="link-name">{label}</div>
            </div>
          </Link>
        ))}

        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
