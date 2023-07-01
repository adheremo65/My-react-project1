import Header from "./Project/Header";
import Display from "./Project/Display";
import React from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

const NavStyles = {
  Display: "inline-block",
  padding: "10px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div>
      <NavLink
        to="/Header"
        exact
        style={NavStyles}
        activeStyle={{ background: "darkblue" }}
      >
        Home
      </NavLink>
      <NavLink
        to="/Display"
        exact
        style={NavStyles}
        activeStyle={{ background: "darkblue" }}
      >
        Notes
      </NavLink>
    </div>
  );
}

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/Header">
          <Header />
        </Route>
        <Route exact path="/Display">
          <Display />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
