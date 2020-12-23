import { useState } from 'react'
import './App.css';
import Todos from './components/Todos'
function App() {
  const [state, setState] = useState([
    {
      id: 1,
      title: 'Take out the trash',
      completed: true,
    },
      {
        id: 2,
        title: 'Take the dog out',
        completed: false
      },
      {
        id: 3,
        title: 'need to buy food',
        completed: false
      },
  ]);

const markComplete = (id) => {
state.map((todo) => {
  if(todo.id === id){
   todo.completed = !todo.completed
   console.log("found" + id)
    }
    

})
console.log(id)
console.log(state)
//  setState = ({ todos: state.todos.map(todo => {
//    console.log(todo.id)
  //  console.log(id)
  //  if(todo.id === id) {
//      setState = todo.completed = !todo.completed
//    }

//  })})
// console.log('click')
}

// console.log(markComplete)

  return (
    <div className="app">
      <Todos todos={state} markComplete={markComplete}/>
    </div>   
  );
  }
export default App
