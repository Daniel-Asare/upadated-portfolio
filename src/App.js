import React from 'react'
import Home from "./componenets/Home";
import Navbar from "./componenets/Navbar";
import About from "./componenets/About";
import Project from "./componenets/Project";
import Contact from './componenets/Contact';
import ScrollToTop from './componenets/Top';
import Footer from './componenets/Footer';






function App() {
  return (
    <div>
     <Navbar/>
     <Home/>
     <About />
     <ScrollToTop/>
     <Project/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
