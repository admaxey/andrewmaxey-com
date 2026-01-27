import { Demo } from "@/types/demos";

export const demos: Demo[] = [
  {
    slug: "myozt",
    title: "MyOZT",
    description: "A real-time precious metals price board for dealers to display spot prices, set premiums, and manage their shop inventory.",
    longDescription: `MyOZT is a dealer-focused precious metals price board designed for coin shops and bullion dealers. Built with Next.js 15 and PostgreSQL, it displays real-time spot prices for gold, silver, platinum, and palladium while giving dealers full control over premiums and inventory.

Key features include:
• Real-time spot price integration with multiple data sources
• Interactive price board for customer-facing displays
• Admin panel for setting buy/sell premiums by product
• Customizable themes and visual effects
• Kiosk mode optimized for in-store displays
• Multi-device management for shop deployments
• Microsoft authentication for secure dealer access`,
    type: "showcase",
    images: [
      "/demos/myozt/price-board.png",
      "/demos/myozt/admin-junk.png",
      "/demos/myozt/admin-gold.png",
      "/demos/myozt/themes.png",
      "/demos/myozt/devices.png",
      "/demos/myozt/kiosk.png",
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
