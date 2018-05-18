import React, { Component } from "react";
import axios from "axios";

export default class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      isUnauthorized: false
    };
  }

  componentDidMount = () => {
    const token = localStorage.getItem("token");
    const authToken = `${token}`;
    const requestOption = {
      headers: {
        Authorization: authToken
      }
    };

    axios
      .get("http://localhost:5000/api/users", requestOption)
      .then(response => {
        this.setState({ isUnauthorized: false });
        this.setState({ users: response.data });
      })
      .catch(err => {
        this.setState({ isUnauthorized: true });
        this.props.history.push("/signin");
      });
  };
  // signout
  signOutHandler = e => {
    localStorage.removeItem("token");
    this.props.history.push("/signin");
  };

  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.isUnauthorized
          ? alert("Unauthorized Access. Please log-in first.")
          : null}

        <button onClick={this.signOutHandler}>Sign out</button>
        {this.state.users.map(eachUser => (
          <div key={eachUser._id}>{eachUser.username}</div>
        ))}
      </div>
    );
  }
}
