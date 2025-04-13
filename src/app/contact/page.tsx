import CutCornerButton from "@/components/CutCornerButton";
import InteriorHero from "@/components/InteriorHero";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

const page: React.FC<Props> = () => {
  return (
    <>
      <InteriorHero>
        <p className="font-extrabold text-center text-zinc-500 tracking-wider">
          LET&apos;S TALK
        </p>
        <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-7xl text-center mt-4">
          Contact Us
        </h1>
        <p className="text-center text-xl md:text-2xl mt-6 max-w-xl mx-auto text-zinc-400">
          We&apos;re here to help ans answer any questions you may have. Reach
          out to us to learn more about our services, get support, or to apply
          for positions.
        </p>
      </InteriorHero>
      <section className="py-60">
        <div className="container">
          <div className="pb-[1000px] max-w-xl mx-auto">
            <h2 className="font-heading font-black text-3xl">
              What can we help you with?
            </h2>
            <form className="flex flex-col mt-8">
              <label htmlFor="name">Name</label>
              <div className="relative group z-0">
                <div className="absolute inset-0 outline-2 -outline-offset-2 outline-fuchsia-700 [mask-image:linear-gradient(225deg,transparent,transparent_10px,black_10px)] group-focus-within:outline-fuchsia-500 -z-10"></div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 right-0 text-fuchsia-700 -z-10 group-focus-within:text-fuchsia-500"
                >
                  <path
                    d="M0 1H12.2667L23 11.7333V24"
                    stroke="currentColor"
                    stroke-width="2"
                  ></path>
                </svg>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-transparent h-12 w-full outline-none px-4"
                />
              </div>
              <label htmlFor="email" className="mt-4">
                Email
              </label>
              <div className="relative group z-0 ">
                <div className="absolute inset-0 outline-2 -outline-offset-2 outline-fuchsia-700 [mask-image:linear-gradient(225deg,transparent,transparent_10px,black_10px)] group-focus-within:outline-fuchsia-500 -z-10"></div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 right-0 text-fuchsia-700 -z-10 group-focus-within:text-fuchsia-500"
                >
                  <path
                    d="M0 1H12.2667L23 11.7333V24"
                    stroke="currentColor"
                    stroke-width="2"
                  ></path>
                </svg>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="bg-transparent h-12 w-full outline-none px-4"
                />
              </div>
              <label htmlFor="message" className="mt-4">
                Message
              </label>
              <div className="relative group z-0 flex">
                <div className="absolute inset-0 outline-2 -outline-offset-2 outline-fuchsia-700 [mask-image:linear-gradient(225deg,transparent,transparent_10px,black_10px)] group-focus-within:outline-fuchsia-500 -z-10"></div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 right-0 text-fuchsia-700 -z-10 group-focus-within:text-fuchsia-500"
                >
                  <path
                    d="M0 1H12.2667L23 11.7333V24"
                    stroke="currentColor"
                    stroke-width="2"
                  ></path>
                </svg>
                <textarea
                  name="email"
                  id="email"
                  className="bg-transparent outline-none px-4 w-full py-3 min-h-32"
                />
              </div>
              <CutCornerButton className="mt-4">Send Message</CutCornerButton>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
