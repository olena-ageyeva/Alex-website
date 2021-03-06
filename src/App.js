import React from "react";
import "./App.css";
import { Navbar, Nav } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home/Home";
import Drawings from "./Drawings/Drawings";
import Clay from "./Clay/Clay";
import Learn from "./Learn/Learn";
import Shop from "./Shop/Shop";

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Artsy Girl</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/Drawings">Drawings</Nav.Link>
          <Nav.Link href="/clay">Clay</Nav.Link>
          <Nav.Link href="/learn">Learn</Nav.Link>
          <Nav.Link href="/shop">Shop</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            10/17/2020{" "}
            <span role="img" aria-label="img">
              😷
            </span>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Drawings" component={Drawings} />
        <Route exact path="/clay" component={Clay} />
        <Route exact path="/Learn" component={Learn} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </>
  );
}

export default App;
