import React, { useRef, useState } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const [isMenuOpen, setIsMenuOpen] = useState(false); // state to manage menu visibility

  const handleMenuOpen = () => setIsMenuOpen(true);
  const handleMenuClose = () => setIsMenuOpen(false);

  return (
    <div className="navbar">
      {!isMenuOpen && (
        <button className="nav-mob-b" onClick={handleMenuOpen}>
          <FontAwesomeIcon icon={faBars} className="navmob-menu-open" />
        </button>
      )}
      <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <button className="nav-mob-b" onClick={handleMenuClose}>
          <FontAwesomeIcon icon={faXmark} className="navmob-menu-close" />
        </button>
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
