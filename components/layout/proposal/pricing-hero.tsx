"use client";
import React from "react";
import Image from "next/image";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

import EventForm from "../form";

export default function PricingHero() {
  return (
    <section className="bg-gradient-to-b from-transparent from-0% to-100% via-cyan-50 md:pt-16">
      <ParallaxProvider>
        <Parallax speed={-8} opacity={[4, 0]}>
          <div className=" mx-auto px-5 relative flex justify-center flex-col pb-6 pt-20">
            <div className="grid grid-cols-3 md:flex gap-4 md:gap-10 justify-center md:px-20 pb-10 md:pb-20 place-content-center">
              <Image
                alt="image"
                src={"/proposal/1.webp"}
                height={2000}
                width={2000}
                className="w-full md:w-60 h-auto rounded-3xl  animate-in fade-in duration-1000"
                priority
                loading="eager"
              />
              <div className="relative drop-shadow-xl shadow-black/10 dark:shadow-white/10 scale-[1.2]">
                <Image
                  alt="image"
                  src={"/proposal/2.webp"}
                  height={2000}
                  width={2000}
                  className="w-full md:w-60 h-auto rounded-3xl  animate-in fade-in duration-1000"
                  priority
                  quality={100}
                  loading="eager"
                />
                <div className=" animate-in duration-1000 fade-in-20 absolute -top-4 md:-top-6 -right-2 md:-right-4 rounded-full md:h-14 md:w-14 h-8 w-8 bg-[#F7BBAA] flex justify-center items-center ring-4 ring-secondary drop-shadow-2xl text-center bg-[url('/proposal/ring.svg')] bg-no-repeat bg-cover rotate-[34deg]">
                  <h1 className="text-white font-medium text-[8px] md:text-xs">
                    SAY &quot;YES&quot;
                  </h1>
                </div>
              </div>
              <Image
                alt="image"
                src={"/proposal/3.webp"}
                height={2000}
                width={2000}
                className="w-full md:w-60 h-auto rounded-3xl  animate-in fade-in duration-1000"
                priority
                loading="eager"
              />
            </div>

            <div className="max-w-screen mx-auto text-center space-y-6">
              <div>
                <h1 className="text-2xl md:text-4xl font-medium">
                  We help you make The First Move!
                </h1>
                <p className="text-lg text-muted-foreground">
                  Turn your dream of going down on one knee, into a reality with
                  us!
                </p>
              </div>

              <EventForm
                showTrigger={true}
                toggleTitle={"Plan My Proposal Now"}
              />
            </div>
          </div>
        </Parallax>
      </ParallaxProvider>
    </section>
  );
}
