import React, { Component } from "react";
import API from "../../utils/API";
import { Row, Col, Container } from "react-bootstrap";
import { Input, FormBtn } from "../Form";

const styles = {
  welcome: {
    backgroundColor: "lightgrey",
    marginTop: 80
  },
  welcomeText: {
    paddingTop: 20,
    paddingBottom: 20,
    textTransform: "uppercase"
  }
};

class Login extends Component {
  state = {
    users: [],
    firstName: "",
    lastName: "",
    highScore: 0,
    greeting: ""
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
      [name]: value.toUpperCase()
    });
  };

  handleFormSubmit = event => {
    console.log('inside handleform submit');
    event.preventDefault();
    if (this.state.firstName && this.state.lastName) {
      if(!this.userExists()) {
        API.saveUser({
          firstName: this.state.firstName.trim().toUpperCase(),
          lastName: this.state.lastName.trim().toUpperCase(),
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
  };

  // handleStartGame = () => {
  //   this.props.history.push('./playgame');
  // };

  // handleUpdateGreeting = () => {
  //   const msg = `Welcome ${this.state.firstName} ${this.state.lastName}`
  //   this.props.setState({ greeting: msg })
  // }

  welcome = () => {
    return(
      <div style={styles.welcome} >
        <h2 className="text-center" style={styles.welcomeText}>
          {this.state.greeting}
        </h2>
      </div>
    )
  }


  render() {
    return (
      <Container fluid>
        <Row>
          <Col md={{span: 6, offset: 3}} className="my-3">
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

            { this.state.greeting ? this.welcome() : null }

          </Col>
        </Row>

      </Container>
    );
  }
}

export default Login;
