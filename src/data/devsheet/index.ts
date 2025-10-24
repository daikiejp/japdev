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

export const categories: DevSheetCategory[] = [
  {
    id: "html",
    name: "HTML",
    logo: "/logos/html5.svg",
    description: "HTMLの基礎から応用まで",
    color: "#E34F26",
    topicsCount: 4,
  },
];

export async function getCategoryTopics(
  categoryId: string,
): Promise<DevSheetTopic[]> {
  try {
    const module = await import(`./categories/${categoryId}/topics.ts`);
    return module.topics;
  } catch (error) {
    console.error(`Error loading topics for ${categoryId}:`, error);
    return [];
  }
}

export async function getTopicContent(
  categoryId: string,
  topicId: string,
): Promise<DevSheetSection[]> {
  try {
    const module = await import(
      `./categories/${categoryId}/topics/${topicId}.ts`
    );
    return module.sections;
  } catch (error) {
    console.error(`Error loading content for ${categoryId}/${topicId}:`, error);
    return [];
  }
}

export async function getCategoryWithTopics(categoryId: string) {
  const category = categories.find((c) => c.id === categoryId);
  if (!category) return null;

  const topics = await getCategoryTopics(categoryId);

  return {
    ...category,
    topics,
  };
}
