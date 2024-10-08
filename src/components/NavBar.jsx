import React from "react";
import "./NavBar/NavBar.css";
import { IoMdHome } from "react-icons/io";
import { MdPerson } from "react-icons/md";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { FaDiagramProject } from "react-icons/fa6";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { useState } from 'react';
import Skills from "../pages/Skils/Skills";


const NavBar = ({state, setState}) => {
  
  const [hamburger, setHamburger] = useState(false);

const  hamburgerClicked =()=>{
  if(hamburger){
    setHamburger(false);
  }else{
    setHamburger(true);
  }
}

  return (
    <div className="navbar">
      <div className="logo">
        <p>S</p>
      </div>
      <div className="menu">
        <p onClick={()=>setState('Home')} className={`${state=='Home'?'active':''}`}>
          <span>
            <IoMdHome />
          </span>
          Home
        </p>
        <p onClick={()=>setState('About')} className={`${state=='About'?'active':''}`}>
          <span>
            <MdPerson />
          </span>
          About me
        </p>
        <p onClick={()=>setState('Skills')} className={`${state=='Skills'?'active':''}`}>
          <span>
            <GiGiftOfKnowledge />
          </span>
          Skils
        </p>
        <p onClick={()=>setState('Projects')} className={`${state=='Projects'?'active':''}`}>
          <span>
            <FaDiagramProject />
          </span>
          Project
        </p>
        <p onClick={()=>setState('Contact')} className={`${state=='Contact'?'active':''}`}>
          <span>
            <MdOutlineWifiCalling3 />
          </span>
          Contact me
        </p>
      </div>
      <div onClick={hamburgerClicked} className={`hamburger ${hamburger?'cross':''}`}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {
        hamburger?
        <div className={`menu-options ${hamburger?'menu-options-animation':''} `}>
      <p onClick={()=>setState('Home')} className={`${state=='Home'?'active':''}`}>
          <span>
            <IoMdHome />
          </span>
          Home
        </p>
        <p onClick={()=>setState('About')} className={`${state=='About'?'active':''}`}>
          <span>
            <MdPerson />
          </span>
          About me
        </p>
        <p onClick={()=>setState('Skills')} className={`${state=='Skills'?'active':''}`}>
          <span>
            <GiGiftOfKnowledge />
          </span>
          Skils
        </p>
        <p onClick={()=>setState('Projects') } className={`${state=='Projects'?'active':''}`} >
          <span>
            <FaDiagramProject />
          </span>
          Project
        </p>
        <p onClick={()=>setState('Contact')} className={`${state=='Contact'?'active':''}`}>
          <span>
            <MdOutlineWifiCalling3 />
          </span>
          Contact me
        </p>
      </div>:null
      }
      

    </div>
  );
};

export default NavBar;
