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
    this.loadUsers();
  }

  loadUsers = () => {
    API.getUsers()
      .then(res =>
        this.setState({ users: res.data, firstName: "", lastName: "", highScore: 0 })
      )
      .catch(err => console.log(err));
  };

  deleteUser = id => {
    API.deleteUser(id)
      .then(res => this.loadUsers())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.firstName && this.state.lastName) {
      API.saveUser({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
      })
        .then(res => this.loadUsers())
        .catch(err => console.log(err));
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
