import React, { Component } from "react";
import "./App.css";
import Login from './components/Login';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Login/>
      </div>
    );
  }
}
