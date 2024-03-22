import React, { useState } from 'react';
import { addTodo } from '../feature/todo/todoSlice';
import {useDispatch} from 'react-redux';

function Addtodo() {

    const [input, setInput] = useState(''); 
    const dispatch = useDispatch()

    const addTodoHandler = (e) =>{
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <div>
            <form onSubmit={addTodoHandler} className='mb-3'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Todos</label>
                    <input type="text" className="form-control" value={input} onChange={(e) => setInput(e.target.value)}/>  
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Addtodo;
