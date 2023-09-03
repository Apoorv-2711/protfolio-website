import React from "react";
import { motion } from "framer-motion";
import { Experience } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[700px] snap-center bg-[#292929] mt-12 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
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
        className="w-32 h-32 rounded-full bg-black xl:w-[150px] xl:h-[150px] object-cover object-center mt-6"
        src={urlFor(experience?.companyImage).url()}
        alt=""
      />
      <div className="px-0 md:px-10 ">
        <h4 className="text-3xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-2xl">{experience.company}</p>
        <div className="flex space-x-2 my-2">
          {experience?.technologies.map((technology) => (
            <img
              key={technology._id}
              className="h-6 w-6 rounded-full"
              src={urlFor(technology.image).url()}
              alt=""
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className=" space-y-4 ml-5 text-lg h-80 overflow-auto pr-5 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
          {experience?.points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
