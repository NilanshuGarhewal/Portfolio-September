import React from "react";

type MenuBottomProps = {
  openMenu: boolean;
};

const MenuBottom = ({ openMenu }: MenuBottomProps) => {
  return (
    <div
      className={`menu-social-wrapper ${
        openMenu ? "menu-social-open" : "menu-social-closed"
      }`}
    >
      <span className="menu-link-wrapper">
        <div className="menu-link">
          <a href="https://linkedin.com/nilanshugarhewal">linkedin</a>

          <div className="link-dot"></div>
        </div>

        <div className="menu-link hide-mobile">
          <a href="https://linkedin.com/nilanshugarhewal">github</a>

          <div className="link-dot"></div>
        </div>
      </span>

      <span>Made with ☕ in Bhopal</span>
    </div>
  );
};

export default MenuBottom;
