import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers';
import { addToList, removeFromList } from './actions';

const store = createStore(allReducers);
store.subscribe(() => console.log(store.getState()))
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: []
    };
  }
  
  // addItemToList = itemForAdd => {
  //   const { toDoList } = this.state;
  //   if (itemForAdd.trim() && toDoList.indexOf(itemForAdd.trim()) === -1) {
  //     toDoList.push(itemForAdd);
  //     store.dispatch(addToList(itemForAdd));
  //     //this.setState({ toDoList });
  //   }
  // }

  // removeItemFromList = itemForRemove => {
  //   const { toDoList } = this.state;
  //   toDoList.splice(toDoList.indexOf(itemForRemove), 1);
  //   store.dispatch(removeFromList(itemForRemove));
  //   //this.setState({ toDoList });
  // }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header/>
          <ToDoList/>
        </div>
      </Provider>
    );
  }
}

export default App;