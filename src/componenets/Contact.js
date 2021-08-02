import React,{useState,useEffect} from 'react'
import '../css/Contact.css'
import { useForm } from '@formspree/react';
import {AiOutlineHome,BiPhoneCall,BsEnvelope} from 'react-icons/all'

const Contact=()=> {
  const [email,setEmail] = useState('')
  const [text,setText] = useState('')
  const [state, handleSubmit] = useForm('xayapjrk');
  

  useEffect(() => {
   if(state.succeeded){
     setEmail('')
     setText('')
   }
  
  }, [])

  

  return (
    <div id="contact" className="contact-container" >
      <h1>Contact</h1>
      <div className="contact-underline"></div>
      <div className="contact-item-container">
    <form onSubmit={handleSubmit} >
      <div className="form-group">
      <input 
        id="email"
        type="email" 
        name="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      placeholder="Enter your email"/>
      </div>
      <div className="form-group">
        <textarea 
        id="message"
        name="message"
        value={text}
        onChange={(e)=>setText(e.target.value)}
        placeholder="Leave a message"></textarea>
      </div>
      <button type="submit" className="form-btn">submit</button>
    </form>
    <div className="contact-detail-container">
      <div className="contact-detail">
      <span><AiOutlineHome/></span>
      <div style={{textAlign:"left"}}>
      <h3>Accra,Ghana</h3>
      <p>Ablekuma,Manhean</p>
      </div>
      </div>
      <div className="contact-detail">
      <span><BiPhoneCall/></span>
      <div style={{textAlign:"left"}}>
      <h3>Phone</h3>
      <p>+233548566497</p>
      </div>
      </div>
      <div className="contact-detail">
      <span><BsEnvelope/></span>
      <div style={{textAlign:"left"}}>
      <h3>Email</h3>
      <p>dannyasare29@gmail.com</p>
      </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Contact
