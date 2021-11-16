import { useState } from "react";
import API from "../../service/service";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import { useEffect } from "react";
export default function Movies() {
  const [moviesList, setmoviesList] = useState(null);

  const history = useHistory();
  const location = useLocation();

  const searchWord = new URLSearchParams(location.search).get("search");

  const searchMovie = (e) => {
    e.preventDefault();
    history.push({
      ...location,
      search: `search=${e.target.elements.search.value}`,
    });

    if (searchWord) {
      API.searchMovie(searchWord).then((moviesList) => {
        setmoviesList(moviesList);
      });
    } else return;
  };

  useEffect(() => {
    if (searchWord) {
      API.searchMovie(searchWord).then((moviesList) => {
        setmoviesList(moviesList);
      });
    } else return;
  }, [searchWord]);

  return (
    <>
      <form onSubmit={searchMovie}>
        <input
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder=" enter title to search"
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {moviesList &&
          moviesList.results.map((movie) => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `movies/${movie.id}`,
                  state: { from: location },
                }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}
