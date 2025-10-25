import type {
  DevSheetTopic,
  DevSheetSection,
  DevSheetCategory,
} from "../types/devsheet";
import categoriesData from "../data/devsheet/categories.json";

export const categories = categoriesData as DevSheetCategory[];

export async function getCategoryTopics(
  categoryId: string,
): Promise<DevSheetTopic[]> {
  try {
    const topicsModule = await import(
      `../data/devsheet/${categoryId}/topics.json`
    );
    return topicsModule.default || topicsModule;
  } catch (error) {
    console.error(
      `${categoryId} のトピックの読み込み中にエラーが発生しました:`,
      error,
    );
    return [];
  }
}

export async function getTopicContent(
  categoryId: string,
  topicId: string,
): Promise<DevSheetSection[]> {
  try {
    const sectionsModule = await import(
      `../data/devsheet/${categoryId}/topics/${topicId}.json`
    );
    return sectionsModule.default || sectionsModule;
  } catch (error) {
    console.error(
      `${categoryId}/${topicId} のコンテンツの読み込み中にエラーが発生しました:`,
      error,
    );
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
