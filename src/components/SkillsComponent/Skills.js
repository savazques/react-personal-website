import React from "react"; 
import './Skills.css'; 



function Skills () {

   
    const skills = [
            { skillName: 'Python' },
            { skillName: 'JavaScript' },
            { skillName: 'Go' },
            { skillName: 'C++' },
            { skillName: 'C' },
            { skillName: 'ReactJS' },
            { skillName: 'ReactNative' },
            { skillName: 'Bash' },
            { skillName: 'HTML' },
            { skillName: 'CSS' },
            { skillName: 'PostgreSQL' },
            { skillName: 'NextJs' },
            { skillName: 'NodeJs' },
            { skillName: 'MiddleWare' },
            { skillName: 'Express' },
            { skillName: 'RESTFUL API' },
            { skillName: 'AWS' },
            { skillName: 'Flask' },

    
    ];
    


    return (
        
       <div className="main-skills"> 

        <div className="skills-header">
            <h1>Skills</h1>      
        </div>
        <div className="skills-container">
            <div className="s-container">
                <div className="skillss">
                    {skills.map((skill, index) => 
                        <div key={skill.skillName + index} className="skill">
                            {skill.skillName}
                    </div>)}
                    {skills.map((skill, index) => 
                        <div key={skill.skillName + index} className="skill">
                            {skill.skillName}
                    </div>)}
                </div>
            </div>
        </div>

    


       </div>
        
    ); 

}
export default Skills