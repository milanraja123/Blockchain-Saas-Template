import React from "react";
import InteriorHero from "../../../components/InteriorHero";

type Props = {};

const page: React.FC<Props> = () => {
  return (
    <>
      <InteriorHero>
        <div>
          <div className="flex flex-col justify-center">
            <div className="flex justify-center">
              <div className="px-3 py-1.5 uppercase font-heading font-extrabold tracking-wider text-xs bg-fuchsia-500/15 text-fuchsia-500 inline-flex rounded-full">
                Technology
              </div>
            </div>
            <h2 className="font-heading font-black text-5xl md:text-6xl lg:text-7xl text-center mt-4">
              Regulatory Challenges Facing Blockchain
            </h2>
            <p className="text-center text-xl mt-8 text-zinc-400 max-w-2xl mx-auto">
              Understanding the regulatory lanscape surrounding blockchain and
              what it means for the future of this technology
            </p>
            <div className="flex flex-col items-center mt-8">
              <div className="size-16 rounded-full bg-cover bg-zinc-700 bg-center"></div>
              <div className="font-extrabold text-lg mt-3">Alice Monroe</div>
              <div className="text-zinc-500">
                Blockchain Analyst - ChainWave
              </div>
            </div>
          </div>
        </div>
      </InteriorHero>
      <section className="py-40">
        <div className="container">
          <div>
            <div className="flex flex-col gap-12 max-w-4xl mx-auto">
              <h1 className="font-heading text-zinc-200 text-3xl md:text-4xl lg:text-5xl">
                Introduction to Regualtory Challenges
              </h1>
              <div className="text-zinc-300 text-md lg:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                officiis esse. Fuga ipsa ipsam voluptas tempora architecto,
                autem quidem aut ullam assumenda quod atque est ea tempore
                dolorum necessitatibus laborum odio voluptates consectetur
                adipisci, delectus reiciendis nesciunt amet dolor iure. Optio
                repellat quam quod eum vero tenetur iure modi reprehenderit
                illum aspernatur impedit ipsa obcaecati nisi praesentium nam,
                natus quibusdam voluptatem a. Quia dolorum ex modi voluptates
                laborum animi, iste quos itaque dolore, consequatur corrupti
                eligendi non ratione cumque quis.
              </div>
              <h1 className="font-heading text-zinc-200 text-3xl md:text-4xl lg:text-5xl">
                Introduction to Regualtory Challenges
              </h1>
              <div className="text-zinc-300 text-md lg:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                officiis esse. Fuga ipsa ipsam voluptas tempora architecto,
                autem quidem aut ullam assumenda quod atque est ea tempore
                dolorum necessitatibus laborum odio voluptates consectetur
                adipisci, delectus reiciendis nesciunt amet dolor iure. Optio
                repellat quam quod eum vero tenetur iure modi reprehenderit
                illum aspernatur impedit ipsa obcaecati nisi praesentium nam,
                natus quibusdam voluptatem a. Quia dolorum ex modi voluptates
                laborum animi, iste quos itaque dolore, consequatur corrupti
                eligendi non ratione cumque quis.
              </div>
              <h1 className="font-heading text-zinc-200 text-3xl md:text-4xl lg:text-5xl">
                Introduction to Regualtory Challenges
              </h1>
              <div className="text-zinc-300 text-md lg:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                officiis esse. Fuga ipsa ipsam voluptas tempora architecto,
                autem quidem aut ullam assumenda quod atque est ea tempore
                dolorum necessitatibus laborum odio voluptates consectetur
                adipisci, delectus reiciendis nesciunt amet dolor iure. Optio
                repellat quam quod eum vero tenetur iure modi reprehenderit
                illum aspernatur impedit ipsa obcaecati nisi praesentium nam,
                natus quibusdam voluptatem a. Quia dolorum ex modi voluptates
                laborum animi, iste quos itaque dolore, consequatur corrupti
                eligendi non ratione cumque quis.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
