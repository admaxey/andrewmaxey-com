"use client";

import { useState, useMemo } from "react";
import { Demo } from "@/types/demos";
import { DemoCard } from "./DemoCard";

type DemoGalleryProps = {
  demos: Demo[];
  tags: string[];
};

export function DemoGallery({ demos, tags }: DemoGalleryProps) {
  const [filter, setFilter] = useState<"all" | "live" | "showcase">("all");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredDemos = useMemo(() => {
    return demos.filter((demo) => {
      const matchesType = filter === "all" || demo.type === filter;
      const matchesTag = !selectedTag || demo.tags.includes(selectedTag);
      return matchesType && matchesTag;
    });
  }, [demos, filter, selectedTag]);

  return (
    <div className="space-y-8">
      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4">
        {/* Type filter */}
        <div className="flex gap-2">
          {(["all", "live", "showcase"] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === type
                  ? "bg-accent text-background"
                  : "bg-surface border border-border text-text-secondary hover:text-text-primary hover:border-text-muted"
              }`}
            >
              {type === "all" ? "All" : type === "live" ? "Interactive" : "Showcase"}
            </button>
          ))}
        </div>

        {/* Tag filter */}
        {tags.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            <span className="text-text-muted text-sm self-center">Tags:</span>
            {selectedTag && (
              <button
                onClick={() => setSelectedTag(null)}
                className="px-3 py-1 rounded-full text-xs font-mono bg-accent/20 text-accent flex items-center gap-1"
              >
                {selectedTag}
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
            {!selectedTag && tags.slice(0, 6).map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className="px-3 py-1 rounded-full text-xs font-mono bg-surface border border-border text-text-muted hover:border-text-muted hover:text-text-secondary transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Results count */}
      <p className="text-text-muted text-sm">
        {filteredDemos.length} {filteredDemos.length === 1 ? "demo" : "demos"}
        {filter !== "all" && ` (${filter})`}
        {selectedTag && ` tagged "${selectedTag}"`}
      </p>

      {/* Grid */}
      {filteredDemos.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredDemos.map((demo) => (
            <DemoCard key={demo.slug} demo={demo} />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center text-text-muted border border-dashed border-border rounded-xl">
          <p className="font-mono text-sm">No demos match your filters</p>
        </div>
      )}
    </div>
  );
}
