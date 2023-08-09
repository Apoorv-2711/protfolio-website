import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        className="w-32 h-32 rounded-full bg-black xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="/Bhejooo.png"
        alt=""
      />
      <div className="px-0 md:px-10 ">
        <h4 className="text-3xl font-light">Software Developer Intern</h4>
        <p className="font-bold text-2xl">BHEJOOO</p>
        <div className="flex space-x-2 my-2">
          <img className="h-6 w-10 rounded-full" src="/javascript.svg" alt="" />
          <img className="h-6 w-10 rounded-full" src="/javascript.svg" alt="" />
          <img className="h-6 w-10 rounded-full" src="/javascript.svg" alt="" />
        </div>
        <p className="uppercase py-5 text-gray-300">Started and Ended Date</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
}
