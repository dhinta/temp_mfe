import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import App from "./components/App";

const mount = (appRoot) => {
  ReactDOM.render(<App />, appRoot);
};

const init = () => {
  const devRoot = document.querySelector("#_auth_dev_root");
  if (devRoot) {
    mount(devRoot);
  }
};

init();

export { mount };
