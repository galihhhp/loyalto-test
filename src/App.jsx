import Genre from "pages/Genre";
import Movie from "pages/Movie";
import Home from "pages/Home";
import MovieDetails from "pages/MovieDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/genre">
          <Genre />
        </Route>
        <Route exact path="/movie">
          <Movie />
        </Route>
        <Route exact path="/movie/:id">
          <MovieDetails />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
