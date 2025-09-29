import React from "react";
import {
  HouseIcon,
  InfoIcon,
  SquaresFourIcon,
  // AddressBookIcon,
  ArrowRightIcon,
} from "@phosphor-icons/react";
import Link from "next/link";

const routes = [
  { name: "home", path: "/", icon: <HouseIcon size={22} weight="fill" /> },
  { name: "about", path: "/about", icon: <InfoIcon size={22} weight="fill" /> },
  {
    name: "projects",
    path: "/projects",
    icon: <SquaresFourIcon size={22} weight="fill" />,
  },
  // {
  //   name: "contact",
  //   path: "/contact",
  //   icon: <AddressBookIcon size={22} weight="fill" />,
  // },
];

type MenuProps = {
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  openMenu: boolean;
};

const MenuRouteButton: React.FC<MenuProps> = ({ setOpenMenu, openMenu }) => {
  return (
    <>
      {routes.map((route, index) => (
        <Link
          key={index}
          href={route.path}
          className="menu-route-wrapper"
          onClick={() => setOpenMenu(false)}
        >
          <div className="route-container">
            <div className={`route-logo ${openMenu ? "route-logo-open" : ""}`}>
              <span className="icon-wrapper">
                <span className="route-first-icon">{route.icon}</span>
                <span className="route-last-icon">{route.icon}</span>
              </span>
            </div>

            <div className="route-wrapper">
              <div
                className={`route-name ${openMenu ? "route-name-open" : ""}`}
              >
                {route.name}
              </div>

              <span className={`route-go  ${openMenu ? "route-go-open" : ""}`}>
                <div className="route-des">
                  <span>go to {route.name}</span>
                </div>

                <div className="gta">
                  <ArrowRightIcon size={18} weight="regular" />
                </div>
              </span>
            </div>
          </div>
          <div
            className={`route-divider ${openMenu ? "route-divider-open" : ""}`}
          ></div>
        </Link>
      ))}
    </>
  );
};

export default MenuRouteButton;
