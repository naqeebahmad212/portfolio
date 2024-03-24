"use client";
import React, { useEffect, useRef, useState } from "react";

import Typed from "./Typed";
import Image from "next/image";
import MyImg from "@/Images/myImg.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { Noto_Serif } from "next/font/google";

import circleText from "@/Images/asjf_asdf_asdf_sd-removebg-preview.png";

const notoSerif = Noto_Serif({
  weight: "400",
  subsets: ["latin"],
});

import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { MacbookScroll } from "./ui/macbook-scroll";

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

  const mainContainer = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: mainContainer,
    offset: ["start start", "end start"],
  });

  const margin = useTransform(scrollYProgress, [0, 1], [0, 500]);
  return (
    <div ref={mainContainer}>
      <BackgroundGradientAnimation containerClassName="h-screen">
        <motion.div
          // ref={mainContainer}
          className="mainContainer top-0 w-full min-h-screen  flex  flex-col lg:flex-row relative   gap-4  "
        >
          <motion.div
            style={{ marginTop: margin }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.7,
            }}
            className={`intro w-[80%] md:w-[40%] lg:w-[30%] h-[30%] pt-[100px] pl-[50px]  `}
          >
            <div className={`${notoSerif.className} text-3xl font-bold`}>
              Hi I`m <span className="text-themeText"> Naqeeb Ahmad</span>
              <Typed />
            </div>
            <div className="text-sm font-extralight text-foreground pt-3">
              With a passion for creating seamless digital experiences from
              front to back. I specialize in building robust web applications
              crafting elegant user interfaces with Nextjs|Reactjs to
              architecting scalable backend systems with frameworks like
              Node.js, expressjs , convex and other.
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

        <div>
          <MacbookScroll
            margin={margin}
            badge={
              <div className="text-primary -z-[999]">
                {" "}
                Port <span className="text-themeText">Folio</span>{" "}
              </div>
            }
            showGradient={true}
            className="fixed top-0 pt-50 left-[30%] opacity-50"
            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
};

export default HeroSection;
