import './App.css';
import React from 'react';
import Navigation from  './components/nav';
import Header from  './components/header';
import About from  './components/about';
import Skills from  './components/skills';
import Resume from  './components/resume';
import Experience from  './components/experience';
import Portfolio from  './components/portfolio';
import Contact from  './components/contact';

function App() {



  return (
    <div>
      
      <Navigation/>
      <Header/>
      <main id="main">
        <About/>
        <Skills/>
        <Resume/>
        <Experience/>
        <Portfolio/>
        <Contact/>
      </main>

    </div>
  );
}

export default App;
