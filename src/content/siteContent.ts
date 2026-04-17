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
    { label: "AI Study Groups", href: "/" },
    { label: "Workshops", href: "https://www.airopsacademy.com/" },
  ],
  cta: { label: "Request an Invite", href: "/" },
};

// ---------------------------------------------------------------------------
// 2. HERO
// ---------------------------------------------------------------------------
export const hero = {
  headline: "AI better — together.",
  subheadline:
    "An invite-only network of operators sharing what's working, what's not, and what's next — week over week.",
  primaryCta: { label: "Request an Invite", href: "/" },
  secondaryCta: { label: "See How It Works", href: "/how-it-works" },
  highlights: [
    {
      quote: "Built a pricing estimator trained on thousands of real proposals. Generic AI was off by an order of magnitude — ours nails it.",
      name: "Brian G.",
      role: "Founder",
      avatar: "https://i.pravatar.cc/150?img=12",
      type: "build" as const,
    },
    {
      quote: "Imagination is the bottleneck now. Being in this room is the fastest way to expand what you think is possible.",
      name: "Jeff B.",
      role: "Data Ops",
      avatar: "https://i.pravatar.cc/150?img=53",
      type: "praise" as const,
    },
    {
      quote: "Built a full LinkedIn prospecting pipeline in one hour. Enrichment, scoring, drafting, sending — all automated.",
      name: "Nejc S.",
      role: "Founder",
      avatar: "https://i.pravatar.cc/150?img=59",
      type: "build" as const,
    },
    {
      quote: "We went from 3\u20134 days per component to literally one hour. Claude Code changed everything for our dev team.",
      name: "JC T.",
      role: "Agency Partner",
      avatar: "https://i.pravatar.cc/150?img=33",
      type: "praise" as const,
    },
    {
      quote: "Replaced a paid SaaS tool with a custom app I built in 10 days. It syncs LinkedIn DMs to HubSpot exactly how we need.",
      name: "Klemen H.",
      role: "HubSpot Partner",
      avatar: "https://i.pravatar.cc/150?img=14",
      type: "build" as const,
    },
    {
      quote: "I took more notes in one session than I have in months of courses and webinars. This is where the real signal is.",
      name: "Trevor S.",
      role: "Solutions Lead",
      avatar: "https://i.pravatar.cc/150?img=60",
      type: "praise" as const,
    },
  ],
};

// ---------------------------------------------------------------------------
// 3. HOW IT WORKS
// ---------------------------------------------------------------------------
export const howItWorks = {
  sectionTitle: "How it works",
  sectionSubtitle:
    "A weekly session with a builder group. One hour. Two parts. Everyone leaves better, guaranteed.",
  groupDiscussion: {
    title: "Group Discussion",
    subtitle: "Two rules.",
    rules: [
      {
        title: "If you're building something \u2192 you have to share it.",
        description:
          "A workflow you automated. A tool you're testing. An agent you shipped. Whatever you're working on \u2014 bring it to the room.",
      },
      {
        title: "If you don't understand something \u2192 you have to ask.",
        description:
          "No pretending. No nodding along. If you're stuck or confused, that's exactly what this group is for.",
      },
    ],
  },
  deepDive: {
    title: "Deep Dive",
    description:
      "Each session includes a deep dive on 1\u20132 key use cases or topics \u2014 led by advanced engineers and operators who can break it down and answer questions in real time.",
  },
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
  cta: { label: "Request an Invite", href: "/" },
  supportingLine: "We'll follow up if it's a fit.",
};

// ---------------------------------------------------------------------------
// 10. FOOTER
// ---------------------------------------------------------------------------
export const footer = {
  copyright: `\u00A9 ${new Date().getFullYear()} AIRops Academy. All rights reserved.`,
  tagline: "AI better \u2014 together.",
  links: [
    { label: "AI Study Groups", href: "/" },
    { label: "Workshops", href: "https://www.airopsacademy.com/" },
    { label: "About", href: "/about" },
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

export const studyGroupsHome = {
  headline: "Join an AI study group.",
  subheadline:
    "A weekly session with a builder group of 6\u20138 operators. One hour. Two rules. Everyone leaves better, guaranteed.",
  formHeadline: "Request an invite",
  formSubheadline:
    "Tell us a bit about yourself. We'll follow up if it's a fit.",
  fields: [
    { name: "name", label: "Name", type: "text" as const, required: true },
    { name: "email", label: "Email", type: "email" as const, required: true },
    { name: "company", label: "Company", type: "text" as const, required: true },
    { name: "role", label: "Role / Title", type: "text" as const, required: true },
    {
      name: "currentUsage",
      label: "How are you using AI today?",
      type: "textarea" as const,
      required: true,
    },
  ],
  submitLabel: "Request an Invite",
  successMessage:
    "Got it. We'll be in touch if it's a fit.",
  socialProofLabel: "Recent operators in the room",
  faces: [
    { name: "Brian G.", avatar: "https://i.pravatar.cc/150?img=12" },
    { name: "Jeff B.", avatar: "https://i.pravatar.cc/150?img=53" },
    { name: "Nejc S.", avatar: "https://i.pravatar.cc/150?img=59" },
    { name: "JC T.", avatar: "https://i.pravatar.cc/150?img=33" },
    { name: "Klemen H.", avatar: "https://i.pravatar.cc/150?img=14" },
    { name: "Trevor S.", avatar: "https://i.pravatar.cc/150?img=60" },
  ],
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
