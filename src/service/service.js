class service {
  KEY = "5e6b8abd0147cec83180492b4338bf27";
  URL = "https://api.themoviedb.org/3";
  trendMovies() {
    return fetch(`${this.URL}/trending/movie/day?api_key=${this.KEY}`).then(
      (res) => {
        return res.json();
      }
    );
  }
  searchMovie(query) {
    const queryParams = new URLSearchParams({
      api_key: "5e6b8abd0147cec83180492b4338bf27",
      query: query,
      include_adult: false,
      year: 2021,
    });
    return fetch(` ${this.URL}/search/movie?${queryParams}`).then((res) =>
      res.json()
    );
  }

  movieInfo(id) {
    return fetch(
      `${this.URL}/movie/${id}?api_key=${this.KEY}&language=en-US`
    ).then((res) => {
      console.log(res);
      return res.json();
    });
  }

  artistInfo(movieId) {
    return fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${this.KEY}&language=en-US`
    ).then((res) => {
      return res.json();
    });
  }

  reviews(id) {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${this.KEY}&language=en-US&page=1`
    ).then((res) => res.json());
  }
}
const API = new service();
export default API;
