import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      userInput:''
    };
  }
  handleInputChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })

  }
  render(){
  return (
    <div className="App">
      <h3>Type Something</h3>
      <input name='userInput' onChange={this.handleInputChange}/>
      <p>{this.state.userInput}</p>
    
    </div>
  );
}
}

export default App;


















// import React, { Component } from "react";
// import "./App.css";


// export default class App extends Component {
//   constructor(){
//     super();
//     this.state={
//       text: ''
//     }
//   }
//   inputChange(value){
//     this.setState({text: value})
//   }
//   render() {
//     return (
//       <div className="App">
//         <input onChange={(e)=>this.inputChange(e.target.value)} type="text"></input>
//         <p>{this.state.text}</p>
//       </div>
//     )
//   }
// }






