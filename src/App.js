import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
        toDoList: [],
        item: '',
    };
    console.log(this.state.toDoList);
  }

  setItem = (event) => {
    this.setState({item: event.target.value});
    console.log(this.state.item);
  }

  removeCompleted = () =>{
    const newArr = this.state.toDoList.filter(element => !element.completed);
    this.setState({toDoList:newArr});
    console.log(this.state.toDoList);
  }

  setCompleted = (event) => {
    event.completed = !event.completed;
    this.forceUpdate()
  }

  submit = (event)=> {
    event.preventDefault();
    this.state.toDoList.push({
      task: this.state.item,
      id: Date.now(),
      completed: false
    });
    this.setState({item:''});
    console.log(this.state.toDoList);
  }
  
  render() {
    


    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm item = {this.state.item} change = {this.setItem} submit = {this.submit}/>
        <button onClick = {this.removeCompleted}>Remove Completed Tasks</button>
        <TodoList list = {this.state.toDoList} complete = {this.setCompleted}/>
      </div>
    );
  }
}

export default App;
