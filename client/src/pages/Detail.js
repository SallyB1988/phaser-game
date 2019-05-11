import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container, Jumbotron } from "react-bootstrap";
import API from "../utils/API";

class Detail extends Component {
  state = {
    user: {}
  };
  // When this component mounts, grab the user with the _id of this.props.match.params.id
  // e.g. localhost:3000/users/599dcb67f0f16317844583fc
  componentDidMount() {
    console.log('inside Detail: id = ' + this.props.match.params.id);
    API.getUser(this.props.match.params.id)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.user.firstName} {this.state.user.lastName}
                </h1>
                <h1>
                High Score: {this.state.user.highScore}
              </h1>
            </Jumbotron>
          </Col>
        </Row>

        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Home</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
