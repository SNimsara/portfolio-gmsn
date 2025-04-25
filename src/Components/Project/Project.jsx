import React from "react";
import "./Project.css";
import proj1 from "../../assets/proj1.png";
import proj2 from "../../assets/proj2.png";
import proj4 from "../../assets/proj4.png";
import proj3 from "../../assets/proj3.png";

const Project = () => {
  return (
    <div id="project" className="project">
      <h1 className="title">My Projects</h1>
      <div className="projects">
        <div className="pro-cart">
          <a
            className="pro-link"
            href="https://www.behance.net/gallery/220878641/Music-Player-App-Ui"
          >
            <div className="pro-img">
              <img src={proj2} alt="project 1 img" />
            </div>
          </a>
          <h3>Music Player App</h3>
          <p>
            An intuitive music player app UI design focused on seamless music
            browsing, playback, and playlist management.
          </p>
        </div>

        <div className="pro-cart">
          <a
            className="pro-link"
            href="https://www.figma.com/design/rOnMuSCNRo7x9Och4meozH/Smoothie-ordering-app?node-id=0-1&p=f&t=tvYAgOijTYbI0LYA-0"
          >
            <div className="pro-img">
              <img src={proj1} alt="project 2 img" />
            </div>
          </a>
          <h3>Smoothie Ordering App</h3>
          <p>
            A simple, user-friendly smoothie ordering app UI design for
            browsing, customizing, and ordering smoothies.
          </p>
        </div>

        <div className="pro-cart">
          <a
            className="pro-link"
            href="https://www.figma.com/design/fz5LlaSK0xGRA1GQyymnOc/comics-reading-app?node-id=19-173&t=SRx3x4IGY8il9VPY-0"
          >
            <div className="pro-img">
              <img src={proj4} alt="project 3 img" />
            </div>
          </a>
          <h3>Web Comics Reading App</h3>
          <p>
            An engaging web comic reading app UI design for exploring, reading,
            and saving favorite comics with ease.
          </p>
        </div>

        <div className="pro-cart">
          <a
            className="pro-link"
            href="https://www.behance.net/gallery/221006465/Jewelry-Shop-Website"
          >
            <div className="pro-img">
              <img src={proj3} alt="project 3 img" />
            </div>
          </a>
          <h3>GLOS Jewelers</h3>
          <p>
            A modern and elegant UI design for GLOS Jewelers, created to reflect
            the brand’s luxury and enhance the online shopping experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
