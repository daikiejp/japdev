# JapDev - 開発者向け情報サイト 🚀

<div align="center">

![JapDev](https://img.shields.io/badge/JapDev-開発者向け-10b981)
![Astro](https://img.shields.io/badge/Astro-5.15-FF5D01)
![License](https://img.shields.io/badge/license-MIT-blue)

日本の開発者のための最新情報、チートシート、リソースを提供するプラットフォーム

[デモを見る](https://japdev.vercel.app) | [バグ報告](https://github.com/daikiejp/japdev/issues) | [機能リクエスト](https://github.com/daikiejp/japdev/issues)

</div>

---

## 📚 目次

- [概要](#概要)
- [主な機能](#主な機能)
- [技術スタック](#技術スタック)
- [セットアップ](#セットアップ)
- [プロジェクト構造](#プロジェクト構造)
- [使い方](#使い方)
- [コンテンツの追加](#コンテンツの追加)
- [デプロイ](#デプロイ)
- [コントリビューション](#コントリビューション)
- [ライセンス](#ライセンス)

---

## 概要

**JapDev**は、日本の開発者コミュニティ向けに設計された総合情報プラットフォームです。最新の技術記事、バージョン情報、チートシート、リソース、人気リポジトリを一箇所で確認できます。

### 🎯 プロジェクトの目的

- 日本語での技術情報を集約
- 開発者の学習効率を向上
- コミュニティの知識共有を促進
- モダンな開発環境の提供

---

## 主な機能

### 📰 記事セクション
- QiitaやZennなどの最新技術記事
- タグベースの検索とフィルタリング
- 著者、日付、ソースの表示

### 🔄 最新バージョン
- フレームワーク、ライブラリの最新版情報
- リリースノートへの直接リンク
- NEW/LTSバッジ表示
- GitHubリポジトリへのリンク

### 📖 チートシート（DevSheet）
- **モジュラー設計**で高速パフォーマンス
- HTML、CSS、JavaScript、React、TypeScriptなど
- **Shiki**を使用したシンタックスハイライト
- コードのワンクリックコピー
- 行のハイライト機能
- タブ切り替えでの複数コード例
- セクションへのディープリンク共有

### 🌟 リソース
- カテゴリ別の開発リソース
- ドキュメント、チュートリアル、SaaSツール
- アコーディオン式の表示

### 📈 人気リポジトリ
- トレンドのGitHubリポジトリ
- スター数とトレンド情報
- プログラミング言語表示

### 🔍 検索機能
- 全セクションでリアルタイム検索
- タイトル、説明、タグでのフィルタリング
- 検索結果のカウント表示

---

## 技術スタック

### フレームワーク & ライブラリ

- **[Astro 5.15](https://astro.build/)** - 静的サイトジェネレーター
- **[Tailwind CSS](https://tailwindcss.com/)** - ユーティリティファーストCSSフレームワーク
- **[Shiki](https://shiki.style/)** - シンタックスハイライター

### 主な特徴

- ⚡ **超高速** - Astroの静的サイト生成
- 🎨 **レスポンシブデザイン** - モバイルファースト
- 🌙 **モダンUI** - Tailwind CSSによる美しいデザイン
- 🔍 **SEO最適化** - メタタグ、構造化データ
- ♿ **アクセシビリティ** - WCAG準拠

---

## セットアップ

### 必要条件

- Node.js 18.0以上
- npm または yarn

### インストール

```bash
# リポジトリのクローン
git clone https://github.com/daikiejp/japdev.git

# ディレクトリに移動
cd japdev

# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

開発サーバーは `http://localhost:4321` で起動します。

### ビルド

```bash
# プロダクションビルド
npm run build

# プレビュー
npm run preview
```

---

## プロジェクト構造

```
japdev/
├── public/                     # 静的ファイル
│   └── favicon.svg
├── src/
│   ├── components/            # Astroコンポーネント
│   │   ├── Header.astro       # ヘッダー（ナビゲーション、検索）
│   │   ├── Footer.astro       # フッター
│   │   ├── NavTabs.astro      # タブナビゲーション
│   │   ├── SearchResults.astro # 検索結果表示
│   │   ├── GithubStar.astro   # GitHubスターボタン
│   │   ├── DevSheetSidebar.astro # チートシートサイドバー
│   │   └── CodeBlock.astro    # コードブロック（ハイライト）
│   ├── data/                  # データファイル
│   │   ├── articles.json      # 記事データ
│   │   ├── versions.json      # バージョン情報
│   │   ├── resources.json     # リソースデータ
│   │   ├── repos.json         # リポジトリデータ
│   │   └── devsheet/          # チートシートデータ（モジュラー）
│   │       ├── index.ts       # メタデータと型定義
│   │       └── categories/    # カテゴリ別データ
│   │           ├── html/
│   │           │   ├── topics.ts
│   │           │   └── topics/
│   │           │       ├── fundamentals.ts
│   │           │       ├── flexbox.ts
│   │           │       └── ...
│   │           ├── javascript/
│   │           ├── react/
│   │           └── ...
│   ├── layouts/
│   │   └── Layout.astro       # ベースレイアウト
│   ├── pages/                 # ページファイル（ルーティング）
│   │   ├── index.astro        # ホーム（記事）
│   │   ├── about.astro        # 私たちについて
│   │   ├── versions.astro     # 最新バージョン
│   │   ├── devsheet.astro     # チートシート一覧
│   │   ├── devsheet/
│   │   │   └── [categoryId]/
│   │   │       ├── index.astro
│   │   │       └── [topicId].astro
│   │   ├── resources.astro    # リソース
│   │   └── repos.astro        # リポジトリ
│   └── styles/
│       └── global.css         # グローバルスタイル
├── astro.config.mjs           # Astro設定
├── tailwind.config.mjs        # Tailwind設定
├── tsconfig.json              # TypeScript設定
└── package.json
```

---

## 使い方

### ページ構成

#### 🏠 ホーム `/`
技術記事を表示するメインページ。Qiita、Zennなどの記事へのリンク。

#### 📚 チートシート `/devsheet`
- **一覧ページ**: すべてのカテゴリ（HTML、CSS、JavaScriptなど）
- **カテゴリページ**: `/devsheet/html/fundamentals`など
- **機能**:
  - サイドバーナビゲーション（デスクトップ固定、モバイルドロワー）
  - シンタックスハイライト付きコードブロック
  - コードコピーボタン
  - セクションへのディープリンク共有
  - スムーズスクロール

#### 🔄 最新バージョン `/versions`
フレームワーク、ライブラリの最新バージョン情報とchangelogへのリンク。

#### 🌟 リソース `/resources`
カテゴリ別の開発リソース（ドキュメント、学習サイト、SaaSツールなど）。

#### 📈 人気リポジトリ `/repos`
トレンドのGitHubリポジトリとスター数、週間トレンド情報。

---

## コンテンツの追加

### 記事の追加

`src/data/articles.json` を編集:

```json
{
  "title": "記事のタイトル",
  "source": "Qiita",
  "url": "https://...",
  "date": "2025-10-24",
  "tags": ["React", "TypeScript"],
  "image": "画像URL",
  "description": "記事の説明",
  "author": "著者名"
}
```

### バージョン情報の追加

`src/data/versions.json` を編集:

```json
{
  "name": "React",
  "version": "19.2.0",
  "date": "2025-10-01",
  "description": "説明",
  "status": "new",
  "repoUrl": "GitHubリポジトリURL",
  "changelogUrl": "ChangelogURL"
}
```

### チートシートカテゴリの追加

1. **メタデータを追加** (`src/data/devsheet/index.ts`):

```typescript
{
  id: "python",
  name: "Python",
  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  description: "Pythonの基礎から応用まで",
  color: "#3776AB",
  topicsCount: 3
}
```

2. **トピックリストを作成** (`categories/python/topics.ts`):

```typescript
import type { DevSheetTopic } from '../../index';

export const topics: DevSheetTopic[] = [
  {
    id: "basics",
    name: "基礎",
    description: "Pythonの基本構文"
  }
];
```

3. **コンテンツを作成** (`categories/python/topics/basics.ts`):

```typescript
import type { DevSheetSection } from '../../../index';

export const sections: DevSheetSection[] = [
  {
    id: "variables",
    title: "変数",
    description: "変数の宣言と使い方",
    codeBlocks: [
      {
        language: "python",
        filename: "variables.py",
        code: `# 変数の宣言
name = "太郎"
age = 25`,
        highlightLines: [2, 3]
      }
    ]
  }
];
```

### リソースの追加

`src/data/resources.json` を編集:

```json
{
  "title": "リソース名",
  "desc": "説明",
  "category": "カテゴリ",
  "url": "https://..."
}
```

---

## デプロイ

### Vercel（推奨）

1. GitHubリポジトリをVercelに接続
2. ビルドコマンド: `npm run build`
3. 出力ディレクトリ: `dist`
4. デプロイ！

### Netlify

1. GitHubリポジトリをNetlifyに接続
2. ビルドコマンド: `npm run build`
3. 公開ディレクトリ: `dist`
4. デプロイ！

### Cloudflare Pages

```bash
npm run build
npx wrangler pages deploy dist
```

---

## パフォーマンス

### Lighthouse スコア目標

- 🟢 Performance: 95+
- 🟢 Accessibility: 95+
- 🟢 Best Practices: 95+
- 🟢 SEO: 100

### 最適化

- ✅ 静的サイト生成（SSG）
- ✅ 画像の最適化
- ✅ コードの分割
- ✅ モジュラーデータロード（チートシート）
- ✅ Shikiによるビルド時シンタックスハイライト

---

## コントリビューション

プルリクエストを歓迎します！大きな変更の場合は、まずissueを開いて変更内容を議論してください。

### 開発フロー

1. リポジトリをフォーク
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを開く

### コーディング規約

- **TypeScript**: 型安全性を保つ
- **Astro Components**: `.astro`ファイルを使用
- **スタイリング**: Tailwind CSSユーティリティクラス
- **日本語**: すべてのコンテンツとUIは日本語

---

## ライセンス

このプロジェクトは[MITライセンス](LICENSE)の下で公開されています。

---

## 謝辞

- [Astro](https://astro.build/) - 素晴らしいフレームワーク
- [Tailwind CSS](https://tailwindcss.com/) - ユーティリティファーストCSS
- [Shiki](https://shiki.style/) - シンタックスハイライター
- [DevIcons](https://devicon.dev/) - 開発者アイコン
- コミュニティの皆様

---

## 連絡先

- 作成者：[ダニー・ダビラ（だいきえ）](https://daikie.jp)
- GitHub: [@daikiejp](https://github.com/daikiejp)
- Website: [japdev.com](https://japdev.com)

---

<div align="center">

**⭐ このプロジェクトが役に立ったら、スターをつけてください！**

開発者による、開発者のために ❤️ 作られました

</div>
