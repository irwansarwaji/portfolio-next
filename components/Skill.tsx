import { motion } from 'framer-motion'
import React from 'react'

{/** pass in a prop that is option and boolean */}
type Props = {
    directionLeft?:boolean;
}

{/** the directionLeft is an optional value that you may pass in */}
function Skill({ directionLeft }: Props) {
    {/** when you hover over an entire grid, you can do a group hover.
        So when you hover over something, it will do a certain behaviour */}
  return (
    <div className='group relative flex cursor-pointer'>
        {/** if you are directional left then come in from the left -200 else come in from the right
         * group hover is the entire group also the parent that you set
         */}
        <motion.img
            initial={{
                // x: directionLeft ? -200 : 200,
                // opacity: 0
            }}
            transition={{ duration: 1}}
            whileInView={{ opacity: 1, x:0 }}
            className='rounded-full border border-gray-500 object-cover w-24 h24 md:h-28 md:w-28  xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-500 ease-in-out'
            src='https://cdn-icons-png.flaticon.com/512/1051/1051277.png' alt=''
         />
         <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:h-28 md:w-28 xl:w-32 xl:h-32 rounded-full z-0'>
         <div className='flex items-center justify-center h-full'>
            <p className='text 3xl font-bold text-black opacity-100'>100%</p>
         </div>
         </div>
    </div>
  )
}

export default Skill