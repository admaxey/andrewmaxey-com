"use client";

import { useState } from "react";
import { ShowcaseDemo } from "@/types/demos";

type DemoShowcaseProps = {
  demo: ShowcaseDemo;
};

export function DemoShowcase({ demo }: DemoShowcaseProps) {
  const [activeImage, setActiveImage] = useState(0);

  // Parse description for bullet points
  const descriptionParts = (demo.longDescription || demo.description).split("\n\n");

  return (
    <div className="space-y-8">
      {/* Main image viewer */}
      {demo.images.length > 0 && (
        <div className="space-y-4">
          <div className="aspect-video bg-background rounded-xl overflow-hidden border border-border relative group">
            <img
              src={demo.images[activeImage]}
              alt={`${demo.title} screenshot ${activeImage + 1}`}
              className="w-full h-full object-contain"
            />
            {/* Image navigation arrows */}
            {demo.images.length > 1 && (
              <>
                <button
                  onClick={() => setActiveImage((prev) => (prev === 0 ? demo.images.length - 1 : prev - 1))}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => setActiveImage((prev) => (prev === demo.images.length - 1 ? 0 : prev + 1))}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/50 rounded-full text-sm text-white">
              {activeImage + 1} / {demo.images.length}
            </div>
          </div>

          {/* Thumbnail strip */}
          {demo.images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-2">
              {demo.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                    idx === activeImage
                      ? "border-accent"
                      : "border-border hover:border-text-muted"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Description */}
      <div className="space-y-4">
        {descriptionParts.map((part, idx) => {
          // Check if this part contains bullet points
          if (part.includes("• ") || part.includes("- ")) {
            const lines = part.split("\n").filter(Boolean);
            const title = lines[0].endsWith(":") ? lines[0] : null;
            const bullets = title ? lines.slice(1) : lines;
            
            return (
              <div key={idx}>
                {title && (
                  <p className="text-text-primary font-medium mb-2">{title}</p>
                )}
                <ul className="space-y-1.5">
                  {bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2 text-text-secondary">
                      <span className="text-accent mt-1.5">•</span>
                      <span>{bullet.replace(/^[•\-]\s*/, "")}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          }
          
          return (
            <p key={idx} className="text-text-secondary text-lg leading-relaxed">
              {part}
            </p>
          );
        })}
      </div>

      {/* Tech stack */}
      {demo.techStack && demo.techStack.length > 0 && (
        <div>
          <h3 className="font-display text-lg mb-3 text-text-secondary">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {demo.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-surface border border-border rounded-lg text-sm font-mono hover:border-accent transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Links */}
      <div className="flex gap-4 pt-4 border-t border-border">
        {demo.url && (
          <a
            href={demo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background font-medium rounded-lg hover:bg-accent/90 transition-colors"
          >
            Visit Site
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
        {demo.repo && (
          <a
            href={demo.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-text-secondary hover:text-text-primary hover:border-text-muted rounded-lg transition-colors"
          >
            View Source
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
