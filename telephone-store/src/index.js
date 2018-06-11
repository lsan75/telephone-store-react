import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import PhonePage from "./components/phones/PhonePage";
import ManagePhonePage from "./components/phones/ManagePhonePage";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/" component={App} />
      <Route path="/phones" component={PhonePage} />
      <Route path="/managePhone" component={ManagePhonePage} />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

registerServiceWorker();
