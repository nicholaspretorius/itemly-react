import guid from 'guid';
import { createStore } from 'redux';

const todos = [
    {
        id: guid.raw(),
        text: 'Learn React', 
        done: false
    }, {
        id: guid.raw(),
        text: 'Learn Vue', 
        done: false
    }, {
        id: guid.raw(),
        text: 'Learn Angular', 
        done: true
    }
];

const defaultState = {
    todos,
    showDone: true
};

const reducer = (state = defaultState, action) => {
    console.log(action);
    const { type, todo, showDone } = action;
    
    if (type === 'ADD_TODO') {
        state = {
            ...state,
            todos: [...state.todos, todo]
        }
    }

    if (type === 'UPDATE_TODO') {
       state = {
           ...state,
           todos: state.todos.map(_todo => _todo.id === todo.id ? todo : _todo)
       } 
    }

    if (type === 'SHOW_DONE') {
        state = {
            ...state,
            showDone 
        }
    }

    return state;
}

export default () => createStore(reducer);