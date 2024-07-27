import { useState } from "react";
import { deleteTask, editTask } from "../actions/task.action"
import { useDispatch, useSelector } from "react-redux";

const Task = ({ task  }) => {
    // Dispatch dans le store, on envoi les data
    const dispatch = useDispatch()
    // Récupérer les tâches depuis le store
    const tasks = useSelector((state) => state.taskReducer);




    const onClickDone = (id)=> {
        console.log(`Cliquer sur btn pour la tâche avec l'ID: ${id}`);
        

        // const taskData = {
        //     id: id,
        //     title: task.title,
        //     done: task.done ? true : false
        // };

        // dispatch(editTask(taskData));


        // const copy_tasks = [...tasks];
        // copy_tasks.forEach((task) => {
        //     if (task.id === task_id) task.done = !task.done;
        // })
    }

    const onClickDelete =  (id)=> {
        console.log(`Cliquer sur delete pour la tâche avec l'ID: ${id}`);
        dispatch(deleteTask(id))
    }

    return (
        <section className="d-flex justify-content-between my-3 ">
            <h2 className={task.done ? "text-decoration-line-through" : ""}>{task.title}</h2>
            <div className="d-flex gap-3">
                <button
                    onClick={() => { onClickDone(task.id) }}
                    className={"btn btn-success"} >{task.done ? "Invalidé" : "Validé"}</button>
                <button
                    onClick={() => { onClickDelete(task.id) }}
                    className="btn btn-danger">Supprimer</button>
            </div>

        </section>
    );
}

export default Task;