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
    icon: "/icons/marquee/image.svg",
    name: "Acmebrand",
  },

  {
    icon: "/icons/marquee/image_4.svg",
    name: "Acmesponsor",
  },

  {
    icon: "/icons/marquee/image_6.svg",
    name: "Acme",
  },
  {
    icon: "/icons/marquee/image_8.svg",
    name: "Accmee",
  },
  {
    icon: "/icons/marquee/image_9.svg",
    name: "Acmetech",
  },
];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="w-full">
      {/* <h2 className="text-lg md:text-xl text-center mb-6">
        Our Platinum Sponsors
      </h2> */}

      <div className="">
        <Marquee
          className="gap-[3rem]"
          fade
          innerClassName="gap-[3rem]"
          pauseOnHover
        >
          {" "}
          {sponsors.map(({ icon, name }) => (
            <div
              key={name}
              className="flex items-center text-xl md:text-2xl font-medium"
            >
              {/* Fix safari rendering base64 svg images in low quality  */}
              <object type="image/svg+xml" data={icon} />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
