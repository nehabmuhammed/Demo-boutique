import HeroVideo from "@/components/HeroVideo";
import { Lightbulb, Target, Trophy } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <HeroVideo
        videoSrc="https://www.w3schools.com/html/mov_bbb.mp4"
        title="Innovation Behind Every Appliance"
        subtitle="For over two decades, AuraHome has been redefining what it means to live seamlessly. We design not just for tomorrow, but for a lifetime."
        ctaText="See Our History"
        ctaLink="#history"
      />

      <section id="history" className="py-24 px-4 bg-neutral-50 text-neutral-900 border-b border-neutral-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Vision</h2>
          <p className="text-xl md:text-2xl font-light text-neutral-600 leading-relaxed">
            We believe that technology should serve humanity quietly. Your home appliances shouldn't be complex machines you have to manage; they should be intelligent partners that manage themselves.
          </p>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="text-center">
            <div className="bg-blue-50 w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6">
              <Lightbulb size={40} className="text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Innovation First</h3>
            <p className="text-neutral-600 leading-relaxed">Constant R&D ensures our products feature the absolute cutting edge in both hardware and AI integrations.</p>
          </div>
          <div className="text-center">
            <div className="bg-teal-50 w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6">
              <Target size={40} className="text-teal-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Sustainability Goal</h3>
            <p className="text-neutral-600 leading-relaxed">All of our appliances are built to exceed Energy Star guidelines, reducing our carbon footprint globally.</p>
          </div>
          <div className="text-center">
            <div className="bg-indigo-50 w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6">
              <Trophy size={40} className="text-indigo-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Award-Winning Design</h3>
            <p className="text-neutral-600 leading-relaxed">Our minimalist, timeless designs have won continuous recognition from standard architectural and design boards.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
