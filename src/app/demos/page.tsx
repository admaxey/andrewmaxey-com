import { demos, getAllTags } from "@/content/demos";
import { DemoGallery } from "@/components/demos";

export const metadata = {
  title: "Demos | Andrew Maxey",
  description: "Interactive demos, experiments, and project showcases.",
};

export default function DemosPage() {
  const tags = getAllTags();

  return (
    <div className="min-h-screen pt-20">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h1 className="font-display text-display-lg mb-4">Demos</h1>
        <p className="text-text-secondary text-lg max-w-2xl mb-12">
          Interactive demos you can try, and showcases of projects I&apos;ve built.
        </p>

        <DemoGallery demos={demos} tags={tags} />
      </section>
    </div>
  );
}
