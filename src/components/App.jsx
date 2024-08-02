import React  from 'react';
import FormTask from './FormTask';
import taskReducer from './../reducers/task.reducer';
import { useSelector } from 'react-redux';
import Task from './Task';



function App() {

  //UseSelector => permet de récupérer le "state" se qui a dans le store
  const tasks = useSelector((state) => state.taskReducer) || []; 

  // Trie
  const sortedTasks = Array.isArray(tasks)
    ? [...tasks].sort((a, b) => {
      if (a.done !== b.done) {
        return a.done ? 1 : -1;
      }
      return a.title.localeCompare(b.title);
    })
    : [];

  return (
    <div className="container">
      <h1 className='text-center titleReact'>Gestionnaire de tâches</h1>
          <FormTask />
      <section className='container'>
        <div className="task-container">
          {sortedTasks.length > 0 ? (
            sortedTasks.map((task) => (
              <Task task={task} key={task.id} />
            ))
          ) : (
            <p>Aucune tâche à afficher</p> 
          )}

        </div>
      </section>
    </div>
  );
}

export default App;
