"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/utils/helpers";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-neutral-950/90 backdrop-blur-lg shadow-sm text-white border-neutral-800"
          : "bg-transparent text-white border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-3xl font-bold tracking-tighter font-serif">
              I Meraki <span className={isScrolled ? "text-brand-accent" : "text-brand-accent"}>Boutique</span>
            </Link>
          </div>

          <div className="hidden md:flex space-x-10 items-center font-medium text-sm tracking-widest uppercase">
            <Link href="/" className="hover:text-brand-accent transition-colors gold-underline">
              Home
            </Link>
            <Link href="/about" className="hover:text-brand-accent transition-colors gold-underline">
              About
            </Link>
            <Link href="/services" className="hover:text-brand-accent transition-colors gold-underline">
              Services
            </Link>
            <Link href="/products" className="hover:text-brand-accent transition-colors gold-underline">
              Gallery
            </Link>
            <Link href="/contact" className="hover:text-brand-accent transition-colors gold-underline">
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:8075702197" className={cn(
              "flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm tracking-widest uppercase transition-all border",
              isScrolled ? "bg-brand-accent text-black border-brand-accent hover:bg-brand-secondary" : "bg-transparent text-white border-white hover:bg-white hover:text-black"
            )}>
              <Phone size={18} />
              <span>Call Us</span>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-white">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-neutral-950 text-white shadow-xl border-t border-neutral-800">
          <div className="px-4 pt-4 pb-8 space-y-2 uppercase tracking-widest text-sm">
            <Link onClick={() => setMobileMenuOpen(false)} href="/" className="block px-3 py-4 rounded-md font-medium hover:text-brand-accent hover:bg-neutral-900 transition-colors">
              Home
            </Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="/about" className="block px-3 py-4 rounded-md font-medium hover:text-brand-accent hover:bg-neutral-900 transition-colors">
              About
            </Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="/services" className="block px-3 py-4 rounded-md font-medium hover:text-brand-accent hover:bg-neutral-900 transition-colors">
              Services
            </Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="/products" className="block px-3 py-4 rounded-md font-medium hover:text-brand-accent hover:bg-neutral-900 transition-colors">
              Gallery
            </Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="/contact" className="block px-3 py-4 rounded-md font-medium hover:text-brand-accent hover:bg-neutral-900 transition-colors">
              Contact
            </Link>
            <a href="tel:8075702197" className="mt-4 flex items-center gap-2 px-3 py-4 font-semibold text-brand-accent">
              <Phone size={18} />
              Call 8075702197
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
