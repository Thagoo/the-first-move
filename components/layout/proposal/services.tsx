import { CardTitle } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

interface ServicesProps {
  icon: string;
  description: string;
}

const serviceList: ServicesProps[] = [
  {
    icon: "/proposal/services/_0.webp",
    description: "Decor Ideas Explored",
  },
  {
    icon: "/proposal/services/_1.webp",
    description: "Best Proposal Planners",
  },
  {
    icon: "/proposal/services/_2.webp",
    description: "Celebrations Organized ",
  },
  {
    icon: "/proposal/services/_3.webp",
    description: "Decor Ideas Explored",
  },
  {
    icon: "/proposal/services/_4.webp",
    description: "Best Proposal Planners",
  },
  {
    icon: "/proposal/services/_5.webp",
    description: "Celebrations Organized ",
  },
];

const Services = () => {
  return (
    <section id="services" className="container py-10 space-y-10">
      <div className="max-w-lg mx-auto text-center ">
        <h1 className="text-2xl md:text-4xl font-medium">
          <span className="text-transparent bg-gradient-to-r from-[#F7BBAA] to-[#F7BBAA] via-primary dark:from-[hsl(16,100%,59%)] bg-clip-text font-medium px-2">
            Personalized Services
          </span>{" "}
          for your Unique Love Story
        </h1>
      </div>

      <div className=" grid grid-cols-2 lg:grid-cols-6 gap-4">
        {serviceList.map(({ icon, description }) => (
          <div
            key={icon}
            className="gap-4 mx-auto h-auto flex flex-col justify-center items-center"
          >
            <div className="relative ">
              <Image
                src={icon}
                width={400}
                height={400}
                alt="icon"
                className="rounded-full w-24 h-auto z-20 relative"
              />
              <div className="absolute w-24 h-24 -inset-1 blur-lg bg-gradient-to-r from-[#F7BBAA] to-[#F7BBAA] z-0 rounded-full"></div>
            </div>
            <p className="text-muted-foreground w-3/4 text-center">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
