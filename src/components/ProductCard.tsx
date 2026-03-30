"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group rounded-2xl overflow-hidden bg-neutral-50 hover:bg-white transition-colors duration-300 hover:shadow-2xl hover:shadow-blue-900/10 border border-neutral-100"
    >
      <Link href={`/products/${product.id}`} className="block h-full flex flex-col">
        <div className="relative aspect-square w-fullbg-neutral-100 overflow-hidden bg-white flex items-center justify-center p-8">
          <div className="absolute inset-0 bg-gradient-to-tr from-neutral-100 to-transparent mix-blend-multiply opacity-50 group-hover:opacity-0 transition-opacity"></div>
          {/* We use an img tag with generic placeholder for un-designed image so it doesn't break if src is not found, or use Unsplash */}
          <img
            src={product.image || `https://source.unsplash.com/random/800x800/?appliance,${product.category}`}
            alt={product.name}
            className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-110 transition-transform duration-700 ease-out"
            loading="lazy"
          />
        </div>
        <div className="p-6 flex-grow flex flex-col justify-between">
          <div>
            <p className="text-sm font-medium text-blue-600 mb-1">{product.category}</p>
            <h3 className="text-xl font-bold text-neutral-900 mb-2">{product.name}</h3>
          </div>
          <p className="text-lg font-semibold text-neutral-700 mt-4">${product.price}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
