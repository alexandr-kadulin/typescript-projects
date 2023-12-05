import { Switch, Route } from "react-router-dom";
import { Home, SingleMovie } from ".";

export const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/movies/:id" children={<SingleMovie />} />
    </Switch>
  );
};
