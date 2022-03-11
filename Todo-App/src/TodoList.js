import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import './TodoList.css'
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }
  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  }
  remove(id) {
    this.setState({
      todos: this.state.todos.filter(t => t.id !== id)
    });
  }
  update(id, updatedtask) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) return { ...todo, task: updatedtask };
      // check for the todo uuid which is need to be changed
      // if found the todo others components is spreaded but the task:"****" is changed to updatedTask
      return todo;
    });
    this.setState({ todos: updatedTodos });
}
toggleCompletion(id){
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) return { ...todo, completed: !todo.completed };
      // check for the todo uuid which is need to be changed
      // if found the todo others components is spreaded but the task:"****" is changed to updatedTask
      return todo;
    });
    this.setState({ todos: updatedTodos }); 
  }
  render() {
    const todos = this.state.todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          id={todo.id}
          task={todo.task}
          removeTodo={this.remove}
          completed={todo.completed}
          updateTodo = {this.update}
          toggleTodo = {this.toggleCompletion}
        />
      );
    });
    return (
      <div className="TodoList">
        <h1>React Todo list<span>A Simple React Todo List App</span> </h1>
        <ul>{todos}</ul>
        <NewTodoForm createTodo={this.create} />
      </div>
    );
  }
}

export default TodoList;
