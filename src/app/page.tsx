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
          </p>
          <div className="mt-12 flex items-center gap-4 opacity-0 animate-slide-up delay-300">
            <a href="/about" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background font-medium rounded-lg hover:bg-accent/90 transition-colors">
              About Me
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
