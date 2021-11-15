import { useState, useEffect } from "react";
import { Route, useParams, useRouteMatch } from "react-router";
import API from "../../service/service";
import Reviews from "../Reviews/Reviews";
import Cast from "../Cast/Cast";
import { NavLink } from "react-router-dom";
import s from "./MovieDetailsPage.module.css";

import { useLocation, useHistory } from "react-router";

const MovieDetailsPage = () => {
  const [searchMovies, setsearchMovies] = useState(null);
  const params = useParams();
  const march = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  const goGoBack = () => {
    history.push(location?.state?.from ?? "/");
  };

  useEffect(() => {
    API.movieInfo(params.movieId).then(setsearchMovies);
  }, [params]);
  return (
    searchMovies && (
      <>
        <button type="button" onClick={goGoBack}>{`<-Go back`}</button>
        <div>
          <div className={s.MovieInfo}>
            <img
              src={`https://image.tmdb.org/t/p/w200${searchMovies.poster_path}`}
              alt={searchMovies.title}
              width="200px"
            />
            <div className={s.info}>
              <h2>{searchMovies.original_title || searchMovies.name}</h2>
              <p> User score {searchMovies.vote_average * 10} %</p>
              <h3>Overview</h3>
              <p>{searchMovies.overview}</p>
              <h3>Genres</h3>
              <ul className={s.genres}>
                {searchMovies.genres.map((genre) => (
                  <li className={s.gen} key={genre.id}>
                    {genre.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <hr />
          <h3>Additional information</h3>
          <NavLink className={s.link} to={`${march.url}/cast`}>
            <p>Cast</p>
          </NavLink>
          <NavLink className={s.link} to={`${march.url}/reviews`}>
            Reviews
          </NavLink>
          <Route path="/movies/:movieId/cast">
            <Cast />
          </Route>
          <Route path="/movies/:movieId/reviews">
            <Reviews />
          </Route>
        </div>
      </>
    )
  );
};

export default MovieDetailsPage;
