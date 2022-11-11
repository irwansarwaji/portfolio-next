import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";

type Props = {};

{
	/**
	 * h-screen, take the whole screen's hight. Use it for snapping.
	 * you can also use minimal heigh to snap but it can go over, but using justify center solves the problem*/
}

const Skills = (props: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			transition={{ duration: 2 }}
			whileInView={{ opacity: 1 }}
			className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				skills
			</h3>
			<h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
				Hover over a skill
			</h3>
			<div className="grid grid-cols-3 gap-4">
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
			</div>
		</motion.div>
	);
};

export default Skills;
