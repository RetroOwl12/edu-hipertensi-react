const STORAGE_KEY = "articles";

const initialData = [
  {
    id: 1,
    title: "Apa itu Hipertensi?",
    content: "Hipertensi adalah kondisi tekanan darah tinggi...",
    category: "Pengertian",
  },
];

export const getArticles = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData));
    return initialData;
  }
  return JSON.parse(data);
};

export const createArticle = (article) => {
  const articles = getArticles();
  articles.push({ ...article, id: Date.now() });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
};

export const updateArticle = (id, updated) => {
  const articles = getArticles().map(a =>
    a.id === id ? { ...a, ...updated } : a
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
};

export const deleteArticle = (id) => {
  const articles = getArticles().filter(a => a.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
};
