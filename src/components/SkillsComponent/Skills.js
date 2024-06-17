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
    ];
    
    const displaySkills = skills.map((skill, index) => 
        <div key={skill.skillName + index} className="skill">
            {skill.skillName}
        </div>
    );

    return (
        
       <div className="main-skills"> 

        <div className="skills-header">
            <h1>Skills</h1>      
        </div>
        <div className="skills-container">
            {displaySkills}
        </div>

    


       </div>
        
    ); 

}
export default Skills