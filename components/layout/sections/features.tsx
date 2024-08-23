"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import EventForm from "../form";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
  url: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "/icons/wedding.webp",
    title: "Wedding Planning",
    description:
      "Let us handle the chaos, from finding the perfect venue to crafting unforgettable moments. ",
    url: "",
  },
  {
    icon: "/icons/proposal.webp",
    title: "Proposal Planning",
    description:
      "Every love story is unique and so should your proposal. We'll handle every detail, big or small.",
    url: "/proposal",
  },
  {
    icon: "/icons/photography.webp",
    title: "Photography",
    description:
      "Our skilled photographers capture every emotion and detail, creating timeless images you'll cherish forever.",
    url: "",
  },
  {
    icon: "/icons/mua.webp",
    title: "Make Up Artists",
    description:
      "Our expert makeup artists enhance your features and create a stunning  look that captures your essence.",
    url: "#",
  },
  {
    icon: "/icons/PS5.webp",
    title: "Personal Shopper",
    description:
      "Our experts handle the shopping while you focus on the fun.We find the perfect pieces, saving you time and energy.",
    url: "",
  },
  {
    icon: "/icons/Invite.webp",
    title: "Invitation/Guest Listing",
    description:
      "We create stunning invitations that reflect your style and also manage your guest list effortlessly.",
    url: "",
  },
];

export const FeaturesSection = () => {
  const [showForm, setShowForm] = useState(false);
  const router = useRouter();
  return (
    <section id="features" className="container py-10">
      <EventForm
        showForm={showForm}
        setShowForm={setShowForm}
        showTrigger={false}
      />
      {/* <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-medium mb-4">
        What Makes Us Different
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
        fugiat, odit similique quasi sint reiciendis quidem iure veritatis optio
        facere tenetur.
      </h3> */}
      <div className="w-full flex justify-center items-center gap-2 md:gap-4">
        <img
          width={0}
          height={0}
          className="md:w-20 w-12 h-auto"
          src={"/icons/divider-bottom.svg"}
          alt="dashboard"
        />
        <h1 className="text-3xl md:text-4xl text-center font-medium mb-4 text-nowrap">
          Events We Plan
        </h1>

        <Image
          width={0}
          height={0}
          className="md:w-20 w-12 h-auto scale-x-[-1]"
          src={"/icons/divider-bottom.svg"}
          alt="dashboard"
        />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description, url }) => (
          <div
            key={title}
            className="cursor-pointer group"
            onClick={() => (url ? router.push(url) : setShowForm(true))}
          >
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center transition ease-in-out delay-150 group-hover:-translate-y-1 group-hover:scale-110 duration-200 cursor-pointer">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <img
                    src={icon}
                    width={0}
                    height={0}
                    className="md:w-40 h-auto w-24"
                    alt="icon"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
