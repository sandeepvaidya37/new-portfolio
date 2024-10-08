import { useState, useEffect } from 'react'
import './App.css'
import NavBar from './components/NavBar.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Skills from './pages/Skils/Skills.jsx'
import Projects from './pages/Projects/Projects.jsx'
import Contact from './pages/Contact/Contact.jsx'


function App() {

  const [state,setState] = useState('Home');
  const [pulse, setPulse]=useState("About");
  
  const componentsMap = {
    'Home': <Home />,
    'About': <About />,
    'Skills': <Skills />,
    'Projects': <Projects />,
    'Contact':<Contact/>
  };

  useEffect(() => {
    switch(state) {
      case 'Home':
        setPulse('About');
        break;
      case 'About':
        setPulse('Skills');
        break;
      case 'Skills':
        setPulse('Projects');
        break;
      case 'Projects':
        setPulse('Contact');
        break;
      case 'Contact':
        setPulse('Home');
        break;
      default:
        setPulse('Home');
    }
  }, [state]); 



  const pulseClicked =(state)=>{
    if(state=="Home"){
      setState("About")
    }
    if(state=="About"){
      setState("Skills")
    }
    if(state=="Skills"){
      setState("Projects")
    }
    if(state=="Projects"){
      setState("Contact")
    }
    if(state=="Contact"){
      setState("Home")
    }
  }

  

  return (
    <>
     <NavBar state={state} setState={setState} />
     <div onClick={()=>pulseClicked(state)} className='shortcut-button'><span>{pulse}</span></div>
     {componentsMap[state] || <Home />}
     
      
    </>
  )
}

export default App
