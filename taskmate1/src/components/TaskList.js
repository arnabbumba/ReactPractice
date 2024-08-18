import React from 'react'
import { useState } from 'react';

export const TaskList = (props) => {


    const [tasks, setTasks] = useState([
        {id: 1234 , name: "Putu", status: true},
        {id: 4321 , name: "Putu1", status: false},
        {id: 9876 , name: "Putu2", status: false}
      ]);
    
      const [show, setShow] = useState(true);
    
    function handleDelete(id){
    //console.log(id);
      setTasks(tasks.filter(task => task.id !== id))
    }

  return (
    <>
    <h1>Task Lists {props.title} - {props.subtitle}</h1>
      <ul>
        <button onClick={ () => setShow(!show)} className='trigger'>TOGGLE</button>
        { show && tasks.map( (task) => (
          <li key={task.id} className={task.status ? 'completed' : 'incomplete'}>
            <span>{task.id} - {task.name}</span>
            <button onClick={ () => handleDelete(task.id)} className='delete'>DELETE</button>
          </li>
        ))}
      </ul>
      </>
  )
}
