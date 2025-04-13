"use client";
import Card from "@/components/Card";
import InteriorHero from "@/components/InteriorHero";
import React from "react";
import { motion } from "motion/react";

type Props = {};

const page: React.FC<Props> = () => {
  return (
    <>
      <InteriorHero>
        <p className="font-extrabold text-center text-zinc-500 tracking-wider">
          Join the team
        </p>
        <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-7xl text-center mt-4">
          We are hiring
        </h1>
        <p className="text-center text-xl md:text-2xl mt-6 max-w-xl mx-auto text-zinc-400">
          We are always looking for talented individuals passionate about
          building blockchain products that make a diiference
        </p>
      </InteriorHero>
      <section className="py-60">
        <div className="container">
          <div className="flex flex-col gap-12">
            {[...new Array(5)].fill(0).map((_, i) => (
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.5,
                  ease: "easeIn",
                }}
                key={i}
                href="/contact"
              >
                <Card buttonText="Apply Now">
                  <div className="flex items-center gap-3">
                    <div className="px-3 py-1.5 uppercase font-heading font-extrabold tracking-wider text-xs bg-fuchsia-500/15 text-fuchsia-500 inline-flex rounded-full">
                      Remote
                    </div>
                    <div className="px-3 py-1.5 uppercase font-heading font-extrabold tracking-wider text-xs bg-fuchsia-500/15 text-fuchsia-500 inline-flex rounded-full">
                      Full Time
                    </div>
                  </div>
                  <h2 className="text-3xl font-black font-heading mt-6">
                    Product Manager
                  </h2>
                  <p className="text-xl text-zinc-400 mt-4">
                    We are looking for a strategic Product Manager to lead the
                    development and launch of innovative products.
                  </p>
                </Card>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
