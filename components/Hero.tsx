'use client'
import React  from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'

type Props = {}

export default function Hero({}: Props) {
const [text,count] = useTypewriter({
words: [ 
    "Hi , I'm Rania Ouni",
    "Girl-who-loves-chocolate.tsx",
    "<ButLovesToCodeMore >",
] ,
loop: true,
delaySpeed: 2000,


});

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles/>
        <img className='relative rounded-full w-56 h-56 mx-auto object-cover'
            src='https://scontent.ftun8-1.fna.fbcdn.net/v/t1.15752-9/387327685_709544447887238_5528740918698649869_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=vaLyxofsOdwAX-paglN&_nc_ht=scontent.ftun8-1.fna&oh=03_AdSvMrj9a8jibcIacvrm9Ttx0EhU4L-4MimTfZoGWOw46w&oe=659704CC'
            alt='babygurl'
         /> 
        <div className='z-20'>
          <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
            Software Engineer
            </h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
        <span className='mr-3'>{text}</span>
        <Cursor cursorColor='#a73c90' />
        </h1>

        <div className='pt-5'>
          <Link href="#about"> 
          <button className='heroButton'>About</button></Link>
          <Link href="#experience"> 
          <button className='heroButton'>Experience</button></Link>
          <Link href="#skills"> 
          <button className='heroButton'>Skills</button></Link>
          <Link href="#projects"> 
          <button className='heroButton'>Projects</button></Link>
        </div>
        </div>
    </div>
  )
}