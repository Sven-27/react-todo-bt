import React from 'react'
import './TodoItem.css'
import PropTypes from 'prop-types'

function TodoItem(props) {
const getStyle = () =>  {
    console.log(props.todo.completed)
return {
    background: "#f4f4f4",
    padding: '10px',
    borderBottom: "1px #ccc dotted",
    textDecorationLine: props.todo.completed ? "line-through" : "none",  
}

    //This is the long way to rigth the above
    // if(props.todo.completed) {
    //     return {
    //         textDecoration: "line-through"
    //     }
    // }else{
    //     return {
    //         textDecoration: "none"
    //     }
    // }
};
    const { id, title } = props.todo;
    return (
        <div className="todoItem" style={getStyle()}> 
            <h1>
            <input type="checkbox" onChange={() => props.markComplete(id)}/>
             {title}
            </h1>
        </div>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
