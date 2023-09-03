"use client";
import { urlFor } from "@/sanity";
import { PageInfo } from "@/typings";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
        }}
        className="-mb-36 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-xl md:w-64 md:h-[350px] xl:w-[450px] xl:h-[550px]"
        src={urlFor(pageInfo?.profilePic).url()}
        alt="Author image"
      />

      <div className="space-y-5 px-0 md:px-10 ">
        <h4 className="text-3xl font-semibold mt-5 sm:mt-0">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50 ">little</span>{" "}
          background
        </h4>
        <p className="text-base overflow-y-auto sm:overflow-hidden h-[250px] sm:h-auto scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
}
