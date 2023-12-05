/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import './globals.css'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Link from 'next/link'



export default function Home() {
  return (
   <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
   overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#a73c90]/50
   '>
    <Head>
      <title>Rania`s Portfolio</title>
    </Head>
      <Header/>

       
      <section id="hero" className='snap-start'>
      <Hero/>
      </section>

      <section id='about'  className='snap-center'>
        <About/>
        </section>
      

      <section id='experience' className='snap-center'>
        <Experience/>
      </section>


      <section id='skills' className='snap-start'>
        <Skills/>
      </section>

      
    <section id='projects' className='snap-start'>
    <Projects/>
    </section>


      <section id='contact' className='snap-start'> 
        <ContactMe/>
      </section>


    <Link href=" #hero">
    <footer className='sticky bottom-5 w-full cursor-pointer'>
      <div className='flex items-center justify-center'>
        <img
        className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0
        cursor-pointer' 
        src="https://media.licdn.com/dms/image/D4D03AQFeZkx5tKOITQ/profile-displayphoto-shrink_200_200/0/1697455297139?e=1703116800&v=beta&t=4-uO4RHTzs1Zpp_Q8hxs2Vh_1_FHqICfNDaTj2-oI2w" alt="" />
      </div>
    </footer>
    </Link>
   </div>
    
  )
}
