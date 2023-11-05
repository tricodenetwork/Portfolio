
"use client"
import {motion} from 'framer-motion';
import { useState } from 'react';
import Image from "next/image"
import AwardImg from "@/public/assets/awa.png";


const awards = [
    `National Scholarship for Free Secondary Education, Federal Government of Nigeria, 1986`,
    `Fellow @Institute of Chartered Management Consultants`,
    `Best graduating Mathematic Senior Secondary School Student, 1992`,
    `Fellow @Institute of Leadership, Entrepreneurship, and Corporate Governance`,
    `Management Consultant with Distinction in Time Management (London Graduate School).`
];
const HandA = () =>{
    const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

    const handleNext = () => {
      setPositionIndexes((prevIndexes) => {
        const updatedIndexes = prevIndexes.map(
          (prevIndex) => (prevIndex + 1) % 5
        );
        return updatedIndexes;
      });
    };
  
    const handleBack = () => {
      setPositionIndexes((prevIndexes) => {
        const updatedIndexes = prevIndexes.map(
          (prevIndex) => (prevIndex + 4) % 5
        );
  
        return updatedIndexes;
      });
    };
  
    
  
    const positions = ["center", "left1", "left", "right", "right1"];
  
    const imageVariants = {
      center: { x: "0%", scale: 1, zIndex: 5 },
      left1: { x: "-50%", scale: 0.7, zIndex: 3 },
      left: { x: "-90%", scale: 0.5, zIndex: 2 },
      right: { x: "90%", scale: 0.5, zIndex: 1 },
      right1: { x: "50%", scale: 0.7, zIndex: 3 },
    };
    return (
        <div id='handa' className='py-24 min-h-screen flex flex-col gap-10  w-full md:px-20 m-auto bg-white'>
            <h2 className='py-10 text-center font-bold text-[52px]'>Honors And Awards</h2>
            <div className="flex items-center flex-col justify-around  min-h-[70vh]">
        {awards.map((text, index) => (
          <motion.div
            key={index}
            className={`absolute md:w-[25%] w-[80%] rounded-[20px] ${positions[positionIndexes[index]]} py-10`}
            animate={positions[positionIndexes[index]]}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
            >
                <Image src={AwardImg} alt='' className='w-full' />
                <p className='p-3 font-bold mt-10'>{text }</p>
          </motion.div>
        ))}
       
        </div>
            <div className="flex flex-row gap-3 w-full items-center justify-center mt-6">
          <button
            className=""
            onClick={handleBack}
          >
            Back
          </button>
          <button
            className=""
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    );
  };

export default HandA