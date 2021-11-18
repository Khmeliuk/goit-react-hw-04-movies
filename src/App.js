import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./views/Home/Home";
import { lazy, Suspense } from "react";
import Nav from "./Component/Nav";

const MovieDetailsPage = lazy(() =>
  import("./views/MovieDetailsPage/MovieDetailsPage")
);
const Reviews = lazy(() => import("./views/Reviews/Reviews"));
const Cast = lazy(() => import("./views/Cast/Cast"));
const Movies = lazy(() => import("./views/MoviesPage/MoviesPage"));

export default function App() {
  return (
    <>
      <Nav />
      <Suspense fallback={<h3>download...</h3>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Route path="/movies" component={Movies} />
          <Route path="//movies/:movieId/cast" component={Cast} />
          <Route path="/movies/:movieId/reviews" component={Reviews} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
}
