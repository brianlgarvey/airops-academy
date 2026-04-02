/**
 * ============================================================================
 * AIRops Academy — Centralized Site Content & Configuration
 * ============================================================================
 *
 * COMMUNITY-FIRST HOMEPAGE MOCKUP
 *
 * SECTIONS:
 *  1. Brand & Navigation
 *  2. Hero
 *  3. What This Is / How It Works
 *  4. What Happens in a Session
 *  5. The Path / Maturity Model
 *  6. What Is AIRops?
 *  7. Why We Built This
 *  8. Social Proof
 *  9. Final CTA
 * 10. Footer
 * ============================================================================
 */

// ---------------------------------------------------------------------------
// 1. BRAND & NAVIGATION
// ---------------------------------------------------------------------------
export const brand = {
  name: "AIRops Academy",
  tagline: "Learn AI by building alongside other operators",
  description:
    "A community for operators, builders, and AI-curious professionals learning AI together through small, informal study groups.",
};

export const navigation = {
  links: [
    { label: "Study Groups", href: "#study-groups" },
    { label: "Workshops", href: "#path" },
    { label: "Community", href: "#community" },
    { label: "What is AIRops?", href: "#airops" },
  ],
  cta: { label: "Request an Invite", href: "#request-invite" },
};

// ---------------------------------------------------------------------------
// 2. HERO
// ---------------------------------------------------------------------------
export const hero = {
  headline: "Learn AI by building alongside other operators",
  subheadline:
    "Join a small, informal study group where builders, operators, and AI-curious professionals share what they're working on, what's working, and what they're learning — in real time.",
  primaryCta: { label: "Request an Invite", href: "#request-invite" },
  secondaryCta: { label: "See How It Works", href: "#study-groups" },
  supportingLine:
    "Free to join. No slides. No fluff. Just real work and real discussion.",
};

// ---------------------------------------------------------------------------
// 3. WHAT THIS IS / HOW IT WORKS
// ---------------------------------------------------------------------------
export const whatThisIs = {
  sectionTitle: "What this actually is",
  sectionSubtitle:
    "A small group of people who meet regularly to share what they're learning about AI — and help each other get better at applying it.",
  points: [
    {
      title: "Small groups",
      description:
        "Typically 6–10 people. Enough to get diverse perspectives, small enough that everyone gets heard.",
    },
    {
      title: "Informal format",
      description:
        "No curriculum. No homework. No prep required. Show up, share what you're working on, ask questions, learn from others.",
    },
    {
      title: "Real work, real discussion",
      description:
        "Bring a workflow you're automating, a tool you're evaluating, or a problem you're stuck on. Or just listen and learn.",
    },
    {
      title: "Ongoing and evolving",
      description:
        "Groups meet on a recurring cadence. The conversation builds over time as people go deeper.",
    },
  ],
};

// ---------------------------------------------------------------------------
// 4. WHAT HAPPENS IN A SESSION
// ---------------------------------------------------------------------------
export const sessionTopics = {
  sectionTitle: "What happens in a session",
  sectionSubtitle:
    "Here's the kind of thing people actually talk about. No theory decks. No abstract case studies. Just operators sharing real work.",
  topics: [
    {
      title: "Comparing AI tools",
      description:
        "Claude vs. ChatGPT vs. Gemini — what's actually better for different kinds of work, and why.",
      tag: "Tools",
    },
    {
      title: "Sharing workflows",
      description:
        "Someone walks through how they automated part of their onboarding process using AI. Others ask questions, poke holes, suggest improvements.",
      tag: "Workflows",
    },
    {
      title: "Context management",
      description:
        "How to deal with context windows, context sprawl, and getting AI to actually understand your business.",
      tag: "Technique",
    },
    {
      title: "Automating real tasks",
      description:
        "Taking a repetitive piece of work — data cleanup, meeting prep, reporting — and figuring out how to hand part of it to AI.",
      tag: "Automation",
    },
    {
      title: "Building internal tools",
      description:
        "Someone built a small app using an AI coding assistant. They demo it, explain what went wrong, and what they'd do differently.",
      tag: "Building",
    },
    {
      title: "Honest conversation",
      description:
        "What's actually working. What's overhyped. Where AI falls short. No hype, no sales pitch — just signal.",
      tag: "Discussion",
    },
  ],
};

// ---------------------------------------------------------------------------
// 5. THE PATH / MATURITY MODEL
// ---------------------------------------------------------------------------
export const thePath = {
  sectionTitle: "Start free. Go deeper when you're ready.",
  sectionSubtitle:
    "There's no pressure to buy anything. Start with a study group. If you want more structure later, it's there.",
  stages: [
    {
      title: "Study Groups",
      subtitle: "Free",
      description:
        "Join a small group of operators learning AI together. Meet regularly, share what you're building, learn from each other.",
      status: "Start here",
      features: [
        "Small group format (6–10 people)",
        "Recurring sessions",
        "No cost, no commitment",
        "Bring your own questions and projects",
      ],
    },
    {
      title: "Community",
      subtitle: "Free",
      description:
        "Stay connected between sessions. Share resources, ask questions, and keep the conversation going with operators who get it.",
      status: "Keep going",
      features: [
        "Ongoing async discussion",
        "Shared resources and workflows",
        "Connect with other operators",
        "Stay in the loop on what's working",
      ],
    },
    {
      title: "Workshops",
      subtitle: "Paid",
      description:
        "Focused, hands-on learning experiences for when you want to go deeper on a specific skill or workflow.",
      status: "Go deeper",
      features: [
        "Structured, hands-on sessions",
        "Specific skills and outcomes",
        "Expert-led instruction",
        "Build something real",
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// 6. WHAT IS AIROPS?
// ---------------------------------------------------------------------------
export const whatIsAirops = {
  sectionTitle: "What is AIRops?",
  sectionSubtitle:
    "AIRops is the shift from experimenting with AI to designing systems where AI is embedded into real workflows.",
  paragraphs: [
    "Most people are still in the experimentation phase. They've tried ChatGPT. Maybe they've built a few prompts. But AI isn't yet woven into how they actually work.",
    "AIRops is what comes next: the practice of integrating AI into operations — thoughtfully, safely, and in ways that actually stick.",
    "It's not about replacing people. It's about giving operators better tools and better judgment about when and how to use them.",
  ],
  pillars: [
    {
      title: "From experiment to system",
      description:
        "Move past one-off prompts toward repeatable workflows where AI plays a defined role.",
    },
    {
      title: "Operator-led, not vendor-led",
      description:
        "The people closest to the work should be the ones designing how AI fits into it.",
    },
    {
      title: "Safe by default",
      description:
        "Read before you write. Check before you act. Build AI into workflows with guardrails, not shortcuts.",
    },
  ],
};

// ---------------------------------------------------------------------------
// 7. WHY WE BUILT THIS
// ---------------------------------------------------------------------------
export const whyWeBuiltThis = {
  sectionTitle: "Why we built this",
  paragraphs: [
    "Most people are trying to figure out AI alone. They're bouncing between tools, tutorials, YouTube videos, and half-finished experiments — with no one to compare notes with.",
    "That's a hard way to learn. And it's slow.",
    "We built AIRops Academy because learning is faster when you're surrounded by other people doing the same kind of work. When someone shares a workflow that's working, you can adapt it. When someone hits a wall, you can help — or avoid the same mistake.",
    "This isn't a course. It's a room full of people who are all trying to get better at the same thing — and willing to share what they're learning along the way.",
  ],
};

// ---------------------------------------------------------------------------
// 8. SOCIAL PROOF / TESTIMONIALS
// ---------------------------------------------------------------------------
export const socialProof = {
  sectionTitle: "What people are saying",
  testimonials: [
    {
      quote:
        "This was more useful than most webinars I've attended. Real people, real work, real conversation.",
      name: "Sarah M.",
      role: "RevOps Lead",
      company: "Series B SaaS",
    },
    {
      quote:
        "I left with three ideas I wanted to try immediately. That never happens with courses.",
      name: "James K.",
      role: "HubSpot Admin",
      company: "Mid-market fintech",
    },
    {
      quote:
        "It helped me understand what other operators are actually doing with AI — not what vendors say they should be doing.",
      name: "Maria L.",
      role: "Marketing Ops Manager",
      company: "B2B agency",
    },
    {
      quote:
        "I stopped feeling behind. Turns out everyone is figuring this out in real time.",
      name: "David R.",
      role: "Solutions Consultant",
      company: "HubSpot Partner",
    },
  ],
};

// ---------------------------------------------------------------------------
// 9. FINAL CTA
// ---------------------------------------------------------------------------
export const finalCta = {
  headline: "If this sounds valuable, raise your hand.",
  subheadline:
    "Study groups are free, informal, and designed for people who want to learn by doing — not by watching. Request an invite and we'll match you with a group.",
  cta: { label: "Request an Invite", href: "#request-invite" },
  supportingLine:
    "No cost. No commitment. Just a small group of operators learning together.",
};

// ---------------------------------------------------------------------------
// 10. FOOTER
// ---------------------------------------------------------------------------
export const footer = {
  copyright: `© ${new Date().getFullYear()} AIRops Academy. All rights reserved.`,
  tagline: "Learn AI by building alongside other operators.",
  links: [
    { label: "Study Groups", href: "#study-groups" },
    { label: "Community", href: "#community" },
    { label: "Workshops", href: "#path" },
    { label: "What is AIRops?", href: "#airops" },
  ],
};
