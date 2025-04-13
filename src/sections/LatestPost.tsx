"use client";
import Card from "@/components/Card";
import CutCornerButton from "@/components/CutCornerButton";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useRef } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

const LatestPost: React.FC<Props> = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "start center"],
  });

  const marginTop = useTransform(scrollYProgress, [0, 1], [0, 64]);

  return (
    <section className="py-60">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">
            Your portal to everything blockchain
          </h2>
          <p className="text-xl lg:text-2xl text-center text-zinc-400 mt-8">
            Keep up with the newest trends, updates, and insights in the
            blockchain world, and updated weekily.
          </p>
        </div>
        <div className="mt-16 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-8">
            {[...new Array(4)].fill(0).map((item, itemIndex) => (
              <Card key={itemIndex} buttonText="Read More">
                <div className="px-3 py-1.5 uppercase font-heading font-extrabold tracking-wider text-xs bg-fuchsia-500/15 text-fuchsia-500 inline-flex rounded-full">
                  Technology
                </div>
                <h3 className="font-heading font-black text-3xl mt-4">
                  Regulatory Challenges Facing Blockchain
                </h3>
                <p className="text-lg text-zinc-400 mt-4">
                  Understanding the regualtory landscape surrounding blockchain
                  and what it means for the future of this technology.
                </p>
                <div>
                  <button>Read more</button>
                  <div>arrow</div>
                </div>
              </Card>
            ))}
          </div>
          <motion.div
            className="hidden md:flex flex-col gap-8 mt-16"
            ref={targetRef}
            style={{
              marginTop,
            }}
          >
            {[...new Array(4)].fill(0).map((item, itemIndex) => (
              <Card key={itemIndex} buttonText="Read More">
                <div className="px-3 py-1.5 uppercase font-heading font-extrabold tracking-wider text-xs bg-fuchsia-500/15 text-fuchsia-500 inline-flex rounded-full">
                  Technology
                </div>
                <h3 className="font-heading font-black text-3xl mt-4">
                  Regulatory Challenges Facing Blockchain
                </h3>
                <p className="text-lg text-zinc-400 mt-4">
                  Understanding the regualtory landscape surrounding blockchain
                  and what it means for the future of this technology.
                </p>
                <div>
                  <button>Read more</button>
                  <div>arrow</div>
                </div>
              </Card>
            ))}
          </motion.div>
        </div>
        <div className="flex justify-center mt-40 md:mt-32">
          <CutCornerButton>Read the Blog</CutCornerButton>
        </div>
      </div>
    </section>
  );
};

export default LatestPost;
