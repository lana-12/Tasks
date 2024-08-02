import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../actions/task.action";



const FormTask = () => {

    // Récupérer les tâches depuis le store
    const tasks = useSelector((state) => state.taskReducer);
    // Dispatch dans le store, on envoi les data
    const dispatch = useDispatch()

    const form = useRef();

    const handleTitle = async (e) => {
        // console.log('Task ' + e.target)
    }

    const getNextId = () => {
        const numericIds = tasks
            .map(task => parseInt(task.id))
            .filter(id => !isNaN(id));
        const maxId = numericIds.length ? Math.max(...numericIds) : 0;
        return maxId + 1;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const taskData = {
            id: getNextId(),
            title: form.current[0].value,
            done: false
        };
        dispatch(addTask(taskData));
        form.current.reset();
    };

    return (
        <>
            <form onSubmit={handleSubmit} ref={form} className="d-flex gap-2 w-100 align-items-center mb-5">
                <input
                name="title"
                    type="text"
                    onChange={handleTitle}
                    placeholder="Ajouter une tâche"
                    className="form-control w-50"
                />
                <button className="btn btn-primary" type="submit">Ajouter</button>
            </form>
        </>
    );
}

export default FormTask;