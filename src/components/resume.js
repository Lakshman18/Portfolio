import '../App.css';
import React from 'react';
import CV from './blank.pdf';
// import cv from './Lakshman-Sivarathan-Resume.pdf';
import cv from './blank.pdf';


function Resume() {

  return (
    <div>
      <section id="resume" className="resume">
      <div className="banner wow zoomIn" data-wow-delay="0.1s">
            <div className="container"  data-aos="fade-in">
                <div className="section-header text-center">
                    <h2><span>Resume</span> </h2>
                </div>
                <div className="container banner-text">
                    <p>
					“You can do anything you set your mind to.” <br/>
							- Benjamin Franklin<br/><br/>
					Got inspired? Just Download my CV!
					
                    </p>
                    <a className="btn" href={cv} download="Lakshman-Sivarathan-Resume.pdf"  >Download</a>
                </div>
            </div>
        </div>
    </section>
    </div>
  );
}

export default Resume;
