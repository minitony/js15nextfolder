/**
 * ProductCard コンポーネント
 * 
 * 商品一覧で使用するカード表示
 * 商品画像、名前、価格、カテゴリ、説明を表示
 * カード全体がリンクになっていて、クリックで詳細ページへ
 */

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  // 価格をフォーマット
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.price);

  return (
    <Link
      href={`/products/${product.id}`}
      className="group block bg-white rounded-lg border border-slate-200 overflow-hidden transition-all duration-150 hover:border-blue-600 hover:shadow-lg hover:-translate-y-0.5"
    >
      {/* 画像エリア */}
      <div className="relative aspect-square bg-slate-50 overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-150"
        />
      </div>

      {/* コンテンツエリア */}
      <div className="p-5">
        {/* カテゴリバッジ */}
        <span className="inline-block text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full mb-3">
          {product.category}
        </span>

        {/* 商品名 */}
        <h3 className="text-base font-semibold text-slate-900 line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors">
          {product.title}
        </h3>

        {/* 説明（2行で切り捨て） */}
        <p className="text-sm text-slate-500 line-clamp-2 mb-4">
          {product.description}
        </p>

        {/* 価格 */}
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-blue-600">
            {formattedPrice}
          </span>

          {/* 詳細リンク */}
          <span className="text-sm font-medium text-slate-500 group-hover:text-blue-600 transition-colors">
            詳細 →
          </span>
        </div>

        {/* 評価（あれば） */}
        {product.rating && (
          <div className="flex items-center gap-1 mt-3 text-xs text-slate-500">
            <span className="text-amber-500">★</span>
            <span>{product.rating.rate.toFixed(1)}</span>
            <span>({product.rating.count} reviews)</span>
          </div>
        )}
      </div>
    </Link>
  );
}