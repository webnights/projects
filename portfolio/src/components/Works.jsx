import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "./hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { github } from "../assets";
import { useState } from "react";


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {

  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const togglePopup = () =>{
    setIsOpenPopup(!isOpenPopup);
  }
  return (
   
    <motion.div
     variants={fadeIn("up", "spring", index * 0.5, 0.75)}
     >
      <Tilt
        options={{
          max: 45,
          scale: 1.05,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full "
      >
        <div className="relative w-full min-h-[230px] ">
          <img
            src={image}
            alt={name}
            className="w-full h-[250px] object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              className="black-gradient rounded-full w-10 h-10 flex justify-center items-center cursor-pointer"
              onClick={() => window.open(source_code_link, "_blank")}
            >
              <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>
        <div className="">
        <h3 className="mt-4 text-[24px] font-[700]">{name}</h3>
        <p className="mt-1 text-secondary text-[14px] line-clamp-3">{description}</p>
        </div>
        <div className="flex gap-2 mt-2">
          {tags.map((tag, index)=>
            <p
             key={index}
             className={`${tag.color} text-[13px]`} 
            >#{tag.name}</p>
          )}
        </div>
          {isOpenPopup && <Popup name = {name} description={description} tags={tags} image={image} source_code_link={source_code_link} />}
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full">
        <motion.p
          variants={textVariant("", "", 0.1, 1)}
          className="leading-[30px] text-[17px] text-secondary max-w-3xl mt-3"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each projects is briefly describes
          with link to code repositories on github and live demos in it. It
          reflects my ability to solve complex problems, work with different
          technologies, and manage projects effectively.
        </motion.p>
      </div>
      <div className="flex flex-wrap w-full mt-20 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

    </>
  );
};

export default SectionWrapper(Works, "work");
