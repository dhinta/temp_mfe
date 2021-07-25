import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "../components/App";

const mount = () => {
  console.log("Mount");
  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.querySelector("#_shell_App")
  );
};

mount();
