import Achievements from "@/components/layout/sections/achievements";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import ProcedureSection from "@/components/layout/sections/procedure";

import WhyChooseUsSection from "@/components/layout/sections/why-choose-us";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <Achievements />
      {/* <ScrollSection /> */}
      <ProcedureSection />
      <WhyChooseUsSection />
      {/* <BenefitsSection />

      <ServicesSection />
      <TestimonialSection />
      <TeamSection /> */}
      {/* <PricingSection />*/}
      <FAQSection />
      <FooterSection />
    </>
  );
}
