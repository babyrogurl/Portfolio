'use client'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import client from '@/utils/client';



type Props = {}
type dataType = {
  _id: string;
  name: string;
  image_name: string;
  github_link?: string;
  skills: string[];
  description: { en: string; fr: string; de: string };
};

function Projects({}: Props) {
    const projects = [1, 2, 3, 4, 5];
    const [data, setData] = useState<dataType[]>([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const projects = await client.fetch(
            `*[_type == "projects"] | order(order desc)`
          );
          setData(projects);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }, []);
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects </h3>
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#a73c90]/50 '>
                {data.map((item,i) => (
                    // eslint-disable-next-line react/jsx-key
                    <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen '>
                        <motion.img
                        initial={{y: -300 , opacity:0}}
                         whileInView={{opacity:1 , y:0}}
                         transition={{duration:1.2}}
                         viewport={{once:true}}
                        src={`/projects/${item?.image_name}.png`}
                         alt="" 
                        />
                        <div className="flex space-x-2 my-2 mt-3">
                          {item.skills?.map((skill, index) => (
                              <img
                                key={index}
                              className="h10 w-10 rounded-full"
                              src={`/skills/${skill}.png`}
                            />
                          ))}
                        </div>

                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                           <span className='underline decoration-[#a73c90]/50'>Case study{i + 1} of {projects.length}:
                           </span> UPS clone 
                        </h4>
                        <p className='text-lg text-center md:text-left'>
                            test test 
                        </p>
                    </div>


                        </div>
                ))}
            </div>

        <div className='w-full absolute top-[30%] bg-[#a73c90]/10 left-0 h-[500px] -skew-y-12'/>
        </motion.div>
  )
} 

export default Projects
