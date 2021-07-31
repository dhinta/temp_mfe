import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { getHistory } from "./libs/history";
import App from "./components/App";

const devMount = (appRoot, history) => {
  ReactDOM.render(<App history={history} />, appRoot);
};

const containerMount = (appRoot, history, { onNavigate }) => {
  history.listen(onNavigate);
  ReactDOM.render(<App history={history} />, appRoot);
};

const mount = (appRoot, config) => {
  const history = getHistory(config);
  if (config) {
    containerMount(appRoot, history, config);
  } else {
    devMount(appRoot, history);
  }

  return {
    onRouteChange: ({ pathname: newPathname }) => {
      let {
        location: { pathname },
      } = history;
      pathname = pathname.replace(/^\/+|\/+$/g, "").trim();
      newPathname = newPathname.replace(/^\/+|\/+$/g, "").trim();
      if (pathname !== newPathname) {
        history.push(newPathname);
      }
    },
  };
};

const init = () => {
  const devRoot = document.querySelector("#_auth_dev_root");
  if (devRoot) {
    mount(devRoot, null);
  }
};

init();

export { mount };
