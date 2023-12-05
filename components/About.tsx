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
            src='https://scontent.ftun8-1.fna.fbcdn.net/v/t1.15752-9/387566084_837555441428507_3665719138042634204_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=gp2h0_PT-ugAX9U8qjk&_nc_ht=scontent.ftun8-1.fna&oh=03_AdSKwle8_8X_gTid3N3l1W_f_xhvpq6VwbmEQVgFBXv_Gg&oe=6553C263'
            className='-mb-20 md:md-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
            />
            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>
                    Here is a <span className='underline decoration-[#a73c90]/50'>little </span>{""}
                     background  :
                </h4>
                <p className='text-sm'>
                As an IT engineering student I am passionately immersed in the dynamic world of technology. With an insatiable curiosity and a keen eye for problem-solving, I thrive on the challenges that this field presents. My coursework has equipped me with a robust foundation in computer science, programming languages, and system architecture, allowing me to approach complex issues with both technical prowess and creativity. </p>
            </div>

        </motion.div>
  )
}