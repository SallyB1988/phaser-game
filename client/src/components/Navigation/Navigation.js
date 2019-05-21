import React from "react";
// import { IndexLinkContainer } from "react-router-dom";

import { Navbar, Nav, Button } from "react-bootstrap";
import { IndexLinkContainer } from "react-router-bootstrap";

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
            <IndexLinkContainer key={r.path} to={r.path}>
              <Button style={styles.navButton}>{r.name}</Button>
            </IndexLinkContainer>
          );
        })}
      </Nav>
    </Navbar>
  );
}

export default Navigation;
