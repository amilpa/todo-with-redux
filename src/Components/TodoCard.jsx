
import React from 'react'

import { useDispatch } from 'react-redux'

import { deleteTodo } from '../redux/todoSlice'

const TodoCard = ({ id , text , completed}) => {

	const dispatch = useDispatch()

	const handleDelete = () => {
		dispatch(deleteTodo({id : id}))
	}

	return (
		<div>
			<input type="checkbox" />
			<p>{ text }</p>
			<button onClick={handleDelete}>Delete</button>
		</div>
	)
}

export default TodoCard
