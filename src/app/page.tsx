export default function Home() {
  return (
    <div className="min-h-screen pt-20">
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-4xl">
          <h1 className="font-display text-display-lg md:text-display-xl opacity-0 animate-slide-up">
            Building things<br />
            <span className="text-text-secondary">that matter.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-text-secondary max-w-2xl opacity-0 animate-slide-up delay-200">
            Software engineer exploring the intersection of infrastructure, AI, and thoughtful design. 
            Currently building LUCAS, MyOZT, and other experiments.
          </p>
          <div className="mt-12 flex items-center gap-4 opacity-0 animate-slide-up delay-300">
            <a href="/projects" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background font-medium rounded-lg hover:bg-accent/90 transition-colors">
              View Projects
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="/about" className="inline-flex items-center gap-2 px-6 py-3 border border-border text-text-secondary hover:text-text-primary hover:border-text-muted rounded-lg transition-colors">
              About Me
            </a>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-16 border-t border-border/50">
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-display text-display-md text-text-secondary">Featured</h2>
          <a href="/projects" className="text-sm text-text-muted hover:text-accent transition-colors link-hover">View all →</a>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard title="Coming Soon" description="Project showcases will be added here" tags={["placeholder"]} />
          <ProjectCard title="Coming Soon" description="Project showcases will be added here" tags={["placeholder"]} />
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ title, description, tags }: { title: string; description: string; tags: string[] }) {
  return (
    <div className="group p-6 bg-surface rounded-xl border border-border/50 hover:border-border transition-all hover:bg-surface-elevated">
      <h3 className="font-display text-xl mb-2 group-hover:text-accent transition-colors">{title}</h3>
      <p className="text-text-secondary text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (<span key={tag} className="px-2 py-1 text-xs font-mono text-text-muted bg-background rounded">{tag}</span>))}
      </div>
    </div>
  );
}
