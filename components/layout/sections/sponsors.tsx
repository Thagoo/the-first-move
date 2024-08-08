"use client";

import { Icon } from "@/components/ui/icon";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import { icons } from "lucide-react";
import Image from "next/image";
interface sponsorsProps {
  icon: string;
  name: string;
}

const sponsors: sponsorsProps[] = [
  {
    icon: "/icons/marquee/image_1.svg",
    name: "Acmebrand",
  },

  {
    icon: "/icons/marquee/image_3.svg",
    name: "Acmesponsor",
  },

  {
    icon: "/icons/marquee/image_5.svg",
    name: "Acme",
  },
  {
    icon: "/icons/marquee/image_6.svg",
    name: "Accmee",
  },
  {
    icon: "/icons/marquee/image_7.svg",
    name: "Acmetech",
  },
];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="max-w-[75%] mx-auto pb-20">
      {/* <h2 className="text-lg md:text-xl text-center mb-6">
        Our Platinum Sponsors
      </h2> */}

      <div className="mx-auto">
        <Marquee
          className="gap-[3rem]"
          fade
          innerClassName="gap-[3rem]"
          pauseOnHover
        >
          {sponsors.map(({ icon, name }) => (
            <div
              key={name}
              className="flex items-center text-xl md:text-2xl font-medium"
            >
              <Image
                src={icon}
                width={0}
                height={0}
                className="h-auto w-16 md:w-24"
                alt="icon"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
