import React, { useState } from "react";
import MenuLogo from "./MenuLogo";
import MenuConainer from "./MenuConainer";

const Menu = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <div className="menu">
      <MenuLogo setOpenMenu={setOpenMenu} openMenu={openMenu} />

      <MenuConainer openMenu={openMenu} />
    </div>
  );
};

export default Menu;
