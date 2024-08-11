import React from 'react'
import { styles } from '../styles'
import { SectionWrapper } from './hoc'
import { motion } from 'framer-motion'
import {fadeIn, textVariant} from '../utils/motion'
import { testimonials } from '../constants'

const FeedbackCard = ({index, testimonial, name, designation, company, image}) =>{
  return(
    <motion.div
      variants={fadeIn("", "spring", index*0.5, 1)}
      className='bg-black-200 min-h-[350px] rounded-[20px] p-10 sm:max-w-[300px]'
    >
      <div>
        <p className='text-white text-[48px]'>"</p>
      </div>
      <div className='text-secondary text-[16px]'>
        <p>{testimonial}</p>
      </div>
      <div className='flex justify-space-between mt-5'>
        <div className='w-full'>
          <p><span className='text-blue-300'>@</span>{name}</p>
          <p className='text-secondary text-[16px]'>{designation} of {company}</p>
        </div>
        <img className='rounded-full w-10 h-10' src={image} alt={`feedbacks-of-${company}`}

        />
      </div>
    </motion.div>
  )
}

const Feedbacks = () => {
  return (
    <div className={`feedbacks bg-black-100 rounded-[20px]`}>
      <motion.div className={`${styles.padding} bg-tertiary rounded-[20px]`}>
        <p className={styles.sectionSubText}>What people say about me</p>
        <h2 className={styles.sectionHeadText}>Testimonials.</h2>
      </motion.div>
      <div className={`${styles.padding} flex flex-wrap gap-10 sm:-mt-[100px] -mt-[60px]`}>
        {testimonials.map((testimonial, index)=>
        
          <FeedbackCard
            key = {index}
            {...testimonial}
          />
        )}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "feedbacks");