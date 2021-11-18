import { Link } from "react-router-dom";
import { useContext } from "react";

import classes from "./MainNavigation.module.css";
import FavouritesContext from "../../store/favourite-context";

function MainNavigation() {
  const favouriteCtx = useContext(FavouritesContext);

  return (
    <div>
      <header className={classes.header}>
        <div className={classes.logo}>React meetups</div>
        <nav>
          <ul>
            <li>
              <Link to="/">All meetups</Link>
            </li>
            <li>
              <Link to="/new-meet">New meetup</Link>
            </li>
            <li>
              <Link to="/favourite">
                Favourites
                <span className={classes.badge}>
                  {favouriteCtx.totalFavourites}
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default MainNavigation;
