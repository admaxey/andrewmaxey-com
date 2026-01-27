"use client";

import { useState } from "react";
import { LiveDemo } from "@/types/demos";

type DemoLiveProps = {
  demo: LiveDemo;
};

export function DemoLive({ demo }: DemoLiveProps) {
  const [isFullScreen, setIsFullScreen] = useState(demo.fullScreen ?? false);

  // Ensure we load index.html for static demos
  const iframeSrc = demo.path.endsWith("/") 
    ? `${demo.path}index.html` 
    : demo.path;

  if (isFullScreen) {
    return (
      <>
        {/* Fullscreen backdrop - above nav (z-50) */}
        <div className="fixed inset-0 bg-black z-[60]" />
        
        {/* Fullscreen container */}
        <div className="fixed inset-0 z-[70] flex flex-col">
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-surface border-b border-border">
            <h2 className="font-display text-lg">{demo.title}</h2>
            <button
              onClick={() => setIsFullScreen(false)}
              className="flex items-center gap-2 px-4 py-2 text-sm bg-background border border-border rounded-lg hover:border-text-muted transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Exit Full Screen
            </button>
          </div>
          
          {/* iframe fills remaining space */}
          <div className="flex-1 bg-black">
            <iframe
              src={iframeSrc}
              className="w-full h-full border-0"
              allow="autoplay; fullscreen"
              title={demo.title}
            />
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="space-y-4">
      {/* Controls */}
      <div className="flex items-center justify-between gap-4">
        <p className="text-text-secondary text-sm flex-1">
          {demo.longDescription || demo.description}
        </p>
        <button
          onClick={() => setIsFullScreen(true)}
          className="flex-shrink-0 flex items-center gap-2 px-4 py-2 text-sm border border-border rounded-lg hover:border-text-muted transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
          Full Screen
        </button>
      </div>

      {/* Embed container */}
      <div className="aspect-video bg-black rounded-xl overflow-hidden border border-border">
        <iframe
          src={iframeSrc}
          className="w-full h-full border-0"
          allow="autoplay; fullscreen"
          title={demo.title}
        />
      </div>

      {/* Tags */}
      <div className="flex gap-2 flex-wrap pt-2">
        {demo.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-surface border border-border rounded text-xs font-mono text-text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
