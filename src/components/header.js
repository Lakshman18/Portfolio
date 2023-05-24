import '../App.css';
import React from 'react';  
import Typed from 'react-typed';
import StarfieldAnimation from 'react-starfield-animation';

function Header() {
    return (
      <div>
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center " >
        <StarfieldAnimation
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%'
        }}
      />
            <div className="hero-container" data-aos="fade-in">
            <h5>I'm</h5>
            <h1>Lakshman</h1>
            <p className="intro-subtitle typed">
                <span className="text-slider-items"></span>
                  <Typed
                    strings={[
                      "Web Designer",
                      "Web Developer",
                      "Front End Developer",
                      "Learner"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
              </p>
            
            </div>
        </section>

      </div>
    );

} 
  export default Header;