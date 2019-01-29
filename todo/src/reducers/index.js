import {ADD_NEW, TOGGLE_COMPLETE} from '../actions';


let sequenceId = 0;

const initialState = {
    todos: [
        // {value: 'eat', completed: false, id: sequenceId++},
        // {value: 'sleep', completed: false, id: sequenceId++}
    ]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_NEW:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case TOGGLE_COMPLETE:
            return {
                ...state,
                todos: state.todos.map((task, id) =>
                    action.payload === id
                        ? {...task, completed: !task.completed}
                        : task
                )
            }
        default:
            return state;
    }
};

export default reducer;