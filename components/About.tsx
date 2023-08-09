"use client";
import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
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
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        src="/apoorv.jpg"
      />

      <div className="space-y-5 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50 ">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Greetings, Earthlings! 👽 I&apos;m Apoorv Jain, your friendly neighborhood
          Frontend Developer and Data Scientist, on a mission to conquer the
          digital universe! Armed with the power of React.js and Python, I
          boldly craft visually stunning web apps and decode the secrets hidden
          in complex datasets. Whether I&apos;m creating a galactic chat application
          or revamping Spotify with interstellar designs, my cosmic creativity
          knows no bounds. So, buckle up for an out-of-this-world journey as we
          explore the wonders of tech and embark on adventures in data space!
          Let&apos;s connect and warp into a future of laughter and innovation!
        </p>
      </div>
    </motion.div>
  );
}
