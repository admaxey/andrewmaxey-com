import { Demo } from "@/types/demos";

export const demos: Demo[] = [
  {
    slug: "sip-game",
    title: "Super Identity Partners",
    description: "A retro platformer built for CDW & Cisco cybersecurity events. Collect MFA tokens across three levels while avoiding phishing emails, hackers, and data breaches.",
    longDescription: "Super Identity Partners is a Super Mario Bros. 3 style platformer created for CDW and Cisco cybersecurity awareness events. Players navigate through three themed levels, collecting MFA tokens while dodging security threats like phishing emails, hackers, and data breaches. Features authentic cracktro-style music and pixel-perfect retro graphics.",
    type: "live",
    path: "/demos/sip-game/",
    fullScreen: true,
    tags: ["game", "html5-canvas", "javascript", "retro"],
    featured: true,
    date: "2024-01",
  },
  // Add more demos here following this pattern:
  // 
  // Live demo example:
  // {
  //   slug: "my-app",
  //   title: "My App",
  //   description: "Short description",
  //   type: "live",
  //   path: "/demos/my-app/",
  //   tags: ["react", "typescript"],
  // },
  //
  // Showcase example:
  // {
  //   slug: "myozt",
  //   title: "MyOZT",
  //   description: "Precious metals portfolio tracker",
  //   type: "showcase",
  //   images: ["/demos/myozt/screenshot-1.png", "/demos/myozt/screenshot-2.png"],
  //   url: "https://myozt.com",
  //   techStack: ["Next.js", "PostgreSQL", "Tailwind"],
  //   tags: ["finance", "full-stack"],
  // },
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
