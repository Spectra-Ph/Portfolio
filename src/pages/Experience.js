import React from 'react';
import wrmhls from '../styles/wormholes.mp4';
import "../styles/Experience.css"
import 'typeface-roboto';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from '@material-ui/icons/School'
import WorkIcon from '@material-ui/icons/Work'

function Experience() {
  return (
    <div>
      <video src={wrmhls} autoPlay loop muted/>
      <div className="experience-text">EXPERIENCE</div>
      <div>
        {" "}
        <VerticalTimeline lineColor='black'>
          <VerticalTimelineElement className='vertical-timeline-element--education' date='2021 - 2025'
           iconStyle={{background:'black', color: '#fff'}}  icon={<SchoolIcon/>}>

           <h3 className='vertical-timeline-element-title'>York University, Toronto, Canada</h3>
           <p> Bachelor's of Engineering</p>
           </VerticalTimelineElement>

           <VerticalTimelineElement className='vertical-timeline-element--work' date='2022 - 2023'
           iconStyle={{background:'#4DED30', color: '#fff'}}  icon={<WorkIcon/>}>
           <h3 className='vertical-timeline-element-title'>Research Assistant @ YU</h3>
           <p> I was given two projects to work with. One was a 3D printed flexible conductive robotic finger and the other was to get the ThorLabs stepper motor controller running in realtime in Simulink.
          
           </p>
           </VerticalTimelineElement>

           <VerticalTimelineElement className='vertical-timeline-element--work' date='2021 - present'
           iconStyle={{background:'#4DED30', color: '#fff'}}  icon={<WorkIcon/>}>
           <h3 className='vertical-timeline-element-title'>Systems Engineer @ ESSENCE CubeSat</h3>
           <p> ESSENCE CubeSat which is a miniature satellite that has already been launched to space. I was in the Systems Engineering Team for this research. I soldered the flight hardware PCB's and was involved in testing.</p>
           </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  )
}

export default Experience;