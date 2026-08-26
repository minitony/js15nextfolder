import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">About This App</h1>
          <p className="text-lg text-slate-600">
            Next.js 15 と TypeScript の学習を目的とした商品カタログアプリ
          </p>
        </header>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Tech Stack</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-2">Framework</h3>
              <p className="text-slate-600">Next.js 15 (App Router)</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-2">Language</h3>
              <p className="text-slate-600">TypeScript</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-2">Styling</h3>
              <p className="text-slate-600">Tailwind CSS</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-2">API</h3>
              <p className="text-slate-600">Fake Store API</p>
            </div>
          </div>
        </section>

        {/* Folder Structure */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Folder Structure</h2>
          <div className="bg-slate-900 text-slate-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
            <pre>{`src/
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
    └── product.ts        # Product型の定義`}</pre>
          </div>
        </section>

        {/* Architecture Principles */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Architecture Principles</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-2">Separation of Concerns</h3>
              <p className="text-slate-600">
                各フォルダには明確な責務があります：
                <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">app/</code> はルーティング・ページのみ、
                <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">components/</code> は再利用可能なUI、
                <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">lib/</code> はビジネスロジック・API、
                <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">types/</code> は型定義のみ。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-2">Type Safety</h3>
              <p className="text-slate-600">
                TypeScript の型定義を <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">types/</code> に集約し、
                API レスポンスの型安全性を確保。<code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">lib/</code> の関数も
                明示的な戻り値の型を持つ。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-2">Server Components by Default</h3>
              <p className="text-slate-600">
                Next.js 15 ではデフォルトで Server Components。データ取得はサーバー側で行い、
                クライアント側の JavaScript バンドルサイズを最小化。必要な場合のみ
                <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">"use client"</code> を使用。
              </p>
            </div>
          </div>
        </section>

        {/* Learning Goals */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Learning Goals</h2>
          <ul className="space-y-3">
            <li className="bg-white p-4 rounded-lg border border-slate-200 flex items-start gap-3">
              <span className="text-blue-600 font-bold text-lg">1.</span>
              <span className="text-slate-600">Next.js App Router のフォルダベースルーティングを理解する</span>
            </li>
            <li className="bg-white p-4 rounded-lg border border-slate-200 flex items-start gap-3">
              <span className="text-blue-600 font-bold text-lg">2.</span>
              <span className="text-slate-600">TypeScript での型安全な開発パターンを学ぶ</span>
            </li>
            <li className="bg-white p-4 rounded-lg border border-slate-200 flex items-start gap-3">
              <span className="text-blue-600 font-bold text-lg">3.</span>
              <span className="text-slate-600">実務レベルのフォルダ構成・関心の分離を体験する</span>
            </li>
            <li className="bg-white p-4 rounded-lg border border-slate-200 flex items-start gap-3">
              <span className="text-blue-600 font-bold text-lg">4.</span>
              <span className="text-slate-600">Server Components と Client Components の使い分けを理解する</span>
            </li>
            <li className="bg-white p-4 rounded-lg border border-slate-200 flex items-start gap-3">
              <span className="text-blue-600 font-bold text-lg">5.</span>
              <span className="text-slate-600">Tailwind CSS を使ったモダンなスタイリングを実践する</span>
            </li>
          </ul>
        </section>

        {/* Back Link */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}