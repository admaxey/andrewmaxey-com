export type DemoBase = {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  thumbnail?: string;
  featured?: boolean;
  date?: string;
};

export type LiveDemo = DemoBase & {
  type: "live";
  path: string;
  fullScreen?: boolean;
};

export type ShowcaseDemo = DemoBase & {
  type: "showcase";
  images: string[];
  url?: string;
  techStack?: string[];
  repo?: string;
};

export type Demo = LiveDemo | ShowcaseDemo;

export function isLiveDemo(demo: Demo): demo is LiveDemo {
  return demo.type === "live";
}

export function isShowcaseDemo(demo: Demo): demo is ShowcaseDemo {
  return demo.type === "showcase";
}
