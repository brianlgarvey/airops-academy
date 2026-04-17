import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhoThisIsFor } from "@/components/sections/WhoThisIsFor";
import { WhatPeopleAreSharing } from "@/components/sections/WhatPeopleAreSharing";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Workshops — AIRops Academy",
  description:
    "Focused, hands-on workshops for operators who want to go deeper on specific AI skills and workflows.",
};

export default function WorkshopsPage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <WhoThisIsFor />
      <WhatPeopleAreSharing />
      <FinalCta />
    </>
  );
}
