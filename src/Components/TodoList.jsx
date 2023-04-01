
import React,{ createRef } from 'react';

import TodoCard from './TodoCard';

import { useSelector } from 'react-redux';
import { CSSTransition,TransitionGroup } from 'react-transition-group';

import './Card.css'

const TodoList = () => {

	const todos = useSelector((state) => state.todos );

	return (
		<div className='list'>
			<TransitionGroup>
				{todos.map((value) => {

					const nodeRef = createRef(null)

					return (
						<CSSTransition nodeRef={ nodeRef } key={ value.id } classNames='cards' timeout={ 500 }>
							<TodoCard reference={ nodeRef } id={ value.id } text = { value.text } completed = { value.completed } key={ value.id }/>
						</CSSTransition>
					)
				})}
			</TransitionGroup>
		</div>
	)
}

export default TodoList
