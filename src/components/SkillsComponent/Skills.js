import React from 'react';
import './Skills.css';

const skills = [
    { skillName: 'Python' },
    { skillName: 'JavaScript' },
    { skillName: 'Typescript' },
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
    { skillName: 'Flask' },
    { skillName: 'AWS Lambda' },
    { skillName: 'Web Scraping' },
    { skillName: 'Web Dev' },

];

const Skills = () => {
    const halfLength = Math.ceil(skills.length / 2);
    const firstHalfSkills = skills.slice(0, halfLength);
    const secondHalfSkills = skills.slice(halfLength);

    return (
        <div id='skills' className="main-skills">
            <div className="skills-header">
                <h1>Skills</h1>
            </div>
            <div className="skills-container">
                <div className="s-container">
                    <div className="skillss">
                        {[...firstHalfSkills, ...firstHalfSkills].map((skill, index) =>
                            <div key={skill.skillName + index} className="skill">
                                {skill.skillName}
                            </div>
                        )}
                    </div>
                </div>
                <div className="s-container reverse">
                    <div className="skillss">
                        {[...secondHalfSkills, ...secondHalfSkills].map((skill, index) =>
                            <div key={skill.skillName + index} className="skill">
                                {skill.skillName}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;

