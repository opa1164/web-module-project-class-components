import React from 'react';

const App = props => {
        
        if(!props.task.completed)
        {
            return(
                <div onClickCapture = {() => props.complete(props.task)}>{props.task.task}</div>
            );
        }
        return(
            <div onClickCapture = {() => props.complete(props.task)}><s>{props.task.task}</s></div>
        );
        
}

export default App;