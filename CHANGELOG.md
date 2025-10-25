# Changelog - 変更履歴

このプロジェクトのすべての重要な変更は、このファイルに記録されます。

フォーマットは[Keep a Changelog](https://keepachangelog.com/ja/1.0.0/)に基づいており、
このプロジェクトは[セマンティックバージョニング](https://semver.org/lang/ja/)に従います。

## [2.0.0] - 2025-10-25

### 🎉 メジャーリリース - アーキテクチャの全面改修

これはメジャーリリースであり、保守性、パフォーマンス、開発者体験の向上に焦点を当てた破壊的変更を含みます。

### ⚠️ 破壊的変更

- **データフォーマットの移行**: すべてのDevSheetコンテンツをTypeScript（`.ts`）からJSON（`.json`）に移行
  - `src/data/devsheet/index.ts` → 削除
  - `src/data/devsheet/*/topics.ts` → `topics.json`
  - `src/data/devsheet/*/topics/*.ts` → `*.json`
- **インポートパス**: すべてのインポートパスを`data/devsheet/index`から`utils/devsheet`に更新
- **ファイル構造**: 関心の分離を伴うプロジェクト構造の再編成

### ✨ 追加

#### 型システム
- 専用の型定義ファイルを追加: `src/types/devsheet.ts`
  - `DevSheetCategory` インターフェース
  - `DevSheetTopic` インターフェース
  - `DevSheetSection` インターフェース
  - `CodeBlock` インターフェース

#### ユーティリティ
- ユーティリティ関数ファイルを追加: `src/utils/devsheet.ts`
  - `getCategoryTopics()` - カテゴリのトピックを読み込む
  - `getTopicContent()` - トピックのセクションを読み込む
  - `getCategoryWithTopics()` - すべてのトピックを含むカテゴリを読み込む

#### データ構造
- `src/data/devsheet/categories.json`を追加 - 中央カテゴリメタデータ
- すべてのトピックとセクションのJSONファイルを追加:
  - `html/topics.json`
  - `html/topics/fundamentals.json`
  - `html/topics/flexbox.json`
  - `html/topics/grid.json`
  - `html/topics/semantics.json`

#### 機能
- **GitHubスター数の表示**: バージョンページにスター数を追加
  - K表記でフォーマット（例: 54.1K）
  - 魅力的なビジュアルデザインの黄色い星アイコン
  - `versions.json`の`stars`フィールドを使用
  
- **カテゴリインデックスページ**: `/devsheet/[categoryId]`の新デザイン
  - トピックの美しいカードレイアウト
  - トピック一覧を直接表示（リダイレクトなし）
  - パンくずナビゲーション
  - ユーザー体験の向上

### 🔄 変更

#### アーキテクチャ
- **関心の分離**: 型、ロジック、データのクリーンな分離
  - 型: `src/types/`
  - ビジネスロジック: `src/utils/`
  - データ: `src/data/`
  
- **JSON優先アプローチ**: すべてのコンテンツをJSON形式に
  - 編集とメンテナンスが容易
  - コンテンツにTypeScriptコンパイルが不要
  - 非技術的な貢献者にとって最適

#### ページ
- `src/pages/devsheet.astro`を新しいutilsを使用するように更新
- `src/pages/devsheet/[categoryId]/index.astro`を更新:
  - 自動リダイレクトを削除
  - トピック一覧ビューを追加
  - レイアウトとデザインを改善
- `src/pages/devsheet/[categoryId]/[topicId].astro`を新しいutilsを使用するように更新
- `src/pages/versions.astro`を更新:
  - スター数の表示を追加
  - ビジュアルデザインを強化

### 🚀 改善

- **パフォーマンス**: TypeScriptの代わりにJSONを使用して、ビルド時間を短縮
- **開発者体験**: より明確なプロジェクト構造
- **保守性**: コンテンツの追加と更新が容易
- **スケーラビリティ**: 将来の成長に向けてより適切に準備
- **型安全性**: 一元化された型定義で維持

### 🗑️ 削除・非推奨

- `src/data/devsheet/index.ts`を削除
- `categories/`内のすべてのTypeScriptデータファイルを削除
- カテゴリページからの自動リダイレクトロジックを削除
- データファイルからの冗長な型定義を削除
- **非推奨**: `/repos`ページ（人気リポジトリ）を非推奨に
  - 代わりにバージョンページのGitHubリンクを使用
  - コンテンツの重複を削減
  - よりシンプルなナビゲーション

### 📝 ドキュメント

- README.mdをv2.0.0情報で更新
- 詳細な移行ガイドを追加
- プロジェクト構造のドキュメントを更新
- JSON例を使用して「コンテンツの追加」セクションを強化
- changelogセクションを追加

### 🐛 バグ修正

- すべてのページのインポートパスを修正
- カテゴリナビゲーションフローを修正
- データ読み込み関数のエラーハンドリングを改善

### 🔧 技術詳細

**変更前（v1.0.0）**:
```
src/data/devsheet/
├── index.ts                    # 型 + データ + ロジック
└── categories/
    └── html/
        ├── topics.ts           # TypeScript
        └── topics/
            ├── fundamentals.ts # TypeScript
            └── ...
```

**変更後（v2.0.0）**:
```
src/
├── types/
│   └── devsheet.ts            # 型のみ
├── utils/
│   └── devsheet.ts            # ロジックのみ
└── data/
    └── devsheet/
        ├── categories.json     # データのみ
        └── html/
            ├── topics.json         # JSON
            └── topics/
                ├── fundamentals.json  # JSON
                └── ...
```

### 📊 移行ガイド

#### 開発者向け

1. **インポートを更新**:
```typescript
// 旧
import { categories, getCategoryTopics } from '../data/devsheet/index';

// 新
import { categories, getCategoryTopics } from '../utils/devsheet';
```

2. **データファイルを更新**:
```bash
# TypeScriptをJSONに変換
# 型のインポートを削除
# export constをJSON配列/オブジェクトに変換
```

3. **型の参照を更新**:
```typescript
// 旧
import type { DevSheetTopic } from '../../index';

// 新
import type { DevSheetTopic } from '../types/devsheet';
```

#### コンテンツ貢献者向け

- TypeScriptの知識が不要に
- JSONファイルを直接編集
- よりシンプルな貢献プロセス
- 明確なデータ構造

---

## [1.0.0] - 2025-10-24

### 🎉 初回リリース

JapDevプラットフォームの最初の公開リリース。

### ✨ 機能

#### コアページ
- **ホームページ**（`/`）: 検索機能付きの記事一覧
- **バージョンページ**（`/versions`）: フレームワークの最新バージョン
- **チートシート**（`/devsheet`）: インタラクティブなチートシート
- **リソース**（`/resources`）: 開発リソース
- **リポジトリ**（`/repos`）: 人気のGitHubリポジトリ
- **私たちについて**（`/about`）: プロジェクトについて

#### 記事セクション
- QiitaとZennとの統合
- タグベースのフィルタリング
- リアルタイム検索
- 著者と日付の表示
- 元の記事への外部リンク

#### チートシート（DevSheet）
- **カテゴリ**: HTML、CSS、JavaScript、React、TypeScript
- **機能**:
  - Shikiによるシンタックスハイライト
  - コードコピーボタン
  - 行のハイライト
  - タブ付きコード例
  - セクションへのディープリンク
  - サイドバーナビゲーション（デスクトップ/モバイル）
  - スムーズスクロール
  - 前/次のナビゲーション

#### バージョン追跡
- 人気フレームワークの最新バージョン情報
- changelogへのリンク
- NEW/LTSバッジ
- リリース日の表示
- GitHubリポジトリへのリンク

#### リソースディレクトリ
- カテゴリ別の開発リソース
- ドキュメントリンク
- 学習教材
- SaaSツール
- アコーディオンスタイルの表示

#### 検索機能
- 全セクションでのグローバル検索
- リアルタイムフィルタリング
- 検索結果のカウント
- URLでのクエリ保持

#### UI/UX
- **レスポンシブデザイン**: モバイルファーストアプローチ
- **モダンデザイン**: クリーンでプロフェッショナルなインターフェース
- **ナビゲーション**: ヘッダーとタブによる直感的なナビゲーション
- **アクセシビリティ**: WCAG準拠
- **ダークモード対応**: ユーザー設定に基づく自動切り替え

#### 技術スタック
- **Astro 5.15**: 静的サイトジェネレーター
- **Tailwind CSS**: ユーティリティファーストCSS
- **Shiki**: シンタックスハイライター
- **TypeScript**: 型安全性

#### パフォーマンス
- 静的サイト生成（SSG）
- 最小限のJavaScript
- 最適化された画像
- 高速ページロード
- SEO最適化

#### データ構造
- JSON形式のデータ管理
- モジュラーデータ構造
- 簡単なコンテンツ更新

### 📝 ドキュメント
- 包括的なREADME
- セットアップ手順
- コントリビューションガイドライン
- プロジェクト構造の説明

### 🎨 デザイン
- エメラルドグリーンを主色としたカラースキーム
- カードベースのレイアウト
- ホバー効果とトランジション
- アイコンとビジュアル要素
- レスポンシブグリッドシステム

---

## リリースノート

### v2.0.0 vs v1.0.0 の主な違い

| 項目 | v1.0.0 | v2.0.0 |
|------|--------|--------|
| データ形式 | TypeScript (`.ts`) | JSON (`.json`) |
| 型定義 | データファイル内 | `src/types/` に分離 |
| ロジック | データファイル内 | `src/utils/` に分離 |
| カテゴリページ | 自動リダイレクト | トピック一覧を表示 |
| スター数表示 | なし | あり（K形式） |
| 人気リポジトリページ | あり | 非推奨 |
| メンテナンス性 | 良好 | 優秀 |
| 貢献のしやすさ | TypeScript必須 | JSON編集のみ |

### アップグレード推奨

v1.0.0からv2.0.0へのアップグレードを強く推奨します。以下の利点があります：

- ✅ より速いビルド時間
- ✅ 簡単なコンテンツ管理
- ✅ より良い開発者体験
- ✅ クリーンなコードベース
- ✅ スケーラビリティの向上

### サポート

- v2.0.0: 🟢 アクティブサポート
- v1.0.0: 🔴 サポート終了（2025-10-25）

---

**注意**: このプロジェクトは活発に開発中です。機能の追加や変更は予告なく行われる可能性があります。

**フィードバック**: 問題や提案がある場合は、[GitHub Issues](https://github.com/daikiejp/japdev/issues)で報告してください。
