import React from 'react'
import './About.css'
import { IoIosSchool } from "react-icons/io";
import { FaQuestionCircle } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-main">
      <div className="about-left">
        <div className="about-circle"></div>
        <div className='about-circle1'></div>
      </div>
      <div className="about-right">
        <div className="about-right-top">
          <div><h1><IoIosSchool /></h1></div>
          <div><h1>Education</h1></div>
          <div><p>B.Tech(Information Technology) from
          Rajkiya Engineering College <span>Bijnor</span>.</p></div>
        </div>
        <div className="about-right-bottom">
          <div><h2>About me <FaQuestionCircle /></h2></div>
          <div><p>I am a passionate and self-taught MERN stack developer with a drive for learning and adapting. As the first graduate in my family, I have taken every educational step independently, learning from the experiences of others. Coming from a Hindi-medium background, transitioning to an English-based B.Tech program was a challenge, but I graduated without any backlogs. After a brief period of preparing for government exams, I realized my true passion lies in web development. Over the past year, I’ve honed my skills in HTML, CSS, JavaScript, MongoDB, MySQL, Express.js, Node.js, React, and more, all through self-study via YouTube. I am eager to bring my problem-solving abilities and determination to the professional world.</p></div>
        </div>
      </div>
    </div>
  )
}

export default About