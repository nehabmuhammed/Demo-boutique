import HeroVideo from "@/components/HeroVideo";
import { Sparkles, Scissors, Heart, MapPin, Star, History } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <HeroVideo
        posterSrc="/images/about_boutique.png"
        title="Our Heritage & Vision"
        subtitle="I Meraki Designer Boutique: Where passion meets every stitch, creating soulful couture for the modern woman."
        ctaText="Book Appointment"
        ctaLink="/contact"
        overlayOpacity={0.7}
      />

      {/* Philosophy Section */}
      <section id="history" className="py-32 px-4 bg-neutral-950 relative overflow-hidden border-b border-brand-accent/10">
        <div className="absolute top-0 right-0 p-24 text-[20vw] font-serif font-black text-white/[0.03] select-none pointer-events-none">
          ETHOS
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-sm font-semibold text-brand-accent tracking-[0.4em] uppercase mb-8">The Meraki Way</h2>
          <h3 className="text-5xl md:text-7xl font-serif font-bold mb-12 tracking-tight">Fashion with a <span className="italic text-brand-accent">Soul</span>.</h3>
          <p className="text-xl md:text-2xl font-light text-neutral-400 leading-relaxed max-w-3xl mx-auto">
            Derived from the Greek word <span className="text-white italic">Meraki</span>—doing something with such soul, creativity, and love that you leave a piece of yourself in your work. At I Meraki, this is not just a name; it&apos;s our entire philosophy.
          </p>
        </div>
      </section>

      {/* Grid Features */}
      <section className="py-40 px-4 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="text-center group">
            <div className="bg-brand-accent/10 w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-8 border border-brand-accent/20 transition-all duration-700 group-hover:bg-brand-accent group-hover:text-black">
              <Scissors size={40} className="text-brand-accent transition-colors duration-700 group-hover:text-black" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-6 tracking-wide">Signature Stitching</h3>
            <p className="text-neutral-500 leading-relaxed font-light">With over 12 years of experience in couture, our signature stitching techniques ensure an impeccable fit that feels like a second skin.</p>
          </div>
          
          <div className="text-center group">
            <div className="bg-brand-accent/10 w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-8 border border-brand-accent/20 transition-all duration-700 group-hover:bg-brand-accent group-hover:text-black">
              <Sparkles size={40} className="text-brand-accent transition-colors duration-700 group-hover:text-black" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-6 tracking-wide">Mural Artistry</h3>
            <p className="text-neutral-500 leading-relaxed font-light">We are pioneers in Kerala for custom fabric mural work, blending traditional artistry with contemporary fashion silhouettes.</p>
          </div>

          <div className="text-center group">
            <div className="bg-brand-accent/10 w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-8 border border-brand-accent/20 transition-all duration-700 group-hover:bg-brand-accent group-hover:text-black">
              <Star size={40} className="text-brand-accent transition-colors duration-700 group-hover:text-black" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-6 tracking-wide">Bridal Specialists</h3>
            <p className="text-neutral-500 leading-relaxed font-light">Recognized as the premier bridal boutique in Pathanapuram, we craft bridal masterpieces that tell your unique love story.</p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-40 bg-neutral-950 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="relative">
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 group">
                    <img src="/images/hero_boutique.png" alt="Designer at Work" className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" />
                </div>
                <div className="absolute -bottom-12 -right-12 w-2/3 aspect-square rounded-[2rem] overflow-hidden border-8 border-neutral-950 hidden md:block">
                    <img src="/images/gallery_bridal.png" alt="Bridal Work" className="w-full h-full object-cover" />
                </div>
            </div>
            <div className="space-y-12">
                <h2 className="text-sm font-semibold text-brand-accent tracking-[0.4em] uppercase">Our Journey</h2>
                <h3 className="text-5xl md:text-6xl font-serif font-bold">12 Years of <br /><span className="italic text-brand-accent">Excellence</span>.</h3>
                <div className="space-y-8 text-neutral-400 font-light text-lg leading-relaxed">
                   <p>
                        What started as a small atelier in Pathanapuram has grown into a destination for luxury boutique services. Our founder, driven by a passion for traditional Kerala aesthetics and modern fashion trends, envisioned a space where every garment is treated as a piece of art.
                   </p>
                   <p>
                        Today, I Meraki stands as a symbol of trust and luxury. We have had the privilege to design for thousands of brides, each piece meticulously crafted to perfection. From signature bridal blouses to intricate mural painting works, we continue to push the boundaries of bespoke fashion.
                   </p>
                </div>
                <div className="flex gap-12 pt-8">
                    <div>
                        <p className="text-4xl font-serif text-brand-accent font-bold mb-2">5000+</p>
                        <p className="text-[10px] uppercase tracking-widest text-neutral-500">Happy Clients</p>
                    </div>
                    <div>
                        <p className="text-4xl font-serif text-brand-accent font-bold mb-2">12+</p>
                        <p className="text-[10px] uppercase tracking-widest text-neutral-500">Years Experience</p>
                    </div>
                    <div>
                        <p className="text-4xl font-serif text-brand-accent font-bold mb-2">10k+</p>
                        <p className="text-[10px] uppercase tracking-widest text-neutral-500">Design Cuts</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Location/Visit Section */}
      <section className="py-40 bg-black px-4 text-center">
         <div className="max-w-2xl mx-auto space-y-8">
            <MapPin size={48} className="mx-auto text-brand-accent mb-4" />
            <h3 className="text-4xl font-serif font-bold">Visit Our Atelier</h3>
            <p className="text-neutral-400 font-light text-xl">
                Experience the luxury firsthand. Visit our studio in Pathanapuram for a personal consultation and fabric viewing.
            </p>
            <div className="pt-8 underline decoration-brand-accent/30 underline-offset-8">
                <p className="text-white text-lg">Main Road, Pathanapuram, Kollam, Kerala</p>
            </div>
         </div>
      </section>
    </div>
  );
}
