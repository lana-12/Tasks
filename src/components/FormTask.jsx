import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../actions/task.action";



const FormTask = () => {

    // Récupérer les tâches depuis le store
    const tasks = useSelector((state) => state.taskReducer);

    const form = useRef();

    // Dispatch dans le store, on envoi les data
    const dispatch = useDispatch()
    

    const handleTitle = async (e) => {
        console.log('Task ' + e.target)
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
        console.log(form.current[0].value)

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
            <form onSubmit={handleSubmit} ref={form}>
                <input
                name="title"
                    type="text"
                    // value={task}
                    onChange={handleTitle}
                    placeholder="Ajouter une tâche"
                />
                <button type="submit">Ajouter une tâche</button>
            </form>
        
        </>
    );
}

export default FormTask;