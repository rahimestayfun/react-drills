import React, { Component } from "react";

import "./App.css";
import axios from 'axios'

class App extends Component {
  constructor(){
    super();
    this.state={
      leiaOrgana: ''
    }
  }
  componentDidMount(){
  axios.get("https://swapi.co/api/people/5").then((response)=>{
  // console.log(response.data.results)  
  this.setState({leiaOrgana: response.data})

  }).catch()
}

  render() {
    return (
      <div className="App">
        <h1>Name: {this.state.leiaOrgana.name}</h1>
        <h1>Gender: {this.state.leiaOrgana.gender}</h1>
        <h1>Birth Year: {this.state.leiaOrgana.birth_year}</h1>
        <h1>Hair Color: {this.state.leiaOrgana.hair_color}</h1>
        <h1>Skin Color: {this.state.leiaOrgana.skin_color}</h1>
                
        
 
      </div>
    );
  }
}

export default App;
