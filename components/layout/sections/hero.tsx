"use client";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

import EventForm from "../form";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { DM_Sans } from "next/font/google";
import { Divider } from "@/components/ui/divider";
const font = DM_Sans({ subsets: ["latin"], weight: "600" });

export const HeroSection = () => {
  return (
    <section className="container relative bg-gradient-to-b from-transparent from-0% to-100% via-cyan-100">
      <ParallaxProvider>
        <Parallax speed={-10} opacity={[2, 0]}>
          <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20">
            <Divider />
            <div className="text-center space-y-8">
              <h1 className="md:text-lg text-center mb-2 tracking-wider">
                <span> Trusted Planners for Glorious Events </span>
              </h1>
              {/* <img
            className="absolute h-auto w-80 opacity-60 dark:opacity-20 scale-x-[-1] z-[-1] top-10 left-20"
            src={"/icons/peacock.webp"}
            alt="dashboard"
          /> */}
              <div className="max-w-screen-lg mx-auto text-center text-3xl md:text-7xl font-semibold">
                <h1 className={`${font.className}`}>
                  Crafting Unforgettable Luxury Celebrations
                </h1>
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
      <div className="space-y-4 md:space-y-0 md:space-x-4">
        <EventForm showTrigger={true} toggleTitle={"Plan with Us"} />
      </div>
    </section>
  );
};
