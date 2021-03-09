// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo.js'

const App = props => {
        return(
            <div>
                {props.list.map(task => (
                    <Todo complete = {props.complete} key = {task.id} task = {task}/>
                ))}
            </div>
        );
}

export default App;