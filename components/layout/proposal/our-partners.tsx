import Image from "next/image";
import React from "react";
import { SponsorsSection } from "../sections/sponsors";

export default function OurPartners() {
  return (
    <div className="">
      <div className="w-full flex justify-center items-center gap-2 md:gap-4 py-10">
        <Image
          width={0}
          height={0}
          className="md:w-20 w-12 h-auto"
          src={"/icons/divider-bottom.svg"}
          alt="dashboard"
        />
        <h1 className="text-3xl md:text-4xl text-center font-medium">
          Our Partners
        </h1>

        <Image
          width={0}
          height={0}
          className="md:w-20 w-12 h-auto scale-x-[-1]"
          src={"/icons/divider-bottom.svg"}
          alt="dashboard"
        />
      </div>
      <SponsorsSection />
    </div>
  );
}
