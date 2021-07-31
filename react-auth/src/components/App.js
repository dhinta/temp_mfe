import { Router, Switch, Route } from "react-router-dom";
import Login from "./login/login";
import Registration from "./registration/registration";

const App = ({ history }) => {
  console.log('Auth');
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact={true}>
          <Login />
        </Route>
        <Route path="/signup">
          <Registration />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
