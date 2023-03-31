
import React from 'react'

import TodoList from '../Components/TodoList'
import Add from '../Components/Add'

const Home = () => {
	return (
		<div className='w-[300px] bg-cardbg rounded-3xl py-4 shadow-2xl'>
			<Add/>
			<TodoList/>
		</div>
	)
}

export default Home
