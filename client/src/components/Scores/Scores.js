import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import API from "../../utils/API";

class Scores extends Component {
  state = {
    highScores: [],
    playerInfo: {}
  };

  getScoreBoard = () => {
    API.getScores()
    .then(res => {
      this.setState({ highScores: res.data });
      return(res.data);
    })
    .catch(err => console.log(err));
  }

  // When this component mounts, get the scoreboard data (in descending order)
  componentDidMount() {
    this.getScoreBoard();
    const playerInfo = this.props.getPlayerInfo();
    this.checkPlayerNewScore(playerInfo.playerId, playerInfo.score)
    this.setState({ playerInfo: playerInfo });
  }
  
  // Check if player has new high score. If so, update the database an refresh the
  // scoreboard data.
  checkPlayerNewScore = (playerId, score) => {
    // if player didn't log in, they are a 'guest' (and don't have an id) and their score is not saved
    if (playerId === "") return
       // new high score for existing player... update the database
      API.getUser(playerId)
      .then( (res) => {
        if (score > res.data.highScore) {
          API.updateScore(playerId, score)
          .then((res) => {
            this.getScoreBoard();
          })
        }
      })
      .catch(err => { console.log(err) }
      );
  };

   render() {
    return (
      <>
        <Row className="d-flex justify-content-center my-3">
          <h3>{this.state.playerInfo.firstName} {this.state.playerInfo.lastName} fired {this.state.playerInfo.fired} bullets</h3>
          <h3>Total Score: {this.state.playerInfo.score}</h3>
        </Row>
        <Row className="d-flex justify-content-center my-3" >
          <h1>HIGH SCORES</h1>
        </Row>

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
      </>
    );
  }
}

export default Scores;
