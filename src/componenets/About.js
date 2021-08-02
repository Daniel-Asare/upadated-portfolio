import React, {useEffect} from 'react'
import '../css/about.css'
import profileImage from '../assest/profile2.jpg'
import {ImHtmlFive,FaCss3Alt,IoLogoJavascript,FaReact} from 'react-icons/all';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function About() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section  className='about' id="about">
      <h1>About <b>Me</b></h1>
      <div className="about-underline"></div>
      <div className="about-content">
        <img src={profileImage} alt="image" className="about-image" />
        <div className="about-text">
          <p>I am a Front-End Developer and I have a firm knowledge of HTML CSS and Javascript language and possess a good knowledge of computer software packages(frameworks and tools) thats are used in todays technology.
          <br/>
          On a personal level, I am highly motivated, result oriented, self-driven, hard-working, fast learner and constantly seeking to improve my skills
          <br />
          In addition to this, I have the ability to adapt to any type of team environment and I get along with others when working in a group. i also have the ability to work independently whiles staying on schedule and meeting tight deadlines.
          </p>
        </div>
      </div>
      <h1>Skills</h1>
      <div className="about-underline"></div>
        <Carousel containerClass="carousel-container" responsive={responsive} autoPlay={true} autoPlaySpeed={500} arrows={false} infinite={true} transitionDuration={2000}>
      
      <div className="skills-icon">
        <span>
        <img src="https://img.icons8.com/color/144/000000/html-5--v1.png"/>
        </span>
        <h3>HTML5</h3>
        </div>
        <div className="skills-icon">
        <span>
        <img src="https://img.icons8.com/color/144/000000/css3.png"/>
        </span>
        <h3>CSS</h3>
        </div>
        <div className="skills-icon">
          <span>
          <img src="https://img.icons8.com/color/144/000000/javascript--v1.png"/>
          </span>
          <h3>JAVASCRIPT</h3>
        </div>
        <div className="skills-icon">
          <span>
          <img src="https://img.icons8.com/color/144/000000/react-native.png"/>
          </span>
          <h3>REACT JS</h3>
        </div>
     
        </Carousel>

      
    </section>
  )
}

export default About
