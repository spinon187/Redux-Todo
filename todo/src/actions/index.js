export const ADD_NEW = 'ADD_NEW';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';

let sequenceId = 0;

// export const addNew = value => {
//     return {
//         type: ADD_NEW,
//         id: sequenceId++,
//         completed: false,
//         payload: value
//     }
// }

export function addNew(value){
    return {
        type: ADD_NEW,
        payload: value
    }
}

export const toggleComplete = state => {
    return {
        type: TOGGLE_COMPLETE,
        payload: !state.completed
    }
}