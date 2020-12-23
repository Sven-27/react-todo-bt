import React from 'react'
import './Todos.css'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

function Todos(props) {
    console.log(props.todos)
 
console.log(props)

    return (
        props.todos.map((todo)=>(
                <TodoItem key={todo.id} todo={todo} markComplete={props.markComplete}/>
        ))
    )
};

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos
