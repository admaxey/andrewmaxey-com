import { Demo } from "@/types/demos";

export const demos: Demo[] = [
  {
    slug: "myozt",
    title: "MyOZT",
    description: "A full-stack precious metals portfolio tracker with real-time spot prices, interactive visualizations, and comprehensive analytics.",
    longDescription: `MyOZT is a sophisticated precious metals portfolio management application designed for serious stackers and collectors. Built with Next.js 15 and PostgreSQL, it provides real-time spot price tracking for gold, silver, platinum, and palladium, along with powerful portfolio analytics.

Key features include:
• Real-time spot price integration with multiple data sources
• Interactive price board with live market data
• Dealer control panel for inventory management
• Detailed item tracking with purchase history and premiums
• Melt value calculations and profit/loss analysis
• Beautiful dark-themed UI optimized for data-dense displays
• Microsoft authentication for secure access`,
    type: "showcase",
    images: [
      "/demos/myozt/board.png",
      "/demos/myozt/admin.png",
      "/demos/myozt/home.png",
    ],
    url: "https://myozt.com",
    techStack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "NextAuth.js",
      "Vercel",
      "Neon",
    ],
    repo: "https://github.com/admaxey/myozt",
    tags: ["full-stack", "finance", "next.js", "postgresql", "real-time"],
    featured: true,
    date: "2024-12",
  },
  {
    slug: "sip-game",
    title: "Super Identity Partners",
    description: "A retro platformer built for CDW & Cisco cybersecurity events. Collect MFA tokens across three levels while avoiding phishing emails, hackers, and data breaches.",
    longDescription: `Super Identity Partners is a Super Mario Bros. 3 style platformer created for CDW and Cisco cybersecurity awareness events. Players navigate through three themed levels, collecting MFA tokens while dodging security threats like phishing emails, hackers, and data breaches. Features authentic cracktro-style music and pixel-perfect retro graphics.

The game was developed as an engaging way to promote cybersecurity awareness at trade shows and corporate events, combining nostalgic gameplay with modern security messaging.`,
    type: "live",
    path: "/demos/sip-game/",
    fullScreen: true,
    tags: ["game", "html5-canvas", "javascript", "retro"],
    featured: true,
    date: "2024-01",
  },
];

export function getDemoBySlug(slug: string): Demo | undefined {
  return demos.find((d) => d.slug === slug);
}

export function getFeaturedDemos(): Demo[] {
  return demos.filter((d) => d.featured);
}

export function getDemosByTag(tag: string): Demo[] {
  return demos.filter((d) => d.tags.includes(tag));
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  demos.forEach((d) => d.tags.forEach((t) => tags.add(t)));
  return Array.from(tags).sort();
}
