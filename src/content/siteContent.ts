/**
 * ============================================================================
 * AIRops Academy — Centralized Site Content & Configuration
 * ============================================================================
 *
 * HOMEPAGE SECTIONS:
 *  1. Brand & Navigation
 *  2. Hero
 *  3. What This Is
 *  4. How It Works
 *  5. Invite Model
 *  6. Who This Is For
 *  7. What People Are Sharing
 *  8. Experience
 *  9. Final CTA
 * 10. Footer
 *
 * SUPPORTING PAGES:
 *  - How It Works (deeper)
 *  - Sessions
 *  - Request an Invite
 *  - About
 * ============================================================================
 */

// ---------------------------------------------------------------------------
// 1. BRAND & NAVIGATION
// ---------------------------------------------------------------------------
export const brand = {
  name: "AIRops Academy",
  tagline: "AI better — together.",
  description:
    "A network of operators sharing what they're actually building with AI, what's working, and what's not — week after week.",
};

export const navigation = {
  links: [
    { label: "How It Works", href: "/how-it-works" },
    { label: "Sessions", href: "/sessions" },
    { label: "About", href: "/about" },
  ],
  cta: { label: "Request an Invite", href: "/request-invite" },
};

// ---------------------------------------------------------------------------
// 2. HERO
// ---------------------------------------------------------------------------
export const hero = {
  headline: "AI better — together.",
  subheadline:
    "An invite-only network of operators sharing what's working, what's not, and what's next — week over week.",
  primaryCta: { label: "Request an Invite", href: "/request-invite" },
  secondaryCta: { label: "See How It Works", href: "/how-it-works" },
  highlights: [
    {
      quote: "I built an internal client dashboard in a weekend. No engineers. No tickets. Just shipped it.",
      name: "Sarah M.",
      role: "Ops Lead",
    },
    {
      quote: "I stopped guessing which AI tools to use. Someone in the group had already tested all of them.",
      name: "James K.",
      role: "RevOps Manager",
    },
    {
      quote: "Automated 2 hours of outbound prep down to 15 minutes. Walked through the whole workflow live.",
      name: "Maria L.",
      role: "Growth Ops",
    },
    {
      quote: "This is the only place I've found where people are actually sharing what's working — not selling you something.",
      name: "David R.",
      role: "Solutions Consultant",
    },
    {
      quote: "Built a prompt chain that drafts proposals from call notes. Others in the group adapted it that same week.",
      name: "Alex T.",
      role: "Consultant",
    },
  ],
};

// ---------------------------------------------------------------------------
// 3. WHAT THIS IS
// ---------------------------------------------------------------------------
export const whatThisIs = {
  sectionTitle: "Not a course. Not a webinar.",
  sectionSubtitle:
    "This is a weekly working session. 6\u20138 operators. One hour. Everyone brings something real.",
  points: [
    {
      title: "Share what you're building",
      description:
        "Bring the AI workflow, tool, or experiment you're working on right now.",
    },
    {
      title: "Show what's working (and what isn't)",
      description:
        "No curated success stories. Real results, real failures, real lessons.",
    },
    {
      title: "Get feedback and perspective",
      description:
        "Other operators see your blind spots. You see theirs. Everyone gets sharper.",
    },
    {
      title: "Leave with something useful",
      description:
        "Every session ends with at least one idea you can put to work immediately.",
    },
  ],
};

// ---------------------------------------------------------------------------
// 4. HOW IT WORKS
// ---------------------------------------------------------------------------
export const howItWorks = {
  sectionTitle: "How it works",
  steps: [
    {
      number: 1,
      title: "Join a session",
      description:
        "You're invited into a builder group — a private network of operators who are building with AI.",
    },
    {
      number: 2,
      title: "Show your work",
      description:
        "Bring something real — a workflow, a prompt, an agent, an idea.",
    },
    {
      number: 3,
      title: "Learn from others",
      description:
        "See how other operators are actually using AI in their day-to-day work.",
    },
    {
      number: 4,
      title: "Come back next week",
      description:
        "Same group. New progress. The conversation compounds over time.",
    },
  ],
};

// ---------------------------------------------------------------------------
// 5. INVITE MODEL
// ---------------------------------------------------------------------------
export const inviteModel = {
  sectionTitle: "Built to stay small",
  body: "You can't just sign up.",
  points: [
    "Every session starts with a builder group.",
    "If it works, you're invited back — and you can invite one other person.",
    "The goal isn't scale. It's quality.",
  ],
};

// ---------------------------------------------------------------------------
// 6. WHO THIS IS FOR
// ---------------------------------------------------------------------------
export const whoThisIsFor = {
  sectionTitle: "This is for operators",
  forYou: [
    "You're already using AI in your work",
    "You want to get better — fast",
    "You care about practical application, not theory",
    "You're willing to share what you're working on",
  ],
  notForYou: [
    "You're just getting started with AI",
    "You're looking for a structured course",
    "You prefer passive learning",
  ],
};

// ---------------------------------------------------------------------------
// 7. WHAT PEOPLE ARE SHARING
// ---------------------------------------------------------------------------
export const whatPeopleAreSharing = {
  sectionTitle: "What people are actually working on",
  items: [
    {
      title: "Building internal tools with Claude Code",
      description:
        "An ops lead walks through the internal dashboard they built in a weekend — no engineering team needed.",
    },
    {
      title: "Automating outbound workflows",
      description:
        "A RevOps manager shows how they cut manual outreach prep from 2 hours to 15 minutes.",
    },
    {
      title: "Structuring context for better outputs",
      description:
        "How one operator got their AI assistant to finally understand their business by rethinking context.",
    },
    {
      title: "Creating AI-powered proposals",
      description:
        "A consultant demos their prompt chain that drafts client proposals from call notes.",
    },
    {
      title: "Connecting data across systems",
      description:
        "Someone built an AI layer that pulls from HubSpot, Notion, and Slack to generate weekly reports.",
    },
    {
      title: "Evaluating what actually works",
      description:
        "Honest conversation about what's overhyped, what's underrated, and where AI still falls short.",
    },
  ],
};

// ---------------------------------------------------------------------------
// 8. EXPERIENCE
// ---------------------------------------------------------------------------
export const experience = {
  sectionTitle: "What it feels like",
  lines: [
    "It's not polished.",
    "It's not perfect.",
    "It's real.",
  ],
  paragraphs: [
    "You'll see things that work. You'll see things that fail.",
    "You'll leave better than you came in.",
  ],
};

// ---------------------------------------------------------------------------
// 9. FINAL CTA
// ---------------------------------------------------------------------------
export const finalCta = {
  headline: "Want in?",
  subheadline:
    "Sessions are free, invite-only, and designed for operators who learn by doing — not by watching.",
  cta: { label: "Request an Invite", href: "/request-invite" },
  supportingLine: "We'll follow up if it's a fit.",
};

// ---------------------------------------------------------------------------
// 10. FOOTER
// ---------------------------------------------------------------------------
export const footer = {
  copyright: `\u00A9 ${new Date().getFullYear()} AIRops Academy. All rights reserved.`,
  tagline: "AI better \u2014 together.",
  links: [
    { label: "How It Works", href: "/how-it-works" },
    { label: "Sessions", href: "/sessions" },
    { label: "About", href: "/about" },
    { label: "Request an Invite", href: "/request-invite" },
  ],
};

// ---------------------------------------------------------------------------
// SUPPORTING PAGES
// ---------------------------------------------------------------------------

export const howItWorksPage = {
  headline: "How AIRops Academy works",
  intro:
    "One hour a week. A private builder group. Real work, real conversation, real progress.",
  sessionBreakdown: {
    title: "What a session looks like",
    steps: [
      {
        time: "5 min",
        title: "Quick intros",
        description: "Who's here, what you're working on this week.",
      },
      {
        time: "40 min",
        title: "Open share + discussion",
        description:
          "Someone shares a workflow, demo, or problem. The group digs in — questions, feedback, ideas.",
      },
      {
        time: "15 min",
        title: "Wrap + takeaways",
        description:
          "What stuck, what to try, what to bring back next week.",
      },
    ],
  },
  whatToBring: {
    title: "What to bring",
    items: [
      "A workflow you're automating",
      "A tool or prompt you're testing",
      "A problem you're stuck on",
      "A result you want to share",
      "Or just show up and listen — that's fine too",
    ],
  },
  whatToExpect: {
    title: "What to expect",
    items: [
      "No presentations. No homework. No prep required.",
      "You don't need to be an expert — just an operator who's building.",
      "Sessions are informal. Think working lunch, not conference talk.",
      "Same group each week. The conversation builds over time.",
    ],
  },
};

export const sessionsPage = {
  headline: "Inside a session",
  intro:
    "Every week, a builder group gets together to share what they're building with AI. Here's what that actually looks like.",
  format: {
    title: "The format",
    points: [
      "6\u20138 operators per session",
      "1 hour, same time each week",
      "Video on, casual conversation",
      "No slides, no decks, no formal presentations",
    ],
  },
  typicalFlow: {
    title: "A typical session",
    items: [
      {
        label: "Check-in",
        description: "Quick round — what are you working on this week?",
      },
      {
        label: "Deep dive",
        description:
          "One or two people share something specific — a workflow, a tool, a result, a failure.",
      },
      {
        label: "Group discussion",
        description:
          "Everyone weighs in. Questions, suggestions, \"have you tried...\" moments.",
      },
      {
        label: "Takeaways",
        description:
          "What to try this week. What to bring back next time.",
      },
    ],
  },
  topics: {
    title: "Topics that come up",
    items: [
      "Comparing AI tools for specific use cases",
      "Automating real workflows end-to-end",
      "Prompt engineering and context management",
      "Building internal tools with AI coding assistants",
      "What's actually working vs. what's overhyped",
      "Connecting AI across systems (CRMs, docs, data)",
    ],
  },
};

export const requestInvitePage = {
  headline: "Request an invite",
  intro:
    "We're not looking for perfect answers — just a sense of how you're thinking about AI today.",
  fields: [
    { name: "name", label: "Name", type: "text" as const, required: true },
    { name: "email", label: "Email", type: "email" as const, required: true },
    { name: "role", label: "Role / Title", type: "text" as const, required: true },
    {
      name: "currentUsage",
      label: "How are you currently using AI?",
      type: "textarea" as const,
      required: true,
    },
    {
      name: "goals",
      label: "What would you want to share or learn?",
      type: "textarea" as const,
      required: false,
    },
  ],
  submitLabel: "Submit Request",
  successMessage:
    "Thanks for your interest. We'll follow up if it's a fit.",
};

export const aboutPage = {
  headline: "Why this exists",
  paragraphs: [
    "Most AI learning is passive. You watch a tutorial. You read a thread. You try something once and move on.",
    "Most real progress comes from doing — and doing it alongside other people who are figuring out the same thing.",
    "AIRops Academy exists to close that gap.",
    "It's a private, invite-only network of operators who meet every week to share what they're actually building with AI. Not theory. Not hype. Just real work and honest conversation.",
    "We built this because learning is faster when you're surrounded by other people doing the same kind of work. When someone shares a workflow that's working, you can adapt it. When someone hits a wall, you can help — or avoid the same mistake.",
    "This isn't a course. It's a room full of people who are all trying to get better at the same thing — and willing to share what they're learning along the way.",
  ],
};
