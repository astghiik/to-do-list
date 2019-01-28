import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import ToDoList from './components/ToDoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: []
    };
  }
  
  addItemToList = (itemForAdd) => {
    const { toDoList } = this.state;
    if (itemForAdd.trim() && toDoList.indexOf(itemForAdd.trim()) === -1) {
      toDoList.push(itemForAdd);
      this.setState({ toDoList });
    }
  }

  removeItemFromList = (itemForRemove) => {
    const { toDoList } = this.state;
    toDoList.splice(toDoList.indexOf(itemForRemove), 1);
    this.setState({ toDoList });
  }

  render() {
    return (
      <div className="App">
        <Header addItemToList={this.addItemToList} />
        <ToDoList toDoList={this.state.toDoList} removeItemFromList={this.removeItemFromList} />
      </div>
    );
  }
}

export default App;