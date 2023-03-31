
import React from 'react'

import TodoCard from './TodoCard'

import { useSelector } from 'react-redux'

import { useAutoAnimate } from '@formkit/auto-animate/react'

const TodoList = () => {

	const [ref] = useAutoAnimate()

	const todos = useSelector((state) => state.todos)

	return (
		<div ref={ ref }>
			{todos.map((value) => {
				return <TodoCard id={ value.id } text = { value.text } completed = { value.completed } key={ value.id }/>
			})}
		</div>
	)
}

export default TodoList
