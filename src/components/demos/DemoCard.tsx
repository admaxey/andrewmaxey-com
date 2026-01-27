import Link from "next/link";
import { Demo, isLiveDemo } from "@/types/demos";

type DemoCardProps = {
  demo: Demo;
};

export function DemoCard({ demo }: DemoCardProps) {
  const isLive = isLiveDemo(demo);

  return (
    <Link
      href={`/demos/${demo.slug}`}
      className="group block p-6 rounded-xl border border-border bg-surface hover:border-accent hover:bg-surface-elevated transition-all"
    >
      {/* Thumbnail */}
      <div className="aspect-video bg-background rounded-lg mb-4 flex items-center justify-center overflow-hidden relative">
        {demo.thumbnail ? (
          <img
            src={demo.thumbnail}
            alt={demo.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-center">
            <div className="text-4xl mb-2">{isLive ? "🎮" : "📸"}</div>
            <div className="font-mono text-xs text-text-muted">
              {isLive ? "Live Demo" : "Showcase"}
            </div>
          </div>
        )}
        {/* Type badge */}
        <div className="absolute top-2 right-2">
          <span className={`px-2 py-1 rounded text-xs font-medium ${
            isLive 
              ? "bg-accent/20 text-accent" 
              : "bg-text-muted/20 text-text-secondary"
          }`}>
            {isLive ? "Interactive" : "Showcase"}
          </span>
        </div>
      </div>

      {/* Content */}
      <h3 className="font-display text-lg mb-2 group-hover:text-accent transition-colors">
        {demo.title}
      </h3>
      <p className="text-text-secondary text-sm line-clamp-2">
        {demo.description}
      </p>

      {/* Tags */}
      <div className="mt-4 flex gap-2 flex-wrap">
        {demo.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-background rounded text-xs font-mono text-text-muted"
          >
            {tag}
          </span>
        ))}
        {demo.tags.length > 3 && (
          <span className="px-2 py-1 text-xs font-mono text-text-muted">
            +{demo.tags.length - 3}
          </span>
        )}
      </div>
    </Link>
  );
}
