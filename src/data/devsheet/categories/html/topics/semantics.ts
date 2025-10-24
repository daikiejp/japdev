import type { DevSheetSection } from "../../../index";

export const sections: DevSheetSection[] = [
  {
    id: "semantic-tags",
    title: "セマンティックタグ",
    description: "意味のあるHTMLタグを使用する",
    codeBlocks: [
      {
        language: "html",
        filename: "semantic.html",
        code: `<header>
    <nav>
        <ul>
            <li><a href="/">ホーム</a></li>
            <li><a href="/about">私たちについて</a></li>
            <li><a href="/contact">お問い合わせ</a></li>
        </ul>
    </nav>
</header>

<main>
    <article>
        <h1>記事タイトル</h1>
        <p class="meta">
            <time datetime="2025-10-24">2025年10月24日</time>
            著者: 太郎
        </p>
        <p>記事の内容がここに入ります...</p>
    </article>
    
    <aside>
        <h2>関連情報</h2>
        <ul>
            <li><a href="#">関連記事1</a></li>
            <li><a href="#">関連記事2</a></li>
        </ul>
    </aside>
</main>

<footer>
    <p>&copy; 2025 会社名. All rights reserved.</p>
</footer>`,
        highlightLines: [1, 2, 8, 9, 11, 12, 19, 21, 27, 28, 30, 32],
      },
    ],
  },
];
