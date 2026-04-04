import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhoThisIsFor } from "@/components/sections/WhoThisIsFor";
import { WhatPeopleAreSharing } from "@/components/sections/WhatPeopleAreSharing";
import { FinalCta } from "@/components/sections/FinalCta";

export default function HomePage() {
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
