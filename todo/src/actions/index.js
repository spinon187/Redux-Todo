export const ADD_NEW = 'ADD_NEW';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';

let sequenceId = 0;

export function addNew(taskName){
    return {
        type: ADD_NEW,
        payload: {
            value: taskName,
            id: sequenceId++,
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