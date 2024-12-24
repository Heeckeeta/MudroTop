const api = {
  async getArticles(page) {
    try {
      const res = await fetch(`https://blog-platform.kata.academy/api/articles?limit=5&offset=${5 * (page - 1)}`);
      if (!res.ok) return false;
      return await res.json();
    } catch {
      return false;
    }
  },
};

export default api;
