import '../App.css';
import React, {useState } from 'react';  


function About() {

  const getAge = () =>{
    let today = new Date();
    let age = today.getFullYear() - 1997;
    let m = today.getMonth() - 10;
    let d = today.getDate();
    let age1;
    if (m < 0 || (m === 0 && d < 18)) 
    {
        age1 =age-1;
    }
  return age1;        
  }

  const company = "Rizing";

  const [details] = useState(
    {
      dob:"18 Oct 1997",
      university:"Rajarata University of Srilanka",
      // site:"https://lakshman-77671.web.app",
      phone:"0770769962",
      city:"Dehiwela,Sri Lanka",      
      age: getAge(),
      degree:"Bsc in IT",
      email:"97lakshman@gmail.com",
      freelance:"Available",
      section1:`I’m an associate software engineer at ${company}. I am a Self-Motivated graduate from the Rajarata University of SriLanka.`,
      section2:"I design and code beautifully simple things, and I love what I do. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, I'll learn faster and much more."
    }
  );

  return (
    <div>
      <section id="about" class="about">
      <div class="container">

		<header class="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>LEARN ABOUT ME</p>
                    <h2>About</h2>
        </header>

        <div class="row">
          <div class="col-lg-4" data-aos="fade-right">
            <img src="assets/img/profile-img.jpg" class="img-fluid" alt="" />
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              {/* <h3>UI/UX Designer &amp; Web Developer.</h3>  */}
			
            <p class="fst-italic"> {details.section1} </p>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>{details.dob}</span></li>
                  {/* <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span>{details.site}</span></li> */}
                  <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>{details.email}</span></li>                  
                  <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>{details.phone}</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>{details.city}</span></li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>{details.age}</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>{details.degree}</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>University:</strong> <span>{details.university}</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>{details.freelance}</span></li>
                </ul>
              </div>
            </div>

            <p class="fst-italic"> {details.section2} </p>
          </div>
        </div>

      </div>
    </section>

    </div>
  );
}

export default About;
