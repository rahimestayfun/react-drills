//ASK MENTOR


// import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import Todo from "./Todo";

// class App extends Component {
//   constructor(){
//     super()
//     this.state={
//       list:[],
//       task: ''
//     }
//     this.addTask= this.addTask.bind(this)
//   }
//     handleTask(value){
//        this.setState={ task: value }
//       }
//     addTask(){
//       this.setState={
//       const {task}= this.state
//       let copyList = list.slice()
//       copyList.push({task})
//     }
//   }
    

//   render() {
//     let list = this.state.list.map((element,index)=>{
//       return <p key={index}> {element}</p>
//     })
//     return (
//       <div className="App">
//         <h1>MY TO-DO list</h1>
//         <input
//             value={this.state.input}
//             placeholder="Enter new task"
//             onChange={e => this.handleInputChange(e.target.value)}
//           />
//           <Todo/>

//       </div>
//     );
//   }
// }

// export default App;









//responsible for getting new tasks and
// storing the list of tasks.
//should create a list of TOdo components passing down a task as a prop

