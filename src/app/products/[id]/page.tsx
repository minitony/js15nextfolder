import { fetchProductById } from "@/lib/fetchProducts";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/product";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const productId = parseInt(id, 10);
  let product: Product | null = null;
  let error: string | null = null;

  try {
    product = await fetchProductById(productId);
    if (!product) {
      error = "商品が見つかりません。";
    }
  } catch (e) {
    console.error("Failed to fetch product:", e);
    error = "商品の読み込みに失敗しました。";
  }

  if (error || !product) {
    return (
      <main className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-8 rounded-lg text-center">
            <h2 className="text-xl font-bold mb-4">エラー</h2>
            <p className="mb-4">{error || "不明なエラーが発生しました。"}</p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              ← 商品一覧に戻る
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // 価格をフォーマット
  const formattedPrice = new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "USD",
  }).format(product.price);

  return (
    <main className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900"
          >
            ← 商品一覧に戻る
          </Link>
        </div>

        {/* Product Detail */}
        <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm">
          {/* Image */}
          <div className="w-full h-96 relative">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain p-8"
            />
          </div>

          {/* Content */}
          <div className="p-8 space-y-6">
            {/* Title and Price */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-slate-900">{product.title}</h1>
                <p className="mt-2 text-lg text-blue-600 font-semibold">{formattedPrice}</p>
              </div>
              {/* Rating */}
              {product.rating && (
                <div className="flex items-center gap-2 text-amber-500 bg-amber-50 px-3 py-2 rounded-full">
                  <span>★</span>
                  <span className="font-medium">{product.rating.rate.toFixed(1)}</span>
                  <span className="text-sm text-slate-500">({product.rating.count})</span>
                </div>
              )}
            </div>

            {/* Category */}
            <span className="inline-block text-xs font-medium text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full mb-4">
              {product.category}
            </span>

            {/* Description */}
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-700 leading-relaxed">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}