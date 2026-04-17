import { ArrowRight, Leaf, MapPinned, TentTree } from "lucide-react";

const heroChips = [
  "Plateaus and waterfalls",
  "Culture and craft clusters",
  "Slow, scenic road journeys",
];

const circuitHighlights = [
  {
    title: "Ranchi and the waterfall belt",
    detail: "Short-break routes for Hundru, Dassam and Jonha.",
    icon: MapPinned,
  },
  {
    title: "Netarhat and forest sunsets",
    detail: "Highland viewpoints, cooler air and relaxed pacing.",
    icon: TentTree,
  },
  {
    title: "Responsible local experiences",
    detail: "Trips designed to spotlight guides, artisans and communities.",
    icon: Leaf,
  },
];

const Hero = () => {
  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/premium_photo-1691031429261-aeb324882888.avif')",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(13,29,24,0.88)_0%,rgba(13,29,24,0.62)_46%,rgba(31,57,45,0.32)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(209,161,95,0.28),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(47,125,88,0.18),transparent_28%)]" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-16 pt-32 lg:grid-cols-[1.15fr_0.85fr]">
        <div data-reveal="up" className="max-w-3xl text-white">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-[color:var(--sun)]">
            Discover a grounded, future-facing tourism story
          </p>
          <h1 className="font-heading text-5xl leading-tight md:text-7xl">
            Innovate Jharkhand
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 md:text-xl">
            A tourism concept built around waterfalls, plateaus, pilgrimage
            routes, forest escapes and culture-led travel that feels rooted in
            place from the first scroll to the final itinerary.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#destinations"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--sun)] px-6 py-3 text-sm font-semibold text-[color:var(--ink)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Explore destinations
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/18"
            >
              Build a trip brief
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {heroChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/16 bg-white/10 px-4 py-2 text-sm text-white/88 backdrop-blur-sm"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div
          data-reveal="left"
          className="rounded-[2rem] border border-white/14 bg-white/10 p-6 text-white shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--sun)]">
            Signature view
          </p>
          <h2 className="mt-4 font-heading text-3xl leading-tight">
            One brand story, multiple ways to experience the state.
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/78">
            This final layout gives the project a complete tourism narrative:
            inspiration first, then destinations, circuits, planning support
            and a responsible tourism close.
          </p>

          <div className="mt-6 space-y-4">
            {circuitHighlights.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/12 bg-black/10 p-4"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/12">
                  <item.icon className="h-5 w-5 text-[color:var(--sun)]" />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/72">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-3xl bg-[rgba(245,240,232,0.14)] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              Ideal first route
            </p>
            <p className="mt-2 text-sm leading-7 text-white/84">
              Start in Ranchi for the waterfall cluster, move into Netarhat for
              highland views, and close with a craft, cuisine or pilgrimage stop
              depending on the traveler profile.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
