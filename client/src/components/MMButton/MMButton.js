import React, { Component } from "react";
import { Row, Col, Container, ButtonToolbar, ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import { Input, FormBtn } from "../Form";

import "./MMButton.css";

const styles = {
buttonRed: {
  borderRadius: '50%',
  backgroundColor: 'red',
},
  buttonBlue: {
  borderRadius: '50%',
  backgroundColor: 'blue',
},
  buttonYellow: {
  borderRadius: '50%',
  backgroundColor: 'yellow',
}
};

class MMButton extends Component {
  state = {
    color: '',
  };


  setColor = (c) => {
    this.setState({color: c})
  };
  getColor = () => {
    return (this.state.color)
  };

  render() {
    let color = 'Yellow';
    return (
      <button style={ `styles.button${color}` }>hi</button>
    );
  }
}

export default MMButton;
