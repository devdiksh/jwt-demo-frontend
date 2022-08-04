import React from "react";

const NavButton = ({ children, handleClick }) => {
  return (
    <div onClick={handleClick} className="Navbuttonbox">
      <span className="Navbutton">{children}</span>
    </div>
  );
};

export default NavButton;
