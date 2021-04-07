import React from "react";
import TodoItem from "./components/TodoItem";
import todosData from "./components/todosData";
import Header from "./components/Header";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
      count: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClickButton = this.handleClickButton.bind(this);
  }

  handleClickButton() {
    this.setState((counting) => {
      return {
        count: counting.count + 2,
      };
    });
  }

  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos,
      };
    });
  }

  render() {
    const todoItems = this.state.todos.map((item) => (
      <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));

    return (
      <div className="todo-list">
        <Header count={this.state.count} buttonClick={this.handleClickButton} />
        {todoItems}
      </div>
    );
  }
}

export default App;
