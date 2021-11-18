import { useContext } from "react";

import FavouritesContext from "../store/favourite-context";
import MeetupList from "../components/meetups/MeetUpList";

function FavouritePage() {

  const favouriteCtx = useContext(FavouritesContext);

  let content;

  if(favouriteCtx.totalFavourites === 0 ){
      content = <p>You have no favourites.</p>
  }else{
      content = <MeetupList meetups={favouriteCtx.favourites}/>
  }

  return <section>
      <h1>My Favourites</h1>
      {content}
  </section>;
}

export default FavouritePage;
