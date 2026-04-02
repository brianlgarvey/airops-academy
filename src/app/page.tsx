import { Hero } from "@/components/sections/Hero";
import { WhatThisIs } from "@/components/sections/WhatThisIs";
import { SessionTopics } from "@/components/sections/SessionTopics";
import { ThePath } from "@/components/sections/ThePath";
import { WhatIsAirops } from "@/components/sections/WhatIsAirops";
import { WhyWeBuiltThis } from "@/components/sections/WhyWeBuiltThis";
import { SocialProof } from "@/components/sections/SocialProof";
import { FinalCta } from "@/components/sections/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <hr className="section-divider" />
      <WhatThisIs />
      <SessionTopics />
      <ThePath />
      <WhatIsAirops />
      <WhyWeBuiltThis />
      <SocialProof />
      <FinalCta />
    </>
  );
}
