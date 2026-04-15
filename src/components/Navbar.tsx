"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/utils/helpers";

const navLinks = [
  { href: "/",        label: "Home"     },
  { href: "/about",   label: "About"    },
  { href: "/services",label: "Services" },
  { href: "/products",label: "Gallery"  },
  { href: "/contact", label: "Contact"  },
];

const Navbar = () => {
  const [isScrolled,       setIsScrolled]       = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop (lg: 1024px)
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-neutral-950/95 backdrop-blur-lg shadow-sm border-neutral-800/60"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20 md:h-24">

          {/* Brand */}
          <Link
            href="/"
            className="shrink-0 text-xl sm:text-2xl lg:text-3xl font-bold tracking-tighter font-serif text-white"
          >
            I Meraki{" "}
            <span className="text-brand-accent">Boutique</span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-10 font-medium text-xs tracking-widest uppercase">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-brand-accent transition-colors gold-underline text-white/90">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href="tel:8075702197"
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-xs tracking-widest uppercase transition-all border",
                isScrolled
                  ? "bg-brand-accent text-black border-brand-accent hover:bg-brand-secondary"
                  : "bg-transparent text-white border-white/60 hover:bg-white hover:text-black"
              )}
            >
              <Phone size={14} />
              <span>Call Us</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-400 ease-in-out",
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-neutral-950/98 backdrop-blur-xl border-t border-neutral-800/60 px-4 pb-6 pt-2">
          <div className="flex flex-col space-y-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3.5 font-medium text-xs tracking-widest uppercase text-white/80 hover:text-brand-accent hover:bg-white/5 rounded-xl transition-all duration-200"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:8075702197"
              className="mt-3 flex items-center justify-center gap-2 px-4 py-4 font-bold text-xs tracking-widest uppercase bg-brand-accent text-black rounded-xl"
            >
              <Phone size={14} />
              Call 8075 702197
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
