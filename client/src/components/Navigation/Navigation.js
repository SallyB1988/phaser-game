import React from "react";
import { Link } from "react-router-dom";

import { Navbar, Nav, Button } from "react-bootstrap";

const styles = {
  navButton: {
    backgroundColor: "#12A9A9",
    border: "none",
    margin: 2

  }
};

function Navigation(props) {
  const { routes } = props;

  return (
    <Navbar bg="light" expand="lg">
      <Nav className="mr-auto">
        {routes.map(r => {
          return (
            <Link key={r.path} to={r.path}>
              <Button style={styles.navButton}>{r.name}</Button>
            </Link>
          );
        })}
      </Nav>
    </Navbar>
  );
}

export default Navigation;
