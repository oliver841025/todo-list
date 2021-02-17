import React from "react";
import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const Todo = ({ todo, toggleComplete, removeTodo }) => {
  const handleCheckBoxClick = () => {
    toggleComplete(todo.id);
  };

  const handleRemoveClick = () => {
    removeTodo(todo.id);
  };

  return (
    <ListItem style={{ display: "flex" }}>
      <Checkbox
        checked={todo.completed}
        onClick={handleCheckBoxClick}
      ></Checkbox>
      <Typography
        variant="body1"
        style={{
          textDecoration: todo.completed ? "Line-through" : null,
        }}
      >
        {todo.task}
      </Typography>
      <IconButton onClick={handleRemoveClick}>
        <CloseIcon></CloseIcon>
      </IconButton>
    </ListItem>
  );
};

export default Todo;
