import React, { Component } from "react";
import { IndexLinkContainer } from "react-router-bootstrap";
import API from "../../utils/API";
import { Row, Col, Button, ButtonToolbar, ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import { Input, FormBtn } from "../Form";


import "./Login.css";

const styles = {
  welcome: {
    backgroundColor: "#21C2B3",
    // marginTop: 40
  },
  welcomeText: {
    paddingTop: 20,
    // paddingBottom: 20,
    textTransform: "uppercase"
  }
};

class Login extends Component {
  state = {
    users: [],
    firstName: "",
    lastName: "",
    highScore: 0,
    greeting: "",
    showForm: true
  };

  componentDidMount() {
    this.loadUsers();  
    this.props.setTheme("Ducks"); // reset theme to Space Ducks
  }

  loadUsers = () => {
    API.getUsers()
      .then(res =>
        this.setState({ users: res.data, firstName: "", lastName: "", highScore: 0 })
      )
      .catch(err => console.log(err));
  };

  // If user is already in database, send data information back to state
  // held in MainDisplayRegion
  userExists = () => {
    let exists = false;
    let filtered = this.state.users.filter((u) => {
      if (u.firstName === this.state.firstName.trim() &&
          u.lastName === this.state.lastName.trim()) {
            return u
          }
    })

    if (filtered.length === 1) {
      this.props.playerLogin(filtered[0]);
      exists = true;
    } else if (filtered.length > 1) {
      alert('ERROR - duplicate player in database');
    }

    return exists;
  }


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value.toUpperCase()
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.firstName && this.state.lastName) {
      if(!this.userExists()) {
        API.saveUser({
          firstName: this.state.firstName.trim().toUpperCase(),
          lastName: this.state.lastName.trim().toUpperCase()
        })
        .then(res => {
          const fn = this.state.firstName.trim().toUpperCase();
          const ln = this.state.lastName.trim().toUpperCase();
          const msg = `Welcome ${fn} ${ln}`;
          this.setState({ greeting: msg }, () => {
            this.props.playerLogin({
              firstName: fn,
              lastName: ln,
              playerId: res.data._id
            })
          })
        })
      } else {
        const fn = this.state.firstName.trim().toUpperCase();
        const ln = this.state.lastName.trim().toUpperCase();
        const msg = `Welcome ${fn} ${ln}`;
        this.setState({ greeting: msg })
      }
    } else {
      this.props.playerLogin({
        firstName: "Guest",
        lastName: "",
        playerId: ""
      })
      alert("Enter a first name and last name - otherwise you are a guest and your score will not be saved.");
    }

    this.setState({showForm: false})
  };

  welcome = () => {
    return(
      <div style={styles.welcome} >
        <h2 className="text-center" style={styles.welcomeText}>
          {this.state.greeting}
        </h2>
        <div id="playgame-button">
          <IndexLinkContainer to="/playgame">
            <Button id="button-style">Start Arcade Game</Button>
          </IndexLinkContainer>
        </div>
      </div>
    )
  }

  inputForm = () => {
    return(
      <form>
        <Input
          value={this.state.firstName}
          onChange={this.handleInputChange}
          name="firstName"
          placeholder="First Name (required)"
        />
        <Input
          value={this.state.lastName}
          onChange={this.handleInputChange}
          name="lastName"
          placeholder="Last Name (required)"
        />
        <h5 className="my-2 text-center">THEME</h5>
      <ButtonToolbar>
        <ToggleButtonGroup
          className="d-block mx-auto"
          type="radio"
          name="theme"
          defaultValue="Ducks"
          onChange = {this.props.setTheme}>
          <ToggleButton className="radio-option" value="Ducks">Space Ducks</ToggleButton>
          <ToggleButton className="radio-option" value="Food">Food Fight</ToggleButton>
          <ToggleButton className="radio-option" value="CageMatch">Cage Match</ToggleButton>
        </ToggleButtonGroup>
      </ButtonToolbar>
      <h5 className="mt-4 mb-0 text-center">PANIC SCREEN</h5>
        <p className='text-center mt-0 pt-0'>(for when the boss is coming!)</p>
      <ButtonToolbar >
        <ToggleButtonGroup
          className="d-block mx-auto"
          type="radio"
          name="overlay"
          defaultValue="Overlay_vsCode"
          onChange = {this.props.handlePanic}>
          <ToggleButton className="radio-option" value="Overlay_vsCode">VSCode</ToggleButton>
          <ToggleButton className="radio-option" value="Overlay_stackoverflow">JavaScript</ToggleButton>
          <ToggleButton className="radio-option" value="Overlay_oracle">Java</ToggleButton>
          <ToggleButton className="radio-option" value="Overlay_c++">C++</ToggleButton>
        </ToggleButtonGroup>
      </ButtonToolbar>
        <FormBtn
          id="submit-button"
          disabled={!(this.state.firstName && this.state.lastName)}
          onClick={this.handleFormSubmit}
        >
          Submit
        </FormBtn>
      </form>
    )
  }

  render() {
    return (
        <Row>
          <Col md={{span: 8, offset: 2}} className="my-3">
            {this.state.showForm ? this.inputForm() : this.welcome()}
          </Col>
        </Row>
    );
  }
}

export default Login;
