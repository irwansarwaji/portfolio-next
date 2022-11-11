import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion"


type Props = {};

{/** 
- https://www.youtube.com/watch?v=urgi2iz9P6U&list=PLsM7KdGtJeEf6JKnNs7I4ARIS65OO46M3&index=7
- 40:18 */}

{/** Naturaly 2 divs next to eachother, their styling element is block by default. 
 - sticky and top 0 means that it will attach to the top.
 - flex items start -> flex puts everything in a row by default
 - to put space between the two childeren use justify-between
 - mx auto is automatically apply margins
 - z is making it top layer
*/}

export default function Header({}: Props) {
	return (
		<header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
			<motion.div 
      initial={{
        x:-500,
        opacity:0,
        scale:0.5
      }}
      animate={{
        x:0,
        opacity: 1,
        scale:1
      }}
      transition={{
        duration: 1.5,

      }}
      className="flex flex-row items-center">
				{/* social icons */}
				<SocialIcon
					url="https://www.linkedin.com/in/irwan-sarwaji-794450147/"
					fgColor="gray"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://github.com/irwansarwaji"
					fgColor="gray"
					bgColor="transparent"
				/>
      	<SocialIcon
					url="https://www.instagram.com/i.sarwaji/"
					fgColor="gray"
					bgColor="transparent"
				/>
			</motion.div>
      {/** its flex, we want it to be flex row where the items are centered */}
      <motion.div 
       initial={{
        x:500,
        opacity:0,
        scale:0.5
      }}
      animate={{
        x:0,
        opacity: 1,
        scale:1
      }}
      transition={{
        duration: 1.5,

      }}
      className="flex flex-row items-center text-gray-300 cursor-pointer">
        <SocialIcon 
        className="cursor-pointer" 
        network="email"
        fgColor="gray"
        bgColor="transparent"
        />
        {/* tailwind css is mobile first. So when you only say hidden, it's only hidden on mobile 
          * md: is medium upwards*/}
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get in touch</p>
      </motion.div>
		</header>
	);
}
