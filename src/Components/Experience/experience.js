import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {experiences} from '../../data/constants';
import './experience.css';

const ExperienceCard = ({ experience }) => {
    return (
        <div id='ExpCard'>
            <div className="Top">
                <img className="ExpImage" src={experience.img} />
                <div className="ExpBody">
                    <div className="Role">{experience.role}</div>
                    <div className="Company">{experience.company}</div>
                    <div className="Date">{experience.date}</div>
                </div>
            </div>
            <div className="Description">
                {experience?.desc &&
                    <div className="ExpSpan">{experience?.desc}</div>

                }
                {experience?.skills &&
                    <>
                        <br />
                        <div className="ExpSkills">
                            <b>Skills:</b>
                            <div className="ItemWrapper">
                                {experience?.skills?.map((skill, index) => (
                                    <div className="ExpSkill">• {skill}</div>
                                ))}
                            </div>
                        </div>
                    </>
                }
            </div>
            {experience.doc &&
                <a href={experience.doc} target="new">
                    <div className="Document" src={experience.doc} />
                </a>
            }
        </div>
    )
}

const Experience = () => {
  return (
    <section id="experience">
    <div id='ExpWrapper'>
        <div className="ExpTitle">Experience</div>
        <div className="ExpDesc">
            My work experience as a software engineer and working on different companies and projects.
        </div>
        <div className="TimelineSection">
            <Timeline>
                {experiences.map((experience,index) => (
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" color="secondary" />
                            {index !== experiences.length - 1 && <TimelineConnector style={{ background: '#854CE6' }} />}
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <ExperienceCard experience={experience}/>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>

        </div>
    </div>
</section>
  )
}

export default Experience