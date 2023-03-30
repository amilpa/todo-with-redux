
import React from 'react'

const TodoCard = ({ id , text , completed}) => {
	return (
		<div>
			<input type="checkbox" />
			<p>{ text }</p>
			<button>Delete</button>
		</div>
	)
}

export default TodoCard
