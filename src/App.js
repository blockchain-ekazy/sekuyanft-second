import { ToastContainer } from "react-toastify";
import "./App.css";
import Home from "./Components/Home";
import Page1 from "./Components/Page1";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import history from "./history";

function App() {
  return (
    <div className="App">
      <BrowserRouter history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/mint" component={Page1} />
        </Switch>
      </BrowserRouter>
      <ToastContainer autoClose={4000} hideProgressBar theme="colored" />
    </div>
  );
}

export default App;
