import React from 'react'
import './Skills.css'
import Skill from './SkillBar'

function Skills() {
  return (
    <>
    <section id='skills'>
  <h1>My Skills</h1>
    <div className="skills-container">
            <ul className="skills">
                <Skill name='Problem Solving' percent={95}></Skill>
                <Skill name='Microcontroller Programming' percent={90}></Skill>
                <Skill name='Teamwork & Communication' percent={90}></Skill>
                <Skill name='Python & C' percent={85}></Skill>
                <Skill name='Leadership' percent={80}></Skill>
                <Skill name='Circuit Design' percent={75}></Skill>
                <Skill name='Microsoft Office' percent={75}></Skill>
                <Skill name='Object Detection' percent={70}></Skill>
                <Skill name='Website Development' percent={60}></Skill>
                <Skill name='3D Modeling' percent={55}></Skill>
            </ul>
    </div>
    </section>
    </>
  )
}

export default Skills