import { mount as mountHeader } from "@app-header/headerApp";
import { mount as mountAuth } from "@app-auth/authApp";

try {
  mountHeader(document.querySelector("#app-shell-header"));
} catch (error) {
  console.error(error);
}

try {
  mountAuth(document.querySelector("#app-shell-body"));
} catch (error) {
  console.error(error);
}
