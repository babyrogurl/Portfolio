'use client'
import React from 'react'
import { motion } from "framer-motion"

type Props = {
  item: {
    _id: string;
    type: string;
    title: { en: string };
    description: { en: string; fr: string; de: string };
    image?: string;
    start_date: string;
    end_date: string;
    skills?: string[];

  };
};

export default function ExperienceCard({item}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] 
   md:w[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer 
   transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        id="1"
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-start"
        src={`/experience/${item.image}.png`}
      />

      <div className="px-0 md:px-10">
        <p className="font-bold text-2xl mt-1">{item.title["en"]}</p>
        <p className=" py-5 text-gray-300">Using : </p>

        <div className="flex space-x-2 my-2 mt-3">

          {item.skills?.map((skill, index) => (
              <img
              key={index}
            className="h-10 w-10 rounded-full "
            src={`/skills/${skill}.png`}
          />
          ))}
          
        </div>
        <p className="uppercase py-5 text-gray-300">
          {item?.start_date} - {item?.end_date}{" "}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <p>{item.description["en"]}</p>
        </ul>
      </div>
    </article>
  );
}