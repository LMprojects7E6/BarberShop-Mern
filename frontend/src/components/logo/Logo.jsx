import React from "react";
import "./logo.css";

const Logo = () => {
  return (
    <div className="flex">
      <a href="/" className="backGround_logo flex">
        <img
          src={require("../../assets/img/img_logo.png")}
          className="style_img-logo"
          alt="logo"
        />
      </a>
    </div>
  );
};

export default Logo;
