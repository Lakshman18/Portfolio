import '../App.css';
import React, {useState } from 'react';

function Skills() {

  const [lskills]=useState([
    {id:"1", content:"PYTHON",percentage: "60%", value: "60"},
    {id:"2", content:"DJANGO",percentage: "60%", value: "60"},
    {id:"3", content:".NET",percentage: "50%", value: "50"},
    {id:"4", content:"REACT JS",percentage: "65%", value: "65"},
    {id:"5", content:"C++",percentage: "60%", value: "60"},
    {id:"11", content:"Knockout Js",percentage: "50%", value: "50"},
  ]);

  const [rskills]=useState([
    {id:"6", content:"HTML",percentage: "70%", value: "70"},
    {id:"7", content:"CSS",percentage: "60%", value: "60"},
    {id:"8", content:"Angular",percentage: "40%", value: "40"},
    {id:"9", content:"JS",percentage: "55%", value: "55"},
    {id:"10", content:"C",percentage: "60%", value: "60"},
    {id:"12", content:"Node Js",percentage: "40%", value: "40"},
  ]);


  return (
  <div>
    <section id="skills" className="skills" >

      <div className="container">	  
		    <header className="section-header text-center wow zoomIn" data-wow-delay="0.1s">  
					<p>MY SKILLS</p>		
          <h2>Skills</h2>
        </header>

        <div className="row skills-content">
          <div className="col-lg-6" data-aos="fade-up">

            {lskills.map(skill => (
              <div> 
                <strong><span className="skill" key={skill.id}>{skill.content} <i className="val float-right">{skill.percentage}</i></span></strong>
                <div className="progress">              
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" style={{ width: skill.percentage }} aria-valuenow={skill.value} aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>	
              </div>
            ))}          		
			
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

            {rskills.map(skill => (
                <div> 
                  <strong><span className="skill">{skill.content} <i className="val float-right">{skill.percentage}</i></span></strong>
                  <div className="progress">              
                    <div className="progress-bar-wrap">
                      <div className="progress-bar" role="progressbar" style={{ width: skill.percentage }} aria-valuenow={skill.value} aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>	
                </div>
              ))}

          </div>
        </div>
      </div>
    </section>
  </div>
  );
}

export default Skills;
