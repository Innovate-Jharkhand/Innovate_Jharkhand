import { ArrowUpRight, CalendarDays, Leaf, Sparkles } from "lucide-react";

const highlights = [
  {
    title: "Season-first planning",
    description:
      "Shape recommendations around monsoon drama, winter comfort and festival-season colour rather than using one static itinerary all year.",
    icon: CalendarDays,
    tone: "Travel windows",
  },
  {
    title: "Local experience spotlight",
    description:
      "Feature markets, craft clusters, cuisine stops and community stories so the destination identity feels richer than a checklist of viewpoints.",
    icon: Sparkles,
    tone: "Culture notes",
  },
  {
    title: "Responsible tourism cues",
    description:
      "Use every touchpoint to encourage respectful travel, longer stays and better alignment with local ecosystems and livelihoods.",
    icon: Leaf,
    tone: "ESG thread",
  },
];

const News = () => {
  return (
    <section id="news" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div data-reveal="right">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[color:var(--clay)]">
              Travel highlights
            </p>
            <h2 className="mt-4 font-heading text-4xl leading-tight md:text-5xl">
              Replace placeholder news with useful planning intelligence.
            </h2>
          </div>
          <p
            data-reveal="left"
            className="text-sm leading-7 text-[color:var(--ink-soft)] md:text-base"
          >
            This section now supports the same tourism logic as the rest of the
            project. It gives visitors ideas, context and a reason to keep
            scrolling toward conversion.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.title}
              data-reveal="up"
              className="rounded-[2rem] border border-[rgba(27,29,19,0.08)] bg-white p-6 shadow-[0_18px_45px_rgba(20,38,30,0.08)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(184,95,60,0.1)] text-[color:var(--clay)]">
                <item.icon className="h-6 w-6" />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--forest)]">
                {item.tone}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-[color:var(--ink)]">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[color:var(--ink-soft)]">
                {item.description}
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--forest)]"
              >
                Use this in trip planning
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
