import React from "react";
// import { IndexLinkContainer } from "react-router-dom";

import { Navbar, Nav, Button } from "react-bootstrap";
import { IndexLinkContainer } from "react-router-bootstrap";
import "./Navigation.css";

function Navigation(props) {
  const { routes } = props;

  return (
    <Navbar bg="transparent" expand="lg" className="pt-1 m-0">
      <Nav>
        {routes.map(r => {
          return (
            <IndexLinkContainer className="nav-style" key={r.path} to={r.path}>
              <Button className="button-style">{r.name}</Button>
            </IndexLinkContainer>
          );
        })}
      </Nav>
    </Navbar>
  );
}

export default Navigation;
