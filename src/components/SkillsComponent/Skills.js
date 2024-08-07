import React from 'react';
import './Skills.css';

const skills = {
    frontend: [
        { skillName: 'JavaScript' },
        { skillName: 'TypeScript' },
        { skillName: 'ReactJS' },
        { skillName: 'ReactNative' },
        { skillName: 'HTML' },
        { skillName: 'CSS' },
        { skillName: 'NextJs' },
        { skillName: 'Web Dev' },
        { skillName: 'TailwindCSS'},
    ],
    backend: [
        { skillName: 'Python' },
        { skillName: 'Go' },
        { skillName: 'C++' },
        { skillName: 'C' },
        { skillName: 'NodeJs' },
        { skillName: 'Express' },
        { skillName: 'RESTFUL API' },
        { skillName: 'PostgreSQL' },
        { skillName: 'AWS Lambda' },
        { skillName: 'Flask' },
        { skillName: 'Web Scraping' },
    ]
};

const Skills = () => {
    const createSkillList = (skills) => {
        const doubledSkills = [...skills, ...skills]; 
        return doubledSkills.map((skill, index) => (
            <div key={skill.skillName + index} className="skill">
                {skill.skillName}
            </div>
        ));
    };

    return (
        <div id='skills' className="main-skills">
            <div className="skills-header">
                <h1>Skills</h1>
            </div>
            <div className="skills-container">
                <div className="s-container">
                    <h3>Front-End Skills</h3>
                    <div className="skillss">
                        {createSkillList(skills.frontend)}
                    </div>
                </div>
                <div className="s-container reverse">
                    <h3>Back-End Skills</h3>
                    <div className="skillss">
                        {createSkillList(skills.backend)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;

