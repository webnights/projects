import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import {motion} from 'framer-motion'

import { styles } from "../styles"
import { experiences } from "../constants"

import 'react-vertical-timeline-component/style.min.css'
import { SectionWrapper } from "./hoc"
import { textVariant } from "../utils/motion"

import React from 'react'

export const ExperienceCard = ({experience}) => {
  return (
    <VerticalTimelineElement
      date={experience.date}
      icon = {
        <div className="flex justify-center items-center h-[100%]">
          <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain m-0" />
        </div>

      }
      iconStyle = {{
        background: experience.iconBg
      }}
      contentStyle={{
        background: '#1d1836',
        color: '#FAFAFA',
      }}
      contentArrowStyle={{
        borderRight: '10px solid #fff'
      }}
    >
      <div className="flex flex-col">
        <h3 className="font-[700] text-[25px]">{experience.title}</h3>
        <h6 className="opacity-[0.7]">{experience.company_name}</h6>
        <ul className="flex flex-col gap-1 list-disc ml-5 mt-5">
          {experience.points.map((point, index)=>
            <li
            key={index}
            className=""
            >
              {point}
            </li>
          )}
        </ul>
      </div>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <>
     <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>What I have done so far</p>
      <h2 className={styles.sectionHeadText}>Work Experience</h2>
    </motion.div>
    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {experiences.map((experience, index)=>(
          <ExperienceCard key={index} experience={experience}/>
        ))}
      </VerticalTimeline>
    </div>
    </>
  )
}

export default SectionWrapper(Experience, "experience");