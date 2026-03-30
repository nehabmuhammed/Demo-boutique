import HeroVideo from "@/components/HeroVideo";
import { Scissors, Sparkles, Star, Palette, Heart, UserCheck, ArrowRight } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: <Scissors size={36} />,
      title: "Signature Stitching",
      description: "Masterful precision for saree blouses, kurtis, and gowns that define grace. Our stitching is known for its flawless structural fit.",
      longDescription: "Our signature stitching process involves multiple measurements and structural analysis to ensure that every garment fits the client like a second skin. We specialize in complex cuts and modern silhouettes.",
      image: "/images/gallery_bridal.png"
    },
    {
      icon: <Sparkles size={36} />,
      title: "Bridal Couture",
      description: "Handcrafted bridal masterpieces detailed with embroidery and royal aesthetics for your special day.",
      longDescription: "We understand that your wedding day is a once-in-a-lifetime event. Our bridal couture services involve deep consultation to create an ensemble that reflects your personality and heritage.",
      image: "/images/bridal_collection.png"
    },
    {
      icon: <Palette size={36} />,
      title: "Mural & Fabric Art",
      description: "Artistic hand-painting and mural work on fabric for a unique designer touch that stands out.",
      longDescription: "I Meraki is an innovator in fabric mural painting. Our artists hand-paint traditional and contemporary designs directly onto your chosen fabric, making every piece a unique masterpiece.",
      image: "/images/fabric_painting.png"
    },
    {
      icon: <Star size={36} />,
      title: "Bespoke Design",
      description: "Consultation-led custom designs for high-profile weddings and prestigious special events.",
      longDescription: "For those who seek the extraordinary, our bespoke design service offers a complete creative collaboration with our lead designers from concept to final fitting.",
      image: "/images/bridal_detail.png"
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <HeroVideo
        posterSrc="/images/gallery_outfit.png"
        title="Our Couture Services"
        subtitle="Experience the art of bespoke fashion with our range of signature services."
        ctaText="Book Appointment"
        ctaLink="/contact"
        overlayOpacity={0.7}
      />

      {/* Services List */}
      <section className="py-40 px-4 bg-black overflow-hidden relative">
        <div className="absolute top-40 right-[-10vw] text-[20vw] font-black font-serif text-white/[0.02] select-none pointer-events-none rotate-90 origin-center whitespace-nowrap">
          ATELIER SERVICES
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-32">
              <h2 className="text-sm font-semibold text-brand-accent tracking-[0.5em] uppercase mb-8">The Atelier</h2>
              <div className="inline-block relative">
                   <h3 className="text-6xl md:text-8xl font-serif font-bold tracking-tight mb-4">The Art of <br /><span className="italic text-brand-accent">Couture</span>.</h3>
                   <div className="h-0.5 bg-brand-accent w-full mt-6" />
              </div>
          </div>

          <div className="space-y-48">
            {services.map((service, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-24 items-center group`}>
                <div className="w-full md:w-1/2 relative">
                   <div className="aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 group-hover:border-brand-accent/30 transition-colors duration-1000 shadow-2xl relative">
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-1000" />
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" />
                      <div className="absolute top-8 left-8 text-7xl font-serif text-brand-accent/50 group-hover:text-brand-accent transition-colors duration-1000 select-none">
                         0{index + 1}
                      </div>
                   </div>
                </div>
                <div className="w-full md:w-1/2 space-y-10">
                   <div className="w-16 h-16 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-black transition-all duration-700">
                      {service.icon}
                   </div>
                   <h4 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-white group-hover:text-brand-accent transition-colors duration-700">{service.title}</h4>
                   <p className="text-xl text-neutral-400 font-light leading-relaxed">
                      {service.description}
                   </p>
                   <p className="text-neutral-500 font-light leading-relaxed">
                      {service.longDescription}
                   </p>
                   <div className="pt-8">
                        <a href="/contact" className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.4em] text-brand-accent hover:text-white transition-colors group-hover:translate-x-4 transition-transform duration-700">
                            Enquire Now <ArrowRight size={18} />
                        </a>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Callout */}
      <section className="py-40 bg-neutral-950 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
               <Heart size={48} className="mx-auto text-brand-accent mb-8" />
               <h3 className="text-4xl md:text-5xl font-serif font-bold italic text-white tracking-tight leading-relaxed">
                  &quot;We don&apos;t just stitch clothes; we craft your dreams into reality, with every thread infused with love.&quot;
               </h3>
               <p className="text-brand-accent font-bold text-sm uppercase tracking-[0.4em]">The Meraki Philosophy</p>
          </div>
      </section>
    </div>
  );
}
