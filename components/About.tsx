'use client'
import React from 'react'
import { motion } from "framer-motion"
type Props = {}

export default function About({}: Props) {
  return (
    <motion.div className='flex flex-col relative h-screen text-center md:text-left md-flex-row  maw-w-7xl px-10
    justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About</h3>
            <motion.img 
            initial={{x:-200,
            opacity:0}}
            transition={{
                duration:1.2,
            }}
            whileInView={{opacity:1 , x:0}}
            viewport={{once:true}}
            src='https://scontent.ftun8-1.fna.fbcdn.net/v/t1.15752-9/387323822_287183507532611_2723263655567056512_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=C0Hrt2y2BSMAX9is-NG&_nc_ht=scontent.ftun8-1.fna&oh=03_AdS05dFVHdlXni3SrQL4cXTn0S2MRh1cZJI4YzUU6gxCuw&oe=6596EAB5'
            className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:w-95 lg:w-[220px] lg:h-[300px] "/>
            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>
                    Here is a <span className='underline decoration-[#a73c90]/50'>little </span>{""}
                     background  :
                </h4>
                <p className='text-m'>
                Welcome to my portfolio! I'm an IT engineering student deeply passionate about technology. Fueled by curiosity and a knack for problem-solving, I thrive in the dynamic challenges of this field. My coursework has honed my skills in computer science, programming languages, and system architecture, empowering me to approach complex issues with technical prowess and creativity. Explore my portfolio to see how my passion and skills align with the ever-evolving landscape of IT.</p>            </div>

        </motion.div>
  )
}