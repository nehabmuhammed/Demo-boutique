"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface HeroVideoProps {
  videoSrc?: string;
  posterSrc?: string;
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  overlayOpacity?: number;
}

const HeroVideo = ({
  videoSrc,
  posterSrc,
  title,
  subtitle,
  ctaText = "Discover More",
  ctaLink = "/products",
  secondaryCtaText,
  secondaryCtaLink,
  overlayOpacity = 0.5,
}: HeroVideoProps) => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Media with Parallax */}
      {videoSrc ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={posterSrc}
          data-parallax-hero
          className="absolute inset-0 w-full h-full object-cover will-change-transform"
          style={{ height: "130%" }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        posterSrc && (
          <img
            src={posterSrc}
            alt="Hero Background"
            data-parallax-hero
            className="absolute inset-0 w-full h-full object-cover will-change-transform"
            style={{ height: "130%", top: "-5%" }}
          />
        )
      )}

      {/* Gradient Overlays for depth */}
      <div
        className="absolute inset-0 bg-neutral-950"
        style={{ opacity: overlayOpacity }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-transparent to-transparent opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/40 via-transparent to-brand-primary/40" />
      
      {/* Animated gold accent line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-accent/60 to-transparent" />

      {/* Content */}
      <div data-hero-content className="relative h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
        {/* Decorative element */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="w-24 h-px bg-brand-accent mb-8"
        />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-white mb-4 sm:mb-6 drop-shadow-md px-2 sm:px-0"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-base sm:text-xl md:text-2xl text-neutral-300 max-w-xs sm:max-w-xl md:max-w-3xl mb-8 sm:mb-12 drop-shadow-md font-light leading-relaxed px-2 sm:px-0"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center px-6 sm:px-0 w-full sm:w-auto"
        >
          <Link
            href={ctaLink}
            className="glow-effect inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full bg-brand-accent text-neutral-950 font-semibold text-lg transition-all duration-500 group hover:bg-brand-secondary hover:shadow-[0_0_40px_rgba(212,175,55,0.3)]"
          >
            {ctaText}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-500" />
          </Link>
          {secondaryCtaText && secondaryCtaLink && (
            <Link
              href={secondaryCtaLink}
              className="glow-effect inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full bg-transparent border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-neutral-950 font-semibold text-lg transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.2)]"
            >
              {secondaryCtaText}
            </Link>
          )}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-brand-accent/60 font-light">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-brand-accent/60 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroVideo;
