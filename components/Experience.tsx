'use client'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import ExperienceCard from './ExperienceCard'
import client from "@/utils/client";

type Props = {}

type dataType = {
  _id: string;
  type: string;
  title: { en: string };
  description: { en: string; fr: string; de: string };
  image?: string;
  start_date: string;
  end_date: string;
  skills?: string[];
};

export default function Experience({ }: Props) {
  
  const [filteredData, setFilteredData] = useState<dataType[]>([]);
  const [data, setData] = useState<dataType[]>([]);
  console.log(data)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await client.fetch(`*[_type == "career"]`);
        setData(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    if (data) {
      const educations = data.filter((item) => item.type === "education");
      const experiences = data.filter((item) => item.type === "experience");
      setFilteredData([...educations, ...experiences]);
    } else {
      setFilteredData([]);
    }
  }, [data]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experiences
      </h3>
      <div className="w-full flex space-x-5 overflow-scroll  p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#a73c90]/50">
        {filteredData.map((item, index) => (
          <ExperienceCard key={index} item={item} />
        ))}
      </div>
    </motion.div>
  );
}