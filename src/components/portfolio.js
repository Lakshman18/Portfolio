import '../App.css';
import React, {useState, useEffect } from 'react';


function Portfolio() {

  const [projects]=useState([
    {id:"1", content:"This Portfolio-React", category:"personal", img_source: "assets/img/portfolio/port2.png", web_source:"", git_source:"https://github.com/Lakshman18/Lakshman", completed:"yes"},
    {id:"2", content:"Covid Tracker-React", category:"personal", img_source: "assets/img/portfolio/port3.PNG", web_source:"https://sleepy-ritchie-0ff5dd.netlify.app/", git_source:"https://github.com/Lakshman18/Covid_Tracker_React", completed:"yes"},
    {id:"3", content:"Todo App-React", category:"personal", img_source: "assets/img/portfolio/port4.PNG", web_source:"https://zen-newton-1803eb.netlify.app/", git_source:"https://github.com/Lakshman18/Todo_React", completed:"yes"},
    {id:"4", content:"Todo App-Django", category:"personal", img_source: "assets/img/portfolio/port5.jpeg", web_source:"", git_source:"https://github.com/Lakshman18/todo", completed:"yes"},
    {id:"5", content:"Covid Tracker-Django", category:"personal", img_source: "assets/img/portfolio/port6.jpg", web_source:"", git_source:"https://github.com/Lakshman18/virus", completed:"yes"},
    {id:"6", content:"Signal Processing-Python", category:"university", img_source: "assets/img/portfolio/port7.jpg", web_source:"", git_source:"assets/img/portfolio/portfolio-6.jpg", completed:"no"}
    
  ]); 

  const[select,setSelect] = useState("all"); 
  const[filtered,setFiltered] = useState([]);   

  const updateSelect = (e) =>{
    setSelect(e.target.value);
  }

  useEffect(() => {
    filter();
  }, [select,projects])


  const filter = () => {    
    switch(select){
      case 'all':
          setFiltered(projects);
          break;  
      case 'personal':
          setFiltered(projects.filter((x) => x.category === "personal"));
          break;
      case 'university':
          setFiltered(projects.filter((x) => x.category === "university"));
          break;
      case 'industry':
          setFiltered(projects.filter((x) => x.category === "industry"));
          break;  
      default:
        setFiltered(projects);
        break; 

      }}

      
  return (
    <div>
      <section id="portfolio" className="portfolio section-bg">
       <div className="container">
		
        <header className=" section-header text-center wow zoomIn" data-wow-delay="0.1s">                   
          <h2>My Excellent Portfolio</h2>
        </header>

        <div className="row"  data-aos="fade-in">
          <div className="col-12" id="portfolio-filter" onClick={updateSelect}>  

              <button  value="all" className={select==="all"?"filter-active":""} >All</button>
              <button value="personal" className={select==="personal"?"filter-active":""} >Personal</button>
              <button value="university" className={select==="university"?"filter-active":""} >University</button>
              <button value="industry" className={select==="industry"?"filter-active":""}>Industry</button>    

          </div>
        </div>

        <div className="row portfolio-container" data-aos="fade-in">
          {filtered.map(project => (
            <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp" data-wow-delay="0.0s">
              <div className="portfolio-wrap" key={project.id}>
                <div className={project.completed === "no"?"portfolio-img item promoted":"portfolio-img"}>
                  <img src={project.img_source} alt="Image" />
                </div>
                <div className="portfolio-text">
                    <h3><a href={project.web_source} target="_blank" style={{textDecoration:"none",color:"#000000"}}>{project.content}</a></h3>
                    <a className="btn" href={project.git_source} target="_blank" data-lightbox="portfolio"><i className="bx bxl-github"></i></a>
                </div>
              </div>
            </div>                    
          ))}
        </div>

      </div>
      </section>
    </div>
  );
}

export default Portfolio;
