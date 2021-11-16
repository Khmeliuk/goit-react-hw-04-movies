import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import service from "../../service/service";
import s from "./Home.module.css";
import { useLocation } from "react-router";

export default function Home() {
  const [treandMovie, settreandMovie] = useState(null);

  const location = useLocation();
  console.log(location, "location");
  useEffect(() => service.trendMovies().then(settreandMovie), []);

  return (
    treandMovie && (
      <>
        {" "}
        <h2>Trending today</h2>
        <ul className={s.listMovies}>
          {treandMovie.results.map((movie) => (
            <li className={s.text} key={movie.id}>
              <NavLink
                to={{
                  pathname: `movies/${movie.id}`,
                  state: { from: location },
                }}
              >
                <p>{movie.title || movie.name}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      </>
    )
  );
}
