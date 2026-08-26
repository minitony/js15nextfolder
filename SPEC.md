# SPEC.md - Next.js ミニアプリ「PRODUCT CATALOG」

## 1. Concept & Vision

Next.js のフォルダベースルーティングとTypeScriptの型安全な開発を学習するための小さな商品カタログアプリ。実務で通用するフォルダ構成を意識し、APIロジック・型定義・UIコンポーネントを分離した保守性の高いコードベースを実現。シンプルでモダン、清潔感のあるUIで、Next.js の基本機能を網羅的に体験できる。

## 2. Design Language

### Aesthetic Direction
ミニマルでモダン、インダストリアルすぎないクリーンなECサイト風デザイン

### Color Palette (Tailwind CSS)
| Role | Tailwind Class | Usage |
|------|-------|-------|
| Primary | `blue-600` (#2563EB) | ボタン、リンク、アクセント |
| Secondary | `slate-500` (#64748B) | 本文、サブテキスト |
| Accent | `emerald-500` (#10B981) | 成功状態、バッジ |
| Background | `slate-50` (#F8FAFC) | ページ背景 |
| Surface | `white` (#FFFFFF) | カード背景 |
| Text Primary | `slate-900` (#0F172A) | 見出し、本文 |
| Text Secondary | `slate-500` (#64748B) | 補足情報 |
| Border | `slate-200` (#E2E8F0) | 区切り線、カードの輪郭 |

### Typography
- **Font Family**: `Inter, -apple-system, BlinkMacSystemFont, sans-serif`
- **Headings**: font-weight 700, tracking tight
- **Body**: font-weight 400, leading relaxed

### Spatial System
- Base unit: 4px
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64px
- Card padding: 24px (p-6)
- Page max-width: 1280px (max-w-7xl)

### Motion Philosophy
- Subtle hover transitions (`transition-all duration-150`)
- Card hover: subtle lift with shadow

## 3. Layout & Structure

### ページ構成
```
src/
├── app/
│   ├── layout.tsx        # ルートレイアウト（Header含む）
│   ├── page.tsx          # ホーム（商品一覧）
│   ├── about/
│   │   └── page.tsx      # Aboutページ
│   └── products/
│       ├── page.tsx      # 商品一覧
│       └── [id]/
│           └── page.tsx  # 商品詳細
├── components/
│   ├── Header.tsx        # ナビゲーション
│   └── ProductCard.tsx   # 商品カード
├── lib/
│   └── fetchProducts.ts  # API取得ロジック
└── types/
    └── product.ts        # Product型の定義
```

### 各ページの役割
- `/` - ダッシュボード的トップ（Hero + 商品一覧の短縮版）
- `/about` - アプリの説明ページ
- `/products` - 全商品一覧ページ
- `/products/[id]` - 商品詳細ページ

### Responsive Strategy
- Mobile-first approach
- Breakpoints: sm(640px), md(768px), lg(1024px)
- Grid: 1col (mobile) → 2col (tablet) → 3-4col (desktop)

## 4. Features & Interactions

### コア機能

#### 商品一覧表示
- 商品カードグリッドで表示
- 各カード: 商品画像、名前、価格、カテゴリバッジ
- カードホバー: 影が増え、少し浮き上がる
- カードクリック: 商品詳細ページへ遷移

#### 商品詳細表示
- 大きな商品画像表示
- 商品名、価格、カテゴリ
- 詳細な説明文
- レーティング表示
- 「一覧に戻る」リンク

#### Aboutページ
- アプリの説明
- 技術スタックの紹介
- フォルダ構成の説明

#### ナビゲーション
- ヘッダーにLogo + ナビリンク（Home, About, Products）
- 現在ページのアンダーライン表示
- モバイルではハンバーガーメニュー（簡略化）

### データ
**Fake Store API (https://fakestoreapi.com/products) から商品データを取得。**
- `GET /products` - 全商品取得
- `GET /products/{id}` - 単一商品取得

## 5. Component Inventory

### Header.tsx
- Logoテキスト（リンク）
- ナビリンク3つ（Home, About, Products）
- 現在ページのハイライト（アクティブ状態）
- ホバー: テキストカラー変化
- 背景: 白、下部にborder

### ProductCard.tsx
**Props:**
```typescript
interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
}
```

**States:**
- Default: 白背景、軽いborder、影なし
- Hover: 影增加、transform: translateY(-2px)、border-primary

**表示:**
- 商品画像（aspect-square、object-contain）
- 商品名（h3）
- カテゴリバッジ（small pill）
- 価格（font-bold、text-blue-600）
- 説明文（2行で切り捨て）
- 詳細リンク

## 6. Technical Approach

### Stack
- Next.js 15 (App Router)
- TypeScript
- **Tailwind CSS**
- ESLint

### 型定義 (types/product.ts)
```typescript
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

export type ProductList = Product[];
```

### APIロジック (lib/fetchProducts.ts)
```typescript
import { Product, ProductList } from '@/types/product';

const API_BASE = 'https://fakestoreapi.com';

// 商品一覧取得
export async function fetchProducts(): Promise<ProductList>;

// 単一商品取得
export async function fetchProductById(id: number): Promise<Product | null>;
```

### フェーズ分け実装計画

#### Phase 1: プロジェクト基盤
1. Next.jsプロジェクト作成
2. 型定義ファイル作成
3. APIロジックファイル作成

#### Phase 2: UIコンポーネント
4. Headerコンポーネント作成
5. ProductCardコンポーネント作成

#### Phase 3: ページ実装
6. layout.tsx（ルートレイアウト）
7. page.tsx（ホーム）
8. about/page.tsx
9. products/page.tsx
10. products/[id]/page.tsx

#### Phase 4: 動作確認
11. 全ページの動作確認
12. 型エラーがないかの確認

## 7. Folder Architecture (Learning Goals)

学習目的として、各フォルダの責務を明確にする:

| フォルダ | 責務 | 含むべきもの | 含めないもの |
|---------|------|-------------|-------------|
| `src/app/` | ルーティング・ページ | page.tsx, layout.tsx, loading.tsx | API呼び出し、UIロジック |
| `src/components/` | 再利用可能なUI | ヘッダー、カード等の部品 | データ取得、ページ固有ロジック |
| `src/lib/` | ビジネスロジック・API | fetch関数、ヘルパー関数 | JSX、UI関連 |
| `src/types/` | TypeScript型定義 | interface、type | 実装コード |

この構成により、**関心の分離 (Separation of Concerns)** を実現。
