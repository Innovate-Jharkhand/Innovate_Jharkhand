import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "At a Glance", href: "#glance" },
  { name: "Destinations", href: "#destinations" },
  { name: "Circuits", href: "#tours" },
  { name: "Highlights", href: "#news" },
  { name: "ESG", href: "#esg" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-white/40 bg-[rgba(245,240,232,0.92)] shadow-[0_12px_35px_rgba(15,38,31,0.12)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/assets/JSDC-BODY.png"
            alt="Government of Jharkhand"
            className="h-11 w-11 rounded-full shadow-[0_10px_25px_rgba(14,90,70,0.25)]"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextElementSibling.style.display = 'flex';
            }}
          />
          <span 
            className="hidden h-11 w-11 items-center justify-center rounded-full bg-[color:var(--forest)] text-xs font-bold text-white shadow-[0_10px_25px_rgba(14,90,70,0.25)]"
            title="Government of Jharkhand"
          >
            ★
          </span>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[color:var(--forest)]">
              Tourism Showcase
            </p>
            <p className="font-heading text-lg text-[color:var(--ink)]">
              Innovate Jharkhand
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[color:var(--ink-soft)] transition-colors duration-200 hover:text-[color:var(--forest)]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--forest)] bg-[color:var(--forest)] px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
          >
            Plan a Visit
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          className="rounded-full border border-[rgba(27,29,19,0.12)] bg-white/60 p-2 text-[color:var(--ink)] lg:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[rgba(27,29,19,0.08)] bg-[rgba(245,240,232,0.97)] px-6 pb-6 pt-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-[color:var(--ink)] transition-colors duration-200 hover:bg-white/80 hover:text-[color:var(--forest)]"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-[color:var(--forest)] px-4 py-3 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Plan a Visit
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
