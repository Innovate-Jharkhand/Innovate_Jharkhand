import {
  Compass,
  Handshake,
  LandPlot,
  Sparkles,
} from "lucide-react";

const glanceCards = [
  {
    title: "Nature-first routes",
    description:
      "Frame Jharkhand through valleys, forest corridors, waterfalls and long scenic drives rather than generic tourism blocks.",
    icon: LandPlot,
  },
  {
    title: "Culture with context",
    description:
      "Bring in tribal craft, food stories, local festivals and artisan touchpoints so the experience feels specific and lived-in.",
    icon: Sparkles,
  },
  {
    title: "Weekend to long-stay flexibility",
    description:
      "The page structure now supports both quick escapes and fuller state-wide itineraries without changing tone or layout logic.",
    icon: Compass,
  },
  {
    title: "Community-aligned planning",
    description:
      "Responsible tourism messaging is integrated into the destination and contact journey, not treated as an isolated extra.",
    icon: Handshake,
  },
];

const AtAGlance = () => {
  return (
    <section id="glance" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div data-reveal="right" className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[color:var(--clay)]">
              At a glance
            </p>
            <h2 className="mt-4 font-heading text-4xl leading-tight md:text-5xl">
              A complete showcase that stays aligned from story to call-to-action.
            </h2>
            <p className="mt-6 text-base leading-8 text-[color:var(--ink-soft)] md:text-lg">
              The project now reads like a finished tourism platform: a clear
              identity, destination-led sections, usable travel circuits, a
              planning form and a strong sustainability thread that carries
              through the whole experience.
            </p>

            <div className="mt-8 rounded-[2rem] border border-[rgba(27,29,19,0.08)] bg-white/70 p-6 shadow-[0_20px_50px_rgba(20,38,30,0.08)]">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[color:var(--forest)]">
                Project direction
              </p>
              <p className="mt-3 text-sm leading-7 text-[color:var(--ink-soft)]">
                Instead of mixing generic global travel placeholders with
                Jharkhand content, every section now supports the same tourism
                logic and visual language.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {glanceCards.map((card) => (
              <article
                key={card.title}
                data-reveal="up"
                className="rounded-[2rem] border border-[rgba(27,29,19,0.08)] bg-white/85 p-6 shadow-[0_18px_45px_rgba(20,38,30,0.08)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(14,90,70,0.08)] text-[color:var(--forest)]">
                  <card.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[color:var(--ink)]">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--ink-soft)]">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AtAGlance;
