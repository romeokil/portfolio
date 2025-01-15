import React from 'react';
import { useState } from 'react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Navbar from './components/Navbar.jsx'
import Project from './components/Project.jsx'
import Contact from './components/Contact.jsx'
function App() {
 return (
  <>
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Contact/>
  </>
 )
}

export default App;
