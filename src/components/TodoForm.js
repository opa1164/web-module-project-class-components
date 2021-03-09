import React from 'react';

const App = props => {
        return(
            <form className='form container' onSubmit={props.submit}>
                <input
                    type='text'
                    value={props.item}
                    onChange={props.change}
                />
                <button>New To-do</button>
            </form>
        );
}

export default App;