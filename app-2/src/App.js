import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

export default class App extends Component {
  constructor(){
    super()
    this.state={
      cars: ['Mercedes', 'Audi', 'Tesla','Ford','GMC', 'Toyota']
    }
  }
  render() {
    let CarList= this.state.cars.map((element,index)=>{
      return <h3 key={index}> {element}</h3>
    })
    return (
      <div className='App'>{CarList}</div>
    )
  }
}
















