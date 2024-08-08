import OurPartners from "@/components/layout/proposal/our-partners";
import PricingHero from "@/components/layout/proposal/pricing-hero";
import Services from "@/components/layout/proposal/services";
import { FooterSection } from "@/components/layout/sections/footer";
import ProcedureSection from "@/components/layout/sections/procedure";
import WhyChooseUsSection from "@/components/layout/sections/why-choose-us";
import React from "react";

export default function Proposal() {
  return (
    <div>
      <PricingHero />
      <Services />
      <OurPartners />
      <ProcedureSection />
      <WhyChooseUsSection />
      <FooterSection />
    </div>
  );
}
