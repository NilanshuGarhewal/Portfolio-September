import React from "react";
import MenuBottom from "./MenuBottom";
import MenuRouteButton from "./MenuRouteButton";

type MenuProps = {
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  openMenu: boolean;
};

const MenuConainer: React.FC<MenuProps> = ({ setOpenMenu, openMenu }) => {
  return (
    <div className={`menu-container ${openMenu ? "menu-open" : "menu-closed"}`}>
      <div
        className={`menu-wrapper ${
          openMenu ? "menu-wrapper-visible" : "menu-wrapper-hidden"
        }`}
      >
        <span className="menu-name">
          <p>Nilanshu Garhewal</p>
        </span>

        <div className={`divider ${openMenu ? "divider-open" : ""}`}></div>

        <div className="menu-link-section">
          <MenuRouteButton setOpenMenu={setOpenMenu} openMenu={openMenu} />
        </div>
      </div>

      <MenuBottom openMenu={openMenu} />
    </div>
  );
};

export default MenuConainer;
