import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Route } from "react-router-dom";

import SignIn from "./components/SignIn";
import Users from './components/Users'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Route path="/signin" component={SignIn} />
        <Route path="/users" component={Users} />
      </div>
    );
  }
}

export default App;
