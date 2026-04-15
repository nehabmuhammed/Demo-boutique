"use client";

import Link from "next/link";
import HeroVideo from "@/components/HeroVideo";
import ScrollAnimationProvider from "@/components/ScrollAnimations";
import GallerySection from "@/components/GallerySection";
import { ArrowRight, Scissors, Star, Heart, Palette, UserCheck, Sparkles, MapPin, Mail } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Home() {
  return (
    <ScrollAnimationProvider>
      <div className="flex flex-col w-full bg-brand-primary overflow-x-hidden">

        {/* ══════════════════════════════════════
            HERO
        ══════════════════════════════════════ */}
        <HeroVideo
          posterSrc="/images/hero_boutique.png"
          title="I Meraki Designer Boutique"
          subtitle="Luxury designer stitching and bridal blouse designing in Pathanapuram."
          ctaText="Book Appointment"
          ctaLink="/contact"
          secondaryCtaText="View Bridal Designs"
          secondaryCtaLink="/products"
          overlayOpacity={0.65}
        />

        {/* ══════════════════════════════════════
            SERVICES — The Atelier
        ══════════════════════════════════════ */}
        <section
          className="py-16 sm:py-24 md:py-32 bg-neutral-950 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
          data-section-fade
        >
          <div data-divider className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent" />

          {/* Ghost text — constrained so it never overflows horizontally */}
          <div
            aria-hidden
            className="absolute top-10 right-0 text-[clamp(4rem,14vw,18rem)] font-serif font-bold text-white/[0.018] select-none pointer-events-none whitespace-nowrap leading-none overflow-hidden max-w-full"
          >
            ATELIER
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Header */}
            <div className="mb-12 sm:mb-16 md:mb-24">
              <p className="text-xs font-semibold text-brand-accent tracking-[0.3em] uppercase mb-4" data-section-label>
                The Atelier
              </p>
              <div data-gold-underline className="inline-block">
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold text-white tracking-tight leading-tight" data-split-text>
                  The Art of&nbsp;<br className="sm:hidden" />
                  <span className="italic text-brand-accent">Couture</span>.
                </h2>
                <div className="gold-line h-0.5 bg-brand-accent mt-3 origin-left" />
              </div>
            </div>

            {/* Service cards grid — 1 col mobile, 2 col sm, 3 col md with cascade offset */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-x-10 md:gap-y-0">
              {[
                { icon: <Scissors size={28} />,   title: "Signature Stitching",  desc: "Masterful precision for saree blouses, kurtis, and gowns that define grace.",                      offset: ""          },
                { icon: <Sparkles size={28} />,   title: "Bridal Couture",       desc: "Handcrafted bridal masterpieces detailed with embroidery and royal aesthetics.",                   offset: "md:mt-20"  },
                { icon: <Star size={28} />,        title: "Bespoke Design",       desc: "Consultation-led custom designs for high-profile weddings and special events.",                    offset: "md:mt-40"  },
                { icon: <Palette size={28} />,    title: "Mural & Fabric Art",   desc: "Artistic hand-painting and mural work on fabric for a unique designer touch.",                     offset: ""          },
                { icon: <Heart size={28} />,       title: "Cultural Heritage",    desc: "Reviving traditional Kerala aesthetics with modern silhouettes and patterns.",                     offset: "md:mt-20"  },
                { icon: <UserCheck size={28} />,  title: "Personal Stylist",     desc: "Dedicated fashion guidance to curate your perfect wardrobe for any occasion.",                     offset: "md:mt-40"  },
              ].map((s, i) => (
                <div key={i} className={`${s.offset} md:mb-16`} data-service-card>
                  <div className="group relative p-6 sm:p-8 bg-neutral-900/50 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-brand-accent/30 transition-all duration-700 overflow-hidden h-full">
                    <div className="absolute top-0 right-0 p-4 sm:p-6 opacity-10 group-hover:opacity-100 transition-opacity duration-700 text-brand-accent">
                      <div className="text-4xl sm:text-5xl font-serif">0{i + 1}</div>
                    </div>
                    <div
                      data-card-icon
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-6 group-hover:bg-brand-accent group-hover:text-black transition-colors duration-500"
                    >
                      {s.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white font-serif tracking-wide">{s.title}</h3>
                    <p className="text-neutral-400 leading-relaxed font-light text-sm sm:text-base">{s.desc}</p>
                    <div className="mt-6 pt-5 border-t border-white/5 flex items-center gap-2 text-brand-accent text-[10px] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-2 group-hover:translate-y-0">
                      Explore Service <ArrowRight size={12} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            GALLERY
        ══════════════════════════════════════ */}
        <GallerySection />

        {/* ══════════════════════════════════════
            ABOUT — The Meraki Way
        ══════════════════════════════════════ */}
        <section
          className="relative py-16 sm:py-24 md:py-36 overflow-hidden bg-brand-primary"
          data-section-fade
        >
          {/* Ghost MERAKI — right-aligned, clamped */}
          <div
            aria-hidden
            className="absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none"
          >
            <span className="text-[clamp(5rem,20vw,28rem)] font-serif font-black text-white/[0.025] leading-none select-none translate-x-1/4">
              MERAKI
            </span>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Image cluster */}
              <div className="relative" data-scroll-reveal>
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 max-w-lg mx-auto lg:mx-0" data-scroll-zoom>
                  <img
                    src="/images/about_boutique.png"
                    alt="The Studio"
                    className="w-full h-full object-cover grayscale opacity-80"
                  />
                </div>
                {/* Floating overlay image — desktop only */}
                <div className="absolute -bottom-10 -right-6 w-1/2 aspect-square rounded-3xl overflow-hidden border-4 sm:border-8 border-brand-primary shadow-2xl hidden md:block">
                  <img src="/images/hero_boutique.png" alt="Designer Work" className="w-full h-full object-cover" />
                </div>
                {/* Stat badge — desktop only */}
                <div className="absolute top-8 -left-4 lg:-left-8 bg-neutral-900 border border-white/10 px-5 py-5 sm:px-8 sm:py-8 rounded-2xl shadow-2xl hidden sm:block">
                  <div className="text-3xl sm:text-4xl font-serif text-brand-accent mb-1" data-counter="12">12+</div>
                  <div className="text-[9px] sm:text-[10px] uppercase tracking-widest text-neutral-400">Years of Luxury Craft</div>
                </div>
              </div>

              {/* Text content */}
              <div className="lg:pl-8">
                <p className="text-xs font-semibold text-brand-accent tracking-[0.4em] uppercase mb-5" data-section-label>
                  Our Ethos
                </p>
                <div data-gold-underline className="inline-block mb-8">
                  <h2 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tight text-white leading-none" data-split-text>
                    The Meraki
                    <br />
                    <span className="text-brand-accent italic">Story.</span>
                  </h2>
                  <div className="gold-line h-0.5 bg-brand-accent mt-4 origin-left" />
                </div>

                <p className="text-base sm:text-lg text-neutral-300 mb-10 font-light leading-relaxed max-w-xl" data-text-reveal>
                  Based in the heart of Pathanapuram, I Meraki Designer Boutique is more than an atelier — it&apos;s
                  a sanctuary where fashion meets soul.
                  <br /><br />
                  Guided by the Greek concept of &apos;Meraki&apos; — to do something with soul, creativity, and love —
                  we specialize in bespoke bridal couture and artistic fabric mural work.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-10" data-text-reveal>
                  <div>
                    <h4 className="text-brand-accent font-serif text-lg sm:text-xl mb-2 italic">Craftsmanship</h4>
                    <p className="text-neutral-500 text-sm font-light">Meticulous hand-embroidery and perfect structural fit.</p>
                  </div>
                  <div>
                    <h4 className="text-brand-accent font-serif text-lg sm:text-xl mb-2 italic">Vision</h4>
                    <p className="text-neutral-500 text-sm font-light">Modern silhouettes inspired by deep cultural roots.</p>
                  </div>
                </div>

                <div data-btn-reveal>
                  <Link
                    href="/about"
                    className="group inline-flex items-center gap-4 px-8 sm:px-10 py-4 sm:py-5 bg-neutral-900 border border-brand-accent/20 text-brand-accent font-bold text-xs tracking-[0.3em] uppercase hover:bg-brand-accent hover:text-black transition-all duration-700 hover:shadow-[0_0_50px_rgba(212,175,55,0.15)] rounded-full"
                  >
                    Read Our Legacy
                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            TESTIMONIAL
        ══════════════════════════════════════ */}
        <section className="py-16 sm:py-24 md:py-36 px-4 sm:px-6 bg-neutral-950 relative overflow-hidden" data-section-fade>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 sm:h-40 bg-gradient-to-b from-brand-accent/30 to-transparent" />

          <div className="max-w-4xl mx-auto text-center">
            <div data-gold-underline className="inline-block mb-10 sm:mb-14">
              <h2 className="text-lg sm:text-2xl md:text-3xl font-serif italic text-white" data-split-text>
                &quot;Soulful Fashion for Soulful Moments&quot;
              </h2>
            </div>

            <div className="relative" data-testimonial>
              <p className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-neutral-200 mb-10 leading-tight italic max-w-3xl mx-auto">
                &quot;The craftsmanship at I Meraki is unparalleled. They didn&apos;t just stitch a blouse; they created
                a piece of art that made my wedding day unforgettable.&quot;
              </p>
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-brand-accent/10 flex items-center justify-center">
                  <Heart fill="currentColor" size={20} className="text-brand-accent" />
                </div>
                <div>
                  <p className="text-brand-accent font-bold text-xs uppercase tracking-[0.4em]">Anjali Nair</p>
                  <p className="text-neutral-500 font-light text-xs mt-1 uppercase tracking-widest">Bespoke Bridal Client</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            CONTACT — The Studio
        ══════════════════════════════════════ */}
        <section
          className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-brand-primary relative border-t border-white/5"
          data-section-fade
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

              {/* Contact info */}
              <div className="lg:col-span-5">
                <p className="text-xs font-semibold text-brand-accent tracking-[0.4em] uppercase mb-6" data-section-label>
                  Get In Touch
                </p>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-10 leading-none" data-split-text>
                  The <span className="italic text-brand-accent">Studio</span>.
                </h2>

                <div className="space-y-8 sm:space-y-10" data-contact-reveal>
                  {/* Address */}
                  <div className="group">
                    <p className="text-neutral-500 text-[10px] uppercase tracking-[0.4em] mb-3 group-hover:text-brand-accent transition-colors">
                      Physical Address
                    </p>
                    <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed group-hover:text-white transition-colors">
                      I Meraki Designer Boutique<br />
                      Pathanapuram, Kollam<br />
                      Kerala, India
                    </p>
                  </div>

                  {/* Phone + Email */}
                  <div className="flex flex-col sm:flex-row gap-8">
                    <div className="group">
                      <p className="text-neutral-500 text-[10px] uppercase tracking-[0.4em] mb-3 group-hover:text-brand-accent transition-colors">
                        Direct Contact
                      </p>
                      <a href="tel:+918075702197" className="text-xl sm:text-2xl text-neutral-300 font-serif hover:text-white transition-colors">
                        +91 80757 02197
                      </a>
                    </div>
                    <div className="group">
                      <p className="text-neutral-500 text-[10px] uppercase tracking-[0.4em] mb-3 group-hover:text-brand-accent transition-colors">
                        Email Us
                      </p>
                      <a
                        href="mailto:hello@imeraki.com"
                        className="text-xl sm:text-2xl text-neutral-300 font-serif hover:text-white transition-colors underline decoration-brand-accent/30 underline-offset-8"
                      >
                        imeraki@studio.com
                      </a>
                    </div>
                  </div>

                  {/* Socials */}
                  <div>
                    <p className="text-neutral-500 text-[10px] uppercase tracking-[0.4em] mb-4">Connect with us</p>
                    <div className="flex gap-4">
                      {[
                        { icon: <FaInstagram size={18} />, link: "#" },
                        { icon: <FaFacebook size={18} />, link: "#" },
                        { icon: <Mail size={18} />,        link: "#" },
                      ].map((s, i) => (
                        <a
                          key={i}
                          href={s.link}
                          className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:border-brand-accent hover:text-brand-accent transition-all duration-500"
                        >
                          {s.icon}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div data-btn-reveal>
                    <a
                      href="https://wa.me/918075702197"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-3 w-full py-5 bg-brand-accent text-black font-bold uppercase tracking-[0.4em] text-xs hover:bg-white transition-colors duration-700 rounded-xl"
                    >
                      Book Bespoke Consultation
                    </a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="lg:col-span-7">
                <div
                  className="w-full h-72 sm:h-96 md:h-[480px] lg:h-[560px] rounded-2xl sm:rounded-[2rem] overflow-hidden border border-white/5 relative group"
                  data-contact-reveal
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700 z-10 pointer-events-none" />
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3935.101740927827!2d76.8617!3d9.0984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05d1bb5b399225%3A0xe21d8b7ea75eac1e!2sPathanapuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1714480629738!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="scale-105 group-hover:scale-100 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                    title="I Meraki Boutique Location"
                  />
                  <div className="absolute top-5 left-5 z-20">
                    <div className="bg-brand-primary border border-white/10 px-4 py-2.5 rounded-full flex items-center gap-2 backdrop-blur-md">
                      <MapPin size={14} className="text-brand-accent" />
                      <span className="text-[10px] uppercase font-bold text-white tracking-widest">
                        Find Us in Pathanapuram
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ScrollAnimationProvider>
  );
}
