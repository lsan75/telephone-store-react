import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import PhonePage from "./components/phones/PhonePage";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/" component={App} />
      <Route path="/phones" component={PhonePage} />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

registerServiceWorker();
