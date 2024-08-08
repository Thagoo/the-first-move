"use client";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

import EventForm from "../form";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

export const HeroSection = () => {
  return (
    <section className="container w-full relative bg-gradient-to-b from-transparent via-cyan-50">
      <ParallaxProvider>
        <Parallax speed={-10} opacity={[2, 0]}>
          <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20">
            <Image
              width={0}
              height={0}
              className="w-52 h-auto "
              src={"/icons/divider-top-hero.svg"}
              alt="dashboard"
            />

            <div className="text-center space-y-8">
              <h1 className="md:text-lg text-center mb-2 tracking-wider">
                <span> Trusted Planners for Glorious Events </span>
              </h1>
              {/* <img
            className="absolute h-auto w-80 opacity-60 dark:opacity-20 scale-x-[-1] z-[-1] top-10 left-20"
            src={"/icons/peacock.webp"}
            alt="dashboard"
          /> */}
              <div className="max-w-screen-md mx-auto text-center text-3xl md:text-6xl font-bold">
                <h1>
                  Crafting Unforgettable
                  <span
                    className={cn(
                      "text-transparent bg-gradient-to-r from-black to-black via-primary dark:from-[hsl(16,100%,59%)] bg-clip-text font-bold px-2"
                    )}
                  >
                    {" "}
                    Luxury
                  </span>
                  Celebrations
                </h1>
              </div>
              <p className="max-w-screen-sm mx-auto md:text-xl text-muted-foreground">
                {`We're more than just a tool, we're a community of passionate
            creators. Get access to exclusive resources, tutorials, and support.`}
              </p>
              <div className="space-y-4 md:space-y-0 md:space-x-4">
                <EventForm showTrigger={true} />
              </div>
            </div>

            {/* <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
          <Image
            width={1200}
            height={1200}
            className="w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-secondary  border-t-primary/30"
            src={"/hero-image-bg.webp"}
            alt="dashboard"
          />

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div> */}
          </div>
        </Parallax>
      </ParallaxProvider>
    </section>
  );
};
