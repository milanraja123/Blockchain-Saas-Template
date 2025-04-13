"use client";
import React, { useRef } from "react";
import CutCornerButton from "./CutCornerButton";
import icosahedron from "../../public/assets/images/icosahedron.png";
import Image from "next/image";
import { Hexagon } from "./Hexagon";
import cube from "../../public/assets/images/cube.png";
import cuboid from "../../public/assets/images/cuboid.png";
import torus from "../../public/assets/images/torus.png";
import { Circle } from "./Circle";
import { motion, useScroll, useTransform } from "motion/react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

const HeroSection: React.FC<Props> = () => {
  const icosahedronRef = useRef(null);
  const cubeRef = useRef(null);
  const torusRef = useRef(null);
  const cuboidRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: icosahedronRef,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: cubeScrollYProgress } = useScroll({
    target: cubeRef,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: torusScrollYProgress } = useScroll({
    target: torusRef,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: cuboidScrollYProgress } = useScroll({
    target: torusRef,
    offset: ["start end", "end start"],
  });

  const icosahedronRotate = useTransform(scrollYProgress, [0, 1], [30, -45]);
  const cubeRotate = useTransform(cubeScrollYProgress, [0, 1], [150, -45]);
  const torusRotate = useTransform(torusScrollYProgress, [0, 1], [40, -20]);
  const cuboidRotate = useTransform(cuboidScrollYProgress, [0, 1], [40, -20]);

  return (
    <section className="py-24 md:py-52 overflow-x-clip">
      <div className="container">
        <p className="uppercase font-extrabold text-center text-zinc-500 tracking-wider">
          Introducing Blockforge
        </p>
        <h1 className="font-black text-5xl md:text-6xl lg:text-7xl max-w-3xl text-center mt-4 mx-auto">
          The Future of Blockchain is Hero
        </h1>
        <p className=" text-center text-xl md:text-2xl mt-6 text-zinc-400 max-w-xl mx-auto">
          Blockforge is pioneering smart contract integrity with cutting-edge
          data solutions.
        </p>
        <div className="flex justify-center mt-10">
          <CutCornerButton>Get Started</CutCornerButton>
        </div>
        <div className="flex justify-center items-center mt-24 w-full">
          <div className="inline-flex relative z-0">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon className="size-[1100px]" />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon className="size-[1800px]" />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute left-[200px] -top-[900px]">
                <motion.div ref={cubeRef} style={{ rotate: cubeRotate }}>
                  <Image src={cube} alt="cube" className="size-[140px]" />
                </motion.div>
              </Circle>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute left-[200px] top-[270px]">
                <motion.div ref={cuboidRef} style={{ rotate: cuboidRotate }}>
                  <Image src={cuboid} alt="cube" className="size-[140px]" />
                </motion.div>
              </Circle>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute -left-[600px] -top-[80px]">
                <motion.div ref={torusRef} style={{ rotate: torusRotate }}>
                  <Image src={torus} alt="cube" className="size-[140px]" />
                </motion.div>
              </Circle>
            </div>
            <motion.div
              className="inline-flex"
              ref={icosahedronRef}
              style={{ rotate: icosahedronRotate }}
            >
              <Image
                src={icosahedron}
                alt=""
                className="absolute w-[calc(100%+100px)] max-w-none -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 saturate-[10%] brightness-[4%] hue-rotate[240deg]"
              />
              <Image src={icosahedron} alt="" className="w-[500px]" />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center flex-col items-center mt-40 md:mt-80 gap-4">
          <div className="h-10 w-5 outline-[6px] outline-fuchsia-500/10 inline-flex justify-center pt-2 rounded-full">
            <div className="h-3 w-1 bg-fuchsia-500 rounded-full"></div>
          </div>
          <p className="uppercase text-zinc-500 font-extrabold tracking-wider">
            Scroll to learn more
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
