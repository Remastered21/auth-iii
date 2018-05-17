import React, { Component } from "react";
import axios from 'axios'

export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  inputChangeHandler = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  submitHandler = e => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/login", this.state)
      .then(response => {
        localStorage.setItem("token", response.data.token);

        this.props.history.push("/users");
      })
      .catch(err => {
        localStorage.removeItem("token");
      });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <input
            name="username"
            value={this.state.username}
            onChange={this.inputChangeHandler}
            type="text"
          />
        </div>
        <div>
          <input
            name="password"
            value={this.state.password}
            onChange={this.inputChangeHandler}
            type="text"
          />
        </div>
        <button>Sign in</button>
      </form>
    );
  }
}
