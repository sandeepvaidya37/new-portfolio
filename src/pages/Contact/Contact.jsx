import React from 'react'
import './Contact.css'
import { VscGithubInverted } from "react-icons/vsc";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";

const Contact = () => {
  return (
    <div className='contact-main'> 
    <div className="contact-container">
      <p className='contact-heading'>Get in Touch</p>
      <h2>Contact <span>Me</span></h2>
      <div className="contact-container2"><div><a href="mailto:vaidyas690@gmail.com"><span><MdEmail /></span>G-mail</a></div><div><a href="https://github.com/sandeepvaidya37"><span><VscGithubInverted/></span>Github</a></div></div>
      <div className="contact-container2"><div><a href="https://www.linkedin.com/in/sandeep-vaidya?utm_source=share&utm_campaingn=share_via&utm_content=profile&utm_medium=android_app"><span><FaLinkedin /></span>Linkedin</a></div><div><a href="https://wa.me/918755975817"><span><RiWhatsappFill /></span>Whatsapp</a></div></div>
    </div>
    </div>
  )
}

export default Contact