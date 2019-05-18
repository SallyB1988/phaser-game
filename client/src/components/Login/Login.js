import React, { Component } from "react";
import API from "../../utils/API";
import { Row, Col, Container, Jumbotron, Button } from "react-bootstrap";
import { Input, FormBtn } from "../Form";

class Login extends Component {
  state = {
    users: [],
    firstName: "",
    lastName: "",
    highScore: 0
  };

  componentDidMount() {
    this.loadUsers();   // SALLY -- use this later to check if user is already in system - then save id?
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
      [name]: value
    });
  };

  handleFormSubmit = event => {
    console.log('inside handleform submit');
    event.preventDefault();
    if (this.state.firstName && this.state.lastName) {
      if(!this.userExists()) {
        API.saveUser({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
        })
          .then(res => {
            this.props.playerLogin({
              firstName: this.state.firstName.trim(),
              lastName: this.state.lastName.trim(),
              playerId: res.data._id
            });
          })
          .catch(err => console.log(err));
      }
    } else {
      this.props.playerLogin({
        firstName: "Guest",
        lastName: "",
        playerId: ""
      })
      alert("Enter a first name and last name - otherwise you are a guest and your score will not be saved.");
    }
  };

  handleStartGame = () => {
    this.props.history.push('./playgame');
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6 mx-auto">
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
              <FormBtn
                disabled={!(this.state.firstName && this.state.lastName)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
