import React from "react";
import picofme from "./IMG_2944.jpg"
import "./AboutMe.css"; 

function AboutMe () {
    return (
        
       <div id='aboutMe'  className="Home"> 
            <div className="image-container">
                    <img src = {picofme} alt=""></img>
            </div>

            <div className="about-me-container">
                <h2> Hi, I'm Sarah </h2>
                <p> I'm a software developer based in Northern, California. Currently,
                        I am currently focused on back-end and mobile devlopment. When I'm not coding you can
                        find me reading a book, discovering new music, or rewatching my favorite movies. 
                        Feel free to reach out if you'd like to chat!
                    </p>
                <div className="social-container">
                    <div className="social-links">
                            <a href="https://www.linkedin.com"><div className="circle">LinkedIn</div></a>
                            <a href="https://github.com"><div className="circle">GitHub</div></a>
                            <a href="mailto:vasquezsarah523@gmail.com"><div className="circle">Email</div></a>
                    </div>
                </div>
            </div>


          

       </div>
        
    ); 

}
export default AboutMe