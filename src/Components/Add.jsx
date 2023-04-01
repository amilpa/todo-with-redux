
import React, { useState } from 'react'
import { addTodo } from '../redux/todoSlice'

import { useDispatch } from 'react-redux'

import { AiFillPlusCircle } from 'react-icons/ai'

const Add = () => {

	const [input , setInput] = useState('') 

	const dispatch = useDispatch()

	const handleClick = (event) => {
		event.preventDefault()
		if(input)
		{
			dispatch(addTodo({text : input}))
			setInput('')
		}
	}

	return (
		<div>
			<h1 className='bg-secondary text-white text-3xl text-center py-[3px] font-bold shadow-xl'>ToDo List</h1>
			<form className='py-4 flex justify-center'>
				<input type="text" value={input} onChange={(event) => setInput(event.target.value)} placeholder='Add item...' className='bg-cardbg border-b-4 border-secondary outline-none text-xl text-center'/>
				<button onClick={handleClick}><AiFillPlusCircle className='text-secondary text-4xl'/></button>
			</form>
		</div>
	)
}

export default Add
