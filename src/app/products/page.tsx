import { fetchProducts } from "@/lib/fetchProducts";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";

export default async function ProductsPage() {
  let products: Product[] = [];
  let error: string | null = null;

  try {
    products = await fetchProducts();
  } catch (e) {
    console.error("Failed to fetch products:", e);
    error = "商品の読み込みに失敗しました。";
  }

  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Products</h1>
          <p className="text-slate-600">
            全{products.length}件の商品を取り揃えています。
          </p>
        </header>

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg mb-8">
            <p className="font-medium">{error}</p>
          </div>
        )}

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : !error ? (
          <div className="text-center py-16">
            <p className="text-slate-500">商品を読み込んでいます...</p>
          </div>
        ) : null}
      </div>
    </main>
  );
}