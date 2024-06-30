import React from "react";
import "./Journey.css"; 
import FunFact from "./FunFact";

function Journey () {
    return (
        
       <div id="myJourney" className="Main-Container"> 
            <h1> My Journey </h1>
        
            <div className="content-container"> 
                <div class="list">
                <ul className = "jobs">
                    <li className="job">
                    <h3>Software Engineer (June 2023 - July 2023) @Abogados Para Tus Deudas</h3>
                    <div className="job-description-container">
                        <div className="line"></div>
                        <div className="paragraph-container">
                            <p> During my time as a Software Engineer at Abogados Para Tus Deudas,
                                I was able to learn a lot about backend development and implementing automattive
                                features using BASH, Python, and Linux Cron.
                                This internship was a huge learning curve and meant a lot of self learning and 
                                learning how to learn this type of system. It was super rewarding and I gained a lot 
                                both technical and critical thinking skills
                            </p>
                            <p> Skills: </p>
                        </div>
                    </div>



                    </li>
                    <li className="job">
                    <h3> President (June 2024 - Present) Social Media Chair (May 2023 - June 2024) @ColorStackUCD</h3>
                    <div className="job-description-container">
                        <div className="line"></div>
                        <div className="paragraph-container">
                            <p> 
                                I joined ColorStack for the Social Media role. And it was honestly a great way to step foot
                                into how a club works and realy seeing what the behind scene's is. 
                                I worked with an amazing board that was originally small, but taking over next year
                                will require so much growth and I will continue to grow into the role
                                and leading a team that is making an impact and creating a community for our people in CS
                            </p>
                            <p> Skills: </p>
                        </div>
                    </div>

                    </li>
                    <li className="job">
                    <h3>SAIV Student Manager (September 2021 - Present) @ Sage Street Market and Cafe </h3>
                    <div className="job-description-container">
                        <div className="line"></div>
                        <div className="paragraph-container">
                            <p> As a student manager I am responsible for ensuring that a shift run's smoothly
                                I have been working at this company since my freshman year and have grown ever since.
                                Everyday there is something new that I look forward to and always have to be aware
                                and ensure that we are all being productive throughout a shift 
                            </p>
                            <p> Skills: </p>
                        </div>
                    </div>

                    </li>
                </ul> 
                </div>

                <div className="funfact-container">
                    <FunFact/>
                </div>
            </div>
       </div>
        
    ); 

}
export default Journey