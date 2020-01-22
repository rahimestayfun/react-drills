import React from 'react';

class NewTask extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
  
    render(){
        return(
            <div>
                <h3>Task List</h3>
                <input name='userInput' placeholder='Enter a new task' onChange={this.props.handleInputChange} value={this.props.userInput}/>
                <button onClick={this.props.addNewTask}>Add Task</button>
            </div>
        )
    }
}
export default NewTask;














//INCOMPLETE CODE
// //adding new task to a task array on App.
// import React, { Component } from "react";

// class NewTask extends Component {
//   constructor() {
//     super();

//     this.state = {
//       input: ""
//     };

//     this.addT = this.addT.bind(this);
//   }

//   inputChange(value) {
//     this.setState({ input: value });
//   }

//   addT() {
//     this.props.add(this.state.input);
//     this.setState({ input: "" });
//   }

//   render() {
//     return (
//       <div>
//         <input
//           value={this.state.input}
//           placeholder="Enter new task"
//           onChange={e => this.inputChange(e.target.value)}
//         />

//         <button onClick={this.addT}>Add</button>
//       </div>
//     );
//   }
// }

// export default NewTask;
