import React, { Component } from 'react'
import './App.css';
import TodoItem from './components/TodoItem'

class App extends Component {
  constructor() {
    super();
    this.todoItems = [
      {
        title: "Go to market",
        isComplete: true
      },
      {
        title: "Cooking",
        isComplete: true
      },
      {
        title: "Play socer",
        isComplete: false
      }
    ];
  }
  render() {
    return (
     
      <div className="App">
        {
          this.todoItems.length>0 && this.todoItems.map((item, index) => {
            return <TodoItem item={item} key={index} />
          })
        }
        {this.todoItems.length===0 && 'Nothing here'}
      </div>
    );
  }
}

export default App;
