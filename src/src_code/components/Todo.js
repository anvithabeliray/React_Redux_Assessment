import React from "react";
import AddItem from "./AddItem";
import ToDoList from "./TodoList";
import content from "../mock/MockContent";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoLists: [],
    };
  }

  addItem(item) {
    this.state.todoLists.unshift({
      task: item,
    });
    this.setState({
      todoLists: this.state.todoLists,
    });
  }

  findItem(item) {
    return this.state.todoLists.filter((element) => element.task === item)[0];
  }

  saveItem(oldItem, newItem) {
    let selectedItem = this.findItem(oldItem);
    selectedItem.task = newItem;
    this.setState({ todoLists: this.state.todoLists });
  }
  
  deleteItem(item) {
    let index = this.state.todoLists.map((element) => element.task).indexOf(item);
    this.state.todoLists.splice(index, 1);
    this.setState({ todoLists: this.state.todoLists });
  }

  render() {
    return (
      <div className="to-do-app">
        <div className="header">
          <h1>{this.props.Content.heading}</h1>
        </div>
        <AddItem addItem={this.addItem.bind(this)} />
        <ToDoList
          todoLists={this.state.todoLists}
          deleteItem={this.deleteItem.bind(this)}
          saveItem={this.saveItem.bind(this)}
        />
      </div>
    );
  }
}

Todo.defaultProps = {
  Content: content,
};

export default Todo;
