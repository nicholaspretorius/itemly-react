import React from 'react';
import { connect } from 'react-redux';
import guid from 'guid';

const TodoInput = ({ addTodo }) => (
    <div>
        <form onSubmit={ addTodo }>
            <input type="text" placeholder="Add a new todo"/>
        </form>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    addTodo(e) {
        e.preventDefault();
        let input = e.target.elements[0];
        let todo = { id: guid.raw(), text: input.value, done: false };
        dispatch({ type: "ADD_TODO", todo });
        input.value = "";
    }
});

export default connect(null, mapDispatchToProps)(TodoInput);
