const commitments = [
  {
    title: "Community-first itineraries",
    description:
      "Encourage travelers to spend time and money in ways that support local guides, markets and artisan ecosystems.",
  },
  {
    title: "Landscape-sensitive travel",
    description:
      "Frame waterfalls, forests and wildlife routes around respectful movement, lower-impact planning and cleaner visitor behaviour.",
  },
  {
    title: "Culture with dignity",
    description:
      "Present local traditions as living knowledge and identity, not just photo moments or surface-level entertainment.",
  },
];

const ESG = () => {
  return (
    <section id="esg" className="relative isolate overflow-hidden py-28">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/scenic-mountain-landscape-with-warm-sunset-colors.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(13,29,24,0.9),rgba(13,29,24,0.72),rgba(13,29,24,0.78))]" />

      <div className="relative mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div data-reveal="right" className="max-w-xl text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[color:var(--sun)]">
            Responsible tourism
          </p>
          <h2 className="mt-4 font-heading text-4xl leading-tight md:text-5xl">
            A better final project when sustainability is built into the main story.
          </h2>
          <p className="mt-6 text-base leading-8 text-white/80 md:text-lg">
            The ESG section now closes the inspiration journey with purpose. It
            supports the tourism brand, keeps the experience modern and gives the
            project stronger substance for a final presentation.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex rounded-full bg-[color:var(--sun)] px-6 py-3 text-sm font-semibold text-[color:var(--ink)] transition-transform duration-200 hover:-translate-y-0.5"
          >
            Turn this into a campaign brief
          </a>
        </div>

        <div className="grid gap-5">
          {commitments.map((commitment) => (
            <article
              key={commitment.title}
              data-reveal="left"
              className="rounded-[2rem] border border-white/10 bg-white/10 p-6 text-white shadow-[0_18px_50px_rgba(0,0,0,0.16)] backdrop-blur-md"
            >
              <h3 className="text-2xl font-semibold">{commitment.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/76">
                {commitment.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ESG;
