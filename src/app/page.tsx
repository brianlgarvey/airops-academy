import { Hero } from "@/components/sections/Hero";
import { WhatThisIs } from "@/components/sections/WhatThisIs";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { InviteModel } from "@/components/sections/InviteModel";
import { WhoThisIsFor } from "@/components/sections/WhoThisIsFor";
import { WhatPeopleAreSharing } from "@/components/sections/WhatPeopleAreSharing";
import { Experience } from "@/components/sections/Experience";
import { FinalCta } from "@/components/sections/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatThisIs />
      <HowItWorks />
      <InviteModel />
      <WhoThisIsFor />
      <WhatPeopleAreSharing />
      <Experience />
      <FinalCta />
    </>
  );
}
