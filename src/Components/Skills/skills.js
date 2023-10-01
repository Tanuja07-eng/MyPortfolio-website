import React from 'react';
import './skill.css';
import {skills} from '../../data/constants'

const Skills = () => {
  return (
    <section id="skills">
      <div id='SkillWrapper'>
        <span className='skillTitle'>My Skills</span >
        <p className='SkillDesc'>Here are some of my skills on which I have been working on for the past 2 years.
        </p>
        <div className="SkillsContainer">
          {skills.map((skill) => (
            <div className="Skill">
              <div className="SkillTitle">{skill.title}</div>
              <div className="SkillList">
                {skill.skills.map((item) => (
                  <div className='SkillItem'>
                    <img className="SkillImage" src={item.image} alt='imag'/>
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>

  )
}


export default Skills

