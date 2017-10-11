import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state = {
      todos: [
        {id: 1, name: 'Learn JSX', isComplete: true},
        {id: 2, name: 'Build Something', isComplete: false},
        {id: 3, name: 'Learn more JSX', isComplete: false},
        {id: 4, name: 'Build something Bigger', isComplete: false},
        {id: 5, name: 'Learn Redux', isComplete: false}
      ]
    }
  } 

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Todo List</h2>
        </div>
        
        <div className="Todo-App">
          <form action="">
            <input type="text" />
          </form>

          <div className="Todo-List">
            <ul>
              {this.state.todos.map(todo => 
                <li key={todo.id}> {todo.name} 
                  <input type="checkbox" defaultChecked={todo.isComplete} />
                </li> )}
            </ul>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
