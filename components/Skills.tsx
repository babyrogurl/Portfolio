'use client'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import Skill from './Skill'
import client from '@/utils/client'
type Props = {}

type dataType = {
  _id: string;
  name: string;
  image_name: string;
  efficency: number;
};


function Skills({ }: Props) {
  const [data, setData] = useState<dataType[]>([]);
  console.log(data)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await client.fetch(
          `*[_type == "skills"] | order(order asc)`
        );
        setData(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row
    max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center
    "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills{" "}
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for currency profieciency
      </h3>
      <div className="grid grid-cols-5 gap-6  ">
        {data.slice(0, data.length / 2).map((item, index) => (
          <Skill key={index} item={item} />
        ))}
        {data.slice( data.length / 2, data.length).map((item, index) => (
          <Skill key={index} item={item} directionLeft/>
        ))}
      </div>
    </motion.div>
  );
}

export default Skills