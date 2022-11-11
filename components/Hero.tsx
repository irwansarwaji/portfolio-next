import React from 'react'
import Link from "next/link"
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';

type Props = {};

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ["Hi, The name's Irwan", 
        "A man of culture", 
        "who loves cocktails"],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles/>
        {/** image should be used differently */}
        <div className='glass'>
            <div className='head'>
                <div className='liquid'></div>
            </div>
            <div className='stem'></div>
            <div className='base'></div>
        </div>
        {/* <img 
            className='relative rounded-full h-32 w-32 mx-auto object-cover' 
            src="https://images.unsplash.com/photo-1550426735-c33c7ce414ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=971&q=80" /> */}
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 tracking-[5px]'>Software Engineer/ Culture Manager</h2>
            <h1 className='text-3xl md:text-5xl lg:tex-6xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#F7AB0A'/>
            </h1>
            <div className='pt-5'>
                <Link href="#about"><button className='heroButton'>About</button></Link>
                <Link href="#experience"><button className='heroButton'>Experience</button></Link>
                <Link href="#skills"><button className='heroButton'>Skills</button></Link>
                <Link href="#projects"><button className='heroButton'>Projects</button></Link>
            </div>
        </div>     
    </div>
  )
}
