"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group overflow-hidden bg-neutral-950 border border-white/5 hover:border-brand-accent/30 transition-all duration-700 rounded-3xl"
    >
      <div className="block h-full flex flex-col">
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-900">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700 z-10"></div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
            loading="lazy"
          />
          <div className="absolute top-6 right-6 z-20">
             <div className="bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
                <p className="text-[10px] font-bold text-brand-accent uppercase tracking-widest">Premium</p>
             </div>
          </div>
        </div>
        <div className="p-8 flex-grow flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex justify-between items-start">
               <div>
                  <p className="text-[10px] font-bold text-brand-accent mb-2 uppercase tracking-[0.2em]">{product.category}</p>
                  <h3 className="text-2xl font-serif font-bold text-white group-hover:text-brand-accent transition-colors duration-500 leading-tight">{product.name}</h3>
               </div>
            </div>
            {product.description && (
               <p className="text-neutral-500 text-sm font-light line-clamp-2 leading-relaxed">{product.description}</p>
            )}
          </div>
          <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
            <p className="text-xl font-serif font-bold text-white">₹{product.price.toLocaleString('en-IN')}</p>
            <Link href="/contact" className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 hover:text-brand-accent transition-colors">Enquire</Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
