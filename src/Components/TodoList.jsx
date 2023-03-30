
import React from 'react'

import TodoCard from './TodoCard'

import { useSelector } from 'react-redux'


const TodoList = () => {

	const todos = useSelector((state) => state.todos)

	return (
		<div>
			{todos.map((value) => {
				return <TodoCard id={ value.id } text = { value.text } completed = { value.completed } key={ value.id }/>
			})}
		</div>
	)
}

export default TodoList
