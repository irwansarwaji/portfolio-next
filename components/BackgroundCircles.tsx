import React from 'react'
import {motion} from "framer-motion";

type Props = {}

function BackgroundCircles({}: Props) {
    {/**
        - by putting brackets in h en w you tell tailwind to use custom values
        - use relative to center and absolute to move it to the top
        - when you use an array e.g. 1,2,2,3,1 every element gets a piece of the duration in this case 2.5/5 = 0.5 */}
  return (
    <motion.div 
        initial ={{
            opacity: 0,
        }}
        animate={{
            scale:[1,2,2,3,1],
            opacity: [0.1,0.2,0.4,0.8,0.1,1.0],
            borderRadius: ["20%", "20%","50%", "80%", "20%"]
        }}
        transition={{
            duration: 2.5
        }} 
        className='relative top-24  flex justify-center items-center'>
        {/* <div className='absolute border  border-white-500 rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
        <div className='absolute border  border-white-500 rounded-full h-[300px] w-[300px] mt-52 animate-ping'/>
        <div className='absolute border  border-white-500 rounded-full h-[500px] w-[500px] mt-52 animate-ping'/> */}
        <div className='absolute border  border-[#FFFF33] rounded-full opacity-20 h-[650px] w-[650px] mt-52 animate-pulse'/> 
        {/* <div className='absolute border  border-white-500 rounded-full h-[800px] w-[800px] mt-52 animate-ping'/> */}
        <div />
    </motion.div>
  )
}

export default BackgroundCircles