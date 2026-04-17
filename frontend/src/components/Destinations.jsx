import { ArrowUpRight, Landmark, Trees, Waves, Waypoints } from "lucide-react";

const destinations = [
  {
    name: "Ranchi Waterfall Circuit",
    description:
      "A high-energy introduction to the state through waterfall viewpoints, nearby heritage stops and easy day-trip planning.",
    highlight: ["Hundru", "Dassam", "Jonha"],
    image: "/photo-1625387891389-a4b440ae958e.avif",
    icon: Waves,
  },
  {
    name: "Netarhat Plateau Escape",
    description:
      "A slower route shaped around pine-lined roads, sunrise and sunset viewpoints, and cooler hill-station pacing.",
    highlight: ["Sunrise Point", "Upper Ghaghri", "Scenic drives"],
    image: "/premium_photo-1691031429261-aeb324882888.avif",
    icon: Waypoints,
  },
  {
    name: "Betla and Palamau Wild",
    description:
      "Perfect for travelers who want forests, safari-led storytelling and a stronger wildlife edge inside the project.",
    highlight: ["Safari access", "Forest stays", "Ruins and nature"],
    image: "/scenic-mountain-landscape-with-warm-sunset-colors.jpg",
    icon: Trees,
  },
  {
    name: "Deoghar Spiritual Trail",
    description:
      "Adds a pilgrimage and cultural dimension, balancing scenic tourism with devotional, community-linked travel.",
    highlight: ["Temple town", "Pilgrim services", "Local markets"],
    image: null,
    icon: Landmark,
  },
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div data-reveal="right" className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[color:var(--clay)]">
              Destinations
            </p>
            <h2 className="mt-4 font-heading text-4xl leading-tight md:text-5xl">
              Featured places that make the project feel unmistakably Jharkhand.
            </h2>
          </div>
          <p
            data-reveal="left"
            className="max-w-xl text-sm leading-7 text-[color:var(--ink-soft)] md:text-base"
          >
            Each card now carries a clear use case, visual identity and travel
            value, so the section works as a finished showcase instead of a
            placeholder gallery.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {destinations.map((destination) => {
            const cardBackground = destination.image
              ? {
                  backgroundImage: `linear-gradient(135deg, rgba(13,29,24,0.72), rgba(13,29,24,0.18)), url('${destination.image}')`,
                }
              : {
                  backgroundImage:
                    "linear-gradient(135deg, rgba(14,90,70,0.95), rgba(184,95,60,0.85))",
                };

            return (
              <article
                key={destination.name}
                data-reveal="up"
                className="overflow-hidden rounded-[2rem] border border-[rgba(27,29,19,0.08)] bg-white shadow-[0_18px_55px_rgba(20,38,30,0.09)]"
              >
                <div
                  className="min-h-[260px] bg-cover bg-center px-6 py-6 text-white"
                  style={cardBackground}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/14 backdrop-blur-sm">
                    <destination.icon className="h-6 w-6 text-[color:var(--sun)]" />
                  </div>
                  <p className="mt-12 text-xs font-semibold uppercase tracking-[0.32em] text-white/70">
                    Featured region
                  </p>
                  <h3 className="mt-3 font-heading text-3xl leading-tight">
                    {destination.name}
                  </h3>
                </div>

                <div className="px-6 py-6">
                  <p className="text-sm leading-7 text-[color:var(--ink-soft)]">
                    {destination.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {destination.highlight.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-[rgba(14,90,70,0.08)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--forest)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--forest)]"
                  >
                    Turn this into an itinerary
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
