import { useParams } from "react-router";
import { useState } from "react";
import API from "../../service/service";
import { useEffect } from "react";
import s from "./Cast.module.css";
export default function Cast() {
  const [artist, setartist] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    API.artistInfo(movieId).then((artist) => setartist(artist));
  }, [movieId]);

  return (
    artist && (
      <ul className={s.castList}>
        {artist.cast.map((artist) => (
          <li key={artist.cast_id}>
            <img
              className={s.img}
              src={`https://image.tmdb.org/t/p/w500${artist.profile_path}`}
              alt=""
            />
            <p>{artist.name}</p>
            <p>character:{artist.character}</p>
          </li>
        ))}
      </ul>
    )
  );
}
