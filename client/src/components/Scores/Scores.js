import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import API from "../../utils/API";

class Scores extends Component {
  state = {
    users: []
  };
  // When this component mounts, grab the user with the _id of this.props.match.params.id
  // e.g. localhost:3000/users/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getScores()
      .then(res => {
        console.log(res.data);
        this.setState({ users: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        <Row className="d-flex justify-content-center my-3" >
          <h1>HIGH SCORES</h1>
        </Row>

        {this.state.users.map(u => {
          return (
            <Row key={`$u.firstName}-${u.lastName}`} className="justify-content-center">
              <Col md={6}>
                <h3>
                  {u.firstName} {u.lastName}
                </h3>
              </Col>
              <Col md={2}>
                <h2>{u.highScore}</h2>
              </Col>
            </Row>
          );
        })}
      </>
    );
  }
}

export default Scores;
