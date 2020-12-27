import React from 'react'
import './Todos.css'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

function Todos(props) {
    console.log(props.todos)
 
console.log(props)

    return (
        props.todos.map((todo)=>(
                <TodoItem key={todo.id} todo={todo} markComplete={props.markComplete} delTodo={props.delTodo}/>
        ))
    )
};

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

export default Todos
