import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/productData";
import { ArrowRight, Scissors } from "lucide-react";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-48 pb-24 px-4 overflow-hidden relative">
      {/* Decorative Text */}
      <div className="absolute top-40 right-[-10vw] text-[15vw] font-black font-serif text-white/[0.03] select-none pointer-events-none rotate-90 origin-center whitespace-nowrap">
        COUTURE GALLERY
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-2xl">
                <h1 className="text-sm font-semibold text-brand-accent tracking-[0.5em] uppercase mb-8">The Collection</h1>
                <div className="inline-block relative">
                    <h2 className="text-6xl md:text-8xl font-serif font-bold tracking-tight mb-4">Our <br /><span className="italic text-brand-accent">Couture</span>.</h2>
                    <div className="h-0.5 bg-brand-accent w-full mt-6" />
                </div>
                <p className="text-xl md:text-2xl text-neutral-400 font-light mt-12 leading-relaxed">
                    Explore our curated collection of bridal masterpieces, designer kurtis, and bespoke evening wear. Every piece is handcrafted with passion and precision.
                </p>
            </div>
            <div className="hidden md:flex flex-col items-end gap-4">
                <div className="w-16 h-16 rounded-full border border-brand-accent/20 flex items-center justify-center text-brand-accent">
                    <Scissors size={24} />
                </div>
                <p className="text-[10px] uppercase font-bold text-neutral-500 tracking-widest text-right">Custom Stitching <br />Available</p>
            </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map(product => (
            <div key={product.id} className="relative group p-4 border border-white/5 rounded-[2.5rem] bg-neutral-950/50 backdrop-blur-sm hover:border-brand-accent/20 transition-all duration-700">
               <ProductCard product={product} />
               <div className="mt-8 flex justify-between items-center px-4 pb-4">
                    <span className="text-[10px] uppercase font-bold text-brand-accent tracking-[0.3em]">{product.category}</span>
                    <button className="text-neutral-500 group-hover:text-white transition-colors">
                        <ArrowRight size={20} />
                    </button>
               </div>
            </div>
          ))}
        </div>

        {/* Custom Order CTA */}
        <section className="mt-40 p-16 md:p-24 bg-neutral-950 rounded-[3rem] border border-brand-accent/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-brand-accent/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                    <h3 className="text-sm font-semibold text-brand-accent tracking-[0.5em] uppercase mb-8">Bespoke Couture</h3>
                    <h4 className="text-5xl font-serif font-bold mb-8 text-white">Can&apos;t find what you&apos;re looking for?</h4>
                    <p className="text-xl text-neutral-400 font-light leading-relaxed">
                        We specialize in custom designer wear tailored exactly to your vision. Book a consultation with our lead designer today.
                    </p>
                </div>
                <div className="flex flex-col gap-6">
                    <a href="/contact" className="inline-flex items-center justify-center gap-4 py-8 px-12 bg-brand-accent text-black font-bold uppercase tracking-[0.4em] text-xs hover:bg-white transition-colors duration-700 rounded-2xl shadow-[0_0_50px_rgba(212,175,55,0.1)]">
                        Book Consultation
                        <ArrowRight size={18} />
                    </a>
                    <p className="text-center text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Estimated Turnaround: 2-3 Weeks</p>
                </div>
            </div>
        </section>
      </div>
    </div>
  );
}
