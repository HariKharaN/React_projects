import React, { Component } from "react";
import "./Todo.css";
export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task,
    };
    this.handleremove = this.handleremove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleremove() {
    this.props.removeTodo(this.props.id);
  }
  handleEdit() {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleToggle() {
    this.props.toggleTodo(this.props.id);
  }
  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div className="Todo">
          <form className="Todo-form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="task"
              value={this.state.task}
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className="Todo">
          <li
            className={
              this.props.completed ? "Todo-task completed" : "Todo-task"
            }
            onClick={this.handleToggle}
          >
            {this.props.task}
          </li>
          <div className="Todo-buttons">
            <button onClick={this.handleEdit}>
              <i class="fas fa-pen"></i>
            </button>
            <button onClick={this.handleremove}>
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
      );
    }
    return result;
  }
}
