import ScrollAnimationProvider from "@/components/ScrollAnimations";
import { ArrowRight } from "lucide-react";

const allImages = [
  { src: "/images/gallery/wedding_kathakali.jpg", alt: "Wedding with Kathakali Tradition", span: "row-span-2" },
  { src: "/images/gallery/traditional_couple_1.jpg", alt: "Traditional Couple Ensemble", span: "row-span-1" },
  { src: "/images/gallery/IMG_0685.JPG", alt: "Bridal Blouse Detail", span: "row-span-2" },
  { src: "/images/gallery/traditional_saree_pose.jpg", alt: "Black and Red Saree Pose", span: "row-span-2" },
  { src: "/images/gallery/wedding_ceremony.jpg", alt: "Pink Saree Wedding Ceremony", span: "row-span-1" },
  { src: "/images/gallery/InShot_20251219_082009105.jpg", alt: "Heritage Showcase", span: "row-span-2" },
  { src: "/images/gallery/traditional_couple_2.jpg", alt: "Traditional Couple Portrait", span: "row-span-1" },
  { src: "/images/gallery/wedding_couple.jpg", alt: "Wedding Moments", span: "row-span-2" },
  { src: "/images/gallery/pink_bridal_portrait.jpg", alt: "Bridal Portrait", span: "row-span-1" },
  { src: "/images/gallery/InShot_20260114_103329715.jpg", alt: "Designer Evening Outfit", span: "row-span-1" },
  { src: "/images/gallery/black_saree_casual.jpg", alt: "Evening Black Saree", span: "row-span-2" },
  { src: "/images/gallery/InShot_20260114_103551527.jpg", alt: "Craftsmanship Detail", span: "row-span-1" },
  { src: "/images/gallery/bridal_window_light.jpg", alt: "Bridal Window Light", span: "row-span-1" },
  { src: "/images/gallery/IMG_6508.JPG", alt: "Contemporary Silhouette", span: "row-span-2" },
  { src: "/images/gallery/bridal_hair_detail.jpg", alt: "Bridal Hair & Jewelry", span: "row-span-1" },
  { src: "/images/gallery/InShot_20260129_091350388.jpg", alt: "Embroidery Process", span: "row-span-1" },
  { src: "/images/gallery/IMG_8218.JPG", alt: "Mural Elegance", span: "row-span-1" },
  { src: "/images/gallery/InShot_20260120_090526934.jpg", alt: "Custom Setup", span: "row-span-1" },
];

export default function ProductsPage() {
  return (
    <ScrollAnimationProvider>
      <div className="min-h-screen bg-brand-primary text-white pt-32 pb-24 overflow-hidden relative">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-full md:w-3/4 h-screen bg-gradient-to-b from-brand-accent/5 to-transparent pointer-events-none rounded-bl-full opacity-50" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          
          {/* Header */}
          <div className="mb-20 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-3xl">
              <h1 className="text-sm font-semibold text-brand-accent tracking-[0.4em] uppercase mb-6" data-section-label>Full Portfolio</h1>
              <div data-gold-underline className="inline-block relative">
                  <h2 className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-4 text-white" data-split-text>
                    The <span className="italic text-brand-accent">Lookbook</span>.
                  </h2>
                  <div className="gold-line h-0.5 bg-brand-accent w-full mt-2" />
              </div>
              <p className="text-xl text-neutral-400 font-light mt-8 leading-relaxed max-w-xl mx-auto md:mx-0" data-text-reveal>
                  A complete visual journey through our finest bespoke creations, capturing the essence of elegance in every frame.
              </p>
            </div>
            <div className="hidden md:block animate-bounce text-brand-accent/40 mb-4 pb-4 border-b border-brand-accent/30">
               <ArrowRight className="rotate-90" size={24} />
            </div>
          </div>

          {/* Simple Masonry Grid Look */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {allImages.map((img, i) => (
              <div 
                key={i} 
                className="relative group overflow-hidden rounded-[2rem] bg-neutral-900 border border-white/5 break-inside-avoid"
                data-gallery-reveal
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-auto object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                  <div className="w-8 h-px bg-brand-accent mb-4" />
                  <p className="text-white font-serif text-2xl tracking-wide">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Order CTA */}
          <section className="mt-40 p-12 md:p-20 bg-neutral-900/50 backdrop-blur-md rounded-[3rem] border border-brand-accent/10 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-accent/10 via-brand-primary to-brand-primary opacity-50" />
              <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center justify-between">
                  <div className="max-w-xl">
                      <h3 className="text-xs font-semibold text-brand-accent tracking-[0.5em] uppercase mb-6">Bespoke Couture</h3>
                      <h4 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white leading-tight">Can&apos;t find what you&apos;re looking for?</h4>
                      <p className="text-lg text-neutral-400 font-light leading-relaxed">
                          We specialize in custom designer wear tailored exactly to your vision. Book a private consultation with our lead designer today.
                      </p>
                  </div>
                  <div className="flex flex-col gap-6 w-full lg:w-auto">
                      <a href="https://wa.me/918075702197" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-4 py-6 px-10 bg-brand-accent text-black font-bold uppercase tracking-[0.4em] text-xs hover:bg-white transition-all duration-700 rounded-2xl hover:shadow-[0_0_40px_rgba(212,175,55,0.3)]">
                          Book Consultation
                          <ArrowRight size={18} />
                      </a>
                      <p className="text-center text-[9px] uppercase tracking-widest text-neutral-500 font-bold">Estimated Turnaround: 2-3 Weeks</p>
                  </div>
              </div>
          </section>
        </div>
      </div>
    </ScrollAnimationProvider>
  );
}
