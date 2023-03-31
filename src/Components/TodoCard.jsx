
import React from 'react'

import { useDispatch } from 'react-redux'

import { deleteTodo,completeTodo } from '../redux/todoSlice'

import { MdDelete } from 'react-icons/md'


const TodoCard = ({ id , text , completed}) => {

	const dispatch = useDispatch()

	const handleDelete = () => {
		dispatch(deleteTodo({id : id}))
	}

	const handleComplete = () => {
		dispatch(completeTodo({id : id}))
	}

	return (
		<div className={`flex justify-between text-xl px-5 mb-3 ${completed ? 'bg-green-200': ''}`}>
			<input type="checkbox" onChange={handleComplete}/>
			<p className='flex-grow ml-3'>{ text }</p>
			<button onClick={handleDelete}><MdDelete className='text-secondary'/></button>
		</div>
	)
}

export default TodoCard
