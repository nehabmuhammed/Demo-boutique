"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { ArrowRight, ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   IMAGE REGISTRY — Every image used EXACTLY ONCE
   33 images total across 4 categories (no duplicates)

   Unused before  →  now assigned:
     IMG_1295.JPG              → wedding (couple seated night)
     IMG_6508.JPG              → wedding (couple looking)
     IMG_8032.JPG              → wedding (couple seated)
     IMG_8218.JPG              → wedding (couple dancing)
     InShot_20260114_103329715 → bridal  (bride portrait 2)
     InShot_20260120_090144609 → wedding (wedding couple 2)
     InShot_20260120_090216356 → wedding (traditional moment)
     InShot_20260120_090345008 → wedding (sacred unions)
   ─────────────────────────────────────────────────────────── */

interface GalleryImage {
  src: string;
  alt: string;
  pos?: string; // object-position override
}

interface GalleryCategory {
  id: string;
  label: string;
  number: string;
  title: string;
  accentWord: string;
  quote: string;
  quoteAuthor: string;
  description: string;
  images: GalleryImage[];
}

const galleryCategories: GalleryCategory[] = [
  /* ── 01 BRIDAL — 6 images ── */
  {
    id: "bridal",
    label: "Bridal",
    number: "01",
    title: "The Bridal",
    accentWord: "Oracle",
    quote: "A bride adorned with tradition carries the grace of a thousand stories.",
    quoteAuthor: "— I Meraki Atelier",
    description:
      "Where heritage meets haute couture — handcrafted bridal ensembles that make your most cherished day truly unforgettable.",
    images: [
      { src: "/images/gallery/pink_bridal_portrait.jpg",        alt: "Bridal — pink silk saree with gold jewelry",      pos: "object-top" },
      { src: "/images/gallery/InShot_20260120_090249122.jpg",   alt: "Bride in traditional gold saree",                 pos: "object-top" },
      { src: "/images/gallery/InShot_20260114_103551527.jpg",   alt: "Bridal portrait — close-up elegance",             pos: "object-top" },
      { src: "/images/gallery/InShot_20260114_103329715.jpg",   alt: "Bride in rich embroidered attire",                pos: "object-top" },
      { src: "/images/gallery/IMG_0685.JPG",                    alt: "Bride — jewelry & drape detail",                  pos: "object-[50%_20%]" },
      { src: "/images/gallery/traditional_saree_pose.jpg",      alt: "Traditional saree bride styling",                 pos: "object-[50%_15%]" },
    ],
  },

  /* ── 02 WEDDING — 12 images ── */
  {
    id: "wedding",
    label: "Wedding",
    number: "02",
    title: "Sacred",
    accentWord: "Unions",
    quote: "Two souls, one journey — dressed in threads of eternal love.",
    quoteAuthor: "— I Meraki Atelier",
    description:
      "Capturing the divine elegance of wedding ceremonies, where every outfit becomes part of the love story forever.",
    images: [
      { src: "/images/gallery/wedding_couple.jpg",              alt: "Beautiful couple at wedding ceremony",            pos: "object-[50%_15%]" },
      { src: "/images/gallery/traditional_couple_1.jpg",        alt: "Couple in traditional attire",                   pos: "object-[50%_20%]" },
      { src: "/images/gallery/traditional_couple_2.jpg",        alt: "Traditional couple portrait",                    pos: "object-top" },
      { src: "/images/gallery/InShot_20260120_090144609.jpg",   alt: "Wedding moment — couple together",               pos: "object-top" },
      { src: "/images/gallery/InShot_20260120_090216356.jpg",   alt: "Traditional wedding — sacred moment",            pos: "object-[50%_20%]" },
      { src: "/images/gallery/InShot_20260120_090345008.jpg",   alt: "Sacred union — ceremony details",                pos: "object-top" },
      { src: "/images/gallery/IMG_1295.JPG",                    alt: "Traditional bridal moments at night",            pos: "object-center" },
      { src: "/images/gallery/IMG_6508.JPG",                    alt: "Couple — tender look",                           pos: "object-top" },
      { src: "/images/gallery/IMG_8032.JPG",                    alt: "Couple seated — timeless moment",                pos: "object-top" },
      { src: "/images/gallery/IMG_8218.JPG",                    alt: "Couple dancing — joyful celebration",            pos: "object-center" },
      { src: "/images/gallery/wedding_ceremony.jpg",            alt: "Traditional wedding ceremony",                   pos: "object-center" },
      { src: "/images/gallery/wedding_kathakali.jpg",           alt: "Wedding with Kathakali tradition",               pos: "object-center" },
    ],
  },

  /* ── 03 CASUAL & PARTY — 10 images ── */
  {
    id: "casual",
    label: "Casual & Party",
    number: "03",
    title: "Evening",
    accentWord: "Mystique",
    quote: "Elegance is not about being noticed — it's about being remembered.",
    quoteAuthor: "— Giorgio Armani",
    description:
      "From cocktail evenings to festive gatherings — statement pieces that let your personality shine through every thread.",
    images: [
      { src: "/images/gallery/black_saree_casual.jpg",          alt: "Black sequin saree — evening wear",              pos: "object-[center_15%]" },
      { src: "/images/gallery/InShot_20260120_090526934.jpg",   alt: "Purple saree outfit",                            pos: "object-[50%_10%]" },
      { src: "/images/gallery/InShot_20260329_093104110.jpg",   alt: "Black embroidered evening wear",                 pos: "object-[50%_10%]" },
      { src: "/images/gallery/InShot_20260203_073718987.jpg",   alt: "Maroon saree — sitting pose",                    pos: "object-[center_30%]" },
      { src: "/images/gallery/InShot_20260129_091350388.jpg",   alt: "Blue dress party wear",                          pos: "object-[center_20%]" },
      { src: "/images/gallery/InShot_20260129_091426746.jpg",   alt: "Blue dress evening look",                        pos: "object-top" },
      { src: "/images/gallery/InShot_20251219_082009105.jpg",   alt: "Floral dress — casual chic",                     pos: "object-[center_20%]" },
      { src: "/images/gallery/InShot_20251219_082054169.jpg",   alt: "Floral dress — standing full look",              pos: "object-top" },
      { src: "/images/gallery/IMG_8538.JPG",                    alt: "Red and white — casual party wear",              pos: "object-[50%_25%]" },
      { src: "/images/gallery/IMG_1388.JPG",                    alt: "Purple designer attire",                         pos: "object-[50%_30%]" },
    ],
  },

  /* ── 04 ARTISTRY — 4 images ── */
  {
    id: "craftsmanship",
    label: "Artistry",
    number: "04",
    title: "The Art of",
    accentWord: "Detail",
    quote: "God is in the details — every stitch, every thread tells a story of devotion.",
    quoteAuthor: "— I Meraki Atelier",
    description:
      "Behind every masterpiece is a story of patience, precision, and passion — explore the soul of our craft.",
    images: [
      { src: "/images/gallery/bridal_window_light.jpg",         alt: "Designer blouse — window light craftsmanship",   pos: "object-top" },
      { src: "/images/gallery/bridal_hair_detail.jpg",          alt: "Intricate hair jewelry & floral arrangement",     pos: "object-center" },
      { src: "/images/gallery/InShot_20251219_082138422 (1).jpg", alt: "Boutique mannequins display",                  pos: "object-[center_10%]" },
      { src: "/images/gallery/IMG_8540.JPG",                    alt: "Artistry — diadem styling",                      pos: "object-top" },
      { src: "/images/gallery/IMG_8545.JPG",                    alt: "Artistry — standing pose detail",                pos: "object-[center_20%]" },
    ],
  },
];

/* ─────────────────────────────────────────────────────────────
   LIGHTBOX
   ───────────────────────────────────────────────────────────── */
function Lightbox({
  images,
  startIndex,
  onClose,
}: {
  images: GalleryImage[];
  startIndex: number;
  onClose: () => void;
}) {
  const [idx, setIdx] = useState(startIndex);
  const prev = () => setIdx((p) => (p - 1 + images.length) % images.length);
  const next = () => setIdx((p) => (p + 1) % images.length);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [images.length, onClose]); // eslint-disable-line

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center"
      style={{ background: "rgba(6,6,6,0.97)" }}
      onClick={onClose}
    >
      <button
        className="absolute top-5 right-5 w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-brand-accent hover:border-brand-accent transition-all duration-300 z-10"
        onClick={onClose} aria-label="Close"
      ><X size={18} /></button>

      <button
        className="absolute left-4 md:left-8 w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-brand-accent hover:border-brand-accent transition-all duration-300 z-10"
        onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous"
      ><ArrowLeft size={18} /></button>

      <div
        className="relative mx-14 md:mx-24 max-h-[88vh]"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: "min(90vw, 900px)" }}
      >
        <img
          key={idx}
          src={images[idx].src}
          alt={images[idx].alt}
          className="max-h-[88vh] w-auto mx-auto rounded-xl shadow-2xl object-contain"
          style={{ animation: "lbFadeIn 0.25s ease" }}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-5 py-4 rounded-b-xl">
          <p className="text-white/80 text-sm font-light tracking-wide">{images[idx].alt}</p>
          <div className="flex items-center gap-2 mt-1.5">
            <div className="w-6 h-px bg-brand-accent" />
            <span className="text-brand-accent text-[10px] tracking-widest uppercase">{idx + 1} / {images.length}</span>
          </div>
        </div>
      </div>

      <button
        className="absolute right-4 md:right-8 w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-brand-accent hover:border-brand-accent transition-all duration-300 z-10"
        onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next"
      ><ArrowRight size={18} /></button>

      {/* Thumbnail strip */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setIdx(i); }}
            className={`rounded-full transition-all duration-300 ${i === idx ? "w-6 h-1.5 bg-brand-accent" : "w-1.5 h-1.5 bg-white/25 hover:bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   CAROUSEL — Horizontal snap scroll (desktop / laptop)
   ───────────────────────────────────────────────────────────── */
function GalleryCarousel({
  images,
  onImageClick,
}: {
  images: GalleryImage[];
  onImageClick: (i: number) => void;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    return () => el.removeEventListener("scroll", updateArrows);
  }, [images, updateArrows]);

  const scroll = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.75;
    el.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <div className="relative group/carousel">
      {/* LEFT ARROW */}
      <button
        onClick={() => scroll("left")}
        className={`gallery-carousel-arrow left-0 -translate-x-1/2 ${canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        aria-label="Scroll left"
      >
        <ChevronLeft size={22} />
      </button>

      {/* TRACK */}
      <div
        ref={trackRef}
        className="gallery-carousel-track"
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="gallery-carousel-item"
            style={{ animationDelay: `${i * 0.06}s` }}
            onClick={() => onImageClick(i)}
            role="button"
            tabIndex={0}
            aria-label={img.alt}
            onKeyDown={(e) => e.key === "Enter" && onImageClick(i)}
          >
            <div className="group relative w-full h-full overflow-hidden rounded-2xl bg-neutral-900 cursor-pointer">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className={`w-full h-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.07] ${img.pos || "object-[50%_15%]"}`}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-450">
                <p className="text-white/90 text-xs font-light tracking-wide leading-snug line-clamp-2">{img.alt}</p>
                <div className="w-5 h-px bg-brand-accent mt-1.5" />
              </div>
              {/* Corner accents */}
              <div className="absolute top-2.5 right-2.5 w-4 h-4 border-t border-r border-brand-accent/0 group-hover:border-brand-accent/60 transition-all duration-700" />
              <div className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b border-l border-brand-accent/0 group-hover:border-brand-accent/60 transition-all duration-700" />
              {/* Index badge */}
              <div className="absolute top-3 left-3 w-6 h-6 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-brand-accent text-[9px] font-bold">{i + 1}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT ARROW */}
      <button
        onClick={() => scroll("right")}
        className={`gallery-carousel-arrow right-0 translate-x-1/2 ${canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        aria-label="Scroll right"
      >
        <ChevronRight size={22} />
      </button>

      {/* Scroll progress indicator */}
      <div className="gallery-carousel-progress-wrap">
        <div
          className="gallery-carousel-progress-bar"
          ref={(el) => {
            if (!el) return;
            const track = trackRef.current;
            if (!track) return;
            const update = () => {
              const max = track.scrollWidth - track.clientWidth;
              const pct = max > 0 ? (track.scrollLeft / max) * 100 : 0;
              el.style.left = `${pct * 0.7}%`;
            };
            track.addEventListener("scroll", update, { passive: true });
            update();
          }}
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MOBILE GRID — 2-column masonry
   ───────────────────────────────────────────────────────────── */
function GalleryMobileGrid({
  images,
  onImageClick,
}: {
  images: GalleryImage[];
  onImageClick: (i: number) => void;
}) {
  // Split into 2 columns for alternating-height masonry feel
  const col1 = images.filter((_, i) => i % 2 === 0);
  const col2 = images.filter((_, i) => i % 2 === 1);

  const renderCol = (col: GalleryImage[], offset: number) =>
    col.map((img, i) => {
      const globalIdx = offset === 0 ? i * 2 : i * 2 + 1;
      // Alternate tall/short
      const isTall = i % 3 === 0;
      return (
        <div
          key={globalIdx}
          className={`gallery-mobile-item ${isTall ? "gallery-mobile-tall" : "gallery-mobile-short"}`}
          style={{ animationDelay: `${globalIdx * 0.05}s` }}
          onClick={() => onImageClick(globalIdx)}
          role="button" tabIndex={0} aria-label={img.alt}
          onKeyDown={(e) => e.key === "Enter" && onImageClick(globalIdx)}
        >
          <div className="group relative w-full h-full overflow-hidden rounded-xl bg-neutral-900 cursor-pointer">
            <img
              src={img.src} alt={img.alt} loading="lazy"
              className={`w-full h-full object-cover transition-transform duration-[1000ms] group-hover:scale-[1.06] ${img.pos || "object-[50%_15%]"}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            <div className="absolute bottom-2 left-2 right-2 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
              <p className="text-white/90 text-[10px] font-light leading-snug line-clamp-1">{img.alt}</p>
              <div className="w-4 h-px bg-brand-accent mt-1" />
            </div>
          </div>
        </div>
      );
    });

  return (
    <div className="gallery-mobile-grid">
      <div className="gallery-mobile-col">{renderCol(col1, 0)}</div>
      <div className="gallery-mobile-col">{renderCol(col2, 1)}</div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────────────────────── */
export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);

  const currentCategory = galleryCategories[activeCategory];

  const goToCategory = useCallback(
    (index: number, dir?: "left" | "right") => {
      if (isTransitioning || index === activeCategory) return;
      setDirection(dir || (index > activeCategory ? "right" : "left"));
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveCategory(index);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 400);
    },
    [activeCategory, isTransitioning]
  );

  const goNext = useCallback(
    () => goToCategory((activeCategory + 1) % galleryCategories.length, "right"),
    [activeCategory, goToCategory]
  );
  const goPrev = useCallback(
    () => goToCategory((activeCategory - 1 + galleryCategories.length) % galleryCategories.length, "left"),
    [activeCategory, goToCategory]
  );

  const resetAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(goNext, 10000);
  }, [goNext]);

  useEffect(() => {
    autoPlayRef.current = setInterval(goNext, 10000);
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };
  }, [goNext]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightboxIndex !== null) return;
      if (e.key === "ArrowRight") { goNext(); resetAutoPlay(); }
      if (e.key === "ArrowLeft")  { goPrev(); resetAutoPlay(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev, resetAutoPlay, lightboxIndex]);

  // Progress bar
  useEffect(() => {
    if (progressBarRef.current) {
      progressBarRef.current.style.transition = "none";
      progressBarRef.current.style.width = "0%";
      requestAnimationFrame(() => {
        if (progressBarRef.current) {
          progressBarRef.current.style.transition = "width 10s linear";
          progressBarRef.current.style.width = "100%";
        }
      });
    }
  }, [activeCategory]);

  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { diff > 0 ? goNext() : goPrev(); resetAutoPlay(); }
  };

  return (
    <>
      {lightboxIndex !== null && (
        <Lightbox
          images={currentCategory.images}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}

      <section
        className="relative bg-brand-primary overflow-hidden"
        data-section-fade
        id="gallery-portfolio"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Top divider */}
        <div data-divider className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent" />

        {/* Ghost BG text — contained so it never overflows on mobile */}
        <div aria-hidden className="absolute top-16 right-0 overflow-hidden max-w-full">
          <span className="block text-[clamp(3rem,14vw,16rem)] font-serif font-bold text-white/[0.018] select-none pointer-events-none whitespace-nowrap leading-none translate-x-4">
            PORTFOLIO
          </span>
        </div>

        {/* ── HEADER ── */}
        <div className="pt-20 sm:pt-24 md:pt-28 pb-6 sm:pb-8 px-4 sm:px-6 md:px-12">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold text-brand-accent tracking-[0.4em] uppercase mb-3" data-section-label>
                Curated Portfolio
              </p>
              <div data-gold-underline className="inline-block">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-white" data-split-text>
                  The <span className="italic text-brand-accent">Muse</span>.
                </h2>
                <div className="gold-line h-0.5 bg-brand-accent mt-1 origin-left" />
              </div>
            </div>
            <p className="text-sm text-neutral-400 font-light max-w-[260px] leading-relaxed" data-text-reveal>
              A visionary collection where every stitch is a testament to timeless beauty.
            </p>
          </div>
        </div>

        {/* ── TABS ── */}
        <div className="px-4 sm:px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex gap-0 overflow-x-auto no-scrollbar border-b border-neutral-800/70">
              {galleryCategories.map((cat, i) => (
                <button
                  key={cat.id}
                  onClick={() => { goToCategory(i); resetAutoPlay(); }}
                  className={`relative shrink-0 px-3 sm:px-5 py-3 sm:py-3.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.22em] transition-all duration-300 flex items-center gap-1.5 sm:gap-2
                    ${activeCategory === i ? "text-brand-accent" : "text-neutral-500 hover:text-neutral-300"}`}
                  id={`gallery-tab-${cat.id}`}
                >
                  <span className={`text-[8px] font-mono transition-colors hidden xs:inline ${activeCategory === i ? "text-brand-accent/50" : "text-neutral-700"}`}>
                    {cat.number}
                  </span>
                  {cat.label}
                  <span className={`text-[8px] hidden sm:inline transition-colors ${activeCategory === i ? "text-brand-accent/40" : "text-neutral-800"}`}>
                    ({cat.images.length})
                  </span>
                  {activeCategory === i && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-accent shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
                  )}
                </button>
              ))}
            </div>
            {/* Auto-play progress bar */}
            <div className="h-px bg-neutral-900 overflow-hidden">
              <div ref={progressBarRef} className="h-full bg-gradient-to-r from-brand-accent/30 to-brand-accent" />
            </div>
          </div>
        </div>

        {/* ── CATEGORY PANEL ── */}
        <div
          className={`transition-all duration-400 ease-out ${
            isTransitioning
              ? direction === "right" ? "opacity-0 translate-x-6" : "opacity-0 -translate-x-6"
              : "opacity-100 translate-x-0"
          }`}
        >
          <div className="px-4 sm:px-6 md:px-12 pt-6 sm:pt-8 pb-10 sm:pb-14">
            <div className="max-w-7xl mx-auto">

              {/* ── Two-column layout: info | grid ── */}
              <div className="flex flex-col items-center lg:flex-row gap-6 sm:gap-8 xl:gap-12 lg:items-start">

                {/* LEFT — Category info
                    On mobile: full width compact strip
                    On lg+: fixed-width sticky sidebar */}
                <div className="w-full lg:w-68 xl:w-76 shrink-0 lg:sticky lg:top-24 space-y-4 sm:space-y-5 flex flex-col items-center text-center lg:block lg:text-left">

                  {/* Counter + title — horizontal on mobile */}
                  <div className="flex flex-col items-center justify-center lg:block gap-4 w-full">
                    <div className="flex-1">
                      <span className="text-brand-accent text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.45em] block mb-2">
                        {currentCategory.number} / 04
                      </span>
                      <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white leading-none">
                        {currentCategory.title}
                      </h3>
                      <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight mt-0.5 italic text-brand-accent">
                        {currentCategory.accentWord}
                      </h3>
                    </div>
                    {/* Nav arrows — shown inline on mobile next to title */}
                    <div className="flex items-center justify-center gap-2 pt-2 lg:hidden shrink-0">
                      <button onClick={() => { goPrev(); resetAutoPlay(); }}
                        className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:border-brand-accent hover:text-brand-accent transition-all duration-300"
                        aria-label="Previous" id="gallery-prev-btn-mobile"
                      ><ArrowLeft size={14} /></button>
                      <button onClick={() => { goNext(); resetAutoPlay(); }}
                        className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:border-brand-accent hover:text-brand-accent transition-all duration-300"
                        aria-label="Next" id="gallery-next-btn-mobile"
                      ><ArrowRight size={14} /></button>
                    </div>
                  </div>

                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <div className="w-6 h-px bg-brand-accent" />
                    <div className="w-2 h-px bg-brand-accent/30" />
                  </div>

                  {/* Quote — hidden on mobile to save space */}
                  <blockquote className="hidden sm:block border-l-2 border-brand-accent/25 pl-4">
                    <p className="text-sm font-serif italic text-neutral-300 leading-relaxed">
                      &ldquo;{currentCategory.quote}&rdquo;
                    </p>
                    <cite className="block mt-2 text-[9px] text-brand-accent not-italic font-bold tracking-[0.2em] uppercase">
                      {currentCategory.quoteAuthor}
                    </cite>
                  </blockquote>

                  <p className="text-neutral-400 font-light leading-relaxed text-xs sm:text-sm hidden sm:block">
                    {currentCategory.description}
                  </p>

                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                    <span className="text-neutral-500 text-[9px] tracking-widest uppercase">
                      {currentCategory.images.length} pieces
                    </span>
                  </div>

                  {/* Desktop nav arrows + dots */}
                  <div className="hidden lg:flex items-center gap-3 pt-1">
                    <button onClick={() => { goPrev(); resetAutoPlay(); }}
                      className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:border-brand-accent hover:text-brand-accent hover:shadow-[0_0_16px_rgba(212,175,55,0.15)] transition-all duration-300"
                      aria-label="Previous category" id="gallery-prev-btn"
                    ><ArrowLeft size={16} /></button>
                    <button onClick={() => { goNext(); resetAutoPlay(); }}
                      className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:border-brand-accent hover:text-brand-accent hover:shadow-[0_0_16px_rgba(212,175,55,0.15)] transition-all duration-300"
                      aria-label="Next category" id="gallery-next-btn"
                    ><ArrowRight size={16} /></button>
                    <div className="flex gap-1.5 ml-1">
                      {galleryCategories.map((_, i) => (
                        <button key={i}
                          onClick={() => { goToCategory(i); resetAutoPlay(); }}
                          className={`rounded-full transition-all duration-300 ${
                            activeCategory === i
                              ? "w-5 h-1.5 bg-brand-accent shadow-[0_0_6px_rgba(212,175,55,0.5)]"
                              : "w-1.5 h-1.5 bg-neutral-700 hover:bg-neutral-500"}`}
                          aria-label={galleryCategories[i].label}
                          id={`gallery-dot-${i}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Mobile dots only */}
                  <div className="flex justify-center lg:hidden gap-1.5">
                    {galleryCategories.map((_, i) => (
                      <button key={i}
                        onClick={() => { goToCategory(i); resetAutoPlay(); }}
                        className={`rounded-full transition-all duration-300 ${
                          activeCategory === i
                            ? "w-5 h-1.5 bg-brand-accent"
                            : "w-1.5 h-1.5 bg-neutral-700"}`}
                        aria-label={galleryCategories[i].label}
                      />
                    ))}
                  </div>
                </div>

                {/* RIGHT — Photos */}
                <div className="flex-1 min-w-0 w-full">
                  {/* Desktop / Laptop: horizontal carousel */}
                  <div className="hidden md:block">
                    <GalleryCarousel
                      images={currentCategory.images}
                      onImageClick={(i) => setLightboxIndex(i)}
                    />
                  </div>

                  {/* Mobile: 2-column masonry */}
                  <div className="block md:hidden">
                    <GalleryMobileGrid
                      images={currentCategory.images}
                      onImageClick={(i) => setLightboxIndex(i)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom hint */}
        <div className="flex flex-col items-center pb-10 sm:pb-14 pt-2" data-btn-reveal>
          <div className="w-px h-8 sm:h-10 bg-gradient-to-b from-brand-accent/25 to-transparent" />
          <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.4em] text-neutral-600 mt-2">
            Continue Exploring
          </span>
        </div>
      </section>
    </>
  );
}
