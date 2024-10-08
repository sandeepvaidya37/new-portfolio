import React from "react";
import "./Skills.css";


const Skills = () => {
  return (
    <div className="skill-main">
      <div className="skill-main-top">
        <div className="skill-main-top-mongo"></div>
      </div>
      <div className="skill-main-bottom">
        <div className="skill-main-bottom-frontend">
          <div>
            <h2>Frontend Development:</h2>
          </div>
          <div>
            <ul>
              <li><span>Languages:</span>HTML, CSS, JavaScript, TypeScript </li>
              <li><span>Libraries/Frameworks:</span>React, Tailwind, Bootstrap, GSAP</li>
              <li><span>Tools:</span> Vite, Responsive Design, UI/UX Best Practices</li>
            </ul>
          </div>
        </div>
        <div className="skill-main-bottom-backend">
          <div>
            <h2>Backend Development:</h2>
          </div>
          <div>
            <ul>
              <li><span>Languages:</span> Node.js, Express.js</li>
              <li><span>Databases:</span> MongoDB, MySQL</li>
              <li><span>APIs:</span> RESTful APIs, Authentication (JWT, OAuth)</li>
            </ul>
          </div>
        </div>
        <div className="skill-main-bottom-tools">
          <div>
            <h2>Tools & Version Control:</h2>
          </div>
          <div>
            <ul>
              <li><span>Version Control:</span> Git, GitHub</li>
              <li><span>Package Managers:</span> npm, yarn</li>
              <li><span>Other Tools:</span> Vercel (Deployment), Firebase, Postman</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
