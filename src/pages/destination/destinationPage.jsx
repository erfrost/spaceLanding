import React, { useEffect, useState } from "react";
import Header from "../../components/header/header";
import moon from "../../assets/destination/image-moon.png";
import mars from "../../assets/destination/image-mars.png";
import europa from "../../assets/destination/image-europa.png";
import titan from "../../assets/destination/image-titan.png";
import data from "../../data.json";
import "./destinationPage.css";
import { useMediaQuery } from "react-responsive";

const DestinationPage = () => {
  const [planet, setPlanet] = useState("Moon");
  const [i, setI] = useState(0);
  const isMobileDevice = useMediaQuery({ maxWidth: "450px" });
  const destinationData = data.destinations;

  useEffect(() => {
    setI(destinationData.findIndex((item) => item.name === planet));
  }, [planet]);

  return (
    <div
      className={
        isMobileDevice
          ? "background-destination-mobile"
          : "background-destination-desktop"
      }
    >
      <Header />
      <div className="destination-content">
        <div className="destination-planet">
          <div className="destination-planet-title">
            <span style={{ opacity: 0.25 }}>01</span> Pick your destination
          </div>
          <img
            className="planetPng"
            src={
              i === 0
                ? moon
                : i === 1
                ? mars
                : i === 2
                ? europa
                : i === 3
                ? titan
                : null
            }
            alt={planet}
          />
        </div>
        <div className="destination-info">
          <div className="planet-navigation">
            <div
              className="header-nav destination-nav"
              onClick={() => setPlanet("Moon")}
            >
              <div className="header-nav-title destination-nav-title">MOON</div>
              <div className="header-nav-border"></div>
            </div>
            <div
              className="header-nav destination-nav"
              onClick={() => setPlanet("Mars")}
            >
              <div className="header-nav-title destination-nav-title">MARS</div>
              <div className="header-nav-border"></div>
            </div>
            <div
              className="header-nav destination-nav"
              onClick={() => setPlanet("Europa")}
            >
              <div className="header-nav-title destination-nav-title">
                EUROPA
              </div>
              <div className="header-nav-border"></div>
            </div>
            <div
              className="header-nav destination-nav"
              onClick={() => setPlanet("Titan")}
            >
              <div className="header-nav-title destination-nav-title">
                TITAN
              </div>
              <div className="header-nav-border"></div>
            </div>
          </div>
          <div className="planet-description">
            <div className="planet-description-title">{planet}</div>
            <div className="planet-description-main">
              {destinationData[i].description}
            </div>
          </div>
          <div className="separator"></div>
          <div className="planet-way">
            <div className="planet-way-box">
              <div className="planet-way-title">AVG. DISTANCE</div>
              <div className="planet-way-main">
                {destinationData[i].distance}
              </div>
            </div>
            <div className="planet-way-box">
              <div className="planet-way-title">EST. TRAVEL TIME</div>
              <div className="planet-way-main">{destinationData[i].travel}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationPage;
