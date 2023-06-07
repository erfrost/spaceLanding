import React, { useState } from "react";
import Header from "../../components/header/header";
import { useMediaQuery } from "react-responsive";
import "./crewPage.css";
import crewMenu from "../../assets/crewMenu.svg";
import data from "../../data.json";
import hurley from "../../assets/crew/image-douglas-hurley.png";
import shuttleworth from "../../assets/crew/image-mark-shuttleworth.png";
import glover from "../../assets/crew/image-victor-glover.png";
import ansari from "../../assets/crew/image-anousheh-ansari.png";

const CrewPage = () => {
  const [i, setI] = useState(0);
  const isMobileDevice = useMediaQuery({ maxWidth: "450px" });
  const crewData = data.crew;

  return (
    <div
      className={
        isMobileDevice ? "background-home-mobile" : "background-home-desktop"
      }
    >
      <Header />
      <div className="crew-content">
        <div className="crew-info">
          <div className="crew-info-title">
            <span style={{ opacity: 0.25 }}>02</span> Meet your crew
          </div>
          <div className="crew-info-main">
            <div className="role" style={{ fontSize: "32px", opacity: 0.5 }}>
              {crewData[i].role}
            </div>
            <div className="name" style={{ fontSize: "50px" }}>
              {crewData[i].name}
            </div>
            <div
              className="bio"
              style={{ fontSize: "18px", textTransform: "none" }}
            >
              {crewData[i].bio}
            </div>
          </div>
          <div className="crew-info-nav">
            <img
              className="crew-menu"
              src={crewMenu}
              alt="crewMenu"
              onClick={() => setI(0)}
            />
            <img
              className="crew-menu"
              src={crewMenu}
              alt="crewMenu"
              onClick={() => setI(1)}
            />
            <img
              className="crew-menu"
              src={crewMenu}
              alt="crewMenu"
              onClick={() => setI(2)}
            />
            <img
              className="crew-menu"
              src={crewMenu}
              alt="crewMenu"
              onClick={() => setI(3)}
            />
          </div>
        </div>
        <img
          className="crew-png"
          src={
            i === 0
              ? hurley
              : i === 1
              ? shuttleworth
              : i === 2
              ? glover
              : i === 3
              ? ansari
              : null
          }
          alt="crewPng"
        />
      </div>
    </div>
  );
};

export default CrewPage;
