import React from "react";
import "./App.css";
import NewTask from "./components/NewTask";
import TaskList from "./components/TaskList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      taskList: ["go for a walk", "go shopping"],
      userInput: ""
    };
  }
  handleInputChange = e => {
    this.setState({
      userInput: e.target.value
    });
  };
  addNewTask = () => {
    const { taskList, userInput } = this.state;
    this.setState({
      // taskList: [...taskList,userInput]
      taskList: taskList.concat(userInput),
      userInput: ""
    });
    // console.log(taskList)
  };
  render() {
    return (
      <div className="App">
        <NewTask
          addNewTask={this.addNewTask}
          handleInputChange={this.handleInputChange}
          userInput={this.state.userInput}
        />
        <TaskList taskList={this.state.taskList} />
      </div>
    );
  }
}

export default App;









//responsible for getting new tasks and
// storing the list of tasks.
//should create a list of TOdo components passing down a task as a prop

  
  
