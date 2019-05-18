import React, { Component } from "react";
import { withRouter } from "react-router-dom";

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

class Scores extends Component {
  constructor(props) {
    super(props);

    this.state = {
      highScores: []
      // playerInfo: {}
    };
  }

         
  // When this component mounts, get the scoreboard data (in descending order)
  componentDidMount() {
    // SALLY -- might not need this first call to API.getScores...
    API.getScores()
    .then((res) => {
      console.log('inside then');
      console.log(res);
      this.setState({ highScores: res.data })
    })
    .then(() => {
      console.log('calling API getuser');
      console.log(this.props.playerId);
      return ( this.props.playerId ? API.getUser(this.props.playerId) : null )
    })
    .then( (res) => {
      console.log('what is highscore?');
      console.log(res);
      return ( res ? res.data.highScore : 0);  // if no data, return hs = 0
    })
    .then( (hs) => {
      console.log('hs?');
      console.log(hs);
      console.log(this.props.playerScore);

      return ( (this.props.playerScore > hs) ? 
       API.updateScore(this.props.playerId, this.props.playerScore)
       : null)
      })
    //   this.checkPlayerNewScore(this.props.playerId, this.props.playerScore);
    // })
    .then( () => API.getScores()
    )
    .then((res) => {
      console.log('inside then');
      console.log(res);
      
      this.setState({ highScores: res.data })
    })
    
     
    console.log('llllllllllllllllllllll');
    
  }
  
  
  render() {
    const {
          playerScore,
          playerFname,
          playerLname,
        } = this.props;
    return (
      <>
        <Row className="d-flex justify-content-center my-3" style={styles.gameScore}>
          <h3 style={styles.finalScore}>{playerFname} {playerLname} Score: {playerScore}</h3>
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

export default withRouter(Scores);
