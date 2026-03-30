"use client";

import Link from "next/link";
import HeroVideo from "@/components/HeroVideo";
import ScrollAnimationProvider from "@/components/ScrollAnimations";
import { ArrowRight, Scissors, Star, Heart, Palette, UserCheck, Sparkles, MapPin, Phone } from "lucide-react";

export default function Home() {
  return (
    <ScrollAnimationProvider>
      <div className="flex flex-col w-full bg-brand-primary">
        {/* Hero Section */}
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

        {/* Services Section */}
        <section className="py-24 bg-neutral-950 px-4 relative" data-section-fade>
          <div data-divider className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent" />
          {/* Floating gold particles container */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" data-particles />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-sm font-semibold text-brand-accent tracking-wider uppercase mb-3" data-section-label>Our Services</h2>
              <div data-gold-underline className="inline-block">
                <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight font-serif" data-split-text>Created with Meraki, Worn with Elegance.</h3>
                <div className="gold-line h-0.5 bg-brand-accent mt-3 origin-left" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Scissors size={40} className="text-brand-accent mb-6" />,
                  title: "Designer Stitching",
                  description: "Custom stitching for saree blouses, kurtis, gowns, and ethnic outfits."
                },
                {
                  icon: <Sparkles size={40} className="text-brand-accent mb-6" />,
                  title: "Bridal Blouse Designing",
                  description: "Luxury bridal blouse designs with embroidery and detailed craftsmanship."
                },
                {
                  icon: <Star size={40} className="text-brand-accent mb-6" />,
                  title: "Ladies Costume Designing",
                  description: "Stylish outfits designed for weddings and special occasions."
                },
                {
                  icon: <Palette size={40} className="text-brand-accent mb-6" />,
                  title: "Fabric Painting / Mural Work",
                  description: "Hand-painted fabric designs and artistic blouse work."
                },
                {
                  icon: <Heart size={40} className="text-brand-accent mb-6" />,
                  title: "Custom Boutique Orders",
                  description: "Tailor-made outfits designed based on customer preferences."
                },
                {
                  icon: <UserCheck size={40} className="text-brand-accent mb-6" />,
                  title: "Boutique Consultation",
                  description: "Personalized fashion guidance for weddings and events."
                }
              ].map((feature, i) => (
                <div key={i} data-service-card className="group flex flex-col items-center text-center p-10 bg-black rounded-3xl border border-neutral-900 hover:border-brand-accent/50 transition-all duration-700 hover:shadow-[0_0_60px_rgba(212,175,55,0.08)] relative overflow-hidden hover:-translate-y-2 hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div data-card-icon className="relative z-10">
                    {feature.icon}
                  </div>
                  <div className="w-12 h-px bg-brand-accent/30 mx-auto mb-6 group-hover:w-24 transition-all duration-700 group-hover:shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                  <h4 className="text-xl font-bold mb-4 text-neutral-100 font-serif tracking-wide relative z-10">{feature.title}</h4>
                  <p className="text-neutral-400 leading-relaxed font-light text-sm relative z-10">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-32 px-4 bg-brand-primary relative" data-section-fade>
          <div data-divider className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent" />
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-sm font-semibold text-brand-accent tracking-wider uppercase mb-3" data-section-label>Portfolio</h2>
                <div data-gold-underline className="inline-block">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 text-white font-serif" data-split-text>Our Masterpieces</h2>
                  <div className="gold-line h-0.5 bg-brand-accent mt-1 origin-left" />
                </div>
                <p className="text-xl text-neutral-400 font-light mt-4" data-text-reveal>Explore our curated collection of luxury bridal designs and custom designer wear.</p>
              </div>
              <div data-btn-reveal>
                <Link href="/products" className="group flex items-center gap-3 text-sm tracking-widest uppercase font-semibold text-brand-accent hover:text-brand-secondary transition-colors pb-2 border-b border-brand-accent hover:border-brand-secondary">
                  View Complete Gallery
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { id: 1, img: '/images/gallery_bridal.png', title: 'Bridal Blouse Designs' },
                { id: 2, img: '/images/gallery_outfit.png', title: 'Designer Gowns' },
                { id: 3, img: '/images/gallery_kurti.png', title: 'Custom Stitched Kurtis' }
              ].map((item, idx) => (
                <div key={item.id} data-gallery-reveal className={`group relative rounded-2xl overflow-hidden aspect-[3/4] bg-neutral-900 border border-neutral-800 transition-all duration-700 ${idx === 1 ? 'md:mt-12' : ''}`}>
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 flex flex-col justify-end p-8 opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                      <h4 className="text-2xl font-bold text-brand-accent font-serif mb-2">{item.title}</h4>
                      <div className="w-8 h-px bg-brand-accent mb-3 group-hover:w-16 transition-all duration-700" />
                      <p className="text-neutral-300 font-light text-sm">Created with Meraki.</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bridal Collection Horizontal Scroll */}
        <section data-horizontal-scroll className="relative bg-neutral-950 border-y border-neutral-900">
          <div data-horizontal-inner className="flex items-center h-screen gap-0">
            {/* Intro Panel */}
            <div className="flex-shrink-0 w-screen h-full flex items-center justify-center px-8">
              <div className="max-w-xl text-center">
                <h2 className="text-sm font-semibold text-brand-accent tracking-wider uppercase mb-4">Bridal Collection</h2>
                <h3 className="text-5xl md:text-6xl font-bold text-white font-serif mb-6">Exclusives for<br /><span className="text-brand-accent">Your Big Day</span></h3>
                <p className="text-neutral-400 font-light text-lg leading-relaxed">Scroll through our curated bridal showcase — every design is handcrafted with love and precision.</p>
                <div className="w-24 h-px bg-brand-accent mx-auto mt-8" />
              </div>
            </div>
            {/* Horizontal Scroll Images */}
            {[
              { img: '/images/gallery_bridal.png', title: 'Bridal Blouse Couture' },
              { img: '/images/bridal_detail.png', title: 'Embroidery Craftsmanship' },
              { img: '/images/bridal_collection.png', title: 'Designer Collection' },
              { img: '/images/gallery_outfit.png', title: 'Luxury Lehengas' },
              { img: '/images/fabric_painting.png', title: 'Fabric Art & Mural' },
            ].map((item, i) => (
              <div key={i} data-h-panel className="flex-shrink-0 w-[80vw] md:w-[50vw] h-[85vh] relative group overflow-hidden rounded-2xl mx-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h4 className="text-3xl font-bold text-white font-serif mb-2">{item.title}</h4>
                  <div className="w-12 h-px bg-brand-accent" />
                </div>
              </div>
            ))}
            {/* End Panel */}
            <div className="flex-shrink-0 w-[50vw] h-full flex items-center justify-center px-8">
              <div className="text-center">
                <p className="text-brand-accent font-serif text-2xl mb-4 italic">Every stitch tells a story.</p>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-semibold text-white border-b border-brand-accent pb-2 hover:text-brand-accent transition-colors duration-500"
                >
                  View Full Gallery
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="relative py-40 overflow-hidden bg-neutral-950 text-white shadow-2xl border-y border-neutral-900" data-section-fade>
          <div className="absolute inset-0 w-full h-full opacity-30 overflow-hidden">
            <img src="/images/about_boutique.png" alt="Boutique Studio" data-parallax-bg data-scroll-zoom className="w-full h-[140%] object-cover grayscale opacity-50 will-change-transform" style={{ marginTop: "-20%" }} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-sm font-semibold text-brand-accent tracking-wider uppercase mb-4" data-section-label>About Us</h2>
              <div data-gold-underline className="inline-block mb-8">
                <h3 className="text-5xl md:text-6xl font-bold tracking-tighter font-serif text-white" data-split-text>I Meraki Designer Boutique</h3>
                <div className="gold-line h-0.5 bg-brand-accent mt-3 origin-left" />
              </div>
              <p className="text-lg text-neutral-300 mb-12 font-light leading-relaxed max-w-lg" data-text-reveal>
                Based in Pathanapuram, we are a creative fashion studio specializing in custom stitching and bridal blouse designing. Each outfit is crafted with passion, attention to detail, and modern design techniques while maintaining traditional elegance. The boutique focuses on delivering perfect fitting and unique designs for every customer.
              </p>
              <div data-btn-reveal>
                <Link href="/about" className="glow-effect inline-flex items-center justify-center px-8 py-4 bg-transparent border border-brand-accent text-brand-accent font-semibold text-sm tracking-widest uppercase hover:bg-brand-accent hover:text-black transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.2)]">
                  Discover Our Story
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-32 px-4 bg-brand-primary relative" data-section-fade>
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-2 mb-8">
              {[1,2,3,4,5].map(i => <Star key={i} data-star fill="currentColor" size={24} className="text-brand-accent" />)}
            </div>
            <div data-gold-underline className="inline-block mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white font-serif" data-split-text>What Our Brides Say</h2>
              <div className="gold-line h-0.5 bg-brand-accent mt-3 mx-auto origin-center" />
            </div>
            
            <div className="relative p-12 bg-neutral-950 rounded-2xl border border-neutral-900 shadow-[0_0_80px_rgba(0,0,0,0.5)]" data-testimonial>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-primary p-4 rounded-full border border-neutral-900">
                <Heart fill="currentColor" size={32} className="text-brand-accent" />
              </div>
              <p className="text-2xl font-light italic text-neutral-300 mb-8 leading-relaxed text-center font-serif mt-4">
                &quot;Beautiful bridal blouse stitching and perfect fitting. The attention to detail is unmatched, and they truly understand modern elegance. Highly recommended boutique in Pathanapuram.&quot;
              </p>
              <div className="flex flex-col items-center">
                <div className="w-12 h-px bg-brand-accent/50 mb-4" />
                <p className="text-brand-accent font-bold text-sm uppercase tracking-widest">A Happy Bride</p>
                <p className="text-neutral-500 font-light text-xs mt-1">Pathanapuram, Kerala</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-32 px-4 bg-neutral-950 border-t border-neutral-900 relative text-center" data-section-fade>
          <div data-divider className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent" />
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-bold text-white mb-6 font-serif" data-split-text data-contact-reveal>Visit Our Studio</h2>
            <p className="text-xl text-neutral-400 mb-16 font-light max-w-2xl mx-auto" data-text-reveal data-contact-reveal>
              Experience luxury designer stitching in Pathanapuram, Kollam, Kerala.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20" data-contact-reveal>
              <a href="tel:8075702197" className="glow-effect inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-accent text-black font-semibold text-sm tracking-widest uppercase hover:bg-brand-secondary transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.2)]">
                <Phone size={20} />
                Call Now
              </a>
              <a href="https://wa.me/918075702197" target="_blank" rel="noreferrer" className="glow-effect inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-black font-semibold text-sm tracking-widest uppercase transition-all duration-500">
                WhatsApp Booking
              </a>
              <a href="https://maps.google.com/?q=I+Meraki+Designer+Boutique+Pathanapuram" target="_blank" rel="noreferrer" className="glow-effect inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-black font-semibold text-sm tracking-widest uppercase transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.2)]">
                <MapPin size={20} />
                Get Directions
              </a>
            </div>

            <div className="w-full h-[450px] rounded-2xl overflow-hidden border border-neutral-800 relative z-10 shadow-2xl saturate-50 hover:saturate-100 transition-all duration-700" data-contact-reveal>
              <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3935.101740927827!2d76.8617!3d9.0984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05d1bb5b399225%3A0xe21d8b7ea75eac1e!2sPathanapuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1714480629738!5m2!1sen!2sin" 
                 width="100%" 
                 height="100%" 
                 style={{border:0}} 
                 allowFullScreen={false} 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </ScrollAnimationProvider>
  );
}
