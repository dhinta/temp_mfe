import { createMemoryHistory, createBrowserHistory } from "history";


const getHistory = (config) => {
  if (config) {
    return createMemoryHistory();
  } else {
    return createBrowserHistory();
  }
};

export { getHistory };
