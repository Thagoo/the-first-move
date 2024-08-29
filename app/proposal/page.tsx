import FloatingButton from "@/components/floating-button";
import OurPartners from "@/components/layout/proposal/our-partners";
import PricingHero from "@/components/layout/proposal/pricing-hero";
import Services from "@/components/layout/proposal/services";
import { FooterSection } from "@/components/layout/sections/footer";
import ProcedureSection from "@/components/layout/sections/procedure";
import WhyChooseUsSection from "@/components/layout/sections/why-choose-us";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Proposals",
  description: "We help you make The First Move!",
  metadataBase: new URL("https://the-first-move.vercel.app"),
  openGraph: {
    images: "/icons/proposal.webp",
    title: "The First Move | Proposals planning",
    description: "We help you make The First Move!",
  },

  keywords: [
    "thefirstmove",
    "the first move",
    "event organisations",
    "event planners",
  ],
};
export default function Proposal() {
  return (
    <div>
      <FloatingButton />
      <PricingHero />
      <Services />
      <OurPartners />
      <ProcedureSection />
      <WhyChooseUsSection />
      <FooterSection />
    </div>
  );
}
