import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Todos from './components/Todos'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import About from './components/pages/About'
// import { v4 }  from 'uuid';
import axios from 'axios'




function App() {
  const [state, setState] = useState([]);

 useEffect(() => {
 axios("https://jsonplaceholder.typicode.com/todos?_limit=10")
 .then((response) => {
   setState(response.data)
 })
 }, [])
    


const markComplete = (id) => {
  // console.log(state)
state.map((todo) => {
  if(todo.id === id){
    todo.completed = !todo.completed
   setState([...state])
  //  console.log(state)
  //  console.log("found" + id)
    }
    return todo

})
}

//delete todo
const delTodo = (id) => {
  axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  .then((res) => {
    setState([...state.filter(todo => todo.id !== id)])
  })
}


//addTodo
 function addTodo(title){
  //  const newTodo = {
  //    id: v4(),
  //    title: title,
  //    completed: false,
  //  }
  axios.post("https://jsonplaceholder.typicode.com/todos", {
    title: title,
    completed: false,
  })
  .then((res) => {
    setState([res.data, ...state])
  })
  
}

  return (
    <Router>
    <div className="app">
      <div className="app__container">
      <Header />
      <Route exact path="/" render={props => (
        <React.Fragment>
        <AddTodo addTodo={addTodo} />
      <Todos todos={state} markComplete={markComplete} delTodo={delTodo}/>
        </React.Fragment>
      )} />
      <Route path="/about" component={About} />
      
      </div>
      
    </div>   
    </Router>
  );
  }
export default App
