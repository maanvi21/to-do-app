import React from 'react'

import { FaPen} from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
  return (
    <div className="todo">

  <div className="icons">
  <p className={`${task.completed ? 'completed' : "incompleted"}`} onClick={() => toggleComplete(task.id) }>{task.task}
  <FaPen/>
  <FaTrash/>
  </p>
  </div>
    </div>
  )
}
