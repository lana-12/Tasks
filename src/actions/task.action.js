import axios from "axios";

export const GET_TASKS = "GET_TASKS";
export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const EDIT_TASK = "EDIT_TASK";

export const getTasks = () => {

    return (dispatch) => {
        return axios.get("http://localhost:3001/tasks").then((res)=> {
            console.log(res);
            dispatch({
                type: GET_TASKS,
                payload: res.data
            })
        })

    }
}

export const addTask = (data) => {

    return (dispatch) => {
        return axios.post("http://localhost:3001/tasks", data).then((res) => {
            console.log(res);
            dispatch({
                type: ADD_TASK,
                payload: res.data
            })
            
        })

    }

}


export const deleteTask = (taskId) => {
    return (dispatch) => {
        return axios.delete(`http://localhost:3001/tasks/${taskId}`).then((res) => {
            console.log(res);
            dispatch({
                type: DELETE_TASK,
                payload: taskId
            });
        }).catch(error => {
            console.error("Failed to delete task:", error);
        });
    };
};


export const editTask = (data) => {

    return (dispatch) => {
        return axios.put(`http://localhost:3001/tasks/${data.id}`, data).then((res) => {
            console.log(res);
            dispatch({
                type: EDIT_TASK,
                payload: res.data
            })

        })

    }
};
   


