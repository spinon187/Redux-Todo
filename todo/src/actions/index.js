export const ADD_NEW = 'ADD_NEW';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const DELETE_TASK = 'DELETE_TASK';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

let sequenceId = 0;

export const addNew = taskName => {
    return {
        type: ADD_NEW,
        payload: {
            value: taskName,
            // id: sequenceId++,
            completed: false
        }
    }
}

export const toggleComplete = id => {
    return {
        type: TOGGLE_COMPLETE,
        payload: id
    }
}

export const deleteTask = id => {
    return {
        type: DELETE_TASK,
        payload: id
    }
}

export const clearCompleted = () => {
    return {
        type: CLEAR_COMPLETED,
        payload: true
    }
}