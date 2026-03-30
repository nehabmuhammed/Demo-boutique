import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-neutral-400 py-16 px-4 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link href="/" className="text-3xl font-bold tracking-tighter text-white mb-2 font-serif inline-block">
            I Meraki <span className="text-brand-accent">Boutique</span>
          </Link>
          <p className="text-sm font-light">Created with Meraki, Worn with Elegance.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 font-medium text-sm tracking-widest uppercase">
          <Link href="/" className="hover:text-brand-accent transition-colors">Home</Link>
          <Link href="/about" className="hover:text-brand-accent transition-colors">About</Link>
          <Link href="/services" className="hover:text-brand-accent transition-colors">Services</Link>
          <Link href="/products" className="hover:text-brand-accent transition-colors">Gallery</Link>
          <Link href="/contact" className="hover:text-brand-accent transition-colors">Contact</Link>
        </div>

        <div className="flex gap-6">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-brand-accent transition-all transform hover:scale-110">
            <FaInstagram size={24} />
          </a>
          <a href="https://wa.me/918075702197" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-brand-accent transition-all transform hover:scale-110">
            <FaWhatsapp size={24} />
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-neutral-900 text-sm text-neutral-500 text-center font-light">
        <p>&copy; {new Date().getFullYear()} I Meraki Designer Boutique – Pathanapuram. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
