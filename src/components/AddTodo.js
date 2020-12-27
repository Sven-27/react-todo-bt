import React, { useState} from 'react'
import PropTypes from 'prop-types'

function AddTodo(props) {
    const [state, setState] = useState([
        {
        title: 'hallo'
        }
    ]);

  const onChange = (e) => {
    setState({[e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        props.addTodo(state.title);
        setState({title: ''})
    }

    return (
        <div className="addTodo">
           <form onSubmit={onSubmit} style={{display: 'flex'}}>
               <input type="text" name="title" placeholder="Add Todo..." value={state.title} onChange={onChange} style={{flex: '10', padding: '5px'}}/>
               <input type="submit" value="Submit"  className="btn" style={{flex: '1'}} />

           </form>
        </div>
    )
}

AddTodo.propTypes = {
    AddTodo: PropTypes.func.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

export default AddTodo
