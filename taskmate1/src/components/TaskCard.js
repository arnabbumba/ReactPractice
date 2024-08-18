import React from 'react'

export const TaskCard = ({task, handleDelete}) => {
  return (
    <li className={task.status ? 'completed' : 'incomplete'}>
        <span>{task.id} - {task.name}</span>
        <button onClick={ () => handleDelete(task.id)} className='delete'>DELETE</button>
  </li>
  )
}
