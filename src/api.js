import data from './merged.json';

const api = {
  async getFilms(filters) {
    try {
      let res = data.filter((el) => {
        let [year, mins, genre] = [true, true, true];
        if (filters.year && el.year < filters.year) year = false;
        if (filters.mins && el.movieLength < filters.mins) mins = false;
        if (filters.genre && !el.genres.includes(filters.genre)) genre = false;
        return year && mins && genre;
      });
      return res;
    } catch {
      return false;
    }
  },
};

export default api;
