import Header from "./Project/Header";
import Display from "./Project/Display";
import React from "react";
import Form from "./Project/Form";
import { Route, Switch, NavLink } from "react-router-dom";

const NavStyles = {
  Display: "inline-block",
  padding: "10px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

const centered = {
  display: "flex",
  justifycontent: "center",
  alignitems: "center",
};

function NavBar() {
  return (
    <div>
      <NavLink
        styleed={centered}
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
      <NavLink
        styleed={centered}
        to="/Form"
        exact
        style={NavStyles}
        activeStyle={{ background: "darkblue" }}
      >
        Form
      </NavLink>
    </div>
  );
}

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/Header">
          <Header />
        </Route>
        <Route exact path="/Display">
          <Display />
        </Route>
        <Route exact path="/Form">
          <Form />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
