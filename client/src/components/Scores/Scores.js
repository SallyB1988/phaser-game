import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { Row, Col } from "react-bootstrap";
import API from "../../utils/API";
import './Scores.css';


const styles = {
  // gameScore: {
  //   backgroundColor: "lightgrey",
  //   paddingTop: 30,
  //   paddingBottom: 30,
  // },
  finalScore: {
    fontSize: "42px",
    paddingTop: 30,
    paddingBottom: 30,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  }
};

class Scores extends Component {
  constructor(props) {
    super(props);

    this.state = {
      highScores: []
    };
  }

  // When this component mounts, get the scoreboard data (in descending order)
  componentDidMount() {
    // -- might not need this first call to API.getScores...
    API.getScores()
    .then((res) => {
      this.setState({ highScores: res.data })
    })
    .then(() => {
      return ( this.props.playerId ? API.getUser(this.props.playerId) : null )
    })
    .then( (res) => {
      return ( res ? res.data.highScore : 0);  // if no data, return hs = 0
    })
    .then( (hs) => {
      return ( (this.props.playerScore > hs) ? 
       API.updateScore(this.props.playerId, this.props.playerScore)
       : null)
      })
    .then( () => API.getScores()
    )
    .then((res) => {
      this.setState({ highScores: res.data })
    })
        
  }
  
  
  render() {
    const {
          playerScore,
          playerFname,
          playerLname,
        } = this.props;
    return (
      <>
        <Row className="d-flex justify-content-center" id="player-score" >
          <h3 style={styles.finalScore}>{playerFname} {playerLname} Score: {playerScore}</h3>
        </Row>
        <Row className="d-flex justify-content-center my-3" >
          <h1>PLAYER RANKING</h1>
        </Row>
        <div id="ranking">
          {this.state.highScores.map(u => {
            return (
              <Row key={`${u.firstName}-${u.lastName}`} className="justify-content-center">
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
        </div>
      </>
    );
  }
}

export default withRouter(Scores);
