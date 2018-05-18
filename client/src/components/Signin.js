import React, { Component } from "react";
import axios from "axios";

export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      isWrongCred: false
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
        this.setState({ isWrongCred: true });
      });
  };

  render() {
    return (
      <div>
        <h1>Sign in</h1>
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
            <button>Sign in</button>
            <br />
            <br />
            <div>
              {this.state.isWrongCred
                ? "Your username/password was incorrect."
                : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}
