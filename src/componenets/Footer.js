import React from 'react'
import '../css/Footer.css'

const Footer =()=> {

  const date = new Date().getFullYear();
  return (
    <div className="footer-container">
      <div className="social-media-container">
        <a href="https://github.com/Daniel-Asare" target="_blank" ><img src="https://img.icons8.com/ios-glyphs/48/000000/github.png"/></a>
        <a href="https://www.linkedin.com/in/daniel-asare-436163127/" target="_blank" ><img src="https://img.icons8.com/color/48/000000/linkedin.png"/></a>
        {/* <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" ><img src="https://img.icons8.com/color/48/000000/gmail-new.png"/></a> */}
        <a href="https://twitter.com/Dev_danny29" target="_blank" ><img src="https://img.icons8.com/color/48/000000/twitter.png"/></a>
      </div>
      <p>Copyright&copy;{date} Daniel Asare, All right reserved</p>
    </div>
  )
}

export default Footer
