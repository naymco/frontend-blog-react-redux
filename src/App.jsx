import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Containers
import Home from "./containers/home";

// Componenetes

// Css General
import "./css/GeneralCss.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
