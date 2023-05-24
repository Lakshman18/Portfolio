import '../App.css';
import React, { useState } from 'react';  
import {Nav} from 'react-bootstrap';
import {Link} from "react-scroll";

function Navigation() {

  const [socialItems] = useState([
    {to:"https://twitter.com/?lang=en", a_class:"twitter mr-2", i_class:"bx bxl-twitter"},
    {to:"https://www.facebook.com/lakshman.lakshman.5682", a_class:"facebook mr-2", i_class:"bx bxl-facebook"},
    {to:"https://instagram.com/lakshman_97?utm_medium=copy_link", a_class:"instagram mr-2", i_class:"bx bxl-instagram"},
    {to:"https://github.com/Lakshman18", a_class:"github mr-2", i_class:"bx bxl-github"},
    {to:"http://linkedin.com/in/lakshman-sivarathan", a_class:"linkedin mr-2", i_class:"bx bxl-linkedin"}    
  ]); 

  const [navItems] = useState([
    {to:"hero", i_class:"bx bx-home", span_content:"Home"},
    {to:"about", i_class:"bx bx-user", span_content:"About"},
    {to:"resume", i_class:"bx bx-file-blank", span_content:"Resume"},
    {to:"portfolio", i_class:"bx bx-book-content", span_content:"Portfolio"},
    {to:"contact", i_class:"bx bx-envelope", span_content:"Contact"}
  ]); 

  const [active, setActive] = useState(false);

  const updateActive = () => {
      setActive(!active);
  }

    return (
      <div > 
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />     
        <i className="bi bi-list mobile-nav-toggle d-xl-none "  id="sidebarCollapse" onClick={updateActive}></i>           
  
        <header id="header" className="header">
          <div className="d-flex flex-column ">

            <div className="profile" >
              <img src="assets/img/profile-img.jpg" alt="" className="img-fluid rounded-circle" />
              <h1 className="text-light">Lakshman</h1>
              <div className="social-links mt-3 text-center"> 
                {socialItems.map( item =>(
                  <Nav.Link href={item.to} className={item.a_class} target="target=_blank"><i className={item.i_class}></i></Nav.Link>
                ))} 
              </div>
            </div>

            <nav id="navbar" className="nav-menu navbar mt-4 pl-0">
              <ul>
                  {navItems.map(item =>(
                    <Link
                      activeClass="active"
                      to={item.to}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}>
                    <a><li><i className={item.i_class} ></i> <span>{item.span_content}</span></li> </a>
                    </Link>
                  ))}   
              </ul>
            </nav>
          </div>
      </header>   

     
    </div>
    );
} 
export default Navigation;