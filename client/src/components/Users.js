import React, { Component } from "react";
import axios from "axios";

export default class Users extends Component {
  constructor() {
    this.state = {
      users: []
    };
  }

  componentDidMount = () => {
    axios
      .get("http://localhost:5000/users")
      .then(response => {
        this.setState({ users: response.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        {this.state.users.map(eachUser => {
          <div>{eachUser.username}</div>;
        })}
      </div>
    );
  }
}
