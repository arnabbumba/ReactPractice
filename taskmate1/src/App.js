//Display one List and delete the id after clicking the delete button
import { useState } from 'react';
import './App.css';

function App() {

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
    <div className="App">
      <h1>Task Lists</h1>
      <ul>
        <button onClick={ () => setShow(!show)} className='trigger'>TOGGLE</button>
        { show && tasks.map( (task) => (
          <li key={task.id} className={task.status ? 'completed' : 'incomplete'}>
            <span>{task.id} - {task.name}</span>
            <button onClick={ () => handleDelete(task.id)} className='delete'>DELETE</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
