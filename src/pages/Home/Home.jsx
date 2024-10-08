import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="main">
      <div className="left">
        <div>
          <p>Welcome to my Site.</p>
        </div>
        <div>
          <h1>
            Hi, I’m Sandeep, a MERN Stack <span>Developer</span>.{" "}
          </h1>
        </div>
        <div>
          <p>
            I am a focused and skilled MERN Stack Developer currently building
            full-stack web applications using modern technologies like MongoDB,
            Express.js, React, and Node.js. With a solid foundation in computer
            science , I am passionate about creating
            responsive, dynamic, and user-friendly applications.
          </p>
        </div>
        <div>
          <a href="/Mern87.pdf" download="Mern87.pdf">Download CV</a>
          <a href="https://github.com/sandeepvaidya37">GitHub</a>
        </div>
      </div>
      <div className="right">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
