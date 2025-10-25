export interface DevSheetCategory {
  id: string;
  name: string;
  logo: string;
  description: string;
  color: string;
  topicsCount?: number;
}

export interface DevSheetTopic {
  id: string;
  name: string;
  description?: string;
}

export interface DevSheetSection {
  id: string;
  title: string;
  description?: string;
  codeBlocks: CodeBlock[];
}

export interface CodeBlock {
  title?: string;
  language: string;
  filename?: string;
  code: string;
  highlightLines?: number[];
  tabs?: {
    label: string;
    code: string;
    language?: string;
  }[];
}
