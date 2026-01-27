"use client";

import { useState } from "react";
import { LiveDemo } from "@/types/demos";

type DemoLiveProps = {
  demo: LiveDemo;
};

export function DemoLive({ demo }: DemoLiveProps) {
  const [isFullScreen, setIsFullScreen] = useState(demo.fullScreen ?? false);

  return (
    <div className="space-y-4">
      {/* Controls */}
      <div className="flex items-center justify-between">
        <p className="text-text-secondary text-sm">
          {demo.longDescription || demo.description}
        </p>
        <button
          onClick={() => setIsFullScreen(!isFullScreen)}
          className="flex items-center gap-2 px-4 py-2 text-sm border border-border rounded-lg hover:border-text-muted transition-colors"
        >
          {isFullScreen ? (
            <>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Exit Full Screen
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              Full Screen
            </>
          )}
        </button>
      </div>

      {/* Embed container */}
      <div
        className={`relative bg-black rounded-xl overflow-hidden border border-border transition-all duration-300 ${
          isFullScreen
            ? "fixed inset-4 z-50 rounded-xl"
            : "aspect-video"
        }`}
      >
        {isFullScreen && (
          <button
            onClick={() => setIsFullScreen(false)}
            className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
        <iframe
          src={demo.path}
          className="w-full h-full border-0"
          allow="autoplay; fullscreen"
          title={demo.title}
        />
      </div>

      {/* Fullscreen backdrop */}
      {isFullScreen && (
        <div
          className="fixed inset-0 bg-black/80 z-40"
          onClick={() => setIsFullScreen(false)}
        />
      )}

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
