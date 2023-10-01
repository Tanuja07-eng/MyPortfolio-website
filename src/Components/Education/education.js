import React from 'react';
import './education.css';
import {education} from '../../data/constants';

const EducationCard = ({ education }) => {
    return (
        <div id="EduCard">
            <div className="EduTop">
                <img className="EduImage" src={education.img} alt='Imag'/>
                <div className="EduBody">
                    <div className="EduName">{education.school}</div>
                    <div className="EduDegree">{education.degree}</div>
                    <div className="EduDate">{education.date}</div>
                </div>
            </div>
            <div className="EduGrade"><b>Grade: </b>{education.grade}</div>
            <div className="EduDescription">
                <span className="EduSpan">{education.desc}</span>
            </div>
        </div>
    )
}

const Education = () => {
    return (
        <section id="education">
            <div className ="EduWrapper">
                <div className="EduTitle">Education</div>
                <div className="EduDesc">
                    My education has been a journey of self-discovery and growth. My educational details are as follows.
                </div>
                <div className="EduTimelineSection">
                    {
                    education.map((education,index) => 
                    (
                        <div className="EduTimelineContent" sx={{ py: '12px', px: 2 }}>
                        <EducationCard education={education}/>
                        </div>
                            
                        ))
                    }

                </div>
            </div>
        </section>
    )
}
export default Education;