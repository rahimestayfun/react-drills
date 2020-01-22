import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      food: [
        "spaghetti",
        "sushi",
        "ice cream",
        "bologna",
        "cheese",
        "banana",
        "pizza",
        "chicken",
        "cake"
      ],
      userInput: ""
    };
  }
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    let filteredFood = this.state.food
      .filter((el, i) => {
        return el.includes(this.state.userInput);
      })
      .map((el, i) => {
        return <h4 key={i}>{el}</h4>;
      });

    return (
      <div className="App">
        <input name="userInput" onChange={this.handleInput} />
        {filteredFood}
      </div>
    );
  }
}

export default App;




// import React, { Component } from 'react';
// import './App.css';

// export default class App extends Component {
//   constructor(){
//     super();
//     this.state={
//       cars: ['Mercedes', 'Audi', 'Tesla', 'Ford', 'GMC', 'Toyota', 'Mazda', 'Honda'],
//       filteredCars:"",
//     }
//   }

//   handleInput(userInput){
//     this.setState({filteredCars: userInput})
//   }
//   render() {
//     let carToDisplay= this.state.cars.filter((car,index)=>{
//       return car.toLowerCase().includes(this.state.filteredCars.toLowerCase())
//     }).map((element,index)=>{
//       return <h2>{element}</h2>
//     })
//     return (
//       <div className="App">
//         <input onChange={(e)=>this.handleInput(e.target.value)}/>
//         {carToDisplay}

//       </div>
//     )
//   }
// }
