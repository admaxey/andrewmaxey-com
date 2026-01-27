import Link from "next/link";

export default function DemosPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h1 className="font-display text-display-lg mb-4">Demos</h1>
        <p className="text-text-secondary text-lg max-w-2xl mb-16">Interactive demos and experiments you can try.</p>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Super Identity Partners Game */}
          <Link 
            href="/demos/sip-game/"
            className="group block p-6 rounded-xl border border-border bg-surface hover:border-accent transition-colors"
          >
            <div className="aspect-video bg-black rounded-lg mb-4 flex items-center justify-center overflow-hidden">
              <div className="text-center">
                <div className="text-4xl mb-2">🎮</div>
                <div className="font-mono text-xs text-text-muted">SMB3-Style Platformer</div>
              </div>
            </div>
            <h3 className="font-display text-lg mb-2 group-hover:text-accent transition-colors">
              Super Identity Partners
            </h3>
            <p className="text-text-secondary text-sm">
              A retro platformer built for CDW &amp; Cisco cybersecurity events. 
              Collect MFA tokens across three levels while avoiding phishing emails, 
              hackers, and data breaches.
            </p>
            <div className="mt-4 flex gap-2 flex-wrap">
              <span className="px-2 py-1 bg-surface-alt rounded text-xs font-mono text-text-muted">HTML5 Canvas</span>
              <span className="px-2 py-1 bg-surface-alt rounded text-xs font-mono text-text-muted">JavaScript</span>
              <span className="px-2 py-1 bg-surface-alt rounded text-xs font-mono text-text-muted">Cracktro Music</span>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
