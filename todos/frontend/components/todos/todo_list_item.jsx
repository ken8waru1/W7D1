import React from 'react';

const ToDoListItem = ({todos}) => (
  todos.map(todo => <li key={todo.id}>{todo.title}</li>)
)

export default ToDoListItem