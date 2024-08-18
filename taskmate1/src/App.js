//Display one List and delete the id after clicking the delete button
import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';

function App() {
  return (
    <div className="App">
      <Header/>
      <TaskList title="Random" subtitle="Putu"/>
    </div>
  );
}

export default App;
