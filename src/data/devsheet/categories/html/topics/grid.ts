import type { DevSheetSection } from "../../../index";

export const sections: DevSheetSection[] = [
  {
    id: "grid-basics",
    title: "Gridの基本",
    description: "CSS Gridレイアウトの基礎",
    codeBlocks: [
      {
        title: "基本的なGridレイアウト",
        language: "html",
        filename: "grid-basic.html",
        tabs: [
          {
            label: "HTML",
            code: `<div class="grid-container">
    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>
    <div class="grid-item">5</div>
    <div class="grid-item">6</div>
</div>`,
            language: "html",
          },
          {
            label: "CSS",
            code: `.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 1rem;
}

.grid-item {
    padding: 2rem;
    background: #e0e0e0;
    border-radius: 8px;
    text-align: center;
}`,
            language: "css",
          },
        ],
        code: "",
      },
    ],
  },
];
