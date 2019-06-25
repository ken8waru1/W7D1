import React from 'react';
import ToDoListItem from './todo_list_item';

const ToDoList = ({todos}) => (
  <ul>
    <ToDoListItem todos={todos}/> 
  </ul>
)

export default ToDoList