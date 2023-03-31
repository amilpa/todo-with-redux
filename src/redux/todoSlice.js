
import { createSlice } from "@reduxjs/toolkit";

import { nanoid } from "nanoid";

const todoSlice = createSlice({
	name : "todo",
	initialState : [
		{
			id : nanoid(),
			text : "this is todo1",
			completed : false
		},
		{
			id : nanoid(),
			text : "this is todo2",
			completed : false
		},
		{
			id : nanoid(),
			text : "this is todo3",
			completed : false
		},
	],
	reducers : {
		addTodo : (state,action) => {
			const newTodo = {
				id : Date.now(),
				text : action.payload.text,
				completed : false
			};
			state.push(newTodo);
		},
		deleteTodo : (state,action) =>{
			return state.filter((val) => val.id!== action.payload.id);
		},
		completeTodo : (state,action) =>{
			const index = state.findIndex((val)=> val.id === action.payload.id)
			state[index].completed = !state[index].completed
		},
	}
})

export const { addTodo,deleteTodo,completeTodo }  = todoSlice.actions;

export default todoSlice.reducer;


