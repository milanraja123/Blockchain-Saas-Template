"use client";
import React, { useRef } from "react";
import CutCornerButton from "../components/CutCornerButton";
import TextButton from "@/components/TextButton";
import torus_knot from "../../public/assets/images/torus-knot.png";
import hemisphere from "../../public/assets/images/hemisphere.png";
import cone from "../../public/assets/images/cone.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

type Props = {};

const listItems = [
  "Experience unparalleled security and scalability",
  "Fully benefit from scalable network effects",
  "Unlock the potential of decentralized networks",
];

const FeatureGrid: React.FC<Props> = () => {
  const torusKnotRef = useRef(null);
  const firstHemisphereRef = useRef(null);
  const secondHemisphereRef = useRef(null);
  const coneRef = useRef(null);
  const { scrollYProgress: torusScrollYProgress } = useScroll({
    target: torusKnotRef,
    offset: ["start end", "end start"],
  });

  const torusKnotTranslateY = useTransform(
    torusScrollYProgress,
    [0, 1],
    [100, -100]
  );
  const torusKnotRotate = useTransform(torusScrollYProgress, [0, 1], [30, -30]);
  const { scrollYProgress: firstHemisScrollYProgress } = useScroll({
    target: firstHemisphereRef,
    offset: ["start end", "end start"],
  });

  const firstHemisTranslateY = useTransform(
    firstHemisScrollYProgress,
    [0, 1],
    [50, -50]
  );
  const firstHemisRotate = useTransform(
    firstHemisScrollYProgress,
    [0, 1],
    [10, -20]
  );

  const { scrollYProgress: coneScrollYProgress } = useScroll({
    target: coneRef,
    offset: ["start end", "end start"],
  });

  const coneTranslateY = useTransform(coneScrollYProgress, [0, 1], [100, -100]);
  const coneRotate = useTransform(coneScrollYProgress, [0, 1], [12, 45]);

  const { scrollYProgress: secondHemisScrollYProgress } = useScroll({
    target: secondHemisphereRef,
    offset: ["start end", "end start"],
  });

  const secondHemisTranslateY = useTransform(secondHemisScrollYProgress, [0, 1], [50, -50]);
  const secondHemisRotate = useTransform(secondHemisScrollYProgress, [0, 1], [-20, 10]);

  const MotionImage = motion(Image);

  return (
    <section className="py-24 overflow-x-clip">
      <div className="container">
        <div className="flex flex-col gap-56 md:gap-48 lg:gap-[328px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-2">
              <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl">
                Empowering the future of blockchain
              </h2>
              <p className="text-xl lg:text-2xl text-zinc-400 mt-8">
                Blockforge provides robust and secure infrastructure to support
                the next generation of decentralized application.
              </p>
              <ul className="flex flex-col gap-8 mt-12">
                {listItems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="inline-flex flex-shrink-0 justify-center items-center size-8 outline-4 -outline-offset-4 outline-fuchsia-500/10 rounded-full">
                      <div className="size-1.5 bg-fuchsia-500 rounded-full"></div>
                    </div>
                    <span className="text-xl font-bold">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-8 mt-12">
                <CutCornerButton>Get Started</CutCornerButton>
                <TextButton>Learn More</TextButton>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative inline-flex z-0">
                <MotionImage
                  src={torus_knot}
                  alt="Torus Knot 3D image"
                  className="size-96 max-w-none"
                  ref={torusKnotRef}
                  style={{
                    translateY: torusKnotTranslateY,
                    rotate: torusKnotRotate,
                  }}
                />
                <MotionImage
                  src={hemisphere}
                  alt="Hemisphere 3D image"
                  className="absolute size-96 top-3/4 -z-10 scale-x-[-1]"
                  ref={firstHemisphereRef}
                  style={{
                    translateY: firstHemisTranslateY,
                    rotate: firstHemisRotate,
                  }}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative hidden md:block">
              <div className="absolute right-0 rotate-12 z-0">
                <MotionImage
                  src={cone}
                  alt="Cone 3D shape"
                  className="size-96 max-w-none rotate-12"
                  ref={coneRef}
                  style={{
                    rotate: coneRotate,
                    translateY: coneTranslateY,
                  }}
                />
                <MotionImage
                  src={hemisphere}
                  alt="Hemisphere 3D shape"
                  className="absolute top-3/4 -z-10 left-0"
                  ref={secondHemisphereRef}
                  style={{
                    rotate: secondHemisRotate,
                    translateY: secondHemisTranslateY,
                  }}
                />
              </div>
            </div>
            <div className="col-span-2">
              <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl">
                Blockforge leads the way.
              </h2>
              <div className="flex flex-col lg:text-2xl text-xl text-zinc-400 mt-6 gap-6">
                <p>
                  Blockforge is dedicated to supporting the evolution of Web3
                  applications by delivering the necessary infrastructure and
                  security for Web3.
                </p>
                <p>
                  Blockforge champtions Web3 for everyone. As a decentralized
                  blockchain scaling platform, Blockforge enables developers to
                  create scalable, user-friendly dApps with low transaction
                  costs, all while ensuring robust security.
                </p>
              </div>
              <div className="flex gap-8 mt-12">
                <CutCornerButton>Get Started</CutCornerButton>
                <TextButton>Learn More</TextButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
