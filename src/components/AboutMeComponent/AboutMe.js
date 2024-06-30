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
                <p> I'm a full stack developer based in Northern, California. Currently,
                        I am focused on developing full-stack web and mobile devlopment and building
                        accessible, delightful user experiences. When I'm not coding I'm I probably,
                        reading a book, discovering new music, or rewatching my favorite movies. Interact
                        with my Spotify playlist down below! 
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