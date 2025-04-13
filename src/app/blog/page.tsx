"use client";
import Card from "@/components/Card";
import CutCornerButton from "@/components/CutCornerButton";
import { Hexagon } from "@/components/Hexagon";
import React from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "motion/react";
import InteriorHero from "../../components/InteriorHero";

type Props = {};

const page: React.FC<Props> = () => {
  return (
    <>
      <InteriorHero>
        <div className="max-w-3xl mx-auto">
          <p className="uppercase font-extrabold text-center text-zinc-500 tracking-wider">
            Latest Post
          </p>
          <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-7xl text-center mt-4">
            Regulatory Challenges Facing Blockchain
          </h1>
          <p className="text-center text-xl md:text-2xl mt-6 text-zinc-400 max-w-xl mx-auto">
            Understanding the regulatory landscape surrounding blockchain and
            what it means for the future of this technology
          </p>
          <div className="flex justify-center mt-10">
            <CutCornerButton>Read More</CutCornerButton>
          </div>
        </div>
      </InteriorHero>
      <section className="pb-[1000px] py-32 bg-zinc-900/30 backdrop-blur-sm">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-12 md:gap-8 lg:gap-12">
              {[...new Array(8)].fill(0).map((_, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    ease: "easeIn",
                  }}
                  href={`/blog/asddf`}
                  key={i}
                  className={twMerge(i % 2 === 0 ? "" : "block md:hidden")}
                >
                  <Card buttonText="Read More">
                    <div className="px-3 py-1.5 uppercase font-heading font-extrabold tracking-wider text-xs bg-fuchsia-500/15 text-fuchsia-500 inline-flex rounded-full">
                      Technology
                    </div>
                    <h2 className="font-heading font-black text-3xl mt-4">
                      Regulatory Challenges Facing Blockchain
                    </h2>
                    <p className="text-lg mt-6 text-zinc-400">
                      {" "}
                      Understanding the regualtory landscape surrounding
                      blockchain and what it means for the future of this
                      technology.
                    </p>
                  </Card>
                </motion.a>
              ))}
            </div>
            <div className="md:flex flex-col gap-8 lg:gap-12 mt-24 hidden">
              {[...new Array(8)].fill(0).map((_, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    ease: "easeIn",
                  }}
                  href={`/blog/asddf`}
                  key={i}
                  className={twMerge(i % 2 === 0 ? "hidden" : "")}
                >
                  <Card buttonText="Read More">
                    <div className="px-3 py-1.5 uppercase font-heading font-extrabold tracking-wider text-xs bg-fuchsia-500/15 text-fuchsia-500 inline-flex rounded-full">
                      Technology
                    </div>
                    <h2 className="font-heading font-black text-3xl mt-4">
                      Regulatory Challenges Facing Blockchain
                    </h2>
                    <p className="text-lg mt-6 text-zinc-400">
                      {" "}
                      Understanding the regualtory landscape surrounding
                      blockchain and what it means for the future of this
                      technology.
                    </p>
                  </Card>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
