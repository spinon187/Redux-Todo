import {ADD_NEW, TOGGLE_COMPLETE} from '../actions';


const initialState = {
    todos: [
        // {value: 'eat', completed: false, id: sequenceID++},
        // {value: 'sleep', completed: false, id: sequenceID++}
    ]
}

const todos = (state = initialState, action) => {
    switch(action.type) {
        case ADD_NEW:
            return {
                ...state,
                value: action.payload
            }
        case TOGGLE_COMPLETE:
            return {
                ...state,
                completed: action.payload
            }
        default:
            return state;
    }
};

export default todos;