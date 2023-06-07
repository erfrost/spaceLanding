import React from "react";
import Header from "../../components/header/header";
import "./homePage.css";
import { useMediaQuery } from "react-responsive";

const HomePage = () => {
  const isMobileDevice = useMediaQuery({ maxWidth: "450px" });

  return (
    <div
      className={
        isMobileDevice ? "background-home-mobile" : "background-home-desktop"
      }
    >
      <Header />
      <div className="home-content">
        <div className="home-content-text">
          <div className="home-content-text-1">SO, YOU WANT TO TRAVEL TO</div>
          <div className="home-content-text-2">SPACE</div>
          <div className="home-content-text-3">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </div>
        </div>
        <button
          className="home-content-btn"
          onClick={() => (window.location.href = "/destination")}
        >
          EXPLORE
        </button>
      </div>
    </div>
  );
};

export default HomePage;
