import React from "react";
import "./header.css";
import logo from "../../assets/shared/logo.svg";
import mobileMenu from "../../assets/mobileMenu.svg";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const isMobileDevice = useMediaQuery({ maxWidth: "450px" });

  return (
    <div className="header-box">
      <img className="header-logo" src={logo} alt="logo" />
      {isMobileDevice ? (
        <img className="mobile-menu" src={mobileMenu} alt="mobileMenu" />
      ) : (
        <div className="header-blur">
          <div
            className="header-nav"
            onClick={() => (window.location.href = "/")}
          >
            <div className="header-nav-title">00 HOME</div>
            <div className="header-nav-border"></div>
          </div>
          <div
            className="header-nav"
            onClick={() => (window.location.href = "/destination")}
          >
            <div className="header-nav-title">01 DESTINATION</div>
            <div className="header-nav-border"></div>
          </div>
          <div
            className="header-nav"
            onClick={() => (window.location.href = "/crew")}
          >
            <div className="header-nav-title">02 CREW</div>
            <div className="header-nav-border"></div>
          </div>
          <div
            className="header-nav"
            onClick={() => (window.location.href = "/technology")}
          >
            <div className="header-nav-title">03 TECHNOLOGY</div>
            <div className="header-nav-border"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
