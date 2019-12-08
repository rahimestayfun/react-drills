import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      cars: ['Mercedes', 'Audi', 'Tesla', 'Ford', 'GMC', 'Toyota', 'Mazda', 'Honda'],
      filteredCars: ''
    }
  }
  inputChange(value) {
    this.setState({ filteredCars: value })
  }

  render() {
    let filtered = this.state.cars.filter((element, index) => {
      return element.toLocaleLowerCase().includes(this.state.filteredCars.toLowerCase())}).map((element, index) => {
      return <h3 key={index}>{element}</h3>})

    return (
      <div className='App'>
        <input onChange={e => this.inputChange(e.target.value)} />
        {filtered}
      </div>
    )
  }
}
