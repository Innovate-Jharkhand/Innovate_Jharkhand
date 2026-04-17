import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const footerSections = [
  {
    title: "Explore",
    links: [
      { label: "At a Glance", href: "#glance" },
      { label: "Destinations", href: "#destinations" },
      { label: "Circuits", href: "#tours" },
    ],
  },
  {
    title: "Project Flow",
    links: [
      { label: "Highlights", href: "#news" },
      { label: "ESG", href: "#esg" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Use Cases",
    links: [
      { label: "Tourism pitch", href: "#home" },
      { label: "Student demo", href: "#stats" },
      { label: "Campaign concept", href: "#contact" },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="bg-[#0d1714] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.1fr_1.6fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--forest)] text-sm font-semibold uppercase tracking-[0.3em] text-white">
                IJ
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[color:var(--sun)]">
                  Final project
                </p>
                <p className="font-heading text-2xl">Innovate Jharkhand</p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/68">
              A complete tourism storytelling experience designed to stay aligned
              across inspiration, destinations, planning and responsible travel.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--sun)]">
                  {section.title}
                </h3>
                <div className="mt-5 space-y-3">
                  {section.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="block text-sm text-white/72 transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-white/55">
            &copy; {new Date().getFullYear()} Innovate Jharkhand. Crafted as a
            polished end-to-end tourism project.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors duration-200 hover:text-white"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
