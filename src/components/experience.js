import '../App.css';
import React from 'react';


function Experience() {



  return (
    <div className="experience" id="experience">
            <div className="container">
                <header className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>Here is a little of my story</p>
                    <h2>Milestones</h2>
                </header>
                <div className="timeline"  data-aos="fade-in">

                    <div className="timeline-item left wow slideInRight" data-wow-delay="0.1s">
                        <div className="timeline-text">
                            <div className="timeline-date">2022 Sep - now</div>
                            <h2><a href="https://rizing.com/" target="_blank" style={{textDecoration:"none",color:"#000000"}}>Rizing</a></h2>
                            <h4>Associate Software Engineer</h4>
                        </div>
                    </div>

                    <div className="timeline-item right wow slideInLeft" data-wow-delay="0.1s">
                        <div className="timeline-text">
                            <div className="timeline-date">2022 Feb - 2022 Aug</div>
                            <h2><a href="https://www.resq.cloud/" target="_blank" style={{textDecoration:"none",color:"#000000"}}>ResQ Solutions Private Ltd</a></h2>
                            <h4>Associate Software Engineer</h4>
                        </div>
                    </div>

                    <div className="timeline-item left wow slideInRight" data-wow-delay="0.1s">
                        <div className="timeline-text">
                            <div className="timeline-date">2021 Aug - 2022 Feb</div>
                            <h2><a href="https://www.onsys.com.au" target="_blank" style={{textDecoration:"none",color:"#000000"}}>Onsys International Private Ltd </a></h2>
                            <h4>Trainee Software Engineer</h4>
                        </div>
                    </div>
                    
                    <div className="timeline-item right wow slideInLeft" data-wow-delay="0.1s">
                        <div className="timeline-text">
                            <div className="timeline-date">2018 - 2022</div>
                            <h2>Rajarata University of Sri Lanka </h2>
                            <h4>BSC in IT</h4>
                        </div>
                    </div>
					
					<div className="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                        <div className="timeline-text">
                            <div className="timeline-date">2018 - 2022</div>
                            <h2>University of Colombo School of Computing </h2>
                            <h4>Bachelor of Information Technology</h4>
                        </div>
                    </div>
					
                    <div className="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                        <div className="timeline-text">
                            <div className="timeline-date">2016 - 2018</div>
                            <h2>British Computer Society</h2>
                            <h4>Diploma in IT</h4>
                        </div>
                    </div>
                    <div className="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                        <div className="timeline-text">
                            <div className="timeline-date">2002 - 2016</div>
                            <h2>Hindu College-Colombo 04</h2>
                            <h4>Primary & Secondary Education</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Experience;
