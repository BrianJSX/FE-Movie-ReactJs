import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./scss/app.scss";
import "antd/dist/antd.css";

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/movies">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
