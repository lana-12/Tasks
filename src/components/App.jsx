import React  from 'react';
import FormTask from './FormTask';
import taskReducer from './../reducers/task.reducer';
import { useSelector } from 'react-redux';
import Task from './Task';



function App() {

  //UseSelector => permet de récupérer le "state" se qui a dans le store

  const tasks = useSelector((state)=> state.taskReducer); 
  console.log(tasks);



  return (
    <div className="container">
      <h1 className='text-center'>Gestionnaire de tâches</h1>

      <FormTask />

      <section className='container'>
        <div className="task-container">

          {tasks && Array.isArray(tasks) && tasks.map((task, index) => (
            <Task task={task} key={index} />
          ))}

        </div>
      </section>
    </div>
  );
}

export default App;
