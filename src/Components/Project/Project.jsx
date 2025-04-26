import React from "react";
import "./Project.css";
import proj1 from "../../assets/proj1.png";
import proj2 from "../../assets/proj2.png";
import proj4 from "../../assets/proj4.png";
import proj3 from "../../assets/proj3.png";
import proj5 from "../../assets/proj5.png";
import proj6 from "../../assets/proj6.png";

const Project = () => {
  return (
    <div id="project" className="project">
      <h1 className="title">My Projects</h1>

      {/*begining of the web development projects*/}
      <h3 className="sub-topic">Web Development</h3>
      <div className="projects1">
        <div className="pro-cart-w">
          <a
            className="pro-link"
            href="https://github.com/SNimsara/portfolio-gmsn"
          >
            <div className="pro-img-w">
              <img src={proj5} alt="project 5 img" />
            </div>
          </a>
          <h3>Portfolio Website</h3>
          <p>
            Built a personal portfolio website using React.js, with a
            custom-designed UI for an interactive and engaging experience.
            Showcasing my skills, projects, and achievements, along with easy CV
            access.
          </p>
          <a
            className="repolink"
            href="https://github.com/SNimsara/portfolio-gmsn"
          >
            Repositry
          </a>
        </div>

        <div className="pro-cart-w">
          <a
            className="pro-link"
            href="https://github.com/SNimsara/Glos-Website"
          >
            <div className="pro-img-w">
              <img src={proj6} alt="project 6 img" />
            </div>
          </a>
          <h3>GLOS Jewelers</h3>
          <p>
            Designed and developed a e-commerce frontend for a jewelry shop
            using React. Built an elegant UI with smooth navigation and
            interactive product displays. Ensured optimized performance with a
            well-structured component-based architecture
          </p>
          <a
            className="repolink"
            href="https://github.com/SNimsara/Glos-Website"
          >
            Repositry
          </a>
        </div>
      </div>
      {/*end of the web development projects*/}

      {/*begining of the ui design projects*/}
      <h3 className="sub-topic">UI Design</h3>
      <div className="projects2">
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
              <img src={proj3} alt="project 4 img" />
            </div>
          </a>
          <h3>GLOS Jewelers</h3>
          <p>
            A modern and elegant UI design for GLOS Jewelers, created to reflect
            the brand’s luxury and enhance the online shopping experience.
          </p>
        </div>
      </div>
      {/*end of the ui design projects*/}
    </div>
  );
};

export default Project;
