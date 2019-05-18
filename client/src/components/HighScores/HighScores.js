import React, { Component } from "react";

import { Row, Col } from "react-bootstrap";
import API from "../../utils/API";

const styles = {
  gameScore: {
    backgroundColor: "lightgrey",
    paddingTop: 30,
    paddingBottom: 30,
  },
  finalScore: {
    fontSize: "42px",
    paddingTop: 30,
    paddingBottom: 30,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  }
};

class HighScores extends Component {
  state = {
    highScores: []
    // playerInfo: {}
  };

  getHighScores = () => {
    API.getScores()
    .then(res => {
      this.setState({ highScores: res.data });
      return(res.data);
    })
    .catch(err => console.log(err));
  }

  // When this component mounts, get the scoreboard data (in descending order)
  componentDidMount() {
    this.getHighScores();
  }
  
   render() {
    return (
      <>

        {this.state.highScores.map(u => {
          return (
            <Row key={`${u.firstName}-${u.lastName}`} className="justify-content-center">
              <Col md={2} />
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

export default HighScores;
