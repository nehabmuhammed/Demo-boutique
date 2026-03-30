import { products } from "@/lib/productData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Video } from "lucide-react";
import HeroVideo from "@/components/HeroVideo";

type Props = {
  params: { id: string }
}

export default function ProductDetailPage({ params }: Props) {
  const product = products.find(p => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Product Hero */}
      <div className="max-w-7xl mx-auto px-4 pt-32 pb-16">
        <Link href="/products" className="inline-flex items-center text-neutral-500 hover:text-neutral-900 mb-8 transition-colors">
          <ArrowLeft size={20} className="mr-2" /> Back to Products
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="bg-neutral-50 rounded-3xl p-12 aspect-square flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
            <img 
              src={product.image || `https://source.unsplash.com/random/800x800/?appliance,${product.category}`} 
              alt={product.name} 
              className="w-full h-full object-contain relative z-10 transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          
          <div className="flex flex-col">
            <p className="text-blue-600 font-semibold tracking-wide uppercase mb-3">{product.category}</p>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-neutral-900 tracking-tight mb-6 mt-2">{product.name}</h1>
            <p className="text-2xl text-neutral-600 leading-relaxed mb-8">{product.description}</p>
            <div className="text-4xl font-bold text-neutral-900 mb-8">${product.price}</div>
            
            <div className="space-y-4 mb-10">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Key Features</h3>
              {product.features.map((feature, idx) => (
                <div key={idx} className="flex items-center text-neutral-700 text-lg">
                  <CheckCircle size={24} className="text-green-500 mr-4 flex-shrink-0" />
                  {feature}
                </div>
              ))}
            </div>

            <button className="bg-neutral-900 text-white hover:bg-neutral-800 rounded-full py-5 px-10 text-xl font-bold transition-transform hover:-translate-y-1 shadow-xl max-w-sm w-full">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Product Video Showcase */}
      <div className="mt-16 border-t border-neutral-100">
        <HeroVideo 
          videoSrc="https://www.w3schools.com/html/mov_bbb.mp4"
          title={`${product.name} in Action`}
          subtitle={`Experience the powerful features and sleek design of your new ${product.category.toLowerCase().slice(0, -1)}.`}
          ctaText="Explore Specifications"
          ctaLink="#specs"
          overlayOpacity={
            0.7
          }
        />
      </div>
    </div>
  );
}
