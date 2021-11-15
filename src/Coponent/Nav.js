import { NavLink } from "react-router-dom";
import s from "./Nav.module.css";
export default function Navigation() {
  return (
    <>
      {" "}
      <nav>
        <ul className={s.nav}>
          <li>
            {" "}
            <NavLink exact to="/" activeClassName={s.active} className={s.text}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" activeClassName={s.active} className={s.text}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
