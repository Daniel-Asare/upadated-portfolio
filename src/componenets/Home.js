import React from 'react'
import '../css/home.css'
import * as MdIcons from 'react-icons/md'
import { Link } from 'react-scroll'
const  Home =()=> {
  return (
    <section className="home">
      <div className="home-text">
        <p>Hi,
          <br/>
        I'm <b>D</b>aniel,
        <br/>
        front-end web developer</p>
      </div>
      <Link  to="about" smooth={true} 
      duration={1000}
      className="scroll-container">
        <h3>Scroll</h3>
        <div className="scroll-icons">
          <MdIcons.MdArrowDropDown/>
          <MdIcons.MdArrowDropDown/>
          <MdIcons.MdArrowDropDown/>
        </div>
      </Link>
    </section>
  )
}

export default Home
