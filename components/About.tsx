import { motion } from 'framer-motion'
import React from 'react'
import Me from '../assets/me.png'
import Image from 'next/image'


const introText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Phasellus dictum porta lacus nec posuere. Praesent euismod aliquet eros, sed hendrerit sem. 
Vivamus vel risus sed ligula lacinia feugiat. Phasellus cursus et est ut consectetur. 
Pellentesque felis tellus, ultrices in suscipit et, tempus non enim.`



// assets/me.png

type Props = {}

export default function About({}: Props) {
  return (
    <div>
    <div 
        className='flex space-y-8 flex-col relative h-screen text-center md:text-left md:flex-row 
        max-w-7xl px-10 justify-center mx-auto items-center overflow-hidden'>
        
        <motion.h3 
           initial={{opacity: 0}}
           transition={{duration: 2 }}
           whileInView={{opacity: 1 }}
           className='absolute top-24 tracking-[20px] uppercase text-gray-500 text-2xl'>
            about
        </motion.h3>
        
        <motion.div
        className='md:mb-0 flex-shrink-0'
        initial={{
            x:-200,
            opacity: 0,
        }}
        transition={{duration: 1.2 }}
        whileInView={{ opacity:1, x:0 }} 
        ><Image className=' h-48 w-48 mx-auto rounded-full object-cover 
        md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px] 2xl:w-[500px] 2xl:h-[600px]'
        src={Me}
        alt=''
        /></motion.div>
        <motion.div 
           initial={{opacity: 0}}
           transition={{duration: 2 }}
           whileInView={{opacity: 1 }}
           className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#FFFF33]/50'>little</span> background</h4>
            <p className='text-base'>{introText}</p>
        </motion.div>
    </div>
    </div>
  )
}