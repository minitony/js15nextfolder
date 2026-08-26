import { fetchProducts } from "@/lib/fetchProducts";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { Product } from "@/types/product";

export default async function Home() {
  let products: Product[] = [];
  try {
    products = await fetchProducts();
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }

  return (
    <main className="space-y-12">
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-center text-slate-900 mb-6">
            Product Catalog
          </h1>
          <p className="text-lg text-center text-slate-600 max-w-2xl mx-auto">
            Next.js 15 と TypeScript を学習するための商品カタログアプリです。
            フォルダ構成に注目して、実務で通用する設計を学びましょう。
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <Link
              href="/about"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              About this App
            </Link>
            <Link
              href="/products"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      {products.length > 0 ? (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-8">
              Featured Products
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.slice(0, 8).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-slate-500">商品を読み込んでいます...</p>
          </div>
        </section>
      )}
    </main>
  );
}
