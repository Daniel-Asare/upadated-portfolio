import React, {useEffect} from 'react'
import '../css/Project.css'
import Project1 from '../assest/e-com.png'
import Project2 from '../assest/conss.png'
import Project3 from '../assest/landin.png'

const Project =()=> {

  return (
    <div data-aos="fade-up" id='project' className="project-container">
      <h1>Projects</h1>
      <div className="project-underline"></div>
      <div className="project-list-container">
      <div className="single-project">
        <img src={Project1} alt="" />
        <div className="project-detail">
          <a href="https://danny-ecommerce.netlify.app/" target="_blank" className="project-detail-btn">View Site</a>
        </div>
        </div>
      <div className="single-project">
        <img src={Project2} alt="" />
        <div className="project-detail">
          <a href="https://danny-consulting-agency.netlify.app/" target="_blank" className="project-detail-btn">View Site</a>
        </div>
        </div>
      <div className="single-project">
        <img src={Project3} alt="" />
        <div className="project-detail">
          <a href="https://landng-page.netlify.app/#" target="_blank" className="project-detail-btn">View Site</a>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Project
