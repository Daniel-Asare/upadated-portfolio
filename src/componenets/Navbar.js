import React,{useState} from 'react';
import * as RiIcons from 'react-icons/ri'
import { Link } from 'react-scroll';
import '../css/nav.css'


const Navbar =()=> {
  const [toggle,setToggle] = useState(true)
  return (
    <header>
      <nav>
      <h1>DANNY</h1>
      <ul className={`nav-links ${toggle? "toggle" : ""}`}> 
       <Link to="home" smooth={true} duration={1000} onClick={()=>setToggle(true)}><li>Home</li></Link>
       
       <Link to="about" smooth={true} duration={1000} onClick={()=>setToggle(true)}><li>About</li></Link> 

       <Link to="project" smooth={true} duration={1000} onClick={()=>setToggle(true)}><li>Portfolio</li></Link>

       <Link to="contact" smooth={true} duration={1000} onClick={()=>setToggle(true)}><li>Contact</li></Link> 
      </ul>
      <span className="nav-icon" onClick={()=>setToggle(!toggle)}>
      <RiIcons.RiBarChartHorizontalLine/>
      </span>
      </nav>
    </header>
  )
}

export default Navbar
