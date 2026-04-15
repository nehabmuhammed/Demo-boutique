import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const navLinks = [
  { href: "/",         label: "Home"     },
  { href: "/about",    label: "About"    },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Gallery"  },
  { href: "/contact",  label: "Contact"  },
];

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-800/60">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 items-start">

          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <Link href="/" className="text-2xl sm:text-3xl font-bold tracking-tighter text-white mb-2 font-serif inline-block">
              I Meraki <span className="text-brand-accent">Boutique</span>
            </Link>
            <p className="text-sm font-light text-neutral-500 mt-1">Created with Meraki, Worn with Elegance.</p>
            {/* Socials below brand on mobile */}
            <div className="flex gap-5 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-neutral-400 hover:text-brand-accent transition-all hover:scale-110 transform duration-200"
                aria-label="Instagram"
              >
                <FaInstagram size={22} />
              </a>
              <a
                href="https://wa.me/918075702197"
                target="_blank"
                rel="noreferrer"
                className="text-neutral-400 hover:text-brand-accent transition-all hover:scale-110 transform duration-200"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={22} />
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-col items-center sm:items-start gap-3">
            <p className="text-brand-accent text-[10px] tracking-[0.35em] uppercase font-semibold mb-2">
              Explore
            </p>
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs tracking-widest uppercase text-neutral-500 hover:text-brand-accent transition-colors duration-200"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Contact quick info */}
          <div className="flex flex-col items-center sm:items-start gap-3 text-center sm:text-left">
            <p className="text-brand-accent text-[10px] tracking-[0.35em] uppercase font-semibold mb-2">
              Contact
            </p>
            <p className="text-sm font-light text-neutral-500 leading-relaxed">
              Pathanapuram, Kollam<br />Kerala, India
            </p>
            <a href="tel:+918075702197" className="text-sm text-neutral-400 hover:text-brand-accent transition-colors font-serif">
              +91 80757 02197
            </a>
            <a
              href="https://wa.me/918075702197"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center px-5 py-2.5 bg-brand-accent text-black font-bold text-[10px] tracking-widest uppercase rounded-lg hover:bg-white transition-colors duration-300"
            >
              Book via WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-neutral-600 font-light text-center sm:text-left">
            &copy; {new Date().getFullYear()} I Meraki Designer Boutique – Pathanapuram. All rights reserved.
          </p>
          <p className="text-[10px] tracking-widest uppercase text-neutral-700">
            Crafted with Soul
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
