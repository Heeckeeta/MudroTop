import data from './merged.json';

const api = {
  async getFilms(filters) {
    try {
      let res = data.filter((el) => {
        if (filters.year && el.year < filters.year) return false;
        if (filters.mins && el.movieLength < filters.mins) return false;
        if (filters.genre && (!el.genres || el.genres.findIndex((el) => el.name == filters.genre) == -1)) {
          return false;
        }
        if (filters.notGenre && el.genres && el.genres.findIndex((el) => el.name == filters.notGenre) != -1) {
          return false;
        }
        return true;
      });
      return res;
    } catch {
      return false;
    }
  },
};

export default api;
