import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

function Navigation(props) {
  const { routes } = props;

  return (
    <Navbar bg="light" expand="lg">
      <Nav className="mr-auto">
        {routes.map(r => {
          return (
            <Nav.Link key={r.path} href={r.path}>
              {r.name}
            </Nav.Link>
          );
        })}
      </Nav>
    </Navbar>
  );
}

export default Navigation;
