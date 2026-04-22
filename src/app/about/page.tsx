import HeroVideo from "@/components/HeroVideo";
import { Sparkles, Scissors, Heart, MapPin, Star, History } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <HeroVideo
        posterSrc="/images/about_hero.jpg"
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
            <p className="text-neutral-500 leading-relaxed font-light">With over 8 years of experience in couture, our signature stitching techniques ensure an impeccable fit that feels like a second skin.</p>
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
                    <img src="/images/founder_story.jpg" alt="Bushra Habeeb - Founder of I Meraki" className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" />
                </div>
            </div>
            <div className="space-y-12">
                <h2 className="text-sm font-semibold text-brand-accent tracking-[0.4em] uppercase">The Visionary</h2>
                <h3 className="text-5xl md:text-6xl font-serif font-bold">The Vision Behind <br /><span className="italic text-brand-accent">I Meraki</span>.</h3>
                <div className="space-y-8 text-neutral-400 font-light text-lg leading-relaxed">
                   <p>
                        Founded on December 30, 2018, by Bushra Habeeb, I Meraki Designer Boutique was born out of a profound passion for exquisite craftsmanship and modern elegance. Bushra envisioned a sanctuary where traditional Kerala aesthetics seamlessly blend with contemporary couture, treating every garment as a personal piece of art.
                   </p>
                   <p>
                        Under her creative direction, an intimate atelier in Pathanapuram has blossomed into a premier destination for luxury bespoke fashion. From meticulously crafted bridal masterpieces to intricate fabric mural painting, her commitment to soul, creativity, and love ensures that I Meraki pushes the boundaries of personalized perfection.
                   </p>
                </div>
                <div className="flex gap-12 pt-8">
                    <div>
                        <p className="text-4xl font-serif text-brand-accent font-bold mb-2">5000+</p>
                        <p className="text-[10px] uppercase tracking-widest text-neutral-500">Happy Brides</p>
                    </div>
                    <div>
                        <p className="text-4xl font-serif text-brand-accent font-bold mb-2">2018</p>
                        <p className="text-[10px] uppercase tracking-widest text-neutral-500">Year Founded</p>
                    </div>
                    <div>
                        <p className="text-4xl font-serif text-brand-accent font-bold mb-2">10k+</p>
                        <p className="text-[10px] uppercase tracking-widest text-neutral-500">Design Cuts</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Client Spotlight Section */}
      <section className="py-32 md:py-40 bg-black px-4 border-t border-brand-accent/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="space-y-10 md:space-y-12 order-2 md:order-1">
                <h2 className="text-sm font-semibold text-brand-accent tracking-[0.4em] uppercase">Client Spotlight</h2>
                <h3 className="text-5xl md:text-6xl font-serif font-bold leading-tight">Crowning <br /><span className="italic text-brand-accent">Glory</span>.</h3>
                <div className="space-y-6 md:space-y-8 text-neutral-400 font-light text-base md:text-lg leading-relaxed">
                   <p>
                        We take immense pride in dressing women who inspire and lead. It was an absolute honor to design for our esteemed client <strong className="text-white font-medium">Suleikha Fathima</strong>, the title winner of <span className="text-brand-accent">Miss Kerala 2025</span>.
                   </p>
                   <p>
                        Her vibrant red gown, meticulously tailored with intricate detailing at I Meraki, perfectly complemented her elegance and confidence on the grand stage. This defining moment stands as a testament to our dedication to creating stunning, show-stopping couture that turns dreams into reality.
                   </p>
                </div>
            </div>
            <div className="relative order-1 md:order-2">
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-brand-accent/20 group relative shadow-[0_0_50px_rgba(212,175,55,0.05)]">
                    <img src="/images/miss_kerala_2025.jpg" alt="Suleikha Fathima - Miss Kerala 2025 Wearing I Meraki" className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                    <div className="absolute bottom-8 left-8 right-8 text-center pointer-events-none">
                        <p className="text-[10px] md:text-xs font-bold text-brand-accent tracking-[0.3em] uppercase mb-2">Miss Kerala 2025</p>
                        <p className="text-white font-serif text-2xl md:text-3xl italic">Suleikha Fathima</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Location/Visit Section */}
      <section className="py-24 md:py-40 bg-black px-4 text-center">
         <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-6">
                <MapPin size={48} className="mx-auto text-brand-accent mb-4" />
                <h3 className="text-4xl md:text-5xl font-serif font-bold">Visit Our Atelier</h3>
                <p className="text-neutral-400 font-light text-lg md:text-xl max-w-2xl mx-auto">
                    Experience the luxury firsthand. Visit our studio in Pathanapuram for a personal consultation and fabric viewing.
                </p>
            </div>
            
            {/* Map Embed */}
            <div className="rounded-[2.5rem] overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-1000 h-[400px] md:h-[500px] relative shadow-2xl">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.7097072525244!2d76.8564375!3d9.090187499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b067336904a8711%3A0x60cdd71d5627c212!2sI%20Meraki%20designer%20boutique!5e0!3m2!1sen!2sin!4v1776762588366!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="I Meraki Boutique Location"
                ></iframe>
            </div>

            <div className="pt-6">
                <p className="text-brand-accent font-bold text-xs uppercase tracking-[0.4em] mb-2">Location</p>
                <p className="text-white text-xl font-serif italic">Main Road, Pathanapuram, Kollam, Kerala</p>
            </div>
         </div>
      </section>
    </div>
  );
}
