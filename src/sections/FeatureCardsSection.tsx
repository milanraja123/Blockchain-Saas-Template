"use client";
import React, { useEffect, useState } from "react";
import pill from "../../public/assets/images/pill.png";
import cuboid from "../../public/assets/images/cuboid.png";
import cone from "../../public/assets/images/cone.png";
import icosahedron from "../../public/assets/images/icosahedron.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Card from "@/components/Card";

type Props = {};

const cardData = [
  {
    image: pill,
    title: "Revolutionary Blockchain API",
    description:
      "Effortlessly integrate and manage blockchain dots with our cutting-edge API, designed for seamless connectivity.",
    color: "fuchsia",
  },
  {
    image: cuboid,
    title: "Decentralized Data Solutions",
    description:
      "Empower your applications with the decentralized data solutions, ensuring security and transparency at every step",
    color: "lime",
  },
  {
    image: cone,
    title: "Next-Gen Smart Contracts",
    description:
      "Unlock the potential of next-gen smart contracts with our robust and scalable API, tailored for modern blockchain needs",
    color: "cyan",
  },
  {
    image: icosahedron,
    title: "Seamless Blockchain Integration",
    description:
      "Integrate blockchain technology seamlessly into your peojects, with minimal effort and maximum efficiency.",
    color: "violet",
  },
];

const FeatureCardsSection: React.FC<Props> = () => {
  const [selectedCardIndex, setSelectedIndex] = useState(2);
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    if(isHovered) return;
    const timeout = setTimeout(() => {
      setSelectedIndex((curr) => (curr === cardData.length - 1 ? 0 : curr + 1));
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [selectedCardIndex,isHovered]);
  return (
    <section className="py-24 overflow-x-clip md:-mt-28">
      <div className="container">
        <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">
          Discover the future of bloackchain with Blockforge{" "}
        </h2>
        <div className="mt-36 lg:mt-48 flex">
          <div className="flex flex-none gap-8">
            {cardData.map((e, i) => (
              <div
                key={i}
                className="inline-flex transition-all duration-500"
                style={{
                  transform: `translateX(calc((-100% - 2rem) * ${selectedCardIndex}))`,
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Card className="max-w-xs md:max-w-md" color={e.color}>
                  <div className="flex justify-center -mt-28">
                    <div className="inline-flex relative">
                      <div className="absolute h-4 w-full top-[calc(100%+16px)] bg-zinc-950/70 group-hover:bg-zinc-950/30 transition duration-300 rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)]"></div>
                      <Image
                        src={e.image}
                        alt="pill"
                        className="size-40 group-hover:-translate-y-6 transition duration-300"
                      />
                    </div>
                  </div>
                  <h3 className="font-heading font-black text-3xl mt-12">
                    {e.title}
                  </h3>
                  <p className="text-lg text-zinc-400 mt-4">{e.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <div className="bg-zinc-950 inline-flex gap-4 p-2.5 rounded-full">
            {cardData.map((e, cardIndex) => (
              <div
                key={e.title}
                className={twMerge(
                  "size-2.5 bg-zinc-500 rounded-full cursor-pointer",
                  cardIndex === selectedCardIndex && "bg-zinc-300"
                )}
                onClick={() => setSelectedIndex(cardIndex)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCardsSection;
