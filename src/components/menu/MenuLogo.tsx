import React from "react";

type MenuLogoProps = {
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  openMenu: boolean;
};

const MenuLogo: React.FC<MenuLogoProps> = ({ setOpenMenu, openMenu }) => {
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div
      className={`menu-logo ${openMenu ? "menu-is-open" : ""}`}
      onClick={handleOpenMenu}
    >
      <span className="menu-logo-wrapper">
        <span className="menu-logo-open">
          <p>menu</p>
          <div className="underline hide-mobile"></div>
        </span>

        <span className="menu-logo-close">
          <p>close</p>
        </span>
      </span>
    </div>
  );
};

export default MenuLogo;
