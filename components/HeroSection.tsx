"use client";
import React, { useEffect, useState } from "react";

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
import { BackgroundBeams } from "./ui/background-beams";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";

const HeroSection = () => {
  const [bgClr, setBgClr] = useState<string>();
  const [randNum, setRandNum] = useState<number>();

  // changeClr();

  const changeColr = () => {
    setRandNum(Math.floor(Math.random() * 16777215));
  };

  useEffect(() => {
    setBgClr("#" + randNum?.toString(16));
  }, [randNum]);

  setTimeout(() => {
    changeColr();
  }, 5000);

  return (
    <>
      <motion.div className=" w-full min-h-screen flex  flex-col lg:flex-row relative z-0 gap-4  ">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.7,
          }}
          className={`intro w-[80%] md:w-[40%] lg:w-[30%] h-[30%] pt-[100px] pl-[50px] `}
        >
          <div className={`${notoSerif.className} text-3xl font-bold`}>
            Hi I`m <span className="text-themeText"> Naqeeb Ahmad</span>
            <Typed />
          </div>
          <div className="text-sm font-extralight text-foreground pt-3">
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
        {/* <BackgroundBeams /> */}
        <BackgroundGradientAnimation />

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0, transformOrigin: "right" }}
          exit={{ opacity: 0, y: 100 }}
          transition={{
            duration: 0.9,
            delay: 0.9,
          }}
          className="MyImage right-[1%] absolute -bottom-32 lg:bottom-0 w-full lg:w-[60%]  h-full flex "
        >
          <motion.div
            whileDrag={{ y: 100 }}
            whileHover={{ rotate: ["0deg", 20 + "deg", "0deg"] }}
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 1 }}
            className={`h-[350px] image-container absolute  transition-all duration-200 right-[3%] bottom-[10%] z-0 w-[350px] `}
            style={{ backgroundColor: `${bgClr}` }}
          ></motion.div>
          <Image
            src={MyImg}
            alt="Owner"
            height={800}
            width={400}
            className="z-10 myimg right-[1%] absolute bottom-0 "
          />
        </motion.div>
      </motion.div>

      {/* <ParticlesContainer /> */}
    </>
  );
};

export default HeroSection;
