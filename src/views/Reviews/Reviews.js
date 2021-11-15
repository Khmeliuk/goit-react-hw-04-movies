import API from "../../service/service";
import { useState } from "react";
import { useParams } from "react-router";
import { useEffect } from "react/cjs/react.development";
export default function Reviews() {
  const [reviews, setreviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    API.reviews(movieId).then((rev) => {
      setreviews(rev);
    });
  }, [movieId]);

  return (
    reviews &&
    (reviews.total_results === 0 ? (
      <p>No reviews</p>
    ) : (
      <ul>
        {reviews.results.map((rev) => (
          <li key={rev.id}>
            <h3>{rev.author}</h3>
            <p>{rev.content}</p>
          </li>
        ))}
      </ul>
    ))
  );
}
