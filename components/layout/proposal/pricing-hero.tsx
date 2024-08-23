"use client";
import React from "react";
import { PricingSection } from "../sections/pricing";
import Image from "next/image";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

import EventForm from "../form";

export default function PricingHero() {
  return (
    <div className="md:max-w-screen-lg mx-auto px-5 relative flex justify-center flex-col py-10">
      <ParallaxProvider>
        <Parallax speed={-8} opacity={[2, 0]}>
          <div className="flex gap-2 md:gap-6 justify-center md:px-20 py-16 ">
            <Image
              alt="image"
              src={"/proposal/1.webp"}
              height={200}
              width={200}
              className="w-20 md:w-40 md:h-[65vh] rounded-2xl animate-in fade-in duration-500"
            />
            <div className="relative drop-shadow-xl shadow-black/10 dark:shadow-white/10 scale-[1.1] w-20 md:w-40 md:h-[65vh]">
              <Image
                alt="image"
                src={"/proposal/2.webp"}
                height={200}
                width={200}
                className="w-full h-full rounded-2xl  animate-in fade-in duration-1000"
              />
              <div className="animate-in duration-1000 fade-in-20 absolute top-0 right-0 rounded-full md:h-16 md:w-16 h-8 w-8 bg-primary flex justify-center items-center ring ring-secondary rotate-12 drop-shadow-2xl text-white md:text-sm text-[8px] text-center">
                <h1>Say Yes</h1>
              </div>
            </div>
            <Image
              alt="image"
              src={"/proposal/3.webp"}
              height={200}
              width={200}
              className="w-20 md:w-40 md:h-[65vh] rounded-2xl animate-in fade-in duration-500"
            />
          </div>
        </Parallax>
      </ParallaxProvider>

      <div className="max-w-screen mx-auto text-center space-y-6">
        <div>
          <h1 className="text-2xl md:text-4xl font-medium">
            We help you make The First Move!
          </h1>
          <p className="text-lg text-muted-foreground">
            Turn your dream of going down on one knee, into a reality with us!
          </p>
        </div>
        <EventForm showTrigger={true} />
      </div>
    </div>
  );
}
