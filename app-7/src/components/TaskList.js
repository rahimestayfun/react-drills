import React from "react";
import Todo from "./Todo";
class TaskList extends React.Component {
  render() {
    let mappedTaskList = this.props.taskList.map((el, i) => {
      return <Todo key={i} task={el} />;
    });
    return <div>{mappedTaskList}</div>;
  }
}
export default TaskList;
