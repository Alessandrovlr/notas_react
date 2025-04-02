import './App.css';
import React, {useState} from 'react';
import InputTask from './components/inputTarefa/inputBotao';
import TaskList from './components/taskList/taskLista';


function App() {

  const [arrayTask, setArrayTask] = useState([]);

  return (
    <div className="App">
      <InputTask setArrayTask={setArrayTask} arrayTask={arrayTask}/>
      <TaskList arrayTask={arrayTask}></TaskList>
    </div>
  );
}

export default App;
