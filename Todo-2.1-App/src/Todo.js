import React from "react";
import useToggle from "./hooks/useToggle";
import EditTodoForm from "./EditTodoForm";
import ListItem from "@material-ui/core/ListItem";
import CheckBox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

function Todo({ task, completed, removeTodo, id, toggleTodo, editTodo }) {
    const [isEditing, toggleIsEditing] = useToggle(false);
  return (
    <ListItem style={{height: "64px"}}>
    {isEditing ? <EditTodoForm editTodo={editTodo} id={id} task={task} toggle={toggleIsEditing} /> :
    <> 
      <CheckBox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)}/>
      <div style={{overflow: 'hidden'}}>
      <ListItemText style={{fontSize:"15px" ,textDecoration: completed ? "line-through" : "none" }}>{task}</ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label='Delete' onClick={() => removeTodo(id)}>
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label='Edit' onClick={toggleIsEditing}>
          <EditIcon />
        </IconButton>
      </ListItemSecondaryAction>
      </div>
    </>
      }
    </ListItem>
  );
}

export default Todo;
