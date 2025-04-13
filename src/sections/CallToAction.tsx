"use client"
import { Circle } from "@/components/Circle";
import CutCornerButton from "@/components/CutCornerButton";
import { Hexagon } from "@/components/Hexagon";
import cuboid from "../../public/assets/images/cuboid.png";
import cylinder from "../../public/assets/images/cylinder.png";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

const CallToAction: React.FC<Props> = () => {
  const MotionImage = motion(Image);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [45, -45]);

  return (
    <section className="py-60 overflow-hidden" ref={sectionRef}>
      <div className="container">
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Hexagon className="size-[600px]" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Hexagon className="size-[1100px]" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Circle className="absolute left-0 -top-[400px]">
              <MotionImage
                src={cuboid}
                alt=""
                className="size-[140px]"
                style={{ rotate: rotate }}
              />
            </Circle>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Circle className="absolute -left-[600px] -top-[70px]">
              <MotionImage
                src={cylinder}
                alt=""
                className="size-[140px]
              "
                style={{ rotate: rotate }}
              />
            </Circle>
          </div>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">
            Ready to <span className="block">get started?</span>
          </h2>
          <p className="text-xl lg:text-2xl text-xinc-400 text-center mt-8 max-w-sm mx-auto">
            Start building using blockchain technology, with Blockforge.
          </p>
          <div className="flex justify-center mt-12">
            <CutCornerButton>Get Started</CutCornerButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
