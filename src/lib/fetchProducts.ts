/**
 * APIロジック - Fake Store API から商品データを取得
 * 
 * 実務パターン: API呼び出しは lib/ ディレクトリに分離
 * app/ ディレクトリはページコンポーネントのみに使用
 */

import { Product, ProductList } from '@/types/product';

// APIベースURL (Fake Store API)
const API_BASE = 'https://fakestoreapi.com';

/**
 * 全商品を取得
 * @returns Product[] の配列
 */
export async function fetchProducts(): Promise<ProductList> {
  const response = await fetch(`${API_BASE}/products`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  
  return (await response.json()) as ProductList;
}

/**
 * IDで単一商品を取得
 * @param id 商品ID
 * @returns Product オブジェクト、見つからない場合は null
 */
export async function fetchProductById(id: number): Promise<Product | null> {
  const response = await fetch(`${API_BASE}/products/${id}`);
  
  if (!response.ok) {
    return null;
  }
  
  return (await response.json()) as Product;
}

/**
 * カテゴリで商品をフィルタリング
 * @param category カテゴリ名
 * @returns Product[] の配列
 */
export async function fetchProductsByCategory(category: string): Promise<ProductList> {
  const products = await fetchProducts();
  return products.filter(product => product.category === category);
}

/**
 * 商品を価格の高い順にソート
 * @param products ソートする商品リスト
 * @returns 価格の高い順にソートされた Product[] の配列
 */
export function sortProductsByPriceDesc(products: ProductList): ProductList {
  return [...products].sort((a, b) => b.price - a.price);
}

/**
 * 商品を価格の低い順にソート
 * @param products ソートする商品リスト
 * @returns 価格の低い順にソートされた Product[] の配列
 */
export function sortProductsByPriceAsc(products: ProductList): ProductList {
  return [...products].sort((a, b) => a.price - b.price);
}