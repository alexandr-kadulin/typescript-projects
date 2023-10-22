import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppProvider } from '../context/appContext';
import { Navbar } from '.';
import { Home, About, SingleCocktail, Error } from '../pages';

export const App = () => {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/cocktail/:id">
            <SingleCocktail />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </AppProvider>
  );
};
