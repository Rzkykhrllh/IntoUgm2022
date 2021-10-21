import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from "./pages/Home";
import Live from "./pages/Live";
import TourDeFaculty from "./pages/TourDeFaculty";
import TryOut from "./pages/TryOut";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/try-out" component={TryOut} />
        <Route exact path="/live" component={Live} />
        <Route exact path="/tour-de-faculty" component={TourDeFaculty} />
      </Switch>
    </Router>
  );
}

export default App;
