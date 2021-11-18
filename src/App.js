import { Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import AllMeetUpsPage from "./pages/AllMeetUps";
import FavouritePage from "./pages/Favourite";
import NewMeetUpsPage from "./pages/NewMeetUps";

function App() {
  <switch></switch>;
  return (
    <Layout>
      <switch>
        <Route path="/" exact>
          <AllMeetUpsPage />
        </Route>
        <Route path="/new-meet">
          <NewMeetUpsPage />
        </Route>
        <Route path="/favourite">
          <FavouritePage />
        </Route>
      </switch>
    </Layout>
  );
}

export default App;
