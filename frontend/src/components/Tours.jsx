import { ArrowRight, Clock3, Mountain, Route, Users } from "lucide-react";

const tours = [
  {
    title: "Weekend Waterfall Trail",
    duration: "2 days / 1 night",
    audience: "Ideal for quick escapes from Ranchi",
    description:
      "Connect high-impact waterfall stops with a compact city stay, local food and easy transport coordination.",
    includes: ["Scenic road route", "Waterfall viewpoints", "Flexible stopovers"],
    icon: Route,
  },
  {
    title: "Plateau and Forest Retreat",
    duration: "3 days / 2 nights",
    audience: "Designed for slower scenic travel",
    description:
      "Pair Netarhat's calm rhythm with forest-edge experiences, long drives and room for photography, trekking and rest.",
    includes: ["Sunrise and sunset points", "Forest-side breaks", "Relaxed pacing"],
    icon: Mountain,
  },
  {
    title: "Culture, Craft and Pilgrimage Loop",
    duration: "4 days / 3 nights",
    audience: "Balanced for families and mixed groups",
    description:
      "Mix devotional travel with local market visits, artisan touchpoints and a softer cultural storytelling layer.",
    includes: ["Temple-town access", "Craft-linked stops", "Family-friendly flow"],
    icon: Users,
  },
];

const Tours = () => {
  return (
    <section id="tours" className="bg-white/55 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div data-reveal="right">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[color:var(--clay)]">
              Ready-made circuits
            </p>
            <h2 className="mt-4 font-heading text-4xl leading-tight md:text-5xl">
              Curated routes that help the project feel usable, not just visual.
            </h2>
          </div>
          <p
            data-reveal="left"
            className="text-sm leading-7 text-[color:var(--ink-soft)] md:text-base"
          >
            These cards give the page practical depth. Instead of only showing
            locations, they show how travelers can combine them into clear,
            realistic journeys.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tours.map((tour) => (
            <article
              key={tour.title}
              data-reveal="up"
              className="rounded-[2rem] border border-[rgba(27,29,19,0.08)] bg-[linear-gradient(180deg,rgba(245,240,232,0.9),white)] p-6 shadow-[0_18px_45px_rgba(20,38,30,0.08)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(14,90,70,0.1)] text-[color:var(--forest)]">
                <tour.icon className="h-6 w-6" />
              </div>
              <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-[rgba(209,161,95,0.18)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--clay)]">
                <Clock3 className="h-3.5 w-3.5" />
                {tour.duration}
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-[color:var(--ink)]">
                {tour.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-[color:var(--forest)]">
                {tour.audience}
              </p>
              <p className="mt-4 text-sm leading-7 text-[color:var(--ink-soft)]">
                {tour.description}
              </p>

              <div className="mt-5 space-y-3">
                {tour.includes.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[color:var(--forest)]" />
                    <span className="text-[color:var(--ink-soft)]">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--forest)]"
              >
                Request this circuit
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tours;
