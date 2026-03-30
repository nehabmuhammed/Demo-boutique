import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/productData";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-neutral-50 pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold tracking-tight text-neutral-900 mb-8">Our Appliances</h1>
        <p className="text-xl text-neutral-600 max-w-2xl mb-16">
          Browse our entire collection of state-of-the-art home appliances. Every product is engineered for exceptional performance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
