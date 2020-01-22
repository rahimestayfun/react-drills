import React from "react";
import "./App.css";
import Todo from "./components/Todo";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      taskList: ["go to grocery", "mop the floors"],
      userInput: ""
    };
  }
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleAdd = () => {
    const { taskList, userInput } = this.state;
    this.setState({
      // taskList:[...taskList,userInput]
      taskList: taskList.concat(userInput),
      userInput: ""
    });
  };
  render() {
    let mappedTask = this.state.taskList.map((el, i) => {
      return <Todo key={i} task={el} />;
    });
    return (
      <div className="App">
        <div>
          <h2>To Do List</h2>
          <input
            name="userInput"
            placeholder="Enter a new Task"
            value={this.state.userInput}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleAdd}>Add Task</button>
        </div>
        {mappedTask}
      </div>
    );
  }
}

export default App;
