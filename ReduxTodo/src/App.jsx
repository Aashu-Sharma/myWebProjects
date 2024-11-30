import { useState } from 'react'
import './App.css'
import AddTodo from './comps/AddTodo';
import Todos from './comps/Todos';
import {Provider} from 'react-redux';
import {store} from './app/store';
import TodoList from './comps/TodoList';

function App() {

  return ( 
    <Provider store = {store} >
      <h1>Learning Redux</h1>
      <AddTodo/>
      <TodoList/>
    </Provider>
  )
}

export default App
