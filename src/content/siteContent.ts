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
  cta: { label: "Request an Invite", href: "/#invite-form" },
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
      quote:
        "Built a pricing estimator in **Claude Code** trained on thousands of real proposals. Beats generic AI by an order of magnitude.",
      name: "Brian G.",
      role: "Founder",
      avatar: "https://i.pravatar.cc/150?img=12",
      type: "build" as const,
    },
    {
      quote:
        "Imagination is the bottleneck now. Seeing what others ship with **Claude Code** and **Cursor** expanded what I thought was possible.",
      name: "Jeff B.",
      role: "Data Ops",
      avatar: "https://i.pravatar.cc/150?img=53",
      type: "praise" as const,
    },
    {
      quote:
        "Full LinkedIn prospecting pipeline in one hour \u2014 **Agent.ai** for data, **n8n** for the flow, **Claude** for the copy.",
      name: "Nejc S.",
      role: "Founder",
      avatar: "https://i.pravatar.cc/150?img=59",
      type: "build" as const,
    },
    {
      quote:
        "Went from 3\u20134 days per component to one hour with **Claude Code**. Changed everything for our dev team.",
      name: "JC T.",
      role: "Agency Partner",
      avatar: "https://i.pravatar.cc/150?img=33",
      type: "praise" as const,
    },
    {
      quote:
        "Replaced a $500/mo SaaS with a **Cursor**-built extension that syncs LinkedIn to HubSpot exactly how we want.",
      name: "Klemen H.",
      role: "HubSpot Partner",
      avatar: "https://i.pravatar.cc/150?img=14",
      type: "build" as const,
    },
    {
      quote:
        "Stopped guessing between **Cursor**, **Windsurf**, and **Zed**. Someone in the room had already tested all three.",
      name: "Derek A.",
      role: "RevOps Lead",
      avatar: "https://i.pravatar.cc/150?img=8",
      type: "praise" as const,
    },
    {
      quote:
        "Proposal generator shipped in two days \u2014 **v0** for the UI, **Claude** on the backend, **Supabase** for storage.",
      name: "Maya K.",
      role: "Consultant",
      avatar: "https://i.pravatar.cc/150?img=26",
      type: "build" as const,
    },
    {
      quote:
        "Took more notes in one session than in months of webinars. The **Cursor** vs **Windsurf** breakdown alone was worth it.",
      name: "Trevor S.",
      role: "Solutions Lead",
      avatar: "https://i.pravatar.cc/150?img=60",
      type: "praise" as const,
    },
    {
      quote:
        "**Replit** Agent builds 80% of my prototypes. I just finish the last 20% in **Cursor**.",
      name: "Priya S.",
      role: "Product Manager",
      avatar: "https://i.pravatar.cc/150?img=47",
      type: "build" as const,
    },
    {
      quote:
        "Found out about **Maestro** here. Already shipped three workflows with it this week.",
      name: "Aaron T.",
      role: "Automation Lead",
      avatar: "https://i.pravatar.cc/150?img=11",
      type: "praise" as const,
    },
    {
      quote:
        "Wired **HubSpot**, **Notion**, and **Slack** into one AI layer via **Windsurf**. Weekend project.",
      name: "Ryan M.",
      role: "Ops Director",
      avatar: "https://i.pravatar.cc/150?img=17",
      type: "build" as const,
    },
    {
      quote:
        "Learned more about **Claude Code** in one hour than a month of YouTube tutorials.",
      name: "Sam W.",
      role: "Founder",
      avatar: "https://i.pravatar.cc/150?img=22",
      type: "praise" as const,
    },
    {
      quote:
        "**Bolt.new** for the scaffold, **Claude Code** for the rest. My new default stack.",
      name: "Olivia P.",
      role: "Designer",
      avatar: "https://i.pravatar.cc/150?img=48",
      type: "build" as const,
    },
    {
      quote:
        "The group caught a context bug in my **Codex** setup that would have cost me a full week.",
      name: "Daniel R.",
      role: "Engineer",
      avatar: "https://i.pravatar.cc/150?img=38",
      type: "praise" as const,
    },
    {
      quote:
        "Automated weekly reporting with **n8n** + **Gumloop** + **GPT-5**. Four hours saved every week.",
      name: "Emma L.",
      role: "Marketing Ops",
      avatar: "https://i.pravatar.cc/150?img=51",
      type: "build" as const,
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

export const studyGroupsSections = {
  pace: {
    eyebrow: "The problem",
    title: "Keeping up alone is a losing game.",
    body: "New models. New tools. New techniques. Every week. Trying to keep up solo means endless tabs, half-finished experiments, and the nagging feeling you\u2019re falling behind.",
  },
  value: {
    eyebrow: "What you get",
    title: "Learn and grow with other operators.",
    subtitle: "A weekly one-hour session where operators share what they\u2019re actually doing with AI.",
    items: [
      {
        title: "Hear what\u2019s working",
        description:
          "Real workflows, real results, real lessons from people doing the work.",
      },
      {
        title: "Hear what\u2019s not",
        description:
          "What\u2019s overhyped. What doesn\u2019t deliver. Save yourself the time.",
      },
      {
        title: "Hear what\u2019s next",
        description:
          "New tools, new techniques \u2014 surfaced by operators who are paying attention.",
      },
      {
        title: "Ask questions",
        description:
          "Stuck on something? The group is your brain trust.",
      },
      {
        title: "Get answers",
        description:
          "Direct, practical input from people who\u2019ve been there.",
      },
      {
        title: "Help others",
        description:
          "Teaching is the fastest way to sharpen your own thinking.",
      },
    ],
  },
  rules: {
    eyebrow: "Two rules",
    title: "Just two rules:",
    subtitle: "",
    closing: "That\u2019s it. That\u2019s the whole system.",
    items: [
      {
        title: "If you\u2019re building something \u2192 you have to share it.",
        description:
          "A workflow. A tool. An agent. Whatever you\u2019re working on \u2014 bring it to the room.",
      },
      {
        title: "If you don\u2019t understand something \u2192 you have to ask.",
        description:
          "No pretending. No nodding along. That\u2019s exactly what this group is for.",
      },
    ],
  },
  closingCta: {
    title: "Ready to join?",
    subtitle: "Request an invite and we\u2019ll follow up if it\u2019s a fit.",
    buttonLabel: "Request an Invite",
    buttonHref: "#top",
  },
};

export const studyGroupsHome = {
  eyebrow: "The AIRops Academy Study Group",
  headline: "AI is moving too fast to keep up alone.",
  subheadline:
    "Join a weekly AI study group of 6\u20138 operators. One hour. Two rules. Everyone leaves better, guaranteed.",
  ctaLabel: "Join an AI Study Group",
  sponsors: {
    label: "Sponsored by",
    items: [
      {
        name: "Profoundly",
        href: "https://www.profoundly.com/",
      },
      {
        name: "Sellestial",
        href: "https://www.sellestial.com/",
      },
    ],
  },
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
