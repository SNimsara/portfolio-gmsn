import React, { useRef, useState } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <input type="checkbox" id="nav-active" />
      <label for="nav-active" className="nav-i-open">
        <FontAwesomeIcon icon={faBars} className="navmob-menu-open" />
      </label>
      <ul className="nav-menu">
        <label for="nav-active" className="nav-i-close">
          <FontAwesomeIcon icon={faXmark} className="navmob-menu-close" />
        </label>

        <li>
          <AnchorLink
            className={`anc-link ${menu === "home" ? "active" : ""}`}
            offset={60}
            href="#home"
          >
            <p onClick={() => setMenu("home")}> Home </p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className={`anc-link ${menu === "about" ? "active" : ""}`}
            offset={60}
            href="#about"
          >
            <p onClick={() => setMenu("about")}> About me </p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className={`anc-link ${menu === "skills" ? "active" : ""}`}
            offset={60}
            href="#skills"
          >
            <p onClick={() => setMenu("skills")}> Skills </p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className={`anc-link ${menu === "project" ? "active" : ""}`}
            offset={60}
            href="#project"
          >
            <p onClick={() => setMenu("project")}> Project </p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className={`anc-link ${menu === "contact" ? "active" : ""}`}
            offset={60}
            href="#contact"
          >
            <p onClick={() => setMenu("contact")}> Contact </p>
          </AnchorLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
