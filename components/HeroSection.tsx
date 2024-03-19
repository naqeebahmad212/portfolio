"use client";
import React from "react";

import Typed from "./Typed";
import Image from "next/image";
import MyImg from "@/Images/myImg.png";
import { AnimatePresence, motion } from "framer-motion";
import { Noto_Serif } from "next/font/google";
import bg from "@/Images/9078-removebg-preview.png";
import design from "@/Images/Untitled_design-removebg-preview.png";
import circleText from "@/Images/asjf_asdf_asdf_sd-removebg-preview.png";

const notoSerif = Noto_Serif({
  weight: "400",
  subsets: ["latin"],
});

import { ParticlesContainer } from "./ParticlesContainer";
import Shpere from "./Shpere";

const HeroSection = () => {
  return (
    <>
      <motion.div
        className=" w-full min-h-screen flex justify-center flex-col lg:flex-row relative z-0 gap-4 "
        initial={{
          backgroundSize: "50%",
          rotate: "0deg",
          backgroundPosition: "top",
        }}
        animate={{
          backgroundSize: ["40%", "30%", "40%"],
          backgroundPosition: "left",
        }}
        transition={{ duration: 20, repeat: Infinity }}
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.7,
          }}
          className={`intro w-[60%] h-[30%] pt-[100px] pl-[50px] `}
        >
          <div className={`${notoSerif.className} text-3xl font-bold`}>
            Hi I`m <span className="text-themeText"> Naqeeb Ahmad</span>
            <Typed />
          </div>
          <div className="text-sm font-extralight text-white pt-3">
            With a passion for creating seamless digital experiences from front
            to back. I specialize in building robust web applications crafting
            elegant user interfaces with Nextjs|Reactjs to architecting scalable
            backend systems with frameworks like Node.js, expressjs , convex and
            other.
          </div>
        </motion.div>

        <div className="circle-text absolute bottom-10 left-0">
          <motion.div
            className="size-[185px] flex justify-center items-cente"
            style={{ backgroundImage: `url(${circleText.src})` }}
          >
            <motion.img
              initial={{ rotate: 0 }}
              animate={{ rotate: "180deg" }}
              transition={{ duration: 10, repeat: Infinity }}
              src={circleText.src}
              className="absolute"
            />
          </motion.div>
        </div>

        <div className="design flex justify-center h-[250px] lg:h-[400px] self-center w-[600px]  shadow-2xl bg-gray-50">
          <AnimatePresence>
            {/* <motion.img
              initial={{ y: 0, rotate: "0deg" }}
              animate={{ y: [0, -50, 0], rotate: ["0deg", "20deg", "0deg"] }}
              exit={{ y: 0 }}
              src={AnimPic.src}
              transition={{
                repeat: Infinity,
                duration: 10,
              }}
              className="h-[50%]"
            /> */}

            <motion.div
              initial={{ y: 300, x: 0, rotate: "0deg" }}
              animate={{
                y: [300, -150, 0],
                x: [0, -50, 0],
                rotate: ["0deg", "40deg", "0deg"],
              }}
              exit={{ y: 300 }}
              transition={{
                duration: 15,
              }}
              className=" top-[300px] left-5 lg:top-10 lg:right-[20%]"
            >
              <motion.img
                initial={{ y: 0, x: 0, rotate: "0deg" }}
                animate={{
                  y: [0, 50, 0],
                  x: [0, -50, 0],
                  rotate: ["0deg", "40deg", "0deg"],
                }}
                exit={{ y: 0 }}
                transition={{
                  repeat: Infinity,
                  duration: 15,
                }}
                className=""
                src={design.src}
                alt="image"
                width={300}
                height={400}
              />
            </motion.div>

            <motion.div
              className=" absolute top-[200px] left-5 lg:top-10 lg:right-[20%]"
              initial={{ scale: 0 }}
              animate={{
                scale: 1,
              }}
              exit={{ scale: 0 }}
              transition={{
                duration: 5,
              }}
            >
              <Shpere />
            </motion.div>
          </AnimatePresence>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0, transformOrigin: "right" }}
          exit={{ opacity: 0, y: 100 }}
          transition={{
            duration: 0.9,
            delay: 0.9,
          }}
          className="MyImage w-full lg:w-[60%] pr-10 h-full flex justify-center self-center mx-auto lg:self-end "
        >
          <Image src={MyImg} alt="Owner" height={800} width={400} />
        </motion.div>
      </motion.div>

      <ParticlesContainer />
    </>
  );
};

export default HeroSection;
