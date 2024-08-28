import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import Image from "next/image";

interface WhyChooseUsProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: WhyChooseUsProps[] = [
  {
    icon: "/icons/why-choose-us/image.svg",
    title: "Competitive Prices Offered",
    description:
      "We care about your pocket as much as you do! We are the most affordable in the market!",
  },
  {
    icon: "/icons/why-choose-us/image_2.svg",
    title: "Exclusive Celebration Services ",
    description:
      "Don’t worry, all the fancy services offered by event planners are offered by us!",
  },

  {
    icon: "/icons/why-choose-us/image_1.svg",
    title: "Young and Talented Team",
    description:
      "Our celebration experts have some of the most modern ideas for your next event ",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section id="whyChooseUs" className="container mx-auto">
      {/* <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        WhyChooseUs
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-medium mb-4">
        What Makes Us Different
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
        fugiat, odit similique quasi sint reiciendis quidem iure veritatis optio
        facere tenetur.
      </h3> */}
      <div className="flex flex-col gap-2 items-center">
        <div className="w-full flex justify-center gap-2 md:gap-4">
          <Image
            width={0}
            height={0}
            className="md:w-20 w-12 h-auto"
            src={"/icons/divider-bottom.svg"}
            alt="dashboard"
          />
          <h1 className="text-2xl md:text-4xl text-center font-medium mb-4 text-nowrap">
            Why Choose Us
          </h1>

          <Image
            width={0}
            height={0}
            className="md:w-20 w-12 h-auto scale-x-[-1]"
            src={"/icons/divider-bottom.svg"}
            alt="dashboard"
          />
        </div>
        <p className="md:w-1/2 mx-auto md:text-xl text-center text-muted-foreground mb-8">
          Top 3 reasons why our team is the best for your next event
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none text-center">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Image
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
}
