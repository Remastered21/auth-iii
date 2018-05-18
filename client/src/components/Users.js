import React, { Component } from "react";
import axios from "axios";

export default class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: []
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
        this.setState({ users: response.data });
      })
      .catch(err => {
        this.alert;
        this.props.history.push("/signin");
      });
  };
  // signout
  signOutHandler = e => {
    localStorage.removeItem("token");
    this.props.history.push("/signin");
  };

  alert = () => {
    alert("Hello!");
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <script>{alert("Unauthorized Access. Please log-in first.")}</script>

        <button onClick={this.signOutHandler}>Sign out</button>
        {this.state.users.map(eachUser => (
          <div key={eachUser._id}>{eachUser.username}</div>
        ))}
      </div>
    );
  }
}
