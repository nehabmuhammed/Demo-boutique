"use client";

import Link from "next/link";
import HeroVideo from "@/components/HeroVideo";
import ScrollAnimationProvider from "@/components/ScrollAnimations";
import { ArrowRight, Scissors, Star, Heart, Palette, UserCheck, Sparkles, MapPin, Phone, Mail } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

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

        {/* Services Section - Redesigned (The Atelier) */}
        <section className="py-32 bg-neutral-950 px-4 relative overflow-hidden" data-section-fade>
          <div data-divider className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent" />
          
          {/* Decorative Ghost Text */}
          <div className="absolute top-20 -right-20 text-[20vw] font-serif font-bold text-white/[0.02] select-none pointer-events-none whitespace-nowrap">
            ATELIER
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-24">
              <h2 className="text-sm font-semibold text-brand-accent tracking-[0.3em] uppercase mb-4" data-section-label>The Atelier</h2>
              <div data-gold-underline className="inline-block">
                <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tight font-serif leading-tight" data-split-text>
                  The Art of <br /><span className="italic text-brand-accent">Couture</span>.
                </h3>
                <div className="gold-line h-0.5 bg-brand-accent mt-4 origin-left" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-y-24 md:gap-x-12">
              {[
                {
                  icon: <Scissors size={32} />,
                  title: "Signature Stitching",
                  description: "Masterful precision for saree blouses, kurtis, and gowns that define grace.",
                  cols: "md:col-span-4",
                  offset: ""
                },
                {
                  icon: <Sparkles size={32} />,
                  title: "Bridal Couture",
                  description: "Handcrafted bridal masterpieces detailed with embroidery and royal aesthetics.",
                  cols: "md:col-span-4",
                  offset: "md:mt-24"
                },
                {
                  icon: <Star size={32} />,
                  title: "Bespoke Design",
                  description: "Consultation-led custom designs for high-profile weddings and special events.",
                  cols: "md:col-span-4",
                  offset: "md:mt-48"
                },
                {
                  icon: <Palette size={32} />,
                  title: "Mural & Fabric Art",
                  description: "Artistic hand-painting and mural work on fabric for a unique designer touch.",
                  cols: "md:col-span-4",
                  offset: ""
                },
                {
                  icon: <Heart size={32} />,
                  title: "Cultural Heritage",
                  description: "Reviving traditional Kerala aesthetics with modern silhouettes and patterns.",
                  cols: "md:col-span-4",
                  offset: "md:mt-24"
                },
                {
                  icon: <UserCheck size={32} />,
                  title: "Personal Stylist",
                  description: "Dedicated fashion guidance to curate your perfect wardrobe for any occasion.",
                  cols: "md:col-span-4",
                  offset: "md:mt-48"
                }
              ].map((service, i) => (
                <div key={i} className={`${service.cols} ${service.offset}`} data-service-card>
                  <div className="group relative p-8 bg-neutral-900/50 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-brand-accent/30 transition-all duration-700 overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 transition-opacity duration-700 text-brand-accent">
                      <div className="text-5xl font-serif">0{i+1}</div>
                    </div>
                    <div data-card-icon className="w-16 h-16 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-8 group-hover:bg-brand-accent group-hover:text-black transition-colors duration-500">
                      {service.icon}
                    </div>
                    <h4 className="text-2xl font-bold mb-4 text-white font-serif tracking-wide">{service.title}</h4>
                    <p className="text-neutral-400 leading-relaxed font-light text-base">{service.description}</p>
                    <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2 text-brand-accent text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-2 group-hover:translate-y-0">
                      Explore Service <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section - Redesigned (The Muse) */}
        <section className="py-40 px-4 bg-brand-primary relative overflow-hidden" data-section-fade>
          <div data-divider className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent" />
          
          {/* Vertical Decorative Text */}
          <div className="absolute left-10 top-1/2 -translate-y-1/2 text-[15vh] font-serif font-bold text-white/[0.015] select-none pointer-events-none rotate-90 origin-center whitespace-nowrap">
            MUSE COLLECTION
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-sm font-semibold text-brand-accent tracking-[0.3em] uppercase mb-4" data-section-label>Curated Selection</h2>
                <div data-gold-underline className="inline-block">
                  <h2 className="text-6xl md:text-8xl font-bold tracking-tight mb-4 text-white font-serif" data-split-text>The <span className="italic text-brand-accent">Muse</span>.</h2>
                  <div className="gold-line h-0.5 bg-brand-accent mt-1 origin-left" />
                </div>
                <p className="text-2xl text-neutral-400 font-light mt-8 max-w-lg leading-relaxed" data-text-reveal>
                  A visionary collection of handcrafted elegance, where every stitch is a testament to timeless beauty.
                </p>
              </div>
              <div data-btn-reveal>
                <Link href="/products" className="group flex items-center gap-4 text-sm tracking-[0.4em] uppercase font-bold text-brand-accent hover:text-white transition-all duration-500 pb-4 border-b border-brand-accent/30 hover:border-white">
                  View Full Gallery
                  <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform duration-700" />
                </Link>
              </div>
            </div>
            
            {/* Editorial Staggered Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
              {/* Large Main Feature */}
              <div className="md:col-span-7 h-[600px] md:h-[800px]" data-gallery-reveal>
                <div className="group relative w-full h-full rounded-3xl overflow-hidden bg-neutral-900 cursor-none-cursor">
                   <img src="/images/gallery_bridal.png" alt="Bridal Couture" className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" />
                   <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-black/90 via-black/30 to-transparent">
                      <span className="text-brand-accent font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Editorial 01</span>
                      <h4 className="text-4xl font-bold text-white font-serif mb-2">The Bridal Oracle</h4>
                      <p className="text-neutral-400 font-light max-w-xs">Exquisite embroidery on silk, designed for the modern bride.</p>
                   </div>
                </div>
              </div>

              {/* Smaller Staggered Side Gallery */}
              <div className="md:col-span-5 flex flex-col gap-8 md:gap-12">
                <div className="h-[400px] md:h-[450px]" data-gallery-reveal>
                  <div className="group relative w-full h-full rounded-3xl overflow-hidden bg-neutral-900">
                    <img src="/images/gallery_outfit.png" alt="Designer Gown" className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000" />
                    <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-black/90 via-black/20 to-transparent">
                      <h4 className="text-2xl font-bold text-white font-serif mb-1">Evening Mystique</h4>
                      <div className="w-8 h-px bg-brand-accent" />
                    </div>
                  </div>
                </div>
                <div className="h-[300px] md:h-[280px]" data-gallery-reveal>
                  <div className="group relative w-full h-full rounded-3xl overflow-hidden bg-neutral-900 border border-white/5">
                    <img src="/images/gallery_kurti.png" alt="Custom Kurti" className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 transition-all duration-1000" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors duration-700" />
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                       <h4 className="text-3xl font-serif text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-y-4 group-hover:translate-y-0 tracking-widest uppercase">The Kurti Edit</h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Row Spread */}
              <div className="md:col-span-4 h-[400px]" data-gallery-reveal>
                 <div className="group relative w-full h-full rounded-3xl overflow-hidden bg-neutral-900">
                    <img src="/images/bridal_detail.png" alt="Detailing" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-brand-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                 </div>
              </div>
              <div className="md:col-span-8 h-[400px]" data-gallery-reveal>
                 <div className="group relative w-full h-full rounded-3xl overflow-hidden bg-neutral-900">
                    <img src="/images/bridal_collection.png" alt="Collection" className="w-full h-full object-cover" />
                    <div className="absolute inset-x-12 bottom-12 flex justify-between items-center">
                       <h4 className="text-white font-serif text-3xl">Bridal Showcase &apos;24</h4>
                       <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-700">
                          <ArrowRight size={24} />
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bridal Collection Horizontal Scroll - Kept as requested in logic but improved styling inside */}
        <section data-horizontal-scroll className="relative bg-neutral-950 border-y border-neutral-900">
          <div data-horizontal-inner className="flex items-center h-screen gap-0">
            {/* Intro Panel */}
            <div className="flex-shrink-0 w-screen h-full flex items-center justify-center px-12">
              <div className="max-w-2xl text-center">
                <h2 className="text-sm font-semibold text-brand-accent tracking-[0.4em] uppercase mb-8">The Bridal Suite</h2>
                <h3 className="text-6xl md:text-8xl font-bold text-white font-serif mb-8 leading-tight">Handcrafted <br /><span className="text-brand-accent italic">Treasures</span></h3>
                <p className="text-neutral-400 font-light text-xl leading-relaxed max-w-lg mx-auto">
                    Journey through our most exclusive bridal designs—where each piece is meticulously crafted to be as unique as your love story.
                </p>
                <div className="mt-12 flex flex-col items-center">
                   <div className="w-px h-24 bg-gradient-to-b from-brand-accent to-transparent" />
                   <p className="text-[10px] uppercase tracking-[0.4em] text-brand-accent mt-4">Scroll Sideways</p>
                </div>
              </div>
            </div>
            {/* Horizontal Scroll Images */}
            {[
              { img: '/images/gallery_bridal.png', title: 'The Royal Blouse', cat: 'Bridal Couture' },
              { img: '/images/bridal_detail.png', title: 'Gold Threading', cat: 'Craftsmanship' },
              { img: '/images/bridal_collection.png', title: 'The Heritage Set', cat: 'Traditional' },
              { img: '/images/gallery_outfit.png', title: 'Velvet Mystique', cat: 'Evening Wear' },
              { img: '/images/fabric_painting.png', title: 'Mural Elegance', cat: 'Fabric Art' },
            ].map((item, i) => (
              <div key={i} data-h-panel className="flex-shrink-0 w-[90vw] md:w-[60vw] h-[75vh] relative group overflow-hidden rounded-[2.5rem] mx-8 bg-neutral-900">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute inset-0 border border-white/5 rounded-[2.5rem] pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-12 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  <span className="text-brand-accent font-bold tracking-[0.3em] uppercase text-xs mb-3 block">{item.cat}</span>
                  <h4 className="text-5xl font-bold text-white font-serif mb-4 leading-none">{item.title}</h4>
                  <div className="w-16 h-px bg-brand-accent group-hover:w-32 transition-all duration-700" />
                </div>
              </div>
            ))}
            {/* End Panel */}
            <div className="flex-shrink-0 w-screen h-full flex items-center justify-center px-8">
              <div className="text-center">
                <p className="text-brand-accent font-serif text-3xl mb-8 italic">Crafting your dream, one stitch at a time.</p>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-4 text-sm uppercase tracking-[0.5em] font-bold text-white border-b border-brand-accent/50 pb-4 hover:border-brand-accent transition-all duration-500"
                >
                  Enter The Gallery
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section - Redesigned (The Meraki Way) */}
        <section className="relative min-h-[120vh] py-40 overflow-hidden bg-brand-primary flex items-center" data-section-fade>
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
             <div className="absolute top-0 right-0 text-[35vw] font-serif font-black text-white/5 rotate-90 translate-x-1/2 -translate-y-1/4">
                MERAKI
             </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 relative z-10 w-full grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
            {/* Left Image Cluster */}
            <div className="md:col-span-6 relative" data-scroll-reveal>
               <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10" data-scroll-zoom>
                  <img src="/images/about_boutique.png" alt="The Studio" className="w-full h-full object-cover grayscale opacity-80" />
               </div>
               <div className="absolute -bottom-12 -right-12 w-2/3 aspect-square rounded-3xl overflow-hidden border-8 border-brand-primary shadow-2xl hidden md:block">
                  <img src="/images/hero_boutique.png" alt="Designer Work" className="w-full h-full object-cover" />
               </div>
               {/* Aesthetic Stat */}
               <div className="absolute top-12 -left-8 bg-neutral-900 border border-white/10 p-8 rounded-2xl shadow-2xl hidden md:block">
                  <div className="text-4xl font-serif text-brand-accent mb-1" data-counter="12">12+</div>
                  <div className="text-[10px] uppercase tracking-widest text-neutral-400">Years of Luxury Craft</div>
               </div>
            </div>

            {/* Right Content */}
            <div className="md:col-span-6 pl-0 md:pl-12">
              <h2 className="text-sm font-semibold text-brand-accent tracking-[0.4em] uppercase mb-6" data-section-label>Our Ethos</h2>
              <div data-gold-underline className="inline-block mb-10">
                <h3 className="text-6xl md:text-8xl font-bold tracking-tight font-serif text-white leading-none" data-split-text>The Meraki<br /><span className="text-brand-accent italic pl-4 md:pl-20">Story.</span></h3>
                <div className="gold-line h-0.5 bg-brand-accent mt-6 origin-left" />
              </div>
              <p className="text-xl text-neutral-300 mb-12 font-light leading-relaxed max-w-lg" data-text-reveal>
                Based in the heart of Pathanapuram, I Meraki Designer Boutique is more than an atelier—it’s a sanctuary where fashion meets soul. <br /><br />
                Guided by the Greek concept of &apos;Meraki&apos;—to do something with soul, creativity, and love—we specialize in bespoke bridal couture and artistic fabric mural work. Every piece is a collaboration between designer and muse, crafted to celebrate the woman who wears it.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-16" data-text-reveal>
                 <div>
                    <h5 className="text-brand-accent font-serif text-xl mb-2 italic">Craftsmanship</h5>
                    <p className="text-neutral-500 text-sm font-light">Meticulous hand-embroidery and perfect structural fit.</p>
                 </div>
                 <div>
                    <h5 className="text-brand-accent font-serif text-xl mb-2 italic">Vision</h5>
                    <p className="text-neutral-500 text-sm font-light">Modern silhouettes inspired by deep cultural roots.</p>
                 </div>
              </div>
              <div data-btn-reveal>
                <Link href="/about" className="group flex items-center gap-6 px-10 py-5 bg-neutral-900 border border-brand-accent/20 text-brand-accent font-bold text-sm tracking-[0.3em] uppercase hover:bg-brand-accent hover:text-black transition-all duration-700 hover:shadow-[0_0_50px_rgba(212,175,55,0.15)] rounded-full">
                  Read Our Legacy
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials - Simplified with high-end look */}
        <section className="py-40 px-4 bg-neutral-950 relative overflow-hidden" data-section-fade>
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-40 bg-gradient-to-b from-brand-accent/30 to-transparent" />
           <div className="max-w-4xl mx-auto text-center">
            <div data-gold-underline className="inline-block mb-12">
              <h2 className="text-2xl md:text-3xl font-serif italic text-white" data-split-text>&quot;Soulful Fashion for Soulful Moments&quot;</h2>
            </div>
            
            <div className="relative" data-testimonial>
              <p className="text-3xl md:text-5xl font-light text-neutral-200 mb-12 leading-tight font-serif italic max-w-3xl mx-auto">
                &quot;The craftsmanship at I Meraki is unparalleled. They didn&apos;t just stitch a blouse; they created a piece of art that made my wedding day unforgettable.&quot;
              </p>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-brand-accent/10 flex items-center justify-center mb-6">
                   <Heart fill="currentColor" size={24} className="text-brand-accent" />
                </div>
                <p className="text-brand-accent font-bold text-sm uppercase tracking-[0.4em]">Anjali Nair</p>
                <p className="text-neutral-500 font-light text-xs mt-2 uppercase tracking-widest">Bespoke Bridal Client</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section - Redesigned (Inquiry & Studio) */}
        <section className="py-40 px-4 bg-brand-primary relative border-t border-white/5" data-section-fade>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
               {/* Left Side: Contact Info */}
               <div className="md:col-span-5">
                  <h2 className="text-sm font-semibold text-brand-accent tracking-[0.4em] uppercase mb-8" data-section-label>Get In Touch</h2>
                  <h3 className="text-6xl md:text-7xl font-bold text-white mb-12 font-serif leading-none" data-split-text>The <span className="italic text-brand-accent">Studio</span>.</h3>
                  
                  <div className="space-y-12" data-contact-reveal>
                     <div className="group">
                        <p className="text-neutral-500 text-[10px] uppercase tracking-[0.4em] mb-4 group-hover:text-brand-accent transition-colors">Physical Address</p>
                        <p className="text-xl text-neutral-300 font-light leading-relaxed group-hover:text-white transition-colors">
                           I Meraki Designer Boutique <br />
                           Pathanapuram, Kollam <br />
                           Kerala, India
                        </p>
                     </div>

                     <div className="flex flex-col sm:flex-row gap-12">
                        <div className="group">
                           <p className="text-neutral-500 text-[10px] uppercase tracking-[0.4em] mb-4 group-hover:text-brand-accent transition-colors">Direct Contact</p>
                           <a href="tel:+918075702197" className="text-2xl text-neutral-300 font-serif hover:text-white transition-colors">+91 80757 02197</a>
                        </div>
                        <div className="group">
                           <p className="text-neutral-500 text-[10px] uppercase tracking-[0.4em] mb-4 group-hover:text-brand-accent transition-colors">Email Us</p>
                           <a href="mailto:hello@imeraki.com" className="text-2xl text-neutral-300 font-serif hover:text-white transition-colors underline decoration-brand-accent/30 underline-offset-8">imeraki@studio.com</a>
                        </div>
                     </div>

                     <div className="pt-8">
                        <p className="text-neutral-500 text-[10px] uppercase tracking-[0.4em] mb-6">Connect with us</p>
                        <div className="flex gap-6">
                           {[
                              { icon: <FaInstagram size={20} />, link: "#" },
                              { icon: <FaFacebook size={20} />, link: "#" },
                              { icon: <Mail size={20} />, link: "#" }
                           ].map((social, i) => (
                              <a key={i} href={social.link} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:border-brand-accent hover:text-brand-accent transition-all duration-500">
                                 {social.icon}
                              </a>
                           ))}
                        </div>
                     </div>

                     <div className="pt-12" data-btn-reveal>
                        <a href="https://wa.me/918075702197" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-4 w-full py-6 bg-brand-accent text-black font-bold uppercase tracking-[0.4em] text-xs hover:bg-white transition-colors duration-700 rounded-lg">
                           Book Bespoke Consultation
                        </a>
                     </div>
                  </div>
               </div>

               {/* Right Side: Visual & Map */}
               <div className="md:col-span-7 flex flex-col gap-12">
                  <div className="w-full h-[400px] md:h-[600px] rounded-[2rem] overflow-hidden border border-white/5 relative group" data-contact-reveal>
                     <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700 z-10 pointer-events-none" />
                     <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3935.101740927827!2d76.8617!3d9.0984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05d1bb5b399225%3A0xe21d8b7ea75eac1e!2sPathanapuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1714480629738!5m2!1sen!2sin" 
                        width="100%" 
                        height="100%" 
                        style={{border:0}} 
                        allowFullScreen={false} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="scale-105 group-hover:scale-100 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                     ></iframe>
                     <div className="absolute top-8 left-8 z-20">
                        <div className="bg-brand-primary border border-white/10 px-6 py-3 rounded-full flex items-center gap-3 backdrop-blur-md">
                           <MapPin size={16} className="text-brand-accent" />
                           <span className="text-[10px] uppercase font-bold text-white tracking-widest">Find Us in Pathanapuram</span>
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
