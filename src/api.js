import data from './merged.json';

const api = {
  async getFilms() {
    try {
      // let res = await fetch(
      //   'https://api.kinopoisk.dev/v1.4/movie?notNullFields=name&sortField=rating.imdb&sortType=-1&type=movie&rating.imdb=6-10&movieLength=40-6000',
      //   {
      //     headers: {
      //       'Content-Type': 'application/json',
      //       'X-API-KEY': 'ECSGX8M-Z59MWTB-GN544A3-7FNZTVH',
      //     },
      //   }
      // );
      // if (!res.ok) return false;
      // res = await res.json();
      let res = data;
      return res;
    } catch {
      return false;
    }
  },
};

export default api;
