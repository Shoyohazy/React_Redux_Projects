import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [{id:1 , text : "hello mate!"}],
    isUpdate: false,
    indexOfTodo: null,
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers:{
        addTodo : (state , action) => {
           const todo = {
            id:nanoid(),
            text: action.payload
           }
           state.todos.push(todo)
        },
        deleteTodo:(state , action)=>{
             state.todos = state.todos.filter((todo)=>todo.id!==action.payload)
        },
        updateTodo:(state , action)=>{
            const { input, indexOfTodo } = action.payload;
            
            state.todos[indexOfTodo].text = input;
        },
        changeIsUpdate: (state) => {
            state.isUpdate = !state.isUpdate;
        }, 
        changeIndexOfTodo: (state, action) => {
            state.indexOfTodo = action.payload;
        }
    }
})

export const {addTodo , deleteTodo , updateTodo, changeIsUpdate, changeIndexOfTodo} = todoSlice.actions;


export default todoSlice.reducer;