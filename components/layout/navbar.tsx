"use client";
import { ChevronsDown, Github, Menu } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { ToggleTheme } from "./toogle-theme";

interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
  url: string;
}

const routeList: RouteProps[] = [
  {
    href: "#features",
    label: "Services",
  },
  {
    href: "#team",
    label: "About Us",
  },

  {
    href: "#faq",
    label: "FAQ",
  },
];

const featureList: FeatureProps[] = [
  {
    title: "Proposal Planning",
    description:
      "Every love story is unique and so should your proposal. We'll handle every detail, big or small.",
    url: "/proposal",
  },
  {
    title: "Wedding Planning",
    description:
      "Let us handle the chaos, from finding the perfect venue to crafting unforgettable moments.",
    url: "#",
  },

  {
    title: "Photography",
    description:
      "Our skilled photographers capture every emotion and detail, creating timeless images you'll cherish forever.",
    url: "#",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="shadow-md bg-opacity-25 backdrop-filter backdrop-blur-lg w-[90%] md:w-[40%] lg:w-[45%] lg:max-w-screen-md top-5 mx-auto sticky border border-secondary z-40 rounded-full flex justify-between items-center px-4 py-2 bg-transparent">
      <Link href="/" className="font-medium text-lg flex items-center">
        <ChevronsDown className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" />
        TheFirstMove
      </Link>
      {/* <!-- Mobile --> */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center">
                    <ChevronsDown className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" />
                    TheFirstMove
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />

              <Button
                variant="secondary"
                className=" font-medium rounded-full border-[1px] border-[#65ABB7]"
              >
                <Link href="https://wa.link/oij5rd">Contact Us</Link>
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            {/* <NavigationMenuTrigger className="bg-transparent text-base">
              Services
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[600px] grid-cols-2 gap-5 p-4">
                <Image
                  src="/icons/procedure/3.svg"
                  alt="RadixLogo"
                  className="h-full w-full rounded-md"
                  width={0}
                  height={0}
                />
                <ul className="flex flex-col gap-2">
                  {featureList.map(({ title, description, url }) => (
                    <li
                      key={title}
                      className="rounded-md p-3 text-sm hover:bg-muted"
                    >
                      <NavigationMenuLink asChild>
                        <Link href={url}>
                          <p className="mb-1 font-medium leading-none text-foreground">
                            {title}
                          </p>
                          <p className="line-clamp-2 text-muted-foreground">
                            {description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent> */}
          </NavigationMenuItem>

          <NavigationMenuItem>
            {routeList.map(({ href, label }) => (
              <NavigationMenuLink key={href} asChild>
                <Link href={href} className="text-base px-2">
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex">
        <Button
          variant="secondary"
          className="bg-transparent transition ease-in-out delay-150 hover:bg-primary duration-200 rounded-full border-primary border  "
        >
          <Link href="https://wa.link/oij5rd">Contact Us</Link>
        </Button>
      </div>
    </header>
  );
};
