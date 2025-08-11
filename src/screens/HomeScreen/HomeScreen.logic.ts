import { useQuery } from '@tanstack/react-query';

export type Question = {
  id: number;
  title: string;
  subtitle: string;
  image_uri: string;
  uri: string;
  order: number;
};

export type Category = {
  id: number;
  title: string;
  imageUrl: string;
};

const QUESTIONS_URL = 'https://dummy-api-jtg6bessta-ey.a.run.app/getQuestions';
const CATEGORIES_URL = 'https://dummy-api-jtg6bessta-ey.a.run.app/getCategories';

async function fetchQuestions(): Promise<Question[]> {
  const res = await fetch(QUESTIONS_URL);
  if (!res.ok) {
    throw new Error('Failed to fetch questions');
  }
  return (await res.json()) as Question[];
}

async function fetchCategories(): Promise<Category[]> {
  const res = await fetch(CATEGORIES_URL);
  if (!res.ok) {
    throw new Error('Failed to fetch categories');
  }
  const json = await res.json();
  const data = Array.isArray(json?.data) ? json.data : [];
  return data.map((item: any) => ({
    id: item.id,
    title: item.title as string,
    imageUrl: item.image?.url as string,
  }));
}

export function useQuestions() {
  return useQuery({ queryKey: ['questions'], queryFn: fetchQuestions });
}

export function useCategories() {
  return useQuery({ queryKey: ['categories'], queryFn: fetchCategories });
}


