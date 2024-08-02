import { deleteTask, editTask } from "../actions/task.action"
import { useDispatch, useSelector } from "react-redux";

import Swal from 'sweetalert2';

const Task = ({ task  }) => {
    // Dispatch dans le store, on envoi les data
    const dispatch = useDispatch()
    // Récupérer les tâches depuis le store
    const tasks = useSelector((state) => state.taskReducer);

    
    const onClickDone = (taskId) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === taskId) {
                return { ...task, done: !task.done };
            }
            return task;
        });
        const taskData = updatedTasks.find(task => task.id === taskId);
        dispatch(editTask(taskData));
    };

    const onClickDelete = (id)=> {
        Swal.fire({
            title: 'Vous confirmez la suppression?',
            text: "Cette action est irréversible !",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Oui, supprime-le !'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Supprimé!',
                    'Votre t$ache a été supprimé.',
                    'success'
                );
                dispatch(deleteTask(id))
            }
        });
        
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