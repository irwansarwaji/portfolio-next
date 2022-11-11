import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 overflow-hidden xl:hover:opacity-100 xl:opacity-40 xl:cursor-pointer xl:transition-opacity xl:duration-200'>
      <motion.img
        initial={{
          y:-100,
          opacity: 0,
        }}
        transition={{duration:1.2}}
        whileInView={{opacity:1, y:0}}
        viewport={{once: true}}
        className='w-32 h-32 rounded-full xl:w-[100px] xl:h-[100px] 2xl:w-[150px] 2xl:h-[150px] object-cover object-center'
        src='https://images.unsplash.com/photo-1550426735-c33c7ce414ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=971&q=80'
        alt=''
         />

         <div className='px-0 md:px-10'>
          <h4 className='text-2xl font-light'>CEO of Sarwaji</h4>
          <p className='font-bold text-xl mt-1 '>Sarwaji Enterprise</p>
          <div className='flex space-x-2 my-2'>
            <img className='h-10 w-10 rounded-full' src='https://cdn-icons-png.flaticon.com/512/1051/1051277.png' alt='' />
            <img className='h-10 w-10 rounded-full' src='https://cdn-icons-png.flaticon.com/512/1051/1051277.png' alt='' />
            <img className='h-10 w-10 rounded-full' src='https://cdn-icons-png.flaticon.com/512/1051/1051277.png' alt='' />

          </div>
          <p className='uppercase py-5 text-gray-300'>Started work:... - Ended... </p>

          {/** h-[150px] overflow-scroll -> make it scrollable container */}
        <ul className='list-disc space-y-4 ml-5 text-m container'>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas commodo pellentesque purus non lobortis.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas commodo pellentesque purus non lobortis.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas commodo pellentesque purus non lobortis.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas commodo pellentesque purus non lobortis.</li>
        </ul>
         </div>
    </article>
  )
}