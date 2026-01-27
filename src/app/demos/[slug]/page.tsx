import { notFound } from "next/navigation";
import Link from "next/link";
import { demos, getDemoBySlug } from "@/content/demos";
import { isLiveDemo, isShowcaseDemo } from "@/types/demos";
import { DemoLive } from "@/components/demos/DemoLive";
import { DemoShowcase } from "@/components/demos/DemoShowcase";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return demos.map((demo) => ({
    slug: demo.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const demo = getDemoBySlug(slug);
  if (!demo) return { title: "Demo Not Found" };
  
  return {
    title: `${demo.title} | Demos | Andrew Maxey`,
    description: demo.description,
  };
}

export default async function DemoPage({ params }: Props) {
  const { slug } = await params;
  const demo = getDemoBySlug(slug);

  if (!demo) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-20">
      <section className="mx-auto max-w-6xl px-6 py-12">
        {/* Back link */}
        <Link
          href="/demos"
          className="inline-flex items-center gap-2 text-text-muted hover:text-text-secondary transition-colors mb-8"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Demos
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="font-display text-display-md">{demo.title}</h1>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              isLiveDemo(demo)
                ? "bg-accent/20 text-accent"
                : "bg-text-muted/20 text-text-secondary"
            }`}>
              {isLiveDemo(demo) ? "Interactive" : "Showcase"}
            </span>
          </div>
          {demo.date && (
            <p className="text-text-muted text-sm font-mono">{demo.date}</p>
          )}
        </div>

        {/* Demo content */}
        {isLiveDemo(demo) && <DemoLive demo={demo} />}
        {isShowcaseDemo(demo) && <DemoShowcase demo={demo} />}
      </section>
    </div>
  );
}
