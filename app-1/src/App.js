import React, { Component } from "react";
import "./App.css";


export default class App extends Component {
  constructor(){
    super();
    this.state={
      text: ''
    }
  }
  inputChange(value){
    this.setState({text: value})
  }
  render() {
    return (
      <div className="App">
        <input onChange={(e)=>this.inputChange(e.target.value)} type="text"></input>
        <p>{this.state.text}</p>
      </div>
    )
  }
}



