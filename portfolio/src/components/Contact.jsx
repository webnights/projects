import React from 'react'
import {useState, useRef} from 'react'
import { motion } from 'framer-motion'
import {styles} from '../styles'
import {SectionWrapper} from './hoc'
import emailjs from '@emailjs/browser'
import {EarthCanvas} from './canvas'
import { slideIn } from '../utils/motion'

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });



  const [loading, setLoading] = useState(false)
  const handleChange = (e) =>{
    const {name, value} = e.target;
    setForm({...form, [name]:value})
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    setLoading(true);

      //template_f908c97
  //service_hv2sljg
  //OyACojEwAi4_5yu2B
    emailjs.send('service_hv2sljg','template_f908c97', {
      from_name: form.name,
      to_name: 'Sayeed',
      from_email: form.email,
      to_email: 'sm448038@gmail.com',
      message: form.message,
    },
    'OyACojEwAi4_5yu2B'
  )
  .then(()=>{
    setLoading(false);
    alert('Thank you. I will get back as soon as possible');
    
    setForm({
      name:"",
      email:"",
      message: ""
    }, (error)=>{
      setLoading(false)
      console.log(error);
      alert('Something went wrong')
    })
  })
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
         <p className={styles.sectionSubText}>Get in touch</p>
         <h2 className={styles.sectionHeadText}>Contact.</h2>
         <form action=""
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
         >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your name</span>
            <input 
            type="text"
            name='name'
            value = {form.name}
            onChange={handleChange}
            placeholder='Whats your name?'
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input 
            type="text"
            name='email'
            value = {form.email}
            onChange={handleChange}
            placeholder='Whats your email?'
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your message</span>
            <textarea
            rows='7'
            name='message'
            value = {form.message}
            onChange={handleChange}
            placeholder='Whats your message?'
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg border-none font-medium resize-none'
            />
          </label>
          <button type='submit' className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-lg'>
            {loading? 'Sending...' : 'Send'}
          </button>
         </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[500px]'
      >
        <EarthCanvas/>

      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact, "contact")