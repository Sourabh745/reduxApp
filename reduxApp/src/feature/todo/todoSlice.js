import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [{id: 1, text: 'Sourabh'}]
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers: {
        addTodo: (state,action) => {
            const todo = {
                id: nanoid(),  // used to generate unique id automatically
                text: action.payload 
            }
            state.todos.push(todo) // oush new todo in todos
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})
export const {addTodo, removeTodo} = todoSlice.actions // 
export default todoSlice.reducer // to export reducer in store.js