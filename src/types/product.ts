/**
 * Product 型定義 - Fake Store API の商品データ構造
 */
export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
}

/**
 * ProductList 型定義 - Product の配列
 */
export type ProductList = Product[];
