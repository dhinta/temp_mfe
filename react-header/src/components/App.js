import { Router } from "react-router-dom";

import Header from "./header/Header";

const App = ({ history }) => {
  return (
    <Router history={history}>
      <Header />
    </Router>
  );
};

export default App;
