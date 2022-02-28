import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Series from "./pages/Series";
import Movies from "./pages/Movies";
import Watch from "./pages/Watch";
import "./scss/app.scss";
import "antd/dist/antd.css";
import Login from "./pages/Login";
import AuthProvider from "./components/AuthProvider";
import ProtectedPage from "./components/ProtectedPage";
import Register from "./pages/Register";

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register></Register>
          </Route>
          <ProtectedPage>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/series">
              <Series type="Series" />
            </Route>
            <Route path="/movies">
              <Movies type="Movies" />
            </Route>
            <Route path="/watch">
              <Watch />
            </Route>
          </ProtectedPage>
        </Switch>
      </AuthProvider>
    </Router>
  );
}
