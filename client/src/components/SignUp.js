import React, { Component } from "react";
import axios from "axios";

export default class SignUp extends Component {
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
      .post("http://localhost:5000/api/register", this.state)
      .then(response => {
        
        this.props.history.push("/signin");
      })
      .catch(err => {

        this.props.history.push("/signin");
      });
  };

  render() {
    return (
      <div>
        <h1>Create new Account</h1>
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
          <div>
            <button>Create Account</button>
          </div>
        </form>
      </div>
    );
  }
}
