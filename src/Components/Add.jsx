
import React, { useState } from 'react'
import { addTodo } from '../redux/todoSlice'

import { useDispatch } from 'react-redux'

const Add = () => {

	const [input , setInput] = useState('') 

	const dispatch = useDispatch()

	const handleClick = (event) => {
		event.preventDefault()
		dispatch(addTodo({text : input}))
	}

	return (
		<div>
			<form>
				<input type="text" value={input} onChange={(event) => setInput(event.target.value)}/>
				<button onClick={handleClick}>Submit</button>
			</form>
		</div>
	)
}

export default Add
