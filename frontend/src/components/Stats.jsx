const stats = [
  {
    value: "4",
    label: "featured regions",
    description: "Clear destination anchors for the homepage story.",
  },
  {
    value: "3",
    label: "ready-made circuits",
    description: "Short, medium and mixed-interest trip plans.",
  },
  {
    value: "1",
    label: "planning desk",
    description: "A strong closing CTA to capture travel intent.",
  },
  {
    value: "365",
    label: "reasons to return",
    description: "Seasonal scenery, festival colour and slower travel windows.",
  },
];

const Stats = () => {
  return (
    <section id="stats" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-[2.25rem] bg-[linear-gradient(135deg,#0e5a46,#153d33)] px-8 py-10 text-white shadow-[0_24px_70px_rgba(14,90,70,0.28)]">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div data-reveal="right" className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[color:var(--sun)]">
                Project snapshot
              </p>
              <h2 className="mt-4 font-heading text-3xl leading-tight md:text-4xl">
                The finished structure now reads clearly, quickly and end to end.
              </h2>
            </div>
            <p
              data-reveal="left"
              className="max-w-xl text-sm leading-7 text-white/72"
            >
              These markers mirror the actual page structure, so the band feels
              intentional and truthful instead of decorative filler.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <article
                key={stat.label}
                data-reveal="up"
                className="rounded-[1.75rem] border border-white/10 bg-white/10 p-5 backdrop-blur-sm"
              >
                <p className="font-heading text-5xl text-[color:var(--sun)]">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-white">
                  {stat.label}
                </p>
                <p className="mt-3 text-sm leading-7 text-white/72">
                  {stat.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
