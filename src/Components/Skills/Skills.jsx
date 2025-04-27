import React from "react";
import "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons/faHtml5";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons/faCss3Alt";
import { faReact } from "@fortawesome/free-brands-svg-icons/faReact";
import { faJs } from "@fortawesome/free-brands-svg-icons/faJs";
import { faFigma } from "@fortawesome/free-brands-svg-icons/faFigma";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <h1 className="title">My Skills</h1>
      <div className="skill-secs">
        <div className="skill-sec">
          <div className="logo">
            <FontAwesomeIcon icon={faHtml5} />
          </div>
          <p>HTML</p>
          <span>
            <hr style={{ width: "85%" }} />
          </span>
        </div>

        <div className="skill-sec">
          <div className="logo">
            <FontAwesomeIcon icon={faCss3Alt} />
          </div>
          <p>CSS</p>
          <span>
            <hr style={{ width: "80%" }} />
          </span>
        </div>

        <div className="skill-sec">
          <div className="logo">
            <FontAwesomeIcon icon={faReact} />
          </div>
          <p>React</p>
          <span>
            <hr style={{ width: "80%" }} />
          </span>
        </div>

        <div className="skill-sec">
          <div className="logo">
            <FontAwesomeIcon icon={faJs} />
          </div>
          <p>Java Script</p>
          <span>
            <hr style={{ width: "60%" }} />
          </span>
        </div>

        <div className="skill-sec">
          <div className="logo">
            <FontAwesomeIcon icon={faFigma} />
          </div>
          <p>Figma</p>
          <span>
            <hr style={{ width: "80%" }} />
          </span>
        </div>

        <div className="skill-sec">
          <div className="logo1">
            <FontAwesomeIcon icon={faCircle} />
          </div>
          <p>Canva</p>
          <span>
            <hr style={{ width: "70%" }} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
