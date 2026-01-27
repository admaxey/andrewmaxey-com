export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl">
          <h1 className="font-display text-display-lg mb-8">About</h1>
          <p className="text-text-secondary text-lg leading-relaxed mb-6">
            I&apos;m Andrew Maxey, a software engineer based in Florida. I build infrastructure, web applications, and occasionally useful things.
          </p>
          <p className="text-text-secondary text-lg leading-relaxed mb-6">
            Currently focused on home lab infrastructure (LUCAS), precious metals tracking (MyOZT), and exploring what&apos;s possible when AI meets thoughtful engineering.
          </p>
          <h2 className="font-display text-2xl text-text-primary mt-12 mb-4">Get in Touch</h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            The best way to reach me is via email at <a href="mailto:hello@andrewmaxey.com" className="text-accent hover:underline">hello@andrewmaxey.com</a>
          </p>
        </div>
      </section>
    </div>
  );
}
