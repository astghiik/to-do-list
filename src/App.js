import React from 'react';
import './App.css';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers';

const store = createStore(allReducers);
store.subscribe(() => console.log(store.getState()))

function App () {
  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
        <ToDoList/>
      </div>
    </Provider>
  );
}

export default App;