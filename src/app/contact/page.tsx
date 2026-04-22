"use client";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-48 pb-24 px-4 overflow-hidden relative">
      {/* Decorative Text */}
      <div className="absolute top-40 right-[-10vw] text-[15vw] font-black font-serif text-white/[0.03] select-none pointer-events-none rotate-90 origin-center whitespace-nowrap">
        STUDIO & INQUIRY
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24">
           <h1 className="text-sm font-semibold text-brand-accent tracking-[0.5em] uppercase mb-8">Get In Touch</h1>
           <div className="inline-block relative">
              <h2 className="text-6xl md:text-8xl font-serif font-bold tracking-tight mb-4">Let&apos;s Create <br /><span className="italic text-brand-accent">Majestic Art</span>.</h2>
              <div className="h-0.5 bg-brand-accent w-full mt-6" />
           </div>
           <p className="text-xl md:text-2xl text-neutral-400 font-light max-w-2xl mt-12 leading-relaxed">
             Whether you have a specific design in mind or need expert guidance for your bridal ensemble, our studio doors are always open for your creative vision.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Contact Form */}
          <div className="bg-neutral-950 p-12 rounded-[2.5rem] border border-white/5 group hover:border-brand-accent/20 transition-all duration-700 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" />
             <h3 className="text-3xl font-serif font-bold mb-10 tracking-wide">Studio Inquiry</h3>
             <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase font-bold text-neutral-500 tracking-widest pl-1">First Name</label>
                  <input type="text" className="w-full bg-neutral-900/50 px-6 py-4 rounded-xl border border-white/10 focus:outline-none focus:border-brand-accent/50 transition-colors text-white placeholder-neutral-700" placeholder="e.g. Anjali" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase font-bold text-neutral-500 tracking-widest pl-1">Last Name</label>
                  <input type="text" className="w-full bg-neutral-900/50 px-6 py-4 rounded-xl border border-white/10 focus:outline-none focus:border-brand-accent/50 transition-colors text-white placeholder-neutral-700" placeholder="e.g. Nair" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase font-bold text-neutral-500 tracking-widest pl-1">Email Address</label>
                <input type="email" className="w-full bg-neutral-900/50 px-6 py-4 rounded-xl border border-white/10 focus:outline-none focus:border-brand-accent/50 transition-colors text-white placeholder-neutral-700" placeholder="hello@studio.com" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase font-bold text-neutral-500 tracking-widest pl-1">Service Required</label>
                <select className="w-full bg-neutral-900/50 px-6 py-4 rounded-xl border border-white/10 focus:outline-none focus:border-brand-accent/50 transition-colors text-white appearance-none">
                    <option className="bg-neutral-900">Bridal Couture Inquiry</option>
                    <option className="bg-neutral-900">Designer Kurti Stitching</option>
                    <option className="bg-neutral-900">Mural & Fabric Painting</option>
                    <option className="bg-neutral-900">Gown Fabrication</option>
                    <option className="bg-neutral-900">General Consultation</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase font-bold text-neutral-500 tracking-widest pl-1">Your Vision</label>
                <textarea rows={5} className="w-full bg-neutral-900/50 px-6 py-4 rounded-xl border border-white/10 focus:outline-none focus:border-brand-accent/50 transition-colors text-white placeholder-neutral-700" placeholder="Describe your dream outfit..."></textarea>
              </div>
              <button type="submit" className="w-full bg-brand-accent hover:bg-white text-black font-bold py-6 px-8 rounded-xl transition-all duration-700 uppercase tracking-[0.4em] text-xs shadow-[0_0_50px_rgba(212,175,55,0.1)]">
                Submit Vision Request
              </button>
            </form>
          </div>

          {/* Contact Details & Map */}
          <div className="space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="group">
                      <div className="w-12 h-12 rounded-full border border-brand-accent/20 flex items-center justify-center text-brand-accent mb-6 group-hover:bg-brand-accent group-hover:text-black transition-all">
                          <Phone size={20} />
                      </div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-2">Call the Boutique</h4>
                      <a href="tel:+918075702197" className="text-2xl font-serif font-bold text-white hover:text-brand-accent transition-colors">+91 80757 02197</a>
                  </div>
                  <div className="group">
                      <div className="w-12 h-12 rounded-full border border-brand-accent/20 flex items-center justify-center text-brand-accent mb-6 group-hover:bg-brand-accent group-hover:text-black transition-all">
                          <Mail size={20} />
                      </div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-2">Email the Studio</h4>
                      <a href="mailto:imeraki@studio.com" className="text-2xl font-serif font-bold text-white hover:text-brand-accent transition-colors underline decoration-brand-accent/20">hello@imeraki.com</a>
                  </div>
              </div>

              <div className="p-12 bg-neutral-950 rounded-[2.5rem] border border-white/5 space-y-8">
                  <div className="flex items-start gap-6">
                      <MapPin size={24} className="text-brand-accent mt-1 flex-shrink-0" />
                      <div>
                          <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-4">Physical Studio</h4>
                          <p className="text-2xl font-serif text-white leading-relaxed">
                             I Meraki Designer Boutique <br />
                             Pathanapuram, Kollam <br />
                             Kerala, 689695
                          </p>
                      </div>
                  </div>
                  <div className="pt-6 border-t border-white/5 flex gap-8">
                        <a href="#" className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-neutral-500 hover:text-brand-accent transition-colors">
                            <FaInstagram size={14} /> Instagram
                        </a>
                        <a href="#" className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-neutral-500 hover:text-brand-accent transition-colors">
                            <FaFacebook size={14} /> Facebook
                        </a>
                  </div>
              </div>

              {/* Map Embed Container */}
              <div className="rounded-[2rem] overflow-hidden border border-white/5 grayscale hover:grayscale-0 transition-all duration-1000 h-[350px] relative">
                  <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.7097072525244!2d76.8564375!3d9.090187499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b067336904a8711%3A0x60cdd71d5627c212!2sI%20Meraki%20designer%20boutique!5e0!3m2!1sen!2sin!4v1776762588366!5m2!1sen!2sin" 
                      width="100%" 
                      height="100%" 
                      style={{border:0}} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
