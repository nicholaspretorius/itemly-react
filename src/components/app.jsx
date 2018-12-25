import React from 'react';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import ShowDone from './ShowDone';

const App = () => (
    <div>
        <h1>Itemly Todo | React</h1>
        <TodoList></TodoList>
        <TodoInput></TodoInput>
        <ShowDone></ShowDone>   
    </div>
);

export default App;