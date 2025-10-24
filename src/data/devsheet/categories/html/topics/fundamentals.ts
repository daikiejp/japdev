import type { DevSheetSection } from "../../../index";

export const sections: DevSheetSection[] = [
  {
    id: "basic-structure",
    title: "基本構造",
    description: "HTMLドキュメントの基本的な構造を学びましょう",
    codeBlocks: [
      {
        title: "基本的なHTMLテンプレート",
        language: "html",
        filename: "index.html",
        code: `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ページタイトル</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>こんにちは、世界！</h1>
    <p>これは基本的なHTMLページです。</p>
    <script src="script.js"></script>
</body>
</html>`,
      },
    ],
  },
  {
    id: "common-tags",
    title: "よく使うタグ",
    description: "頻繁に使用されるHTMLタグの例",
    codeBlocks: [
      {
        title: "見出しと段落",
        language: "html",
        filename: "headings.html",
        code: `<!-- 見出しタグ（h1〜h6） -->
<h1>メインタイトル</h1>
<h2>セクションタイトル</h2>
<h3>サブセクション</h3>

<!-- 段落と改行 -->
<p>これは段落テキストです。</p>
<p>改行するには<br>brタグを使います。</p>

<!-- 順序なしリスト -->
<ul>
    <li>リスト項目 1</li>
    <li>リスト項目 2</li>
    <li>リスト項目 3</li>
</ul>

<!-- 順序付きリスト -->
<ol>
    <li>手順 1</li>
    <li>手順 2</li>
    <li>手順 3</li>
</ol>`,
        highlightLines: [2, 7, 11, 18],
      },
      {
        title: "リンクと画像",
        language: "html",
        filename: "links-images.html",
        code: `<!-- リンク -->
<a href="https://example.com">外部リンク</a>
<a href="/about">内部ページへのリンク</a>
<a href="#section">同じページ内のセクションへ</a>
<a href="mailto:info@example.com">メールリンク</a>

<!-- 画像 -->
<img src="image.jpg" alt="画像の説明">
<img src="logo.png" alt="ロゴ" width="200" height="100">

<!-- 図表 -->
<figure>
    <img src="chart.jpg" alt="チャート">
    <figcaption>図1: 売上推移グラフ</figcaption>
</figure>`,
        highlightLines: [2, 8, 12],
      },
    ],
  },
  {
    id: "forms",
    title: "フォーム",
    description: "フォーム要素とバリデーション",
    codeBlocks: [
      {
        title: "基本的なフォーム",
        language: "html",
        filename: "form.html",
        code: `<form action="/submit" method="POST">
    <label for="name">名前:</label>
    <input type="text" id="name" name="name" required>
    
    <label for="email">メール:</label>
    <input type="email" id="email" name="email" required>
    
    <label for="message">メッセージ:</label>
    <textarea id="message" name="message" rows="4"></textarea>
    
    <button type="submit">送信</button>
</form>`,
        highlightLines: [1, 3, 6, 9, 11],
      },
    ],
  },
];
