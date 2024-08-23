import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import { SponsorsSection } from "./sponsors";

interface AchievementsProps {
  icon: string;
  title: string;
  description: string;
}

const achievementList: AchievementsProps[] = [
  {
    icon: "/icons/C1.webp",
    title: "2500+",
    description: "Decor Ideas Explored",
  },
  {
    icon: "/icons/C2.png",
    title: "100+",
    description: "Best Proposal Planners",
  },
  {
    icon: "/icons/C3.webp",
    title: "400+",
    description: "Celebrations Organized ",
  },
];
export default function Achievements() {
  return (
    <section
      id="achievements"
      className="container w-full flex flex-col justify-center items-center gap-10 md:gap-10"
    >
      <div className="grid md:grid-cols-3 md:gap-2 gap-10 px-5">
        {achievementList.map(({ icon, title, description }) => (
          <div
            key={title}
            className="relative flex items-center justify-start gap-4 w-full h-auto"
          >
            <Image
              src={icon}
              width={1500}
              height={1500}
              alt="icon"
              className="z-20 rounded-full w-24 h-auto ring ring-primary"
            />
            <div className="absolute w-24 -inset-1 blur-lg z-10 rounded-full"></div>
            <div>
              <CardTitle className="text-4xl">{title}</CardTitle>

              <p className="text-muted-foreground">{description}</p>
            </div>
          </div>
        ))}
      </div>
      <SponsorsSection />
    </section>
  );
}
