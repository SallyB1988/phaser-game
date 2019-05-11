import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Row, Col, Container, Jumbotron, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { Input, FormBtn } from "../components/Form";

class Users extends Component {
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
    console.log('in handleformsubmit');
    console.log(this.state.firstName);
    console.log(this.state.firstName);
    console.log(this.state.lastName);
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

  render() {
    return (
      <Container fluid>
        <Row>
          <Col md={6}>
            <div>
              <h1>New Player</h1>
            </div>
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
          <Col md={6}>
            <div>
              <h1>Current Players</h1>
            </div>
            {this.state.users.length ? (
              <ListGroup>
                {this.state.users.map(user => (
                  <ListGroupItem key={user._id}>
                    <Link to={"/users/" + user._id}>
                      <strong>
                        {user.firstName} {user.lastName}
                      </strong>
                    </Link>
                    <Button variant="secondary" onClick={() => this.deleteUser(user._id)} >X</Button>
                  </ListGroupItem>
                ))}
              </ListGroup>
            ) : (
              <h3>No Existing Players</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Users;
