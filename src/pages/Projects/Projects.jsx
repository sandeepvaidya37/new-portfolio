import React from 'react'
import './Projects.css'
import { FaLink } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

const Projects = () => {
  return (
    <div className='projects-main'>
      <div className="projects-main-card1">
            <div className="projects-main-card1-image">
              <div className='projects-main-card1-image-link1'><a href="https://dadees-restro.onrender.com/"><FaLink /></a></div>
              <div className='projects-main-card1-image-link2'><a href="https://github.com/sandeepvaidya37/Dadees_Restro"><SiGithub /></a></div>
            </div>
            <div className="projects-main-card1-title"><h3>Dadees Restro Food Delivery Web-app:</h3></div>
            <div className="projects-main-card1-description"><p><strong>Dadees Restro:</strong> A full-stack restaurant website built using the MERN stack. Users can log in, browse the menu, and place food orders with secure online payments via Stripe. The site includes an admin dashboard for managing menu items and tracking orders. Admins can update order statuses through phases: Processing, Out for Delivery, and Delivered. The project highlights user authentication, payment integration, and a dynamic order management system.</p></div>
            <div className="projects-main-card1-tech"><p><strong>Testing email/pass:</strong> vaidyas680@gmail.com/Vaidya@123</p></div>
      </div>
      <div className="projects-main-card2">
      <div className="projects-main-card2-image">
              <div className='projects-main-card2-image-link1'><a href="https://sandesh-chat-app.vercel.app/"><FaLink /></a></div>
              <div className='projects-main-card2-image-link2'><a href="https://github.com/sandeepvaidya37/Sandesh-Chat-App"><SiGithub /></a></div>
            </div>
            <div className="projects-main-card2-title"><h3>Sandesh Chat Web-app:</h3></div>
            <div className="projects-main-card2-description"><p><strong>Sandesh Chat App:</strong> A real-time chat application built with React for the frontend and Firebase for the backend. It features user authentication via email, password reset functionality, and real-time messaging, including text and images. Users can personalize their profiles by adding a bio and changing their profile pictures. The app also allows users to search for others by username, making it easy to connect and chat.</p></div>
            <div className="projects-main-card2-tech"><p><strong>Testing email/pass:</strong> vaidyas680@gmail.com/Vaidya@123</p></div>
      </div>
      <div className="projects-main-card3">
      <div className="projects-main-card3-image">
              <div className='projects-main-card3-image-link1'><FaLink />
              </div>
              <div className='projects-main-card3-image-link2'><a href="https://github.com/sandeepvaidya37/new-portfolio"><SiGithub /></a></div>
            </div>
            <div className="projects-main-card3-title"><h3>My Portfolio Web-app:</h3></div>
            <div className="projects-main-card3-description"><p><strong>My Portfolio Website:</strong> A fully custom-designed portfolio built using React. This website showcases my skills, projects, and experience in web development. It includes smooth navigation, responsive design, and dynamic content sections that highlight my work, skills, and ways to contact me. The portfolio is built to provide a professional and engaging user experience, reflecting my expertise as a MERN stack developer.</p></div>
            <div className="projects-main-card3-tech"><p><strong> Email & Contact No:</strong> vaidyas690@gmail.com/+918755975817</p></div>
      </div>
    </div>
  )
}

export default Projects
