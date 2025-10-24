import type { DevSheetSection } from "../../../index";

export const sections: DevSheetSection[] = [
  {
    id: "flex-basics",
    title: "Flexboxの基本",
    description: "Flexboxレイアウトの基本的な使い方",
    codeBlocks: [
      {
        title: "基本的なFlexコンテナ",
        language: "html",
        filename: "flexbox-basic.html",
        tabs: [
          {
            label: "HTML",
            code: `<div class="flex-container">
    <div class="flex-item">アイテム 1</div>
    <div class="flex-item">アイテム 2</div>
    <div class="flex-item">アイテム 3</div>
</div>`,
            language: "html",
          },
          {
            label: "CSS",
            code: `.flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: #f0f0f0;
}

.flex-item {
    flex: 1;
    padding: 1rem;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}`,
            language: "css",
          },
        ],
        code: "",
      },
      {
        title: "Flex方向とラッピング",
        language: "css",
        filename: "flex-direction.css",
        code: `/* 横並び（デフォルト） */
.flex-row {
    display: flex;
    flex-direction: row;
}

/* 縦並び */
.flex-column {
    display: flex;
    flex-direction: column;
}

/* 折り返しあり */
.flex-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

/* 折り返しなし（デフォルト） */
.flex-nowrap {
    display: flex;
    flex-wrap: nowrap;
}`,
        highlightLines: [2, 8, 14, 21],
      },
    ],
  },
  {
    id: "flex-alignment",
    title: "配置とスペース",
    description: "要素の配置とスペース調整の方法",
    codeBlocks: [
      {
        title: "主軸と交差軸の配置",
        language: "css",
        filename: "flex-alignment.css",
        code: `/* 主軸方向の配置 */
.justify-start {
    display: flex;
    justify-content: flex-start; /* 左揃え */
}

.justify-center {
    display: flex;
    justify-content: center; /* 中央揃え */
}

.justify-end {
    display: flex;
    justify-content: flex-end; /* 右揃え */
}

.justify-between {
    display: flex;
    justify-content: space-between; /* 両端揃え */
}

.justify-around {
    display: flex;
    justify-content: space-around; /* 均等配置 */
}

/* 交差軸方向の配置 */
.align-start {
    display: flex;
    align-items: flex-start; /* 上揃え */
}

.align-center {
    display: flex;
    align-items: center; /* 中央揃え */
}

.align-end {
    display: flex;
    align-items: flex-end; /* 下揃え */
}`,
        highlightLines: [4, 9, 14, 19, 24, 30, 35, 40],
      },
    ],
  },
];
