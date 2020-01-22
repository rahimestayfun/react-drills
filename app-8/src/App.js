import React, { Component } from "react";

import "./App.css";
import axios from 'axios'

class App extends Component {
  constructor(){
    super();
    this.state={
      walterWhite: '',
      // jessePinkman: ''
    }
  }
  componentDidMount(){
  axios.get("https://www.breakingbadapi.com/api/characters/1").then((response)=>{
  console.log(response.data)  
  this.setState({walterWhite: response.data[0]})
  })
}
// , jessePinkman: response.data[1]
  render() {
    return (
      <div className="App">
        <h1>BREAKING BAD CHARACTERS</h1>
        <div>
        <h2>Name: {this.state.walterWhite.name}</h2>
        <h2>Birthday: {this.state.walterWhite.birthday}</h2>
        <h2>Nickname: {this.state.walterWhite.nickname}</h2>
        <h2>Occupation: {this.state.walterWhite.occupation}</h2>
        </div>

        {/* <div>
        <h2>Name: {this.state.jessePinkman.name}</h2>
        <h2>Birthday: {this.state.jessePinkman.birthday}</h2>
        <h2>Nickname: {this.state.jessePinkman.nickname}</h2>
        <h2>Occupation: {this.state.jessePinkman.occupation}</h2>
        </div> */}
                
      </div>
    );
  }
}

export default App;


